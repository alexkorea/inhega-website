import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts-data'
import { getAllTranslatedSlugs } from '@/lib/i18n/blog-i18n'
import { REDIRECTED_BLOG_SLUGS } from '@/lib/blog-redirects'
import { getServiceSlugs } from '@/lib/services-catalog'

// 서비스 목록 단일 정본 — lib/services-catalog.ts (하드코딩 금지, 2026-09-22).
// 배포 보류분(DEPLOY_HOLD_SLUGS)은 카탈로그 단계에서 이미 제외돼 있다.
const services = getServiceSlugs('ko')

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
    getServiceSlugs(l).map((slug) => ({
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
