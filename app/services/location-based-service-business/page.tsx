import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { CheckCircle, FileText, Clock, AlertTriangle, Globe, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "위치기반서비스사업신고 — 한국 미등기 외국법인 포함 | 비전행정사사무소",
  description:
    "앱·플랫폼 운영 외국법인의 위치기반서비스사업신고를 전문적으로 대행합니다. 한국 미등기 외국법인(싱가포르·미국 등) 실제 처리 경험 보유. 방통위 신고 서류 준비부터 확인증 수령까지.",
  alternates: {
    canonical: "https://www.inhega.co.kr/services/location-based-service-business",
  },
  openGraph: {
    title: "위치기반서비스사업신고 — 한국 미등기 외국법인 포함 | 비전행정사사무소",
    description:
      "앱·플랫폼 운영 외국법인의 위치기반서비스사업신고를 전문 대행합니다. 싱가포르·미국 법인 실제 처리 경험.",
    url: "https://www.inhega.co.kr/services/location-based-service-business",
    siteName: "비전행정사사무소",
    type: "website",
    images: [{ url: "https://www.inhega.co.kr/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "위치기반서비스사업신고 | 비전행정사사무소",
    description: "한국 미등기 외국법인 위치기반서비스사업신고 전문 대행. 방통위 확인증 취득.",
  },
}

const checkItems = [
  "GPS·IP·Wi-Fi 기반 위치정보 수집 앱·플랫폼",
  "한국 이용자 대상 배달·라이드헤일링·물류 서비스",
  "한국어 서비스 또는 원화 결제 지원 외국 서비스",
  "한국 앱스토어에 출시된 위치 활용 앱",
  "지역 기반 광고·마케팅 솔루션",
  "B2B 인력관리·현장 배치 SaaS",
]

const processSteps = [
  { step: "01", title: "서비스 검토", desc: "위치정보법 적용 범위 확인, 수집 위치정보 항목 정리" },
  { step: "02", title: "서류 준비", desc: "자국 법인등기 공증·아포스티유, 한국어 번역, 국내 대리인 선임" },
  { step: "03", title: "신고서 작성 제출", desc: "방통위 양식 작성, 서비스 개요서·개인정보처리방침 첨부 제출" },
  { step: "04", title: "보완 대응", desc: "방통위 보완 요청 신속 대응 (평균 1~2회)" },
  { step: "05", title: "확인증 수령", desc: "위치기반서비스사업신고확인증 발급 완료" },
]

const faqItems = [
  {
    q: "한국 법인이 없으면 신고가 불가능한가요?",
    a: "아닙니다. 외국법인 명의로 신고 가능합니다. 자국 법인 서류 공증·번역과 국내 대리인 지정이 필요하며, 비전행정사사무소가 대리인 역할을 포함해 전 과정을 대행합니다.",
  },
  {
    q: "GPS 권한을 요청하지 않는 앱도 신고 대상인가요?",
    a: "IP 기반 지역 추정, Wi-Fi 기반 위치 파악도 위치정보 수집에 해당합니다. 명시적 GPS 권한이 없어도 신고 대상일 수 있으므로 검토가 필요합니다.",
  },
  {
    q: "신고 안 하면 어떤 제재를 받나요?",
    a: "3년 이하 징역 또는 3천만 원 이하 벌금 처분 대상이며, 방통위 시정명령으로 서비스 중단까지 이어질 수 있습니다.",
  },
  {
    q: "처리 기간은 얼마나 걸리나요?",
    a: "서류 완비 시 통상 2~4주. 외국법인은 아포스티유 등 자국 서류 준비 기간을 포함해 총 4~8주를 예상하는 것이 현실적입니다.",
  },
  {
    q: "신고 후 추가 의무가 있나요?",
    a: "연 1회 위치기반서비스 사업 실적 보고 의무가 있습니다. 관리책임자 변경 시에도 방통위에 변경 신고를 해야 합니다.",
  },
]

export default function LBSServicePage() {
  return (
    <main className="min-h-screen">
      <Header />

      <PageBreadcrumb
        items={[
          { label: "홈", path: "/" },
          { label: "서비스", path: "/#services" },
          { label: "위치기반서비스사업신고", path: "/services/location-based-service-business" },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-4 py-1.5 text-sm font-medium text-[#f36c24] mb-6">
            <Globe className="w-4 h-4" />
            IT·통신 인허가
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            위치기반서비스사업신고
            <span className="block text-[#f36c24]">한국 미등기 외국법인도 가능</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            앱·플랫폼으로 한국 이용자에게 위치 기반 서비스를 제공하는 외국 기업은
            한국 법인 유무와 관계없이 방통위에 사업 신고 의무가 있습니다.
            싱가포르·미국 법인 실제 처리 경험을 바탕으로 처음부터 끝까지 대행합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#f36c24] px-7 py-3.5 text-base font-semibold text-white hover:bg-[#d14904] transition-colors"
            >
              무료 상담 신청
            </Link>
            <a
              href="tel:010-2081-3408"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-7 py-3.5 text-base font-semibold text-slate-700 hover:border-[#f36c24] hover:text-[#f36c24] transition-colors"
            >
              <Phone className="w-4 h-4" />
              010-2081-3408
            </a>
          </div>
        </div>
      </section>

      {/* 신고 대상 */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-4">
            이런 서비스라면 신고 대상입니다
          </h2>
          <p className="text-center text-slate-500 mb-12">한국 이용자에게 위치정보를 활용한 서비스를 제공하는 모든 사업자</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {checkItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-5">
                <CheckCircle className="w-5 h-5 text-[#f36c24] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">
              <strong>미신고 시 제재:</strong> 3년 이하 징역 또는 3천만 원 이하 벌금 (위치정보법 제40조). 방통위 시정명령으로 서비스 중단까지 이어질 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 외국법인 실적 */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-4">
            한국 미등기 외국법인 실제 처리 사례
          </h2>
          <p className="text-center text-slate-500 mb-12">비전행정사사무소 처리 완료 사례 (2026년 5월)</p>
          <div className="rounded-2xl bg-white border border-slate-200 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-[#f36c24] mb-4">
                  실제 처리 완료
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">싱가포르 법인 — 위치기반서비스사업신고확인증 취득</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  한국 현지 법인 없이 싱가포르 본사 법인 명의로 한국 이용자에게 앱 서비스를 제공하던 전기통신업·소프트웨어 개발업체. 위치정보법 적용 사실을 뒤늦게 인지해 긴급 진행.
                </p>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#f36c24]" /> 싱가포르 법인등기(ACRA) 공증 + 한국어 번역</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#f36c24]" /> 국내 대리인으로 비전행정사사무소 지정</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#f36c24]" /> 방통위 보완 요청 2회 대응</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-[#f36c24]" /> 신청~확인증 수령 약 3주 완료</li>
                </ul>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 text-center">
                <div className="text-5xl font-black text-[#f36c24] mb-2">3주</div>
                <div className="text-sm text-slate-500 mb-6">신청~확인증 수령</div>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-500">사업자 국적</span>
                    <span className="font-semibold text-slate-800">싱가포르 (외국법인)</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-500">한국 법인 유무</span>
                    <span className="font-semibold text-slate-800">없음</span>
                  </div>
                  <div className="flex justify-between text-sm border-b border-slate-200 pb-2">
                    <span className="text-slate-500">신고 기관</span>
                    <span className="font-semibold text-slate-800">방송통신위원회</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500">결과</span>
                    <span className="font-semibold text-green-700">확인증 발급 완료</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 절차 */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-12">
            신고 절차 5단계
          </h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 hidden md:block" />
            <div className="space-y-8">
              {processSteps.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="shrink-0 w-16 h-16 rounded-full bg-[#f36c24] flex items-center justify-center text-white font-black text-lg z-10">
                    {step.step}
                  </div>
                  <div className="pt-3">
                    <h3 className="text-lg font-black text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 text-center mb-12">
            자주 묻는 질문
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div key={i} className="rounded-xl bg-white border border-slate-200 p-6">
                <div className="flex items-start gap-3">
                  <span className="shrink-0 text-[#f36c24] font-black text-lg">Q.</span>
                  <div>
                    <p className="font-semibold text-slate-900 mb-2">{item.q}</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f36c24]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
            위치기반서비스사업신고, 지금 바로 상담하세요
          </h2>
          <p className="text-orange-100 mb-8">
            한국 법인 유무와 관계없이 전 과정을 대행합니다. 첫 상담은 무료입니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-base font-semibold text-[#f36c24] hover:bg-orange-50 transition-colors"
            >
              무료 상담 신청
            </Link>
            <a
              href="tel:010-2081-3408"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white px-7 py-3.5 text-base font-semibold text-white hover:bg-orange-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              010-2081-3408
            </a>
          </div>
          <p className="mt-6 text-orange-100 text-sm">평일 09:30 ~ 17:30 (KST) · 무료상담</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
