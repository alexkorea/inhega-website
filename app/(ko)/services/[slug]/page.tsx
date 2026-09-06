import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug } from '@/lib/services-data'
import type { Metadata } from 'next'
import styles from './page.module.css'

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const svc = getServiceBySlug(slug)
  if (!svc) return {}
  return {
    title: `${svc.title} | 비전행정사사무소`,
    description: svc.description,
    alternates: {
      canonical: `https://inhega.co.kr/services/${slug}`,
      languages: {
        'ko': `https://inhega.co.kr/services/${slug}`,
        'en': `https://inhega.co.kr/en/services/${slug}`,
        'zh': `https://inhega.co.kr/zh/services/${slug}`,
        'ja': `https://inhega.co.kr/ja/services/${slug}`,
        'x-default': `https://inhega.co.kr/services/${slug}`,
      },
    },
    openGraph: {
      title: `${svc.title} | 비전행정사사무소`,
      description: svc.description,
      url: `https://inhega.co.kr/services/${slug}`,
      images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630 }],
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const svc = getServiceBySlug(slug)
  if (!svc) notFound()

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: svc.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.description,
    provider: {
      '@type': 'LegalService',
      name: '비전행정사사무소',
      telephone: '02-363-2251',
      url: 'https://inhega.co.kr',
    },
    areaServed: { '@type': 'Country', name: '대한민국' },
    url: `https://inhega.co.kr/services/${slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section className={styles.hero}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <Image src={svc.image} alt={svc.title} fill style={{ objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,31,58,0.72)' }} />
        </div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '1rem' }}>
            <Link href="/services" style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginBottom: '1rem' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              모든 서비스
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
            <Link href="/quote" className="btn btn-primary btn-lg">견적 문의하기</Link>
            <Link href="/contact" className="btn btn-outline-white">무료 상담</Link>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--cream)', padding: '5rem 0' }}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Main Content */}
            <div>
              {/* Overview (if present) */}
              {svc.overview && (
                <section className="fade-up" style={{ marginBottom: '4rem' }}>
                  <div
                    className="svc-overview-content"
                    dangerouslySetInnerHTML={{ __html: svc.overview }}
                  />
                </section>
              )}

              {/* Process */}
              <section className="fade-up" id="svc-process" style={{ marginBottom: '4rem' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <span className="badge badge-burgundy text-label">진행 절차</span>
                  <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>처리 프로세스</h2>
                  <span className="accent-line" style={{ marginTop: '0.75rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {svc.process.map((p, i) => (
                    <div key={p.step} style={{
                      display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                      background: 'var(--white)', borderRadius: '12px', padding: '1.5rem',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{
                        width: '40px', height: '40px', background: 'var(--navy)', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'white',
                        flexShrink: 0
                      }}>
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

              {/* FAQ */}
              <section className="fade-up delay-2" id="svc-faq">
                <div style={{ marginBottom: '2rem' }}>
                  <span className="badge badge-navy text-label">자주 묻는 질문</span>
                  <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>FAQ</h2>
                  <span className="accent-line" style={{ marginTop: '0.75rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {svc.faqs.map((faq) => (
                    <div key={faq.q} style={{
                      background: 'var(--white)', borderRadius: '12px', padding: '1.5rem',
                      border: '1px solid var(--border)'
                    }}>
                      <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.625rem' }}>Q. {faq.q}</p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.7 }}>A. {faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: '6rem' }}>
              {/* Required Docs */}
              <div className="fade-in delay-2" style={{
                background: 'var(--navy)', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem', color: 'white'
              }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', marginBottom: '1.25rem' }}>필요 서류</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {svc.documents.map((doc) => (
                    <li key={doc} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--burgundy)', flexShrink: 0 }} />
                      {doc}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '1rem', lineHeight: 1.6 }}>
                  * 사업자 유형에 따라 추가 서류가 필요할 수 있습니다.
                </p>
              </div>

              {/* CTA Card */}
              <div className="fade-in delay-3" style={{
                background: 'var(--white)', borderRadius: '16px', padding: '2rem',
                border: '1px solid var(--border)', textAlign: 'center'
              }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>
                  지금 바로 시작하세요
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  전문 행정사가 처음부터 끝까지 책임집니다.
                </p>
                <Link href="/quote" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  견적 문의하기
                </Link>
                <p style={{ marginTop: '0.75rem', fontSize: '0.8125rem', color: 'var(--slate)', textAlign: 'center' }}>
                  메신저: alexkorea
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
