import IndustryHeroImage, { HERO_TEXT_CLASS } from '@/components/ui/IndustryHeroImage'
import { INDUSTRY_PHOTOS, industryPhotoMeta } from '@/lib/service-card-images'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { services, getServiceBySlug, isDeployHold, stripHeldLinks } from '@/lib/services-data'
import { hasServiceI18n } from '@/lib/i18n/services-i18n'
import type { Metadata } from 'next'
import { getIndustryPage, getIndustrySlugs, getIndustryBacklinks } from '@/lib/industry-pages'
import IndustryServicePage, { industryMetadata, IndustryBacklinks, BACKLINK_HEADING } from '@/components/industry/IndustryServicePage'
import { HUB_GUIDES } from '@/lib/hub-guides.generated'
import styles from './page.module.css'

const plainText = (h: string) =>
  h.replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&')

export async function generateStaticParams() {
  return [
    ...services.map((s) => ({ slug: s.slug })),
    // I2 신규 업종 페이지 — lib/industry-pages.ts
    ...getIndustrySlugs('ko').map((slug) => ({ slug })),
  ]
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industry = getIndustryPage('ko', slug)
  if (industry) return industryMetadata(industry)
  const svc = getServiceBySlug(slug)
  if (!svc) return {}
  const photo = INDUSTRY_PHOTOS[slug] ? industryPhotoMeta(slug, 'ko', svc.title) : null
  const pageTitle = svc.seoTitle ?? `${svc.title} | 유선행정사사무소`
  return {
    title: pageTitle,
    description: svc.description,
    // 보스 확정 대기 페이지 — 라우트는 살려 두되 색인은 막는다 (2026-09-17).
    ...(isDeployHold(slug) ? { robots: { index: false, follow: false } } : {}),
    // 번역본이 없는 서비스는 en/zh/ja 페이지가 존재하지 않는다.
    // 그런데도 hreflang 을 걸면 404 를 가리키는 상호참조가 만들어진다 — ko + x-default 만 낸다.
    alternates: {
      canonical: `https://inhega.co.kr/services/${slug}`,
      languages: hasServiceI18n(slug)
        ? {
            'ko': `https://inhega.co.kr/services/${slug}`,
            'en': `https://inhega.co.kr/en/services/${slug}`,
            'zh': `https://inhega.co.kr/zh/services/${slug}`,
            'ja': `https://inhega.co.kr/ja/services/${slug}`,
            'x-default': `https://inhega.co.kr/services/${slug}`,
          }
        : {
            'ko': `https://inhega.co.kr/services/${slug}`,
            'x-default': `https://inhega.co.kr/services/${slug}`,
          },
    },
    openGraph: {
      title: pageTitle,
      description: svc.description,
      url: `https://inhega.co.kr/services/${slug}`,
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

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industry = getIndustryPage('ko', slug)
  if (industry) return <IndustryServicePage page={industry} />
  const svc = getServiceBySlug(slug)
  if (!svc) notFound()
  const photo = INDUSTRY_PHOTOS[slug] ? industryPhotoMeta(slug, 'ko', svc.title) : null

  const faqJsonLd = svc.faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    // 답변 원문에 <strong> 등 강조 태그가 있다 — JSON-LD 에는 화면에 보이는 글자만 싣는다.
    mainEntity: svc.faqs.map((f) => ({
      '@type': 'Question',
      name: plainText(f.q),
      acceptedAnswer: { '@type': 'Answer', text: plainText(f.a) },
    })),
  } : null

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: svc.title,
    description: svc.description,
    provider: {
      '@type': 'ProfessionalService',
      name: '유선행정사사무소',
      telephone: '02-363-2251',
      url: 'https://inhega.co.kr',
    },
    areaServed: { '@type': 'Country', name: '대한민국' },
    url: `https://inhega.co.kr/services/${slug}`,
    ...(photo ? { image: photo.jsonLd } : {}),
  }

  return (
    <>
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section className={styles.hero}>
        {/* 업종 사진 원본 800·1200·2000·2880w + 글 뒤만 어둡게(INH-CARD-CLEAR) — components/ui/IndustryHeroImage */}
        <IndustryHeroImage slug={slug} fallbackImage={svc.image} alt={photo?.alt ?? svc.title} />
        <div className={`container ${HERO_TEXT_CLASS}`} style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ marginBottom: '1rem' }}>
            <Link href="/services" style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.85)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', minHeight: '24px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              모든 서비스
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
            <Link href="/quote" className="btn btn-primary btn-lg">견적 문의하기</Link>
            <Link href="/contact" className="btn btn-outline-white">무료 상담</Link>
          </div>
        </div>
      </section>

      <div style={{ background: 'var(--cream)', padding: 'var(--section-py-md) 0' }}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Main Content */}
            <div>
              {/* Overview (if present) */}
              {svc.overview && (
                <section className="fade-up" style={{ marginBottom: 'var(--block-gap)' }}>
                  <div
                    className="svc-overview-content"
                    dangerouslySetInnerHTML={{ __html: stripHeldLinks(svc.overview) }}
                  />
                </section>
              )}

              {/* Process — 원문에 절차 텍스트가 없는 서비스는 process 를 비워두고 섹션 자체를 생략한다 */}
              {svc.process.length > 0 && (
              <section className="fade-up" id="svc-process" style={{ marginBottom: 'var(--block-gap)' }}>
                <div style={{ marginBottom: '2rem' }}>
                  <span className="badge badge-burgundy text-label">진행 절차</span>
                  <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>처리 프로세스</h2>
                  <span className="accent-line" style={{ marginTop: '0.75rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {svc.process.map((p, i) => (
                    <div key={p.step} style={{
                      display: 'flex', gap: '1.25rem', alignItems: 'flex-start',
                      background: 'var(--white)', borderRadius: '12px', padding: '1.5rem',
                      border: '1px solid var(--border)'
                    }}>
                      <div style={{
                        width: '40px', height: '40px', background: 'var(--navy)', borderRadius: '50%',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'var(--font-display)', fontSize: '0.875rem', fontWeight: 700, color: 'white',
                        flexShrink: 0
                      }}>
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

              {/* FAQ — 원문에 FAQ 가 없는 서비스는 섹션 생략 */}
              {svc.faqs.length > 0 && (
              <section className="fade-up delay-2" id="svc-faq">
                <div style={{ marginBottom: '2rem' }}>
                  <span className="badge badge-navy text-label">자주 묻는 질문</span>
                  <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>FAQ</h2>
                  <span className="accent-line" style={{ marginTop: '0.75rem' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {svc.faqs.map((faq) => (
                    <div key={faq.q} style={{
                      background: 'var(--white)', borderRadius: '12px', padding: '1.5rem',
                      border: '1px solid var(--border)'
                    }}>
                      {/* 답변의 강조 태그를 글자 그대로("<strong>") 보여주던 결함 — HTML 로 렌더한다 */}
                      <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.625rem' }} dangerouslySetInnerHTML={{ __html: `Q. ${faq.q}` }} />
                      <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: `A. ${faq.a}` }} />
                    </div>
                  ))}
                </div>
              </section>
              )}
              <IndustryBacklinks pages={getIndustryBacklinks('ko', `/services/${slug}`)} heading={BACKLINK_HEADING.ko} />
              {/* I4 3종 세트 — 허브 → 선택기준·문제해결 글 (lib/hub-guides.generated.ts) */}
              {(HUB_GUIDES[`/services/${slug}`] ?? []).length > 0 && (
                <section className="fade-up" id="svc-guides" style={{ marginTop: 'var(--block-gap)' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <span className="badge badge-navy text-label">실무 가이드</span>
                    <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>대행 선택 기준과 문제 해결 가이드</h2>
                    <span className="accent-line" style={{ marginTop: '0.75rem' }} />
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {HUB_GUIDES[`/services/${slug}`].map((g) => (
                      <li key={g.href} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1rem 1.25rem', border: '1px solid var(--border)' }}>
                        <Link href={g.href} style={{ color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>{g.title}</Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: '6rem' }}>
              {/* Required Docs — 원문에 서류 목록이 없는 서비스는 카드 생략 */}
              {svc.documents.length > 0 && (
              <div className="fade-in delay-2" style={{
                background: 'var(--navy)', borderRadius: '16px', padding: '2rem', marginBottom: '1.5rem', color: 'white'
              }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', marginBottom: '1.25rem' }}>필요 서류</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {svc.documents.map((doc) => (
                    <li key={doc} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--burgundy)', flexShrink: 0 }} />
                      {doc}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)', marginTop: '1rem', lineHeight: 1.6 }}>
                  * 사업자 유형에 따라 추가 서류가 필요할 수 있습니다.
                </p>
              </div>
              )}

              {/* CTA Card */}
              <div className="fade-in delay-3" style={{
                background: 'var(--white)', borderRadius: '16px', padding: '2rem',
                border: '1px solid var(--border)', textAlign: 'center'
              }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--charcoal)', marginBottom: '0.75rem' }}>
                  지금 바로 시작하세요
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--slate)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  전문 행정사가 처음부터 끝까지 책임집니다.
                </p>
                <Link href="/quote" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  견적 문의하기
                </Link>
                <p style={{ marginTop: '0.75rem', fontSize: '0.8125rem', color: 'var(--slate)', textAlign: 'center' }}>
                  메신저: alexkorea
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
