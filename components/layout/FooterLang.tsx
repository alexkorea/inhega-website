import Link from 'next/link'
import styles from './Footer.module.css'
import type { Locale } from '@/lib/i18n/translations'
import { getT } from '@/lib/i18n/translations'
import { EmailOff } from '@/components/ui/EmailOff'
import FooterServiceGroups from './FooterServiceGroups'
import LangFlags from '@/components/ui/LangFlags'

export default function FooterLang({ locale }: { locale: Locale }) {
  const t = getT(locale)
  const base = `/${locale}`
  // registration = '사업자번호 | 대표 | 주소' — 주소는 둘째 줄에 따로 있으므로 앞 두 칸만 첫 줄로
  const bizParts = t.footer.registration.split(' | ').slice(0, 2).reverse()

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
              {/* INH-LAYOUT(보스 msg 2271) — 회사 정보 압축(ko 풋터와 같은 구조). 사업자등록번호는 풋터 안 필수. */}
              <div className={styles.bizInfo}>
                <p>
                  <span>YouSun Administrative Agency</span>
                  {bizParts.map((x) => <span key={x}>{x}</span>)}
                </p>
                <p>
                  <span>{t.footer.address}</span>
                  <span><a href="tel:02-363-2251">02-363-2251</a></span>
                  <span><EmailOff><a href="mailto:help@inhega.co.kr">help@inhega.co.kr</a></EmailOff></span>
                </p>
                <p>
                  <span>{t.footer.messenger}</span>
                </p>
              </div>
              <LangFlags locale={locale} className={styles.footerLang} />
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

            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>{t.footer.copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
