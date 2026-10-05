import Link from 'next/link'
import styles from './LangFlags.module.css'

/**
 * 언어 선택 국기 아이콘(INH-LAYOUT, 2026-10-05 보스 msg 2277) — 헤더·모바일 메뉴·풋터가 같이 쓴다.
 * 국기 이모지는 윈도우에서 'KR'·'CN' 글자로 깨지므로 금지 — 작은 SVG 파일(public/images/flags)로만 그린다.
 * 각 링크에 aria-label·title(그 언어 자기 이름), 현재 언어는 테두리 + aria-current, 탭 영역 44px.
 */
export type FlagLang = 'ko' | 'en' | 'zh' | 'ja'

export const LANG_LINKS: { key: FlagLang; href: string; name: string; hreflang: string }[] = [
  { key: 'ko', href: '/', name: '한국어', hreflang: 'ko' },
  { key: 'en', href: '/en', name: 'English', hreflang: 'en' },
  { key: 'zh', href: '/zh', name: '中文', hreflang: 'zh' },
  { key: 'ja', href: '/ja', name: '日本語', hreflang: 'ja' },
]

/** 국기 하나(장식용, aria-hidden). 본문 '다른 언어로 보기' 링크의 이모지 대체용. */
export function Flag({ lang }: { lang: FlagLang }) {
  // 국기 4장은 public/images/flags/<lang>-20261005.svg 정적 파일(캐시됨, 0.2~1.1KB).
  // 인라인 SVG 로 넣으면 한 페이지에 12번 + RSC 페이로드에 한 번 더 실려 HTML 이 약 20KB 늘고
  // PSI 모바일 LCP 가 2.55s 까지 올랐다(INH-LAYOUT 10-05). 파일명을 바꾸면 캐시 버스팅.
  return (
    <img
      className={styles.flag}
      src={`/images/flags/${lang}-20261005.svg`}
      width={22}
      height={15}
      alt=""
      decoding="async"
      fetchPriority="low"
    />
  )
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
