import Link from 'next/link'
import type { CatalogLocale } from '@/lib/services-catalog'
import { getServiceDirectory, type DirectoryEntry } from '@/lib/service-directory'
import DirectoryTabs from './DirectoryTabs'
import styles from './ServiceDirectory.module.css'

/**
 * 서비스 전체 목록(기존 24종 + 신규 업종) — 분야별 (0949, 2026-10-04).
 *   mode="tabs"     홈: 분야 탭
 *   mode="sections" /services: 분야 소제목 + 바로가기
 * 목록·문구 정본은 lib/service-directory.ts. 여기서 서비스 배열을 다시 적지 말 것.
 */
const UI: Record<CatalogLocale, { more: string; groups: string; reqs: string }> = {
  ko: { more: '자세히 보기', groups: '인허가 분야', reqs: '핵심 요건' },
  en: { more: 'Learn More', groups: 'Service categories', reqs: 'Key requirements' },
  zh: { more: '了解详情', groups: '服务领域', reqs: '核心要求' },
  ja: { more: '詳しく見る', groups: 'サービス分野', reqs: '主な要件' },
}

function Card({ e, locale, heading: H }: { e: DirectoryEntry; locale: CatalogLocale; heading: 'h3' | 'h4' }) {
  return (
    <li>
      <Link prefetch={false} href={e.href} className={styles.card}>
        <H className={styles.cardTitle}>{e.title}</H>
        <p className={styles.cardDesc}>{e.desc}</p>
        {e.reqs.length > 0 && (
          <ul className={styles.cardReqs} aria-label={UI[locale].reqs}>
            {e.reqs.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        )}
        <span className={styles.cardMore}>
          {UI[locale].more}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </Link>
    </li>
  )
}

export default function ServiceDirectory({ locale, mode }: { locale: CatalogLocale; mode: 'tabs' | 'sections' }) {
  const groups = getServiceDirectory(locale)
  const cjk = locale === 'zh' || locale === 'ja' ? styles.cjk : ''

  if (mode === 'tabs') {
    return (
      <div className={`${styles.directory} ${cjk}`}>
        <DirectoryTabs tabs={groups.map((g) => ({ id: g.id, label: g.label, count: g.items.length }))} label={UI[locale].groups}>
          {groups.map((g) => (
            <ul key={g.id} className={styles.grid}>
              {g.items.map((e) => (
                <Card key={e.slug} e={e} locale={locale} heading="h3" />
              ))}
            </ul>
          ))}
        </DirectoryTabs>
      </div>
    )
  }

  return (
    <div className={`${styles.directory} ${cjk}`}>
      <nav aria-label={UI[locale].groups} className={styles.tabs}>
        {groups.map((g) => (
          <a key={g.id} href={`#grp-${g.id}`} className={styles.tab}>
            {g.label}
            <span className={styles.tabCount}>{g.items.length}</span>
          </a>
        ))}
      </nav>
      {groups.map((g) => (
        <section key={g.id} id={`grp-${g.id}`} className={styles.group}>
          <h2 className={styles.groupTitle}>
            {g.label}
            <span className={styles.groupCount}>{g.items.length}</span>
          </h2>
          <ul className={styles.grid}>
            {g.items.map((e) => (
              <Card key={e.slug} e={e} locale={locale} heading="h3" />
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
