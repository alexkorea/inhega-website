import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, service, message } = body

    if (!name || !phone || !message) {
      return NextResponse.json({ error: '필수 항목을 입력해주세요.' }, { status: 400 })
    }

    // Notion CRM 저장
    if (process.env.NOTION_API_KEY && process.env.NOTION_CONTACTS_DB_ID)
    await fetch('https://api.notion.com/v1/pages', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.NOTION_API_KEY}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28',
      },
      body: JSON.stringify({
        parent: { database_id: process.env.NOTION_CONTACTS_DB_ID },
        properties: {
          이름: { title: [{ text: { content: name } }] },
          연락처: { phone_number: phone },
          이메일: email ? { email } : undefined,
          서비스: { select: { name: service || '미선택' } },
          문의내용: { rich_text: [{ text: { content: message } }] },
          상태: { select: { name: '신규' } },
          접수일시: { date: { start: new Date().toISOString() } },
        },
      }),
    })

    // Resend 이메일 알림
    if (process.env.RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@inhega.co.kr',
          to: '5000meter@gmail.com',
          subject: `[비전행정사] 새 상담 문의 - ${name}`,
          html: `
            <h2>새 상담 문의가 접수되었습니다</h2>
            <table>
              <tr><td><strong>이름</strong></td><td>${name}</td></tr>
              <tr><td><strong>연락처</strong></td><td>${phone}</td></tr>
              <tr><td><strong>이메일</strong></td><td>${email || '-'}</td></tr>
              <tr><td><strong>서비스</strong></td><td>${service || '-'}</td></tr>
              <tr><td><strong>문의내용</strong></td><td>${message}</td></tr>
            </table>
          `,
        }),
      })
    }

    // 신청자 확인 이메일
    if (process.env.RESEND_API_KEY && email) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'noreply@inhega.co.kr',
          to: email,
          subject: '[비전행정사사무소] 상담 신청이 접수되었습니다',
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
              <h2 style="color:#B8460F;">상담 신청이 접수되었습니다</h2>
              <p>${name}님, 안녕하세요.<br/>비전행정사사무소에 상담을 신청해 주셔서 감사합니다.</p>
              <p>접수된 내용을 확인 후 <strong>1~2 영업일 이내</strong>에 연락드리겠습니다.</p>
              <table style="border-collapse:collapse;width:100%;margin-top:16px;">
                <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">서비스</td><td style="padding:8px;border:1px solid #ddd;">${service || '-'}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">문의내용</td><td style="padding:8px;border:1px solid #ddd;">${message}</td></tr>
              </table>
              <p style="margin-top:24px;color:#666;font-size:13px;">문의: 02-363-2251 | inhega.co.kr</p>
            </div>
          `,
        }),
      })
    }

    // Telegram 알림
    if (process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID) {
      await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: `[비전행정사] 새 상담 문의\n이름: ${name}\n연락처: ${phone}\n이메일: ${email || '-'}\n서비스: ${service || '-'}\n내용: ${message}`,
        }),
      })
    }

    // form-gateway FC_1차문의 저장 + inquiryId 반환
    let inquiryId = ''
    try {
      const gwRes = await fetch('https://form-gateway.pages.dev/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer REDACTED_SET_VIA_ENV_NOTION_TOKEN' },
        body: JSON.stringify({ site: 'inhega.co.kr', name, phone, email: email || undefined, visaType: service || undefined, message }),
      })
      const gwData = await gwRes.json() as { ok?: boolean; id?: string }
      if (gwData.ok && gwData.id) inquiryId = gwData.id
    } catch { /* non-fatal */ }

    return NextResponse.json({ success: true, inquiryId })
  } catch (err) {
    console.error('[contact API]', err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}
