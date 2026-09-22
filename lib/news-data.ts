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
}

/** 원문 출처 표기용 기관명. 출처가 정부·기관 공식 자료임을 카드에 명시한다. */
export const SOURCE_LABELS: Record<string, string> = {
  us_federal_register: '미국 연방관보(Federal Register)',
  wto_eping: 'WTO ePing(TBT/SPS 통보문)',
  jp_egov_pubcomment: '일본 e-Gov 의견공모',
  kr_law_go_kr: '국가법령정보센터',
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

/**
 * 수신 항목 1건을 정제한다. doc_key 가 없으면 저장할 수 없으므로 null 을 돌려준다.
 * (upsert 기준 키라서 비어 있으면 서로 덮어쓴다)
 */
export function normalizeItem(raw: unknown, now: string): NewsItem | null {
  if (!raw || typeof raw !== 'object') return null
  const r = raw as Record<string, unknown>
  const doc_key = str(r.doc_key, 200)
  if (!doc_key) return null

  const relevanceRaw = Number(r.relevance)
  const relevance = Number.isFinite(relevanceRaw)
    ? Math.min(100, Math.max(0, Math.round(relevanceRaw)))
    : 0

  return {
    doc_key,
    source_key: str(r.source_key, 60),
    country: str(r.country, 60),
    scope: oneOf(r.scope, SCOPES),
    title_ko: str(r.title_ko, 300),
    summary_ko: str(r.summary_ko, 1200),
    product: str(r.product, 200),
    impact: oneOf(r.impact, IMPACTS),
    opportunity: oneOf(r.opportunity, OPPORTUNITIES),
    opportunity_reason: str(r.opportunity_reason, 600),
    stage: str(r.stage, 120),
    deadline: isoDate(r.deadline),
    relevance,
    url: safeUrl(r.url),
    published_date: isoDate(r.published_date) || str(r.published_date, 40),
    analyzed_at: str(r.analyzed_at, 40),
    ingested_at: now,
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

export async function readAllNews(): Promise<NewsItem[]> {
  const kv = getNewsKv()
  if (!kv) return []
  try {
    const raw = await kv.get(NEWS_LIST_KEY, 'text')
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed as NewsItem[]) : []
  } catch {
    // 저장소 장애가 페이지 500 으로 번지지 않게 한다 — 빈 목록 + "업데이트 준비 중".
    return []
  }
}

export type UpsertResult = { upserted: number; skipped: number; total: number }

export async function upsertNews(rawItems: unknown[]): Promise<UpsertResult> {
  const kv = getNewsKv()
  if (!kv) throw new Error('NEWS_KV binding missing')

  const now = new Date().toISOString()
  const incoming: NewsItem[] = []
  let skipped = 0
  for (const raw of rawItems) {
    const item = normalizeItem(raw, now)
    if (item) incoming.push(item)
    else skipped++
  }

  const byKey = new Map<string, NewsItem>()
  for (const item of await readAllNews()) byKey.set(item.doc_key, item)
  // 같은 요청 안에 doc_key 가 중복돼도 마지막 것이 이긴다(upsert 기준 = doc_key).
  for (const item of incoming) byKey.set(item.doc_key, item)

  const merged = sortNews([...byKey.values()]).slice(0, NEWS_MAX_ITEMS)
  await kv.put(NEWS_LIST_KEY, JSON.stringify(merged))

  return { upserted: incoming.length, skipped, total: merged.length }
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
    if (query.country && it.country !== query.country) return false
    if (query.product && it.product !== query.product) return false
    if (query.impact && it.impact !== query.impact) return false
    if (q) {
      const hay = `${it.title_ko} ${it.summary_ko} ${it.product} ${it.country} ${it.stage}`.toLowerCase()
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
