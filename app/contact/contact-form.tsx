"use client"

import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: "",
  })

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert("상담 문의가 접수되었습니다.")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <h2 className="text-2xl font-bold text-slate-900">상담 문의</h2>
      <p className="mt-2 text-sm text-slate-600">
        아래 양식을 작성해 주시면 빠르게 연락드리겠습니다.
      </p>

      <div className="mt-8 space-y-6">
        {/* 이름 */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-slate-700"
          >
            이름
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="홍길동"
          />
        </div>

        {/* 이메일 */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-slate-700"
          >
            이메일
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="example@email.com"
          />
        </div>

        {/* 전화번호 */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-slate-700"
          >
            전화번호
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="010-1234-5678"
          />
        </div>

        {/* 문의 유형 */}
        <div>
          <label
            htmlFor="type"
            className="block text-sm font-medium text-slate-700"
          >
            문의 유형
          </label>
          <select
            id="type"
            name="type"
            required
            value={formData.type}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="" disabled>
              문의 유형을 선택해 주세요
            </option>
            <option value="인허가 상담">인허가 상담</option>
            <option value="서류 준비 대행">서류 준비 대행</option>
            <option value="절차 안내">절차 안내</option>
            <option value="기타">기타</option>
          </select>
        </div>

        {/* 메시지 */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700"
          >
            메시지
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="문의하실 내용을 자유롭게 작성해 주세요."
          />
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          상담 문의하기
        </button>
      </div>
    </form>
  )
}
