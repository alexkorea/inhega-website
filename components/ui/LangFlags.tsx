import Link from 'next/link'
import type { JSX } from 'react'
import styles from './LangFlags.module.css'

/**
 * 언어 선택 국기 아이콘(INH-LAYOUT, 2026-10-05 보스 msg 2277) — 헤더·모바일 메뉴·풋터가 같이 쓴다.
 * 국기 이모지는 윈도우에서 'KR'·'CN' 글자로 깨지므로 금지 — 작은 인라인 SVG 로만 그린다(요청 0).
 * 각 링크에 aria-label·title(그 언어 자기 이름), 현재 언어는 테두리 + aria-current, 탭 영역 44px.
 */
export type FlagLang = 'ko' | 'en' | 'zh' | 'ja'

export const LANG_LINKS: { key: FlagLang; href: string; name: string; hreflang: string }[] = [
  { key: 'ko', href: '/', name: '한국어', hreflang: 'ko' },
  { key: 'en', href: '/en', name: 'English', hreflang: 'en' },
  { key: 'zh', href: '/zh', name: '中文', hreflang: 'zh' },
  { key: 'ja', href: '/ja', name: '日本語', hreflang: 'ja' },
]

// 한국: 태극(33.69° 기울임) + 괘 4개(단순화한 막대 3개)
function Kr() {
  const bars = (x: number, y: number, deg: number) => (
    <g transform={`translate(${x} ${y}) rotate(${deg})`} fill="#000">
      <rect x="-2.6" y="-2.1" width="5.2" height="0.9" />
      <rect x="-2.6" y="-0.45" width="5.2" height="0.9" />
      <rect x="-2.6" y="1.2" width="5.2" height="0.9" />
    </g>
  )
  return (
    <svg viewBox="0 0 36 24" aria-hidden="true" focusable="false">
      <rect width="36" height="24" fill="#fff" />
      <g transform="rotate(33.69 18 12)">
        <path d="M12 12a6 6 0 0 1 12 0a3 3 0 0 1-6 0a3 3 0 0 0-6 0z" fill="#CD2E3A" />
        <path d="M12 12a3 3 0 0 0 6 0a3 3 0 0 1 6 0a6 6 0 0 1-12 0z" fill="#0047A0" />
      </g>
      {bars(8.4, 5.6, -56.31)}
      {bars(27.6, 18.4, -56.31)}
      {bars(27.6, 5.6, 56.31)}
      {bars(8.4, 18.4, 56.31)}
    </svg>
  )
}

// 미국: 줄 13개 + 캔턴(별은 점 격자로 단순화)
function Us() {
  const stripes = [0, 2, 4, 6, 8, 10, 12]
  const dots: [number, number][] = []
  for (let r = 0; r < 4; r++) for (let c = 0; c < 5; c++) dots.push([1 + c * 1.4 + (r % 2) * 0.7, 1 + r * 1.6])
  return (
    <svg viewBox="0 0 19 13" aria-hidden="true" focusable="false">
      <rect width="19" height="13" fill="#fff" />
      {stripes.map((y) => <rect key={y} y={y} width="19" height="1" fill="#B22234" />)}
      <rect width="7.6" height="7" fill="#3C3B6E" />
      {dots.map(([x, y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.35" fill="#fff" />)}
    </svg>
  )
}

// 중국: 큰 별 1 + 작은 별 4(큰 별 쪽을 향함)
function Cn() {
  return (
    <svg viewBox="0 0 30 20" aria-hidden="true" focusable="false">
      <rect width="30" height="20" fill="#EE1C25" />
      <g fill="#FFFF00">
        <polygon points="5.00,2.00 5.67,4.07 7.85,4.07 6.09,5.35 6.76,7.43 5.00,6.15 3.24,7.43 3.91,5.35 2.15,4.07 4.33,4.07" />
        <polygon points="9.14,2.51 9.62,1.97 9.25,1.34 9.91,1.63 10.39,1.08 10.33,1.80 11.00,2.09 10.29,2.25 10.22,2.97 9.85,2.35" />
        <polygon points="11.01,4.14 11.66,3.82 11.56,3.10 12.07,3.62 12.72,3.30 12.38,3.95 12.88,4.47 12.17,4.34 11.83,4.99 11.73,4.27" />
        <polygon points="11.04,6.73 11.76,6.70 11.96,6.00 12.21,6.68 12.94,6.66 12.37,7.10 12.62,7.79 12.01,7.38 11.44,7.83 11.64,7.13" />
        <polygon points="9.22,8.38 9.90,8.63 10.35,8.06 10.32,8.79 11.00,9.05 10.30,9.24 10.26,9.96 9.87,9.36 9.16,9.55 9.62,8.98" />
      </g>
    </svg>
  )
}

// 일본: 흰 바탕 + 붉은 원
function Jp() {
  return (
    <svg viewBox="0 0 30 20" aria-hidden="true" focusable="false">
      <rect width="30" height="20" fill="#fff" />
      <circle cx="15" cy="10" r="6" fill="#BC002D" />
    </svg>
  )
}

const FLAGS: Record<FlagLang, () => JSX.Element> = { ko: Kr, en: Us, zh: Cn, ja: Jp }

/** 국기 하나(장식용, aria-hidden). 본문 '다른 언어로 보기' 링크의 이모지 대체용. */
export function Flag({ lang }: { lang: FlagLang }) {
  const F = FLAGS[lang]
  return <span className={styles.flag}><F /></span>
}

export default function LangFlags({
  locale,
  tone = 'dark',
  className,
}: {
  locale: FlagLang
  tone?: 'dark' | 'light'
  className?: string
}) {
  return (
    <div className={`${styles.row} ${tone === 'light' ? styles.light : styles.dark} ${className ?? ''}`}>
      {LANG_LINKS.map((l) => {
        const current = l.key === locale
        return (
          <Link
            prefetch={false}
            key={l.key}
            href={l.href}
            hrefLang={l.hreflang}
            lang={l.hreflang}
            aria-label={l.name}
            title={l.name}
            aria-current={current ? 'true' : undefined}
            className={`${styles.item} ${current ? styles.current : ''}`}
          >
            <Flag lang={l.key} />
          </Link>
        )
      })}
    </div>
  )
}
