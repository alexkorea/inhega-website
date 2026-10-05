import Link from 'next/link'
import { getDirectoryCount } from '@/lib/service-directory'
import ServiceDirectory from '@/components/services/ServiceDirectory'
import type { Metadata } from 'next'

// 서비스 목록 단일 정본 — lib/services-catalog.ts (하드코딩 금지, 2026-09-22)
// 서비스 수 = 기존 + 번역본 있는 신규 업종(0949). 번역본 없는 업종은 이 언어에 없다.
const serviceCount = getDirectoryCount('en')

export const metadata: Metadata = {
  title: `${serviceCount} Licensing & Permit Services | YouSun Administrative Agency`,
  description: 'International freight forwarding, currency exchange, food licensing, building use change, and more — YouSun Administrative Agency handles Korean business licensing from start to finish.',
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
    title: `${serviceCount} Licensing & Permit Services | YouSun Administrative Agency`,
    description: 'Professional licensing and permit representation for foreign companies and investors in Korea. Free initial consultation.',
    url: 'https://inhega.co.kr/en/services',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Agency Services' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: `${serviceCount} Licensing & Permit Services | YouSun Administrative Agency`, images: ['/images/hero-seoul.png'] },
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
              {serviceCount} Professional<br />Licensing Services
            </h1>
            <p className="text-body-lg fade-up delay-2" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
              From industry requirement analysis to document preparation and government filing, we handle the entire process on your behalf.
            </p>
          </div>
        </section>

        {/* 0949 — 기존 서비스 + 번역본이 있는 신규 업종만, 분야별 소제목. 정본 lib/service-directory.ts */}
        <section className="section-sm bg-cream">
          <div className="container">
            <ServiceDirectory locale="en" mode="sections" />
          </div>
        </section>

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
