import { MetadataRoute } from 'next'
// INHEGA-FOCUS-1103: 본문 정본 대신 경량 색인(prebuild scripts/build-blog-feed-index.mjs) — 워커 25 MiB 한도
import { FEED_POSTS_KO as blogPosts, getFeedTranslatedSlugs as getAllTranslatedSlugs } from '@/lib/blog-feed-index.generated'
import { REDIRECTED_BLOG_SLUGS } from '@/lib/blog-redirects'
import { INDUSTRY_PHOTOS, industryPhotoSrc } from '@/lib/service-card-images'
// INHEGA-FOCUS-1103 A: 서비스·업종 본문 정본 대신 slug 경량 색인(prebuild scripts/build-sitemap-index.mjs) — 워커 25 MiB 한도
import { SITEMAP_SERVICE_SLUGS, SITEMAP_INDUSTRY_SLUGS } from '@/lib/sitemap-index.generated'
import { PAGE_LASTMOD } from '@/lib/page-lastmod.generated'
import { FOCUS_SLUGS } from '@/lib/focus-services'
// AI-RECO-2 E-4: 업무 페이지 lastmod = 화면 '최종 수정일' = WebPage.dateModified (lib/page-lastmod.ts)
import { servicePageLastmod } from '@/lib/page-lastmod'

// 서비스 목록 단일 정본 — lib/services-catalog.ts (하드코딩 금지, 2026-09-22).
// 배포 보류분(DEPLOY_HOLD_SLUGS)은 카탈로그 단계에서 이미 제외돼 있다.
const getServiceSlugs = (l: 'ko' | 'en' | 'zh' | 'ja') => SITEMAP_SERVICE_SLUGS[l]
const getIndustrySlugs = (l: 'ko' | 'en' | 'zh' | 'ja') => SITEMAP_INDUSTRY_SLUGS[l]
const services = getServiceSlugs('ko')

// 업종 상세 ↔ 그 업종 사진(INH-PHOTO60, 보스 msg 2341 ⑤) — <image:image><image:loc>.
const photoOf = (slug: string) => (INDUSTRY_PHOTOS[slug] ? { images: [`https://inhega.co.kr${industryPhotoSrc(slug)}`] } : {})

