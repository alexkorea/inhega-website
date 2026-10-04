'use client'
import { useState, type ReactNode } from 'react'
import styles from './ServiceDirectory.module.css'

/**
 * 홈 분야 탭(0949). 패널 내용은 서버에서 다 그려 children 으로 받는다 — 여기엔 탭 상태만 있다.
 * 비활성 패널도 HTML 에 그대로 있고(hidden), JS 가 없으면 첫 탭만 보인다.
 */
export default function DirectoryTabs({
  tabs,
  label,
  children,
}: {
  tabs: { id: string; label: string; count: number }[]
  label: string
  children: ReactNode[]
}) {
  const [active, setActive] = useState(0)
  return (
    <div>
      <div role="tablist" aria-label={label} className={styles.tabs}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`svc-tab-${t.id}`}
            aria-controls={`svc-panel-${t.id}`}
            aria-selected={i === active}
            tabIndex={i === active ? 0 : -1}
            className={`${styles.tab} ${i === active ? styles.tabActive : ''}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
              const next = (active + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length
              setActive(next)
              document.getElementById(`svc-tab-${tabs[next].id}`)?.focus()
            }}
          >
            {t.label}
            <span className={styles.tabCount}>{t.count}</span>
          </button>
        ))}
      </div>
      {children.map((panel, i) => (
        <div
          key={tabs[i].id}
          role="tabpanel"
          id={`svc-panel-${tabs[i].id}`}
          aria-labelledby={`svc-tab-${tabs[i].id}`}
          hidden={i !== active}
          className={styles.panel}
        >
          {panel}
        </div>
      ))}
    </div>
  )
}
