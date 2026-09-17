import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts-data'
import { getAllTranslatedSlugs } from '@/lib/i18n/blog-i18n'
import { REDIRECTED_BLOG_SLUGS } from '@/lib/blog-redirects'
import { isDeployHold } from '@/lib/services-data'

// en/zh/ja 번역본이 있는 서비스 — 언어별 URL 은 이 목록만 제출한다.
const translatedServices = [
  'logistics', 'currency-exchange', 'urban-guesthouse', 'hostel', 'hanok',
  'building-usage', 'food-manufacturing', 'women-enterprise', 'nonprofit',
  'tobacco', 'venture-cert', 'haccp', 'cosmetics', 'procurement',
  'research-lab', 'ecig', 'sports-club', 'location-based-service',
]

// inhega.com 에서 신규 이관한 서비스 — 이번 통합에서는 한국어만 만들었으므로
// KO URL 만 제출한다(en/zh/ja 는 404).
const koOnlyServices = [
  'medical-device', 'health-food', 'factory', 'freight-trucking', 'mainbiz',
  'rnd-support', 'foundation', 'social-coop', 'social-enterprise', 'functional-cosmetics',
]

// 보스 확정 대기분(DEPLOY_HOLD_SLUGS)은 사이트맵에 제출하지 않는다 — 2026-09-17.
const services = [...translatedServices, ...koOnlyServices].filter((s) => !isDeployHold(s))

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://inhega.co.kr'
  const now = new Date()

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/quote`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const servicePages = services.map((slug) => ({
    url: `${base}/services/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Slugs that 301 elsewhere must not be submitted — GSC flags them as "Page with redirect".
  const indexablePosts = blogPosts.filter((post) => !REDIRECTED_BLOG_SLUGS.has(post.slug))

  const blogPages = indexablePosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.created_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const locales = ['en', 'zh', 'ja'] as const
  const langHomePages = locales.map((l) => ({
    url: `${base}/${l}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))
  const langServiceIndexPages = locales.map((l) => ({
    url: `${base}/${l}/services`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))
  const langServicePages = locales.flatMap((l) =>
    translatedServices.filter((slug) => !isDeployHold(slug)).map((slug) => ({
      url: `${base}/${l}/services/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  )
  const langContactPages = locales.map((l) => ({
    url: `${base}/${l}/contact`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const langBlogIndexPages = locales.map((l) => ({
    url: `${base}/${l}/blog`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const langBlogPostPages = locales.flatMap((l) => {
    const translatedSlugs = getAllTranslatedSlugs(l).filter((slug) => !REDIRECTED_BLOG_SLUGS.has(slug))
    return translatedSlugs.map((slug) => {
      const post = blogPosts.find((p) => p.slug === slug)
      return {
        url: `${base}/${l}/blog/${slug}`,
        lastModified: post ? new Date(post.created_at) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }
    })
  })

  return [...staticPages, ...servicePages, ...blogPages, ...langHomePages, ...langServiceIndexPages, ...langServicePages, ...langContactPages, ...langBlogIndexPages, ...langBlogPostPages]
}
