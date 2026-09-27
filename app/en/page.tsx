import { FillImage, responsiveBase } from '@/components/ui/FillImage'
import Link from 'next/link'
import styles from '../page.module.css'
import { getServiceCatalog } from '@/lib/services-catalog'
import { getT } from '@/lib/i18n/translations'
import type { Metadata } from 'next'
import TeamSection from '@/components/layout/TeamSection'
import QRSection from '@/components/layout/QRSection'

export const metadata: Metadata = {
  title: 'YouSun Administrative Attorney | Korean Business Licensing for Foreign Companies',
  description: 'Korea\'s #1 business licensing specialist for foreign companies and individuals. We handle all Korean government permits — freight forwarding, currency exchange, cosmetics, food, and more.',
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
}

const t = getT('en')

// 번역본이 있는 서비스만 노출한다 (KO 전용 신규 서비스는 제외)
// 서비스 목록 단일 정본 — lib/services-catalog.ts (하드코딩 금지, 2026-09-22)
const translatedServices = getServiceCatalog('en')


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

          <div className={styles.bentoGrid}>
            {translatedServices.map((svc, i) => (
              <Link
                prefetch={false}
                key={svc.slug}
                href={svc.href}
                className={`${styles.bentoCard} fade-up delay-${Math.min(i + 1, 6)}`}
              >
                <div className={styles.bentoImage}>
                  {/* sizes 의 250px 은 레이아웃 폭 주장이 아니라 밀도 상한이다.
                      카드는 412px 뷰포트에서 실측 372px 인데 100vw 로 적으면
                      DPR 1.75 에서 800w(78KB)를 고른다 — Lighthouse
                      uses-responsive-images 가 홈 4장에서 99KB 낭비로 잡았다.
                      250px 이면 DPR<=2 는 500w(37KB), DPR 3 이상만 800w 를 받는다.
                      카드 이미지는 어두운 오버레이 뒤 배경이라 화질 차이가 없다. */}
                  <FillImage
                    base={responsiveBase(svc.image)}
                    small={500}
                    large={800}
                    alt={svc.shortTitle}
                    sizes="(max-width: 900px) 250px, 33vw"
                  />
                  <div className={styles.bentoOverlay} />
                </div>
                <div className={styles.bentoBody}>
                  <span className={`badge badge-white ${styles.bentoBadge}`}>
                    {svc.category}
                  </span>
                  <h3 className={styles.bentoTitle}>{svc.shortTitle}</h3>
                  <span className={styles.bentoLink}>
                    {t.services.more}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
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
            <p className={`text-body-lg fade-up delay-2`} style={{ marginTop: '1.5rem' }}>{t.whyUs.desc}</p>
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
            <div className={`fade-up delay-4`} style={{ marginTop: '2rem' }}>
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
