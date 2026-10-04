/**
 * ────────────────────────────────────────────────────────────────────────────
 * 서비스 레지스트리 = 기존 서비스(services-data) + 신규 업종 페이지(industry-pages) (2026-10-04 맥7 0949)
 *
 * 업종 목록·개수의 단일 원천이다. 홈 · /services · 풋터 · 헤더 메뉴 · /quote·/contact 선택지 ·
 * title/meta · JSON-LD(OfferCatalog) 가 전부 여기서 읽는다(0949 추가 — 보스 msg 1795).
 * 'use client' 쪽은 이 모듈을 직접 못 쓰므로 scripts/build-services-menu.mjs 가 구운
 * lib/services-menu.generated.ts(→ lib/services-menu.ts)를 쓰고, 생성기가 매 빌드 동등성을 대조한다.
 * 숫자·목록을 페이지에 다시 적지 말 것.
 * 서버 전용 — industry-pages 원고 전체를 끌고 오므로 'use client' 에서 import 금지.
 *
 * 문구는 정본에서 그대로 가져온다(무가감).
 *   · 기존 24종 → services-catalog 의 shortTitle·description
 *   · 신규 업종 → industry-pages JSON 의 h1 과 summary 항목(번역본도 같은 위치의 항목)
 * 어느 요약 항목을 카드에 쓸지만 여기서 고른다. 문장을 자르거나 고치지 않는다.
 *
 * en/zh/ja 는 번역본이 있는 업종만 나온다 — 없는 업종을 걸면 404 이거나 한국어가 섞인다.
 * ──────────────────────────────────────────────────────────────────────────── */
import { getServiceCatalog, OTHER_OPTION, type CatalogLocale } from './services-catalog'
import { getIndustryPage, getIndustryPages } from './industry-pages'
import { groupBySlug } from './service-groups'

export interface DirectoryEntry {
  slug: string
  href: string
  title: string
  /** 한 줄 설명 */
  desc: string
  /** 핵심 요건 0~2개 (기존 24종은 정본에 별도 요건 필드가 없어 0개) */
  reqs: string[]
}

export interface DirectoryGroup {
  id: string
  label: string
  items: DirectoryEntry[]
}

const PREFIX: Record<CatalogLocale, string> = { ko: '', en: '/en', zh: '/zh', ja: '/ja' }

/* 요약 항목 선택 규칙 — 한국어 원고의 항목 머리말로 고르고, 번역본은 같은 위치를 쓴다
   (번역본 요약은 한국어와 항목 수·순서가 같다. 다르면 빌드가 멈춘다). */
const DESC_LABEL = /^(대상|종류)\s*:/
const REQ_LABEL = /^(핵심 요건|핵심 기준|등록기준|시설기준|사전 준비|사전 교육|자본금 기준|유치사업자 요건)\s*:/
const NON_REQ_LABEL = /^(제출처|등록처|등록기관|선정기관|허가기관|법정 수수료|법정 비용|방식|성격|예외|면제|구분|신고증|대상|종류|처리기간)\s*:/
/** 카드에는 금액(수수료·비용·벌금)이 있는 항목을 싣지 않는다 — 출처·기준일 없이 금액만 보이게 된다. */
const MONEY_ITEM = /수수료|비용|벌금|手数料|手续费|[Ff]ee\b/

/** 머리말 규칙으로 고를 수 없는 업종만 위치를 직접 지정한다. 'lead' = 리드 첫 문장. */
const PICK_OVERRIDE: Record<string, { desc?: number | 'lead'; reqs?: number[] }> = {
  // 요약 1·2번 항목에 등록 수수료가 들어 있다
  'car-dealer-rental-business-registration': { desc: 'lead', reqs: [2] },
  'mail-order-sales-report': { reqs: [2] },
  'software-business-performance-management': { reqs: [1] },
  'waste-treatment-business-permit': { reqs: [2] },
}

/** 첫 문장(마침표·。 까지) 그대로. 문장을 고치지 않고 뒤를 떼어 낼 뿐이다. */
function firstSentence(text: string): string {
  const m = text.match(/^.*?(?:。|[.!?](?=\s|$))/s)
  return (m ? m[0] : text).trim()
}

