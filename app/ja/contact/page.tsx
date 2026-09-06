'use client'
import { useState } from 'react'
import Link from 'next/link'
import styles from '../../contact/page.module.css'
import { getT } from '@/lib/i18n/translations'

const t = getT('ja')

export default function JaContactPage() {
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
      <section style={{ background: 'var(--navy)', padding: '5rem 0 4rem' }}>
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
                    value: '5000meter@gmail.com',
                    href: 'mailto:5000meter@gmail.com',
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
                        <a href={c.href} className={styles.contactValue}>{c.value}</a>
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
                  {[
                    { label: '国際貨物運送取扱業', href: '/ja/services/logistics' },
                    { label: '外貨両替業', href: '/ja/services/currency-exchange' },
                    { label: '外国人都市民泊業', href: '/ja/services/urban-guesthouse' },
                    { label: '食品製造加工業', href: '/ja/services/food-manufacturing' },
                    { label: '化粧品/医薬部外品許可', href: '/ja/services/cosmetics' },
                    { label: '位置情報サービス業届出', href: '/ja/services/location-based-service' },
                    { label: 'HACCP認証', href: '/ja/services/haccp' },
                    { label: 'ベンチャー認証', href: '/ja/services/venture-cert' },
                  ].map((s) => (
                    <Link key={s.href} href={s.href} className={styles.quickChip}>{s.label}</Link>
                  ))}
                </div>
              </div>
            </div>

            <div className={`fade-up delay-1`}>
              {status === 'success' ? (
                <div style={{ background: 'var(--white)', borderRadius: '20px', padding: '3rem', textAlign: 'center', border: '1px solid var(--border)' }}>
                  <div style={{ width: '60px', height: '60px', background: 'rgba(163,51,68,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
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
                      {t.serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
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
