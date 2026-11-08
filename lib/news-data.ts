/**
 * 인허가 뉴스(REGWATCH) 저장소 — Cloudflare KV 백엔드.
 *
 * 흐름: 맥3 n8n(RW-03) 매일 09:00 → POST /api/news/ingest → 이 모듈 → KV
 *       → /news 가 요청 시 KV 를 읽어 렌더. **재배포 없이 갱신된다.**
 *
 * 저장 구조는 단일 롤링 블롭 하나다(`news:list:v1`).
 *   - 쓰기: 읽기 → doc_key 로 머지(upsert) → 최신순 정렬 → MAX_ITEMS 로 절단 → 쓰기
 *   - 읽기: KV get 1회. 페이지 렌더당 서브리퀘스트 1개로 끝난다.
 * 항목당 doc 키를 따로 쓰면 200건 요청에 KV 쓰기가 200번 발생하고 목록 렌더에도
 * N번의 get 이 필요하다. 발행 주체가 n8n 하나(하루 1회)뿐이라 롤링 블롭이 더 싸다.
 *
 * 주의: 단일 블롭은 동시 쓰기에 read-modify-write 경쟁이 있다. 쓰기 주체가
 * n8n 한 곳이라 현재는 문제가 없으나, 발행 주체가 둘 이상이 되면 doc 키 분리 +
 * 인덱스 구조로 바꿀 것.
 */
import { getCloudflareContext } from '@opennextjs/cloudflare'
import {
  hasArticle,
  normalizeArticle,
  validateArticle,
  type NewsArticle,
} from './news-article-schema'
import { countryLabel, normalizeCountry } from './news-country'
import { checkEffectiveDates, lawXmlUrl, mentionsEffectiveDate, parseLawXml } from './news-date-gate'
import { applyNewsCorrection, dropHanKeywords, UNPUBLISHED_DOC_KEYS } from './news-corrections'
import { cleanNewsProduct, foreignScriptFields, hasForeignScript } from './news-script-gate'
import { hasTitleDefect, titleQualityReasons } from './news-title-gate'
import { NEWS_LAW_DATES } from './news-date-verified'

export { hasArticle }
export type { NewsArticle, NewsArticleFaq, NewsArticleSection } from './news-article-schema'

export const NEWS_LIST_KEY = 'news:list:v1'
export const NEWS_MAX_ITEMS = 1500
export const NEWS_MAX_BATCH = 200

export const SOURCE_KEYS = [
  'us_federal_register',
  'wto_eping',
  'jp_egov_pubcomment',
  'kr_law_go_kr',
  'eu_eurlex',
] as const
export type SourceKey = (typeof SOURCE_KEYS)[number]

export const SCOPES = ['해외', '국내'] as const
export const IMPACTS = ['상', '중', '하'] as const
export const OPPORTUNITIES = ['있음', '없음', '검토필요'] as const

export type NewsItem = {
  doc_key: string
  /**
   * `/news/<slug>` 의 URL 조각. 영문 kebab, **고유·불변**.
   * 한 번 저장되면 뒤에 오는 수신 payload 가 다른 값을 보내도 바꾸지 않는다
   * (색인된 URL 이 바뀌면 그동안 쌓인 순위가 사라진다).
   */
  slug: string
  source_key: string
  country: string
  scope: string
  title_ko: string
  summary_ko: string
  product: string
  impact: string
  opportunity: string
  opportunity_reason: string
  stage: string
  deadline: string
  relevance: number
  url: string
  published_date: string
  analyzed_at: string
  /** 저장 시각 — 원본에는 없고 수신 API 가 채운다. */
  ingested_at: string
  /**
   * 내용이 실제로 바뀐 마지막 시각. NewsArticle JSON-LD 의 dateModified 로 쓴다.
   * 같은 내용을 매일 다시 받아도 갱신하지 않는다 — 가짜 신선도는 색인에 해롭다.
   */
  updated_at: string
  /** 해설 기사. 요약만 게시된 항목은 null 이고, 나중에 부분 수신으로 채운다. */
  article: NewsArticle | null
  /**
   * 사람이 정정해 잠근 필드(`article` 포함). 수집기가 옛 값을 다시 보내도 덮어쓰지 않는다
   * — QA1020-FIX 로 고친 시행일이 다음 RW-03/RW-04 재전송에 원복되지 않게 하려는 장치.
   * 잠그는 길은 같은 토큰의 수신 payload `_lock:[...]` 뿐이다. 내용 비교(sameContent) 대상이 아니다.
   */
  locked_fields?: string[]
  /** 법제처 항목의 시행일 대조 결과(news-date-gate). reasons·error 가 있으면 게시 보류. */
  date_check?: DateCheck | null
}

