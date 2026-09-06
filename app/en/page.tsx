import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'
import { services } from '@/lib/services-data'
import { getT } from '@/lib/i18n/translations'
import type { Metadata } from 'next'
import TeamSection from '@/components/layout/TeamSection'
import QRSection from '@/components/layout/QRSection'

export const metadata: Metadata = {
  title: 'Vision Administrative Office | Korean Business Licensing for Foreign Companies',
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

const serviceLabels: Record<string, string> = {
  'logistics': 'Intl. Freight Forwarding',
  'currency-exchange': 'Currency Exchange',
  'urban-guesthouse': 'Foreign Tourist Guesthouse',
  'hostel': 'Hostel Business',
  'hanok': 'Hanok Experience',
  'building-usage': 'Building Use Change',
  'food-manufacturing': 'Food Manufacturing',
  'women-enterprise': 'Women-Owned Business Cert.',
  'nonprofit': 'Non-Profit Corporation',
  'tobacco': 'Tobacco Import & Sales',
  'venture-cert': 'Venture / Innobiz Cert.',
  'haccp': 'HACCP Certification',
  'cosmetics': 'Cosmetics / Quasi-Drug',
  'procurement': 'Government Procurement',
  'research-lab': 'Corporate Research Lab',
  'ecig': 'E-Cigarette Import',
  'sports-club': 'Sports Club Registration',
  'location-based-service': 'Location-Based Service',
}

const categoryLabels: Record<string, string> = {
  '물류/유통': 'Logistics',
  '금융': 'Finance',
  '숙박/관광': 'Hospitality',
  '건설/건축': 'Construction',
  '건축/부동산': 'Construction',
  '식품': 'Food & Beverage',
  '식품/의약': 'Food & Pharma',
  '기업인증': 'Certification',
  '법인/단체': 'Corporation',
  '법인설립': 'Corporation',
  '유통': 'Retail',
  '유통/판매': 'Retail',
  '연구개발': 'R&D',
  '정보통신': 'IT/Telecom',
  'IT·통신': 'IT/Telecom',
  '스포츠/레저': 'Sports',
  '체육시설업': 'Sports',
  '공공조달': 'Procurement',
}

export default function EnHomePage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero-seoul.png"
            alt="Seoul cityscape"
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: 'center' }}
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
              <Link href="/en/contact" className="btn btn-primary btn-lg">
                {t.hero.ctaPrimary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/en/services/logistics" className="btn btn-outline-white btn-lg">
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
            {services.map((svc, i) => (
              <Link
                key={svc.slug}
                href={`/en/services/${svc.slug}`}
                className={`${styles.bentoCard} fade-up delay-${Math.min(i + 1, 6)}`}
              >
                <div className={styles.bentoImage}>
                  <Image
                    src={svc.image}
                    alt={serviceLabels[svc.slug] || svc.shortTitle}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.bentoOverlay} />
                </div>
                <div className={styles.bentoBody}>
                  <span className={`badge badge-white ${styles.bentoBadge}`}>
                    {categoryLabels[svc.category] || svc.category}
                  </span>
                  <h3 className={styles.bentoTitle}>{serviceLabels[svc.slug] || svc.shortTitle}</h3>
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
              <Link href="/en/contact" className="btn btn-primary">{t.whyUs.cta}</Link>
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
              <Link href="/en/contact" className="btn btn-primary btn-lg">{t.cta.primary}</Link>
              <Link href="/en/contact" className="btn btn-outline-white btn-lg">{t.cta.secondary}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
