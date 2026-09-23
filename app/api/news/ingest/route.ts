/**
 * POST|PATCH /api/news/ingest — 맥3 REGWATCH(n8n) 수신단.
 *
 *   헤더  X-News-Token: <NEWS_INGEST_TOKEN>
 *   본문  {"items":[{ doc_key, slug, source_key, country, scope, title_ko, summary_ko,
 *                     product, impact, opportunity, opportunity_reason, stage,
 *                     deadline, relevance, url, published_date, analyzed_at,
 *                     article:{ meta_title, meta_description, h1, lead,
 *                               sections:[{h2, body}], faq:[{q,a}], keywords,
 *                               disclaimer, generated_at, model, og_image } }, ...]}
 *   응답  {"ok":true,"upserted":N,"skipped":N,"total":N,"articles":N,
 *          "article_rejected":[{"doc_key":"...","reasons":["..."]}]}
 *
 * upsert 기준은 doc_key. 같은 doc_key 를 다시 보내면 **payload 에 있는 키만** 덮어쓴다.
 * 그래서 RW-03 이 요약 전체를 보내고, RW-04 가 나중에 `{doc_key, article}` 만 보내
 * 기사를 채우는 2단 발행이 가능하다. POST 와 PATCH 는 동작이 같다(PATCH 는 의도 표기용).
 *
 * 기사는 수신 시점에 게이트를 통과해야 저장된다(메타 길이·금지 표현). 불합격이면
 * **기사만** 버리고 요약은 살린 뒤 `article_rejected` 에 사유를 돌려준다 — 조용한
 * 실패를 만들지 않기 위해서다. 토큰은 Pages 시크릿, KV 바인딩은 NEWS_KV.
 */
import { NextRequest, NextResponse } from 'next/server'
import { getCloudflareContext } from '@opennextjs/cloudflare'
import { NEWS_MAX_BATCH, deleteNews, upsertNews } from '@/lib/news-data'

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
    const result = await upsertNews(items)
    if (result.article_rejected.length) {
      console.warn('[news/ingest] 기사 게이트 불합격', JSON.stringify(result.article_rejected))
    }
    return json({ ok: true, ...result }, 200)
  } catch (err) {
    console.error('[news/ingest] 저장 실패', err)
    return json({ ok: false, error: 'store_unavailable' }, 500)
  }
}

/** 기사만 뒤늦게 채울 때 쓰는 별칭. 병합 규칙이 같으므로 POST 와 동일하게 처리한다. */
export const PATCH = POST

/**
 * DELETE /api/news/ingest — `{"doc_keys":["..."]}` 로 항목을 지운다.
 *
 * 삭제 경로가 없으면 라이브에 샘플 1건도 넣어볼 수 없다(공개 목록에 영구히 남고
 * 맥4 CF 토큰에는 KV 권한이 없어 되돌릴 수단이 없다). 수신과 같은 토큰을 쓴다.
 */
export async function DELETE(req: NextRequest) {
  const expected = ingestToken()
  if (!expected) return json({ ok: false, error: 'not_configured' }, 503)
  if (!tokenMatches(req.headers.get('x-news-token') || '', expected)) {
    return json({ ok: false, error: 'unauthorized' }, 401)
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400)
  }

  const docKeys = (body as { doc_keys?: unknown })?.doc_keys
  if (!Array.isArray(docKeys)) return json({ ok: false, error: 'doc_keys_required' }, 400)
  if (docKeys.length > NEWS_MAX_BATCH) {
    return json({ ok: false, error: 'too_many_items', max: NEWS_MAX_BATCH }, 413)
  }

  try {
    const result = await deleteNews(docKeys.map(String))
    return json({ ok: true, ...result }, 200)
  } catch (err) {
    console.error('[news/ingest] 삭제 실패', err)
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