export type DateCheck = {
  checked_at: string
  effective: string
  promulgated: string
  partial: string[]
  reasons: string[]
  /** 원문을 읽지 못한 사유. 시행 날짜가 적힌 글이면 보류한다. */
  error?: string
  /** 법령명(`<법령명_한글>`). 원문을 못 읽은 재수신에서 저장된 날짜로 다시 대조할 때 쓴다. */
  name?: string
  /**
   * 재수신 때 원문을 못 읽어 **저장돼 있던 시행일자로** 대조했다는 경고(INHEGA-NEWS-HELD).
   * 보류 사유가 아니다 — error 와 달리 isHeld 가 보지 않는다.
   */
  warning?: string
}

/** 시행일 게이트에 걸려 게시 보류된 항목인지. */
export const isHeld = (it: Pick<NewsItem, 'date_check'>) =>
  !!it.date_check && (it.date_check.reasons.length > 0 || !!it.date_check.error)

/** 원문 출처 표기용 기관명. 출처가 정부·기관 공식 자료임을 카드에 명시한다. */
export const SOURCE_LABELS: Record<string, string> = {
  us_federal_register: '미국 연방관보(Federal Register)',
  wto_eping: 'WTO ePing(TBT/SPS 통보문)',
  jp_egov_pubcomment: '일본 e-Gov 의견공모',
  kr_law_go_kr: '법제처',
  eu_eurlex: 'EU EUR-Lex',
}

/* ────────────────────────── 정제 ────────────────────────── */

const str = (v: unknown, max: number) =>
  typeof v === 'string' ? v.replace(/\s+/g, ' ').trim().slice(0, max) : ''

const oneOf = (v: unknown, allowed: readonly string[], fallback = '') => {
  const s = typeof v === 'string' ? v.trim() : ''
  return (allowed as readonly string[]).includes(s) ? s : fallback
}

/** YYYY-MM-DD 만 통과시킨다. 형식이 다르면 빈 문자열(= 미정). */
const isoDate = (v: unknown) => {
  const s = str(v, 10)
  return /^\d{4}-\d{2}-\d{2}$/.test(s) ? s : ''
}

