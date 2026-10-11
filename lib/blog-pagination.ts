// INH-REC-1C: 블로그 목록 페이지네이션 단일 규칙 (ko·en·zh·ja 공통).
// 정규 주소는 1쪽 = /blog, 2쪽 이상 = /blog?page=N 하나뿐이고 canonical 도 자기 자신이다.
// ?page=1·0·abc·02 같은 비정규 값은 정규 주소로 영구 이동, 마지막 쪽을 넘으면 404.
// 쪽 수가 언어마다 달라(ko 12 · en 4 등) N쪽끼리는 같은 내용이 아니므로 hreflang 은 1쪽에만 둔다.
import { notFound, permanentRedirect } from 'next/navigation'

export const BLOG_PAGE_SIZE = 16

type SearchParams = Record<string, string | string[] | undefined>

export function blogPageHref(base: string, page: number): string {
  return page <= 1 ? base : `${base}?page=${page}`
}

// generateMetadata 용 — 정규형일 때만 그 쪽 번호, 나머지는 1 (어차피 페이지에서 이동·404 된다)
export function requestedBlogPage(sp: SearchParams): number {
  const raw = sp.page
  return typeof raw === 'string' && /^[1-9]\d*$/.test(raw) ? Number(raw) : 1
}

// 페이지 본문용 — 비정규 주소는 여기서 끝난다(이동 또는 404). 다른 쿼리(utm 등)는 이동 때 보존.
export function resolveBlogPage(sp: SearchParams, totalPages: number, base: string): number {
  const raw = sp.page
  if (raw === undefined) return 1
  const first = Array.isArray(raw) ? raw[0] : raw
  const n = parseInt(first ?? '', 10)
  const page = Number.isFinite(n) && n >= 1 ? n : 1
  if (page > Math.max(totalPages, 1)) notFound()
  if (typeof raw === 'string' && raw === String(page) && page >= 2) return page

  const rest = new URLSearchParams()
  for (const [k, v] of Object.entries(sp)) {
    if (k === 'page' || v === undefined) continue
    for (const x of Array.isArray(v) ? v : [v]) rest.append(k, x)
  }
  if (page >= 2) rest.set('page', String(page))
  const qs = rest.toString()
  permanentRedirect(qs ? `${base}?${qs}` : base)
}

export function blogListMetadata<T extends { title?: unknown; alternates?: unknown; openGraph?: unknown }>(
  meta: T,
  origin: string,
  base: string,
  page: number,
  pageLabel: (n: number) => string,
): T {
  if (page < 2) return meta
  const url = `${origin}${blogPageHref(base, page)}`
  const og = (meta.openGraph ?? {}) as Record<string, unknown>
  // '블로그 | 사무소명' → '블로그 2쪽 | 사무소명' (쪽마다 제목이 달라야 중복 제목이 안 된다)
  const withPage = (t: unknown) => String(t).replace(/^(.*?)( \| .*)?$/, `$1 ${pageLabel(page)}$2`)
  return {
    ...meta,
    title: withPage(meta.title),
    alternates: { canonical: url },
    openGraph: { ...og, url, title: withPage(og.title ?? meta.title) },
  }
}
