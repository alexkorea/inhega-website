'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './LangFlags.module.css'
import { Flag, LANG_LINKS, type FlagLang } from './Flag'
// 클라이언트용 경량 목록(slug·href 만) — services-catalog 를 import 하면 본문 코퍼스가 번들에 실린다(lib/services-menu.ts 머리말).
import { SERVICE_MENU, INDUSTRY_MENU } from '@/lib/services-menu.generated'

const SERVICE_PATH = /^\/(?:(en|zh|ja)\/)?services\/([^/?#]+)\/?$/
const SERVICES_LIST: Record<FlagLang, string> = { ko: '/services', en: '/en/services', zh: '/zh/services', ja: '/ja/services' }

/**
 * BOSSEYE-FIX-1014 요약1(맥6 10-13 #22): 업종 페이지에서 국기를 누르면 그 언어 홈(/en)으로 가던 문제.
 * 서비스 상세(/services/<slug>, /<lang>/services/<slug>)에서는 같은 업종의 그 언어 페이지로,
 * 그 언어 페이지가 없으면 그 언어의 서비스 목록으로 보낸다. 그 밖의 페이지는 예전처럼 언어 홈.
 */
function targetHref(lang: FlagLang, fallback: string, pathname: string | null): string {
  const m = pathname ? SERVICE_PATH.exec(pathname) : null
  if (!m) return fallback
  const slug = decodeURIComponent(m[2])
  const hit = [...SERVICE_MENU[lang], ...INDUSTRY_MENU[lang]].find((i) => i.slug === slug)
  return hit ? hit.href : SERVICES_LIST[lang]
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
  const pathname = usePathname()
  return (
    <div className={`${styles.row} ${tone === 'light' ? styles.light : styles.dark} ${className ?? ''}`}>
      {LANG_LINKS.map((l) => {
        const current = l.key === locale
        return (
          <Link
            prefetch={false}
            key={l.key}
            href={current ? l.href : targetHref(l.key, l.href, pathname)}
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
