import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts-data'
import { getAllTranslatedSlugs } from '@/lib/i18n/blog-i18n'

const services = [
  'logistics', 'currency-exchange', 'urban-guesthouse', 'hostel', 'hanok',
  'building-usage', 'food-manufacturing', 'women-enterprise', 'nonprofit',
  'tobacco', 'venture-cert', 'haccp', 'cosmetics', 'procurement',
  'research-lab', 'ecig', 'sports-club', 'location-based-service',
]

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

  const blogPages = blogPosts.map((post) => ({
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
  const langServicePages = locales.flatMap((l) =>
    services.map((slug) => ({
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
    const translatedSlugs = getAllTranslatedSlugs(l)
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

  return [...staticPages, ...servicePages, ...blogPages, ...langHomePages, ...langServicePages, ...langContactPages, ...langBlogIndexPages, ...langBlogPostPages]
}
