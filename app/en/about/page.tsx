import AboutPage from '@/components/layout/AboutPage'

export const metadata = {
  title: 'About Us | Vision Admin Office',
  description: 'Vision Admin Office with 50+ industries and 100+ licensing cases handled. Chief Admin Agent Lee Won-jung and our specialist team handle your case from start to finish.',
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
    title: 'About Us | Vision Admin Office',
    description: 'Vision Admin Office — specialists in Korean business licensing and immigration.',
    url: 'https://inhega.co.kr/en/about',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'Vision Admin Office Team' }],
    type: 'website',
  },
}

export default function EnAboutPage() {
  return <AboutPage locale="en" />
}
