import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://inhega.co.kr'),
  title: '비전행정사사무소 - 인허가 전문',
  description: '인허가 업무 전문 행정사사무소. 국제물류주선업, 환전업, 식품제조가공업, 건축물 용도변경 등 다양한 업종의 허가·등록·인증을 전문적으로 지원합니다.',
  keywords: ['행정사', '인허가', '허가', '등록', '인증', '행정사사무소', '비전행정사', '식품인허가', '용도변경', '물류주선업'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://inhega.co.kr',
    siteName: '비전행정사사무소',
    title: '비전행정사사무소 - 인허가 전문',
    description: '인허가 업무 전문 행정사사무소. 다양한 업종의 허가·등록·인증을 전문적으로 지원합니다.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
