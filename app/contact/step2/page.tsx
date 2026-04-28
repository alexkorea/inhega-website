"use client"

import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBreadcrumb } from "@/components/page-breadcrumb"

type FieldDef = {
  name: string
  label: string
  type: "text" | "select" | "textarea" | "radio"
  options?: string[]
  placeholder?: string
  required?: boolean
}

// Default fields for services without custom fields
const defaultFields: FieldDef[] = [
  { name: "officeLocation", label: "사업장 소재지", type: "text", placeholder: "예: 서울 강남구", required: true },
  { name: "hasBizReg", label: "사업자등록 유무", type: "radio", options: ["예", "아니오", "준비 중"], required: true },
  { name: "desiredTimeline", label: "희망 처리 시기", type: "select", options: ["1개월 이내", "1~3개월", "3~6개월", "6개월 이상", "미정"], required: false },
  { name: "additionalInquiry", label: "추가 문의사항", type: "textarea", placeholder: "궁금하신 내용을 자유롭게 작성해주세요.", required: false },
]

const serviceFields: Record<string, FieldDef[]> = {
  "식품제조가공업": [
    { name: "productType", label: "제조 품목", type: "text", placeholder: "예: 떡, 음료, 소스, 빵류", required: true },
    { name: "facilityLocation", label: "시설 소재지", type: "text", placeholder: "예: 경기도 이천시", required: true },
    { name: "haccpCert", label: "HACCP 인증 여부", type: "radio", options: ["예", "아니오", "검토 중"], required: true },
    { name: "hasFactory", label: "공장 확보 여부", type: "radio", options: ["예", "아니오", "물색 중"], required: true },
  ],
  "통신판매업": [
    { name: "salesProduct", label: "판매 품목", type: "text", placeholder: "예: 의류, 전자제품, 식품", required: true },
    { name: "hasBizReg", label: "사업자등록 유무", type: "radio", options: ["예", "아니오", "준비 중"], required: true },
    { name: "hasEscrow", label: "에스크로 가입 여부", type: "radio", options: ["예", "아니오", "모름"], required: false },
  ],
  "화장품책임판매업": [
    { name: "hasManufacturing", label: "제조 위탁 여부", type: "radio", options: ["예 (OEM/ODM)", "아니오 (자체 제조)", "검토 중"], required: true },
    { name: "cosmeticType", label: "품목 유형", type: "text", placeholder: "예: 기초화장품, 색조, 기능성", required: true },
    { name: "importDomestic", label: "수입/국내 구분", type: "radio", options: ["수입", "국내 제조", "둘 다"], required: true },
  ],
  "화물운송사업": [
    { name: "vehicleCount", label: "차량 대수", type: "text", placeholder: "예: 5대", required: true },
    { name: "vehicleType", label: "차량 종류", type: "text", placeholder: "예: 1톤, 5톤, 트레일러", required: true },
    { name: "operationArea", label: "영업 지역", type: "text", placeholder: "예: 수도권, 전국", required: false },
  ],
  "환전업": [
    { name: "businessLocation", label: "영업 장소 (위치)", type: "text", placeholder: "예: 서울 명동, 인천공항 인근", required: true },
    { name: "estimatedVolume", label: "예상 거래 규모", type: "select", options: ["월 1억 원 미만", "월 1~5억 원", "월 5~10억 원", "월 10억 원 이상"], required: false },
  ],
  "건설업": [
    { name: "constructionType", label: "업종", type: "select", options: ["토건", "토목", "전문건설업"], required: true },
    { name: "capitalSize", label: "자본금 규모", type: "select", options: ["5천만 원 미만", "5천만 ~ 1억 원", "1억 ~ 5억 원", "5억 원 이상"], required: true },
    { name: "hasTechStaff", label: "기술인력 보유", type: "radio", options: ["예", "아니오", "채용 예정"], required: true },
  ],
  "기타": [
    { name: "inquiry", label: "문의 내용", type: "textarea", placeholder: "궁금하신 내용을 자유롭게 작성해주세요.", required: true },
  ],
}

// Services that use default fields (not listed in serviceFields above except 기타)
const customFieldServices = new Set(Object.keys(serviceFields))

function getFieldsForService(svc: string): FieldDef[] {
  if (serviceFields[svc]) return serviceFields[svc]
  if (svc === "기타") return serviceFields["기타"]
  return defaultFields
}

function getFieldsForServices(serviceList: string[]): { service: string; fields: FieldDef[] }[] {
  const sections: { service: string; fields: FieldDef[] }[] = []
  const usedFieldNames = new Set<string>()
  for (const svc of serviceList) {
    const allFields = getFieldsForService(svc)
    const uniqueFields = allFields.filter((f) => {
      if (usedFieldNames.has(f.name)) return false
      usedFieldNames.add(f.name)
      return true
    })
    if (uniqueFields.length > 0) sections.push({ service: svc, fields: uniqueFields })
  }
  return sections
}

