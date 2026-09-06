import type { Metadata } from 'next'
import '../globals.css'
import NavbarLang from '@/components/layout/NavbarLang'
import FooterLang from '@/components/layout/FooterLang'
import ScrollAnimationInit from '@/components/ui/ScrollAnimationInit'

export const metadata: Metadata = {
  metadataBase: new URL('https://inhega.co.kr'),
  title: 'Vision Administrative Office | Korean Business Licensing',
  description: "Korea's business licensing experts for foreign companies and individuals. International freight forwarding, currency exchange, food manufacturing, cosmetics, location-based services and more.",
  keywords: 'Korean business license, Korean administrative scrivener, Korea licensing, foreign company Korea, Korea business registration',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://inhega.co.kr/en',
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
    title: 'Vision Administrative Office | Korean Business Licensing',
    description: 'All Korean government business licenses for foreign companies — handled by licensed administrative scriveners.',
    images: ['/images/hero-seoul.png'],
  },
  openGraph: {
    title: 'Vision Administrative Office | Korean Business Licensing',
    description: 'All Korean government business licenses for foreign companies — handled by licensed administrative scriveners.',
    url: 'https://inhega.co.kr/en',
    siteName: 'Vision Administrative Office',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'Vision Administrative Office' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Vision Administrative Office',
  alternateName: '비전행정사사무소',
  url: 'https://inhega.co.kr/en',
  logo: 'https://inhega.co.kr/images/hero-seoul.png',
  description: 'Korean business licensing specialists for foreign companies and individuals',
  telephone: '02-363-2251',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '324 Toegyero, 3F',
    addressLocality: 'Jung-gu',
    addressRegion: 'Seoul',
    postalCode: '04614',
    addressCountry: 'KR',
  },
  email: '5000meter@gmail.com',
  openingHours: 'Mo-Fr 09:30-17:30',
  sameAs: ['https://blog.naver.com/inhe2018'],
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
        <NavbarLang locale="en" />
        <main>{children}</main>
        <FooterLang locale="en" />
        <ScrollAnimationInit />
      </body>
    </html>
  )
}
