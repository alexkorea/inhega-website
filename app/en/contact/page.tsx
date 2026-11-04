import Link from 'next/link'
import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import BreadcrumbLd from '@/components/seo/BreadcrumbLd'

export const metadata: Metadata = {
  title: 'Contact Us | YouSun Administrative Agency',
  description: 'Leave your inquiry and a licensed administrative agent will contact you during our consultation hours (weekdays 09:30–17:30 KST). Call or email us for Korean business license support.',
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
    title: 'Contact Us | YouSun Administrative Agency',
    description: 'Leave your inquiry and a licensed administrative agent will contact you during our consultation hours (weekdays 09:30–17:30 KST).',
    url: 'https://inhega.co.kr/en/contact',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630 }],
  },
}

export default function EnContactPage() {
  return (
    <>
      <BreadcrumbLd items={[{ name: 'Home', path: '/en' }, { name: 'Contact', path: '/en/contact' }]} />
      <ContactForm />
      {/* AI-RECO-2 E-2: 처리 업무 전체 목록 상호 링크 */}
      <section className="container" style={{ padding: '0 0 var(--section-py-sm)' }}>
        <p><Link prefetch={false} href="/en/services/all" style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px', display: 'inline-flex', alignItems: 'center', minHeight: '44px' }}>See the full list of services we handle</Link></p>
      </section>
    </>
  )
}