// INHEGA-FOCUS-1103 2차(보스 msg 4784): 중점 필러 6개는 네 언어 모두 있으므로 사이트맵에도 xhtml:link hreflang 을 싣는다.
const focusAlternates = (slug: string) =>
  FOCUS_SLUGS.has(slug) && (['en', 'zh', 'ja'] as const).every((l) => getServiceSlugs(l).includes(slug))
    ? {
        alternates: {
          languages: {
            ko: `https://inhega.co.kr/services/${slug}`,
            en: `https://inhega.co.kr/en/services/${slug}`,
            zh: `https://inhega.co.kr/zh/services/${slug}`,
            ja: `https://inhega.co.kr/ja/services/${slug}`,
            'x-default': `https://inhega.co.kr/services/${slug}`,
          },
        },
      }
    : {}

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://inhega.co.kr'
  // lastmod 는 내용이 실제로 바뀐 날만 적는다(INH-REC-1B) — 요청 시각(new Date())은 쓰지 않는다.
  // NAVER-SEO-FIX-1031: 정적·서비스·업종 페이지도 원천 파일 마지막 커밋일(prebuild scripts/page-lastmod.mjs → PAGE_LASTMOD,
  // [lastmod-skip] 커밋 제외)로 전 URL 에 lastmod. 블로그 목록 = 그 언어 최신 글 날짜.
  const lm = (key: string) => (PAGE_LASTMOD[key] ? { lastModified: new Date(PAGE_LASTMOD[key]) } : {})
  const slm = (l: 'ko' | 'en' | 'zh' | 'ja', slug: string) => {
    const d = servicePageLastmod(l, slug)
    return d ? { lastModified: new Date(d) } : {}
  }
  const latestPost = blogPosts.reduce((a, p) => ((p.updated_at ?? p.created_at) > a ? (p.updated_at ?? p.created_at) : a), '')

  const staticPages = [
    { url: base, ...lm(''), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/about`, ...lm('/about'), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/services`, ...lm('/services'), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/blog`, ...(latestPost ? { lastModified: new Date(latestPost) } : {}), changeFrequency: 'weekly' as const, priority: 0.8 },
    // /news 는 KV 에서 매일 갱신되는 SSR 목록이라 daily. en/zh/ja 는 본문이 한국어
    // 그대로라 noindex + canonical→ko 이므로 사이트맵에 올리지 않는다.
    { url: `${base}/news`, ...lm('/news'), changeFrequency: 'daily' as const, priority: 0.8 },
    { url: `${base}/contact`, ...lm('/contact'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/quote`, ...lm('/quote'), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/privacy`, ...lm('/privacy'), changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/terms`, ...lm('/terms'), changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const servicePages = services.map((slug) => ({
    url: `${base}/services/${slug}`,
    ...slm('ko', slug),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    ...photoOf(slug),
    ...focusAlternates(slug),
  }))

  // I2 신규 업종 페이지(lib/industry-pages.ts) — 원고가 있는 언어만. ko 20 + en/zh/ja 각 10.
  const industryPages = (['ko', 'en', 'zh', 'ja'] as const).flatMap((l) =>
    getIndustrySlugs(l).map((slug) => ({
      url: `${base}${l === 'ko' ? '' : `/${l}`}/services/${slug}`,
      ...slm(l, slug),
      changeFrequency: 'monthly' as const,
      priority: l === 'ko' ? 0.8 : 0.7,
      ...photoOf(slug),
    }))
  )

  // Slugs that 301 elsewhere must not be submitted — GSC flags them as "Page with redirect".
  const indexablePosts = blogPosts.filter((post) => !REDIRECTED_BLOG_SLUGS.has(post.slug))

  const blogPages = indexablePosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at ?? post.created_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const locales = ['en', 'zh', 'ja'] as const
  const langHomePages = locales.map((l) => ({
    url: `${base}/${l}`,
    ...lm(`${l}:`),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))
  const langServiceIndexPages = locales.map((l) => ({
    url: `${base}/${l}/services`,
    ...lm(`${l}:/services`),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))
  const langServicePages = locales.flatMap((l) =>
    getServiceSlugs(l).map((slug) => ({
      url: `${base}/${l}/services/${slug}`,
      ...slm(l, slug),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      ...photoOf(slug),
      ...focusAlternates(slug),
    }))
  )
  // /about 은 en/zh/ja 도 index·self canonical 이고 ko 가 hreflang 으로 가리킨다 (M1 2026-10-03)
  const langAboutPages = locales.map((l) => ({
    url: `${base}/${l}/about`,
    ...lm(`${l}:/about`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  const langContactPages = locales.map((l) => ({
    url: `${base}/${l}/contact`,
    ...lm(`${l}:/contact`),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const langBlogIndexPages = locales.map((l) => ({
    url: `${base}/${l}/blog`,
    ...lm(`${l}:/blog`),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const langBlogPostPages = locales.flatMap((l) => {
    const translatedSlugs = getAllTranslatedSlugs(l).filter((slug) => !REDIRECTED_BLOG_SLUGS.has(slug))
    return translatedSlugs.map((slug) => {
      const post = blogPosts.find((p) => p.slug === slug)
      return {
        url: `${base}/${l}/blog/${slug}`,
        ...(post ? { lastModified: new Date(post.updated_at ?? post.created_at) } : {}),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }
    })
  })

  // AI-RECO-2 E-2: 처리 업무 전체 목록(4언어 상호 hreflang)
  const listAlt = {
    languages: {
      ko: `${base}/services/all`, en: `${base}/en/services/all`, zh: `${base}/zh/services/all`, ja: `${base}/ja/services/all`,
      'x-default': `${base}/services/all`,
    },
  }
  const serviceListPages = (['ko', 'en', 'zh', 'ja'] as const).map((l) => ({
    url: `${base}${l === 'ko' ? '' : `/${l}`}/services/all`,
    ...lm('svc-list'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    alternates: listAlt,
  }))

  return [...staticPages, ...serviceListPages, ...servicePages, ...industryPages, ...blogPages, ...langHomePages, ...langServiceIndexPages, ...langServicePages, ...langAboutPages, ...langContactPages, ...langBlogIndexPages, ...langBlogPostPages]
}
