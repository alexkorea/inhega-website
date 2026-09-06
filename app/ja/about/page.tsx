import AboutPage from '@/components/layout/AboutPage'

export const metadata = {
  title: '事務所案内 | ビジョン行政書士事務所',
  description: 'ビジョン行政書士事務所は50以上の業種、100件以上の許認可処理経験を持つ専門行政書士事務所です。',
  alternates: {
    canonical: 'https://inhega.co.kr/ja/about',
    languages: {
      'ko': 'https://inhega.co.kr/about',
      'en': 'https://inhega.co.kr/en/about',
      'zh': 'https://inhega.co.kr/zh/about',
      'ja': 'https://inhega.co.kr/ja/about',
      'x-default': 'https://inhega.co.kr/about',
    },
  },
  openGraph: {
    title: '事務所案内 | ビジョン行政書士事務所',
    description: '韓国の許認可・ビザ専門の行政書士事務所',
    url: 'https://inhega.co.kr/ja/about',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'ビジョン行政書士事務所チーム' }],
    type: 'website',
  },
}

export default function JaAboutPage() {
  return <AboutPage locale="ja" />
}
