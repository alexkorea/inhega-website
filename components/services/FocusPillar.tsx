import Link from 'next/link'
import { getPillarView, pillarUi, EXPERTISE_UI, SERVICES_HEADING_KW, type FocusPageLocale, type PillarView } from '@/lib/focus-pillar-view'
import styles from './FocusPillar.module.css'

// 중점 업무 필러(INHEGA-FOCUS-1103) — 중점 6개가 아니면 아무것도 그리지 않는다. ko·en·zh·ja 공용.
// 순서: 핵심 답변(AI 답변용 직답) → 처리하는 업무(3차, 각 항목은 본문 앵커) → 이런 고객이 맡깁니다(3차) → 내 상황 고르기(앵커, JS 없음)
//       → 한눈에 보기 → 외국기업 박스 → 단계 → 상황별 질문 → 상담. 맨 아래(FocusPillarGlossary): 용어 설명(DefinedTermSet) → 사무소 카드.
const fill = (s: string, label: string) => s.replace('{label}', label)

function Situations({ v }: { v: PillarView }) {
  const ui = pillarUi(v.locale)
  if (v.situations.length === 0) return null
  return (
    <div className={styles.situations} id="svc-situations">
      <h3 className="text-h3" style={{ marginTop: '2rem', color: 'var(--charcoal)' }}>{ui.situationsHeading}</h3>
      <p className={styles.situationsLead}>{ui.situationsLead}</p>
      <ol className={styles.sitList}>
        {v.situations.map((s) => (
          <li key={s.id} id={s.id} className={styles.sit}>
            <h4 className={styles.sitQ}>{s.q}</h4>
            <p className={styles.sitConclusion}><strong>{ui.conclusionLabel}</strong> {s.conclusion}</p>
            {s.branches.length > 0 && (
              <ul className={styles.sitBranches}>
                {s.branches.map((b) => (
                  <li key={b.when}><strong>{b.when}</strong> {b.then}</li>
                ))}
              </ul>
            )}
            <dl className={styles.sitMeta}>
              <div><dt>{ui.docsLabel}</dt><dd>{s.docs}</dd></div>
              <div><dt>{ui.periodLabel}</dt><dd>{s.period}</dd></div>
            </dl>
            {s.href && <Link prefetch={false} href={s.href} className={styles.stageLink}>{ui.moreLabel}</Link>}
          </li>
        ))}
      </ol>
    </div>
  )
}


