'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: '홈', href: '/' },
  { label: '회사소개', href: '/about' },
  { label: '인허가 정보', href: '/blog' },
  { label: '견적문의', href: '/quote' },
  { label: '상담문의', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl h-24 flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-11 h-11 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold text-2xl">V</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-2xl font-semibold text-slate-900">VISION</span>
            <span className="text-xs text-slate-500 -mt-0.5 hidden sm:block">행정사사무소</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
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
                className="text-base font-medium text-slate-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-base font-semibold text-white hover:bg-blue-700 transition-colors"
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
