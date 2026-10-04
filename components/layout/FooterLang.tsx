import Link from 'next/link'
import styles from './Footer.module.css'
import type { Locale } from '@/lib/i18n/translations'
import { getT } from '@/lib/i18n/translations'
import { EmailOff } from '@/components/ui/EmailOff'
import FooterServiceGroups from './FooterServiceGroups'

export default function FooterLang({ locale }: { locale: Locale }) {
  const t = getT(locale)
  const base = `/${locale}`

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.topGrid}>
            <div className={styles.brandCol}>
              <div className={styles.logo}>
                <div className={styles.logoMark}><img src="/logo.webp" alt="YouSun Administrative Agency logo" style={{width:"100%",height:"100%",objectFit:"contain",borderRadius:"inherit"}} /></div>
                <div className={styles.logoText}>
                  <span className={`${styles.logoMain} ${styles.logoMainEn}`}>YouSun Administrative Agency</span>
                  <span className={styles.logoSub}>{t.tagline}</span>
                </div>
              </div>
              <p className={styles.tagline}>{t.footer.tagline}</p>
              <div className={styles.contact}>
                <div className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  <a href="tel:02-363-2251">02-363-2251</a>
                </div>
                <div className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <EmailOff><a href="mailto:help@inhega.co.kr">help@inhega.co.kr</a></EmailOff>
                </div>
                <div className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{t.footer.address}</span>
                </div>
                <div className={styles.contactItem}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
                  </svg>
                  <span>{t.footer.messenger}</span>
                </div>
              </div>
            </div>

            {/* 서비스 분야 그룹 링크 — 정본 lib/service-directory.ts (0949 추가) */}
            <FooterServiceGroups locale={locale} title={t.footer.services} />

            <div className={styles.linksCol}>
              <p className={styles.colTitle}>{t.footer.company}</p>
              <ul className={styles.linkList}>
                <li><Link prefetch={false} href={`${base}/about`} className={styles.link}>{t.footer.about}</Link></li>
                <li><Link prefetch={false} href={`${base}/contact`} className={styles.link}>{t.footer.contact}</Link></li>
                <li><Link prefetch={false} href={`${base}/contact`} className={styles.link}>{t.footer.quoteLink}</Link></li>
              </ul>

              <p className={styles.colTitle} style={{ marginTop: '1.5rem' }}>{t.footer.legal}</p>
              <ul className={styles.linkList}>
                <li><Link prefetch={false} href="/privacy" className={styles.link}>{t.footer.privacy}</Link></li>
                <li><Link prefetch={false} href="/terms" className={styles.link}>{t.footer.terms}</Link></li>
              </ul>

              <p className={styles.colTitle} style={{ marginTop: '1.5rem' }}>Language</p>
              <ul className={styles.linkList}>
                <li><Link prefetch={false} href="/" className={styles.link}>한국어</Link></li>
                <li><Link prefetch={false} href="/en" className={styles.link}>English</Link></li>
                <li><Link prefetch={false} href="/zh" className={styles.link}>中文</Link></li>
                <li><Link prefetch={false} href="/ja" className={styles.link}>日本語</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>{t.footer.copyright}</p>
            <p className={styles.registration}>{t.footer.registration}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
