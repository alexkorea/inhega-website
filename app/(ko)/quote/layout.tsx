import { getDirectoryCount } from '@/lib/service-directory'

export const metadata = {
  title: '무료 견적 문의 | 유선행정사사무소',
  // 서비스 수 = 기존 24종 + 신규 업종 페이지(0949) — lib/service-directory.ts 에서 자동 계산.
  description: `인허가 견적을 무료로 받아보세요. 국제물류주선업·환전업·식품인허가 등 ${getDirectoryCount('ko')}종 인허가 전문 행정사가 검토 후 24시간 내 연락드립니다.`,
  alternates: {
    canonical: 'https://inhega.co.kr/quote',
    languages: {
      'ko': 'https://inhega.co.kr/quote',
      // en/zh/ja /quote 는 /{l}/contact 로 307 — hreflang 대상 아님 (M1 2026-10-03)
      'x-default': 'https://inhega.co.kr/quote',
    },
  },
  openGraph: {
    title: '무료 견적 문의 | 유선행정사사무소',
    description: '인허가 견적 무료 문의. 전문 행정사가 24시간 내 검토 후 연락드립니다.',
    url: 'https://inhega.co.kr/quote',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: '유선행정사사무소 견적 문의' }],
    type: 'website',
  },
  twitter: { card: 'summary_large_image' as const, title: '무료 견적 문의 | 유선행정사사무소', images: ['/images/hero-seoul.png'] },
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
