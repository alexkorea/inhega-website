// I2 신규 업종 서비스 페이지 (맥3 원고, 맥7 PASS, 2026-10-03).
// 정본은 content/industry-pages/<slug>.<lang>.json 이고 scripts/import-industry-pages.py 가
// 원고 MD 와 무가감 대조한 뒤 쓴다. 문장을 여기서 고치거나 덧붙이지 말 것.
//
// 기존 24종(lib/services-catalog.ts)과는 별개다 — 메뉴·폼·"N종" 카운트에는 들어가지 않고
// /services/[slug] 라우트와 사이트맵·서비스 목록 하단·관련 서비스 역링크로만 노출된다.
// 서버 전용: 'use client' 컴포넌트에서 import 하면 원고 전체가 번들에 실린다.
import { INDUSTRY_PAGES } from './industry-pages.generated'

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

// 히어로 배경은 기존 서비스 이미지 중 가까운 것을 쓴다(신규 이미지 없음).
const HERO_IMAGE: Record<string, string> = {
  'restaurant-business-report': '/images/service-food.webp',
  'import-food-sales': '/images/service-food.webp',
  'travel-agency-registration': '/images/service-guesthouse.webp',
  'liquor-import-sales-license': '/images/service-food.webp',
  'accommodation-business-report': '/images/service-hostel.webp',
  'mail-order-sales-report': '/images/service-startup.webp',
  'academy-establishment-registration': '/images/service-startup.webp',
  'kc-radio-certification': '/images/service-license.webp',
  'construction-business-registration': '/images/service-renovation.webp',
  'foreign-patient-attraction': '/images/service-license.webp',
  'hazardous-chemical-business-permit': '/images/service-research.webp',
  'pet-business-permit-registration': '/images/service-license.webp',
  'beauty-salon-business-report': '/images/service-cosmetics.webp',
  'waste-treatment-business-permit': '/images/service-renovation.webp',
  'emission-facility-permit-report': '/images/service-renovation.webp',
  'real-estate-development-business-registration': '/images/service-renovation.webp',
  'pharmaceutical-wholesale-license': '/images/service-license.webp',
  'car-dealer-rental-business-registration': '/images/service-logistics.webp',
  'long-term-care-institution-designation': '/images/service-legal.webp',
  'development-act-farmland-conversion-permit': '/images/service-renovation.webp',
  // 배치3 (I2c)
  'sports-facility-business-report': '/images/service-baseball.webp',
  'cooperative-establishment-report': '/images/service-legal.webp',
  'entertainment-bar-business-permit': '/images/service-food.webp',
  'campground-business-registration': '/images/service-guesthouse.webp',
  'solar-power-business-permit': '/images/service-renovation.webp',
  'marriage-brokerage-business-registration': '/images/service-legal.webp',
  'money-lending-business-registration': '/images/service-currency.webp',
  'entertainment-agency-business-registration': '/images/service-startup.webp',
  'disinfection-business-report': '/images/service-research.webp',
  'drone-business-registration': '/images/service-license.webp',
  'software-business-performance-management': '/images/service-startup.webp',
  'residential-lodging-business-report': '/images/service-hostel.webp',
  'rural-minbak-business-report': '/images/service-hanok.webp',
  'foundation-establishment-permit': '/images/service-legal.webp',
  'overseas-remittance-business-registration': '/images/service-currency.webp',
  'mainbiz-management-innovation-sme': '/images/service-startup.webp',
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

export function getIndustryHeroImage(slug: string): string {
  return HERO_IMAGE[slug] ?? '/images/service-license.webp'
}

/**
 * 기존 페이지 → 신규 업종 페이지 역링크. 원고의 '관련 페이지'가 가리키는 기존 서비스
 * 페이지에 그 업종 페이지를 되걸어 준다(같은 언어끼리만).
 */
export function getIndustryBacklinks(locale: IndustryLocale, path: string): IndustryPage[] {
  return getIndustryPages(locale).filter((p) => p.related.some((r) => r.url === path))
}
