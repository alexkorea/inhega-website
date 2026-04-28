"use client"

import { useState } from "react"
import Link from "next/link"

const services = [
  { value: "국제물류주선업", label: "국제물류주선업", icon: "🚢" },
  { value: "환전업", label: "환전업", icon: "💱" },
  { value: "식품제조가공업", label: "식품제조가공업", icon: "🍽️" },
  { value: "통신판매업", label: "통신판매업", icon: "🛒" },
  { value: "화물운송사업", label: "화물운송사업", icon: "🚛" },
  { value: "화장품책임판매업", label: "화장품책임판매업", icon: "💄" },
  { value: "건설업", label: "건설업", icon: "🏗️" },
  { value: "대부업", label: "대부업", icon: "🏦" },
  { value: "의료기기판매업", label: "의료기기판매업", icon: "🏥" },
  { value: "벤처기업 인증", label: "벤처기업 인증", icon: "🚀" },
  { value: "여성기업 인증", label: "여성기업 인증", icon: "👩‍💼" },
  { value: "공장등록", label: "공장등록", icon: "🏭" },
  { value: "외국인도시민박업", label: "외국인도시민박업", icon: "🏠" },
  { value: "건축물 용도변경", label: "건축물 용도변경", icon: "🏢" },
  { value: "담배수입판매업", label: "담배수입판매업", icon: "🚬" },
  { value: "기타", label: "기타", icon: "💬" },
]

const priorityCountries = [
  { value: "미국", label: "🇺🇸 미국" },
  { value: "중국", label: "🇨🇳 중국" },
  { value: "일본", label: "🇯🇵 일본" },
  { value: "베트남", label: "🇻🇳 베트남" },
  { value: "캐나다", label: "🇨🇦 캐나다" },
  { value: "영국", label: "🇬🇧 영국" },
]

const otherCountries = [
  { value: "뉴질랜드", label: "🇳🇿 뉴질랜드" },
  { value: "대만", label: "🇹🇼 대만" },
  { value: "독일", label: "🇩🇪 독일" },
  { value: "러시아", label: "🇷🇺 러시아" },
  { value: "말레이시아", label: "🇲🇾 말레이시아" },
  { value: "몽골", label: "🇲🇳 몽골" },
  { value: "싱가포르", label: "🇸🇬 싱가포르" },
  { value: "인도네시아", label: "🇮🇩 인도네시아" },
  { value: "우즈베키스탄", label: "🇺🇿 우즈베키스탄" },
  { value: "태국", label: "🇹🇭 태국" },
  { value: "필리핀", label: "🇵🇭 필리핀" },
  { value: "호주", label: "🇦🇺 호주" },
  { value: "기타", label: "기타" },
]

export function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [inquiryId, setInquiryId] = useState("")

  function toggleService(value: string) {
    setSelectedServices((prev) =>
      prev.includes(value) ? prev.filter((s) => s !== value) : [...prev, value]
    )
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (selectedServices.length === 0) return
    setStatus("sending")
    const form = e.currentTarget
    const snsType = (form.elements.namedItem("snsType") as HTMLSelectElement).value
    const snsId = (form.elements.namedItem("snsId") as HTMLInputElement).value
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
      snsType: snsType || undefined,
      snsId: snsId || undefined,
      nationality: (form.elements.namedItem("nationality") as HTMLSelectElement).value,
      services: selectedServices,
    }
    try {
      const res = await fetch("/api/contact-step1", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        const result = await res.json()
        setInquiryId(result.inquiryId || "")
        setStatus("sent")
      } else setStatus("error")
    } catch { setStatus("error") }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-900 mb-3">상담신청이 접수되었습니다.</h2>
        <p className="text-slate-600 mb-4">
          {selectedServices.join(', ')} 신청을 해주셨습니다.
          <br />좀 더 자세한 정보를 입력해 주시면 정확한 상담이 가능합니다.
        </p>

        <Link
          href={`/contact/step2?service=${encodeURIComponent(selectedServices.join(','))}&inquiryId=${inquiryId}`}
          className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 rounded-lg font-semibold transition-colors text-lg mb-2"
        >
          상세정보 입력하기 →
        </Link>
        <p className="text-sm text-slate-400 mb-6">약 1분 소요</p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-6 mb-6 text-left">
          <h3 className="font-bold text-blue-900 text-lg mb-3">비전행정사사무소</h3>
          <ul className="space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 8년+ 인허가 전문 실무 경험</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 업종별 맞춤 인허가 컨설팅</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 서류 준비부터 접수·수령까지 원스톱 대행</li>
            <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 전국 어디서나 온라인 상담 가능</li>
          </ul>
        </div>

        <div className="bg-slate-50 rounded-lg p-5 space-y-2">
          <div className="flex items-center justify-center gap-2"><span className="text-sm text-slate-500">전화:</span><span className="font-medium text-slate-900">02-363-2251</span></div>
          <div className="flex items-center justify-center gap-2"><span className="text-sm text-slate-500">카카오톡:</span><span className="font-medium text-slate-900">alexkorea</span></div>
          <div className="flex items-center justify-center gap-2"><span className="text-sm text-slate-500">이메일:</span><span className="font-medium text-slate-900">5000meter@gmail.com</span></div>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900 mb-2">⚡ 30초 빠른 신청</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">이름 <span className="text-red-500">*</span></label>
          <input name="name" type="text" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="홍길동" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">이메일 <span className="text-red-500">*</span></label>
          <input name="email" type="email" required className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="example@email.com" />
          <p className="text-xs text-slate-400 mt-1">맞춤 상담 양식 링크를 발송해드립니다</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">연락처 (전화번호)</label>
          <input name="contact" type="text" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="010-1234-5678" />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">SNS ID</label>
          <div className="flex gap-2">
            <select name="snsType" className="rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
              <option value="">선택</option>
              <option value="kakaotalk">카카오톡</option>
              <option value="wechat">WeChat</option>
              <option value="line">LINE</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
            <input name="snsId" type="text" className="flex-1 rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="SNS ID 입력" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">국적</label>
          <select name="nationality" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option value="">선택해주세요</option>
            {priorityCountries.map((c) => (<option key={c.value} value={c.value}>{c.label}</option>))}
            <option disabled>──────────</option>
            {otherCountries.map((c) => (<option key={c.value} value={c.value}>{c.label}</option>))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-700 mb-3">희망 업무 <span className="text-red-500">*</span> <span className="text-slate-400 font-normal text-xs">(복수 선택 가능)</span></label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((svc) => (
              <button
                key={svc.value}
                type="button"
                onClick={() => toggleService(svc.value)}
                className={`relative flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all ${
                  selectedServices.includes(svc.value)
                    ? "border-blue-600 bg-blue-50 shadow-sm"
                    : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span className="text-xl">{svc.icon}</span>
                <div className="font-semibold text-slate-900 text-sm">{svc.label}</div>
                {selectedServices.includes(svc.value) && (
                  <div className="absolute top-2 right-2 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={status === "sending" || selectedServices.length === 0}
          className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed"
        >
          {status === "sending" ? "처리 중..." : "신청하기"}
        </button>

        {status === "error" && (
          <p className="text-red-500 text-sm text-center">전송에 실패했습니다. 잠시 후 다시 시도해주세요.</p>
        )}
      </form>
    </div>
  )
}
