import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/services-data'
import styles from './page.module.css'
import gridStyles from '@/app/services-list.module.css'

export const metadata = {
  title: `인허가 서비스 ${services.length}종 | 비전행정사사무소`,
  description: `국제물류주선업, 환전업, 식품인허가, 건축물 용도변경 등 ${services.length}종의 전문 인허가 서비스를 비전행정사사무소가 처음부터 끝까지 대행합니다.`,
  alternates: {
    canonical: 'https://inhega.co.kr/services',
    languages: {
      ko: 'https://inhega.co.kr/services',
      en: 'https://inhega.co.kr/en/services',
      zh: 'https://inhega.co.kr/zh/services',
      ja: 'https://inhega.co.kr/ja/services',
      'x-default': 'https://inhega.co.kr/services',
    },
  },
  openGraph: {
    title: `인허가 서비스 ${services.length}종 | 비전행정사사무소`,
    description: `국제물류주선업, 환전업, 식품인허가 등 ${services.length}종 인허가 전문 대행. 무료 초기 상담.`,
    url: 'https://inhega.co.kr/services',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: '비전행정사사무소 서비스' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: `인허가 서비스 ${services.length}종 | 비전행정사사무소`, images: ['/images/hero-seoul.png'] },
}

const categories = ['전체', '물류/유통', '금융', '숙박/관광', '건축/부동산', '식품', '기업인증', '법인설립', '공공조달']

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '홈', item: 'https://inhega.co.kr' },
    { '@type': 'ListItem', position: 2, name: '서비스', item: 'https://inhega.co.kr/services' },
  ],
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <section style={{ background: 'var(--navy)', padding: '5rem 0 4rem' }}>
        <div className="container">
          <span className="badge badge-white text-label fade-up">서비스</span>
          <h1 className="text-display fade-up delay-1" style={{ color: 'white', marginTop: '1rem' }}>
            {services.length}종 전문 인허가<br />서비스
          </h1>
          <p className="text-body-lg fade-up delay-2" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
            업종별 요건 분석부터 서류 준비, 관청 접수까지 모든 과정을 대행합니다.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section bg-cream">
        <div className="container">
          <div className={gridStyles.grid}>
            {services.map((svc, i) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className={`fade-up delay-${Math.min(i % 6 + 1, 6)}`}
                style={{ textDecoration: 'none' }}
              >
              <article className={styles.serviceCard}>
                  <div style={{ position: 'relative', height: '200px' }}>
                    <Image src={svc.image} alt={svc.title} fill style={{ objectFit: 'cover' }} />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'rgba(184,70,15,0.45)'
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
                      {svc.description.substring(0, 70)}...
                    </p>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--burgundy)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      자세히 보기
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--burgundy)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: 'white', marginBottom: '1rem' }}>
            원하는 서비스가 없으신가요?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
            목록에 없는 인허가도 상담을 통해 해결 방법을 찾아드립니다.
          </p>
          <Link href="/contact" className="btn btn-outline-white btn-lg">무료 상담 신청</Link>
        </div>
      </section>
    </div>
    </>
  )
}
