'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './page.module.css'

const serviceOptions = [
  '국제물류주선업', '환전업 등록', '외국인도시민박업', '호스텔업', '한옥체험업',
  '건축물 용도변경', '식품제조가공업', '여성기업인증', '비영리사단법인',
  '담배수입판매업', '기업인증(벤처/이노비즈)', 'HACCP 인증', '의약외품/화장품 허가',
  '조달청 나라장터', '기업부설연구소', '전자담배 수입허가', '지정스포츠클럽', '위치기반서비스사업신고', '기타'
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [inquiryId, setInquiryId] = useState('')

  useEffect(() => {
    if (status === 'success' && inquiryId) {
      const fw = (window as any).FormWidget
      if (fw?.openStep2) {
        fw.openStep2(inquiryId, form.name, form.email, form.service || '인허가')
      }
    }
  }, [status, inquiryId, form.name, form.email, form.service])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        const data = await res.json() as { success: boolean; inquiryId?: string }
        if (data.inquiryId) setInquiryId(data.inquiryId)
        setStatus('success')
      } else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ background: 'var(--navy)', padding: '5rem 0 4rem' }}>
        <div className="container">
          <span className="badge badge-white text-label">상담 문의</span>
          <h1 className="text-display" style={{ color: 'white', marginTop: '1rem' }}>
            전문가와<br />직접 상담하세요
          </h1>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
            문의 내용을 남겨주시면 24시간 내 전문 행정사가 연락드립니다.
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.info}>
              <div className="fade-up">
                <h2 className="text-h2" style={{ color: 'var(--navy)', marginBottom: '2rem' }}>연락처 정보</h2>
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    ),
                    label: '전화',
                    value: '02-363-2251',
                    href: 'tel:02-363-2251',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    ),
                    label: '이메일',
                    value: '5000meter@gmail.com',
                    href: 'mailto:5000meter@gmail.com',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    ),
                    label: '업무시간',
                    value: '평일 09:30–17:30\n토·일·공휴일 휴무',
                  },
                ].map((c) => (
                  <div key={c.label} className={styles.contactCard}>
                    <div className={styles.contactIcon}>{c.icon}</div>
                    <div>
                      <p className={styles.contactLabel}>{c.label}</p>
                      {c.href ? (
                        <a href={c.href} className={styles.contactValue}>{c.value}</a>
                      ) : (
                        <p className={styles.contactValue} style={{ whiteSpace: 'pre-line' }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className={`${styles.quickServices} fade-up delay-2`}>
                <p className={styles.quickTitle}>주요 서비스</p>
                <div className={styles.quickList}>
                  {serviceOptions.slice(0, 8).map((s) => (
                    <Link key={s} href={`/services/${s}`} className={styles.quickChip}>{s}</Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className={`fade-up delay-1`}>
              {status === 'success' ? (
                <div style={{ background: 'var(--white)', borderRadius: '20px', padding: '3rem', textAlign: 'center', border: '1px solid var(--border)' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(163,51,68,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--burgundy)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>문의가 접수되었습니다</h3>
                  <p style={{ color: 'var(--slate)', marginBottom: '2rem' }}>24시간 내 전문 행정사가 연락드립니다.</p>
                  <button onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', email: '', service: '', message: '' }) }} className="btn btn-secondary">
                    다시 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGrid}>
                    <div className="form-group">
                      <label className="form-label">이름 <span className="required">*</span></label>
                      <input
                        className="form-input"
                        type="text"
                        placeholder="홍길동"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">연락처 <span className="required">*</span></label>
                      <input
                        className="form-input"
                        type="tel"
                        placeholder="010-0000-0000"
                        value={form.phone}
                        onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">이메일</label>
                    <input
                      className="form-input"
                      type="email"
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">문의 서비스</label>
                    <select
                      className="form-input"
                      value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                    >
                      <option value="">선택해주세요</option>
                      {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">문의 내용 <span className="required">*</span></label>
                    <textarea
                      className="form-input form-textarea"
                      placeholder="문의 내용을 자세히 입력해 주세요"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      required
                    />
                  </div>
                  {status === 'error' && (
                    <p className="form-error">오류가 발생했습니다. 잠시 후 다시 시도하거나 전화로 문의해주세요.</p>
                  )}
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'loading'}>
                    {status === 'loading' ? '전송 중...' : '문의 접수하기'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
