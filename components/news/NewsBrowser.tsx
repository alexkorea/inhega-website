'use client'

/**
 * /news 목록 UI — 탭·필터·검색·아코디언.
 *
 * 서버가 KV 에서 읽은 항목을 통째로 내려주고 여기서 걸러낸다. 필터가 URL 을 바꾸지
 * 않으므로 탭 전환에 왕복이 없고, 목록 자체의 색인 URL 도 /news 하나로 유지된다.
 *
 * 카드 하단 버튼은 두 갈래다(맥7 20260923-1715 지시 2).
 *   · 기사 있음(has_article) → `/news/<slug>` 개별 기사 페이지로 가는 링크
 *   · 기사 없음             → 예전처럼 카드 안에서 요약 메타를 펼친다
 * `articleBase` 가 null 인 로케일(en/zh/ja)은 개별 페이지가 아직 없으므로 항상 펼침이다.
 */
import { useMemo, useState } from 'react'
import Link from 'next/link'
import type { NewsCard } from '@/lib/news-data'
import { SOURCE_LABELS } from '@/lib/news-data'
import { formatNewsDate, type NewsLocale, type NewsStrings } from '@/lib/i18n/news-i18n'
import styles from '@/app/news.module.css'

const PAGE_SIZE = 12

type Tab = 'all' | '해외' | '국내'

const impactClass: Record<string, string> = {
  상: styles.badgeImpactHigh,
  중: styles.badgeImpactMid,
  하: styles.badgeImpactLow,
}

