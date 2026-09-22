/**
 * POST /api/news/ingest — 맥3 REGWATCH(n8n) 수신단.
 *
 *   헤더  X-News-Token: <NEWS_INGEST_TOKEN>
 *   본문  {"items":[{ doc_key, source_key, country, scope, title_ko, summary_ko,
 *                     product, impact, opportunity, opportunity_reason, stage,
 *                     deadline, relevance, url, published_date, analyzed_at }, ...]}
 *   응답  {"ok":true,"upserted":N}
 *
 * upsert 기준은 doc_key. 같은 doc_key 를 다시 보내면 덮어쓴다(중복 게시 없음).
 * 토큰은 Pages 프로젝트의 시크릿 환경변수이며 KV 바인딩은 NEWS_KV 다.
 */
import { NextRequest, NextResponse } from 'next/server'
import { getCloudflareContext } from '@opennextjs/cloudflare'
import { NEWS_MAX_BATCH, upsertNews } from '@/lib/news-data'

export const dynamic = 'force-dynamic'

function ingestToken(): string {
  try {
    const env = getCloudflareContext().env as unknown as Record<string, string | undefined>
    if (env?.NEWS_INGEST_TOKEN) return env.NEWS_INGEST_TOKEN
  } catch {
    // getCloudflareContext 는 CF 런타임 밖(로컬 next dev)에서 throw 한다 — process.env 로 폴백.
  }
  return process.env.NEWS_INGEST_TOKEN || ''
}

/** 길이 노출·조기 종료를 피하는 상수시간 비교. */
function tokenMatches(given: string, expected: string): boolean {
  if (given.length !== expected.length) return false
  let diff = 0
  for (let i = 0; i < given.length; i++) diff |= given.charCodeAt(i) ^ expected.charCodeAt(i)
  return diff === 0
}

const json = (body: unknown, status: number) =>
  NextResponse.json(body, { status, headers: { 'cache-control': 'no-store' } })

export async function POST(req: NextRequest) {
  const expected = ingestToken()
  if (!expected) {
    console.error('[news/ingest] NEWS_INGEST_TOKEN 미설정 — 수신 거부')
    return json({ ok: false, error: 'not_configured' }, 503)
  }
  if (!tokenMatches(req.headers.get('x-news-token') || '', expected)) {
    return json({ ok: false, error: 'unauthorized' }, 401)
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400)
  }

  const items = (body as { items?: unknown })?.items
  if (!Array.isArray(items)) return json({ ok: false, error: 'items_required' }, 400)
  if (items.length > NEWS_MAX_BATCH) {
    return json({ ok: false, error: 'too_many_items', max: NEWS_MAX_BATCH }, 413)
  }

  try {
    const { upserted, skipped, total } = await upsertNews(items)
    return json({ ok: true, upserted, skipped, total }, 200)
  } catch (err) {
    console.error('[news/ingest] 저장 실패', err)
    return json({ ok: false, error: 'store_unavailable' }, 500)
  }
}

/** 연결 점검용. 토큰 유효성만 알려주고 데이터는 주지 않는다. */
export async function GET(req: NextRequest) {
  const expected = ingestToken()
  if (!expected) return json({ ok: false, error: 'not_configured' }, 503)
  if (!tokenMatches(req.headers.get('x-news-token') || '', expected)) {
    return json({ ok: false, error: 'unauthorized' }, 401)
  }
  return json({ ok: true, ready: true }, 200)
}
