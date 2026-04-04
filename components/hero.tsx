'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    title: '인허가 전문 행정사사무소',
    subtitle: '의약외품·화장품 허가부터 식품 인허가까지 전문적으로 지원합니다',
    image: '/slides/pharma.jpg',
  },
  {
    title: '기업 인증 · 연구소 설립',
    subtitle: '벤처기업 확인, 이노비즈 인증, 기업부설연구소 설립을 대행합니다',
    image: '/slides/research.jpg',
  },
  {
    title: '국제물류 · 수출입 인허가',
    subtitle: '국제물류주선업 등록부터 수입 허가까지 체계적으로 처리합니다',
    image: '/slides/logistics.jpg',
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
    <section className="relative min-h-[600px] pt-20 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative h-full flex items-end justify-center pb-24">
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
                  className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors shadow-lg"
                >
                  상담문의
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 px-7 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors backdrop-blur-sm"
                >
                  About Us
                </Link>
              </div>
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
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-8 h-2.5 bg-white' : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`슬라이드 ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