/** http/https 원문 링크만 허용 — javascript: 등 스킴 주입을 막는다. */
const safeUrl = (v: unknown) => {
  const s = str(v, 500)
  if (!/^https?:\/\//i.test(s)) return ''
  try {
    return new URL(s).toString()
  } catch {
    return ''
  }
}

/* ────────────────────────── slug ────────────────────────── */

/** 영문 kebab 만 남긴다. 한글만 있는 문자열은 빈 값이 되므로 호출부가 폴백을 준비해야 한다. */
export function slugify(v: unknown): string {
  return String(v ?? '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '')
}

/** doc_key 기반 결정적 해시. 슬러그 충돌 시 꼬리표로 쓴다(FNV-1a 32bit). */
function hash6(s: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h.toString(36).padStart(6, '0').slice(-6)
}

/**
 * 항목의 슬러그를 정한다.
 *
 * **이미 기사가 발행된 항목의 슬러그는 불변이다** — `/news/<slug>` 가 세상에 나가
 * 색인됐으므로 바뀌면 그동안 쌓인 순위가 사라진다.
 *
 * 반대로 기사가 아직 없는 항목의 슬러그는 **잠정값**이다. 요약만 게시된 동안
 * 개별 페이지는 404 라서 밖에 나간 URL 이 없다. 그래서 요약 단계에서 doc_key 로
 * 자동 생성해 둔 슬러그(`eping-119988`)는, 나중에 기사와 함께 제대로 된 영문
 * 슬러그가 오면 그것으로 갈아탄다. 이 구분이 없으면 n8n 이 보내는 슬러그가
 * 영원히 무시된다.
 *
 * 순서: 발행된 기존 슬러그 → 수신 slug → 기존 잠정 슬러그 → doc_key 슬러그화.
 * 다른 doc_key 가 이미 쓰는 슬러그면 doc_key 해시를 붙여 충돌을 끊는다.
 */
export function resolveSlug(
  doc_key: string,
  incoming: unknown,
  prev: NewsItem | null,
  taken: Map<string, string>
): string {
  if (prev?.slug && hasArticle(prev.article)) return prev.slug
  const base =
    slugify(incoming) || prev?.slug || slugify(doc_key) || `news-${hash6(doc_key)}`
  const owner = taken.get(base)
  if (!owner || owner === doc_key) return base
  return `${base.slice(0, 72)}-${hash6(doc_key)}`
}

/* ────────────────────────── 정제 ────────────────────────── */

const EMPTY_ITEM: Omit<NewsItem, 'doc_key' | 'slug' | 'ingested_at' | 'updated_at'> = {
  source_key: '', country: '', scope: '', title_ko: '', summary_ko: '', product: '',
  impact: '', opportunity: '', opportunity_reason: '', stage: '', deadline: '',
  relevance: 0, url: '', published_date: '', analyzed_at: '', article: null,
}

export type ArticleReject = { doc_key: string; reasons: string[] }

/** `_lock` 으로 잠글 수 있는 필드 — 요약 필드와 기사. doc_key·slug·시각 필드는 잠그지 않는다. */
const LOCKABLE = new Set([...Object.keys(EMPTY_ITEM)])

/** 신규 항목이 갖춰야 하는 최소 필드. 하나라도 없으면 목록에 빈 카드가 된다. */
export const REQUIRED_NEW_FIELDS = ['title_ko', 'url', 'published_date'] as const

export type ItemReject = { doc_key: string; reasons: string[] }
/** 빈 값 덮어쓰기를 막고 기존 값을 지킨 필드 — 보낸 쪽이 보고 고치라고 돌려준다. */
export type FieldPreserve = { doc_key: string; fields: string[] }

export type MergeOutcome =
  | { status: 'ok'; item: NewsItem; preserved: string[] }
  /** doc_key 가 없어 저장할 수 없는 항목. */
  | { status: 'skipped' }
  /** 필수 필드가 없는 **신규** doc_key — 생성하지 않는다. */
  | { status: 'rejected'; doc_key: string; reasons: string[] }

/**
 * 수신 항목 1건을 정제해 기존 항목 위에 **병합**한다.
 *
 * 규칙은 둘이다.
 *   1. payload 에 **있는 키만** 덮어쓴다 — `{doc_key, article}` 만 보내면 요약은 그대로다.
 *   2. 키가 있어도 **값이 비면(빈 문자열·enum 불일치·숫자 아님) 기존 값을 지킨다**.
 *
 * 2번이 없던 동안 `{doc_key, slug, article}` 수신에 기존 요약이 통째로 빈 값이 됐다
 * (2026-09-23 FR:2026-19181·FR:2026-19277). 1번만으로는 부족하다 — n8n 이 키를 빼는 대신
 * 빈 문자열을 채워 보내는 경우가 있고, enum 에 영문값이 오면 정제 결과가 빈 문자열이라
 * "있는 키" 로 취급돼 똑같이 덮어쓴다. **지운다는 뜻은 payload 로 표현할 수 없게 한다**
 * — 항목을 내리는 길은 DELETE, 기사만 내리는 길은 `article: null` 뿐이다.
 * 기존 값을 지킨 필드는 `preserved` 로 돌려줘 보낸 쪽이 자기 버그를 알 수 있게 한다.
 *
 * doc_key 가 없으면 저장할 수 없으므로 skipped.
 * **신규** doc_key 인데 필수 필드가 없으면 rejected — 빈 카드를 만드느니 만들지 않는다.
 * 기사가 게이트에 걸리면 **기사만** 버리고 사유를 reject 에 적는다 — 요약은 살린다.
 */
export function mergeItem(
  raw: unknown,
  now: string,
  prev: NewsItem | null,
  taken: Map<string, string>,
  reject: ArticleReject[]
): MergeOutcome {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return { status: 'skipped' }
  const r = raw as Record<string, unknown>
  const doc_key = str(r.doc_key, 200)
  if (!doc_key) return { status: 'skipped' }

  const has = (k: string) => Object.prototype.hasOwnProperty.call(r, k)
  const base = prev ?? { ...EMPTY_ITEM, doc_key, slug: '', ingested_at: now, updated_at: now }

  const preserved: string[] = []
  const lockReq = Array.isArray(r._lock) ? r._lock.map((v) => str(v, 40)).filter((k) => LOCKABLE.has(k)) : []
  const locked = new Set([...(prev?.locked_fields ?? []), ...lockReq])
  /** 잠근 필드는 잠그는 그 수신(_lock 에 같이 실린 값)만 받고, 이후 수신은 무시한다. */
  const lockedOut = (k: string) => locked.has(k) && !lockReq.includes(k) && has(k)
  /** 키가 없으면 기존 값, 있어도 정제 결과가 비면 기존 값(비어 있지 않을 때만 기록). */
  const pick = (k: string, parse: (v: unknown) => string, keep: string): string => {
    if (!has(k)) return keep
    if (lockedOut(k)) {
      if (parse(r[k]) !== keep) preserved.push(`locked:${k}`)
      return keep
    }
    const next = parse(r[k])
    if (next) return next
    if (keep) preserved.push(k)
    return keep
  }

  let article = base.article
  if (lockedOut('article')) {
    preserved.push('locked:article')
  } else if (has('article')) {
    if (r.article === null) {
      article = null
    } else {
      const parsed = normalizeArticle(r.article, now)
      const reasons = parsed ? validateArticle(parsed) : ['article 형식 오류(객체가 아님)']
      if (parsed && reasons.length === 0) article = parsed
      else reject.push({ doc_key, reasons })
    }
  }

  // relevance 만 숫자라 따로 센다. Number('') 도 Number(null) 도 0 이라
  // 빈 값이 0 점으로 둔갑하지 않게 "값 없음" 을 먼저 걸러낸다.
  const relevance = (() => {
    if (!has('relevance')) return base.relevance
    const v = r.relevance
    const blank = v === null || v === undefined || (typeof v === 'string' && !v.trim())
    const n = blank ? NaN : Number(v)
    if (Number.isFinite(n)) return Math.min(100, Math.max(0, Math.round(n)))
    if (base.relevance) preserved.push('relevance')
    return base.relevance
  })()

  const item: NewsItem = {
    doc_key,
    slug: resolveSlug(doc_key, has('slug') ? r.slug : '', prev, taken),
    source_key: pick('source_key', (v) => str(v, 60), base.source_key),
    country: pick('country', (v) => normalizeCountry(str(v, 60)), base.country),
    scope: pick('scope', (v) => oneOf(v, SCOPES), base.scope),
    title_ko: pick('title_ko', (v) => str(v, 300), base.title_ko),
    summary_ko: pick('summary_ko', (v) => str(v, 1200), base.summary_ko),
    product: pick('product', (v) => str(v, 200), base.product),
    impact: pick('impact', (v) => oneOf(v, IMPACTS), base.impact),
    opportunity: pick('opportunity', (v) => oneOf(v, OPPORTUNITIES), base.opportunity),
    opportunity_reason: pick('opportunity_reason', (v) => str(v, 600), base.opportunity_reason),
    stage: pick('stage', (v) => str(v, 120), base.stage),
    deadline: pick('deadline', (v) => isoDate(v), base.deadline),
    relevance,
    url: pick('url', (v) => safeUrl(v), base.url),
    published_date: pick('published_date', (v) => isoDate(v) || str(v, 40), base.published_date),
    analyzed_at: pick('analyzed_at', (v) => str(v, 40), base.analyzed_at),
    ingested_at: prev?.ingested_at || now,
    updated_at: base.updated_at || now,
    article,
    ...(locked.size ? { locked_fields: [...locked].sort() } : {}),
    ...(prev?.date_check ? { date_check: prev.date_check } : {}),
  }

  // 신규 항목만 필수 필드를 본다. 기존 항목은 부분 수신이 정상이고, 위 규칙 덕에
  // 이미 채워진 값이 빈 값으로 밀릴 일도 없다.
  if (!prev) {
    const missing = REQUIRED_NEW_FIELDS.filter((f) => !item[f])
    if (missing.length) {
      // 기사 게이트 사유는 항목을 만들지 않는 이상 의미가 없으므로 같이 걷어낸다.
      const at = reject.findIndex((x) => x.doc_key === doc_key)
      if (at >= 0) reject.splice(at, 1)
      return {
        status: 'rejected',
        doc_key,
        reasons: missing.map((f) => `신규 항목에 ${f} 없음(또는 형식 불일치)`),
      }
    }
  }

  return { status: 'ok', item, preserved }
}

/**
 * KV 에 남아 있는 옛 레코드(슬러그·기사 필드가 없던 시절)를 현재 타입으로 맞춘다.
 * 없는 필드를 undefined 로 두면 렌더·정렬이 조용히 어긋나므로 읽는 쪽에서 한 번 메운다.
 */
export function hydrateItem(raw: NewsItem): NewsItem {
  return {
    ...EMPTY_ITEM,
    ...raw,
    slug: raw.slug || slugify(raw.doc_key) || `news-${hash6(raw.doc_key || '')}`,
    // 코드 통일 이전에 저장된 원문 국가명(ePing 'United States of America' 등)도 읽을 때 접는다.
    country: normalizeCountry(raw.country || ''),
    article: raw.article ?? null,
    updated_at: raw.updated_at || raw.ingested_at || '',
  }
}

/** 최신순 = published_date desc → analyzed_at desc → doc_key. 결과가 매번 같아야 한다. */
export function sortNews(items: NewsItem[]): NewsItem[] {
  return [...items].sort((a, b) => {
    const d = (b.published_date || '').localeCompare(a.published_date || '')
    if (d !== 0) return d
    const t = (b.analyzed_at || '').localeCompare(a.analyzed_at || '')
    if (t !== 0) return t
    return a.doc_key.localeCompare(b.doc_key)
  })
}

/* ────────────────────────── KV 접근 ────────────────────────── */

type NewsKv = {
  get(key: string, type: 'text'): Promise<string | null>
  put(key: string, value: string): Promise<void>
}

/**
 * NEWS_KV 바인딩. 바인딩이 없으면(로컬 `next dev`, 바인딩 미설정 프리뷰) null 을 준다.
 * 호출부는 null 을 "데이터 없음"으로 다루고 레이아웃을 정상 렌더해야 한다.
 */
export function getNewsKv(): NewsKv | null {
  try {
    const env = getCloudflareContext().env as unknown as Record<string, unknown>
    return (env?.NEWS_KV as NewsKv | undefined) ?? null
  } catch {
    return null
  }
}

/** 표시용 목록 — 저장 원본에 사람이 원문 대조로 정정한 값(lib/news-corrections)을 덮는다. */
export async function readAllNews(): Promise<NewsItem[]> {
  return (await readStoredNews()).filter((it) => !UNPUBLISHED_DOC_KEYS.has(it.doc_key)).map(applyNewsCorrection).map(dropHanKeywords).map(cleanNewsProduct).map(applyKnownLawDates)
}

/**
 * 원문 조회 실패(error)로 보류된 법제처 항목을 맥4 가 확인한 원문 날짜(lib/news-date-verified)로 다시 대조한다.
 * 표시 경로에서만 — KV 는 바꾸지 않는다. 저장된 대조가 성공했거나 확인값이 없으면 그대로 둔다.
 */
function applyKnownLawDates(item: NewsItem): NewsItem {
  const known = NEWS_LAW_DATES[item.doc_key]
  if (!known || item.source_key !== 'kr_law_go_kr' || !item.date_check?.error) return item
  return { ...item, date_check: recheckWithKnownDates(item, { ...known, checked_at: '2026-10-27T10:30:00.000Z' }, item.date_check.error) }
}

/** KV 저장 원본 그대로. 쓰기 경로(upsert·delete)는 이것을 읽어야 정정 레이어가 KV 로 새지 않는다. */
export async function readStoredNews(): Promise<NewsItem[]> {
  const kv = getNewsKv()
  if (!kv) return []
  try {
    const raw = await kv.get(NEWS_LIST_KEY, 'text')
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as NewsItem[]).map(hydrateItem) : []
  } catch {
    // 저장소 장애가 페이지 500 으로 번지지 않게 한다 — 빈 목록 + "업데이트 준비 중".
    return []
  }
}

export type UpsertResult = {
  upserted: number
  skipped: number
  total: number
  /** 기사까지 함께 저장된 건수. */
  articles: number
  /** 게이트에 걸려 기사만 버려진 항목(요약은 저장됨). n8n 이 보고 재생성한다. */
  article_rejected: ArticleReject[]
  /** 필수 필드가 없어 **생성을 거부한** 신규 doc_key. */
  rejected: ItemReject[]
  /** 빈 값 덮어쓰기를 막고 기존 값을 지킨 필드. 보낸 쪽 버그 신호다. */
  preserved: FieldPreserve[]
  /** 시행일 게이트에 걸려 게시 보류된 항목(저장은 됨, 목록·기사·사이트맵에서 빠짐). */
  date_held: ItemReject[]
  /** 한자·가나가 섞여 게시 보류된 항목(news-script-gate). 저장은 됐다 — 한국어로 다시 보내면 풀린다. */
  script_held: ItemReject[]
  /** 제목 품질 게이트(news-title-gate)에 걸려 게시 보류된 항목 — 소문자 조각 시작·세미콜론·고유명사 누락. */
  title_held: ItemReject[]
  /** 원문 재조회에 실패해 저장된 시행일자로 대조한 재수신 항목(보류 아님, 경고). */
  date_warned: ItemReject[]
}

/* ────────────────────────── 시행일 게이트 ────────────────────────── */

export type LawFetcher = (url: string) => Promise<string>

/** law.go.kr lawService XML 을 읽는다. 10초 넘기면 끊는다(수신 1회에 법제처 항목은 하루 몇 건). */
export const fetchLawXml: LawFetcher = async (url) => {
  const ctl = new AbortController()
  const timer = setTimeout(() => ctl.abort(), 10_000)
  try {
    const res = await fetch(url, {
      signal: ctl.signal,
      headers: { accept: 'application/xml,text/xml;q=0.9,*/*;q=0.1', 'user-agent': 'inhega-news-date-gate/1.0' },
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    return await res.text()
  } finally {
    clearTimeout(timer)
  }
}

/**
 * 법제처 항목의 시행일 대조(lib/news-date-gate). 다른 수집원은 null — 대조할 원문 시행일자가 없다.
 * 원문을 못 읽었을 때는 글에 시행 날짜가 적혀 있을 때만 error 로 보류한다.
 */
export async function runDateCheck(item: NewsItem, now: string, fetchLaw: LawFetcher = fetchLawXml): Promise<DateCheck | null> {
  if (item.source_key !== 'kr_law_go_kr') return null
  const empty: DateCheck = { checked_at: now, effective: '', promulgated: '', partial: [], reasons: [] }
  const failed = (error: string): DateCheck => (mentionsEffectiveDate(item) ? { ...empty, error } : empty)
  const url = lawXmlUrl(item.url)
  if (!url) return failed('원문 링크에 법제처 MST 가 없어 시행일자를 대조하지 못함')
  // 원문 링크의 OC 가 워커 IP 로 등록돼 있지 않으면 law.go.kr 은 HTTP 200 + `<result>사용자 정보 검증에
  // 실패하였습니다.</result>` 만 돌려준다(시행일자 없음). 링크의 OC 로 안 되면 공용 OC=test 로 한 번 더 읽는다.
  const urls = [...new Set([url, url.replace(/([?&]OC=)[^&]*/, '$1test')])]
  let law: ReturnType<typeof parseLawXml> = null
  let lastError = ''
  for (const u of urls) {
    let xml = ''
    try {
      xml = await fetchLaw(u)
    } catch (err) {
      lastError = `law.go.kr 조회 실패: ${String(err).slice(0, 120)}`
      continue
    }
    law = parseLawXml(xml)
    if (law) break
    const said = ((xml.match(/<result>\s*([^<]{1,80})/) || [])[1] || xml.replace(/\s+/g, ' ').slice(0, 80)).trim()
    lastError = `law.go.kr 응답에 시행일자가 없음${said ? ` (${said})` : ''}`
  }
  if (!law) return failed(lastError)
  return {
    checked_at: now,
    effective: law.effective,
    promulgated: law.promulgated,
    partial: law.partial,
    name: law.name,
    reasons: checkEffectiveDates(item, law),
  }
}

/**
 * 원문을 못 읽었을 때 **이미 확인된 시행일자**(저장값·NEWS_LAW_DATES)로 글의 날짜를 다시 대조한다.
 * 날짜가 어긋나면 reasons 로 보류되고, 맞으면 경고만 남긴다 — 조회 실패를 보류 사유로 삼지 않는다.
 */
export function recheckWithKnownDates(item: NewsItem, known: Pick<DateCheck, 'checked_at' | 'effective' | 'promulgated' | 'partial' | 'name'>, error: string): DateCheck {
  const law = { effective: known.effective, promulgated: known.promulgated, partial: known.partial, rule: '', name: known.name || '' }
  return {
    checked_at: known.checked_at,
    effective: known.effective,
    promulgated: known.promulgated,
    partial: known.partial,
    ...(known.name ? { name: known.name } : {}),
    reasons: checkEffectiveDates(item, law),
    warning: `원문 재조회 실패 — 확인된 시행일자 ${known.effective}(${known.checked_at.slice(0, 10)}) 기준으로 대조: ${error}`,
  }
}

/**
 * 내용이 실제로 달라졌는지 — 수신 시각·갱신 시각은 비교에서 뺀다.
 *
 * **필드별로** 비교한다. 객체 두 개를 통째로 JSON.stringify 해서 견주면 키 순서까지
 * 비교하게 되는데, KV 에서 읽은 항목(hydrateItem: EMPTY_ITEM 스프레드 순서)과 방금
 * 병합한 항목(mergeItem: doc_key 가 먼저)은 **키 순서가 다르다**. 그래서 내용이 같아도
 * 늘 "달라졌다" 가 나왔고, 같은 자료를 다시 받을 때마다 updated_at 이 올라가
 * sitemap-news.xml 의 lastmod 와 JSON-LD dateModified 에 가짜 신선도가 실렸다
 * (2026-09-23 실측: 아무 값도 안 바뀌는 수신에 updated_at 이 갱신됐다).
 */
const CONTENT_KEYS = [...Object.keys(EMPTY_ITEM), 'doc_key', 'slug'].sort() as (keyof NewsItem)[]

function sameContent(a: NewsItem, b: NewsItem): boolean {
  return CONTENT_KEYS.every((k) => JSON.stringify(a[k] ?? null) === JSON.stringify(b[k] ?? null))
}

export async function upsertNews(rawItems: unknown[], fetchLaw: LawFetcher = fetchLawXml): Promise<UpsertResult> {
  const kv = getNewsKv()
  if (!kv) throw new Error('NEWS_KV binding missing')

  const now = new Date().toISOString()
  const byKey = new Map<string, NewsItem>()
  for (const item of await readStoredNews()) byKey.set(item.doc_key, item)
  // 슬러그 소유자 색인 — 다른 doc_key 가 같은 슬러그를 가져가지 못하게 막는다.
  const taken = new Map<string, string>()
  for (const item of byKey.values()) if (item.slug) taken.set(item.slug, item.doc_key)

  const article_rejected: ArticleReject[] = []
  const rejected: ItemReject[] = []
  const preserved: FieldPreserve[] = []
  const date_held: ItemReject[] = []
  const date_warned: ItemReject[] = []
  /** 이번 수신으로 내용이 바뀌었거나 아직 대조한 적 없는 법제처 항목 — 루프 뒤에 원문과 대조한다. */
  const toCheck: { item: NewsItem; prev: DateCheck | null }[] = []
  let upserted = 0
  let skipped = 0
  let articles = 0

  for (const raw of rawItems) {
    const prev = (() => {
      const k = typeof raw === 'object' && raw ? str((raw as Record<string, unknown>).doc_key, 200) : ''
      return k ? byKey.get(k) ?? null : null
    })()
    const outcome = mergeItem(raw, now, prev, taken, article_rejected)
    if (outcome.status === 'skipped') {
      skipped++
      continue
    }
    if (outcome.status === 'rejected') {
      rejected.push({ doc_key: outcome.doc_key, reasons: outcome.reasons })
      continue
    }
    const { item } = outcome
    if (outcome.preserved.length) preserved.push({ doc_key: item.doc_key, fields: outcome.preserved })
    // 같은 내용을 다시 받으면 dateModified 를 올리지 않는다.
    const same = !!prev && sameContent(prev, item)
    item.updated_at = same ? prev!.updated_at || now : now
    // 원문 조회 실패로 보류된 항목은 같은 내용이 다시 와도 재대조한다 — 그래야 재전송으로 풀린다.
    if (item.source_key === 'kr_law_go_kr' && (!same || !item.date_check || !!item.date_check.error)) {
      toCheck.push({ item, prev: prev?.date_check ?? null })
    }
    byKey.set(item.doc_key, item)
    taken.set(item.slug, item.doc_key)
    upserted++
    if (hasArticle(item.article)) articles++
  }

  // 순차로 — 법제처에 동시 요청을 몰지 않는다(하루 몇 건).
  for (const { item, prev } of toCheck) {
    const fresh = await runDateCheck(item, now, fetchLaw)
    // 재수신(정정 포함)인데 원문을 못 읽었으면 — 저장된 대조가 시행일자를 갖고 있을 때 그 값을 유지하고 경고만 남긴다.
    // 신규 수신이거나 저장된 시행일자가 없으면 종전 정책(시행 날짜가 적힌 글은 보류) 그대로다.
    const verified = NEWS_LAW_DATES[item.doc_key]
    const known = prev && !prev.error && prev.effective ? prev : verified && prev ? { ...verified, checked_at: '2026-10-27T10:30:00.000Z' } : null
    item.date_check = fresh?.error && known ? recheckWithKnownDates(item, known, fresh.error) : fresh
    if (item.date_check?.warning) {
      date_warned.push({ doc_key: item.doc_key, reasons: [item.date_check.warning] })
    }
    if (item.date_check && isHeld(item)) {
      date_held.push({
        doc_key: item.doc_key,
        reasons: item.date_check.error ? [item.date_check.error] : item.date_check.reasons,
      })
    }
  }

  const merged = sortNews([...byKey.values()]).slice(0, NEWS_MAX_ITEMS)
  await kv.put(NEWS_LIST_KEY, JSON.stringify(merged))

  // 이번에 받은 항목 중 한자·가나 게이트에 걸린 것 — 정정 레이어를 덮은 표시값 기준으로 본다.
  const sent = new Set(rawItems.map((r) => (typeof r === 'object' && r ? str((r as Record<string, unknown>).doc_key, 200) : '')))
  const script_held: ItemReject[] = merged
    .filter((it) => sent.has(it.doc_key))
    .map((it) => cleanNewsProduct(dropHanKeywords(applyNewsCorrection(it))))
    .map((it) => ({ doc_key: it.doc_key, reasons: foreignScriptFields(it).map((f) => `한자·가나 포함: ${f}`) }))
    .filter((r) => r.reasons.length > 0)
  const title_held: ItemReject[] = merged
    .filter((it) => sent.has(it.doc_key))
    .map((it) => applyNewsCorrection(it))
    .map((it) => ({ doc_key: it.doc_key, reasons: hasTitleDefect(it) ? titleQualityReasons(it) : [] }))
    .filter((r) => r.reasons.length > 0)

  return { upserted, skipped, total: merged.length, articles, article_rejected, rejected, preserved, date_held, script_held, title_held, date_warned }
}

/**
 * doc_key 로 항목을 지운다.
 *
 * 삭제 경로가 없으면 **라이브에 테스트 1건도 넣어볼 수 없다**(공개 목록에 영구히 남는다).
 * 맥4 CF 토큰에는 KV 권한이 없어 블롭을 직접 손볼 수도 없으므로, 샘플 투입을
 * 되돌릴 수 있게 수신단과 같은 토큰으로 지울 수 있게 한다.
 */
export async function deleteNews(docKeys: string[]): Promise<{ deleted: number; total: number }> {
  const kv = getNewsKv()
  if (!kv) throw new Error('NEWS_KV binding missing')

  const want = new Set(docKeys.map((k) => str(k, 200)).filter(Boolean))
  if (!want.size) return { deleted: 0, total: (await readStoredNews()).length }

  const before = await readStoredNews()
  const kept = before.filter((it) => !want.has(it.doc_key))
  if (kept.length !== before.length) await kv.put(NEWS_LIST_KEY, JSON.stringify(kept))

  return { deleted: before.length - kept.length, total: kept.length }
}

/** `/news/<slug>` 렌더용 단건 조회. 슬러그는 고유하므로 첫 일치가 답이다. */
export async function findNewsBySlug(slug: string): Promise<NewsItem | null> {
  const want = slugify(slug)
  if (!want) return null
  return (await readAllNews()).find((it) => it.slug === want) ?? null
}

/**
 * 목록 카드용 경량 형태. 기사 본문을 떼고 `has_article` 만 남긴다.
 * 목록은 클라이언트 컴포넌트라 기사를 그대로 넘기면 본문 전체가 RSC 페이로드로
 * 따라 내려간다(150건 × 수 KB). 카드가 필요한 건 "링크를 걸지 말지" 뿐이다.
 */
export type NewsCard = Omit<NewsItem, 'article'> & { has_article: boolean }

export const toCard = ({ article, ...rest }: NewsItem): NewsCard => ({
  ...rest,
  has_article: hasArticle(article),
})

/**
 * 목록에 내보낼 수 있는 항목인지 — 제목 없는 항목은 **빈 카드**가 된다.
 *
 * 수신단이 빈 값 덮어쓰기를 막게 됐지만, 그 전에 만들어진 잔재와 KV 를 직접 손댄
 * 경우까지 막을 수는 없다. 렌더 쪽에서 한 번 더 거른다. **저장소에서 지우지는 않는다**
 * — readAllNews 가 걸러 버리면 upsert 의 read-modify-write 가 그 항목을 통째로 날린다.
 */
export const isListable = (it: NewsItem) => Boolean((it.title_ko || '').trim()) && !isHeld(it) && !hasForeignScript(it) && !hasTitleDefect(it)

export const listableNews = (items: NewsItem[]) => items.filter(isListable)

/** 기사가 붙어 색인 대상이 되는 항목만. 사이트맵·관련글에 쓴다. */
export function articlesOf(items: NewsItem[]): NewsItem[] {
  return items.filter((it) => it.slug && hasArticle(it.article) && !isHeld(it) && !hasForeignScript(it) && !hasTitleDefect(it))
}

/* ────────────────────────── 조회 ────────────────────────── */

export type NewsQuery = {
  scope?: string
  country?: string
  product?: string
  impact?: string
  q?: string
}

export function filterNews(items: NewsItem[], query: NewsQuery): NewsItem[] {
  const q = (query.q || '').trim().toLowerCase()
  return items.filter((it) => {
    if (query.scope && it.scope !== query.scope) return false
    if (query.country && it.country !== normalizeCountry(query.country)) return false
    if (query.product && it.product !== query.product) return false
    if (query.impact && it.impact !== query.impact) return false
    if (q) {
      const hay = `${it.title_ko} ${it.summary_ko} ${it.product} ${it.country} ${countryLabel(it.country)} ${it.stage}`.toLowerCase()
      if (!hay.includes(q)) return false
    }
    return true
  })
}

/** 카드 필터 드롭다운에 쓸 값 목록. 데이터에 실제로 존재하는 값만 노출한다. */
export function facetsOf(items: NewsItem[]) {
  const uniq = (vals: string[]) => [...new Set(vals.filter(Boolean))].sort((a, b) => a.localeCompare(b, 'ko'))
  return {
    countries: uniq(items.map((i) => i.country)),
    products: uniq(items.map((i) => i.product)),
    impacts: IMPACTS.filter((v) => items.some((i) => i.impact === v)),
  }
}
