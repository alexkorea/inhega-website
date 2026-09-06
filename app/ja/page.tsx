import Image from 'next/image'
import Link from 'next/link'
import styles from '../page.module.css'
import { services } from '@/lib/services-data'
import { getT } from '@/lib/i18n/translations'
import type { Metadata } from 'next'
import TeamSection from '@/components/layout/TeamSection'
import QRSection from '@/components/layout/QRSection'

export const metadata: Metadata = {
  title: 'ビジョン行政書士事務所 | 韓国許認可の専門家 | 外国人・外国企業の韓国ビジネス',
  description: '外国人・外国企業向けの韓国政府許認可手続き専門事務所。国際貨物運送、外貨両替、食品製造、化粧品許可、位置情報サービス届出など全件代行。',
  alternates: {
    canonical: 'https://inhega.co.kr/ja',
    languages: {
      'ko': 'https://inhega.co.kr',
      'en': 'https://inhega.co.kr/en',
      'zh': 'https://inhega.co.kr/zh',
      'ja': 'https://inhega.co.kr/ja',
      'x-default': 'https://inhega.co.kr',
    },
  },
}

const t = getT('ja')

const serviceLabels: Record<string, string> = {
  'logistics': '国際貨物運送取扱業',
  'currency-exchange': '外貨両替業',
  'urban-guesthouse': '外国人都市民泊業',
  'hostel': 'ホステル業',
  'hanok': '韓屋体験業',
  'building-usage': '建物用途変更',
  'food-manufacturing': '食品製造加工業',
  'women-enterprise': '女性企業認証',
  'nonprofit': '非営利社団法人',
  'tobacco': 'たばこ輸入販売業',
  'venture-cert': 'ベンチャー/イノビズ認証',
  'haccp': 'HACCP認証',
  'cosmetics': '化粧品/医薬部外品許可',
  'procurement': '政府調達',
  'research-lab': '企業付設研究所',
  'ecig': '電子タバコ輸入許可',
  'sports-club': '指定スポーツクラブ',
  'location-based-service': '位置情報サービス業届出',
}

const categoryLabels: Record<string, string> = {
  '물류/유통': '物流/流通',
  '금융': '金融',
  '숙박/관광': '宿泊/観光',
  '건설/건축': '建設/建築',
  '건축/부동산': '建設/不動産',
  '식품': '食品',
  '식품/의약': '食品/医薬',
  '기업인증': '企業認証',
  '법인/단체': '法人/団体',
  '법인설립': '法人設立',
  '유통': '流通',
  '유통/판매': '流通/販売',
  '연구개발': '研究開発',
  '정보통신': 'IT/通信',
  'IT·통신': 'IT/通信',
  '스포츠/레저': 'スポーツ/レジャー',
  '체육시설업': 'スポーツ施設',
  '공공조달': '公共調達',
}

export default function JaHomePage() {
  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <Image
            src="/images/hero-seoul.png"
            alt="ソウルの都市景観"
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
              <Link href="/ja/contact" className="btn btn-primary btn-lg">
                {t.hero.ctaPrimary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/ja/services/logistics" className="btn btn-outline-white btn-lg">
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
          <span>スクロール</span>
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
      <QRSection locale="ja" />

      {/* TEAM SECTION */}
      <TeamSection locale="ja" />

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
                href={`/ja/services/${svc.slug}`}
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
              <Link href="/ja/contact" className="btn btn-primary">{t.whyUs.cta}</Link>
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
              <Link href="/ja/contact" className="btn btn-primary btn-lg">{t.cta.primary}</Link>
              <Link href="/ja/contact" className="btn btn-outline-white btn-lg">{t.cta.secondary}</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
