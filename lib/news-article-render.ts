/**
 * 기사 본문 렌더 보조 — 마크다운 축소판 파서 + 관련 서비스 매핑 + OG 이미지 결정.
 *
 * 본문은 맥6 로컬 모델이 만들어 **런타임에** KV 로 들어온다. 그래서 절대
 * `dangerouslySetInnerHTML` 로 내보내지 않는다 — 여기서 구조만 뽑고 화면은
 * React 엘리먼트로 그린다(모델이 스크립트 태그를 뱉어도 텍스트로 남는다).
 *
 * 지원 문법은 의도적으로 좁다: h3 / 목록 / 인용 / 굵게 / 인라인코드.
 * 링크·이미지·raw HTML 은 지원하지 않는다(외부 링크는 출처 블록에서만 낸다).
 */
import { stripArtifacts } from './news-article-schema'
import { getServiceCatalog } from './services-catalog'
import { ogThumb } from './og-thumbs.generated'
import type { NewsItem } from './news-data'

export const SITE = 'https://inhega.co.kr'
export const ORG_NAME = '유선행정사사무소'
/** og:image 최종 폴백. 사이트 공통 히어로 이미지(1200×630). */
export const OG_FALLBACK = `${SITE}/images/hero-seoul.png`

/* ────────────────────────── 마크다운 축소판 ────────────────────────── */

export type InlineToken = { t: 'text' | 'b' | 'code'; v: string }

export type Block =
  | { kind: 'h3'; inline: InlineToken[] }
  | { kind: 'p'; inline: InlineToken[] }
  | { kind: 'quote'; inline: InlineToken[] }
  | { kind: 'ul'; items: InlineToken[][] }
  | { kind: 'ol'; items: InlineToken[][] }

/**
 * 이미 저장된 기사에도 건다 — 수신단 정화가 붙기 전에 들어온 원고가 KV 에 남아 있다.
 * 재전송을 기다리지 않고 화면에서 바로 걷어내기 위한 2차 방어.
 */
export const sanitize = (s: string) => stripArtifacts(s).replace(/\s+/g, ' ').trim()

/**
 * 본문 블록 전용 정화. 줄바꿈을 **보존**한다 — 목록 블록은 줄바꿈으로 항목을 나누므로
 * sanitize 의 공백 축약을 쓰면 목록이 한 문단으로 뭉개진다.
 */
export const sanitizeBlock = (s: string) => stripArtifacts(s).trim()

/** `**굵게**` 와 `` `코드` `` 만 인식한다. 나머지는 전부 평문. */
export function parseInline(raw: string): InlineToken[] {
  const s = sanitize(raw)
  const out: InlineToken[] = []
  const re = /\*\*([^*]+)\*\*|`([^`]+)`/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(s))) {
    if (m.index > last) out.push({ t: 'text', v: s.slice(last, m.index) })
    if (m[1] !== undefined) out.push({ t: 'b', v: m[1] })
    else out.push({ t: 'code', v: m[2] })
    last = m.index + m[0].length
  }
  if (last < s.length) out.push({ t: 'text', v: s.slice(last) })
  return out.length ? out : [{ t: 'text', v: s }]
}

/** 블록 하나(빈 줄로 끊긴 덩어리)를 구조로 바꾼다. */
export function parseBlock(raw: string): Block {
  const lines = raw.split('\n').map((l) => l.trim()).filter(Boolean)
  if (!lines.length) return { kind: 'p', inline: [] }

  if (lines.every((l) => /^[-*·]\s+/.test(l))) {
    return { kind: 'ul', items: lines.map((l) => parseInline(l.replace(/^[-*·]\s+/, ''))) }
  }
  if (lines.every((l) => /^\d+[.)]\s+/.test(l))) {
    return { kind: 'ol', items: lines.map((l) => parseInline(l.replace(/^\d+[.)]\s+/, ''))) }
  }

  const joined = lines.join(' ')
  // h2 는 sections[].h2 가 담당하므로 본문 안의 #/## 도 h3 으로 낮춘다(헤딩 계층 유지).
  if (/^#{1,4}\s+/.test(lines[0]) && lines.length === 1) {
    return { kind: 'h3', inline: parseInline(lines[0].replace(/^#{1,4}\s+/, '')) }
  }
  if (lines.every((l) => l.startsWith('>'))) {
    return { kind: 'quote', inline: parseInline(lines.map((l) => l.replace(/^>\s?/, '')).join(' ')) }
  }
  return { kind: 'p', inline: parseInline(joined) }
}

export const parseBlocks = (blocks: string[]): Block[] => blocks.map(parseBlock)

/** JSON-LD articleBody·설명문에 쓸 평문. 마크다운 기호를 걷어낸다. */
export function toPlain(blocks: string[]): string {
  return blocks
    .join(' ')
    .replace(/[*`>#]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

