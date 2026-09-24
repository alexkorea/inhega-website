import {
  SERVICE_MENU,
  SERVICE_MENU_OTHER,
  type ServiceMenuItem,
} from './services-menu.generated'
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
 * 상담폼 select · 견적폼 1단계 선택지. 서비스 24종 + 기타.
 * **순서는 정본(services-data.ts 배열 순서)이다.** 카테고리 묶음을 평탄화하면
 * 집합은 같은데 순서가 바뀐다 — 2026-09-25 에 실제로 그렇게 어긋났다.
 */
export function getServiceMenuSelectOptions(locale: CatalogLocale): string[] {
  return [...SERVICE_MENU[locale].map((s) => s.shortTitle), SERVICE_MENU_OTHER[locale]]
}

/** 해당 로케일의 공개 서비스 수. */
export function getServiceMenuCount(locale: CatalogLocale): number {
  return SERVICE_MENU[locale].length
}
