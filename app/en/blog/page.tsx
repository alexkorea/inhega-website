import Link from 'next/link'
// A-3: 목록은 본문 정본 대신 목록 전용 색인(prebuild 생성)을 읽는다 — 워커 번들에서 본문 제외.
import { LIST_POSTS_I18N } from '@/lib/blog-list-index.generated'
import type { Metadata } from 'next'
import gridStyles from '@/app/services-list.module.css'
import { ogCard } from '@/lib/og-thumbs.generated'
import { BLOG_PAGE_SIZE, blogListMetadata, blogPageHref, requestedBlogPage, resolveBlogPage } from '@/lib/blog-pagination'

const metadata: Metadata = {
  title: 'Korea Licensing & Permit Blog | YouSun Administrative Agency',
  description: 'Expert guides on Korean business licensing — freight forwarding, currency exchange, food permits, HACCP, and more. Written by licensed administrative agents.',
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
    title: 'Korea Licensing & Permit Blog | YouSun Administrative Agency',
    description: 'Expert guides on Korean business licensing for foreign companies and investors.',
    url: 'https://inhega.co.kr/en/blog',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Agency Blog' }],
    type: 'website',
    locale: 'en_US',
  },
}

export async function generateMetadata({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }): Promise<Metadata> {
  return blogListMetadata(metadata, 'https://inhega.co.kr', '/en/blog', requestedBlogPage(await searchParams), (n) => `Page ${n}`)
}

export default async function EnBlogPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const sp = await searchParams

  const allPosts = LIST_POSTS_I18N
    .filter((p) => p.locale === 'en')
    .map((i18n) => ({ slug: i18n.slug, i18n, ko: { slug: i18n.slug, created_at: i18n.created_at } }))
    .sort((a, b) => new Date(b.ko.created_at).getTime() - new Date(a.ko.created_at).getTime())

  const total = allPosts.length
  const totalPages = Math.ceil(total / BLOG_PAGE_SIZE)
  const currentPage = resolveBlogPage(sp, totalPages, '/en/blog')
  const translatedPosts = allPosts.slice((currentPage - 1) * BLOG_PAGE_SIZE, currentPage * BLOG_PAGE_SIZE)

  // QA01-FIX2: 블로그 허브 BreadcrumbList (홈 > 블로그)
  const breadcrumbJsonLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [ { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://inhega.co.kr/en' }, { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://inhega.co.kr/en/blog' } ] }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <section style={{ background: 'var(--navy)', padding: 'var(--section-py-md) 0', paddingTop: 'calc(72px + var(--section-py-md))' }}>
        <div className="container">
          <span className="badge badge-white text-label">Blog</span>
          <h1 className="text-display" style={{ color: 'white', marginTop: '1rem' }}>
            Korea Licensing<br />Information Center
          </h1>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
            Up-to-date guides on Korean government permits and licenses, written by licensed administrative agents.
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
                className={`blog-card-link fade-up delay-${Math.min(idx % 4 + 1, 4)}`}
                style={{ textDecoration: 'none' }}
              >
                <article className="blog-card">
                  {ogCard('en', ko.slug) && (
                    <div className="blog-card-thumb" style={{ background: `url(${ogCard('en', ko.slug)}) center/cover` }} />
                  )}
                  <div className="blog-card-body">
                    {i18n.category && (
                      <span className="badge badge-navy" style={{ fontSize: '0.6875rem', marginBottom: '0.75rem' }}>{i18n.category}</span>
                    )}
                    <h2 className="blog-card-title">
                      {i18n.title}
                    </h2>
                    <p className="blog-card-excerpt">
                      {i18n.excerpt.substring(0, 100)}...
                    </p>
                    <div className="blog-card-foot">
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
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '1.5rem' }}>
              {currentPage > 1 && (
                <Link href={blogPageHref('/en/blog', currentPage - 1)} style={{
                  padding: '0.5rem 1rem', borderRadius: '8px',
                  border: '1px solid var(--border)', color: 'var(--charcoal)',
                  textDecoration: 'none', fontSize: '0.875rem',
                }}>Prev</Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link key={p} href={blogPageHref('/en/blog', p)} style={{
                  padding: '0.5rem 0.875rem', borderRadius: '8px',
                  border: p === currentPage ? 'none' : '1px solid var(--border)',
                  background: p === currentPage ? 'var(--burgundy)' : 'transparent',
                  color: p === currentPage ? 'white' : 'var(--charcoal)',
                  textDecoration: 'none', fontSize: '0.875rem', fontWeight: p === currentPage ? 700 : 400,
                }}>{p}</Link>
              ))}
              {currentPage < totalPages && (
                <Link href={blogPageHref('/en/blog', currentPage + 1)} style={{
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
