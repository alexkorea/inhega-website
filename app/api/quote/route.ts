import { NextResponse } from "next/server"
import * as nodemailer from "nodemailer"
import { getServiceClient } from "@/lib/supabase/server"
import { commonQuestions, getCategoryBySlug } from "@/content/quote-questions"

const SITE_NAME_KR = "인허가 (견적문의)"
const FROM_ADDRESS = "5000meter@gmail.com"
const RECIPIENTS = ["5000meter@gmail.com", "verliebten@naver.com"]

type Payload = {
  category_slug?: string
  category_name?: string
  common_answers?: Record<string, string>
  category_answers?: Record<string, string>
  contact?: {
    name?: string
    email?: string
    phone?: string
    sns_id?: string
    company?: string
    address?: string
    message?: string
  }
}

export async function POST(request: Request) {
  let body: Payload
  try {
    body = (await request.json()) as Payload
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 })
  }

  const slug = body.category_slug || ""
  const category = getCategoryBySlug(slug)
  if (!category) {
    return NextResponse.json({ error: "invalid category" }, { status: 400 })
  }

  const contact = body.contact || {}
  if (!contact.name || !contact.email || !contact.phone) {
    return NextResponse.json(
      { error: "이름·이메일·연락처는 필수입니다." },
      { status: 400 }
    )
  }

  const commonAnswers = body.common_answers || {}
  const categoryAnswers = body.category_answers || {}

  // Persist to Supabase (best-effort). If env not configured, still attempt email.
  let dbOk = false
  let dbError: string | null = null
  try {
    const supabase = getServiceClient()
    const { error } = await supabase.from("quote_inquiries").insert({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      sns_id: contact.sns_id || null,
      company: contact.company || null,
      address: contact.address || null,
      message: contact.message || null,
      category_slug: category.slug,
      category_name: category.name,
      common_answers: commonAnswers,
      category_answers: categoryAnswers,
    })
    if (error) {
      dbError = error.message
      console.error("[quote] supabase insert error:", error.message)
    } else {
      dbOk = true
    }
  } catch (e) {
    dbError = e instanceof Error ? e.message : "supabase unavailable"
    console.error("[quote] supabase failed:", dbError)
  }

  // Send email to both recipients (returns false if env not set or send failed)
  let emailOk = false
  try {
    emailOk = await sendEmail({ category, commonAnswers, categoryAnswers, contact })
  } catch (e) {
    console.error("[quote] email failed:", e instanceof Error ? e.message : e)
  }

  if (!dbOk && !emailOk) {
    return NextResponse.json(
      { error: "저장과 메일 전송에 모두 실패했습니다. 잠시 후 다시 시도해주세요.", detail: dbError },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true, dbOk, emailOk })
}

async function sendEmail({
  category,
  commonAnswers,
  categoryAnswers,
  contact,
}: {
  category: { slug: string; name: string; questions: { id: string; label: string }[] }
  commonAnswers: Record<string, string>
  categoryAnswers: Record<string, string>
  contact: NonNullable<Payload["contact"]>
}): Promise<boolean> {
  const appPassword = process.env.GMAIL_APP_PASSWORD
  if (!appPassword) {
    console.warn("[quote] GMAIL_APP_PASSWORD not set — skipping email")
    return false
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: FROM_ADDRESS, pass: appPassword },
  })

  // Build question→answer rows
  const commonRows = commonQuestions
    .map((q) => row(q.label, commonAnswers[q.id] || "-"))
    .join("")
  const categoryRows = category.questions
    .map((q) => row(q.label, categoryAnswers[q.id] || "-"))
    .join("")

  const contactRows = [
    ["이름", contact.name || "-"],
    ["이메일", contact.email || "-"],
    ["연락처", contact.phone || "-"],
    ["SNS 아이디", contact.sns_id || "-"],
    ["회사명", contact.company || "-"],
    ["주소", contact.address || "-"],
  ]
    .map(([k, v]) => row(k, v))
    .join("")

  const messageBlock = contact.message
    ? `<h3 style="margin:24px 0 8px;color:#0f172a;">추가 메시지</h3>
       <div style="padding:12px;border:1px solid #e2e8f0;border-radius:8px;background:#f8fafc;white-space:pre-wrap;">${escape(contact.message)}</div>`
    : ""

  const html = `
    <div style="font-family:'Apple SD Gothic Neo','Malgun Gothic',sans-serif;max-width:680px;margin:0 auto;color:#0f172a;">
      <h2 style="color:#1a56db;margin-bottom:4px;">[${SITE_NAME_KR}] 새 견적 문의</h2>
      <p style="color:#475569;margin-top:0;">카테고리: <strong>${escape(category.name)}</strong></p>

      <h3 style="margin:24px 0 8px;color:#0f172a;">연락처</h3>
      <table style="width:100%;border-collapse:collapse;">${contactRows}</table>

      <h3 style="margin:24px 0 8px;color:#0f172a;">공통 질문</h3>
      <table style="width:100%;border-collapse:collapse;">${commonRows}</table>

      <h3 style="margin:24px 0 8px;color:#0f172a;">${escape(category.name)} 세부 질문</h3>
      <table style="width:100%;border-collapse:collapse;">${categoryRows}</table>

      ${messageBlock}

      <p style="margin-top:28px;color:#94a3b8;font-size:12px;">
        이 메일은 inhega.co.kr 견적문의 폼에서 자동 발송되었습니다.
      </p>
    </div>
  `

  await transporter.sendMail({
    from: { name: `${contact.name || "고객"} via 인허가`, address: FROM_ADDRESS },
    to: RECIPIENTS.join(", "),
    replyTo: contact.email,
    subject: `[인허가 견적문의] ${category.name} - ${contact.name || "고객"}`,
    html,
  })
  return true
}

function row(label: string, value: string) {
  return `<tr>
    <td style="padding:8px 12px;font-weight:600;border:1px solid #e2e8f0;background:#f8fafc;width:34%;vertical-align:top;">${escape(label)}</td>
    <td style="padding:8px 12px;border:1px solid #e2e8f0;vertical-align:top;">${escape(value || "-")}</td>
  </tr>`
}

function escape(s: string) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

