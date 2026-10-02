// I2 신규 업종 서비스 페이지 — 기존 /services/[slug] 템플릿(히어로·본문·사이드바 CTA)과
// 같은 골격에 원고(content/industry-pages)를 그대로 싣는다. 4언어 라우트가 공용으로 쓴다.
// 화면 문구는 기존 서비스 페이지 템플릿의 라벨을 그대로 옮긴 것이고, 본문은 원고뿐이다.
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import styles from '@/app/services-slug.module.css'
import {
  getIndustryHeroImage,
  getIndustryLocales,
  type IndustryLocale,
  type IndustryPage,
} from '@/lib/industry-pages'

const BASE = 'https://inhega.co.kr'

const prefix = (l: IndustryLocale) => (l === 'ko' ? '' : `/${l}`)
const pageUrl = (l: IndustryLocale, slug: string) => `${BASE}${prefix(l)}/services/${slug}`

const UI: Record<IndustryLocale, {
  brand: string
  home: string
  services: string
  back: string
  backHref: string
  badge: string
  heroPrimary: { label: string; href: string }
  heroSecondary: { label: string; href: string }
  country: string
  langs: string
}> = {
  ko: {
    brand: '유선행정사사무소', home: '홈', services: '서비스', back: '모든 서비스', backHref: '/services',
    badge: '업종별 인허가',
    heroPrimary: { label: '견적 문의하기', href: '/quote' },
    heroSecondary: { label: '무료 상담', href: '/contact' },
    country: '대한민국', langs: '다른 언어',
  },
  en: {
    brand: 'YouSun Administrative Attorney', home: 'Home', services: 'Services', back: 'All Services', backHref: '/en/services',
    badge: 'Industry Licensing',
    heroPrimary: { label: 'Free Consultation', href: '/en/contact' },
    heroSecondary: { label: 'Get a Quote', href: '/en/contact' },
    country: 'Republic of Korea', langs: 'Other Languages',
  },
  zh: {
    brand: 'YouSun Administrative Attorney', home: '首页', services: '服务', back: '所有服务', backHref: '/zh/services',
    badge: '行业许可',
    heroPrimary: { label: '免费咨询', href: '/zh/contact' },
    heroSecondary: { label: '获取报价', href: '/zh/contact' },
    country: '大韩民国', langs: '其他语言',
  },
  ja: {
    brand: 'YouSun Administrative Attorney', home: 'ホーム', services: 'サービス', back: 'すべてのサービス', backHref: '/ja/services',
    badge: '業種別許認可',
    heroPrimary: { label: '無料相談', href: '/ja/contact' },
    heroSecondary: { label: '見積もり依頼', href: '/ja/contact' },
    country: '大韓民国', langs: '他の言語',
  },
}

const LANG_LINKS: { l: IndustryLocale; label: string }[] = [
  { l: 'ko', label: '🇰🇷 한국어' },
  { l: 'en', label: '🇺🇸 English' },
  { l: 'zh', label: '🇨🇳 中文' },
  { l: 'ja', label: '🇯🇵 日本語' },
]

export function industryMetadata(page: IndustryPage): Metadata {
  const { slug, lang } = page
  const locales = getIndustryLocales(slug)
  const languages: Record<string, string> = {}
  for (const l of locales) languages[l] = pageUrl(l, slug)
  languages['x-default'] = pageUrl('ko', slug)
  return {
    title: page.title,
    description: page.lead,
    alternates: { canonical: pageUrl(lang, slug), languages },
    openGraph: {
      title: page.title,
      description: page.lead,
      url: pageUrl(lang, slug),
      images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630 }],
    },
  }
}

/** 원고 상담 문장 끝의 경로(/contact 등)만 링크로 바꾼다 — 문자열은 그대로. */
function CtaText({ text }: { text: string }) {
  const m = text.match(/^(.*?)(\/(?:[a-z]{2}\/)?contact)$/)
  if (!m) return <>{text}</>
  return <>{m[1]}<Link href={m[2]}>{m[2]}</Link></>
}

