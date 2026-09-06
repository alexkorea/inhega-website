import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Vision Administrative Office',
  description: 'Leave your inquiry and a licensed scrivener will contact you within 24 hours. Call or email us for Korean business license support.',
  alternates: {
    canonical: 'https://inhega.co.kr/en/contact',
    languages: {
      'ko': 'https://inhega.co.kr/contact',
      'en': 'https://inhega.co.kr/en/contact',
      'zh': 'https://inhega.co.kr/zh/contact',
      'ja': 'https://inhega.co.kr/ja/contact',
      'x-default': 'https://inhega.co.kr/contact',
    },
  },
  openGraph: {
    title: 'Contact Us | Vision Administrative Office',
    description: 'Leave your inquiry and a licensed scrivener will contact you within 24 hours.',
    url: 'https://inhega.co.kr/en/contact',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630 }],
  },
}

export default function EnContactPage() {
  return <ContactForm />
}
