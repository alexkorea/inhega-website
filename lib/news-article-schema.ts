/**
 * 인허가 뉴스 기사(article) 스키마 — 맥7 20260923-1715 지시 1.
 *
 * 맥6 로컬 모델이 원문을 읽고 만든 해설 기사를 n8n(RW-04)이 보내면
 * `/news/<slug>` 개별 페이지로 발행된다. 이 모듈은 **정제와 게이트**만 맡는다.
 *
 * 설계 원칙 두 가지:
 *  1. **기사는 나중에 채운다.** 요약(NewsItem)이 먼저 게시되고 기사는 뒤따라 온다.
 *     그래서 ingest 는 부분 병합(PATCH 성격)이어야 하고, 기사 없는 항목도 정상이다.
 *  2. **게이트는 런타임에 있어야 한다.** 본문이 재배포 없이 KV 로 들어오므로
 *     빌드 게이트가 잡을 수 없다. 금지 표현·메타 길이는 수신 시점에 막고,
 *     불합격 기사는 조용히 버리지 않고 응답으로 사유를 돌려준다(n8n 이 재생성).
 */

// 한국어 SERP 는 픽셀폭 기준이라 영문보다 훨씬 일찍 잘린다 — 50자를 넘기면 말줄임표가 붙는다.
// (맥7 20260923-1825 지시 4: 35~60 → 25~50. meta_description 은 80~150 유지.)
export const META_TITLE_MIN = 25
export const META_TITLE_MAX = 50
export const META_DESC_MIN = 80
export const META_DESC_MAX = 150

export const MAX_SECTIONS = 12
export const MAX_BLOCKS_PER_SECTION = 30
export const MAX_FAQ = 12
export const MAX_KEYWORDS = 15

export type NewsArticleSection = {
  h2: string
  /** 문단·목록 블록 배열. 수신 시 마크다운 문자열을 빈 줄 기준으로 쪼개 정규화한다. */
  body: string[]
}

export type NewsArticleFaq = { q: string; a: string }

export type NewsArticle = {
  meta_title: string
  meta_description: string
  h1: string
  lead: string
  sections: NewsArticleSection[]
  faq: NewsArticleFaq[]
  keywords: string[]
  disclaimer: string
  generated_at: string
  model: string
  /** n8n 이 별도로 만든 OG 카드 절대 URL. 없으면 og-pipeline 카드 → 기본 이미지 순으로 폴백. */
  og_image: string
}

/* ────────────────────────── 금지 표현 게이트 ──────────────────────────
 * 행정사사무소는 변호사·법무법인을 표방할 수 없고(변호사법), 인허가 결과를
 * 보장할 수 없으며, 자동 생성 기사에 서비스 가격을 실으면 안 된다.
 * 규제 원문에 나오는 과태료 금액까지 막으면 오탐이 나므로, 금액은 **가격 문맥**
 * (수수료·비용·요금…)과 붙어 있을 때만 잡는다.
 */
export const BANNED_PATTERNS: { re: RegExp; label: string }[] = [
  { re: /변호사|법무법인|법률사무소|로\s?펌/, label: '변호사·법무법인 표현(변호사법 위반)' },
  { re: /보장(?:합니다|해\s?드립|해드립|됩니다|드립니다|을\s?약속)/, label: '결과 보장 표현' },
  { re: /100\s?%\s?(?:승인|허가|보장|성공)/, label: '100% 승인·보장 표현' },
  { re: /(?:반드시|무조건|틀림없이)\s?(?:승인|허가|통과)/, label: '무조건 승인 표현' },
  {
    re: /(?:수수료|수임료|상담료|대행료|비용|요금|가격|견적)[^.\n]{0,24}?[0-9][0-9,]*\s*(?:원|만원|천원|억원)/,
    label: '서비스 가격·수수료 금액',
  },
  { re: /(?:수수료|수임료|대행료|상담료)\s*[:：]\s*[0-9₩]/, label: '서비스 가격·수수료 금액' },
]

/** 기사 전체에서 금지 표현을 찾는다. 통과면 빈 배열. */
export function scanBanned(text: string): string[] {
  const hits = new Set<string>()
  for (const { re, label } of BANNED_PATTERNS) if (re.test(text)) hits.add(label)
  return [...hits]
}

/* ────────────────────────── 정제 ────────────────────────── */

/** 제어문자 제거용. 문자열 리터럴로 쓰면 소스에 진짜 제어문자가 박히므로 정규식으로만 만든다. */
const CTRL = /[\x00-\x08\x0b\x0c\x0e-\x1f]/g

/**
 * 로컬 모델이 흘리는 찌꺼기를 걷어낸다.
 *
 * 2026-09-23 라이브에서 실제로 잡혔다 — 본문 끝에 채팅 템플릿 종료 토큰
 * `<|im_end|>` 가 그대로 찍혀 공개 페이지에 노출됐다. 생성 쪽에서 막는 게
 * 정석이지만, 수신단은 모델이 무엇을 뱉든 페이지가 깨지지 않게 막아야 한다.
 * HTML 태그도 함께 지운다(렌더러가 텍스트로 그리므로 화면에 `<div>` 가 보인다).
 */
export const stripArtifacts = (s: string) =>
  s
    // 닫는 `>` 가 없는 잘린 형태도 잡는다 — toPlain 이 `>` 를 먼저 걷어내는 경로가 있다.
    .replace(/<\|[^|<>]{0,60}\|>?/g, '')
    .replace(/<\/?(?:s|\/s)>/g, '')
    .replace(/\[\/?INST\]/g, '')
    .replace(/<\/?[a-zA-Z][^>]{0,200}>/g, '')

