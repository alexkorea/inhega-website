import Link from 'next/link'
import styles from './Footer.module.css'
import { getServiceMenuByGroup, getServiceMenuCount } from '@/lib/services-menu'
import type { CatalogLocale } from '@/lib/services-catalog'

/**
 * 풋터 서비스 열(0949 추가, 2026-10-04 보스 msg 1795) — 분야 그룹 링크(그룹명 → /services#grp-<id>).
 * 업종 하나하나를 나열하지 않고 분야로 묶어 전 업종에 닿게 한다. 목록·개수 정본은
 * lib/service-directory.ts(경량판 lib/services-menu.ts). 여기에 서비스 배열·숫자를 다시 적지 말 것.
 */
const UI: Record<CatalogLocale, { title: string; all: (n: number) => string }> = {
  ko: { title: '서비스 분야', all: (n) => `전체 ${n}종 보기` },
  en: { title: 'Services', all: (n) => `All ${n} services` },
  zh: { title: '服务项目', all: (n) => `全部${n}项服务` },
  ja: { title: 'サービス', all: (n) => `全${n}種のサービス` },
}
const PREFIX: Record<CatalogLocale, string> = { ko: '', en: '/en', zh: '/zh', ja: '/ja' }

export default function FooterServiceGroups({ locale, title }: { locale: CatalogLocale; title?: string }) {
  const groups = getServiceMenuByGroup(locale)
  const base = `${PREFIX[locale]}/services`
  const half = Math.ceil(groups.length / 2)
  const cols = [groups.slice(0, half), groups.slice(half)]
  return (
    <>
      {cols.map((col, ci) => (
        <div key={ci} className={styles.linksCol}>
          <p className={ci ? `${styles.colTitle} ${styles.colTitleBlank}` : styles.colTitle}>{ci === 0 ? (title ?? UI[locale].title) : ' '}</p>
          <ul className={styles.linkList} style={ci ? { marginTop: 0 } : undefined}>
            {col.map((g) => (
              <li key={g.id}>
                <Link prefetch={false} href={`${base}#grp-${g.id}`} className={styles.link}>
                  {g.label} <span className={styles.linkCount}>{g.items.length}</span>
                </Link>
              </li>
            ))}
            {ci === 1 && (
              <li>
                <Link prefetch={false} href={base} className={`${styles.link} ${styles.linkAll}`}>
                  {UI[locale].all(getServiceMenuCount(locale))} →
                </Link>
              </li>
            )}
          </ul>
        </div>
      ))}
    </>
  )
}
