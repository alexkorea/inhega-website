/**
 * POST|PATCH /api/news/ingest — 맥3 REGWATCH(n8n) 수신단.
 *
 *   헤더  X-News-Token: <NEWS_INGEST_TOKEN>
 *   점검  GET ?raw=1[&broken=1] — 저장소 원본(공개 목록이 숨긴 행까지) 조회
 *   본문  {"items":[{ doc_key, slug, source_key, country, scope, title_ko, summary_ko,
 *                     product, impact, opportunity, opportunity_reason, stage,
 *                     deadline, relevance, url, published_date, analyzed_at,
 *                     article:{ meta_title, meta_description, h1, lead,
 *                               sections:[{h2, body}], faq:[{q,a}], keywords,
 *                               disclaimer, generated_at, model, og_image } }, ...]}
 *   응답  {"ok":true,"upserted":N,"skipped":N,"total":N,"articles":N,
 *          "article_rejected":[{"doc_key":"...","reasons":["..."]}],
 *          "rejected":[{"doc_key":"...","reasons":["..."]}],
 *          "preserved":[{"doc_key":"...","fields":["title_ko"]}]}
 *
 * upsert 기준은 doc_key. 같은 doc_key 를 다시 보내면 **payload 에 있는 키만**, 그중에서도
 * **값이 빈 키는 빼고** 덮어쓴다. 그래서 RW-03 이 요약 전체를 보내고, RW-04 가 나중에
 * `{doc_key, article}` 만 보내 기사를 채우는 2단 발행이 가능하다. 빈 문자열이나 enum
 * 불일치 값을 보내도 기존 값은 살아남고, 지켜진 필드가 `preserved` 로 돌아온다
 * (보낸 쪽 버그 신호 — 조용히 넘기지 않는다). 항목을 내리는 길은 DELETE 뿐이다.
 * **신규** doc_key 는 title_ko·url·published_date 가 모두 있어야 생성된다 — 없으면
 * 만들지 않고 `rejected` 에 사유를 돌려준다(빈 카드 방지).
 * POST 와 PATCH 는 동작이 같다(PATCH 는 의도 표기용).
 *
 * 기사는 수신 시점에 게이트를 통과해야 저장된다(메타 길이·금지 표현). 불합격이면
 * **기사만** 버리고 요약은 살린 뒤 `article_rejected` 에 사유를 돌려준다 — 조용한
 * 실패를 만들지 않기 위해서다. 토큰은 Pages 시크릿, KV 바인딩은 NEWS_KV.
 */
import { NextRequest, NextResponse } from 'next/server'
import { getCloudflareContext } from '@opennextjs/cloudflare'
import { NEWS_MAX_BATCH, deleteNews, isListable, readAllNews, upsertNews } from '@/lib/news-data'

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
    if (result.rejected.length) {
      console.warn('[news/ingest] 신규 항목 거부(필수 필드 누락)', JSON.stringify(result.rejected))
    }
    if (result.preserved.length) {
      console.warn('[news/ingest] 빈 값 수신 — 기존 값 유지', JSON.stringify(result.preserved))
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

/**
 * 연결 점검용. 토큰 유효성만 알려주고 데이터는 주지 않는다.
 *
 * `?raw=1` 은 **저장소 원본**을 돌려준다(기사 본문 제외). 공개 목록은 제목 없는 항목을
 * 숨기므로, 그 항목이 무엇인지 보려면 숨기지 않는 읽기 경로가 하나 있어야 한다
 * — 없으면 "지워지지도 보이지도 않는" 행이 생긴다. `?raw=1&broken=1` 은 그중
 * 필수 필드가 빠진 행만 추려 준다(맥3 가 무엇을 재전송해야 하는지 바로 보라고).
 */
export async function GET(req: NextRequest) {
  const expected = ingestToken()
  if (!expected) return json({ ok: false, error: 'not_configured' }, 503)
  if (!tokenMatches(req.headers.get('x-news-token') || '', expected)) {
    return json({ ok: false, error: 'unauthorized' }, 401)
  }

  if (req.nextUrl.searchParams.get('raw') !== '1') return json({ ok: true, ready: true }, 200)

  const all = await readAllNews()
  const onlyBroken = req.nextUrl.searchParams.get('broken') === '1'
  const items = (onlyBroken ? all.filter((it) => !isListable(it) || !it.url || !it.published_date) : all).map(
    ({ article, ...rest }) => ({ ...rest, has_article: !!article })
  )
  return json({ ok: true, total: all.length, count: items.length, items }, 200)
}
