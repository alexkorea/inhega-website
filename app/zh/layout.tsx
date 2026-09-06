import type { Metadata } from 'next'
import '../globals.css'
import NavbarLang from '@/components/layout/NavbarLang'
import FooterLang from '@/components/layout/FooterLang'
import ScrollAnimationInit from '@/components/ui/ScrollAnimationInit'

export const metadata: Metadata = {
  metadataBase: new URL('https://inhega.co.kr'),
  title: 'Vision行政士事务所 | 韩国营业许可专家',
  description: '专为外国企业和个人办理韩国政府各类营业许可证。国际货运代理、外汇兑换、食品制造、化妆品许可、位置信息服务等一站式代办。',
  keywords: '韩国营业许可, 韩国行政士, 韩国创业, 外国人韩国公司, 韩国许可证申请',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://inhega.co.kr/zh',
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
    title: 'Vision行政士事务所 | 韩国营业许可专家',
    description: '专为外国企业和个人办理所有韩国政府营业许可证，由持牌行政士全程代办。',
    images: ['/images/hero-seoul.png'],
  },
  openGraph: {
    title: 'Vision行政士事务所 | 韩国营业许可专家',
    description: '专为外国企业和个人办理所有韩国政府营业许可证，由持牌行政士全程代办。',
    url: 'https://inhega.co.kr/zh',
    siteName: 'Vision行政士事务所',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'Vision行政士事务所' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Vision行政士事务所',
  alternateName: '비전행정사사무소',
  url: 'https://inhega.co.kr/zh',
  logo: 'https://inhega.co.kr/images/hero-seoul.png',
  description: '专为外国企业和个人办理韩国政府营业许可证',
  telephone: '02-363-2251',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '退溪路324, 3楼',
    addressLocality: '中区',
    addressRegion: '首尔特别市',
    postalCode: '04614',
    addressCountry: 'KR',
  },
  email: '5000meter@gmail.com',
  openingHours: 'Mo-Fr 09:30-17:30',
  sameAs: ['https://blog.naver.com/inhe2018'],
}

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
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
        <NavbarLang locale="zh" />
        <main>{children}</main>
        <FooterLang locale="zh" />
        <ScrollAnimationInit />
      </body>
    </html>
  )
}
