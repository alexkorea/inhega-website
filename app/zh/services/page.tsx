import Link from 'next/link'
import { getDirectoryCount } from '@/lib/service-directory'
import ServiceDirectory from '@/components/services/ServiceDirectory'
import type { Metadata } from 'next'

// 서비스 목록 단일 정본 — lib/services-catalog.ts (하드코딩 금지, 2026-09-22)
// 서비스 수 = 기존 + 번역본 있는 신규 업종(0949). 번역본 없는 업종은 이 언어에 없다.
const serviceCount = getDirectoryCount('zh')

export const metadata: Metadata = {
  title: `${serviceCount}项专业许可代办服务 | YouSun Administrative Agency`,
  description: '国际货运代理、外汇兑换、食品许可、建筑物用途变更等多项专业许可代办服务，YouSun Administrative Agency为您从头到尾全程代办。',
  alternates: {
    canonical: 'https://inhega.co.kr/zh/services',
    languages: {
      ko: 'https://inhega.co.kr/services',
      en: 'https://inhega.co.kr/en/services',
      zh: 'https://inhega.co.kr/zh/services',
      ja: 'https://inhega.co.kr/ja/services',
      'x-default': 'https://inhega.co.kr/services',
    },
  },
  openGraph: {
    title: `${serviceCount}项专业许可代办服务 | YouSun Administrative Agency`,
    description: '面向外国企业和投资者的韩国许可代办专业服务。首次咨询免费。',
    url: 'https://inhega.co.kr/zh/services',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Agency服务' }],
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: { card: 'summary_large_image', title: `${serviceCount}项专业许可代办服务 | YouSun Administrative Agency`, images: ['/images/hero-seoul.png'] },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: '首页', item: 'https://inhega.co.kr/zh' },
    { '@type': 'ListItem', position: 2, name: '服务项目', item: 'https://inhega.co.kr/zh/services' },
  ],
}

export default function ZhServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div style={{ paddingTop: '72px' }}>
        {/* Header */}
        <section style={{ background: 'var(--navy)', padding: '1.75rem 0 1.5rem' }}>
          <div className="container">
            <span className="badge badge-white text-label fade-up">服务项目</span>
            <h1 className="text-display fade-up delay-1" style={{ color: 'white', marginTop: '1rem' }}>
              {serviceCount}项专业<br />许可代办服务
            </h1>
            <p className="text-body-lg fade-up delay-2" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
              从行业要求分析、材料准备到政府机关提交，我们为您代办全过程。
            </p>
          </div>
        </section>

        {/* 0949 — 기존 서비스 + 번역본이 있는 신규 업종만, 분야별 소제목. 정본 lib/service-directory.ts */}
        <section className="bg-cream" style={{ padding: '2rem 0 var(--section-py-sm)' }}>
          <div className="container">
            <ServiceDirectory locale="zh" mode="sections" />
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--burgundy)', padding: 'var(--section-py-md) 0' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: 'white', marginBottom: '1rem' }}>
              没有找到您需要的服务？
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem' }}>
              列表之外的许可事项，也可通过咨询为您寻找解决方案。
            </p>
            <Link href="/zh/contact" className="btn btn-outline-white btn-lg">申请免费咨询</Link>
          </div>
        </section>
      </div>
    </>
  )
}
