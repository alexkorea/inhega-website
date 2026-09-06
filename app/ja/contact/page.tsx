import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ | VISION行政書士事務所',
  description: 'お問い合わせ内容をご記入いただければ、24時間以内に担当行政書士よりご連絡いたします。電話・メールでもご相談いただけます。',
  alternates: {
    canonical: 'https://inhega.co.kr/ja/contact',
    languages: {
      'ko': 'https://inhega.co.kr/contact',
      'en': 'https://inhega.co.kr/en/contact',
      'zh': 'https://inhega.co.kr/zh/contact',
      'ja': 'https://inhega.co.kr/ja/contact',
      'x-default': 'https://inhega.co.kr/contact',
    },
  },
  openGraph: {
    title: 'お問い合わせ | VISION行政書士事務所',
    description: 'お問い合わせ内容をご記入いただければ、24時間以内に担当行政書士よりご連絡いたします。',
    url: 'https://inhega.co.kr/ja/contact',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630 }],
  },
}

export default function JaContactPage() {
  return <ContactForm />
}
