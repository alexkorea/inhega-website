import type { Metadata } from 'next'
import Link from 'next/link'

// BOSSEYE-FIX-1014 #2(요약2) — Next 기본 영문 404 대신 ko 레이아웃(헤더·풋터) 안의 한글 안내. 응답 코드는 404 그대로.
// 루트 레이아웃이 언어별로 갈라져(app/(ko)·en·zh·ja) app/not-found 가 없으므로, 어디에도 안 맞는 주소는
// app/(ko)/[...missing] 이 notFound() 를 불러 이 화면으로 온다.
export const metadata: Metadata = {
  title: '페이지를 찾을 수 없습니다 — 유선행정사사무소',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="section bg-white" style={{ paddingTop: 'calc(81px + var(--section-py))' }}>
      <div className="container" style={{ maxWidth: '760px' }}>
        <span className="badge badge-navy text-label">404</span>
        <h1 className="text-h2" style={{ marginTop: '1rem' }}>페이지를 찾을 수 없습니다</h1>
        <p className="text-body-lg" style={{ marginTop: '1rem' }}>
          주소가 바뀌었거나 없어진 페이지입니다. 홈이나 전체 서비스에서 찾으시거나, 상담을 신청해 주세요.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '2rem' }}>
          <Link prefetch={false} href="/" className="btn btn-primary btn-lg">홈으로</Link>
          <Link prefetch={false} href="/services" className="btn btn-secondary btn-lg">전체 서비스 보기</Link>
          <Link prefetch={false} href="/contact" className="btn btn-secondary btn-lg">상담 신청</Link>
        </div>
      </div>
    </section>
  )
}
