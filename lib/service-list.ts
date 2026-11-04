/**
 * 처리 업무 전체 목록 페이지 데이터(AI-RECO-2 E-2, 맥7 2026-11-04) — 서버 전용.
 * 업무·분야·순서는 lib/service-directory.ts(홈·/services·풋터와 같은 정본) 그대로 — 분류 변경·업무 추가 금지.
 *   · 정식 명칭: 업무 블록 이름(getPillarView label), 외국어는 한국어 정식 명칭 병기
 *   · 관할 기관: 업종 페이지 요약의 제출처·등록처 등 항목(언어별 같은 위치) → 없으면 lib/service-list-agency.ts
 *   · 대상: 업무 페이지 '한눈에 보기' 첫 줄(대상)
 * 'use client' 에서 import 금지(원고가 번들에 실린다).
 */
import { getServiceDirectory } from './service-directory'
import { getPillarView } from './focus-pillar-view'
import { getIndustryPage } from './industry-pages'
import { SERVICE_AGENCY, type AgencyLocale } from './service-list-agency'

export interface ServiceListItem { slug: string; href: string; name: string; nameKo?: string; agency: string; target: string }
export interface ServiceListGroup { id: string; label: string; items: ServiceListItem[] }

const AGENCY_LABEL_KO = /^(제출처|등록처|등록기관|허가기관|선정기관)\s*:/

function agencyOf(locale: AgencyLocale, slug: string): string {
  const ko = getIndustryPage('ko', slug)
  const idx = ko ? ko.summary.findIndex((x) => AGENCY_LABEL_KO.test(x)) : -1
  if (idx >= 0) {
    const page = getIndustryPage(locale, slug)
    const item = page?.summary[idx]
    if (!item) throw new Error(`[service-list] ${locale}/${slug}: 요약 ${idx}번 항목 없음`)
    const m = item.match(/^[^:：]{1,24}[:：]\s*(.+)$/s)
    if (!m) throw new Error(`[service-list] ${locale}/${slug}: 요약 항목 머리말 없음 — ${item}`)
    return m[1].trim().replace(/[.。]$/, '')
  }
  const manual = SERVICE_AGENCY[slug]?.[locale]
  if (!manual) throw new Error(`[service-list] ${locale}/${slug}: 관할 기관 원고 없음(lib/service-list-agency.ts)`)
  return manual
}

export function getServiceList(locale: AgencyLocale): ServiceListGroup[] {
  return getServiceDirectory(locale).map((g) => ({
    id: g.id,
    label: g.label,
    items: g.items.map((e) => {
      const v = getPillarView(locale, e.slug)
      if (!v) throw new Error(`[service-list] ${locale}/${e.slug}: 업무 블록 없음`)
      const vk = locale === 'ko' ? v : getPillarView('ko', e.slug)
      const target = v.glance[0]?.value
      if (!target) throw new Error(`[service-list] ${locale}/${e.slug}: 대상 없음`)
      return {
        slug: e.slug,
        href: e.href,
        name: v.label,
        ...(locale !== 'ko' && vk ? { nameKo: vk.label } : {}),
        agency: agencyOf(locale, e.slug),
        target,
      }
    }),
  }))
}

export function getServiceListCount(locale: AgencyLocale): number {
  return getServiceList(locale).reduce((n, g) => n + g.items.length, 0)
}
