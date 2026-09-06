'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

const STEPS = ['서비스 선택', '사업자 유형', '요청 내용', '연락처', '확인 및 제출']

const serviceOptions = [
  '국제물류주선업', '환전업 등록', '외국인도시민박업', '호스텔업', '한옥체험업',
  '건축물 용도변경', '식품제조가공업', '여성기업인증', '비영리사단법인',
  '담배수입판매업', '기업인증(벤처/이노비즈)', 'HACCP 인증', '의약외품/화장품 허가',
  '조달청 나라장터', '기업부설연구소', '전자담배 수입허가', '지정스포츠클럽', '위치기반서비스사업신고', '기타'
]

const businessTypes = ['개인사업자', '법인사업자', '예비창업자', '기타']

type FormData = {
  service: string
  businessType: string
  timeline: string
  details: string
  name: string
  phone: string
  email: string
  agreePrivacy: boolean
}

export default function QuotePage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState<FormData>({
    service: '', businessType: '', timeline: '', details: '',
    name: '', phone: '', email: '', agreePrivacy: false,
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const update = (key: keyof FormData, val: string | boolean) =>
    setForm(f => ({ ...f, [key]: val }))

  const handleSubmit = async () => {
    setStatus('loading')
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const progress = ((step + 1) / STEPS.length) * 100

  if (status === 'success') {
    return (
      <div style={{ paddingTop: '72px', minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--cream)' }}>
        <div style={{ textAlign: 'center', maxWidth: '480px', padding: '2rem' }}>
          <div style={{ width: '80px', height: '80px', background: 'rgba(163,51,68,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--burgundy)" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>견적 문의가 접수되었습니다</h2>
          <p style={{ color: 'var(--slate)', lineHeight: 1.8, marginBottom: '2rem' }}>
            전문 행정사가 검토 후 24시간 내 연락드립니다.<br />
            카카오·라인·왓츠앱 메신저 <strong style={{ color: 'var(--burgundy)' }}>alexkorea</strong>으로도 문의 가능합니다.
          </p>
          <Link href="/" className="btn btn-primary">홈으로 돌아가기</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ paddingTop: '72px', minHeight: '100dvh', background: 'var(--cream)' }}>
      {/* Header */}
      <div style={{ background: 'var(--navy)', padding: '3rem 0 2rem' }}>
        <div className="container-narrow">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: 'white', marginBottom: '1.5rem' }}>
            무료 견적 문의
          </h1>
          {/* Step indicator */}
          <div className={styles.steps}>
            {STEPS.map((s, i) => (
              <div key={s} className={`${styles.stepItem} ${i === step ? styles.stepActive : ''} ${i < step ? styles.stepDone : ''}`}>
                <div className={styles.stepCircle}>{i < step ? '✓' : i + 1}</div>
                <span className={styles.stepLabel}>{s}</span>
              </div>
            ))}
          </div>
          <div style={{ height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', marginTop: '1.5rem' }}>
            <div style={{ height: '100%', width: `${progress}%`, background: 'var(--burgundy)', borderRadius: '2px', transition: 'width 0.4s ease' }} />
          </div>
        </div>
      </div>

      <div style={{ padding: '3rem 0' }}>
        <div className="container-narrow">
          <div style={{ background: 'var(--white)', borderRadius: '20px', padding: '2.5rem', border: '1px solid var(--border)' }}>

            {/* Step 0: Service selection */}
            {step === 0 && (
              <div>
                <h2 className="text-h2" style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>어떤 인허가가 필요하신가요?</h2>
                <p style={{ color: 'var(--slate)', marginBottom: '2rem', fontSize: '0.9375rem' }}>해당하는 서비스를 선택해주세요.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                  {serviceOptions.map((s) => (
                    <button
                      key={s}
                      onClick={() => update('service', s)}
                      className={styles.selectBtn}
                      data-selected={form.service === s}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Business type */}
            {step === 1 && (
              <div>
                <h2 className="text-h2" style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>사업자 유형을 선택해주세요</h2>
                <p style={{ color: 'var(--slate)', marginBottom: '2rem', fontSize: '0.9375rem' }}>현재 사업자 등록 상태를 선택해주세요.</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                  {businessTypes.map((b) => (
                    <button
                      key={b}
                      onClick={() => update('businessType', b)}
                      className={styles.selectBtn}
                      data-selected={form.businessType === b}
                    >
                      {b}
                    </button>
                  ))}
                </div>
                <div style={{ marginTop: '2rem' }}>
                  <label className="form-label">희망 처리 기간</label>
                  <select className="form-input" style={{ marginTop: '0.5rem' }} value={form.timeline} onChange={e => update('timeline', e.target.value)}>
                    <option value="">선택해주세요</option>
                    <option value="긴급 (1개월 이내)">긴급 (1개월 이내)</option>
                    <option value="보통 (1~3개월)">보통 (1~3개월)</option>
                    <option value="여유 (3개월 이상)">여유 (3개월 이상)</option>
                    <option value="미정">미정</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 2: Details */}
            {step === 2 && (
              <div>
                <h2 className="text-h2" style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>요청 내용을 알려주세요</h2>
                <p style={{ color: 'var(--slate)', marginBottom: '2rem', fontSize: '0.9375rem' }}>자세할수록 정확한 견적이 가능합니다.</p>
                <div className="form-group">
                  <label className="form-label">상세 내용</label>
                  <textarea
                    className="form-input form-textarea"
                    style={{ minHeight: '200px' }}
                    placeholder="사업 계획, 현재 상황, 특이 사항 등을 자유롭게 입력해주세요."
                    value={form.details}
                    onChange={e => update('details', e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <div>
                <h2 className="text-h2" style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>연락처를 입력해주세요</h2>
                <p style={{ color: 'var(--slate)', marginBottom: '2rem', fontSize: '0.9375rem' }}>견적 안내를 위한 연락처입니다.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div className="form-group">
                    <label className="form-label">이름 <span className="required">*</span></label>
                    <input className="form-input" type="text" placeholder="홍길동" value={form.name} onChange={e => update('name', e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">연락처 <span className="required">*</span></label>
                    <input className="form-input" type="tel" placeholder="010-0000-0000" value={form.phone} onChange={e => update('phone', e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">이메일</label>
                    <input className="form-input" type="email" placeholder="example@email.com" value={form.email} onChange={e => update('email', e.target.value)} />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Confirm */}
            {step === 4 && (
              <div>
                <h2 className="text-h2" style={{ color: 'var(--navy)', marginBottom: '0.5rem' }}>입력 내용을 확인해주세요</h2>
                <div style={{ background: 'var(--cream)', borderRadius: '12px', padding: '1.5rem', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
                  {[
                    { label: '서비스', value: form.service },
                    { label: '사업자 유형', value: form.businessType },
                    { label: '희망 기간', value: form.timeline },
                    { label: '이름', value: form.name },
                    { label: '연락처', value: form.phone },
                    { label: '이메일', value: form.email },
                  ].map(r => (
                    <div key={r.label} style={{ display: 'flex', gap: '1rem', padding: '0.625rem 0', borderBottom: '1px solid var(--border)' }}>
                      <span style={{ minWidth: '100px', fontSize: '0.875rem', fontWeight: 600, color: 'var(--slate)' }}>{r.label}</span>
                      <span style={{ fontSize: '0.875rem', color: 'var(--charcoal)' }}>{r.value || '-'}</span>
                    </div>
                  ))}
                </div>
                <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer', fontSize: '0.875rem', color: 'var(--slate)', lineHeight: 1.6 }}>
                  <input type="checkbox" checked={form.agreePrivacy} onChange={e => update('agreePrivacy', e.target.checked)} style={{ marginTop: '2px' }} />
                  <span>
                    <Link href="/privacy" style={{ color: 'var(--burgundy)', fontWeight: 600 }}>개인정보처리방침</Link>에 동의하며 상담 연락을 받는 것에 동의합니다. (필수)
                  </span>
                </label>
                {status === 'error' && <p className="form-error" style={{ marginTop: '1rem' }}>오류가 발생했습니다. 다시 시도해주세요.</p>}
              </div>
            )}

            {/* Nav buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem', gap: '1rem' }}>
              {step > 0 && (
                <button onClick={() => setStep(s => s - 1)} className="btn btn-secondary">
                  이전
                </button>
              )}
              <div style={{ marginLeft: 'auto' }}>
                {step < STEPS.length - 1 ? (
                  <button
                    onClick={() => setStep(s => s + 1)}
                    className="btn btn-primary"
                    disabled={step === 0 && !form.service}
                  >
                    다음 단계
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="btn btn-primary btn-lg"
                    disabled={!form.agreePrivacy || !form.name || !form.phone || status === 'loading'}
                  >
                    {status === 'loading' ? '제출 중...' : '견적 문의 제출'}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
