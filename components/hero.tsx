'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  {
    title: '인허가 전문 행정사사무소',
    subtitle: '복잡한 인허가 업무를 명확하고 정확하게 지원합니다',
    gradient: 'from-[#1e3a8a] to-[#3b82f6]',
  },
  {
    title: '사업자의 행정절차를',
    subtitle: '빠르고 안정적으로 지원합니다',
    gradient: 'from-[#0f172a] to-[#475569]',
  },
  {
    title: '다양한 업종의 허가, 등록, 인증',
    subtitle: '전문적이고 체계적인 업무 처리를 약속합니다',
    gradient: 'from-[#1e40af] to-[#60a5fa]',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative h-[600px] pt-20 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center justify-center bg-gradient-to-r ${slide.gradient} transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="mx-auto max-w-7xl px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              {slide.subtitle}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
              >
                상담문의
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Dot indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === current ? 'bg-white' : 'bg-white/40'
            }`}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
