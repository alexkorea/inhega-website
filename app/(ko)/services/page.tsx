import Image from 'next/image'
import Link from 'next/link'
import { getServiceCatalog } from '@/lib/services-catalog'
import styles from './page.module.css'
import gridStyles from '@/app/services-list.module.css'
import { getIndustryPages } from '@/lib/industry-pages'
import { IndustryList } from '@/components/industry/IndustryServicePage'
import { HUB_GUIDES } from '@/lib/hub-guides.generated'

// 서비스 목록 단일 정본 — lib/services-catalog.ts (하드코딩 금지, 2026-09-22)
const services = getServiceCatalog('ko')

// I5(2026-10-03) — title·H1·첫문단·FAQ. 첫문단은 meta description 과 같은 문장이다.
const PAGE_TITLE = `인허가 서비스 ${services.length}종 — 사업 인허가 행정사 대행 | 유선행정사사무소`
const LEAD = `업종별 요건 분석부터 서류 준비, 관청 접수까지 사업 인허가 전 과정을 행정사가 대행합니다. 국제물류주선업·환전업·식품인허가·건축물 용도변경 등 ${services.length}종 업종별 인허가 절차와 서류를 확인하고 필요한 업종 페이지로 이동하세요.`
// 화면 FAQ 와 FAQPage JSON-LD 는 이 배열 하나에서 나온다.
const FAQS = [
  { q: '행정사 인허가 대행 비용은 어떻게 알 수 있나요?', a: '정부 수수료 같은 법정 비용은 각 업종 페이지에 정리했고, 대행 보수는 업무 범위에 따라 달라 상담 후 안내합니다.' },
  { q: '인허가가 필요한 업종은 어떻게 확인하나요?', a: `${services.length}종 업종 목록에서 해당 업종을 찾아 허가·등록·신고 구분과 요건을 확인하고, 목록에 없으면 상담으로 확인합니다.` },
]

export const metadata = {
  title: PAGE_TITLE,
  description: LEAD,
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
    title: PAGE_TITLE,
    description: LEAD,
    url: 'https://inhega.co.kr/services',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: '유선행정사사무소 서비스' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: PAGE_TITLE, images: ['/images/hero-seoul.png'] },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <section style={{ background: 'var(--navy)', padding: '5rem 0 4rem' }}>
        <div className="container">
          <span className="badge badge-white text-label fade-up">서비스</span>
          <h1 className="text-display fade-up delay-1" style={{ color: 'white', marginTop: '1rem' }}>
            {services.length}종 전문 인허가<br />서비스 — 사업 인허가 대행
          </h1>
          <p className="text-body-lg fade-up delay-2" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
            {LEAD}
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

      {/* I2 신규 업종 페이지 — lib/industry-pages.ts */}
      <IndustryList pages={getIndustryPages('ko')} />

      {/* FAQ + 인허가 공통 가이드(I4) */}
      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '880px' }}>
          <span className="badge badge-navy text-label">자주 묻는 질문</span>
          <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>FAQ</h2>
          <span className="accent-line" style={{ marginTop: '0.75rem' }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '2rem' }}>
            {FAQS.map((f) => (
              <div key={f.q} style={{ background: 'var(--cream)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.625rem' }}>Q. {f.q}</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.7 }}>A. {f.a}</p>
              </div>
            ))}
          </div>
          {(HUB_GUIDES['/services'] ?? []).length > 0 && (
            <p style={{ marginTop: '2rem', fontSize: '0.9375rem', color: 'var(--slate)' }}>
              인허가 공통 가이드:{' '}
              {HUB_GUIDES['/services'].map((g) => (
                <Link key={g.href} href={g.href} style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline' }}>{g.title}</Link>
              ))}
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--burgundy)', padding: '5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: 'white', marginBottom: '1rem' }}>
            목록에 없는 업종의 사업 인허가·영업 신고 문의
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
