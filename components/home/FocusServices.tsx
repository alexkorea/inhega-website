import Link from 'next/link'
import { FOCUS_SERVICES, FOCUS_SERVICES_I18N, FOCUS_PHOTOS, type FocusLocale } from '@/lib/focus-services'
import { industryPhotoBase, industryPhotoAlt } from '@/lib/service-card-images'
import styles from './FocusServices.module.css'

// 홈 '중점 업무' 6카드(INHEGA-FOCUS-1103, 보스 msg 4781) — 히어로 바로 아래. 정본 lib/focus-services.ts
// 사진: ko 홈은 중점 업무 전용 사진(lib/focus-services.ts FOCUS_PHOTOS) 400·800w — 아래 업종 목록의 업종 사진과 겹치지 않게(QA01-FIX-1114).
// 외국어 홈은 지시 범위 밖이라 아직 업종 사진 정본(lib/service-card-images.ts) 그대로(후보 보고, 승인 후 같은 표로 전환).
// 첫 화면 밖이라 lazy(히어로 LCP 와 대역 경쟁 금지).
const SIZES = '(max-width: 560px) 34vw, (max-width: 1024px) calc(50vw - 2rem), 360px'

const KO_TEXT = {
  badge: '중점 업무',
  heading: '유선행정사사무소 중점 업무',
  lead: '가장 많이 맡는 6개 분야입니다. 요건·절차·서류·처리기간을 업무별 페이지에서 확인하세요.',
  more: '자세히 보기',
}

// 외국어 홈도 같은 6카드(INHEGA-FOCUS-1103 2차) — 이름·설명은 FOCUS_SERVICES_I18N, 링크는 /en|zh|ja/services/<slug>.
export default function FocusServices({ locale = 'ko' }: { locale?: 'ko' | FocusLocale }) {
  const tx = locale === 'ko' ? KO_TEXT : FOCUS_SERVICES_I18N[locale]
  const items = FOCUS_SERVICES.map((f) => {
    if (locale === 'ko') return f
    const i = FOCUS_SERVICES_I18N[locale].items[f.slug]
    return { ...f, href: `/${locale}${f.href}`, label: i.label, desc: i.desc }
  })
  return (
    <section className={styles.section} aria-labelledby="focus-services-t">
      <div className="container">
        <div className="section-header fade-up">
          <span className="badge badge-burgundy text-label">{tx.badge}</span>
          <h2 id="focus-services-t" className="text-h2" style={{ marginTop: '0.75rem' }}>{tx.heading}</h2>
          <span className="accent-line" style={{ marginTop: '1rem' }} />
          <p className="text-body-lg" style={{ marginTop: '1rem' }}>{tx.lead}</p>
        </div>
        <ul className={styles.grid}>
          {items.map((f, i) => {
            const ph = locale === 'ko' ? FOCUS_PHOTOS[f.slug] : undefined
            const base = ph ? `/images/focus/${ph.file}` : industryPhotoBase(f.slug)
            return (
              <li key={f.slug}>
                <Link prefetch={false} href={f.href} className={styles.card}>
                  <div className={styles.photo}>
                    <img
                      src={`${base}-800.webp`}
                      srcSet={`${base}-400.webp 400w, ${base}-800.webp 800w`}
                      sizes={SIZES}
                      alt={ph ? `${ph.ko} — ${f.label}` : industryPhotoAlt(f.slug, locale as FocusLocale, f.label)}
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                    />
                    <span className={styles.num} aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <div className={styles.body}>
                    <h3 className={styles.title}>{f.label}</h3>
                    <p className={styles.desc}>{f.desc}</p>
                    <span className={styles.more}>
                      {tx.more}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </span>
                  </div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
