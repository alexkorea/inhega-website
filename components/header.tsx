'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'

const navLinks = [
  { label: '홈', href: '/' },
  { label: '회사소개', href: '/about' },
  { label: '블로그', href: '/blog' },
  { label: '견적문의', href: '/quote' },
]

const serviceItems = [
  { label: '국제물류주선업', href: '/#services' },
  { label: '환전업 등록', href: '/#services' },
  { label: '외국인도시민박업', href: '/#services' },
  { label: '호스텔업', href: '/#services' },
  { label: '한옥체험업', href: '/#services' },
  { label: '건축물 용도변경', href: '/#services' },
  { label: '식품제조가공업', href: '/#services' },
  { label: '여성기업인증', href: '/#services' },
  { label: '비영리사단법인', href: '/#services' },
  { label: '담배수입판매업 등록', href: '/#services' },
  { label: '기업 인증(벤처/이노비즈)', href: '/#services' },
  { label: '식품 인허가 & HACCP', href: '/#services' },
  { label: '의약외품/화장품 허가', href: '/#services' },
  { label: '조달청 나라장터 등록', href: '/#services' },
  { label: '기업부설연구소 설립', href: '/#services' },
  { label: '전자담배 수입허가', href: '/#services' },
  { label: '지정스포츠클럽', href: '/#services' },
  { label: '위치기반서비스사업신고', href: '/services/location-based-service-business' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleServicesEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }
  const handleServicesLeave = () => {
    timeoutRef.current = setTimeout(() => setServicesOpen(false), 150)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl h-24 flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-[#f36c24] rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-2xl">V</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-2xl font-semibold text-slate-900">VISION</span>
            <span className="text-xs text-slate-500 -mt-0.5 hidden sm:block">행정사사무소</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-base font-medium text-slate-700 hover:text-[#f36c24] transition-colors">홈</Link>
          <Link href="/about" className="text-base font-medium text-slate-700 hover:text-[#f36c24] transition-colors">회사소개</Link>

          {/* Services dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button className="flex items-center gap-1 text-base font-medium text-slate-700 hover:text-[#f36c24] transition-colors">
              서비스
              <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[640px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 grid grid-cols-3 gap-2">
                {serviceItems.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className={`text-sm hover:text-[#f36c24] hover:bg-orange-50 px-3 py-2 rounded-lg transition-colors ${
                      s.href !== '/#services'
                        ? 'text-[#f36c24] font-semibold'
                        : 'text-slate-700'
                    }`}
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/blog" className="text-base font-medium text-slate-700 hover:text-[#f36c24] transition-colors">블로그</Link>
          <Link href="/quote" className="text-base font-medium text-slate-700 hover:text-[#f36c24] transition-colors">견적문의</Link>
          <a
            href="tel:010-2081-3408"
            className="inline-flex items-center gap-1.5 text-base font-medium text-slate-700 hover:text-[#f36c24] transition-colors"
          >
            <Phone className="w-4 h-4" />
            010-2081-3408
          </a>
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-lg bg-[#f36c24] px-5 py-2.5 text-base font-semibold text-white hover:bg-[#d14904] transition-colors"
          >
            상담문의
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 pb-6">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-slate-700 hover:text-[#f36c24] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile services accordion */}
            <button
              className="flex items-center gap-1 text-base font-medium text-slate-700 text-left"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              서비스
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 flex flex-col gap-2">
                {serviceItems.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    className={`text-sm transition-colors ${
                      s.href !== '/#services'
                        ? 'text-[#f36c24] font-semibold'
                        : 'text-slate-600 hover:text-[#f36c24]'
                    }`}
                    onClick={() => { setMobileOpen(false); setMobileServicesOpen(false) }}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-[#f36c24] px-5 py-2.5 text-base font-semibold text-white hover:bg-[#d14904] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              상담문의
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