/* ────────────────────────── 관련 서비스 매핑 ──────────────────────────
 * 품목(product)·제목·키워드에서 우리 서비스로 이어지는 내부링크를 뽑는다.
 * 구체적인 항목을 먼저 둔다 — `기능성화장품` 이 `화장품` 보다 앞이어야 한다.
 * 실제 링크는 services-catalog(단일 정본)에 있는 슬러그만 쓴다. 배포 보류 서비스는
 * 카탈로그 단계에서 이미 빠져 있으므로 죽은 링크가 생기지 않는다.
 */
const SERVICE_HINTS: { re: RegExp; slug: string }[] = [
  { re: /기능성\s?화장품/, slug: 'functional-cosmetics' },
  { re: /화장품|코스메틱|cosmetic/i, slug: 'cosmetics' },
  { re: /의료기기|medical\s?device|진단\s?장비/i, slug: 'medical-device' },
  { re: /건강기능식품|건기식|health\s?functional/i, slug: 'health-food' },
  { re: /HACCP|해썹/i, slug: 'haccp' },
  { re: /식품|음료|첨가물|식자재/, slug: 'food-manufacturing' },
  { re: /전자담배|액상|베이프|e-?cig/i, slug: 'ecig' },
  { re: /담배|연초|tobacco/i, slug: 'tobacco' },
  { re: /공장|제조\s?시설|생산\s?설비/, slug: 'factory' },
  { re: /화물|운송|트럭|물류\s?운송/, slug: 'freight-trucking' },
  { re: /물류|창고|유통|logistics/i, slug: 'logistics' },
  { re: /기업부설|연구소|research\s?lab/i, slug: 'research-lab' },
  { re: /위치정보|위치기반|location\s?based/i, slug: 'location-based-service' },
  { re: /환전|외국환|currency/i, slug: 'currency-exchange' },
  { re: /게스트하우스|도시민박|민박/, slug: 'urban-guesthouse' },
  { re: /호스텔|hostel/i, slug: 'hostel' },
  { re: /한옥/, slug: 'hanok' },
  { re: /조달|공공\s?구매|나라장터/, slug: 'procurement' },
  { re: /벤처\s?기업|벤처\s?확인/, slug: 'venture-cert' },
  { re: /메인비즈|경영혁신/, slug: 'mainbiz' },
  { re: /연구개발|R\s?&\s?D|기술개발\s?지원/i, slug: 'rnd-support' },
  { re: /사회적\s?협동조합|협동조합/, slug: 'social-coop' },
  { re: /사회적\s?기업/, slug: 'social-enterprise' },
  { re: /여성\s?기업/, slug: 'women-enterprise' },
  { re: /재단\s?법인|재단/, slug: 'foundation' },
  { re: /비영리|사단\s?법인/, slug: 'nonprofit' },
  { re: /용도\s?변경|건축물\s?대장/, slug: 'building-usage' },
  { re: /체육\s?시설|스포츠|헬스장/, slug: 'sports-club' },
]

export type RelatedService = { slug: string; title: string; href: string }

/** 관련 서비스 최대 3건. 하나도 못 찾으면 빈 배열 — 호출부가 /services 로 보낸다. */
export function relatedServices(item: NewsItem, limit = 3): RelatedService[] {
  const hay = [item.product, item.title_ko, item.summary_ko, ...(item.article?.keywords ?? [])].join(' ')
  const catalog = getServiceCatalog('ko')
  const out: RelatedService[] = []
  for (const { re, slug } of SERVICE_HINTS) {
    if (out.length >= limit) break
    if (!re.test(hay)) continue
    if (out.some((s) => s.slug === slug)) continue
    const svc = catalog.find((c) => c.slug === slug)
    if (svc) out.push({ slug, title: svc.shortTitle, href: svc.href })
  }
  return out
}

/* ────────────────────────── OG 이미지 ──────────────────────────
 * 기사는 재배포 없이 들어오는데 og-pipeline 카드는 배포 산출물이다. 그래서 3단 폴백:
 *   1) n8n 이 만들어 보낸 og_image 절대 URL
 *   2) og-pipeline 이 미리 구워 둔 `/og/news/<slug>.png`
 *      (scripts/news-og-sync.mjs 가 라이브 목록을 읽어 생성 → 다음 배포에 실린다)
 *   3) 사이트 공통 히어로 이미지
 * "이미지 없음"으로 두지 않는 이유는 SEO 게이트가 og:image 를 필수로 보기 때문이다.
 */
export function articleOgImage(item: NewsItem): string {
  if (item.article?.og_image) return item.article.og_image
  const card = ogThumb('news', item.slug)
  return card ? `${SITE}${card}` : OG_FALLBACK
}
