import Link from 'next/link'

// QA01-FIX2(맥7 2026-10-05) — 문의 폼 개인정보 수집·이용 안내.
// CONSENT-OPT-ALL(보스 2746·2748, 2026-10-07): 동의 체크 필수 폐지 — 고객이 체크를 못 보고 제출이 막혔다.
// 체크박스를 없애고 안내문(notice)만 둔다. 다시 required 체크로 되돌리지 말 것.
// 보유기간은 /privacy 3항 "상담 문의 기록: 3년" 과 같아야 한다.
type Locale = 'ko' | 'en' | 'zh' | 'ja'

const T: Record<Locale, { title: string; items: [string, string][]; notice: [string, string]; policy: string }> = {
  ko: {
    title: '개인정보 수집·이용 안내',
    items: [
      ['수집 항목', '이름, 연락처, 이메일, 문의 서비스, 문의 내용'],
      ['수집 목적', '상담 문의 접수 및 회신'],
      ['보유 기간', '상담 문의 기록 3년 보관 후 파기'],
    ],
    notice: ['문의 답변을 위해 이름·연락처를 수집하며 ', '에 따라 처리합니다.'],
    policy: '개인정보처리방침',
  },
  en: {
    title: 'How we use your personal information',
    items: [
      ['Items', 'name, phone, email, service of interest, message'],
      ['Purpose', 'receiving and answering your inquiry'],
      ['Retention', 'inquiry records are kept for 3 years, then destroyed'],
    ],
    notice: ['We collect your name and contact details to answer your inquiry and handle them under our ', '.'],
    policy: 'Privacy Policy',
  },
  zh: {
    title: '个人信息收集·使用说明',
    items: [
      ['收集项目', '姓名、联系电话、邮箱、咨询服务、咨询内容'],
      ['收集目的', '受理并回复咨询'],
      ['保留期限', '咨询记录保存3年后销毁'],
    ],
    notice: ['为回复咨询，我们收集您的姓名和联系方式，并依照', '处理。'],
    policy: '个人信息处理方针',
  },
  ja: {
    title: '個人情報の収集・利用について',
    items: [
      ['収集項目', 'お名前、連絡先、メール、お問い合わせサービス、お問い合わせ内容'],
      ['収集目的', 'お問い合わせの受付および回答'],
      ['保有期間', 'お問い合わせ記録は3年間保管後に破棄'],
    ],
    notice: ['ご回答のためにお名前・連絡先を収集し、', 'に従って取り扱います。'],
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
      <p data-privacy-notice style={{ marginTop: '0.375rem' }}>
        {t.notice[0]}
        <Link href="/privacy" style={{ display: 'inline-block', paddingBlock: 4, color: 'var(--burgundy)', fontWeight: 600 }}>{t.policy}</Link>
        {t.notice[1]}
      </p>
    </div>
  )
}