function pickIndices(slug: string): { desc: number | 'lead'; reqs: number[] } {
  const ko = getIndustryPage('ko', slug)
  if (!ko) throw new Error(`[service-directory] ko 원고 없음: ${slug}`)
  const s = ko.summary
  const o = PICK_OVERRIDE[slug] ?? {}
  let desc: number | 'lead' = o.desc ?? s.findIndex((x) => DESC_LABEL.test(x))
  if (desc === -1) desc = 0
  let reqs = o.reqs ?? s.map((_, i) => i).filter((i) => i !== desc && REQ_LABEL.test(s[i])).slice(0, 2)
  if (!reqs.length) reqs = s.map((_, i) => i).filter((i) => i !== desc && !NON_REQ_LABEL.test(s[i])).slice(0, 1)
  const picked = [desc === 'lead' ? firstSentence(ko.lead) : s[desc], ...reqs.map((i) => s[i])]
  for (const t of picked) {
    if (t === undefined) throw new Error(`[service-directory] ${slug}: 요약 항목 위치가 범위 밖`)
    if (MONEY_ITEM.test(t)) throw new Error(`[service-directory] ${slug}: 카드 문구에 금액 항목 — ${t}`)
  }
  return { desc, reqs }
}

function industryEntries(locale: CatalogLocale): DirectoryEntry[] {
  return getIndustryPages(locale).map((p) => {
    const ko = getIndustryPage('ko', p.slug)!
    if (p.summary.length !== ko.summary.length) {
      throw new Error(`[service-directory] ${p.slug}.${locale}: 요약 항목 수가 ko 와 다르다(${p.summary.length}≠${ko.summary.length})`)
    }
    const { desc, reqs } = pickIndices(p.slug)
    return {
      slug: p.slug,
      href: `${PREFIX[locale]}/services/${p.slug}`,
      title: p.h1,
      desc: desc === 'lead' ? firstSentence(p.lead) : p.summary[desc],
      reqs: reqs.map((i) => p.summary[i]),
    }
  })
}

/** 해당 로케일의 전체 서비스(기존 + 신규 업종). 그룹 배정과 무관한 평탄 목록. */
export function getDirectoryEntries(locale: CatalogLocale): DirectoryEntry[] {
  const base: DirectoryEntry[] = getServiceCatalog(locale).map((s) => ({
    slug: s.slug,
    href: s.href,
    title: s.shortTitle,
    // 한 줄 설명 = 소개문 첫 문장. 소개문 뒤쪽엔 출처 없는 수수료 금액이 섞여 있다(예: 식품제조가공업).
    desc: firstSentence(s.description),
    reqs: [],
  }))
  for (const b of base) {
    if (MONEY_ITEM.test(b.desc)) throw new Error(`[service-directory] ${b.slug}: 카드 문구에 금액 항목 — ${b.desc}`)
  }
  const seen = new Set(base.map((b) => b.slug))
  const extra = industryEntries(locale).filter((e) => !seen.has(e.slug))
  return [...base, ...extra]
}

/** 분야 그룹으로 묶은 목록. 그룹 배정이 빠진 서비스가 있으면 예외(조용히 사라지지 않게). */
export function getServiceDirectory(locale: CatalogLocale): DirectoryGroup[] {
  const { groups, unassigned } = groupBySlug(getDirectoryEntries(locale), locale)
  if (unassigned.length) {
    throw new Error(`[service-directory] 분야 그룹 미배정 ${unassigned.length}건: ${unassigned.join(', ')} — lib/service-groups.ts 에 추가할 것`)
  }
  return groups
}

/** "N종" 문구가 쓰는 개수 — 기존 + 신규 업종(해당 로케일에 실제로 열리는 것만). */
export function getDirectoryCount(locale: CatalogLocale): number {
  return getDirectoryEntries(locale).length
}

/** 폼 선택지(정본) — 분야 그룹 순서로 평탄화 + 기타. 경량판 getServiceMenuSelectOptions 와 같아야 한다. */
export function getDirectorySelectOptions(locale: CatalogLocale): string[] {
  return [...getServiceDirectory(locale).flatMap((g) => g.items.map((e) => e.title)), OTHER_OPTION[locale]]
}
