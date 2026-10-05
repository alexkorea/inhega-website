'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../../contact/page.module.css'
import { getT } from '@/lib/i18n/translations'
import { getServiceMenuSelectGroups, getServiceMenuOther, getServiceMenuItems, getServiceMenuCount } from '@/lib/services-menu'
import { EmailOff } from '@/components/ui/EmailOff'

const t = getT('ja')
// 서비스 목록 단일 정본 — lib/services-catalog.ts 에서 구운 경량판 (하드코딩 금지, 2026-09-22)
// 'use client' 라 catalog 를 직접 import 하면 본문 코퍼스 893KB 가 번들에 실린다 (2026-09-25)
// 0949 추가(2026-10-04): 선택지 = 정본 디렉터리 전체(분야 optgroup) + 기타, 개수 자동
const serviceGroups = getServiceMenuSelectGroups('ja')
const serviceOther = getServiceMenuOther('ja')
const quickServices = getServiceMenuItems('ja').slice(0, 8)
const serviceCount = getServiceMenuCount('ja')

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '', language: 'ja' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ background: 'var(--navy)', padding: 'var(--section-py-md) 0 var(--section-py-sm)' }}>
        <div className="container">
          <span className="badge badge-white text-label">{t.contact.badge}</span>
          <h1 className="text-display" style={{ color: 'white', marginTop: '1rem', whiteSpace: 'pre-line' }}>
            {t.contact.title}
          </h1>
          <p className="text-body-lg" style={{ color: 'rgba(255,255,255,0.65)', marginTop: '1rem' }}>
            {t.contact.desc}
          </p>
        </div>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <div className="fade-up">
                <h2 className="text-h2" style={{ color: 'var(--navy)', marginBottom: '2rem' }}>お問い合わせ先</h2>
                {[
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                    ),
                    label: t.contact.phone,
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
                    label: t.contact.email,
                    value: 'help@inhega.co.kr',
                    href: 'mailto:help@inhega.co.kr',
                  },
                  {
                    icon: (
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    ),
                    label: t.contact.hours,
                    value: t.contact.hoursValue,
                  },
                ].map((c) => (
                  <div key={c.label} className={styles.contactCard}>
                    <div className={styles.contactIcon}>{c.icon}</div>
                    <div>
                      <p className={styles.contactLabel}>{c.label}</p>
                      {c.href ? (
                        <EmailOff><a href={c.href} className={styles.contactValue}>{c.value}</a></EmailOff>
                      ) : (
                        <p className={styles.contactValue} style={{ whiteSpace: 'pre-line' }}>{c.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div style={{ marginTop: '1.5rem', padding: '1.25rem', background: 'var(--white)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '0.75rem' }}>メッセンジャー（日本語対応）</p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--slate)' }}>LINE · KakaoTalk · WeChat · WhatsApp</p>
                  <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--charcoal)', marginTop: '0.375rem' }}>ID: alexkorea</p>
                </div>
              </div>

              <div className={`${styles.quickServices} fade-up delay-2`}>
                <p className={styles.quickTitle}>人気サービス</p>
                <div className={styles.quickList}>
                  {quickServices.map((s) => (
                    <Link key={s.slug} href={s.href} className={styles.quickChip}>{s.shortTitle}</Link>
                  ))}
                  <Link href="/ja/services" className={styles.quickChip}>{`全${serviceCount}種のサービス`} →</Link>
                </div>
              </div>
            </div>

            <div className={`fade-up delay-1`}>
              {status === 'success' ? (
                <div style={{ background: 'var(--white)', borderRadius: '20px', padding: '3rem', textAlign: 'center', border: '1px solid var(--border)' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(11,31,58,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--burgundy)" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--navy)', marginBottom: '0.75rem' }}>{t.contact.form.successTitle}</h3>
                  <p style={{ color: 'var(--slate)', marginBottom: '2rem' }}>{t.contact.form.successDesc}</p>
                  <button onClick={() => { setStatus('idle'); setForm({ name: '', phone: '', email: '', service: '', message: '', language: 'ja' }) }} className="btn btn-secondary">
                    {t.contact.form.successReset}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <input type="hidden" name="language" value="ja" />
                  <div className={styles.formGrid}>
                    <div className="form-group">
                      <label className="form-label">{t.contact.form.name} <span className="required">*</span></label>
                      <input className="form-input" type="text" placeholder={t.contact.form.namePlaceholder} value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t.contact.form.phone} <span className="required">*</span></label>
                      <input className="form-input" type="text" placeholder={t.contact.form.phonePlaceholder} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t.contact.form.emailLabel}</label>
                    <input className="form-input" type="email" placeholder={t.contact.form.emailPlaceholder} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t.contact.form.service}</label>
                    <select className="form-input" value={form.service} onChange={e => setForm(f => ({ ...f, service: e.target.value }))}>
                      <option value="">{t.contact.form.serviceDefault}</option>
                      {serviceGroups.map(g => (
                        <optgroup key={g.id} label={g.label}>
                          {g.options.map(s => <option key={s} value={s}>{s}</option>)}
                        </optgroup>
                      ))}
                      <option value={serviceOther}>{serviceOther}</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">{t.contact.form.message} <span className="required">*</span></label>
                    <textarea className="form-input form-textarea" placeholder={t.contact.form.messagePlaceholder} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} required />
                  </div>
                  {status === 'error' && <p className="form-error">{t.contact.form.error}</p>}
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }} disabled={status === 'loading'}>
                    {status === 'loading' ? t.contact.form.submitting : t.contact.form.submit}
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
