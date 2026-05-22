import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: '비전행정사사무소 (Vision Administrative Office)',
  url: 'https://www.inhega.co.kr',
  logo: 'https://www.inhega.co.kr/logo.png',
  description: '인허가 업무 전문 행정사사무소. 용도변경, 식품인허가, 물류주선업, 환전업 허가·등록 전문.',
  telephone: '+82-2-363-2251',
  address: { '@type': 'PostalAddress', addressCountry: 'KR', addressLocality: 'Seoul' },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:30',
    closes: '17:30',
  },
  areaServed: 'KR',
  serviceType: ['인허가', '용도변경', '식품제조가공업', '국제물류주선업', '환전업'],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inhega.co.kr'),
  verification: {
    google: 'yl4GX6YzjWjM6GVzL-IRULv9r23VIb9go1mPpGBjm0E',
  },
  title: '비전행정사사무소 | 인허가 전문 행정사 — 용도변경·식품·물류주선업',
  description: '인허가 업무 전문 행정사사무소. 국제물류주선업, 환전업, 식품제조가공업, 건축물 용도변경 등 다양한 업종의 허가·등록·인증을 전문적으로 지원합니다. 02-363-2251.',
  keywords: ['행정사', '인허가', '허가', '등록', '인증', '행정사사무소', '비전행정사', '식품인허가', '용도변경', '물류주선업'],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.inhega.co.kr',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.inhega.co.kr',
    siteName: '비전행정사사무소',
    title: '비전행정사사무소 | 인허가 전문 행정사 — 용도변경·식품·물류주선업',
    description: '인허가 업무 전문 행정사사무소. 용도변경, 식품인허가, 물류주선업 허가·등록·인증 전문 지원. 02-363-2251.',
    images: [{ url: 'https://www.inhega.co.kr/og-image.png', width: 1200, height: 630, alt: '비전행정사사무소 인허가 전문' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '비전행정사사무소 | 인허가 전문 행정사',
    description: '인허가 업무 전문 행정사사무소. 용도변경, 식품인허가, 물류주선업 허가·등록·인증 전문 지원.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta property="og:locale" content="ko_KR" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }} />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-J6GD76FYJ8" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J6GD76FYJ8');
          `}
        </Script>
        {children}
      </body>
    </html>
  )
}
