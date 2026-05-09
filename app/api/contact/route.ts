import { NextResponse } from "next/server"

const SITE_NAME = "인허가"
const SITE_NAME_KR = "인허가"
const RESEND_API_KEY = process.env.RESEND_API_KEY || ""

async function sendEmail(fields: Record<string, string>, senderName: string, senderEmail: string) {
  if (!RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping email notification")
    return
  }

  const rows = Object.entries(fields)
    .map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;background:#f9f9f9;">${label}</td><td style="padding:8px 12px;border:1px solid #ddd;">${value || "-"}</td></tr>`)
    .join("\n")

  const html = `
    <div style="font-family:'Apple SD Gothic Neo',sans-serif;max-width:600px;margin:0 auto;">
      <h2 style="color:#1a56db;">[${SITE_NAME_KR}] 새 상담 신청</h2>
      <table style="width:100%;border-collapse:collapse;margin:16px 0;">
        ${rows}
      </table>
      <p style="color:#666;font-size:13px;">이 메일은 ${SITE_NAME} 웹사이트 상담 폼에서 자동 발송되었습니다.</p>
    </div>
  `

  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { "Authorization": `Bearer ${RESEND_API_KEY}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `${SITE_NAME_KR} <noreply@ko-visas.com>`,
      to: ["5000meter@gmail.com"],
      reply_to: senderEmail,
      subject: `[${SITE_NAME_KR}] 새 상담 신청 - ${senderName || "고객"}`,
      html,
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

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, service, type, message } = body
    const serviceType = service || type || "-"

    const text = `[인허가] 새 상담 문의

이름: ${name || "-"}
이메일: ${email || "-"}
전화번호: ${phone || "-"}
문의유형: ${serviceType}
메시지: ${message || "-"}`

    // Telegram notification
    const tgToken = process.env.TELEGRAM_INQUIRY_BOT_TOKEN || "8748564690:AAEGsXxcfqrHmGue8lkqUaa2E0Q8CDCY-Eo"
    const telegramPromise = fetch(
      `https://api.telegram.org/bot${tgToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: "5533847195",
          text,
        }),
      }
    )

    // Email notification
    const emailPromise = sendEmail({
      "이름": name,
      "이메일": email,
      "전화번호": phone,
      "문의유형": serviceType,
      "메시지": message,
    }, name, email).catch((err) => console.error("Email send error:", err))

    // Notion save
    const notionPromise = saveToNotion(body).catch((err) => console.error("Notion error:", err))

    // Notion CRM (unified)
    const { saveToCRM } = await import("@/lib/notion-crm")
    const crmPromise = saveToCRM({
      brand: 'inhega', formType: 'contact',
      siteUrl: 'https://www.inhega.co.kr/contact',
      name, email, phone,
      serviceRaw: serviceType, message,
      rawPayload: body,
    }).catch((err) => console.error("CRM error:", err))

    await Promise.all([telegramPromise, emailPromise, notionPromise, crmPromise])

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, error: "Failed to send message" },
      { status: 500 }
    )
  }
}
