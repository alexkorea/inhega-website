import type { Metadata } from 'next'
import '../globals.css'
import NavbarLang from '@/components/layout/NavbarLang'
import FooterLang from '@/components/layout/FooterLang'
import ScrollAnimationInit from '@/components/ui/ScrollAnimationInit'
import Webfonts from '@/components/ui/Webfonts'
import { organizationJsonLd } from '@/lib/org-jsonld'

export const metadata: Metadata = {
  metadataBase: new URL('https://inhega.co.kr'),
  title: 'YouSun Administrative Agency | Korean Business Licensing',
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
    title: 'YouSun Administrative Agency | Korean Business Licensing',
    description: 'All Korean government business licenses for foreign companies — handled by licensed administrative scriveners.',
    images: ['/images/hero-seoul.png'],
  },
  openGraph: {
    title: 'YouSun Administrative Agency | Korean Business Licensing',
    description: 'All Korean government business licenses for foreign companies — handled by licensed administrative scriveners.',
    url: 'https://inhega.co.kr/en',
    siteName: 'YouSun Administrative Agency',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Agency' }],
  },
}

// 조직 노드는 lib/org-jsonld.ts 단일 원천(ko/en/zh/ja 공통, 같은 @id).
const jsonLd = organizationJsonLd('en')

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* hreflang is emitted from Metadata.alternates.languages (per-page); do not hardcode here — it double-outputs. */}
      <head>
        <Webfonts />
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
