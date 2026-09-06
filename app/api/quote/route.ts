import { NextRequest, NextResponse } from 'next/server'

export const runtime = 'edge'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, service, businessType, timeline, details } = body

    if (!name || !phone) {
      return NextResponse.json({ error: '필수 항목을 입력해주세요.' }, { status: 400 })
    }

    if (process.env.NOTION_API_KEY && process.env.NOTION_CONTACTS_DB_ID) {
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
            문의내용: { rich_text: [{ text: { content: `[견적문의]\n사업자유형: ${businessType}\n희망기간: ${timeline}\n\n${details}` } }] },
            상태: { select: { name: '견적대기' } },
            접수일시: { date: { start: new Date().toISOString() } },
          },
        }),
      })
    }

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
          subject: `[비전행정사사무소] 견적 문의 - ${name} / ${service}`,
          html: `
            <h2>새 견적 문의</h2>
            <table border="1" cellpadding="8">
              <tr><td>이름</td><td>${name}</td></tr>
              <tr><td>연락처</td><td>${phone}</td></tr>
              <tr><td>이메일</td><td>${email || '-'}</td></tr>
              <tr><td>서비스</td><td>${service}</td></tr>
              <tr><td>사업자 유형</td><td>${businessType}</td></tr>
              <tr><td>희망 기간</td><td>${timeline}</td></tr>
              <tr><td>상세내용</td><td>${details}</td></tr>
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
          subject: '[비전행정사사무소] 견적 문의가 접수되었습니다',
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
              <h2 style="color:#235099;">견적 문의가 접수되었습니다</h2>
              <p>${name}님, 안녕하세요.<br/>비전행정사사무소에 견적 문의를 주셔서 감사합니다.</p>
              <p>접수된 내용을 확인 후 <strong>1~2 영업일 이내</strong>에 연락드리겠습니다.</p>
              <table style="border-collapse:collapse;width:100%;margin-top:16px;">
                <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">서비스</td><td style="padding:8px;border:1px solid #ddd;">${service || '-'}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">사업자 유형</td><td style="padding:8px;border:1px solid #ddd;">${businessType || '-'}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">희망 기간</td><td style="padding:8px;border:1px solid #ddd;">${timeline || '-'}</td></tr>
                <tr><td style="padding:8px;border:1px solid #ddd;background:#f5f5f5;font-weight:bold;">상세내용</td><td style="padding:8px;border:1px solid #ddd;">${details || '-'}</td></tr>
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
          text: `[비전행정사사무소] 새 견적 문의\n이름: ${name}\n연락처: ${phone}\n서비스: ${service || '-'}\n사업자유형: ${businessType || '-'}\n희망기간: ${timeline || '-'}\n내용: ${details || '-'}`,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[quote API]', err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}
