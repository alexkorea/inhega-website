import {
  SERVICE_MENU,
  SERVICE_MENU_OTHER,
  INDUSTRY_MENU,
  type ServiceMenuItem,
} from './services-menu.generated'
import { groupBySlug } from './service-groups'
// `import type` 는 컴파일에서 완전히 지워지므로 이 줄로 번들 체인이 생기지 않는다.
import type { CatalogLocale } from './services-catalog'

/**
 * ────────────────────────────────────────────────────────────────────────────
 * 클라이언트용 서비스 목록 (2026-09-25)
 *
 * 서비스 목록 단일 정본은 여전히 lib/services-catalog.ts 다. 이 모듈은 그 정본에서
 * **메뉴·폼이 쓰는 네 필드만** 뽑아 구운 lib/services-menu.generated.ts 를 감싼다.
 *
 * 나눈 이유는 번들이다. 헤더(Navbar/NavbarLang)와 상담·견적 폼은 'use client' 라,
 * services-catalog.ts 를 import 하면 그 체인의 services-data.ts(730KB) ·
 * services-i18n.ts(163KB)가 documents·process·faqs 까지 통째로 클라이언트로 간다.
 * 라이브 실측(2026-09-25) 단일 청크 873KB / br 207KB 가 그것이었다.
 *
 *   'use client'  →  lib/services-menu.ts        (slug·href·shortTitle·category)
 *   서버 컴포넌트 →  lib/services-catalog.ts      (title·description·image 까지)
 *
 * 클라이언트 컴포넌트에서 services-catalog 를 import 하면 그 회귀가 그대로 돌아온다.
 * scripts/pre-deploy-check.sh 가 그 경우를 막는다.
 * ──────────────────────────────────────────────────────────────────────────── */

export type { ServiceMenuItem } from './services-menu.generated'

export interface ServiceMenuGroup {
  category: string
  items: ServiceMenuItem[]
}

/**
 * 메가메뉴·모바일 메뉴용 카테고리 묶음. getServiceCatalogByCategory 의 경량판이고,
 * 묶는 방식(첫 등장 순서)도 정본과 같아야 한다 — 생성기가 매 빌드마다 대조한다.
 */
export function getServiceMenuByCategory(locale: CatalogLocale): ServiceMenuGroup[] {
  const groups: ServiceMenuGroup[] = []
  for (const entry of SERVICE_MENU[locale]) {
    const found = groups.find((g) => g.category === entry.category)
    if (found) found.items.push(entry)
    else groups.push({ category: entry.category, items: [entry] })
  }
  return groups
}

/**
 * 상담폼 select · 견적폼 1단계 선택지 = 서비스 전체(정본 디렉터리, 0949 추가 2026-10-04) + 기타.
 * 순서는 분야 그룹 순서(getServiceMenuByGroup 평탄화)다 — 화면의 optgroup·소제목과 같은 순서.
 * 생성기가 정본 getDirectorySelectOptions() 와 순서까지 대조한다.
 */
export function getServiceMenuSelectOptions(locale: CatalogLocale): string[] {
  return [...getServiceMenuByGroup(locale).flatMap((g) => g.items.map((i) => i.shortTitle)), SERVICE_MENU_OTHER[locale]]
}

/** 선택지를 분야 그룹으로 — <optgroup>·견적폼 소제목용. '기타'는 따로(getServiceMenuOther). */
export function getServiceMenuSelectGroups(locale: CatalogLocale): { id: string; label: string; options: string[] }[] {
  return getServiceMenuByGroup(locale).map((g) => ({ id: g.id, label: g.label, options: g.items.map((i) => i.shortTitle) }))
}

export function getServiceMenuOther(locale: CatalogLocale): string {
  return SERVICE_MENU_OTHER[locale]
}

/** 링크용 항목(slug·href·shortTitle). 라벨로 href 를 조립하지 말 것 — 한글 경로는 404 다. */
export function getServiceMenuItems(locale: CatalogLocale): ServiceMenuItem[] {
  return SERVICE_MENU[locale]
}

/** 해당 로케일의 서비스 수(기존 + 신규 업종) = 정본 getDirectoryCount(). "N종" 문구는 전부 이 값. */
export function getServiceMenuCount(locale: CatalogLocale): number {
  return SERVICE_MENU[locale].length + INDUSTRY_MENU[locale].length
}

export interface ServiceMenuLink {
  slug: string
  href: string
  shortTitle: string
}

/**
 * 헤더 메뉴용 분야 그룹(0949, 2026-10-04) — 기존 24종 + 신규 업종 페이지 전부.
 * 정본 lib/service-directory.ts 의 getServiceDirectory() 와 같은 묶음이어야 하고,
 * 생성기가 매 빌드마다 순서·라벨까지 대조한다. 번역본 없는 업종은 해당 로케일에 없다.
 */
export function getServiceMenuByGroup(
  locale: CatalogLocale,
): { id: string; label: string; items: ServiceMenuLink[] }[] {
  const items: ServiceMenuLink[] = [
    ...SERVICE_MENU[locale].map(({ slug, href, shortTitle }) => ({ slug, href, shortTitle })),
    ...INDUSTRY_MENU[locale],
  ]
  return groupBySlug(items, locale).groups
}
