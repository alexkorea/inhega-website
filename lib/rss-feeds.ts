// NAVER-RSS(10-23): 블로그 피드 원천 = lib/blog-posts-data.ts(ko) + lib/i18n/blog-i18n.ts(en/zh/ja). 사이트맵과 같은 제외 규칙(301 슬러그).
import type { Locale } from '@/lib/i18n/blog-i18n'
// INHEGA-FOCUS-1103: 본문 정본 대신 경량 색인(prebuild scripts/build-blog-feed-index.mjs) — 워커 25 MiB 한도
import { FEED_POSTS_KO as blogPosts, getFeedTranslatedSlugs as getAllTranslatedSlugs, getFeedI18n as getBlogI18n } from '@/lib/blog-feed-index.generated'
import { REDIRECTED_BLOG_SLUGS } from '@/lib/blog-redirects'
import { buildRss, RSS_HEADERS } from '@/lib/rss'
import { RSS_META } from '@/lib/rss-meta'
import { ogThumb } from '@/lib/og-thumbs.generated'

const BASE = 'https://inhega.co.kr'

export function rssResponse(locale: 'ko' | Locale): Response {
  const m = RSS_META[locale]
  const items =
    locale === 'ko'
      ? blogPosts
          .filter((p) => !REDIRECTED_BLOG_SLUGS.has(p.slug))
          .map((p) => ({ title: p.title, link: `${BASE}/blog/${p.slug}`, description: p.meta_description || p.excerpt, date: p.created_at,
            image: ogThumb('ko', p.slug) ? `${BASE}${ogThumb('ko', p.slug)}` : undefined }))
      : getAllTranslatedSlugs(locale)
          .filter((s) => !REDIRECTED_BLOG_SLUGS.has(s))
          .flatMap((s) => {
            const t = getBlogI18n(locale, s)
            const ko = blogPosts.find((p) => p.slug === s)
            return t && ko ? [{ title: t.title, link: `${BASE}/${locale}/blog/${s}`, description: t.metaDescription || t.excerpt, date: ko.created_at,
              image: ogThumb(locale, s) ? `${BASE}${ogThumb(locale, s)}` : undefined }] : []
          })
  const xml = buildRss(
    { title: m.title, link: `${BASE}${locale === 'ko' ? '' : `/${locale}`}/blog`, description: m.desc, language: locale, self: `${BASE}${m.path}` },
    items
  )
  return new Response(xml, { headers: RSS_HEADERS })
}
