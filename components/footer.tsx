import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-lg">V</span>
              </div>
              <span className="font-serif text-lg font-semibold text-white">VISION</span>
            </div>
            <p className="text-sm leading-relaxed">
              인허가 업무 전문 행정사사무소입니다.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">메뉴</h4>
            <nav className="flex flex-col gap-2.5">
              <Link href="/" className="text-sm hover:text-white transition-colors">홈</Link>
              <Link href="/about" className="text-sm hover:text-white transition-colors">About Us</Link>
              <Link href="/blog" className="text-sm hover:text-white transition-colors">Blog</Link>
              <Link href="/contact" className="text-sm hover:text-white transition-colors">상담문의</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">연락처</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>서울특별시 중구 퇴계로 324, 3층 (성우빌딩)</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <span>02-363-2251</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <span>5000meter@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Business Registration */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 pt-8 pb-4">
          <p className="text-sm text-slate-500 text-center">
            © 2018 비전행정사사무소 | 사업자등록번호: 405-05-54079 | 대표: 이원중 | 개인정보관리자: 김영주
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>&copy; 2018 비전행정사사무소. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-slate-300 transition-colors">개인정보처리방침</Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">이용약관</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
