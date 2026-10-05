// I2 신규 업종 서비스 페이지 (맥3 원고, 맥7 PASS, 2026-10-03).
// 정본은 content/industry-pages/<slug>.<lang>.json 이고 scripts/import-industry-pages.py 가
// 원고 MD 와 무가감 대조한 뒤 쓴다. 문장을 여기서 고치거나 덧붙이지 말 것.
//
// 기존 24종(lib/services-catalog.ts)과는 별개다 — 메뉴·폼·"N종" 카운트에는 들어가지 않고
// /services/[slug] 라우트와 사이트맵·서비스 목록 하단·관련 서비스 역링크로만 노출된다.
// 서버 전용: 'use client' 컴포넌트에서 import 하면 원고 전체가 번들에 실린다.
import { INDUSTRY_PAGES } from './industry-pages.generated'
import { INDUSTRY_CARD_IMAGE } from './service-card-images'

export type IndustryLocale = 'ko' | 'en' | 'zh' | 'ja'

export interface IndustryPage {
  slug: string
  lang: IndustryLocale
  lawBasisDate: string
  title: string
  h1: string
  lead: string
  summaryLabel: string
  summary: string[]
  sections: { h2: string; body: string }[]
  faqHeading: string
  faq: { q: string; a: string }[]
  citationsHeading: string
  citations: { text: string; source: string }[]
  relatedHeading: string
  related: { text: string; url: string }[]
  ctaHeading: string
  cta: string
}

export function getIndustryPage(locale: IndustryLocale, slug: string): IndustryPage | undefined {
  return INDUSTRY_PAGES.find((p) => p.lang === locale && p.slug === slug)
}

export function getIndustryPages(locale: IndustryLocale): IndustryPage[] {
  return INDUSTRY_PAGES.filter((p) => p.lang === locale)
}

export function getIndustrySlugs(locale: IndustryLocale): string[] {
  return getIndustryPages(locale).map((p) => p.slug)
}

/** 이 slug 의 원고가 있는 언어 — hreflang 은 이 언어들끼리만 상호참조한다. */
export function getIndustryLocales(slug: string): IndustryLocale[] {
  return (['ko', 'en', 'zh', 'ja'] as const).filter((l) => getIndustryPage(l, slug))
}

/**
 * 상세 히어로 사진 = 홈·/services 카드 사진(lib/service-card-images.ts 하나).
 * 예전엔 여기 따로 표가 있어 14업종이 카드와 다른 사진이었다(INH-RESTORE 추가, 보스 msg 2266·2267).
 */
export function getIndustryHeroImage(slug: string): string {
  const img = INDUSTRY_CARD_IMAGE[slug]
  if (!img) throw new Error(`[industry-pages] 업종 사진 없음: ${slug} — lib/service-card-images.ts 에 기존 사진을 배정할 것`)
  return img
}

/**
 * 기존 페이지 → 신규 업종 페이지 역링크. 원고의 '관련 페이지'가 가리키는 기존 서비스
 * 페이지에 그 업종 페이지를 되걸어 준다(같은 언어끼리만).
 */
export function getIndustryBacklinks(locale: IndustryLocale, path: string): IndustryPage[] {
  return getIndustryPages(locale).filter((p) => p.related.some((r) => r.url === path))
}
