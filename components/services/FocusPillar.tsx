import Link from 'next/link'
import { FOCUS_PILLARS } from '@/lib/focus-pillars'
import { FOCUS_SERVICES } from '@/lib/focus-services'
import styles from './FocusPillar.module.css'

// 중점 업무 필러 요약(INHEGA-FOCUS-1103) — 중점 6개가 아니면 아무것도 그리지 않는다.
const labelOf = (slug: string) => FOCUS_SERVICES.find((f) => f.slug === slug)?.label

export function FocusPillarTop({ slug }: { slug: string }) {
  const p = FOCUS_PILLARS[slug]
  const label = labelOf(slug)
  if (!p || !label) return null
  return (
    <section className={`${styles.glance} fade-up`} id="svc-glance">
      <span className="badge badge-burgundy text-label">중점 업무</span>
      <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>{label} 한눈에 보기</h2>
      <span className="accent-line" style={{ marginTop: '0.75rem' }} />
      <dl className={styles.glanceList}>
        {p.glance.map((g) => (
          <div key={g.label} className={styles.glanceRow}>
            <dt>{g.label}</dt>
            <dd>{g.value}</dd>
          </div>
        ))}
      </dl>
      {p.note && (
        <div className={styles.note}>
          <p className={styles.noteHeading}>{p.note.heading}</p>
          <ul>
            {p.note.items.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      )}
      {p.stages && (
        <>
          <h3 className="text-h3" style={{ marginTop: '1.75rem', color: 'var(--charcoal)' }}>{p.stagesHeading}</h3>
          <ol className={styles.stages}>
            {p.stages.map((s) => (
              <li key={s.title} className={styles.stage}>
                <p className={styles.stageTitle}>{s.title}</p>
                <p className={styles.stageDesc}>{s.desc}</p>
                {s.href && <Link prefetch={false} href={s.href} className={styles.stageLink}>자세히 보기</Link>}
              </li>
            ))}
          </ol>
        </>
      )}
      <div className={styles.cta}>
        <Link prefetch={false} href="/contact" className="btn btn-primary">{label} 상담 신청</Link>
        <Link prefetch={false} href="/quote" className="btn btn-secondary">견적 문의</Link>
      </div>
    </section>
  )
}

export function FocusPillarRelated({ slug }: { slug: string }) {
  const p = FOCUS_PILLARS[slug]
  const label = labelOf(slug)
  if (!p || !label || p.related.length === 0) return null
  return (
    <section className={`${styles.related} fade-up`} id="svc-related-guides">
      <span className="badge badge-navy text-label">관련 세부 안내</span>
      <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>{label} 관련 가이드</h2>
      <span className="accent-line" style={{ marginTop: '0.75rem' }} />
      <ul className={styles.relatedList}>
        {p.related.map((r) => (
          <li key={r.href}><Link prefetch={false} href={r.href}>{r.title}</Link></li>
        ))}
      </ul>
    </section>
  )
}
