import type { Metadata } from 'next'
import '../globals.css'
import NavbarLang from '@/components/layout/NavbarLang'
import FooterLang from '@/components/layout/FooterLang'
import ScrollAnimationInit from '@/components/ui/ScrollAnimationInit'

export const metadata: Metadata = {
  metadataBase: new URL('https://inhega.co.kr'),
  title: 'ビジョン行政書士事務所 | 韓国許認可の専門家',
  description: '外国人・外国企業向けの韓国政府許認可手続き専門事務所。国際貨物運送、外貨両替、食品製造、化粧品許可、位置情報サービス届出などをワンストップで代行。',
  keywords: '韓国許認可, 韓国行政書士, 韓国ビザ, 外国人韓国法人, 韓国ビジネス許可',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://inhega.co.kr/ja',
    languages: {
      'ko': 'https://inhega.co.kr',
      'en': 'https://inhega.co.kr/en',
      'zh': 'https://inhega.co.kr/zh',
      'ja': 'https://inhega.co.kr/ja',
      'x-default': 'https://inhega.co.kr',
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ビジョン行政書士事務所 | 韓国許認可の専門家',
    description: '外国人・外国企業向けの韓国政府許認可を有資格行政書士が全件代行。',
    images: ['/images/hero-seoul.png'],
  },
  openGraph: {
    title: 'ビジョン行政書士事務所 | 韓国許認可の専門家',
    description: '外国人・外国企業向けの韓国政府許認可を有資格行政書士が全件代行。',
    url: 'https://inhega.co.kr/ja',
    siteName: 'ビジョン行政書士事務所',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'ビジョン行政書士事務所' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'ビジョン行政書士事務所',
  alternateName: '비전행정사사무소',
  url: 'https://inhega.co.kr/ja',
  logo: 'https://inhega.co.kr/images/hero-seoul.png',
  description: '外国人・外国企業向けの韓国政府許認可手続き専門事務所',
  telephone: '02-363-2251',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '退渓路324、3階',
    addressLocality: '中区',
    addressRegion: 'ソウル特別市',
    postalCode: '04614',
    addressCountry: 'KR',
  },
  email: '5000meter@gmail.com',
  openingHours: 'Mo-Fr 09:30-17:30',
  sameAs: ['https://blog.naver.com/inhe2018'],
}

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="alternate" hrefLang="ko" href="https://inhega.co.kr" />
        <link rel="alternate" hrefLang="en" href="https://inhega.co.kr/en" />
        <link rel="alternate" hrefLang="zh" href="https://inhega.co.kr/zh" />
        <link rel="alternate" hrefLang="ja" href="https://inhega.co.kr/ja" />
        <link rel="alternate" hrefLang="x-default" href="https://inhega.co.kr" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NavbarLang locale="ja" />
        <main>{children}</main>
        <FooterLang locale="ja" />
        <ScrollAnimationInit />
      </body>
    </html>
  )
}