export default function IndustryServicePage({ page }: { page: IndustryPage }) {
  const { slug, lang } = page
  const ui = UI[lang]
  const url = pageUrl(lang, slug)
  const otherLangs = LANG_LINKS.filter((x) => x.l !== lang && getIndustryLocales(slug).includes(x.l))

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.h1,
    description: page.lead,
    provider: {
      '@type': 'ProfessionalService',
      name: ui.brand,
      telephone: '02-363-2251',
      url: `${BASE}${prefix(lang)}`,
    },
    areaServed: { '@type': 'Country', name: ui.country },
    url,
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: page.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: ui.home, item: `${BASE}${prefix(lang)}` },
      { '@type': 'ListItem', position: 2, name: ui.services, item: `${BASE}${prefix(lang)}/services` },
      { '@type': 'ListItem', position: 3, name: page.h1, item: url },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {/* zh/ja 는 keep-all 이면 공백 없는 문장이 줄바꿈되지 않아 390px 에서 히어로가 넘친다 */}
      <div style={{ paddingTop: '72px', ...(lang === 'zh' || lang === 'ja' ? { wordBreak: 'normal' as const } : {}) }}>
        {/* Hero */}
        <section className={styles.hero}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image src={getIndustryHeroImage(slug)} alt={page.h1} fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,31,58,0.72)' }} />
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '1rem' }}>
              <Link href={ui.backHref} style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.5)', display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginBottom: '1rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                {ui.back}
              </Link>
            </div>
            <span className="badge badge-white" style={{ marginBottom: '1rem' }}>{ui.badge}</span>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem,4vw,3.5rem)', fontWeight: 700, color: 'white', lineHeight: 1.15, marginBottom: '1rem' }}>
              {page.h1}
            </h1>
            <p style={{ fontSize: '1.0625rem', color: 'rgba(255,255,255,0.7)', maxWidth: '60ch', lineHeight: 1.8 }}>
              {page.lead}
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href={ui.heroPrimary.href} className="btn btn-primary btn-lg">{ui.heroPrimary.label}</Link>
              <Link href={ui.heroSecondary.href} className="btn btn-outline-white">{ui.heroSecondary.label}</Link>
            </div>
          </div>
        </section>

        <div style={{ background: 'var(--cream)', padding: '5rem 0' }}>
          <div className="container">
            <div className={styles.contentGrid}>
              {/* Main Content — minWidth:0: 1fr 트랙 블로아웃 방지 */}
              <div style={{ minWidth: 0 }}>
                <section className="svc-overview-content" style={{ marginBottom: '4rem' }}>
                  <div className="svc-highlight">
                    <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{page.summaryLabel}</p>
                    <ul style={{ margin: '0 0 0 1.25rem' }}>
                      {page.summary.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                  </div>
                  {page.sections.map((s) => (
                    <div key={s.h2}>
                      <h2>{s.h2}</h2>
                      {s.body.split(/\n\n+/).map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  ))}
                </section>

                {/* FAQ */}
                <section id="svc-faq" style={{ marginBottom: '4rem' }}>
                  <div style={{ marginBottom: '2rem' }}>
                    <span className="badge badge-navy text-label">FAQ</span>
                    <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>{page.faqHeading}</h2>
                    <span className="accent-line" style={{ marginTop: '0.75rem' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {page.faq.map((faq) => (
                      <div key={faq.q} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                        <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.625rem' }}>Q. {faq.q}</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--slate)', lineHeight: 1.7 }}>A. {faq.a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* 공식 기준 인용 · 관련 페이지 · 상담 안내 */}
                <section className="svc-overview-content">
                  <h2>{page.citationsHeading}</h2>
                  {page.citations.map((c) => (
                    <blockquote key={c.text} style={{ borderLeft: '4px solid var(--navy)', background: 'var(--white)', borderRadius: '4px', padding: '1rem 1.25rem', margin: '0 0 1rem' }}>
                      <p style={{ marginBottom: '0.375rem' }}>{c.text}</p>
                      <p style={{ marginBottom: 0, fontSize: '0.8125rem', color: 'var(--slate)' }}>— {c.source}</p>
                    </blockquote>
                  ))}
                  <h2>{page.relatedHeading}</h2>
                  <ul>
                    {page.related.map((r) => (
                      <li key={r.url}><Link href={r.url} style={{ color: 'var(--burgundy)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>{r.text}</Link></li>
                    ))}
                  </ul>
                  <h2>{page.ctaHeading}</h2>
                  <p><CtaText text={page.cta} /></p>
                </section>
              </div>

              {/* Sidebar — 기존 서비스 페이지 CTA 카드 그대로 */}
              <aside style={{ position: 'sticky', top: '6rem' }}>
                <SidebarCta lang={lang} />
                {otherLangs.length > 0 && (
                  <div style={{ marginTop: '1.5rem', background: 'var(--cream)', borderRadius: '12px', padding: '1.5rem', border: '1px solid var(--border)' }}>
                    <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--charcoal)', marginBottom: '0.75rem' }}>{ui.langs}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {otherLangs.map((x) => (
                        <Link key={x.l} href={`${prefix(x.l)}/services/${slug}`} style={{ fontSize: '0.875rem', color: 'var(--slate)' }}>{x.label}</Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function SidebarCta({ lang }: { lang: IndustryLocale }) {
  if (lang === 'ko') {
    return (
      <div className="fade-in delay-3" style={{ background: 'var(--white)', borderRadius: '16px', padding: '2rem', border: '1px solid var(--border)', textAlign: 'center' }}>
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
    )
  }
  const t = {
    en: { h: 'Free Consultation', p: 'Speak with a licensed Korean administrative scrivener. We will assess your situation and provide a clear action plan.', btn: 'Contact Us Now', line: 'Direct Line', hours: 'Mon–Fri 09:30–17:30 KST', msg: 'WeChat / WhatsApp / Kakao / LINE: ' },
    zh: { h: '免费咨询', p: '与持牌韩国行政士直接沟通，我们将评估您的情况并提供清晰的行动方案。', btn: '立即联系我们', line: '直线电话', hours: '周一至周五 09:30–17:30 (韩国时间)', msg: '微信 / WhatsApp / Kakao / LINE: ' },
    ja: { h: '無料相談', p: '有資格の韓国行政書士が直接対応します。状況を伺い、明確な対応方針をご提案します。', btn: '今すぐお問い合わせ', line: '直通電話', hours: '月〜金 09:30–17:30 (韓国時間)', msg: 'LINE / WeChat / WhatsApp / Kakao: ' },
  }[lang]
  return (
    <div className="fade-in delay-3" style={{ background: 'var(--white)', borderRadius: '16px', padding: '2rem', border: '2px solid var(--burgundy)' }}>
      <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.125rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>{t.h}</h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.6, marginBottom: '1.25rem' }}>{t.p}</p>
      <Link href={`/${lang}/contact`} className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>{t.btn}</Link>
      <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)' }}>
        <p style={{ fontSize: '0.8125rem', color: 'var(--slate)', marginBottom: '0.5rem' }}>{t.line}</p>
        <a href="tel:02-363-2251" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--navy)' }}>02-363-2251</a>
        <p style={{ fontSize: '0.75rem', color: 'var(--slate)', marginTop: '0.25rem' }}>{t.hours}</p>
        <p style={{ fontSize: '0.75rem', color: 'var(--slate)', marginTop: '0.5rem' }}>{t.msg}<strong>alexkorea</strong></p>
      </div>
    </div>
  )
}

/** 기존 서비스 페이지 하단: 원고 '관련 페이지'가 이 페이지를 가리키는 업종 페이지 역링크. */
export function IndustryBacklinks({ pages, heading }: { pages: IndustryPage[]; heading: string }) {
  if (pages.length === 0) return null
  const pre = pages[0].lang === 'ko' ? '' : `/${pages[0].lang}`
  return (
    <section style={{ marginTop: '4rem' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <h2 className="text-h2" style={{ color: 'var(--charcoal)' }}>{heading}</h2>
        <span className="accent-line" style={{ marginTop: '0.75rem' }} />
      </div>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {pages.map((p) => (
          <li key={p.slug}>
            <Link href={`${pre}/services/${p.slug}`} style={{ display: 'block', background: 'var(--white)', borderRadius: '12px', padding: '1rem 1.25rem', border: '1px solid var(--border)', fontWeight: 700, color: 'var(--navy)' }}>
              {p.h1}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export const BACKLINK_HEADING: Record<IndustryLocale, string> = {
  ko: '관련 업종 인허가',
  en: 'Related Industry Licensing',
  zh: '相关行业许可',
  ja: '関連する業種別許認可',
}

const LIST_HEADING: Record<IndustryLocale, string> = {
  ko: '업종별 인허가 안내',
  en: 'Licensing by Industry',
  zh: '按行业许可指南',
  ja: '業種別許認可ガイド',
}

/** /services 목록 하단 — 신규 업종 페이지 링크 목록(기존 24종 카드·카운트와 분리). */
export function IndustryList({ pages }: { pages: IndustryPage[] }) {
  if (pages.length === 0) return null
  const lang = pages[0].lang
  return (
    <section className="section" style={{ background: 'var(--white)' }}>
      <div className="container">
        <div style={{ marginBottom: '2rem' }}>
          <span className="badge badge-navy text-label">{UI[lang].badge}</span>
          <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>{LIST_HEADING[lang]}</h2>
          <span className="accent-line" style={{ marginTop: '0.75rem' }} />
        </div>
        <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '0.75rem' }}>
          {pages.map((p) => (
            <li key={p.slug}>
              <Link href={`${prefix(lang)}/services/${p.slug}`} style={{ display: 'block', height: '100%', background: 'var(--cream)', borderRadius: '12px', padding: '1rem 1.25rem', border: '1px solid var(--border)', fontWeight: 700, color: 'var(--navy)' }}>
                {p.h1}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
