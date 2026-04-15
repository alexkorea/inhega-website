"use client"

import { useMemo, useState } from "react"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import {
  categories,
  commonQuestions,
  getCategoryBySlug,
  type Category,
} from "@/content/quote-questions"

type ContactInfo = {
  name: string
  email: string
  phone: string
  sns_id: string
  company: string
  address: string
  message: string
}

type AnswerMap = Record<string, string>

type Status = "idle" | "sending" | "sent" | "error"

const stepLabels = ["카테고리", "공통질문", "세부질문", "연락처", "완료"] as const

export function QuoteWizard() {
  const [step, setStep] = useState(0)
  const [categorySlug, setCategorySlug] = useState<string>("")
  const [commonAnswers, setCommonAnswers] = useState<AnswerMap>({})
  const [categoryAnswers, setCategoryAnswers] = useState<AnswerMap>({})
  const [contact, setContact] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
    sns_id: "",
    company: "",
    address: "",
    message: "",
  })
  const [status, setStatus] = useState<Status>("idle")
  const [errorMsg, setErrorMsg] = useState<string>("")

  const category: Category | undefined = useMemo(
    () => getCategoryBySlug(categorySlug),
    [categorySlug]
  )

  const canGoNext = useMemo(() => {
    if (step === 0) return Boolean(categorySlug)
    if (step === 1)
      return commonQuestions.every((q) => Boolean(commonAnswers[q.id]))
    if (step === 2)
      return Boolean(category) && category!.questions.every((q) => Boolean(categoryAnswers[q.id]))
    if (step === 3) return Boolean(contact.name && contact.email && contact.phone)
    return false
  }, [step, categorySlug, commonAnswers, category, categoryAnswers, contact])

  function goNext() {
    if (!canGoNext) return
    if (step < 3) setStep(step + 1)
    else handleSubmit()
  }

  function goBack() {
    if (step > 0) setStep(step - 1)
  }

  async function handleSubmit() {
    if (!category) return
    setStatus("sending")
    setErrorMsg("")
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category_slug: category.slug,
          category_name: category.name,
          common_answers: commonAnswers,
          category_answers: categoryAnswers,
          contact,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || "제출 실패")
      }
      setStatus("sent")
      setStep(4)
    } catch (e) {
      setStatus("error")
      setErrorMsg(e instanceof Error ? e.message : "전송 중 오류가 발생했습니다.")
    }
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Progress */}
      <ol className="mb-10 flex items-center justify-between">
        {stepLabels.map((label, i) => {
          const active = i === step
          const done = i < step
          return (
            <li key={label} className="flex-1">
              <div className="flex flex-col items-center">
                <div
                  className={[
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors",
                    done
                      ? "border-blue-600 bg-blue-600 text-white"
                      : active
                      ? "border-blue-600 bg-white text-blue-600"
                      : "border-slate-300 bg-white text-slate-400",
                  ].join(" ")}
                >
                  {done ? <Check className="h-5 w-5" /> : i + 1}
                </div>
                <span
                  className={[
                    "mt-2 text-xs",
                    active || done ? "text-slate-900 font-medium" : "text-slate-400",
                  ].join(" ")}
                >
                  {label}
                </span>
              </div>
            </li>
          )
        })}
      </ol>

      {/* Step body */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        {step === 0 && (
          <CategoryStep selected={categorySlug} onSelect={setCategorySlug} />
        )}
        {step === 1 && (
          <QuestionsStep
            title="공통 질문"
            subtitle="먼저 공통 4가지 문항에 답해주세요."
            questions={commonQuestions}
            answers={commonAnswers}
            onChange={(id, val) => setCommonAnswers((p) => ({ ...p, [id]: val }))}
          />
        )}
        {step === 2 && category && (
          <QuestionsStep
            title={`${category.name} 관련 질문`}
            subtitle="선택하신 카테고리에 대한 세부 문항입니다."
            questions={category.questions}
            answers={categoryAnswers}
            onChange={(id, val) => setCategoryAnswers((p) => ({ ...p, [id]: val }))}
          />
        )}
        {step === 3 && (
          <ContactStep contact={contact} onChange={setContact} />
        )}
        {step === 4 && (
          <DoneStep onReset={resetAll} />
        )}

        {/* Nav */}
        {step < 4 && (
          <div className="mt-10 flex items-center justify-between border-t border-slate-200 pt-6">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0 || status === "sending"}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
              이전
            </button>

            <div className="flex items-center gap-3">
              {status === "error" && (
                <span className="text-sm text-red-600">{errorMsg}</span>
              )}
              <button
                type="button"
                onClick={goNext}
                disabled={!canGoNext || status === "sending"}
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
              >
                {step === 3
                  ? status === "sending"
                    ? "전송 중..."
                    : "견적 문의 제출"
                  : "다음"}
                {step < 3 && <ChevronRight className="h-4 w-4" />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  function resetAll() {
    setStep(0)
    setCategorySlug("")
    setCommonAnswers({})
    setCategoryAnswers({})
    setContact({
      name: "",
      email: "",
      phone: "",
      sns_id: "",
      company: "",
      address: "",
      message: "",
    })
    setStatus("idle")
    setErrorMsg("")
  }
}

function CategoryStep({
  selected,
  onSelect,
}: {
  selected: string
  onSelect: (slug: string) => void
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
        어떤 업무를 문의하시나요?
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        해당 카테고리를 선택해 주세요. 선택한 업무에 맞는 맞춤형 질문을 드립니다.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {categories.map((c) => {
          const active = selected === c.slug
          return (
            <button
              key={c.slug}
              type="button"
              onClick={() => onSelect(c.slug)}
              className={[
                "rounded-xl border-2 p-4 text-left text-sm font-medium transition-all",
                active
                  ? "border-blue-600 bg-blue-50 text-blue-700 shadow-sm"
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50",
              ].join(" ")}
            >
              <div className="flex items-center justify-between gap-2">
                <span>{c.name}</span>
                {active && <Check className="h-4 w-4 shrink-0" />}
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function QuestionsStep({
  title,
  subtitle,
  questions,
  answers,
  onChange,
}: {
  title: string
  subtitle: string
  questions: { id: string; label: string; options: string[] }[]
  answers: AnswerMap
  onChange: (id: string, value: string) => void
}) {
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{title}</h2>
      <p className="mt-2 text-sm text-slate-600">{subtitle}</p>
      <div className="mt-8 space-y-8">
        {questions.map((q, i) => (
          <fieldset key={q.id}>
            <legend className="text-sm font-semibold text-slate-900">
              Q{i + 1}. {q.label}
            </legend>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {q.options.map((opt) => {
                const active = answers[q.id] === opt
                return (
                  <label
                    key={opt}
                    className={[
                      "flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-3 text-sm transition-colors",
                      active
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300",
                    ].join(" ")}
                  >
                    <input
                      type="radio"
                      name={q.id}
                      value={opt}
                      checked={active}
                      onChange={(e) => onChange(q.id, e.target.value)}
                      className="h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span>{opt}</span>
                  </label>
                )
              })}
            </div>
          </fieldset>
        ))}
      </div>
    </div>
  )
}

function ContactStep({
  contact,
  onChange,
}: {
  contact: ContactInfo
  onChange: (next: ContactInfo) => void
}) {
  function set<K extends keyof ContactInfo>(key: K, value: ContactInfo[K]) {
    onChange({ ...contact, [key]: value })
  }
  return (
    <div>
      <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">연락처 정보</h2>
      <p className="mt-2 text-sm text-slate-600">
        답변 확인 후 연락드리기 위한 정보입니다. 이름·이메일·연락처는 필수입니다.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <Field label="이름" required>
          <input
            type="text"
            required
            value={contact.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="홍길동"
            className={inputCls}
          />
        </Field>
        <Field label="이메일" required>
          <input
            type="email"
            required
            value={contact.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="example@email.com"
            className={inputCls}
          />
        </Field>
        <Field label="연락처" required>
          <input
            type="tel"
            required
            value={contact.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="010-1234-5678"
            className={inputCls}
          />
        </Field>
        <Field label="SNS 아이디 (선택)">
          <input
            type="text"
            value={contact.sns_id}
            onChange={(e) => set("sns_id", e.target.value)}
            placeholder="카카오/인스타/위챗 등"
            className={inputCls}
          />
        </Field>
        <Field label="회사명 (선택)">
          <input
            type="text"
            value={contact.company}
            onChange={(e) => set("company", e.target.value)}
            placeholder="회사 또는 단체"
            className={inputCls}
          />
        </Field>
        <Field label="주소 (선택)">
          <input
            type="text"
            value={contact.address}
            onChange={(e) => set("address", e.target.value)}
            placeholder="시/도 또는 상세 주소"
            className={inputCls}
          />
        </Field>
        <div className="sm:col-span-2">
          <Field label="추가로 알려주실 내용 (선택)">
            <textarea
              rows={4}
              value={contact.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="예상 일정, 특별한 상황, 질문 등을 자유롭게 적어주세요."
              className={inputCls}
            />
          </Field>
        </div>
      </div>
    </div>
  )
}

function DoneStep({ onReset }: { onReset: () => void }) {
  return (
    <div className="py-8 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
        <Check className="h-8 w-8 text-green-600" />
      </div>
      <h2 className="text-2xl font-bold text-slate-900">견적 문의가 접수되었습니다</h2>
      <p className="mt-3 text-slate-600">
        접수 내용을 검토한 뒤, 영업일 기준 1~2일 이내에 연락드리겠습니다.
      </p>
      <button
        type="button"
        onClick={onReset}
        className="mt-8 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
      >
        새 문의 작성하기
      </button>
    </div>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  )
}

const inputCls =
  "block w-full rounded-lg border border-slate-300 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
