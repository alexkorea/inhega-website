import { FillImage } from '@/components/ui/FillImage'
import Link from 'next/link'
import styles from '../page.module.css'
import ServiceDirectory from '@/components/services/ServiceDirectory'
import { getT } from '@/lib/i18n/translations'
import type { Metadata } from 'next'
import TeamSection from '@/components/layout/TeamSection'
import QRSection from '@/components/layout/QRSection'

const HOME_TITLE = 'Licensing Specialist Administrative Agent — Korean Permit Procedures & Documents | YouSun Administrative Agency'
const HOME_DESC = 'Korea\'s #1 business licensing specialist for foreign companies and individuals. We handle all Korean government permits — freight forwarding, currency exchange, cosmetics, food, and more.'

export const metadata: Metadata = {
  // INH-LAYOUT(10-05, 보스 msg 2273): ko 홈 '인허가 전문 행정사 — 인허가 절차·서류' 와 같은 뜻. og·twitter 도 같은 문구.
  title: HOME_TITLE,
  description: HOME_DESC,
  alternates: {
    canonical: 'https://inhega.co.kr/en',
    languages: {
      'ko': 'https://inhega.co.kr',
      'en': 'https://inhega.co.kr/en',
      'zh': 'https://inhega.co.kr/zh',
      'ja': 'https://inhega.co.kr/ja',
      'x-default': 'https://inhega.co.kr',
    },
  },
  openGraph: {
    title: HOME_TITLE,
    description: HOME_DESC,
    url: 'https://inhega.co.kr/en',
    siteName: 'YouSun Administrative Agency',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/images/hero-seoul.png', width: 1200, height: 630, alt: 'YouSun Administrative Agency' }],
  },
  twitter: { card: 'summary_large_image', title: HOME_TITLE, description: HOME_DESC, images: ['/images/hero-seoul.png'] },
}

const t = getT('en')



export default function EnHomePage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <FillImage
            base="/images/hero-seoul-20260923"
            small={768}
            large={1024}
            alt="Seoul cityscape"
            sizes="100vw"
            priority
            objectPosition="center"
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroLeft}>
            <span className={`badge badge-white fade-up`}>{t.hero.badge}</span>
            <h1 className={`${styles.heroTitle} fade-up delay-1`} style={{ whiteSpace: 'pre-line' }}>
              {t.hero.title}
            </h1>
            <p className={`${styles.heroDesc} fade-up delay-2`}>{t.hero.desc}</p>
            <div className={`${styles.heroBtns} fade-up delay-3`}>
              <Link prefetch={false} href="/en/contact" className="btn btn-primary btn-lg">
                {t.hero.ctaPrimary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link prefetch={false} href="/en/services/logistics" className="btn btn-outline-white btn-lg">
                {t.hero.ctaSecondary}
              </Link>
            </div>
          </div>

          <div className={`${styles.heroStats} fade-in delay-4`}>
            {t.stats.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className={styles.trustStrip}>
        <div className="container">
          <div className={styles.trustItems}>
            {t.trust.map((text) => (
              <div key={text} className={styles.trustItem}>
                <span className={styles.trustIcon}>✓</span>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QR SECTION */}
      <QRSection locale="en" />

      {/* TEAM SECTION */}
      <TeamSection locale="en" />

      {/* SERVICES BENTO */}
      <section className={`section bg-cream`}>
        <div className="container">
          <div className={`section-header fade-up`}>
            <span className="badge badge-navy text-label">{t.services.badge}</span>
            <h2 className={`text-h2 ${styles.sectionTitle}`} style={{ whiteSpace: 'pre-line' }}>
              {t.services.title}
            </h2>
            <span className="accent-line" style={{ marginTop: '1rem' }} />
          </div>

          {/* 0949 — 기존 서비스 + 번역본이 있는 신규 업종, 분야 소제목 + 사진 카드 전부 펼침(INH-RESTORE). 정본 lib/service-directory.ts */}
          <ServiceDirectory locale="en" mode="cards" />
        </div>
      </section>

      {/* PROCESS */}
      <section className={`section bg-navy`}>
        <div className="container">
          <div className={`section-header section-header-centered fade-up`}>
            <span className="badge badge-white text-label">{t.process.badge}</span>
            <h2 className={`text-h2 ${styles.sectionTitleWhite}`} style={{ whiteSpace: 'pre-line' }}>
              {t.process.title}
            </h2>
            <span className="accent-line accent-line-wide" style={{ marginInline: 'auto', marginTop: '1rem' }} />
          </div>
          <div className={styles.processGrid}>
            {t.process.steps.map((p, i) => (
              <div key={p.num} className={`${styles.processCard} fade-up delay-${i + 1}`}>
                <div className={styles.processNum}>{p.num}</div>
                <h3 className={styles.processTitle}>{p.title}</h3>
                <p className={styles.processDesc}>{p.desc}</p>
                {i < t.process.steps.length - 1 && <div className={styles.processArrow} />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className={`section bg-white`}>
        <div className="container">
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <span className="badge badge-burgundy text-label fade-up">{t.whyUs.badge}</span>
            <h2 className={`text-h2 fade-up delay-1`} style={{ marginTop: '1rem', whiteSpace: 'pre-line' }}>
              {t.whyUs.title}
            </h2>
            <span className="accent-line fade-up delay-2" style={{ marginTop: '1rem' }} />
            <p className={`text-body-lg fade-up delay-2`} style={{ marginTop: '1rem' }}>{t.whyUs.desc}</p>
            <ul className={`${styles.whyList} fade-up delay-3`}>
              {t.whyUs.points.map((item) => (
                <li key={item} className={styles.whyItem}>
                  <span className={styles.whyCheck}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className={`fade-up delay-4`} style={{ marginTop: '1.25rem' }}>
              <Link prefetch={false} href="/en/contact" className="btn btn-primary">{t.whyUs.cta}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={`${styles.ctaInner} fade-up`}>
            <div className={styles.ctaText}>
              <h2 className={styles.ctaTitle}>{t.cta.title}</h2>
              <p className={styles.ctaDesc}>{t.cta.desc}</p>
            </div>
            <div className={styles.ctaBtns}>
              <Link prefetch={false} href="/en/contact" className="btn btn-primary btn-lg">{t.cta.primary}</Link>
              <Link prefetch={false} href="/en/contact" className="btn btn-outline-white btn-lg">{t.cta.secondary}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
