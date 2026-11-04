import Link from 'next/link'
import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import BreadcrumbLd from '@/components/seo/BreadcrumbLd'

export const metadata: Metadata = {
  title: '联系我们 | YouSun Administrative Agency',
  description: '留下您的咨询信息，专业行政士将在咨询时间（工作日09:30–17:30）内依次与您联系。电话、邮箱均可咨询韩国营业许可业务。',
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
    title: '联系我们 | YouSun Administrative Agency',
    description: '留下您的咨询信息，专业行政士将在咨询时间（工作日09:30–17:30）内依次与您联系。',
    url: 'https://inhega.co.kr/zh/contact',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630 }],
  },
}

export default function ZhContactPage() {
  return (
    <>
      <BreadcrumbLd items={[{ name: '首页', path: '/zh' }, { name: '联系我们', path: '/zh/contact' }]} />
      <ContactForm />
      {/* AI-RECO-2 E-2: 처리 업무 전체 목록 상호 링크 */}
      <section className="container" style={{ padding: '0 0 var(--section-py-sm)' }}>
        <p><Link prefetch={false} href="/zh/services/all" style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px', display: 'inline-flex', alignItems: 'center', minHeight: '44px' }}>查看办理业务一览</Link></p>
      </section>
    </>
  )
}
