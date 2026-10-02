import Image from 'next/image'
import Link from 'next/link'
import { getServiceCatalog } from '@/lib/services-catalog'
import type { Metadata } from 'next'
import styles from '@/app/services-list.module.css'
import { getIndustryPages } from '@/lib/industry-pages'
import { IndustryList } from '@/components/industry/IndustryServicePage'

// 서비스 목록 단일 정본 — lib/services-catalog.ts (하드코딩 금지, 2026-09-22)
const translatedServices = getServiceCatalog('en')

export const metadata: Metadata = {
  title: `${translatedServices.length} Licensing & Permit Services | YouSun Administrative Attorney`,
  description: 'International freight forwarding, currency exchange, food licensing, building use change, and more — YouSun Administrative Attorney handles Korean business licensing from start to finish.',
  alternates: {
    canonical: 'https://inhega.co.kr/en/services',
    languages: {
      ko: 'https://inhega.co.kr/services',
      en: 'https://inhega.co.kr/en/services',
      zh: 'https://inhega.co.kr/zh/services',
      ja: 'https://inhega.co.kr/ja/services',
      'x-default': 'https://inhega.co.kr/services',
    },
  },
  openGraph: {
    title: `${translatedServices.length} Licensing & Permit Services | YouSun Administrative Attorney`,
    description: 'Professional licensing and permit representation for foreign companies and investors in Korea. Free initial consultation.',
    url: 'https://inhega.co.kr/en/services',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Attorney Services' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: `${translatedServices.length} Licensing & Permit Services | YouSun Administrative Attorney`, images: ['/images/hero-seoul.png'] },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://inhega.co.kr/en' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://inhega.co.kr/en/services' },
  ],
}

export default function EnServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div style={{ paddingTop: '72px' }}>
        {/* Header */}
        <section style={{ background: 'var(--navy)', padding: '5rem 0 4rem' }}>
          <div className="container">
            <span className="badge badge-white text-label fade-up">Services</span>
            <h1 className="text-display fade-up delay-1" style={{ color: 'white', marginTop: '1rem' }}>
              {translatedServices.length} Professional<br />Licensing Services
            </h1>
            <p className="text-body-lg fade-up delay-2" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
              From industry requirement analysis to document preparation and government filing, we handle the entire process on your behalf.
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="section bg-cream">
          <div className="container">
            <div className={styles.grid}>
              {translatedServices.map((svc, i) => {
                return (
                  <Link
                    key={svc.slug}
                    href={svc.href}
                    className={`fade-up delay-${Math.min(i % 6 + 1, 6)}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <article className={styles.serviceCard}>
                      <div style={{ position: 'relative', height: '200px' }}>
                        <Image src={svc.image} alt={svc.title} fill style={{ objectFit: 'cover' }} />
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: 'rgba(11,31,58,0.45)'
                        }} />
                        <span className="badge badge-white" style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.6875rem' }}>
                          {svc.category}
                        </span>
                      </div>
                      <div style={{ padding: '1.5rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                          {svc.title}
                        </h2>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '1rem' }}>
                          {svc.description.substring(0, 100)}...
                        </p>
                        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--burgundy)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                          Learn More
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* I2 신규 업종 페이지 — lib/industry-pages.ts */}
        <IndustryList pages={getIndustryPages('en')} />

        {/* CTA */}
        <section style={{ background: 'var(--burgundy)', padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: 'white', marginBottom: '1rem' }}>
              Don&apos;t see the service you need?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
              We can help find a solution for licenses not listed here through a free consultation.
            </p>
            <Link href="/en/contact" className="btn btn-outline-white btn-lg">Request Free Consultation</Link>
          </div>
        </section>
      </div>
    </>
  )
}
