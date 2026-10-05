'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'
import { getServiceMenuByGroup } from '@/lib/services-menu'
import LangFlags from '@/components/ui/LangFlags'

// 서비스 목록 단일 정본 — lib/services-catalog.ts + 신규 업종(0949, 분야 그룹)에서 구운 경량판 (하드코딩 금지)
// 'use client' 라 catalog 를 직접 import 하면 본문 코퍼스 893KB 가 번들에 실린다 (2026-09-25)
const serviceGroups = getServiceMenuByGroup('ko')

export default function Navbar() {
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
        {/* Logo */}
        <Link prefetch={false} href="/" className={styles.logo}>
          <div className={styles.logoMark}>
            <img src="/logo.webp" alt="유선행정사사무소 로고" style={{width:"100%",height:"100%",objectFit:"contain",borderRadius:"inherit"}} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>유선행정사사무소</span>
            <span className={styles.logoSub}>인허가 전문</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <Link prefetch={false} href="/" className={`${styles.navLink} ${isActive('/') && pathname === '/' ? styles.active : ''}`}>
            홈
          </Link>
          <Link prefetch={false} href="/about" className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>
            회사소개
          </Link>

          {/* Services Dropdown */}
          <div
            className={styles.dropdownWrapper}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`${styles.navLink} ${isActive('/services') ? styles.active : ''}`}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              서비스
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            <div className={`${styles.megaMenu} ${servicesOpen ? styles.megaMenuOpen : ''}`}>
              <div className={styles.megaMenuInner}>
                <div className={styles.megaMenuHeader}>
                  <p className="text-label text-burgundy">전문 서비스 분야</p>
                  <p className={styles.megaMenuDesc}>모든 인허가 업무를 신속하고 정확하게</p>
                </div>
                <div className={styles.megaMenuGrid}>
                  {serviceGroups.map((group) => (
                    <div key={group.id} className={styles.megaMenuGroup}>
                      <p className={styles.megaMenuGroupLabel}>{group.label}</p>
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
                  <Link prefetch={false} href="/quote" className="btn btn-primary">
                    무료 견적 문의
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link prefetch={false} href="/blog" className={`${styles.navLink} ${isActive('/blog') ? styles.active : ''}`}>
            블로그
          </Link>
          <Link prefetch={false} href="/news" className={`${styles.navLink} ${isActive('/news') ? styles.active : ''}`}>
            인허가 뉴스
          </Link>
          <Link prefetch={false} href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>
            상담문의
          </Link>

          {/* Language Switcher — 국기 SVG(INH-LAYOUT) */}
          <LangFlags locale="ko" className={styles.langFlags} />
        </nav>

        {/* CTA + Hamburger */}
        <div className={styles.actions}>
          <a href="tel:02-363-2251" className={styles.phoneLink} aria-label="전화 02-363-2251" title="전화 02-363-2251">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            <span className={styles.phoneText}>02-363-2251</span>
          </a>
          <Link prefetch={false} href="/contact" className={styles.ctaBtn}>
            견적 문의
          </Link>

          <div className={styles.mobileLangSwitch}><LangFlags locale="ko" /></div>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          <Link prefetch={false} href="/" className={styles.mobileNavLink}>홈</Link>
          <Link prefetch={false} href="/about" className={styles.mobileNavLink}>회사소개</Link>
          <div className={styles.mobileServiceSection}>
            <p className={styles.mobileServiceLabel}>서비스</p>
            {serviceGroups.map((group) => (
              <div key={group.id} className={styles.mobileServiceGroup}>
                <p className={styles.mobileServiceGroupLabel}>{group.label}</p>
                {group.items.map((s) => (
                  <Link prefetch={false} key={s.slug} href={s.href} className={styles.mobileServiceLink}>
                    {s.shortTitle}
                  </Link>
                ))}
              </div>
            ))}
          </div>
          <Link prefetch={false} href="/blog" className={styles.mobileNavLink}>블로그</Link>
          <Link prefetch={false} href="/news" className={styles.mobileNavLink}>인허가 뉴스</Link>
          <Link prefetch={false} href="/contact" className={styles.mobileNavLink}>상담문의</Link>
          <Link prefetch={false} href="/contact" className="btn btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
            무료 견적 문의
          </Link>
          <LangFlags locale="ko" className={styles.mobileMenuLang} />
        </nav>
      </div>
    </header>
  )
}
