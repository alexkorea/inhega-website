/**
 * /news — 인허가 뉴스 (맥7 20260922-1845 지시).
 *
 * KV(NEWS_KV)에서 요청 시 읽는 SSR 페이지다. 맥3 REGWATCH 가
 * POST /api/news/ingest 로 넣은 자료가 **재배포 없이** 그대로 올라온다.
 * 캐시는 워커 출구에서 s-maxage=600(≤10분)으로 붙인다
 * (scripts/build-pages-bundle.mjs 의 NEWS_CACHE_CONTROL).
 */
import type { Metadata } from 'next'
import NewsPageBody from '@/components/news/NewsPageBody'
import { getNewsStrings } from '@/lib/i18n/news-i18n'

const t = getNewsStrings('ja')

export const metadata: Metadata = {
  title: t.metaTitle,
  description: t.metaDescription,
  // 본문(title_ko·summary_ko)이 ko 와 같은 한국어라 색인은 ko 하나로 모은다.
  // 같은 사이트의 다국어 폴백 블로그와 같은 처리(커밋 a85d707).
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://inhega.co.kr/news',
    languages: {
      'ko': 'https://inhega.co.kr/news',
      'en': 'https://inhega.co.kr/en/news',
      'zh': 'https://inhega.co.kr/zh/news',
      'ja': 'https://inhega.co.kr/ja/news',
      'x-default': 'https://inhega.co.kr/news',
    },
  },
  openGraph: {
    title: t.metaTitle,
    description: t.metaDescription,
    url: 'https://inhega.co.kr/ja/news',
    siteName: '유선행정사사무소',
    type: 'website',
    images: [{ url: 'https://inhega.co.kr/images/hero-seoul.png', width: 1200, height: 630, alt: t.h1 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: t.metaTitle,
    description: t.metaDescription,
    images: ['https://inhega.co.kr/images/hero-seoul.png'],
  },
}

// KV 를 요청 시 읽는다 — 프리렌더하면 배포 시점 데이터로 굳는다.
export const dynamic = 'force-dynamic'

export default function NewsPage() {
  return <NewsPageBody locale="ja" />
}
