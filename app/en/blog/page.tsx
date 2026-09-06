import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts-data'
import { getAllTranslatedSlugs, getBlogI18n } from '@/lib/i18n/blog-i18n'
import type { Metadata } from 'next'
import gridStyles from '@/app/services-list.module.css'

export const metadata: Metadata = {
  title: 'Korea Licensing & Permit Blog | Vision Administrative Office',
  description: 'Expert guides on Korean business licensing — freight forwarding, currency exchange, food permits, HACCP, and more. Written by licensed administrative scriveners.',
  alternates: {
    canonical: 'https://inhega.co.kr/en/blog',
    languages: {
      ko: 'https://inhega.co.kr/blog',
      en: 'https://inhega.co.kr/en/blog',
      zh: 'https://inhega.co.kr/zh/blog',
      ja: 'https://inhega.co.kr/ja/blog',
      'x-default': 'https://inhega.co.kr/blog',
    },
  },
  openGraph: {
    title: 'Korea Licensing & Permit Blog | Vision Administrative Office',
    description: 'Expert guides on Korean business licensing for foreign companies and investors.',
    url: 'https://inhega.co.kr/en/blog',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'Vision Administrative Office Blog' }],
    type: 'website',
    locale: 'en_US',
  },
}

const PAGE_SIZE = 15

export default async function EnBlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam || '1', 10))

  const translatedSlugs = getAllTranslatedSlugs('en')
  const allPosts = translatedSlugs
    .map((slug) => {
      const i18n = getBlogI18n('en', slug)!
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
          <span className="badge badge-white text-label">Blog</span>
          <h1 className="text-display" style={{ color: 'white', marginTop: '1rem' }}>
            Korea Licensing<br />Information Center
          </h1>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
            Up-to-date guides on Korean government permits and licenses, written by licensed administrative scriveners.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className={gridStyles.grid}>
            {translatedPosts.map(({ slug, i18n, ko }, idx) => (
              <Link
                key={slug}
                href={`/en/blog/${slug}`}
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
                        {new Date(ko.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--burgundy)' }}>Read</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '3rem' }}>
              {currentPage > 1 && (
                <Link href={`/en/blog?page=${currentPage - 1}`} style={{
                  padding: '0.5rem 1rem', borderRadius: '8px',
                  border: '1px solid var(--border)', color: 'var(--charcoal)',
                  textDecoration: 'none', fontSize: '0.875rem',
                }}>Prev</Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link key={p} href={`/en/blog?page=${p}`} style={{
                  padding: '0.5rem 0.875rem', borderRadius: '8px',
                  border: p === currentPage ? 'none' : '1px solid var(--border)',
                  background: p === currentPage ? 'var(--burgundy)' : 'transparent',
                  color: p === currentPage ? 'white' : 'var(--charcoal)',
                  textDecoration: 'none', fontSize: '0.875rem', fontWeight: p === currentPage ? 700 : 400,
                }}>{p}</Link>
              ))}
              {currentPage < totalPages && (
                <Link href={`/en/blog?page=${currentPage + 1}`} style={{
                  padding: '0.5rem 1rem', borderRadius: '8px',
                  border: '1px solid var(--border)', color: 'var(--charcoal)',
                  textDecoration: 'none', fontSize: '0.875rem',
                }}>Next</Link>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
