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

  // Save to Notion DB (best-effort; env optional for local dev)
  let notionOk = false
  try {
    notionOk = await saveToNotion({ category, commonAnswers, categoryAnswers, contact })
  } catch (e) {
    console.error("[quote] notion failed:", e instanceof Error ? e.message : e)
  }

  // Notion CRM (unified)
  try {
    const { saveToCRM } = await import("@/lib/notion-crm")
    const commonSummary = Object.entries(body.common_answers || {}).map(([k,v]) => `${k}: ${v}`).join('\n')
    const catSummary = Object.entries(body.category_answers || {}).map(([k,v]) => `${k}: ${v}`).join('\n')
    await saveToCRM({
      brand: 'inhega', formType: 'quote',
      siteUrl: 'https://www.inhega.co.kr/quote',
      name: contact.name, email: contact.email, phone: contact.phone,
      serviceRaw: category?.name || slug,
      message: contact.company ? `회사: ${contact.company}` : undefined,
      quoteAnswersSummary: `[공통]\n${commonSummary}\n\n[${category?.name}]\n${catSummary}`.substring(0, 2000),
      rawPayload: body,
    })
  } catch (e) { console.error("[quote] CRM failed:", e) }

  if (!dbOk && !emailOk) {
    return NextResponse.json(
      { error: "저장과 메일 전송에 모두 실패했습니다. 잠시 후 다시 시도해주세요.", detail: dbError },
      { status: 500 }
    )
  }

  return NextResponse.json({ ok: true, dbOk, emailOk, notionOk })
}

async function saveToNotion({
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
  const token = process.env.NOTION_QUOTE_API_KEY
  const dbId = process.env.NOTION_QUOTE_DB_ID
  if (!token || !dbId) {
    console.warn("[quote] NOTION_QUOTE_API_KEY/DB_ID not set — skipping Notion")
    return false
  }

  const rt = (s: string | null | undefined) =>
    s ? { rich_text: [{ text: { content: String(s).slice(0, 1990) } }] } : { rich_text: [] }
  const title = (s: string) => ({ title: [{ text: { content: s.slice(0, 90) } }] })
  const select = (name?: string | null) => (name ? { select: { name } } : { select: null })
  const today = new Date().toISOString().slice(0, 10)

  // Build 세부 Q/A pairs from the category's question definitions so labels stay in sync.
  const qaPairs: { label: string; answer: string }[] = []
  for (const q of category.questions.slice(0, 5)) {
    qaPairs.push({ label: q.label, answer: categoryAnswers[q.id] || "" })
  }
  while (qaPairs.length < 5) qaPairs.push({ label: "", answer: "" })

  const properties: Record<string, unknown> = {
    "01고객명": title(contact.name || "이름없음"),
    "02카테고리": select(category.name),
    "03현재상황": select("신규"),
    "04접수일": { date: { start: today } },
    "05이메일": { email: contact.email || null },
    "06연락처": { phone_number: contact.phone || null },
    "07SNS": rt(contact.sns_id),
    "08회사명": rt(contact.company),
    "09주소": rt(contact.address),
    "10메시지": rt(contact.message),
    "11진행단계": select(commonAnswers.stage),
    "12사업형태": select(commonAnswers.business_type),
    "13장소확보": select(commonAnswers.place),
    "14희망진행방식": select(commonAnswers.scope),
    "15세부Q1라벨": rt(qaPairs[0].label),
    "16세부Q1답변": rt(qaPairs[0].answer),
    "17세부Q2라벨": rt(qaPairs[1].label),
    "18세부Q2답변": rt(qaPairs[1].answer),
    "19세부Q3라벨": rt(qaPairs[2].label),
    "20세부Q3답변": rt(qaPairs[2].answer),
    "21세부Q4라벨": rt(qaPairs[3].label),
    "22세부Q4답변": rt(qaPairs[3].answer),
    "23세부Q5라벨": rt(qaPairs[4].label),
    "24세부Q5답변": rt(qaPairs[4].answer),
  }

  const res = await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ parent: { database_id: dbId }, properties }),
  })
  if (!res.ok) {
    const data = await res.json().catch(() => ({}))
    console.error("[quote] notion API error:", res.status, data)
    return false
  }
  return true
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

