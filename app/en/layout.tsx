import type { Metadata } from 'next'
import '../globals.css'
import NavbarLang from '@/components/layout/NavbarLang'
import FooterLang from '@/components/layout/FooterLang'
import ScrollAnimationInit from '@/components/ui/ScrollAnimationInit'

export const metadata: Metadata = {
  metadataBase: new URL('https://inhega.co.kr'),
  title: 'YouSun Administrative Attorney | Korean Business Licensing',
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
    title: 'YouSun Administrative Attorney | Korean Business Licensing',
    description: 'All Korean government business licenses for foreign companies — handled by licensed administrative scriveners.',
    images: ['/images/hero-seoul.png'],
  },
  openGraph: {
    title: 'YouSun Administrative Attorney | Korean Business Licensing',
    description: 'All Korean government business licenses for foreign companies — handled by licensed administrative scriveners.',
    url: 'https://inhega.co.kr/en',
    siteName: 'YouSun Administrative Attorney',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Attorney' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'YouSun Administrative Attorney',
  alternateName: '유선행정사사무소',
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
  email: 'teamone1163@gmail.com',
  openingHours: 'Mo-Fr 09:30-17:30',
  sameAs: [],
}

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* hreflang is emitted from Metadata.alternates.languages (per-page); do not hardcode here — it double-outputs. */}
      <head>
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
