import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 md:items-center md:pb-0 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/slides/consultation.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      <div className="container-x relative z-10">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.3em] text-wv-orange font-bold">
            인허가 전문 행정사사무소
          </div>
          <h1 className="mt-5 text-display-xl font-black text-white leading-[1.08]">
            복잡한 인허가,
            <br />
            전문가에게 맡기세요
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
            의약외품·화장품 허가부터 식품 인허가까지.
            <br />
            비전행정사사무소가 전문적으로 지원합니다.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary text-lg">
              상담문의
            </Link>
            <a href="#services" className="btn-ghost text-lg">
              업무 안내
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
        <ArrowDown size={20} />
      </div>
    </section>
  );
}
