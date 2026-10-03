'use client'
import { useState, useEffect } from 'react'
import type { CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'
import type { Locale } from '@/lib/i18n/translations'
import { getT } from '@/lib/i18n/translations'
import { getServiceMenuByCategory } from '@/lib/services-menu'

// 서비스 목록 단일 정본 — lib/services-catalog.ts 에서 구운 경량판 (하드코딩 금지, 2026-09-22)
// 'use client' 라 catalog 를 직접 import 하면 본문 코퍼스 893KB 가 번들에 실린다 (2026-09-25)

const langSwitcher: { label: string; mobileLabel: string; href: string; key: string }[] = [
  { label: 'KO', mobileLabel: 'KO', href: '/', key: 'ko' },
  { label: 'EN', mobileLabel: 'EN', href: '/en', key: 'en' },
  { label: '中文', mobileLabel: 'CN', href: '/zh', key: 'zh' },
  { label: '日本語', mobileLabel: 'JP', href: '/ja', key: 'ja' },
]

export default function NavbarLang({ locale }: { locale: Locale }) {
  const t = getT(locale)
  const serviceGroups = getServiceMenuByCategory(locale)
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
        <Link prefetch={false} href={base} className={styles.logo}>
          <div className={styles.logoMark}><img src="/logo.webp" alt="YouSun Administrative Agency logo" style={{width:"100%",height:"100%",objectFit:"contain",borderRadius:"inherit"}} /></div>
          <div className={styles.logoText}>
            <span className={`${styles.logoMain} ${styles.logoMainEn}`}>YouSun Administrative Agency</span>
            <span className={styles.logoSub}>{t.tagline}</span>
          </div>
        </Link>

        <nav className={styles.desktopNav}>
          <Link prefetch={false} href={base} className={`${styles.navLink} ${pathname === base ? styles.active : ''}`}>
            {t.nav.home}
          </Link>
          <Link prefetch={false} href={`${base}/about`} className={`${styles.navLink} ${isActive(`${base}/about`) ? styles.active : ''}`}>
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
                  {serviceGroups.map((group) => (
                    <div key={group.category} className={styles.megaMenuGroup}>
                      <p className={styles.megaMenuGroupLabel}>{group.category}</p>
                      {group.items.map((s) => (
                        <Link key={s.slug} prefetch={false} href={s.href} className={styles.megaMenuItem}>
                          <span className={styles.megaMenuDot} />
                          {s.shortTitle}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div className={styles.megaMenuFooter}>
                  <Link prefetch={false} href={`${base}/contact`} className="btn btn-primary">
                    {t.nav.quote}
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link prefetch={false} href={`${base}/blog`} className={`${styles.navLink} ${isActive(`${base}/blog`) ? styles.active : ''}`}>
            {t.nav.blog}
          </Link>
          <Link prefetch={false} href={`${base}/news`} className={`${styles.navLink} ${isActive(`${base}/news`) ? styles.active : ''}`}>
            {t.nav.news}
          </Link>
          <Link prefetch={false} href={`${base}/contact`} className={`${styles.navLink} ${isActive(`${base}/contact`) ? styles.active : ''}`}>
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
                <Link prefetch={false}
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: 'white',
                    padding: '4px 8px',
                    background: '#235099',
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
          <Link prefetch={false} href={`${base}/contact`} className={styles.ctaBtn}>
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
          <Link prefetch={false} href={base} className={styles.mobileNavLink}>{t.nav.home}</Link>
          <Link prefetch={false} href={`${base}/about`} className={styles.mobileNavLink}>{t.nav.about}</Link>
          <div className={styles.mobileServiceSection}>
            <p className={styles.mobileServiceLabel}>{t.nav.services}</p>
            {serviceGroups.map((group) => (
              <div key={group.category} className={styles.mobileServiceGroup}>
                <p className={styles.mobileServiceGroupLabel}>{group.category}</p>
                {group.items.map((s) => (
                  <Link prefetch={false} key={s.slug} href={s.href} className={styles.mobileServiceLink}>
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <Link prefetch={false} href={`${base}/blog`} className={styles.mobileNavLink}>{t.nav.blog}</Link>
          <Link prefetch={false} href={`${base}/news`} className={styles.mobileNavLink}>{t.nav.news}</Link>
          <Link prefetch={false} href={`${base}/contact`} className={styles.mobileNavLink}>{t.nav.contact}</Link>
          <Link prefetch={false} href={`${base}/contact`} className="btn btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
            {t.nav.quote}
          </Link>
          <div style={{ display: 'flex', gap: '6px', marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            {langSwitcher.map((l) => {
              const isCurrent = l.key === locale
              const badgeStyle: CSSProperties = { fontSize: '0.8125rem', fontWeight: 700, color: 'white', padding: '6px 12px', background: '#235099', borderRadius: '4px', minWidth: '44px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }
              return isCurrent ? (
                <span key={l.href} style={badgeStyle}>
                  {l.label}
                </span>
              ) : (
                <Link prefetch={false} key={l.href} href={l.href} style={{ ...badgeStyle, textDecoration: 'none' }}>
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
