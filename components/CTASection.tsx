import Link from "next/link";
import { Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-wv-ink text-white">
      <div className="container-x text-center">
        <h2 className="text-display-lg font-black leading-tight">
          인허가, 혼자 고민하지 마세요
        </h2>
        <p className="mt-5 text-white/70 text-lg max-w-xl mx-auto leading-relaxed">
          비전행정사사무소의 전문 행정사가 직접 케이스를 검토합니다.
          <br />
          지금 바로 무료 상담을 신청하세요.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary text-lg">
            무료 상담 신청
          </Link>
          <a
            href="tel:02-363-2251"
            className="btn-ghost text-lg"
          >
            <Phone size={18} />
            전화 상담
          </a>
        </div>
      </div>
    </section>
  );
}
