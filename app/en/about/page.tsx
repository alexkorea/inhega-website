import AboutPage from '@/components/layout/AboutPage'

export const metadata = {
  title: 'About Us | YouSun Administrative Attorney',
  description: 'YouSun Administrative Attorney. Chief Admin Agent Jung Yu-sun and our specialist team handle your case from start to finish.',
  alternates: {
    canonical: 'https://inhega.co.kr/en/about',
    languages: {
      'ko': 'https://inhega.co.kr/about',
      'en': 'https://inhega.co.kr/en/about',
      'zh': 'https://inhega.co.kr/zh/about',
      'ja': 'https://inhega.co.kr/ja/about',
      'x-default': 'https://inhega.co.kr/about',
    },
  },
  openGraph: {
    title: 'About Us | YouSun Administrative Attorney',
    description: 'YouSun Administrative Attorney — specialists in Korean business licensing and immigration.',
    url: 'https://inhega.co.kr/en/about',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Attorney Team' }],
    type: 'website',
  },
}

export default function EnAboutPage() {
  return <AboutPage locale="en" />
}
