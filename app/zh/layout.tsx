import type { Metadata } from 'next'
import '../globals.css'
import NavbarLang from '@/components/layout/NavbarLang'
import FooterLang from '@/components/layout/FooterLang'
import ScrollAnimationInit from '@/components/ui/ScrollAnimationInit'
import Webfonts from '@/components/ui/Webfonts'
import { organizationJsonLd } from '@/lib/org-jsonld'

export const metadata: Metadata = {
  metadataBase: new URL('https://inhega.co.kr'),
  title: 'YouSun Administrative Agency | 韩国营业许可专家',
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
    title: 'YouSun Administrative Agency | 韩国营业许可专家',
    description: '专为外国企业和个人办理所有韩国政府营业许可证，由持牌行政士全程代办。',
    images: ['/images/hero-seoul.png'],
  },
  openGraph: {
    title: 'YouSun Administrative Agency | 韩国营业许可专家',
    description: '专为外国企业和个人办理所有韩国政府营业许可证，由持牌行政士全程代办。',
    url: 'https://inhega.co.kr/zh',
    siteName: 'YouSun Administrative Agency',
    locale: 'zh_CN',
    type: 'website',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Agency' }],
  },
}

// 조직 노드는 lib/org-jsonld.ts 단일 원천(ko/en/zh/ja 공통, 같은 @id).
const jsonLd = organizationJsonLd

export default function ZhLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      {/* hreflang is emitted from Metadata.alternates.languages (per-page); do not hardcode here — it double-outputs. */}
      <head>
        <Webfonts />
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
