import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services } from '@/lib/services-data'
import { getServiceI18n } from '@/lib/i18n/services-i18n'
import type { Metadata } from 'next'
import styles from '@/app/services-slug.module.css'

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const svc = getServiceI18n('zh', slug)
  if (!svc) return {}
  return {
    title: `${svc.title} | Vision行政士事务所`,
    description: svc.description,
    alternates: {
      canonical: `https://inhega.co.kr/zh/services/${slug}`,
      languages: {
        'ko': `https://inhega.co.kr/services/${slug}`,
        'en': `https://inhega.co.kr/en/services/${slug}`,
        'zh': `https://inhega.co.kr/zh/services/${slug}`,
        'ja': `https://inhega.co.kr/ja/services/${slug}`,
        'x-default': `https://inhega.co.kr/services/${slug}`,
      },
    },
    openGraph: {
      title: `${svc.title} | Vision行政士事务所`,
      description: svc.description,
      url: `https://inhega.co.kr/zh/services/${slug}`,
      images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630 }],
    },
  }
}

export default async function ZhServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const svcKo = services.find((s) => s.slug === slug)
  if (!svcKo) notFound()
  const svc = getServiceI18n('zh', slug)
  if (!svc) notFound()

  const faqJsonLd = svc.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: svc.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  return (
    <>
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <div style={{ paddingTop: '72px' }}>
        <section className={styles.hero}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image src={svcKo.image} alt={svc.title} fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,31,58,0.72)' }} />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '1rem' }}>
              <Link href="/zh" style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginBottom: '1rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                所有服务
              </Link>
            </div>
            <span className="badge badge-white" style={{ marginBottom: '1rem' }}>{svc.category}</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '1rem' }}>
              {svc.title}
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', maxWidth: '60ch', lineHeight: 1.8 }}>
              {svc.description}
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/zh/contact" className="btn btn-primary btn-lg">免费咨询</Link>
              <Link href="/zh/contact" className="btn btn-outline-white">获取报价</Link>
            </div>
          </div>
        </section>

        <div style={{ background: 'var(--cream)', padding: '5rem 0' }}>
          <div className="container">
            <div className={styles.contentGrid}>
              <div>
                {svc.processSteps && (
                  <section className="fade-up" style={{ marginBottom: '4rem' }}>
                    <div style={{ marginBottom: '2rem' }}>
                      <span className="badge badge-burgundy text-label">办理流程</span>
                      <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>我们如何为您办理</h2>
                      <span className="accent-line" style={{ marginTop: '0.75rem' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {svc.processSteps.map((p, i) => (
                        <div key={p.step} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: 'var(--white)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                          <div style={{ width: '40px', height: '40px', background: 'var(--navy)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'white', flexShrink: 0 }}>
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <p style={{ fontWeight: 700, color: 'var(--charcoal)', marginBottom: '0.25rem' }}>{p.step}</p>
                            <p style={{ fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.6 }}>{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {svc.faqs && (
                  <section className="fade-up delay-2">
                    <div style={{ marginBottom: '2rem' }}>
                      <span className="badge badge-navy text-label">常见问题</span>
                      <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>常见问题解答</h2>
                      <span className="accent-line" style={{ marginTop: '0.75rem' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {svc.faqs.map((faq) => (
                        <div key={faq.q} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                          <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.625rem' }}>Q. {faq.q}</p>
                          <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.7 }}>A. {faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              <aside style={{ position: 'sticky', top: '6rem' }}>
                {svc.documents && (
                  <div className="fade-in delay-2" style={{ background: 'var(--navy)', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem', color: 'white' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', marginBottom: '1.25rem' }}>所需材料</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                      {svc.documents.map((doc) => (
                        <li key={doc} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--burgundy)', flexShrink: 0 }} />
                          {doc}
                        </li>
                      ))}
                    </ul>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '1rem', lineHeight: 1.6 }}>
                      * 根据企业类型，可能需要额外材料。
                    </p>
                  </div>
                )}

                <div className="fade-in delay-3" style={{ background: 'var(--white)', borderRadius: '16px', padding: '2rem', border: '2px solid var(--burgundy)' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>免费咨询</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    与持牌韩国行政士直接沟通，我们将评估您的情况并提供清晰的行动方案。
                  </p>
                  <Link href="/zh/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    立即联系我们
                  </Link>
                  <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--slate)', marginBottom: '0.5rem' }}>直线电话</p>
                    <a href="tel:02-363-2251" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)' }}>02-363-2251</a>
                    <p style={{ fontSize: '0.75rem', color: 'var(--slate)', marginTop: '0.25rem' }}>周一至周五 09:30–17:30 (韩国时间)</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--slate)', marginTop: '0.5rem' }}>微信 / WhatsApp / Kakao / LINE: <strong>alexkorea</strong></p>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', background: 'var(--cream)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>其他语言</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link href={`/services/${slug}`} style={{ fontSize: '0.875rem', color: 'var(--slate)' }}>🇰🇷 한국어</Link>
                    <Link href={`/en/services/${slug}`} style={{ fontSize: '0.875rem', color: 'var(--slate)' }}>🇺🇸 English</Link>
                    <Link href={`/ja/services/${slug}`} style={{ fontSize: '0.875rem', color: 'var(--slate)' }}>🇯🇵 日本語</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