function Step2Form() {
  const searchParams = useSearchParams()
  const serviceParam = searchParams.get("service") || ""
  const inquiryId = searchParams.get("inquiryId") || ""
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [formData, setFormData] = useState<Record<string, string>>({})

  const serviceList = serviceParam.split(",").map((s) => decodeURIComponent(s).trim()).filter(Boolean)
  const sections = getFieldsForServices(serviceList.length > 0 ? serviceList : ["기타"])
  const serviceLabel = serviceList.length > 0 ? serviceList.join(" / ") : "기타"

  function updateField(name: string, value: string) {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    const form = e.currentTarget
    const additionalMessage = (form.elements.namedItem("additionalMessage") as HTMLTextAreaElement)?.value || ""
    try {
      const res = await fetch("/api/contact-step2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inquiryId, service: serviceLabel, details: { ...formData }, additionalMessage }),
      })
      if (res.ok) setStatus("sent")
      else setStatus("error")
    } catch { setStatus("error") }
  }

  if (status === "sent") {
    return (
      <main>
        <Header />
        <PageBreadcrumb items={[{ label: "상담문의", path: "/contact" }, { label: "상담 완료", path: "/contact/step2" }]} />
        <section className="py-24">
          <div className="max-w-xl mx-auto px-6 text-center">
            <div className="rounded-xl border border-slate-200 bg-white p-10 shadow-sm">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">상담 신청이 완료되었습니다</h2>
              <p className="text-slate-600 mb-6">영업일 기준 1일 이내 연락드리겠습니다.</p>
              <div className="bg-slate-50 rounded-lg p-5 mb-6 space-y-2">
                <div className="flex items-center justify-center gap-2"><span className="text-sm text-slate-500">전화:</span><span className="font-medium text-slate-900">02-363-2251</span></div>
                <div className="flex items-center justify-center gap-2"><span className="text-sm text-slate-500">카카오톡:</span><span className="font-medium text-slate-900">alexkorea</span></div>
              </div>
              <Link href="/" className="inline-flex items-center justify-center bg-[#f36c24] hover:bg-[#d14904] text-white px-8 h-11 rounded-lg font-semibold transition-colors">홈으로 돌아가기</Link>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main>
      <Header />
      <PageBreadcrumb items={[{ label: "상담문의", path: "/contact" }, { label: "상세 정보", path: "/contact/step2" }]} />
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f36c24] text-white flex items-center justify-center text-sm font-bold">1</div>
              <span className="text-sm font-medium text-slate-900">기본 정보</span>
            </div>
            <div className="w-8 h-px bg-slate-300" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#f36c24] text-white flex items-center justify-center text-sm font-bold">2</div>
              <span className="text-sm font-medium text-slate-900">상세 정보</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              {serviceList.map((svc) => (
                <span key={svc} className="inline-flex items-center px-3 py-1 rounded-full bg-[#ffe6d5] text-[#9a3412] text-xs font-medium">{svc}</span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-1">상세 정보 입력</h2>
            <p className="text-sm text-slate-500 mb-6">선택하신 서비스에 맞는 상세 정보를 입력해주세요.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {sections.map((section, sectionIdx) => (
                <div key={section.service}>
                  {sections.length > 1 && (
                    <div className={sectionIdx > 0 ? "mt-6 pt-6 border-t border-slate-200" : ""}>
                      <h3 className="text-sm font-semibold text-[#9a3412] mb-4">{section.service}</h3>
                    </div>
                  )}
                  {section.fields.map((field) => (
                    <div key={field.name} className="mb-4">
                      <label className="block text-sm font-medium text-slate-700 mb-1">
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      {field.type === "text" && (
                        <input type="text" required={field.required} placeholder={field.placeholder} value={formData[field.name] || ""} onChange={(e) => updateField(field.name, e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#f36c24] focus:outline-none focus:ring-1 focus:ring-[#f36c24]" />
                      )}
                      {field.type === "select" && (
                        <select required={field.required} value={formData[field.name] || ""} onChange={(e) => updateField(field.name, e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#f36c24] focus:outline-none focus:ring-1 focus:ring-[#f36c24]">
                          <option value="">선택해주세요</option>
                          {field.options?.map((opt) => (<option key={opt} value={opt}>{opt}</option>))}
                        </select>
                      )}
                      {field.type === "radio" && (
                        <div className="flex flex-wrap gap-3 mt-1">
                          {field.options?.map((opt) => (
                            <label key={opt} className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 cursor-pointer transition-all text-sm ${formData[field.name] === opt ? "border-[#f36c24] bg-[#ffe6d5] text-[#9a3412]" : "border-slate-200 hover:border-slate-300 text-slate-700"}`}>
                              <input type="radio" name={field.name} value={opt} checked={formData[field.name] === opt} onChange={(e) => updateField(field.name, e.target.value)} className="sr-only" required={field.required} />
                              {opt}
                            </label>
                          ))}
                        </div>
                      )}
                      {field.type === "textarea" && (
                        <textarea required={field.required} placeholder={field.placeholder} rows={5} value={formData[field.name] || ""} onChange={(e) => updateField(field.name, e.target.value)} className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#f36c24] focus:outline-none focus:ring-1 focus:ring-[#f36c24] resize-none" />
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">추가 메시지 <span className="text-slate-400 font-normal">(선택사항)</span></label>
                <textarea name="additionalMessage" rows={3} placeholder="추가적으로 전달하고 싶은 내용이 있으시면 작성해주세요." className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:border-[#f36c24] focus:outline-none focus:ring-1 focus:ring-[#f36c24] resize-none" />
              </div>

              <button type="submit" disabled={status === "sending"} className="w-full rounded-lg bg-[#f36c24] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#d14904] disabled:bg-[#f36c24]/60">
                {status === "sending" ? "전송 중..." : "상담 신청 완료"}
              </button>

              {status === "error" && (
                <p className="text-red-500 text-sm text-center">전송에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해주세요.</p>
              )}
              <p className="text-xs text-slate-400 text-center">제출하신 정보는 상담 목적으로만 사용됩니다.</p>
            </form>
          </div>

          <div className="mt-4 text-center">
            <Link href="/contact" className="text-sm text-slate-500 hover:text-[#f36c24] transition-colors">← 이전 단계로 돌아가기</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default function Step2Page() {
  return (
    <Suspense fallback={
      <main>
        <Header />
        <section className="py-24">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4" />
              <div className="h-4 bg-gray-200 rounded w-64 mx-auto" />
            </div>
          </div>
        </section>
        <Footer />
      </main>
    }>
      <Step2Form />
    </Suspense>
  )
}
