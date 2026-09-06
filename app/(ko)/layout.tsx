import type { Metadata } from 'next'
import Script from 'next/script'
import '../globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollAnimationInit from '@/components/ui/ScrollAnimationInit'

export const metadata: Metadata = {
  metadataBase: new URL('https://inhega.co.kr'),
  title: '인허가 행정사 | 위치기반서비스사업·국제물류주선업·건축물용도변경 — 비전행정사사무소',
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
    title: '인허가 행정사 | 위치기반서비스사업·국제물류주선업·건축물용도변경 — 비전행정사사무소',
    description: '위치기반서비스사업, 국제물류주선업, 건축물용도변경, 기업부설연구소, 의약품허가, 호스텔업 등 인허가 전문. 무료 초기 상담.',
    images: ['/images/hero-seoul.png'],
  },
  openGraph: {
    title: '인허가 행정사 | 위치기반서비스사업·국제물류주선업·건축물용도변경 — 비전행정사사무소',
    description: '위치기반서비스사업, 국제물류주선업, 건축물용도변경, 기업부설연구소, 의약품허가, 호스텔업 등 인허가 전문. 무료 초기 상담.',
    url: 'https://inhega.co.kr',
    siteName: '비전행정사사무소',
    locale: 'ko_KR',
    type: 'website',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: '인허가 행정사 비전행정사사무소' }],
  },
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: '비전행정사사무소',
    alternateName: 'Vision Administrative Office',
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
    email: '5000meter@gmail.com',
    openingHours: 'Mo-Fr 09:30-17:30',
    sameAs: ['https://blog.naver.com/inhe2018'],
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
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '위치기반서비스사업 신고는 어떻게 하나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '위치기반서비스사업은 방송통신위원회에 신고해야 합니다. 사업계획서, 개인정보 처리방침, 보안설비 등을 준비해야 하며, 비전행정사사무소가 전 과정을 대행합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '국제물류주선업 등록 요건은 무엇인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '국제물류주선업 등록은 국토교통부에 신고하며, 자본금 3억 원 이상, 사무실, 화물운송주선업 보험가입이 필요합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '건축물 용도변경 허가 절차는 어떻게 되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '건축물 용도변경은 상위 시설군으로의 변경 시 허가, 하위 시설군으로의 변경 시 신고가 필요합니다. 관할 구청에 신청하며 설계도서가 필요합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '기업부설연구소 인정은 어디서 받나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '기업부설연구소는 한국산업기술진흥협회(KOITA)에 신청하며, 전담 연구원 2인 이상, 전용 연구 공간, 연구장비 등의 요건을 충족해야 합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '전자담배 수입허가는 어떤 절차가 필요한가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '전자담배(액상형·궐련형) 수입은 기획재정부 지정 수입담배 허가와 식약처 안전성 심사가 필요합니다. 서류 준비부터 허가까지 비전행정사사무소가 대행합니다.',
        },
      },
    ],
  },
]

export default function KoLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
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
        <Script src="https://form-gateway.pages.dev/form-widget.js" strategy="lazyOnload" />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ScrollAnimationInit />
      </body>
    </html>
  )
}
