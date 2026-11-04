import Link from 'next/link'
import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import BreadcrumbLd from '@/components/seo/BreadcrumbLd'

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
  return (
    <>
      <BreadcrumbLd items={[{ name: 'ホーム', path: '/ja' }, { name: 'お問い合わせ', path: '/ja/contact' }]} />
      <ContactForm />
      {/* AI-RECO-2 E-2: 처리 업무 전체 목록 상호 링크 */}
      <section className="container" style={{ padding: '0 0 var(--section-py-sm)' }}>
        <p><Link prefetch={false} href="/ja/services/all" style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px', display: 'inline-flex', alignItems: 'center', minHeight: '44px' }}>取扱業務一覧を見る</Link></p>
      </section>
    </>
  )
}
