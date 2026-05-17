import { NextRequest, NextResponse } from "next/server"

const SITE_NAME = "인허가"
const RESEND_API_KEY = process.env.RESEND_API_KEY || ""
const ADMIN_EMAIL = "5000meter@gmail.com"
const FROM_EMAIL = "인허가 <noreply@ko-visas.com>"
const TELEGRAM_CHAT_ID = "-5295922532"

// In-memory rate limiter: 3 submissions per IP per 5 minutes
const rateMap = new Map<string, { count: number; reset: number }>()
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateMap.get(ip)
  if (!entry || now > entry.reset) {
    rateMap.set(ip, { count: 1, reset: now + 5 * 60 * 1000 })
    return false
  }
  if (entry.count >= 3) return true
  entry.count++
  return false
}

async function sendAdminEmail(fields: Record<string, string>, senderName: string, senderEmail: string) {
  if (!RESEND_API_KEY) return
  const rows = Object.entries(fields)
    .map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f9f9f9;">${label}</td><td style="padding:8px 12px;border:1px solid #ddd;">${value || "-"}</td></tr>`)
    .join("\n")
  const html = `<div style="font-family:'Apple SD Gothic Neo',sans-serif;max-width:600px;margin:0 auto;">
    <h2 style="color:#235099;">[${SITE_NAME}] 새 상담 신청</h2>
    <table style="width:100%;border-collapse:collapse;margin:16px 0;">${rows}</table>
    <p style="color:#666;font-size:13px;">인허가.co.kr 상담 폼 자동 발송</p>
  </div>`
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [ADMIN_EMAIL],
      reply_to: senderEmail || ADMIN_EMAIL,
      subject: `[${SITE_NAME}] 새 상담 신청 - ${senderName || "고객"}`,
      html,
    }),
  })
}

async function sendCustomerEmail(name: string, email: string) {
  if (!RESEND_API_KEY || !email) return
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [email],
      subject: `[인허가] 상담 신청이 접수되었습니다.`,
      html: `<div style="font-family:'Apple SD Gothic Neo',sans-serif;max-width:600px;margin:0 auto"><div style="background:#235099;padding:28px;text-align:center"><h1 style="color:#fff;margin:0;font-size:22px">인허가 행정 전문</h1></div><div style="padding:28px"><p style="font-size:16px;color:#333">${name}님, 상담 신청이 접수되었습니다.</p><p style="color:#555;line-height:1.7">담당 행정사가 영업일 기준 24시간 이내 회신드리겠습니다.</p><div style="background:#f8f9fb;padding:16px;border-radius:8px;margin-top:20px"><p style="margin:0;color:#235099"><b>비전행정사사무소</b></p><p style="margin:6px 0 0;color:#666;font-size:14px">전화: 02-363-2251 / 이메일: 5000meter@gmail.com</p></div></div></div>`,
    }),
  })
}

const NOTION_KEY = process.env.NOTION_API_KEY || ""
const NOTION_DB = "34c5bd7c-ac5a-8166-b4a2-e74a6ccf2a6b"

async function saveToNotion(data: Record<string, string>) {
  if (!NOTION_KEY) return
  const today = new Date().toISOString().slice(0, 10)
  await fetch("https://api.notion.com/v1/pages", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + NOTION_KEY,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      parent: { database_id: NOTION_DB },
      properties: {
        "이름": { title: [{ text: { content: data.name || "" } }] },
        "이메일": { email: data.email || null },
        "연락처": { phone_number: data.phone || null },
        "서비스": { rich_text: [{ text: { content: data.service || data.type || "" } }] },
        "메시지": { rich_text: [{ text: { content: data.message || "" } }] },
        "접수일": { date: { start: today } },
        "상태": { select: { name: "신규" } },
      },
    }),
  })
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown"
    if (isRateLimited(ip)) {
      return NextResponse.json({ success: false, error: "Too many requests" }, { status: 429 })
    }

    const body = await request.json()

    // Honeypot check
    if (body.website && String(body.website).trim() !== "") {
      return NextResponse.json({ success: true })
    }

    const { name, email, phone, service, type, message } = body
    if (!name?.trim() || !email?.trim()) {
      return NextResponse.json({ success: false, error: "필수 항목 누락" }, { status: 400 })
    }
    if (!email.includes("@")) {
      return NextResponse.json({ success: false, error: "유효하지 않은 이메일" }, { status: 400 })
    }

    const serviceType = service || type || "-"

    const tgText = `[인허가.co.kr] 새 상담 문의\n\n이름: ${name || "-"}\n이메일: ${email || "-"}\n전화번호: ${phone || "-"}\n문의유형: ${serviceType}\n메시지: ${String(message || "-").slice(0, 300)}`

    const tgToken = process.env.TELEGRAM_INQUIRY_BOT_TOKEN || "8748564690:AAEGsXxcfqrHmGue8lkqUaa2E0Q8CDCY-Eo"
    const telegramPromise = fetch(
      `https://api.telegram.org/bot${tgToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: tgText }),
      }
    ).catch((e) => console.error("Telegram error:", e))

    const adminEmailPromise = sendAdminEmail({
      "이름": name, "이메일": email, "전화번호": phone, "문의유형": serviceType, "메시지": message,
    }, name, email).catch((e) => console.error("Admin email error:", e))

    const customerEmailPromise = sendCustomerEmail(name, email).catch((e) => console.error("Customer email error:", e))

    const notionPromise = saveToNotion(body).catch((e) => console.error("Notion error:", e))

    const { saveToCRM } = await import("@/lib/notion-crm")
    const crmPromise = saveToCRM({
      brand: 'inhega', formType: 'contact',
      siteUrl: 'https://www.inhega.co.kr/contact',
      name, email, phone,
      serviceRaw: serviceType, message,
      rawPayload: body,
    }).catch((e) => console.error("CRM error:", e))

    // formconnection-crm intake (보스 msg 13599·13668·13673 자동 업무관제)
    // → 인허가 견적문의 접수 DB (Workspace A) + AI 분류 + 중복 체크
    const intakePromise = fetch(
      "https://formconnection-crm.vercel.app/api/intake",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(process.env.INTAKE_API_KEY ? { "x-api-key": process.env.INTAKE_API_KEY } : {}),
        },
        body: JSON.stringify({
          site: "inhega.co.kr",
          language: "ko",
          name,
          email,
          phone,
          service_interest: serviceType,
          message,
          raw_payload: body,
        }),
      }
    ).catch((e) => console.error("Intake error:", e))

    await Promise.all([telegramPromise, adminEmailPromise, customerEmailPromise, notionPromise, crmPromise, intakePromise])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ success: false, error: "Failed to send message" }, { status: 500 })
  }
}
