export const metadata = {
  title: '무료 상담 문의 | 비전행정사사무소',
  description: '인허가 전문 행정사와 무료 상담하세요. 국제물류주선업·환전업·식품인허가 등 모든 인허가 문의를 24시간 내 답변드립니다. 02-363-2251',
  alternates: {
    canonical: 'https://inhega.co.kr/contact',
    languages: {
      'ko': 'https://inhega.co.kr/contact',
      'en': 'https://inhega.co.kr/en/contact',
      'zh': 'https://inhega.co.kr/zh/contact',
      'ja': 'https://inhega.co.kr/ja/contact',
      'x-default': 'https://inhega.co.kr/contact',
    },
  },
  openGraph: {
    title: '무료 상담 문의 | 비전행정사사무소',
    description: '인허가 전문 행정사와 무료 상담. 24시간 내 답변 보장. 02-363-2251',
    url: 'https://inhega.co.kr/contact',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: '비전행정사사무소 상담 문의' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' as const, title: '무료 상담 문의 | 비전행정사사무소', images: ['/images/hero-seoul.png'] },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
