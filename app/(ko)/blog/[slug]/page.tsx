import { createClient } from '@supabase/supabase-js'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { blogPosts, type BlogPost } from '@/lib/blog-posts-data'

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

async function getPost(slug: string) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    )
    const { data } = await supabase
      .from('inhega_blog_posts')
      .select('*')
      .eq('slug', slug)
      .single()
    if (data) return data as BlogPost
  } catch {
    // fallthrough
  }
  return blogPosts.find((p) => p.slug === slug) ?? null
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  const title = post.meta_title || post.title
  const description = post.meta_description || post.excerpt
  const image = post.cover_image ? `https://inhega.co.kr${post.cover_image}` : 'https://inhega.co.kr/images/hero-seoul.png'
  return {
    title,
    description,
    alternates: { canonical: `https://inhega.co.kr/blog/${post.slug || post.id}` },
    openGraph: { title, description, type: 'article', images: [{ url: image, width: 1200, height: 630, alt: title }], publishedTime: post.created_at },
    twitter: { card: 'summary_large_image' as const, title, description, images: [image] },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  // Extract FAQs from HTML for structured data
  const faqMatches = [...(post.content?.matchAll(/<p class="faq-q">Q\.\s*(.*?)<\/p>\s*<p class="faq-a">A\.\s*(.*?)<\/p>/gs) || [])]
  const faqJsonLd = faqMatches.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqMatches.map(m => ({
      '@type': 'Question',
      name: m[1].replace(/<[^>]+>/g, ''),
      acceptedAnswer: { '@type': 'Answer', text: m[2].replace(/<[^>]+>/g, '') },
    })),
  } : null

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.created_at,
    image: post.cover_image ? `https://inhega.co.kr${post.cover_image}` : 'https://inhega.co.kr/images/hero-seoul.png',
    author: { '@type': 'Organization', name: '비전행정사사무소', url: 'https://inhega.co.kr' },
    publisher: { '@type': 'Organization', name: '비전행정사사무소', url: 'https://inhega.co.kr', logo: { '@type': 'ImageObject', url: 'https://inhega.co.kr/images/hero-seoul.png' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://inhega.co.kr/blog/${post.slug || post.id}` },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '홈', item: 'https://inhega.co.kr' },
      { '@type': 'ListItem', position: 2, name: '블로그', item: 'https://inhega.co.kr/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://inhega.co.kr/blog/${post.slug || post.id}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <div>
        <section style={{ background: 'var(--navy)', padding: '3rem 0 3rem', paddingTop: 'calc(72px + 3rem)' }}>
          <div className="container">
            <nav style={{ marginBottom: '1rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)' }}>
              <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>홈</Link>
              {' / '}
              <Link href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>블로그</Link>
              {' / '}
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>{post.category}</span>
            </nav>
            {post.category && (
              <span className="badge badge-white" style={{ marginBottom: '1rem', display: 'inline-block' }}>{post.category}</span>
            )}
            <h1 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.3, maxWidth: '800px' }}>
              {post.title}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', marginTop: '1rem' }}>
              {new Date(post.created_at).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
              {' · '}비전행정사사무소
            </p>
          </div>
        </section>

        <section className="section bg-cream">
          <div className="container" style={{ maxWidth: '1280px' }}>
            <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '3rem', alignItems: 'start' }}>
              <article>
                {post.cover_image && (
                  <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem', height: '360px' }}>
                    <img src={post.cover_image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                  style={{ lineHeight: 1.8, color: 'var(--charcoal)', fontSize: '1rem' }}
                />
              </article>

              <aside className="blog-sidebar" style={{ position: 'sticky', top: '88px' }}>
                <div style={{ background: 'var(--white)', borderRadius: '12px', border: '1px solid var(--border)', padding: '1.5rem', marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--navy)', marginBottom: '1rem' }}>무료 상담 신청</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    인허가 절차가 복잡하게 느껴지신다면 전문가와 먼저 상담해 보세요. 초기 상담은 무료입니다.
                  </p>
                  <Link href="/contact" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%' }}>
                    무료상담 신청하기 →
                  </Link>
                  <div style={{ marginTop: '1.25rem', fontSize: '0.75rem', color: 'var(--slate-light)', lineHeight: 1.7 }}>
                    <p>📍 서울시 중구 퇴계로 324, 3층</p>
                    <p>🕐 평일 09:30~17:30 KST (토·일·공휴일 휴무)</p>
                    <p>💬 카카오·라인·위챗·왓츠앱: alexkorea</p>
                  </div>
                </div>

                <div style={{ background: 'var(--white)', borderRadius: '12px', border: '1px solid var(--border)', padding: '1.5rem' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>관련 서비스</p>
                  {post.relatedServices?.map((s, i) => (
                    <Link key={s.href} href={s.href} style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--burgundy)', textDecoration: 'none', padding: '0.4rem 0', borderBottom: i < (post.relatedServices?.length ?? 0) - 1 ? '1px solid var(--border-light)' : 'none' }}>{s.title} →</Link>
                  ))}
                  {!post.relatedServices && <>
                    <Link href="/services" style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--burgundy)', textDecoration: 'none', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)' }}>전체 인허가 서비스 보기 →</Link>
                    <Link href="/quote" style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--burgundy)', textDecoration: 'none', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)' }}>견적 문의하기 →</Link>
                    <Link href="/contact" style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--burgundy)', textDecoration: 'none', padding: '0.4rem 0' }}>상담 예약하기 →</Link>
                  </>}
                </div>
              </aside>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        .blog-content h2 { color: #235099; font-size: 1.375rem; font-weight: 700; margin: 2.5rem 0 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e8eef5; }
        .blog-content h3 { color: #2d5aa0; font-size: 1.125rem; font-weight: 600; margin: 1.75rem 0 0.75rem; }
        .blog-content p { margin-bottom: 1rem; }
        .blog-content ul, .blog-content ol { margin: 1rem 0 1rem 1.5rem; }
        .blog-content li { margin-bottom: 0.5rem; }
        .blog-content .toc { background: #f0f4fa; border-left: 4px solid #235099; border-radius: 8px; padding: 1.25rem 1.5rem; margin: 1.5rem 0 2rem; }
        .blog-content .toc p { font-weight: 700; color: #235099; margin-bottom: 0.75rem; }
        .blog-content .toc ol { margin: 0 0 0 1.25rem; }
        .blog-content .toc li { font-size: 0.9rem; margin-bottom: 0.35rem; }
        .blog-content .faq-section { background: #f8f9fa; border-radius: 12px; padding: 2rem; margin: 2.5rem 0; }
        .blog-content .faq-item { border-bottom: 1px solid #e2e8f0; padding: 1rem 0; }
        .blog-content .faq-item:last-child { border-bottom: none; }
        .blog-content .faq-q { font-weight: 700; color: #235099; margin-bottom: 0.5rem; }
        .blog-content .faq-a { color: #4a5568; font-size: 0.9375rem; line-height: 1.7; }
        .blog-content .cta-box { background: #235099; color: white; border-radius: 12px; padding: 2rem; margin: 2.5rem 0; text-align: center; }
        .blog-content .cta-box h3 { color: white; margin: 0 0 0.75rem; }
        .blog-content .cta-box p { color: rgba(255,255,255,0.85); margin-bottom: 1.25rem; font-size: 0.9375rem; }
        .blog-content .cta-box a { display: inline-block; background: #A33344; color: white; padding: 14px 32px; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 1rem; }
        .blog-content .cta-box strong { color: white; }
        .blog-content strong { color: #235099; }
        .blog-content .highlight-box { background: #fff8e1; border-left: 4px solid #f59e0b; border-radius: 4px; padding: 1rem 1.25rem; margin: 1.25rem 0; font-size: 0.9375rem; }
        .blog-content .tldr-box { background: #e8f0fb; border-left: 4px solid #235099; border-radius: 8px; padding: 1.25rem 1.5rem; margin: 0 0 1.5rem; }
        .blog-content .tldr-label { font-weight: 700; color: #235099; margin-bottom: 0.4rem; font-size: 0.875rem; text-transform: uppercase; letter-spacing: 0.04em; }
        .blog-content .definition { background: #f8faff; border: 1px solid #c3d4ef; border-radius: 6px; padding: 1rem 1.25rem; margin: 1.25rem 0; font-size: 0.9375rem; color: #2d3748; line-height: 1.7; }
        .blog-content .last-updated { font-size: 0.8125rem; color: #718096; margin: 0 0 1.5rem; padding: 0.5rem 0; border-top: 1px solid #e2e8f0; border-bottom: 1px solid #e2e8f0; }
        .blog-content .last-updated p { margin-bottom: 0.2rem; }
        .blog-content .source-box { background: #f7f9fc; border: 1px solid #d1dde8; border-radius: 8px; padding: 1.25rem 1.5rem; margin: 2rem 0; }
        .blog-content .source-box h3 { color: #235099; font-size: 0.9375rem; margin-bottom: 0.75rem; }
        .blog-content .source-box ul { margin: 0 0 0 1rem; }
        .blog-content .source-box li { font-size: 0.875rem; margin-bottom: 0.35rem; }
        .blog-content .source-box a { color: #235099; }
        .blog-content .comparison-table { width: 100%; border-collapse: collapse; margin: 1.5rem 0; font-size: 0.9rem; }
        .blog-content .comparison-table th { background: #235099; color: white; padding: 0.75rem 1rem; text-align: left; font-weight: 600; }
        .blog-content .comparison-table td { padding: 0.65rem 1rem; border-bottom: 1px solid #e2e8f0; }
        .blog-content .comparison-table tr:nth-child(even) td { background: #f7f9fc; }
        .blog-content .step-list { margin: 1rem 0 1rem 0; padding: 0; list-style: none; }
        .blog-content .step-list li { padding: 0.75rem 0 0.75rem 0; border-bottom: 1px solid #e2e8f0; font-size: 0.9375rem; }
        .blog-content .step-list li:last-child { border-bottom: none; }
        .blog-content nav.toc { background: #f0f4fa; border-left: 4px solid #235099; border-radius: 8px; padding: 1.25rem 1.5rem; margin: 1.5rem 0 2rem; }
        .blog-content nav.toc p { font-weight: 700; color: #235099; margin-bottom: 0.75rem; }
        .blog-content nav.toc ol { margin: 0 0 0 1.25rem; }
        .blog-content nav.toc li { font-size: 0.9rem; margin-bottom: 0.35rem; }
        .blog-content nav.toc a { color: #235099; text-decoration: none; }
        .blog-content nav.toc a:hover { text-decoration: underline; }
        .blog-content aside.cta-box { background: #235099; color: white; border-radius: 12px; padding: 2rem; margin: 2.5rem 0; text-align: center; display: block; }
        .blog-content aside.cta-box h2 { color: white; margin: 0 0 0.75rem; font-size: 1.25rem; border: none; padding: 0; }
        .blog-content aside.cta-box p { color: rgba(255,255,255,0.85); margin-bottom: 1.25rem; font-size: 0.9375rem; }
        .blog-content aside.cta-box a { display: inline-block; background: #A33344; color: white; padding: 14px 32px; border-radius: 6px; font-weight: 700; text-decoration: none; font-size: 1rem; }
        @media (max-width: 1024px) {
          .blog-content { font-size: 0.9375rem; }
        }
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .blog-sidebar { position: static !important; top: auto !important; }
        }
      `}</style>
    </>
  )
}
