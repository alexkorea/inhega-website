import Link from 'next/link'

// QA01-FIX2(맥7 2026-10-05) — 문의 폼 개인정보 수집·이용 동의(필수).
// 체크박스는 name 이 없고 폼 상태(JSON body)에도 넣지 않는다 — /api/contact 계약은 그대로, 브라우저 required 로만 막는다.
// 보유기간은 /privacy 3항 "상담 문의 기록: 3년" 과 같아야 한다.
type Locale = 'ko' | 'en' | 'zh' | 'ja'

const T: Record<Locale, { title: string; items: [string, string][]; refuse: string; agree: string; policy: string }> = {
  ko: {
    title: '개인정보 수집·이용 동의',
    items: [
      ['수집 항목', '이름, 연락처, 이메일, 문의 서비스, 문의 내용'],
      ['수집 목적', '상담 문의 접수 및 회신'],
      ['보유 기간', '상담 문의 기록 3년 보관 후 파기'],
    ],
    refuse: '동의를 거부할 수 있으나, 거부하시면 상담 문의를 접수할 수 없습니다.',
    agree: '개인정보 수집·이용에 동의합니다. (필수)',
    policy: '개인정보처리방침',
  },
  en: {
    title: 'Consent to collection and use of personal information',
    items: [
      ['Items', 'name, phone, email, service of interest, message'],
      ['Purpose', 'receiving and answering your inquiry'],
      ['Retention', 'inquiry records are kept for 3 years, then destroyed'],
    ],
    refuse: 'You may refuse, but we cannot accept your inquiry without consent.',
    agree: 'I agree to the collection and use of my personal information. (Required)',
    policy: 'Privacy Policy',
  },
  zh: {
    title: '个人信息收集·使用同意',
    items: [
      ['收集项目', '姓名、联系电话、邮箱、咨询服务、咨询内容'],
      ['收集目的', '受理并回复咨询'],
      ['保留期限', '咨询记录保存3年后销毁'],
    ],
    refuse: '您可以拒绝同意，但拒绝后将无法受理咨询。',
    agree: '我同意收集和使用个人信息。（必选）',
    policy: '个人信息处理方针',
  },
  ja: {
    title: '個人情報の収集・利用への同意',
    items: [
      ['収集項目', 'お名前、連絡先、メール、お問い合わせサービス、お問い合わせ内容'],
      ['収集目的', 'お問い合わせの受付および回答'],
      ['保有期間', 'お問い合わせ記録は3年間保管後に破棄'],
    ],
    refuse: '同意を拒否することもできますが、その場合はお問い合わせを受け付けられません。',
    agree: '個人情報の収集・利用に同意します。（必須）',
    policy: '個人情報処理方針',
  },
}

export default function PrivacyConsent({ locale = 'ko' }: { locale?: Locale }) {
  const t = T[locale]
  return (
    <div style={{ border: '1px solid var(--border)', borderRadius: 10, padding: '0.875rem 1rem', background: 'var(--cream, #faf8f4)', fontSize: '0.8125rem', lineHeight: 1.6, color: 'var(--slate)' }}>
      <p style={{ fontWeight: 700, color: 'var(--navy)', marginBottom: '0.375rem' }}>{t.title}</p>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {t.items.map(([k, v]) => (
          <li key={k}><strong style={{ fontWeight: 600 }}>{k}</strong>: {v}</li>
        ))}
      </ul>
      <p style={{ marginTop: '0.375rem' }}>
        {t.refuse}{' '}
        <Link href="/privacy" style={{ display: 'inline-block', paddingBlock: 4, color: 'var(--burgundy)', fontWeight: 600 }}>{t.policy}</Link>
      </p>
      <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', minHeight: 44, marginTop: '0.25rem', cursor: 'pointer', fontWeight: 600, color: 'var(--charcoal)' }}>
        <input type="checkbox" required style={{ width: 24, height: 24, flexShrink: 0, accentColor: 'var(--navy)' }} />
        <span>{t.agree}</span>
      </label>
    </div>
  )
}
