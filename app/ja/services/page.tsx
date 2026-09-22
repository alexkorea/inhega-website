import Image from 'next/image'
import Link from 'next/link'
import { getServiceCatalog } from '@/lib/services-catalog'
import type { Metadata } from 'next'
import styles from '@/app/services-list.module.css'

// 서비스 목록 단일 정본 — lib/services-catalog.ts (하드코딩 금지, 2026-09-22)
const translatedServices = getServiceCatalog('ja')

export const metadata: Metadata = {
  title: `${translatedServices.length}種の専門許認可代行サービス | YouSun Administrative Attorney`,
  description: '国際貨物運送取扱業、外貨両替業、食品許可、建物用途変更など、専門の許認可代行サービスをYouSun Administrative Attorneyが最初から最後まで代行いたします。',
  alternates: {
    canonical: 'https://inhega.co.kr/ja/services',
    languages: {
      ko: 'https://inhega.co.kr/services',
      en: 'https://inhega.co.kr/en/services',
      zh: 'https://inhega.co.kr/zh/services',
      ja: 'https://inhega.co.kr/ja/services',
      'x-default': 'https://inhega.co.kr/services',
    },
  },
  openGraph: {
    title: `${translatedServices.length}種の専門許認可代行サービス | YouSun Administrative Attorney`,
    description: '外国企業・投資家向け韓国許認可代行の専門サービス。初回相談無料。',
    url: 'https://inhega.co.kr/ja/services',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Attorneyサービス' }],
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: { card: 'summary_large_image', title: `${translatedServices.length}種の専門許認可代行サービス | YouSun Administrative Attorney`, images: ['/images/hero-seoul.png'] },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'ホーム', item: 'https://inhega.co.kr/ja' },
    { '@type': 'ListItem', position: 2, name: 'サービス', item: 'https://inhega.co.kr/ja/services' },
  ],
}

export default function JaServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div style={{ paddingTop: '72px' }}>
        {/* Header */}
        <section style={{ background: 'var(--navy)', padding: '5rem 0 4rem' }}>
          <div className="container">
            <span className="badge badge-white text-label fade-up">サービス</span>
            <h1 className="text-display fade-up delay-1" style={{ color: 'white', marginTop: '1rem' }}>
              {translatedServices.length}種の専門<br />許認可サービス
            </h1>
            <p className="text-body-lg fade-up delay-2" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
              業種別要件分析から書類準備、官庁への提出まで、全過程を代行いたします。
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
                          詳しく見る
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

        {/* CTA */}
        <section style={{ background: 'var(--burgundy)', padding: '5rem 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: 'white', marginBottom: '1rem' }}>
              ご希望のサービスが見つかりませんか？
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
              リストにない許認可も、ご相談を通じて解決方法をご案内いたします。
            </p>
            <Link href="/ja/contact" className="btn btn-outline-white btn-lg">無料相談を申し込む</Link>
          </div>
        </section>
      </div>
    </>
  )
}
