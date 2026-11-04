/**
 * INHEGA-COSMETICS(보스 msg 4860, 2026-11-04) — 화장품 인허가 통합 허브(/services/cosmetics)의 '업무 연결 흐름'.
 * 원고 정본: content/cosmetics-hub/<lang>.json (4언어 같은 구조·같은 id). 이 파일은 읽기·검증만 한다.
 * 서버 전용 — 'use client' 에서 import 금지. 화면에 조문 번호·확인일·출처·가격을 싣지 않는다(원고 단계에서 검사).
 */
import ko from '@/content/cosmetics-hub/ko.json'
import en from '@/content/cosmetics-hub/en.json'
import zh from '@/content/cosmetics-hub/zh.json'
import ja from '@/content/cosmetics-hub/ja.json'

export type HubLocale = 'ko' | 'en' | 'zh' | 'ja'
export interface HubStep { id: string; no: string; short: string; name: string; agency: string; target: string; when: string; we: string; href: string; linkText: string }
export interface CosmeticsHub {
  lang: HubLocale
  heading: string
  lead: string
  diagramLabel: string
  steps: HubStep[]
  cols: { name: string; agency: string; target: string; when: string; we: string; link: string }
  relations: string[]
}

export const COSMETICS_HUB_SLUG = 'cosmetics'
const ALL: Record<HubLocale, CosmeticsHub> = { ko: ko as CosmeticsHub, en: en as CosmeticsHub, zh: zh as CosmeticsHub, ja: ja as CosmeticsHub }
const PFX: Record<HubLocale, string> = { ko: '', en: '/en', zh: '/zh', ja: '/ja' }

// 4언어 구조 대조 — 어긋나면 빌드 단계(프리렌더)에서 멈춘다.
for (const l of ['en', 'zh', 'ja'] as const) {
  const a = ALL.ko.steps, b = ALL[l].steps
  if (a.length !== 6 || b.length !== a.length) throw new Error(`[cosmetics-hub] ${l}: 단계 수 ${b.length} (ko ${a.length}, 6 이어야 함)`)
  a.forEach((s, i) => {
    if (b[i].id !== s.id) throw new Error(`[cosmetics-hub] ${l}: 단계 id ${b[i].id} ≠ ${s.id}`)
    if (b[i].href !== `${PFX[l]}${s.href}`) throw new Error(`[cosmetics-hub] ${l}: href ${b[i].href} ≠ ${PFX[l]}${s.href}`)
  })
}

export function getCosmeticsHub(locale: HubLocale, slug: string): CosmeticsHub | null {
  return slug === COSMETICS_HUB_SLUG ? ALL[locale] : null
}
