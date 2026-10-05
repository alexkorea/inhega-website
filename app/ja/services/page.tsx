import Link from 'next/link'
import { getDirectoryCount } from '@/lib/service-directory'
import ServiceDirectory from '@/components/services/ServiceDirectory'
import type { Metadata } from 'next'

// 서비스 목록 단일 정본 — lib/services-catalog.ts (하드코딩 금지, 2026-09-22)
// 서비스 수 = 기존 + 번역본 있는 신규 업종(0949). 번역본 없는 업종은 이 언어에 없다.
const serviceCount = getDirectoryCount('ja')

export const metadata: Metadata = {
  title: `${serviceCount}種の専門許認可代行サービス | YouSun Administrative Agency`,
  description: '国際貨物運送取扱業、外貨両替業、食品許可、建物用途変更など、専門の許認可代行サービスをYouSun Administrative Agencyが最初から最後まで代行いたします。',
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
    title: `${serviceCount}種の専門許認可代行サービス | YouSun Administrative Agency`,
    description: '外国企業・投資家向け韓国許認可代行の専門サービス。初回相談無料。',
    url: 'https://inhega.co.kr/ja/services',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Agencyサービス' }],
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: { card: 'summary_large_image', title: `${serviceCount}種の専門許認可代行サービス | YouSun Administrative Agency`, images: ['/images/hero-seoul.png'] },
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
        <section style={{ background: 'var(--navy)', padding: '1.75rem 0 1.5rem' }}>
          <div className="container">
            <span className="badge badge-white text-label fade-up">サービス</span>
            <h1 className="text-display fade-up delay-1" style={{ color: 'white', marginTop: '1rem' }}>
              {serviceCount}種の専門<br />許認可サービス
            </h1>
            <p className="text-body-lg fade-up delay-2" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
              業種別要件分析から書類準備、官庁への提出まで、全過程を代行いたします。
            </p>
          </div>
        </section>

        {/* 0949 — 기존 서비스 + 번역본이 있는 신규 업종만, 분야별 소제목. 정본 lib/service-directory.ts */}
        <section className="bg-cream" style={{ padding: '2rem 0 var(--section-py-sm)' }}>
          <div className="container">
            <ServiceDirectory locale="ja" mode="sections" />
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--burgundy)', padding: 'var(--section-py-md) 0' }}>
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
