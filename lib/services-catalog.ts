import { publicServices } from './services-data'
import { getServiceI18n } from './i18n/services-i18n'
import type { Locale } from './i18n/translations'

/**
 * ────────────────────────────────────────────────────────────────────────────
 * 서비스 목록 단일 정본 (2026-09-22 맥7 지시 — 보스 지적 "서비스 목록 불일치")
 *
 * 메인 카드 · 헤더 드롭다운 · /services · 상담폼 select · 견적폼 1단계 · 사이트맵은
 * 전부 이 모듈만 import 한다. 개별 파일에 서비스 배열을 다시 적는 것을 금지한다.
 *
 * 정본의 출처는 두 곳뿐이다.
 *   · 슬러그·순서·카테고리·한국어 명칭 → lib/services-data.ts (publicServices)
 *   · en/zh/ja 명칭·카테고리          → lib/i18n/services-i18n.ts
 * 배포 보류(DEPLOY_HOLD_SLUGS)는 publicServices 단계에서 이미 걸러져 있다.
 * ──────────────────────────────────────────────────────────────────────────── */

export type CatalogLocale = 'ko' | Locale

export interface ServiceCatalogEntry {
  slug: string
  /** 로케일 접두사가 붙은 상세 페이지 경로 */
  href: string
  /** 상세 페이지 제목(긴 명칭) */
  title: string
  /** 메뉴·카드·폼에서 쓰는 짧은 명칭. 4곳이 반드시 이 값을 쓴다. */
  shortTitle: string
  category: string
  /** 목록 카드 발췌에 쓰는 소개문 */
  description: string
  /** 카드 이미지. 로케일과 무관하게 services-data.ts 의 값을 쓴다. */
  image: string
}

const LOCALE_PREFIX: Record<CatalogLocale, string> = {
  ko: '',
  en: '/en',
  zh: '/zh',
  ja: '/ja',
}

/** 폼 select 맨 끝의 "그 밖의 인허가" 항목. 서비스 수(24)에는 포함되지 않는다. */
export const OTHER_OPTION: Record<CatalogLocale, string> = {
  ko: '기타',
  en: 'Other',
  zh: '其他',
  ja: 'その他',
}

/**
 * 해당 로케일에서 공개되는 서비스 목록. 순서는 services-data.ts 의 배열 순서 그대로다.
 *
 * ko 외의 로케일은 번역본이 있는 서비스만 내보낸다 — 번역본이 없으면 상세 페이지가
 * notFound() 이므로 메뉴에 걸면 404 가 된다. 현재는 24종 전부 번역본이 있어
 * 네 언어 모두 같은 24종이 나오고, 앞으로 KO 전용 서비스를 추가해도 자동으로 방어된다.
 */
export function getServiceCatalog(locale: CatalogLocale): ServiceCatalogEntry[] {
  const prefix = LOCALE_PREFIX[locale]

  return publicServices.flatMap((svc) => {
    if (locale === 'ko') {
      return [{
        slug: svc.slug,
        href: `/services/${svc.slug}`,
        title: svc.title,
        shortTitle: svc.shortTitle,
        category: svc.category,
        description: svc.description,
        image: svc.image,
      }]
    }

    const t = getServiceI18n(locale, svc.slug)
    if (!t) return []

    return [{
      slug: svc.slug,
      href: `${prefix}/services/${svc.slug}`,
      title: t.title,
      shortTitle: t.shortTitle,
      category: t.category,
      description: t.description,
      image: svc.image,
    }]
  })
}

/** 해당 로케일의 공개 서비스 수. 문구의 "24종"은 전부 이 값을 써야 한다. */
export function getServiceCount(locale: CatalogLocale): number {
  return getServiceCatalog(locale).length
}

/**
 * 메가메뉴·모바일 메뉴용 카테고리 묶음. 카테고리 순서는 services-data.ts 에서
 * 그 카테고리가 처음 등장하는 순서를 따른다(별도 순서 배열을 두면 또 하나의 정본이 된다).
 */
export function getServiceCatalogByCategory(
  locale: CatalogLocale,
): { category: string; items: ServiceCatalogEntry[] }[] {
  const groups: { category: string; items: ServiceCatalogEntry[] }[] = []

  for (const entry of getServiceCatalog(locale)) {
    const found = groups.find((g) => g.category === entry.category)
    if (found) found.items.push(entry)
    else groups.push({ category: entry.category, items: [entry] })
  }

  return groups
}

/** 상담폼 select · 견적폼 1단계가 쓰는 선택지. 서비스 24종 + 기타. */
export function getServiceSelectOptions(locale: CatalogLocale): string[] {
  return [...getServiceCatalog(locale).map((s) => s.shortTitle), OTHER_OPTION[locale]]
}

/** 사이트맵이 쓰는 로케일별 슬러그 목록. */
export function getServiceSlugs(locale: CatalogLocale): string[] {
  return getServiceCatalog(locale).map((s) => s.slug)
}
