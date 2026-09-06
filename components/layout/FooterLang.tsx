import Link from 'next/link'
import styles from './Footer.module.css'
import type { Locale } from '@/lib/i18n/translations'
import { getT } from '@/lib/i18n/translations'

const servicesByLocale: Record<Locale, { label: string; href: string }[]> = {
  en: [
    { label: 'International Freight Forwarding', href: '/en/services/logistics' },
    { label: 'Currency Exchange', href: '/en/services/currency-exchange' },
    { label: 'Foreign Tourist Guesthouse', href: '/en/services/urban-guesthouse' },
    { label: 'Hostel Business', href: '/en/services/hostel' },
    { label: 'Hanok Experience', href: '/en/services/hanok' },
    { label: 'Building Use Change', href: '/en/services/building-usage' },
    { label: 'Food Manufacturing', href: '/en/services/food-manufacturing' },
    { label: 'Women-Owned Business Cert.', href: '/en/services/women-enterprise' },
    { label: 'Non-Profit Corporation', href: '/en/services/nonprofit' },
    { label: 'Tobacco Import & Sales', href: '/en/services/tobacco' },
    { label: 'Venture / Innobiz Cert.', href: '/en/services/venture-cert' },
    { label: 'HACCP Certification', href: '/en/services/haccp' },
    { label: 'Cosmetics / Quasi-Drug License', href: '/en/services/cosmetics' },
    { label: 'Government Procurement', href: '/en/services/procurement' },
    { label: 'Corporate Research Lab', href: '/en/services/research-lab' },
    { label: 'E-Cigarette Import License', href: '/en/services/ecig' },
    { label: 'Sports Club Registration', href: '/en/services/sports-club' },
    { label: 'Location-Based Service', href: '/en/services/location-based-service' },
  ],
  zh: [
    { label: '国际货运代理', href: '/zh/services/logistics' },
    { label: '外汇兑换业', href: '/zh/services/currency-exchange' },
    { label: '外国人城市民宿', href: '/zh/services/urban-guesthouse' },
    { label: '青年旅社业', href: '/zh/services/hostel' },
    { label: '韩屋体验业', href: '/zh/services/hanok' },
    { label: '建筑物用途变更', href: '/zh/services/building-usage' },
    { label: '食品制造加工业', href: '/zh/services/food-manufacturing' },
    { label: '女性企业认证', href: '/zh/services/women-enterprise' },
    { label: '非营利社团法人', href: '/zh/services/nonprofit' },
    { label: '烟草进口销售', href: '/zh/services/tobacco' },
    { label: '风险企业/创新企业认证', href: '/zh/services/venture-cert' },
    { label: 'HACCP认证', href: '/zh/services/haccp' },
    { label: '化妆品/准药品许可', href: '/zh/services/cosmetics' },
    { label: '政府采购', href: '/zh/services/procurement' },
    { label: '企业附属研究所', href: '/zh/services/research-lab' },
    { label: '电子烟进口许可', href: '/zh/services/ecig' },
    { label: '指定体育俱乐部', href: '/zh/services/sports-club' },
    { label: '位置信息服务事业', href: '/zh/services/location-based-service' },
  ],
  ja: [
    { label: '国際貨物運送取扱業', href: '/ja/services/logistics' },
    { label: '外貨両替業', href: '/ja/services/currency-exchange' },
    { label: '外国人都市民泊業', href: '/ja/services/urban-guesthouse' },
    { label: 'ホステル業', href: '/ja/services/hostel' },
    { label: '韓屋体験業', href: '/ja/services/hanok' },
    { label: '建物用途変更', href: '/ja/services/building-usage' },
    { label: '食品製造加工業', href: '/ja/services/food-manufacturing' },
    { label: '女性企業認証', href: '/ja/services/women-enterprise' },
    { label: '非営利社団法人', href: '/ja/services/nonprofit' },
    { label: 'たばこ輸入販売業', href: '/ja/services/tobacco' },
    { label: 'ベンチャー/イノビズ認証', href: '/ja/services/venture-cert' },
    { label: 'HACCP認証', href: '/ja/services/haccp' },
    { label: '化粧品/医薬部外品許可', href: '/ja/services/cosmetics' },
    { label: '政府調達', href: '/ja/services/procurement' },
    { label: '企業付設研究所', href: '/ja/services/research-lab' },
    { label: '電子タバコ輸入許可', href: '/ja/services/ecig' },
    { label: '指定スポーツクラブ', href: '/ja/services/sports-club' },
    { label: '位置情報サービス業届出', href: '/ja/services/location-based-service' },
  ],
}

export default function FooterLang({ locale }: { locale: Locale }) {
  const t = getT(locale)
  const services = servicesByLocale[locale]
  const base = `/${locale}`

  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className="container">
          <div className={styles.topGrid}>
            <div className={styles.brandCol}>
              <div className={styles.logo}>
                <div className={styles.logoMark}>V</div>
                <div className={styles.logoText}>
                  <span className={styles.logoMain}>Vision Admin Office</span>
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
                  <a href="mailto:5000meter@gmail.com">5000meter@gmail.com</a>
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

            <div className={styles.linksCol}>
              <p className={styles.colTitle}>{t.footer.services}</p>
              <ul className={styles.linkList}>
                {services.slice(0, 8).map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className={styles.link}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksCol}>
              <p className={styles.colTitle}>&nbsp;</p>
              <ul className={styles.linkList} style={{ marginTop: 0 }}>
                {services.slice(8).map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className={styles.link}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksCol}>
              <p className={styles.colTitle}>{t.footer.company}</p>
              <ul className={styles.linkList}>
                <li><Link href={`${base}/about`} className={styles.link}>{t.footer.about}</Link></li>
                <li><Link href={`${base}/contact`} className={styles.link}>{t.footer.contact}</Link></li>
                <li><Link href={`${base}/contact`} className={styles.link}>{t.footer.quoteLink}</Link></li>
              </ul>

              <p className={styles.colTitle} style={{ marginTop: '1.5rem' }}>{t.footer.legal}</p>
              <ul className={styles.linkList}>
                <li><Link href="/privacy" className={styles.link}>{t.footer.privacy}</Link></li>
                <li><Link href="/terms" className={styles.link}>{t.footer.terms}</Link></li>
              </ul>

              <p className={styles.colTitle} style={{ marginTop: '1.5rem' }}>Language</p>
              <ul className={styles.linkList}>
                <li><Link href="/" className={styles.link}>한국어</Link></li>
                <li><Link href="/en" className={styles.link}>English</Link></li>
                <li><Link href="/zh" className={styles.link}>中文</Link></li>
                <li><Link href="/ja" className={styles.link}>日本語</Link></li>
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
