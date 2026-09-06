'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'
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

const langSwitcher: { label: string; mobileLabel: string; href: string; key: string }[] = [
  { label: 'KO', mobileLabel: 'KO', href: '/', key: 'ko' },
  { label: 'EN', mobileLabel: 'EN', href: '/en', key: 'en' },
  { label: '中文', mobileLabel: 'CN', href: '/zh', key: 'zh' },
  { label: '日本語', mobileLabel: 'JP', href: '/ja', key: 'ja' },
]

export default function NavbarLang({ locale }: { locale: Locale }) {
  const t = getT(locale)
  const services = servicesByLocale[locale]
  const base = `/${locale}`

  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + '/')

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${menuOpen ? styles.menuIsOpen : ''}`}>
      <div className={styles.inner}>
        <Link href={base} className={styles.logo}>
          <div className={styles.logoMark}><span>V</span></div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Vision Admin Office</span>
            <span className={styles.logoSub}>{t.tagline}</span>
          </div>
        </Link>

        <nav className={styles.desktopNav}>
          <Link href={base} className={`${styles.navLink} ${pathname === base ? styles.active : ''}`}>
            {t.nav.home}
          </Link>
          <Link href={`${base}/about`} className={`${styles.navLink} ${isActive(`${base}/about`) ? styles.active : ''}`}>
            {t.nav.about}
          </Link>

          <div
            className={styles.dropdownWrapper}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`${styles.navLink} ${isActive(`${base}/services`) ? styles.active : ''}`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              {t.nav.services}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
            <div className={`${styles.megaMenu} ${servicesOpen ? styles.megaMenuOpen : ''}`}>
              <div className={styles.megaMenuInner}>
                <div className={styles.megaMenuHeader}>
                  <p className="text-label text-burgundy">{t.services.badge}</p>
                  <p className={styles.megaMenuDesc}>{t.services.title.replace('\n', ' ')}</p>
                </div>
                <div className={styles.megaMenuGrid}>
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className={styles.megaMenuItem}>
                      <span className={styles.megaMenuDot} />
                      {s.label}
                    </Link>
                  ))}
                </div>
                <div className={styles.megaMenuFooter}>
                  <Link href={`${base}/contact`} className="btn btn-primary">
                    {t.nav.quote}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href={`${base}/blog`} className={`${styles.navLink} ${isActive(`${base}/blog`) ? styles.active : ''}`}>
            {t.nav.blog}
          </Link>
          <Link href={`${base}/contact`} className={`${styles.navLink} ${isActive(`${base}/contact`) ? styles.active : ''}`}>
            {t.nav.contact}
          </Link>

          {/* Language Switcher */}
          <div style={{ display: 'flex', gap: '3px', alignItems: 'center', marginLeft: '0.5rem' }}>
            {langSwitcher.map((l) => {
              const isActive = l.key === locale
              return isActive ? (
                <span
                  key={l.href}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'white',
                    padding: '4px 8px',
                    background: '#235099',
                    borderRadius: '4px',
                  }}
                >
                  {l.label}
                </span>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'white',
                    padding: '4px 8px',
                    background: '#A33344',
                    borderRadius: '4px',
                    textDecoration: 'none',
                  }}
                >
                  {l.label}
                </Link>
              )
            })}
          </div>
        </nav>

        <div className={styles.actions}>
          <a href="tel:02-363-2251" className={styles.phoneLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            02-363-2251
          </a>
          <Link href={`${base}/contact`} className={styles.ctaBtn}>
            {t.nav.quote}
          </Link>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link href={base} className={styles.mobileNavLink}>{t.nav.home}</Link>
          <Link href={`${base}/about`} className={styles.mobileNavLink}>{t.nav.about}</Link>
          <div className={styles.mobileServiceSection}>
            <p className={styles.mobileServiceLabel}>{t.nav.services}</p>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className={styles.mobileServiceLink}>
                {s.label}
              </Link>
            ))}
          </div>
          <Link href={`${base}/blog`} className={styles.mobileNavLink}>{t.nav.blog}</Link>
          <Link href={`${base}/contact`} className={styles.mobileNavLink}>{t.nav.contact}</Link>
          <Link href={`${base}/contact`} className="btn btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
            {t.nav.quote}
          </Link>
          <div style={{ display: 'flex', gap: '6px', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            {langSwitcher.map((l) => {
              const isCurrent = l.key === locale
              return isCurrent ? (
                <span key={l.href} style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', padding: '5px 10px', background: '#235099', borderRadius: '4px' }}>
                  {l.label}
                </span>
              ) : (
                <Link key={l.href} href={l.href} style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', padding: '5px 10px', background: '#A33344', borderRadius: '4px', textDecoration: 'none' }}>
                  {l.label}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </header>
  )
}
