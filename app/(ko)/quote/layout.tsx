export const metadata = {
  title: '무료 견적 문의 | 비전행정사사무소',
  description: '인허가 견적을 무료로 받아보세요. 국제물류주선업·환전업·식품인허가 등 16종 인허가 전문 행정사가 검토 후 24시간 내 연락드립니다.',
  alternates: {
    canonical: 'https://inhega.co.kr/quote',
    languages: {
      'ko': 'https://inhega.co.kr/quote',
      'en': 'https://inhega.co.kr/en/quote',
      'zh': 'https://inhega.co.kr/zh/quote',
      'ja': 'https://inhega.co.kr/ja/quote',
      'x-default': 'https://inhega.co.kr/quote',
    },
  },
  openGraph: {
    title: '무료 견적 문의 | 비전행정사사무소',
    description: '인허가 견적 무료 문의. 전문 행정사가 24시간 내 검토 후 연락드립니다.',
    url: 'https://inhega.co.kr/quote',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: '비전행정사사무소 견적 문의' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' as const, title: '무료 견적 문의 | 비전행정사사무소', images: ['/images/hero-seoul.png'] },
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
