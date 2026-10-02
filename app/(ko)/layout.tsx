import type { Metadata } from 'next'
import Script from 'next/script'
import '../globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollAnimationInit from '@/components/ui/ScrollAnimationInit'
import Webfonts from '@/components/ui/Webfonts'

export const metadata: Metadata = {
  metadataBase: new URL('https://inhega.co.kr'),
  title: '인허가 행정사 | 위치기반서비스사업·국제물류주선업·건축물용도변경 — 유선행정사사무소',
  description: '위치기반서비스사업, 국제물류주선업, 건축물용도변경, 기업부설연구소, 의약품허가, 의약외품허가, 전자담배수입허가, 비영리사단법인, 지정스포츠클럽, 호스텔업 등 모든 인허가·등록·신고를 행정사가 전담합니다.',
  keywords: '위치기반서비스사업, 국제물류주선업, 건축물용도변경, 기업부설연구소, 의약품허가, 의약외품허가, 전자담배수입허가, 비영리사단법인, 지정스포츠클럽, 호스텔업, 인허가 행정사, 인허가 신청',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://inhega.co.kr',
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
    title: '인허가 행정사 | 위치기반서비스사업·국제물류주선업·건축물용도변경 — 유선행정사사무소',
    description: '위치기반서비스사업, 국제물류주선업, 건축물용도변경, 기업부설연구소, 의약품허가, 호스텔업 등 인허가 전문. 무료 초기 상담.',
    images: ['/images/hero-seoul.png'],
  },
  openGraph: {
    title: '인허가 행정사 | 위치기반서비스사업·국제물류주선업·건축물용도변경 — 유선행정사사무소',
    description: '위치기반서비스사업, 국제물류주선업, 건축물용도변경, 기업부설연구소, 의약품허가, 호스텔업 등 인허가 전문. 무료 초기 상담.',
    url: 'https://inhega.co.kr',
    siteName: '유선행정사사무소',
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: '인허가 행정사 유선행정사사무소' }],
  },
}

// FAQPage 는 여기 두지 않는다 — 레이아웃에 두면 모든 ko 페이지에 화면에 없는 5문항이 실려
// 페이지별 FAQ 와 불일치했다(2026-10-03, 맥3 I5 발견). FAQPage 는 화면 FAQ 를 그리는 페이지가 같은 배열로 낸다.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://inhega.co.kr/#organization',
    name: '유선행정사사무소',
    url: 'https://inhega.co.kr',
    logo: 'https://inhega.co.kr/images/hero-seoul.png',
    description: '위치기반서비스사업, 국제물류주선업, 건축물용도변경, 기업부설연구소, 의약품·의약외품허가 등 모든 인허가 업무 전문 행정사 사무소',
    telephone: '02-363-2251',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '퇴계로 324, 3층',
      addressLocality: '중구',
      addressRegion: '서울특별시',
      postalCode: '04614',
      addressCountry: 'KR',
    },
    email: 'teamone1163@gmail.com',
    openingHours: 'Mo-Fr 09:30-17:30',
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: '인허가 서비스',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '위치기반서비스사업 신고' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '국제물류주선업 등록' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '건축물 용도변경 허가' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '기업부설연구소 인정' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '의약품 제조·수입 허가' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '의약외품 허가·신고' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '전자담배 수입 허가' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '비영리사단법인 설립' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '지정스포츠클럽 지정' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '호스텔업 등록' } },
      ],
    },
  }
]

export default function KoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      {/* hreflang is emitted from Metadata.alternates.languages (per-page); do not hardcode here — it double-outputs. */}
      <head>
        <Webfonts />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Script src="https://form-gateway.pages.dev/form-widget.js" strategy="lazyOnload" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollAnimationInit />
      </body>
    </html>
  )
}
