import Link from 'next/link'
import { getPillarView, pillarUi, EXPERTISE_UI, SERVICES_HEADING_KW, UNIT_BADGE, type FocusPageLocale, type PillarView } from '@/lib/focus-pillar-view'
import styles from './FocusPillar.module.css'
import { servicePageLastmod } from '@/lib/page-lastmod'
import { ORG_ID } from '@/lib/org-jsonld'

// 중점 업무 필러(INHEGA-FOCUS-1103) + AI-RECO-1103 12절 항목 블록(55개, lib/reco-units) — 원고가 없는 slug 는 아무것도 그리지 않는다. ko·en·zh·ja 공용.
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
          <h2 className={styles.servicesHeading}>{ui.servicesHeading.replace('{kw}', SERVICES_HEADING_KW[v.locale]?.[v.slug] ?? v.kw ?? v.label)}</h2>
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

/* AI-RECO-2 E-1(맥7 2026-11-04): 첫 화면에 '어떤 상황의 고객이 의뢰하는가'를 고객 말투 질문 소제목(H2 + H3)으로.
   질문은 아래 '상황별 질문'에 이미 있는 글자 그대로(내 상황 고르기 대상 순서) — 새 문장을 만들지 않는다. 답은 앵커로 이어진다. */
const ASK_HEADING: Record<FocusPageLocale, string> = {
  ko: '이런 상황에서 의뢰하십니다',
  en: 'Situations clients bring to us',
  zh: '客户常见的委托情形',
  ja: 'このようなご相談をいただいています',
}
/* AI-RECO-2 E-4: 업무 페이지 상단 '최종 수정일' 한 줄 + WebPage.dateModified(같은 값, lib/page-lastmod.ts). 확인일·근거·출처 표기는 하지 않는다. */
const UPDATED_LABEL: Record<FocusPageLocale, string> = { ko: '최종 수정일', en: 'Last updated', zh: '最后更新', ja: '最終更新日' }
const PAGE_BASE: Record<FocusPageLocale, string> = { ko: '', en: '/en', zh: '/zh', ja: '/ja' }
const LANG_TAG_LD: Record<FocusPageLocale, string> = { ko: 'ko-KR', en: 'en', zh: 'zh-CN', ja: 'ja-JP' }

function askQuestions(v: PillarView): { id: string; q: string }[] {
  const byId = new Map(v.situations.map((s) => [s.id, s.q]))
  const out: { id: string; q: string }[] = []
  for (const c of v.chooser) {
    const q = byId.get(c.target)
    if (q && !out.some((o) => o.id === c.target)) out.push({ id: c.target, q })
  }
  for (const s of v.situations) {
    if (out.length >= 3) break
    if (!out.some((o) => o.id === s.id)) out.push({ id: s.id, q: s.q })
  }
  return out.slice(0, 6)
}

export function FocusPillarTop({ slug, locale = 'ko' }: { slug: string; locale?: FocusPageLocale }) {
  const v = getPillarView(locale, slug)
  if (!v) return null
  const ui = pillarUi(locale)
  const asks = askQuestions(v)
  const updated = servicePageLastmod(locale, slug)
  const url = `https://inhega.co.kr${PAGE_BASE[locale]}/services/${slug}`
  const webPageLd = updated ? {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: v.label,
    inLanguage: LANG_TAG_LD[locale],
    dateModified: updated,
    about: { '@id': `${url}#service` },
    publisher: { '@id': ORG_ID },
  } : null
  return (
    <section className={`${styles.glance} fade-up`} id="svc-glance">
      {webPageLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />}
      {updated && (
        <p className={styles.updated}>{UPDATED_LABEL[locale]} <time dateTime={updated}>{updated}</time></p>
      )}
      <span className="badge badge-burgundy text-label">{v.focus ? ui.badge : UNIT_BADGE[locale]}</span>
      {v.answer && (
        <div className={styles.answer} id="svc-answer">
          <p className={styles.answerLabel}>{ui.answerLabel}</p>
          <p className={styles.answerText}>{v.answer}</p>
        </div>
      )}
      {asks.length > 0 && (
        <nav className={styles.ask} id="svc-chooser" aria-label={ASK_HEADING[locale]}>
          <h2 className={styles.askHeading}>{ASK_HEADING[locale]}</h2>
          <ul className={styles.askList}>
            {asks.map((a) => (
              <li key={a.id}><h3 className={styles.askQ}><a href={`#${a.id}`}>{a.q}</a></h3></li>
            ))}
          </ul>
        </nav>
      )}
      <Expertise v={v} />
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
