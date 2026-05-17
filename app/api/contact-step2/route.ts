import { NextResponse } from "next/server"

const NOTION_KEY = process.env.NOTION_CRM_KEY || "' + (process.env.NOTION_CRM_KEY || '') + '"
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ""
const TELEGRAM_CHAT_ID = "5533847195"

async function notionReq(endpoint: string, method: string, body?: any) {
  const res = await fetch(`https://api.notion.com/v1/${endpoint}`, {
    method,
    headers: { "Authorization": `Bearer ${NOTION_KEY}`, "Notion-Version": "2022-06-28", "Content-Type": "application/json" },
    body: body ? JSON.stringify(body) : undefined,
  })
  return res.json()
}

function formatDetailsForDisplay(service: string, details: Record<string, string>, additionalMessage?: string): string {
  const fieldLabels: Record<string, string> = {
    productType: "제조 품목", facilityLocation: "시설 소재지",
    haccpCert: "HACCP 인증 여부", hasFactory: "공장 확보 여부",
    salesProduct: "판매 품목", hasBizReg: "사업자등록 유무",
    hasEscrow: "에스크로 가입 여부", hasManufacturing: "제조 위탁 여부",
    cosmeticType: "품목 유형", importDomestic: "수입/국내 구분",
    vehicleCount: "차량 대수", vehicleType: "차량 종류",
    operationArea: "영업 지역", businessLocation: "영업 장소(위치)",
    estimatedVolume: "예상 거래 규모", constructionType: "업종",
    capitalSize: "자본금 규모", hasTechStaff: "기술인력 보유",
    officeLocation: "사업장 소재지", desiredTimeline: "희망 처리 시기",
    additionalInquiry: "추가 문의사항",
  }

  let text = `[인허가] 상세 상담 정보\n\n서비스: ${service}\n────────────\n`
  for (const [key, value] of Object.entries(details)) {
    if (value) { text += `${fieldLabels[key] || key}: ${value}\n` }
  }
  if (additionalMessage) text += `\n추가 메시지:\n${additionalMessage}`
  return text
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { inquiryId, service, details, additionalMessage } = body

    if (!service || !details) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    const detailsSummary = Object.entries(details as Record<string, string>)
      .filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join(" | ")
    const fullSummary = additionalMessage ? `${detailsSummary} | 추가메시지: ${additionalMessage}` : detailsSummary

    const updatePromise = (async () => {
      if (inquiryId && NOTION_KEY) {
        try {
          await notionReq(`pages/${inquiryId}`, "PATCH", {
            properties: {
              "Form Type": { select: { name: "consultation_complete" } },
              "Quote Answers Summary": { rich_text: [{ text: { content: fullSummary.substring(0, 2000) } }] },
              "Message": { rich_text: [{ text: { content: (additionalMessage || "").substring(0, 2000) } }] },
            },
          })
        } catch (err) { console.error("Notion update error:", err) }
      }
    })()

    const telegramText = formatDetailsForDisplay(service, details, additionalMessage)
    const telegramPromise = fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: telegramText }) }
    ).catch((err) => console.error("Telegram error:", err))

    // formconnection-crm intake (보스 msg 13606·13618·13621): step2 상세를 별도 row로 적재
    const intakePromise = fetch("https://formconnection-crm.vercel.app/api/intake", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.INTAKE_API_KEY ? { "x-api-key": process.env.INTAKE_API_KEY } : {}),
      },
      body: JSON.stringify({
        site: "inhega.co.kr",
        language: "ko",
        name: `[step2 상세] inquiry ${inquiryId || "?"}`,
        message: `Service: ${service}\n${detailsSummary}${additionalMessage ? `\n\n추가: ${additionalMessage}` : ""}`,
        service_interest: service,
        permit_category: service,
        raw_payload: { step: "step2", inquiryId, details, additionalMessage },
      }),
    }).catch((err) => console.error("Intake step2 error:", err))

    await Promise.all([updatePromise, telegramPromise, intakePromise])
    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Contact step2 error:", error)
    return NextResponse.json({ ok: false, error: "Failed to process inquiry" }, { status: 500 })
  }
}
