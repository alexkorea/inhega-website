import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/services-data'
import { getServiceI18n } from '@/lib/i18n/services-i18n'
import type { Metadata } from 'next'
import styles from '@/app/services-list.module.css'

export const metadata: Metadata = {
  title: `${services.length}项专业许可代办服务 | Vision行政士事务所`,
  description: '国际货运代理、外汇兑换、食品许可、建筑物用途变更等多项专业许可代办服务，Vision行政士事务所为您从头到尾全程代办。',
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
    title: `${services.length}项专业许可代办服务 | Vision行政士事务所`,
    description: '面向外国企业和投资者的韩国许可代办专业服务。首次咨询免费。',
    url: 'https://inhega.co.kr/zh/services',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'Vision行政士事务所服务' }],
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: { card: 'summary_large_image', title: `${services.length}项专业许可代办服务 | Vision行政士事务所`, images: ['/images/hero-seoul.png'] },
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
        <section style={{ background: 'var(--navy)', padding: '5rem 0 4rem' }}>
          <div className="container">
            <span className="badge badge-white text-label fade-up">服务项目</span>
            <h1 className="text-display fade-up delay-1" style={{ color: 'white', marginTop: '1rem' }}>
              {services.length}项专业<br />许可代办服务
            </h1>
            <p className="text-body-lg fade-up delay-2" style={{ color: 'rgba(255,255,255,0.6)', marginTop: '1rem' }}>
              从行业要求分析、材料准备到政府机关提交，我们为您代办全过程。
            </p>
          </div>
        </section>

        {/* Grid */}
        <section className="section bg-cream">
          <div className="container">
            <div className={styles.grid}>
              {services.map((svcKo, i) => {
                const svc = getServiceI18n('zh', svcKo.slug)
                if (!svc) return null
                return (
                  <Link
                    key={svcKo.slug}
                    href={`/zh/services/${svcKo.slug}`}
                    className={`fade-up delay-${Math.min(i % 6 + 1, 6)}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <article className={styles.serviceCard}>
                      <div style={{ position: 'relative', height: '200px' }}>
                        <Image src={svcKo.image} alt={svc.title} fill style={{ objectFit: 'cover' }} />
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: 'rgba(184,70,15,0.45)'
                        }} />
                        <span className="badge badge-white" style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '0.6875rem' }}>
                          {svc.category}
                        </span>
                      </div>
                      <div style={{ padding: '1.5rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.0625rem', fontWeight: 700, color: 'var(--charcoal)', marginBottom: '0.5rem' }}>
                          {svc.title}
                        </h2>
                        <p style={{ fontSize: '0.8125rem', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '1rem' }}>
                          {svc.description.substring(0, 100)}...
                        </p>
                        <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--burgundy)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                          查看详情
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                          </svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: 'var(--burgundy)', padding: '5rem 0' }}>
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
