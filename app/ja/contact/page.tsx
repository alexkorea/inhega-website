import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'お問い合わせ | YouSun Administrative Agency',
  description: 'お問い合わせ内容をご記入いただければ、相談受付時間（平日09:30〜17:30）内に担当者より順次ご連絡いたします。電話・メールでもご相談いただけます。',
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
    title: 'お問い合わせ | YouSun Administrative Agency',
    description: 'お問い合わせ内容をご記入いただければ、相談受付時間（平日09:30〜17:30）内に担当者より順次ご連絡いたします。',
    url: 'https://inhega.co.kr/ja/contact',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630 }],
  },
}

export default function JaContactPage() {
  return <ContactForm />
}