const clean = (v: unknown, max: number) =>
  typeof v === 'string' ? stripArtifacts(v).replace(CTRL, '').replace(/[ \t]+/g, ' ').trim().slice(0, max) : ''

/** 줄바꿈을 살려야 하는 본문용 — 빈 줄은 블록 구분자로 쓴다. */
const cleanBlock = (v: unknown, max: number) =>
  typeof v === 'string'
    ? stripArtifacts(v)
        .replace(/\r\n?/g, '\n')
        .replace(CTRL, '')
        .replace(/[ \t]+/g, ' ')
        .replace(/\n{3,}/g, '\n\n')
        .trim()
        .slice(0, max)
    : ''

/** 마크다운 문자열 또는 문단 배열 → 블록 배열. 목록은 한 블록 안에 줄바꿈으로 남긴다. */
function toBlocks(raw: unknown): string[] {
  const parts: string[] = []
  if (Array.isArray(raw)) {
    for (const p of raw) {
      const s = cleanBlock(p, 4000)
      if (s) parts.push(...s.split(/\n{2,}/))
    }
  } else {
    const s = cleanBlock(raw, 40000)
    if (s) parts.push(...s.split(/\n{2,}/))
  }
  return parts.map((p) => p.trim()).filter(Boolean).slice(0, MAX_BLOCKS_PER_SECTION)
}

/** http(s) 절대 URL 만 통과. */
const safeUrl = (v: unknown) => {
  const s = clean(v, 500)
  if (!/^https?:\/\//i.test(s)) return ''
  try {
    return new URL(s).toString()
  } catch {
    return ''
  }
}

/**
 * 수신 기사 1건을 정제한다. 형태가 아예 기사가 아니면 null.
 * (합격 여부는 validateArticle 이 따로 판정한다 — 정제와 게이트를 분리해야
 *  "왜 떨어졌는지"를 n8n 에 정확히 돌려줄 수 있다.)
 */
export function normalizeArticle(raw: unknown, now: string): NewsArticle | null {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null
  const r = raw as Record<string, unknown>

  const sections: NewsArticleSection[] = (Array.isArray(r.sections) ? r.sections : [])
    .slice(0, MAX_SECTIONS)
    .map((s) => {
      const o = (s && typeof s === 'object' ? s : {}) as Record<string, unknown>
      return { h2: clean(o.h2, 160), body: toBlocks(o.body) }
    })
    .filter((s) => s.h2 || s.body.length)

  const faq: NewsArticleFaq[] = (Array.isArray(r.faq) ? r.faq : [])
    .slice(0, MAX_FAQ)
    .map((f) => {
      const o = (f && typeof f === 'object' ? f : {}) as Record<string, unknown>
      return { q: clean(o.q, 200), a: clean(o.a, 1200) }
    })
    .filter((f) => f.q && f.a)

  const keywords = (Array.isArray(r.keywords) ? r.keywords : [])
    .map((k) => clean(k, 40))
    .filter(Boolean)
    .slice(0, MAX_KEYWORDS)

  return {
    meta_title: clean(r.meta_title, 200),
    meta_description: clean(r.meta_description, 400),
    h1: clean(r.h1, 200),
    lead: clean(r.lead, 600),
    sections,
    faq,
    keywords,
    disclaimer: clean(r.disclaimer, 600),
    generated_at: clean(r.generated_at, 40) || now,
    model: clean(r.model, 120),
    og_image: safeUrl(r.og_image),
  }
}

/** 게시 가능 여부. 빈 배열이면 합격, 아니면 사유 목록. */
export function validateArticle(a: NewsArticle): string[] {
  const bad: string[] = []

  const mt = a.meta_title.length
  if (mt < META_TITLE_MIN || mt > META_TITLE_MAX) {
    bad.push(`meta_title ${mt}자 (허용 ${META_TITLE_MIN}~${META_TITLE_MAX})`)
  }

  const md = a.meta_description.length
  if (md < META_DESC_MIN || md > META_DESC_MAX) {
    bad.push(`meta_description ${md}자 (허용 ${META_DESC_MIN}~${META_DESC_MAX})`)
  }

  if (!a.h1) bad.push('h1 없음')
  if (a.lead.length < 40) bad.push(`lead ${a.lead.length}자 (최소 40)`)
  if (a.sections.length < 2) bad.push(`sections ${a.sections.length}개 (최소 2)`)
  for (const [i, s] of a.sections.entries()) {
    if (!s.h2) bad.push(`sections[${i}].h2 없음`)
    if (!s.body.length) bad.push(`sections[${i}].body 없음`)
  }

  const all = [
    a.meta_title,
    a.meta_description,
    a.h1,
    a.lead,
    a.disclaimer,
    ...a.sections.flatMap((s) => [s.h2, ...s.body]),
    ...a.faq.flatMap((f) => [f.q, f.a]),
    ...a.keywords,
  ].join('\n')
  for (const hit of scanBanned(all)) bad.push(`금지 표현: ${hit}`)

  return bad
}

/** 목록 응답·카드에서 "기사 있음" 판정. 불합격 기사는 저장하지 않으므로 존재 = 합격. */
export const hasArticle = (a: NewsArticle | null | undefined): boolean =>
  !!a && !!a.h1 && a.sections.length > 0
