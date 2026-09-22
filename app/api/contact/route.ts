import { NextRequest, NextResponse } from 'next/server'

// Resend 발신 주소. inhega.co.kr 은 Resend 에 도메인 검증이 되어 있지 않아
// 보내면 403 validation_error 로 전부 실패한다(2026-09-22 확인). 같은 사무소가 쓰는
// 검증된 도메인 ko-visas.com 으로 보낸다. inhega.co.kr 을 Resend 에 등록·검증하면
// 이 상수만 되돌리면 된다.
const MAIL_FROM = '유선행정사사무소 <noreply@ko-visas.com>'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, phone, email, service, message } = body

    if (!name || !phone || !message) {
      return NextResponse.json({ error: '필수 항목을 입력해주세요.' }, { status: 400 })
    }

    // Notion CRM 저장
    let notionOk = false
    if (process.env.NOTION_API_KEY && process.env.NOTION_CONTACTS_DB_ID) {
    const notionRes = await fetch('https://api.notion.com/v1/pages', {
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
    notionOk = notionRes.ok
    if (!notionRes.ok) console.error('[contact API] Notion', notionRes.status, await notionRes.text())
    } else {
      console.error('[contact API] NOTION_API_KEY/NOTION_CONTACTS_DB_ID 미설정 — CRM 저장 건너뜀')
    }

    // Resend 이메일 알림 (관리자)
    let adminEmailOk = false
    if (process.env.RESEND_API_KEY) {
      const adminRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: MAIL_FROM,
          to: '5000meter@gmail.com',
          // 관리자가 '회신' 을 누르면 곧바로 고객에게 가도록 (이메일 없으면 생략)
          ...(email ? { reply_to: email } : {}),
          subject: `[유선행정사사무소] 새 상담 문의 - ${name}`,
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
      adminEmailOk = adminRes.ok
      if (!adminRes.ok) console.error('[contact API] Resend admin', adminRes.status, await adminRes.text())
    } else {
      console.error('[contact API] RESEND_API_KEY 미설정 — 관리자 알림 발송 안 됨')
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
          from: MAIL_FROM,
          to: email,
          subject: '[유선행정사사무소] 상담 신청이 접수되었습니다',
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
              <h2 style="color:#235099;">상담 신청이 접수되었습니다</h2>
              <p>${name}님, 안녕하세요.<br/>유선행정사사무소에 상담을 신청해 주셔서 감사합니다.</p>
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
          text: `[유선행정사사무소] 새 상담 문의\n이름: ${name}\n연락처: ${phone}\n이메일: ${email || '-'}\n서비스: ${service || '-'}\n내용: ${message}`,
        }),
      })
    }

    // form-gateway FC_1차문의 저장 + inquiryId 반환
    let inquiryId = ''
    if (!process.env.FC_NOTION_TOKEN) {
      console.error('[contact API] FC_NOTION_TOKEN 미설정 — form-gateway 저장 건너뜀')
    } else if (email) {
      try {
        const gwRes = await fetch('https://form-gateway.pages.dev/api/intake', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.FC_NOTION_TOKEN}` },
          body: JSON.stringify({ site: 'inhega.co.kr', name, phone, email, visaType: service || undefined, message }),
        })
        const gwData = await gwRes.json() as { ok?: boolean; id?: string; error?: string; detail?: string }
        if (gwData.ok && gwData.id) inquiryId = gwData.id
        else console.error('[contact API] form-gateway', gwRes.status, gwData.error, gwData.detail)
      } catch (e) { console.error('[contact API] form-gateway 예외', e) }
    }

    // 어느 경로로도 남지 않았다면 성공으로 위장하지 않는다 — 고객이 유실을 모른 채 떠나는 것이 최악이다.
    if (!adminEmailOk && !notionOk && !inquiryId) {
      console.error('[contact API] 접수 경로 전부 실패', { name, phone, email, service })
      return NextResponse.json(
        { error: '접수에 실패했습니다. 02-363-2251 로 연락해 주세요.' },
        { status: 500 },
      )
    }

    return NextResponse.json({ success: true, inquiryId })
  } catch (err) {
    console.error('[contact API]', err)
    return NextResponse.json({ error: '서버 오류' }, { status: 500 })
  }
}
