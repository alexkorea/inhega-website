import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: '联系我们 | Vision行政士事务所',
  description: '留下您的咨询信息，专业行政士将在24小时内与您联系。电话、邮箱均可咨询韩国营业许可业务。',
  alternates: {
    canonical: 'https://inhega.co.kr/zh/contact',
    languages: {
      'ko': 'https://inhega.co.kr/contact',
      'en': 'https://inhega.co.kr/en/contact',
      'zh': 'https://inhega.co.kr/zh/contact',
      'ja': 'https://inhega.co.kr/ja/contact',
      'x-default': 'https://inhega.co.kr/contact',
    },
  },
  openGraph: {
    title: '联系我们 | Vision行政士事务所',
    description: '留下您的咨询信息，专业行政士将在24小时内与您联系。',
    url: 'https://inhega.co.kr/zh/contact',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630 }],
  },
}

export default function ZhContactPage() {
  return <ContactForm />
}
