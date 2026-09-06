import Link from 'next/link'
import { blogPosts } from '@/lib/blog-posts-data'
import { getAllTranslatedSlugs, getBlogI18n } from '@/lib/i18n/blog-i18n'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '韓国許認可ブログ | ビジョン行政書士事務所',
  description: '韓国ビジネス許認可の専門ガイド——国際物流主選業・外貨両替業・食品許可・HACCPなど、行政書士が執筆。',
  alternates: {
    canonical: 'https://inhega.co.kr/ja/blog',
    languages: {
      ko: 'https://inhega.co.kr/blog',
      en: 'https://inhega.co.kr/en/blog',
      zh: 'https://inhega.co.kr/zh/blog',
      ja: 'https://inhega.co.kr/ja/blog',
      'x-default': 'https://inhega.co.kr/blog',
    },
  },
  openGraph: {
    title: '韓国許認可ブログ | ビジョン行政書士事務所',
    description: '外国企業・投資家向け韓国許認可の専門ガイド。',
    url: 'https://inhega.co.kr/ja/blog',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'ビジョン行政書士事務所ブログ' }],
    type: 'website',
    locale: 'ja_JP',
  },
}

const PAGE_SIZE = 15

export default async function JaBlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam || '1', 10))

  const translatedSlugs = getAllTranslatedSlugs('ja')
  const allPosts = translatedSlugs
    .map((slug) => {
      const i18n = getBlogI18n('ja', slug)!
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
          <span className="badge badge-white text-label">ブログ</span>
          <h1 className="text-display" style={{ color: 'white', marginTop: '1rem' }}>
            韓国許認可<br />情報センター
          </h1>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
            行政書士が直接執筆する韓国政府許認可の最新ガイドと実務情報。
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {translatedPosts.map(({ slug, i18n, ko }, idx) => (
              <Link
                key={slug}
                href={`/ja/blog/${slug}`}
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
                        {new Date(ko.created_at).toLocaleDateString('ja-JP', { year: 'numeric', month: 'short', day: 'numeric' })}
                      </span>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--burgundy)' }}>読む →</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '3rem' }}>
              {currentPage > 1 && (
                <Link href={`/ja/blog?page=${currentPage - 1}`} style={{
                  padding: '0.5rem 1rem', borderRadius: '8px',
                  border: '1px solid var(--border)', color: 'var(--charcoal)',
                  textDecoration: 'none', fontSize: '0.875rem',
                }}>← 前へ</Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link key={p} href={`/ja/blog?page=${p}`} style={{
                  padding: '0.5rem 0.875rem', borderRadius: '8px',
                  border: p === currentPage ? 'none' : '1px solid var(--border)',
                  background: p === currentPage ? 'var(--burgundy)' : 'transparent',
                  color: p === currentPage ? 'white' : 'var(--charcoal)',
                  textDecoration: 'none', fontSize: '0.875rem', fontWeight: p === currentPage ? 700 : 400,
                }}>{p}</Link>
              ))}
              {currentPage < totalPages && (
                <Link href={`/ja/blog?page=${currentPage + 1}`} style={{
                  padding: '0.5rem 1rem', borderRadius: '8px',
                  border: '1px solid var(--border)', color: 'var(--charcoal)',
                  textDecoration: 'none', fontSize: '0.875rem',
                }}>次へ →</Link>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
