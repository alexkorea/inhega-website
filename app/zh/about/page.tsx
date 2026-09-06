import AboutPage from '@/components/layout/AboutPage'

export const metadata = {
  title: '公司介绍 | 比前行政士事务所',
  description: '比前行政士事务所拥有50个以上业种、100件以上许可证处理经验。代表李元中行政士及专业团队全程负责。',
  alternates: {
    canonical: 'https://inhega.co.kr/zh/about',
    languages: {
      'ko': 'https://inhega.co.kr/about',
      'en': 'https://inhega.co.kr/en/about',
      'zh': 'https://inhega.co.kr/zh/about',
      'ja': 'https://inhega.co.kr/ja/about',
      'x-default': 'https://inhega.co.kr/about',
    },
  },
  openGraph: {
    title: '公司介绍 | 比前行政士事务所',
    description: '韩国许可证及签证专业行政士事务所',
    url: 'https://inhega.co.kr/zh/about',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: '比前行政士事务所团队' }],
    type: 'website',
  },
}

export default function ZhAboutPage() {
  return <AboutPage locale="zh" />
}
