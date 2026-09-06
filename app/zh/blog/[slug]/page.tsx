import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { blogPosts } from '@/lib/blog-posts-data'
import { getBlogI18n } from '@/lib/i18n/blog-i18n'

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogI18n('zh', slug)
  const koPost = blogPosts.find((p) => p.slug === slug)
  if (!post && !koPost) return {}
  const title = post?.metaTitle ?? (koPost?.meta_title || koPost?.title) ?? ''
  const description = post?.metaDescription ?? koPost?.meta_description ?? ''
  const image = koPost?.cover_image ? `https://inhega.co.kr${koPost.cover_image}` : 'https://inhega.co.kr/images/hero-seoul.png'
  return {
    title,
    description,
    alternates: {
      canonical: `https://inhega.co.kr/zh/blog/${slug}`,
      languages: {
        ko: `https://inhega.co.kr/blog/${slug}`,
        en: `https://inhega.co.kr/en/blog/${slug}`,
        zh: `https://inhega.co.kr/zh/blog/${slug}`,
        ja: `https://inhega.co.kr/ja/blog/${slug}`,
        'x-default': `https://inhega.co.kr/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'article',
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: 'zh_CN',
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
  }
}

export default async function ZhBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogI18n('zh', slug)
  const koPost = blogPosts.find((p) => p.slug === slug)
  if (!koPost) notFound()

  const faqMatches = post
    ? [...(post.content.matchAll(/<p class="faq-q">Q\.\s*(.*?)<\/p>\s*<p class="faq-a">A\.\s*(.*?)<\/p>/gs) || [])]
    : []
  const faqJsonLd = faqMatches.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqMatches.map((m) => ({
      '@type': 'Question',
      name: m[1].replace(/<[^>]+>/g, ''),
      acceptedAnswer: { '@type': 'Answer', text: m[2].replace(/<[^>]+>/g, '') },
    })),
  } : null

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post?.title ?? koPost.title,
    description: post?.excerpt ?? koPost.excerpt,
    datePublished: koPost.created_at,
    image: koPost.cover_image ? `https://inhega.co.kr${koPost.cover_image}` : 'https://inhega.co.kr/images/hero-seoul.png',
    author: { '@type': 'Organization', name: 'Vision行政士事务所', url: 'https://inhega.co.kr/zh' },
    publisher: { '@type': 'Organization', name: 'Vision行政士事务所', url: 'https://inhega.co.kr/zh' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://inhega.co.kr/zh/blog/${slug}` },
    inLanguage: 'zh-CN',
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: '首页', item: 'https://inhega.co.kr/zh' },
      { '@type': 'ListItem', position: 2, name: '博客', item: 'https://inhega.co.kr/zh/blog' },
      { '@type': 'ListItem', position: 3, name: post?.title ?? koPost.title, item: `https://inhega.co.kr/zh/blog/${slug}` },
    ],
  }

  const displayTitle = post?.title ?? koPost.title
  const displayCategory = post?.category ?? koPost.category
  const displayDate = new Date(koPost.created_at).toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <div>
        <section style={{ background: 'var(--navy)', padding: '3rem 0 3rem', paddingTop: 'calc(72px + 3rem)' }}>
          <div className="container">
            <nav style={{ marginBottom: '1rem', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.6)' }}>
              <Link href="/zh" style={{ color: 'inherit', textDecoration: 'none' }}>首页</Link>
              {' / '}
              <Link href="/zh/blog" style={{ color: 'inherit', textDecoration: 'none' }}>博客</Link>
              {' / '}
              <span style={{ color: 'rgba(255,255,255,0.85)' }}>{displayCategory}</span>
            </nav>
            {displayCategory && (
              <span className="badge badge-white" style={{ marginBottom: '1rem', display: 'inline-block' }}>{displayCategory}</span>
            )}
            <h1 style={{ color: 'white', fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontWeight: 700, lineHeight: 1.3, maxWidth: '800px' }}>
              {displayTitle}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', marginTop: '1rem' }}>
              {displayDate} · Vision行政士事务所
            </p>
          </div>
        </section>

        <section className="section bg-cream">
          <div className="container" style={{ maxWidth: '1280px' }}>
            <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: '3rem', alignItems: 'start' }}>
              <article>
                {koPost.cover_image && (
                  <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '2rem', height: '360px' }}>
                    <img src={koPost.cover_image} alt={displayTitle} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                {post ? (
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                    style={{ lineHeight: 1.8, color: 'var(--charcoal)', fontSize: '1rem' }}
                  />
                ) : (
                  <div style={{ padding: '3rem', textAlign: 'center', color: 'var(--slate)' }}>
                    <p style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>中文翻译即将推出。</p>
                    <Link href={`/blog/${slug}`} style={{ color: 'var(--burgundy)' }}>阅读韩文原文 →</Link>
                  </div>
                )}
              </article>

              <aside className="blog-sidebar" style={{ position: 'sticky', top: '88px' }}>
                <div style={{ background: 'var(--white)', borderRadius: '12px', border: '1px solid var(--border)', padding: '1.5rem', marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--navy)', marginBottom: '1rem' }}>免费咨询</p>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    需要韩国许可申请帮助？我们的专业行政士提供免费初次咨询。
                  </p>
                  <Link href="/zh/contact" className="btn btn-primary" style={{ display: 'block', textAlign: 'center', width: '100%' }}>
                    申请免费咨询 →
                  </Link>
                  <div style={{ marginTop: '1.25rem', fontSize: '0.75rem', color: 'var(--slate-light)', lineHeight: 1.7 }}>
                    <p>📍 首尔中区退溪路324, 3层</p>
                    <p>🕐 周一至周五 09:30~17:30 KST</p>
                    <p>💬 微信 · KakaoTalk · LINE · WhatsApp: alexkorea</p>
                  </div>
                </div>

                <div style={{ background: 'var(--white)', borderRadius: '12px', border: '1px solid var(--border)', padding: '1.5rem', marginBottom: '1.5rem' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>其他语言阅读</p>
                  <Link href={`/blog/${slug}`} style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--burgundy)', textDecoration: 'none', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)' }}>한국어 →</Link>
                  <Link href={`/en/blog/${slug}`} style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--burgundy)', textDecoration: 'none', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)' }}>English →</Link>
                  <Link href={`/ja/blog/${slug}`} style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--burgundy)', textDecoration: 'none', padding: '0.4rem 0' }}>日本語 →</Link>
                </div>

                <div style={{ background: 'var(--white)', borderRadius: '12px', border: '1px solid var(--border)', padding: '1.5rem' }}>
                  <p style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>相关服务</p>
                  <Link href="/zh/services" style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--burgundy)', textDecoration: 'none', padding: '0.4rem 0', borderBottom: '1px solid var(--border-light)' }}>全部许可服务 →</Link>
                  <Link href="/zh/contact" style={{ display: 'block', fontSize: '0.8125rem', color: 'var(--burgundy)', textDecoration: 'none', padding: '0.4rem 0' }}>联系我们 →</Link>
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
        @media (max-width: 768px) {
          .blog-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .blog-sidebar { position: static !important; top: auto !important; }
        }
      `}</style>
    </>
  )
}
