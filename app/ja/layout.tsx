import type { Metadata } from 'next'
import '../globals.css'
import NavbarLang from '@/components/layout/NavbarLang'
import FooterLang from '@/components/layout/FooterLang'
import ScrollAnimationInit from '@/components/ui/ScrollAnimationInit'
import Webfonts from '@/components/ui/Webfonts'
import { organizationJsonLd } from '@/lib/org-jsonld'

export const metadata: Metadata = {
  metadataBase: new URL('https://inhega.co.kr'),
  title: 'YouSun Administrative Agency | 韓国許認可の専門家',
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
    title: 'YouSun Administrative Agency | 韓国許認可の専門家',
    description: '外国人・外国企業向けの韓国政府許認可を有資格行政書士が全件代行。',
    images: ['/images/hero-seoul.png'],
  },
  openGraph: {
    title: 'YouSun Administrative Agency | 韓国許認可の専門家',
    description: '外国人・外国企業向けの韓国政府許認可を有資格行政書士が全件代行。',
    url: 'https://inhega.co.kr/ja',
    siteName: 'YouSun Administrative Agency',
    locale: 'ja_JP',
    type: 'website',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Agency' }],
  },
}

// 조직 노드는 lib/org-jsonld.ts 단일 원천(ko/en/zh/ja 공통, 같은 @id).
const jsonLd = organizationJsonLd('ja')

export default function JaLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      {/* hreflang is emitted from Metadata.alternates.languages (per-page); do not hardcode here — it double-outputs. */}
      <head>
        <Webfonts />
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
