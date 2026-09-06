import Link from 'next/link'
import { createClient } from '@supabase/supabase-js'
import { blogPosts } from '@/lib/blog-posts-data'

export const metadata = {
  title: '인허가 실무 블로그 | 비전행정사사무소',
  description: '국제물류주선업·환전업·식품인허가 등 인허가 최신 법령 정보와 실무 팁을 전문 행정사가 직접 작성합니다.',
  alternates: { canonical: 'https://inhega.co.kr/blog' },
  openGraph: {
    title: '인허가 실무 블로그 | 비전행정사사무소',
    description: '인허가 최신 법령 정보와 실무 팁을 전문 행정사가 직접 작성합니다.',
    url: 'https://inhega.co.kr/blog',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: '비전행정사사무소 블로그' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: '인허가 실무 블로그 | 비전행정사사무소', images: ['/images/hero-seoul.png'] },
}

const PAGE_SIZE = 15

async function getPosts() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  if (url && key) {
    try {
      const supabase = createClient(url, key)
      const { data } = await supabase
        .from('inhega_blog_posts')
        .select('*')
        .order('created_at', { ascending: false })
      if (data && data.length > 0) return data
    } catch {
      // fallthrough to static
    }
  }
  return [...blogPosts].sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams
  const page = Math.max(1, parseInt(pageParam || '1', 10))
  const allPosts = await getPosts()
  const total = allPosts.length
  const totalPages = Math.ceil(total / PAGE_SIZE)
  const currentPage = Math.min(page, totalPages || 1)
  const posts = allPosts.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE)

  return (
    <div>
      <section style={{ background: 'var(--navy)', padding: '4rem 0 4rem', paddingTop: 'calc(72px + 4rem)' }}>
        <div className="container">
          <span className="badge badge-white text-label">블로그</span>
          <h1 className="text-display" style={{ color: 'white', marginTop: '1rem' }}>
            인허가 실무<br />정보 센터
          </h1>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
            최신 법령 변경사항과 실무 팁을 전문가가 직접 알려드립니다.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '5rem 0', color: 'var(--slate)' }}>
              <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>등록된 블로그 게시물이 없습니다.</p>
              <Link href="/contact" className="btn btn-primary">상담 문의하기</Link>
            </div>
          ) : (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
                {posts.map((post: Record<string, string>, i: number) => (
                  <Link
                    key={post.id || post.slug}
                    href={`/blog/${post.slug || post.id}`}
                    className={`fade-up delay-${Math.min(i % 4 + 1, 4)}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <article style={{
                      background: 'var(--white)', borderRadius: '16px',
                      border: '1px solid var(--border)', overflow: 'hidden',
                      transition: 'all 0.3s ease',
                    }}>
                      {post.cover_image && (
                        <div style={{ height: '200px', background: `url(${post.cover_image}) center/cover` }} />
                      )}
                      <div style={{ padding: '1.5rem' }}>
                        {post.category && (
                          <span className="badge badge-navy" style={{ fontSize: '0.6875rem', marginBottom: '0.75rem' }}>{post.category}</span>
                        )}
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '0.5rem', lineHeight: 1.4 }}>
                          {post.title}
                        </h2>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '1rem' }}>
                          {post.excerpt || post.content?.substring(0, 80)}...
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--slate-light)' }}>
                            {new Date(post.created_at).toLocaleDateString('ko-KR')}
                          </span>
                          <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--burgundy)' }}>읽기</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '3rem' }}>
                  {currentPage > 1 && (
                    <Link href={`/blog?page=${currentPage - 1}`} style={{
                      padding: '0.5rem 1rem', borderRadius: '8px',
                      border: '1px solid var(--border)', color: 'var(--charcoal)',
                      textDecoration: 'none', fontSize: '0.875rem',
                    }}>← 이전</Link>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <Link key={p} href={`/blog?page=${p}`} style={{
                      padding: '0.5rem 0.875rem', borderRadius: '8px',
                      border: p === currentPage ? 'none' : '1px solid var(--border)',
                      background: p === currentPage ? 'var(--burgundy)' : 'transparent',
                      color: p === currentPage ? 'white' : 'var(--charcoal)',
                      textDecoration: 'none', fontSize: '0.875rem', fontWeight: p === currentPage ? 700 : 400,
                    }}>{p}</Link>
                  ))}
                  {currentPage < totalPages && (
                    <Link href={`/blog?page=${currentPage + 1}`} style={{
                      padding: '0.5rem 1rem', borderRadius: '8px',
                      border: '1px solid var(--border)', color: 'var(--charcoal)',
                      textDecoration: 'none', fontSize: '0.875rem',
                    }}>다음 →</Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  )
}