function Expertise({ v }: { v: PillarView }) {
  const ex = v.expertise
  if (!ex) return null
  const ui = EXPERTISE_UI[v.locale]
  return (
    <>
      {ex.services.length > 0 && (
        <div className={styles.services} id="svc-services">
          <h2 className={styles.servicesHeading}>{ui.servicesHeading.replace('{kw}', SERVICES_HEADING_KW[v.locale]?.[v.slug] ?? v.label)}</h2>
          <ul className={styles.servicesList}>
            {ex.services.map((s) => (
              <li key={s.name}>
                {s.href.startsWith('#')
                  ? <a href={s.href}>{s.name}</a>
                  : <Link prefetch={false} href={s.href}>{s.name}</Link>}
              </li>
            ))}
          </ul>
        </div>
      )}
      {ex.clients.length > 0 && (
        <div className={styles.clients} id="svc-clients">
          <p className={styles.clientsHeading}>{ui.clientsHeading}</p>
          <ul>
            {ex.clients.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      )}
    </>
  )
}

export function FocusPillarTop({ slug, locale = 'ko' }: { slug: string; locale?: FocusPageLocale }) {
  const v = getPillarView(locale, slug)
  if (!v) return null
  const ui = pillarUi(locale)
  return (
    <section className={`${styles.glance} fade-up`} id="svc-glance">
      <span className="badge badge-burgundy text-label">{ui.badge}</span>
      {v.answer && (
        <div className={styles.answer} id="svc-answer">
          <p className={styles.answerLabel}>{ui.answerLabel}</p>
          <p className={styles.answerText}>{v.answer}</p>
        </div>
      )}
      <Expertise v={v} />
      {v.chooser.length > 0 && (
        <nav className={styles.chooser} id="svc-chooser" aria-label={ui.chooserHeading}>
          <p className={styles.chooserHeading}>{ui.chooserHeading}</p>
          <ul>
            {v.chooser.map((c) => (
              <li key={c.target + c.label}><a href={`#${c.target}`}>{c.label}</a></li>
            ))}
          </ul>
        </nav>
      )}
      <h2 className="text-h2" style={{ marginTop: '1.5rem', color: 'var(--charcoal)' }}>{fill(ui.glanceHeading, v.label)}</h2>
      <span className="accent-line" style={{ marginTop: '0.75rem' }} />
      <dl className={styles.glanceList}>
        {v.glance.map((g) => (
          <div key={g.label} className={styles.glanceRow}>
            <dt>{g.label}</dt>
            <dd>{g.value}</dd>
          </div>
        ))}
      </dl>
      {v.note && (
        <div className={styles.note} id="svc-foreign">
          <p className={styles.noteHeading}>{v.note.heading}</p>
          <ul>
            {v.note.items.map((t) => <li key={t}>{t}</li>)}
          </ul>
        </div>
      )}
      {v.stages && v.stages.length > 0 && (
        <div id="svc-stages" className={styles.stagesWrap}>
          <h3 className="text-h3" style={{ marginTop: '1.75rem', color: 'var(--charcoal)' }}>{v.stagesHeading ?? ui.stagesHeading}</h3>
          <ol className={styles.stages}>
            {v.stages.map((s, i) => (
              <li key={s.title} className={styles.stage} id={`svc-stage-${i + 1}`}>
                <p className={styles.stageTitle}>{s.title}</p>
                <p className={styles.stageDesc}>{s.desc}</p>
                {s.href && <Link prefetch={false} href={s.href} className={styles.stageLink}>{ui.stageMore}</Link>}
              </li>
            ))}
          </ol>
        </div>
      )}
      <Situations v={v} />
      <div className={styles.cta}>
        <Link prefetch={false} href={ui.contactHref} className="btn btn-primary">{fill(ui.consult, v.label)}</Link>
        <Link prefetch={false} href={ui.quoteHref} className="btn btn-secondary">{ui.quote}</Link>
      </div>
    </section>
  )
}

export function FocusPillarRelated({ slug, locale = 'ko' }: { slug: string; locale?: FocusPageLocale }) {
  const v = getPillarView(locale, slug)
  if (!v || v.related.length === 0) return null
  const ui = pillarUi(locale)
  return (
    <section className={`${styles.related} fade-up`} id="svc-related-guides">
      <span className="badge badge-navy text-label">{ui.relatedBadge}</span>
      <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>{fill(ui.relatedHeading, v.label)}</h2>
      <span className="accent-line" style={{ marginTop: '0.75rem' }} />
      <ul className={styles.relatedList}>
        {v.related.map((r) => (
          <li key={r.href}><Link prefetch={false} href={r.href}>{r.title}</Link></li>
        ))}
      </ul>
    </section>
  )
}

/** 3차: 용어 설명(DefinedTermSet 과 같은 글자) + 사무소 카드(주소·대표전화·평일 09:30~17:30). 중점 6개만. */
export function FocusPillarGlossary({ slug, locale = 'ko' }: { slug: string; locale?: FocusPageLocale }) {
  const v = getPillarView(locale, slug)
  if (!v) return null
  const ui = EXPERTISE_UI[locale]
  const gl = v.expertise?.glossary ?? []
  return (
    <>
      {gl.length > 0 && (
        <section className={`${styles.glossary} fade-up`} id="svc-glossary">
          <span className="badge badge-navy text-label">{ui.glossaryBadge}</span>
          <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>{ui.glossaryHeading.replace('{label}', v.label)}</h2>
          <span className="accent-line" style={{ marginTop: '0.75rem' }} />
          <dl className={styles.glossaryList}>
            {gl.map((g) => (
              <div key={g.id} id={g.id} className={styles.term}>
                <dt>{g.term}</dt>
                <dd>{g.def}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}
      <section className={`${styles.office} fade-up`} id="svc-office" aria-label={ui.officeHeading}>
        <p className={styles.officeHeading}>{ui.officeHeading}</p>
        <p className={styles.officeName}>{ui.officeName}</p>
        <p className={styles.officeIntro}>{ui.officeIntro}</p>
        <dl className={styles.officeRows}>
          {ui.officeRows.map((r) => (
            <div key={r.label}>
              <dt>{r.label}</dt>
              <dd>{r.href ? <a href={r.href}>{r.value}</a> : r.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  )
}
