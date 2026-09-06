import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts-data'
import { getAllTranslatedSlugs, getBlogI18n } from '@/lib/i18n/blog-i18n'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '韩国许可申请博客 | Vision行政士事务所',
  description: '韩国企业许可专业指南——国际货运代理、换汇业、食品许可、HACCP等，由持牌行政士撰写。',
  alternates: {
    canonical: 'https://inhega.co.kr/zh/blog',
    languages: {
      ko: 'https://inhega.co.kr/blog',
      en: 'https://inhega.co.kr/en/blog',
      zh: 'https://inhega.co.kr/zh/blog',
      ja: 'https://inhega.co.kr/ja/blog',
      'x-default': 'https://inhega.co.kr/blog',
    },
  },
  openGraph: {
    title: '韩国许可申请博客 | Vision行政士事务所',
    description: '面向外国企业和投资者的韩国企业许可专业指南。',
    url: 'https://inhega.co.kr/zh/blog',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'Vision行政士事务所博客' }],
    type: 'website',
    locale: 'zh_CN',
  },
}

const PAGE_SIZE = 15

export default async function ZhBlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam || '1', 10))

  const translatedSlugs = getAllTranslatedSlugs('zh')
  const allPosts = translatedSlugs
    .map((slug) => {
      const i18n = getBlogI18n('zh', slug)!
      const ko = blogPosts.find((p) => p.slug === slug)!
      return { slug, i18n, ko }
    })
    .sort((a, b) => new Date(b.ko.created_at).getTime() - new Date(a.ko.created_at).getTime())

  const total = allPosts.length
  const totalPages = Math.ceil(total / PAGE_SIZE)
  const currentPage = Math.min(page, totalPages || 1)
  const translatedPosts = allPosts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <div>
      <section style={{ background: 'var(--navy)', padding: '4rem 0 4rem', paddingTop: 'calc(72px + 4rem)' }}>
        <div className="container">
          <span className="badge badge-white text-label">博客</span>
          <h1 className="text-display" style={{ color: 'white', marginTop: '1rem' }}>
            韩国许可申请<br />信息中心
          </h1>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
            由持牌行政士撰写的韩国政府许可最新指南与实务技巧。
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {translatedPosts.map(({ slug, i18n, ko }, idx) => (
              <Link
                key={slug}
                href={`/zh/blog/${slug}`}
                className={`fade-up delay-${Math.min(idx % 4 + 1, 4)}`}
                style={{ textDecoration: 'none' }}
              >
                <article style={{
                  background: 'var(--white)', borderRadius: '16px',
                  border: '1px solid var(--border)', overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}>
                  {ko.cover_image && (
                    <div style={{ height: '200px', background: `url(${ko.cover_image}) center/cover` }} />
                  )}
                  <div style={{ padding: '1.5rem' }}>
                    {i18n.category && (
                      <span className="badge badge-navy" style={{ fontSize: '0.6875rem', marginBottom: '0.75rem' }}>{i18n.category}</span>
                    )}
                    <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                      {i18n.title}
                    </h2>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {i18n.excerpt.substring(0, 100)}...
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--slate-light)' }}>
                        {new Date(ko.created_at).toLocaleDateString('zh-CN', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--burgundy)' }}>阅读 →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '3rem' }}>
              {currentPage > 1 && (
                <Link href={`/zh/blog?page=${currentPage - 1}`} style={{
                  padding: '0.5rem 1rem', borderRadius: '8px',
                  border: '1px solid var(--border)', color: 'var(--charcoal)',
                  textDecoration: 'none', fontSize: '0.875rem',
                }}>← 上一页</Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link key={p} href={`/zh/blog?page=${p}`} style={{
                  padding: '0.5rem 0.875rem', borderRadius: '8px',
                  border: p === currentPage ? 'none' : '1px solid var(--border)',
                  background: p === currentPage ? 'var(--burgundy)' : 'transparent',
                  color: p === currentPage ? 'white' : 'var(--charcoal)',
                  textDecoration: 'none', fontSize: '0.875rem', fontWeight: p === currentPage ? 700 : 400,
                }}>{p}</Link>
              ))}
              {currentPage < totalPages && (
                <Link href={`/zh/blog?page=${currentPage + 1}`} style={{
                  padding: '0.5rem 1rem', borderRadius: '8px',
                  border: '1px solid var(--border)', color: 'var(--charcoal)',
                  textDecoration: 'none', fontSize: '0.875rem',
                }}>下一页 →</Link>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
