'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

const services = [
  { label: '국제물류주선업', href: '/services/logistics' },
  { label: '환전업 등록', href: '/services/currency-exchange' },
  { label: '외국인도시민박업', href: '/services/urban-guesthouse' },
  { label: '호스텔업', href: '/services/hostel' },
  { label: '한옥체험업', href: '/services/hanok' },
  { label: '건축물 용도변경', href: '/services/building-usage' },
  { label: '식품제조가공업', href: '/services/food-manufacturing' },
  { label: '여성기업인증', href: '/services/women-enterprise' },
  { label: '비영리사단법인', href: '/services/nonprofit' },
  { label: '담배수입판매업', href: '/services/tobacco' },
  { label: '기업인증(벤처/이노비즈)', href: '/services/venture-cert' },
  { label: '식품인허가 & HACCP', href: '/services/haccp' },
  { label: '의약외품/화장품 허가', href: '/services/cosmetics' },
  { label: '조달청 나라장터', href: '/services/procurement' },
  { label: '기업부설연구소', href: '/services/research-lab' },
  { label: '전자담배 수입허가', href: '/services/ecig' },
  { label: '지정스포츠클럽', href: '/services/sports-club' },
  { label: '위치기반서비스사업신고', href: '/services/location-based-service' },
]

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
        <Link href="/" className={styles.logo}>
          <div className={styles.logoMark}>
            <img src="/logo.png" alt="비전행정사사무소 로고" style={{width:"100%",height:"100%",objectFit:"contain",borderRadius:"inherit"}} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>비전행정사사무소</span>
            <span className={styles.logoSub}>인허가 전문</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav}>
          <Link href="/" className={`${styles.navLink} ${isActive('/') && pathname === '/' ? styles.active : ''}`}>
            홈
          </Link>
          <Link href="/about" className={`${styles.navLink} ${isActive('/about') ? styles.active : ''}`}>
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
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className={styles.megaMenuItem}>
                      <span className={styles.megaMenuDot} />
                      {s.label}
                    </Link>
                  ))}
                </div>
                <div className={styles.megaMenuFooter}>
                  <Link href="/quote" className="btn btn-primary">
                    무료 견적 문의
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link href="/blog" className={`${styles.navLink} ${isActive('/blog') ? styles.active : ''}`}>
            블로그
          </Link>
          <Link href="/contact" className={`${styles.navLink} ${isActive('/contact') ? styles.active : ''}`}>
            상담문의
          </Link>

          {/* Language Switcher */}
          <div style={{ display: 'flex', gap: '3px', alignItems: 'center', marginLeft: '0.5rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', padding: '4px 8px', background: '#235099', borderRadius: '4px' }}>KO</span>
            <Link href="/en" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', padding: '4px 8px', background: '#235099', borderRadius: '4px', textDecoration: 'none' }}>EN</Link>
            <Link href="/zh" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', padding: '4px 8px', background: '#235099', borderRadius: '4px', textDecoration: 'none' }}>中文</Link>
            <Link href="/ja" style={{ fontSize: '0.75rem', fontWeight: 700, color: 'white', padding: '4px 8px', background: '#235099', borderRadius: '4px', textDecoration: 'none' }}>日本語</Link>
          </div>
        </nav>

        {/* CTA + Hamburger */}
        <div className={styles.actions}>
          <a href="tel:02-363-2251" className={styles.phoneLink}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            02-363-2251
          </a>
          <Link href="/contact" className={styles.ctaBtn}>
            견적 문의
          </Link>

          <div className={styles.mobileLangSwitch}>
            <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'white', padding: '4px 6px', background: '#235099', borderRadius: '3px', minWidth: '44px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>KO</span>
            <Link href="/en" style={{ fontSize: '0.7rem', fontWeight: 700, color: 'white', padding: '4px 6px', background: '#235099', borderRadius: '3px', textDecoration: 'none', minWidth: '44px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>EN</Link>
            <Link href="/zh" style={{ fontSize: '0.7rem', fontWeight: 700, color: 'white', padding: '4px 6px', background: '#235099', borderRadius: '3px', textDecoration: 'none', minWidth: '44px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>中文</Link>
            <Link href="/ja" style={{ fontSize: '0.7rem', fontWeight: 700, color: 'white', padding: '4px 6px', background: '#235099', borderRadius: '3px', textDecoration: 'none', minWidth: '44px', minHeight: '44px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>日本語</Link>
          </div>

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
          <Link href="/" className={styles.mobileNavLink}>홈</Link>
          <Link href="/about" className={styles.mobileNavLink}>회사소개</Link>
          <div className={styles.mobileServiceSection}>
            <p className={styles.mobileServiceLabel}>서비스</p>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className={styles.mobileServiceLink}>
                {s.label}
              </Link>
            ))}
          </div>
          <Link href="/blog" className={styles.mobileNavLink}>블로그</Link>
          <Link href="/contact" className={styles.mobileNavLink}>상담문의</Link>
          <Link href="/contact" className="btn btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>
            무료 견적 문의
          </Link>
        </nav>
      </div>
    </header>
  )
}