export default function NewsBrowser({
  items,
  t,
  locale,
  contactHref,
  articleBase,
}: {
  items: NewsCard[]
  t: NewsStrings
  locale: NewsLocale
  contactHref: string
  /** 개별 기사 경로의 접두사. 개별 페이지가 없는 로케일은 null. */
  articleBase: string | null
}) {
  const [tab, setTab] = useState<Tab>('all')
  const [country, setCountry] = useState('')
  const [product, setProduct] = useState('')
  const [impact, setImpact] = useState('')
  const [query, setQuery] = useState('')
  const [visible, setVisible] = useState(PAGE_SIZE)
  const [openKey, setOpenKey] = useState<string | null>(null)

  const facets = useMemo(() => {
    const uniq = (vals: string[]) =>
      [...new Set(vals.filter(Boolean))].sort((a, b) => a.localeCompare(b, 'ko'))
    return {
      countries: uniq(items.map((i) => i.country)),
      products: uniq(items.map((i) => i.product)),
      impacts: (['상', '중', '하'] as const).filter((v) => items.some((i) => i.impact === v)),
    }
  }, [items])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter((it) => {
      if (tab !== 'all' && it.scope !== tab) return false
      if (country && it.country !== country) return false
      if (product && it.product !== product) return false
      if (impact && it.impact !== impact) return false
      if (q) {
        const hay = `${it.title_ko} ${it.summary_ko} ${it.product} ${it.country} ${it.stage}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [items, tab, country, product, impact, query])

  // 필터를 바꾸면 "더 보기"로 늘려둔 개수를 처음으로 되돌린다.
  const reset = <T,>(setter: (v: T) => void) => (v: T) => {
    setter(v)
    setVisible(PAGE_SIZE)
    setOpenKey(null)
  }

  const shown = filtered.slice(0, visible)

  const tabs: { key: Tab; label: string }[] = [
    { key: 'all', label: t.tabs.all },
    { key: '해외', label: t.tabs.overseas },
    { key: '국내', label: t.tabs.domestic },
  ]

  return (
    <>
      <div className={styles.toolbar}>
        <div className={styles.tabs} role="tablist" aria-label={t.badge}>
          {tabs.map((item) => (
            <button
              key={item.key}
              type="button"
              role="tab"
              aria-selected={tab === item.key}
              className={`${styles.tab} ${tab === item.key ? styles.tabActive : ''}`}
              onClick={() => reset(setTab)(item.key)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className={styles.filters}>
          <label className={styles.field}>
            <span className={styles.fieldLabel}>{t.filterCountry}</span>
            <select
              className={styles.select}
              value={country}
              onChange={(e) => reset(setCountry)(e.target.value)}
            >
              <option value="">{t.filterAll}</option>
              {facets.countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>{t.filterProduct}</span>
            <select
              className={styles.select}
              value={product}
              onChange={(e) => reset(setProduct)(e.target.value)}
            >
              <option value="">{t.filterAll}</option>
              {facets.products.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>{t.filterImpact}</span>
            <select
              className={styles.select}
              value={impact}
              onChange={(e) => reset(setImpact)(e.target.value)}
            >
              <option value="">{t.filterAll}</option>
              {facets.impacts.map((v) => (
                <option key={v} value={v}>{t.impactValues[v] ?? v}</option>
              ))}
            </select>
          </label>

          <label className={styles.field}>
            <span className={styles.fieldLabel}>{t.searchPlaceholder}</span>
            <input
              type="search"
              className={styles.search}
              placeholder={t.searchPlaceholder}
              value={query}
              enterKeyHint="search"
              autoComplete="off"
              onChange={(e) => reset(setQuery)(e.target.value)}
            />
          </label>
        </div>

        <p className={styles.resultCount} aria-live="polite">{t.countTemplate.replace('{n}', String(filtered.length))}</p>
      </div>

      {shown.length === 0 ? (
        <div className={styles.empty}>
          <p className={styles.emptyTitle}>{t.empty}</p>
          <p className={styles.emptyHint}>{t.emptyHint}</p>
          <Link href={contactHref} className="btn btn-primary">{t.cta}</Link>
        </div>
      ) : (
        <div className={styles.list}>
          {shown.map((it) => {
            const open = openKey === it.doc_key
            const panelId = `news-detail-${encodeURIComponent(it.doc_key)}`
            const articleHref = articleBase && it.has_article && it.slug ? `${articleBase}/${it.slug}` : null
            return (
              <article key={it.doc_key} className={styles.card}>
                <div className={styles.cardTop}>
                  <span className={styles.date}>{formatNewsDate(it.published_date, locale)}</span>
                  {it.country && <span className={`${styles.badge} ${styles.badgeCountry}`}>{it.country}</span>}
                  {it.scope && (
                    <span className={`${styles.badge} ${styles.badgeScope}`}>
                      {t.scopeValues[it.scope] ?? it.scope}
                    </span>
                  )}
                  {it.impact && (
                    <span className={`${styles.badge} ${impactClass[it.impact] ?? styles.badgeImpactLow}`}>
                      {t.impact} {t.impactValues[it.impact] ?? it.impact}
                    </span>
                  )}
                </div>

                <h3 className={styles.title}>{it.title_ko}</h3>

                {it.summary_ko && (
                  <p className={`${styles.summary} ${open ? styles.summaryOpen : ''}`}>{it.summary_ko}</p>
                )}

                <div className={styles.metaRow}>
                  {it.product && (
                    <span><span className={styles.metaKey}>{t.product}</span>{it.product}</span>
                  )}
                  {it.stage && (
                    <span><span className={styles.metaKey}>{t.stage}</span>{it.stage}</span>
                  )}
                  <span>
                    <span className={styles.metaKey}>{t.deadline}</span>
                    {it.deadline ? formatNewsDate(it.deadline, locale) : t.deadlineNone}
                  </span>
                </div>

                {open && (
                  <div className={styles.detail} id={panelId}>
                    {it.opportunity && (
                      <p className={styles.detailRow}>
                        <span className={styles.metaKey}>{t.opportunity}</span>
                        {t.opportunityValues[it.opportunity] ?? it.opportunity}
                      </p>
                    )}
                    {it.opportunity_reason && (
                      <p className={styles.detailRow}>
                        <span className={styles.metaKey}>{t.opportunityReason}</span>
                        {it.opportunity_reason}
                      </p>
                    )}
                    {it.relevance > 0 && (
                      <p className={styles.detailRow}>
                        <span className={styles.metaKey}>{t.relevance}</span>{it.relevance}/100
                      </p>
                    )}
                    <p className={styles.detailRow}>
                      <span className={styles.metaKey}>{t.source}</span>
                      {SOURCE_LABELS[it.source_key] ?? it.source_key ?? ''}
                    </p>
                  </div>
                )}

                <div className={styles.actions}>
                  {articleHref ? (
                    <Link className={styles.expandBtn} href={articleHref}>{t.readMore}</Link>
                  ) : (
                    <button
                      type="button"
                      className={styles.expandBtn}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenKey(open ? null : it.doc_key)}
                    >
                      {open ? t.collapse : t.expand}
                    </button>
                  )}
                  {it.url && (
                    <a
                      className={styles.linkBtn}
                      href={it.url}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                    >
                      {t.original}
                    </a>
                  )}
                  <Link className={styles.ctaBtn} href={contactHref}>{t.cta}</Link>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {visible < filtered.length && (
        <div className={styles.moreWrap}>
          <button type="button" className={styles.moreBtn} onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            {t.more}
          </button>
        </div>
      )}
    </>
  )
}
