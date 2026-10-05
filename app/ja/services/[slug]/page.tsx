import IndustryHeroImage from '@/components/ui/IndustryHeroImage'
import { INDUSTRY_PHOTOS, industryPhotoMeta } from '@/lib/service-card-images'
import Link from 'next/link'
import { Flag } from '@/components/ui/LangFlags'
import { notFound } from 'next/navigation'
import { services, isDeployHold } from '@/lib/services-data'
import { getServiceI18n, hasServiceI18n } from '@/lib/i18n/services-i18n'
import type { Metadata } from 'next'
import { getIndustryPage, getIndustrySlugs, getIndustryBacklinks } from '@/lib/industry-pages'
import IndustryServicePage, { industryMetadata, IndustryBacklinks, BACKLINK_HEADING } from '@/components/industry/IndustryServicePage'
import styles from '@/app/services-slug.module.css'

export async function generateStaticParams() {
  // 번역본이 없는 KO 전용 서비스는 이 로케일에 페이지가 없다 — 프리렌더 대상에서 제외한다.
  return [
    ...services.filter((s) => hasServiceI18n(s.slug)).map((s) => ({ slug: s.slug })),
    // I2 신규 업종 페이지 — 원고가 있는 언어만(lib/industry-pages.ts)
    ...getIndustrySlugs('ja').map((slug) => ({ slug })),
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryPage('ja', slug)
  if (industry) return industryMetadata(industry)
  const svc = getServiceI18n('ja', slug)
  if (!svc) return {}
  const photo = INDUSTRY_PHOTOS[slug] ? industryPhotoMeta(slug, 'ja', svc.title) : null
  const pageTitle = `${svc.title} | YouSun Administrative Agency`
  return {
    title: pageTitle,
    description: svc.description,
    // 보스 확정 대기 페이지 — 색인 차단 (2026-09-17).
    ...(isDeployHold(slug) ? { robots: { index: false, follow: false } } : {}),
    alternates: {
      canonical: `https://inhega.co.kr/ja/services/${slug}`,
      languages: {
        'ko': `https://inhega.co.kr/services/${slug}`,
        'en': `https://inhega.co.kr/en/services/${slug}`,
        'zh': `https://inhega.co.kr/zh/services/${slug}`,
        'ja': `https://inhega.co.kr/ja/services/${slug}`,
        'x-default': `https://inhega.co.kr/services/${slug}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description: svc.description,
      url: `https://inhega.co.kr/ja/services/${slug}`,
      images: [photo ? photo.og : { url: '/images/hero-seoul.png', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: svc.description,
      images: [photo ? photo.og.url : '/images/hero-seoul.png'],
    },
  }
}

export default async function JaServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = getIndustryPage('ja', slug)
  if (industry) return <IndustryServicePage page={industry} />
  const svcKo = services.find((s) => s.slug === slug)
  if (!svcKo) notFound()
  const svc = getServiceI18n('ja', slug)
  if (!svc) notFound()
  const photo = INDUSTRY_PHOTOS[slug] ? industryPhotoMeta(slug, 'ja', svc.title) : null

  const faqJsonLd = svc.faqs ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: svc.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.description,
    provider: {
      '@type': 'ProfessionalService',
      name: 'YouSun Administrative Agency',
      telephone: '02-363-2251',
      url: 'https://inhega.co.kr/ja',
    },
    areaServed: { '@type': 'Country', name: '大韓民国' },
    url: `https://inhega.co.kr/ja/services/${slug}`,
    ...(photo ? { image: photo.jsonLd } : {}),
  }

  return (
    <>
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <div style={{ paddingTop: '72px' }}>
        <section className={styles.hero}>
          {/* 업종 사진 원본 800·1200·2000w + 하단 그라데이션(INH-PHOTO60) — components/ui/IndustryHeroImage */}
          <IndustryHeroImage slug={slug} fallbackImage={svcKo.image} alt={photo?.alt ?? svc.title} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '1rem' }}>
              <Link href="/ja" style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.85)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', minHeight: '24px' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                すべてのサービス
              </Link>
            </div>
            <span className="badge badge-white" style={{ marginBottom: '0.75rem' }}>{svc.category}</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '1rem' }}>
              {svc.title}
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.88)', maxWidth: '60ch', lineHeight: 1.8 }}>
              {svc.description}
            </p>
            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/ja/contact" className="btn btn-primary btn-lg">無料相談</Link>
              <Link href="/ja/contact" className="btn btn-outline-white">見積もり依頼</Link>
            </div>
          </div>
        </section>

        <div style={{ background: 'var(--cream)', padding: 'var(--section-py-md) 0' }}>
          <div className="container">
            <div className={styles.contentGrid}>
              <div>
                {svc.processSteps && (
                  <section className="fade-up" style={{ marginBottom: 'var(--block-gap)' }}>
                    <div style={{ marginBottom: '2rem' }}>
                      <span className="badge badge-burgundy text-label">手続きの流れ</span>
                      <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>代行の流れ</h2>
                      <span className="accent-line" style={{ marginTop: '0.75rem' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {svc.processSteps.map((p, i) => (
                        <div key={p.step} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', background: 'var(--white)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                          <div style={{ width: '40px', height: '40px', background: 'var(--navy)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'white', flexShrink: 0 }}>
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <div>
                            <p style={{ fontWeight: 700, color: 'var(--charcoal)', marginBottom: '0.25rem' }}>{p.step}</p>
                            <p style={{ fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.6 }}>{p.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {svc.faqs && (
                  <section className="fade-up delay-2">
                    <div style={{ marginBottom: '2rem' }}>
                      <span className="badge badge-navy text-label">よくある質問</span>
                      <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>よくある質問（FAQ）</h2>
                      <span className="accent-line" style={{ marginTop: '0.75rem' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {svc.faqs.map((faq) => (
                        <div key={faq.q} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                          <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.625rem' }}>Q. {faq.q}</p>
                          <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.7 }}>A. {faq.a}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                <IndustryBacklinks pages={getIndustryBacklinks('ja', `/ja/services/${slug}`)} heading={BACKLINK_HEADING.ja} />
              </div>

              <aside style={{ position: 'sticky', top: '6rem' }}>
                {svc.documents && (
                  <div className="fade-in delay-2" style={{ background: 'var(--navy)', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem', color: 'white' }}>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', marginBottom: '1.25rem' }}>必要書類</h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                      {svc.documents.map((doc) => (
                        <li key={doc} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--burgundy)', flexShrink: 0 }} />
                          {doc}
                        </li>
                      ))}
                    </ul>
                    <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '1rem', lineHeight: 1.6 }}>
                      ※ 事業者の種類により、追加書類が必要な場合があります。
                    </p>
                  </div>
                )}

                <div className="fade-in delay-3" style={{ background: 'var(--white)', borderRadius: '16px', padding: '2rem', border: '2px solid var(--burgundy)' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>無料相談</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    有資格の韓国行政書士が直接対応します。状況を伺い、明確な対応方針をご提案します。
                  </p>
                  <Link href="/ja/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    今すぐお問い合わせ
                  </Link>
                  <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
                    <p style={{ fontSize: '0.8125rem', color: 'var(--slate)', marginBottom: '0.5rem' }}>直通電話</p>
                    <a href="tel:02-363-2251" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)' }}>02-363-2251</a>
                    <p style={{ fontSize: '0.75rem', color: 'var(--slate)', marginTop: '0.25rem' }}>月〜金 09:30–17:30 (韓国時間)</p>
                    <p style={{ fontSize: '0.75rem', color: 'var(--slate)', marginTop: '0.5rem' }}>LINE / WeChat / WhatsApp / Kakao: <strong>alexkorea</strong></p>
                  </div>
                </div>

                <div style={{ marginTop: '1.5rem', background: 'var(--cream)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>他の言語</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <Link href={`/services/${slug}`} style={{ fontSize: '0.875rem', color: 'var(--slate)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', minHeight: '28px' }}><Flag lang="ko" />한국어</Link>
                    <Link href={`/en/services/${slug}`} style={{ fontSize: '0.875rem', color: 'var(--slate)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', minHeight: '28px' }}><Flag lang="en" />English</Link>
                    <Link href={`/zh/services/${slug}`} style={{ fontSize: '0.875rem', color: 'var(--slate)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', minHeight: '28px' }}><Flag lang="zh" />中文</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
