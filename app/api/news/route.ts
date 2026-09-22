/**
 * GET /api/news?scope=&country=&product=&impact=&q=&limit=50&cursor=
 *
 * 공개 목록 JSON. /news 페이지는 KV 를 직접 읽으므로 이 라우트에 의존하지 않는다
 * (서브리퀘스트 절약). 외부 확인·맥3 자체점검·향후 클라이언트 페이징용이다.
 * 응답: {"ok":true,"total":N,"count":N,"cursor":"<다음 offset>"|null,"items":[...]}
 */
import { NextRequest, NextResponse } from 'next/server'
import { filterNews, readAllNews } from '@/lib/news-data'

export const dynamic = 'force-dynamic'

const DEFAULT_LIMIT = 50
const MAX_LIMIT = 200

export async function GET(req: NextRequest) {
  const sp = req.nextUrl.searchParams
  const limitRaw = parseInt(sp.get('limit') || '', 10)
  const limit = Number.isFinite(limitRaw) ? Math.min(MAX_LIMIT, Math.max(1, limitRaw)) : DEFAULT_LIMIT
  const cursorRaw = parseInt(sp.get('cursor') || '', 10)
  const offset = Number.isFinite(cursorRaw) && cursorRaw > 0 ? cursorRaw : 0

  const all = filterNews(await readAllNews(), {
    scope: sp.get('scope') || '',
    country: sp.get('country') || '',
    product: sp.get('product') || '',
    impact: sp.get('impact') || '',
    q: sp.get('q') || '',
  })
  const items = all.slice(offset, offset + limit)
  const next = offset + items.length

  // 목록 JSON 도 페이지와 같은 신선도(≤10분)를 넘지 않게 한다.
  return NextResponse.json(
    { ok: true, total: all.length, count: items.length, cursor: next < all.length ? String(next) : null, items },
    { headers: { 'cache-control': 'public, max-age=0, must-revalidate, s-maxage=600' } }
  )
}
