/**
 * ────────────────────────────────────────────────────────────────────────────
 * 중점 업무 필러 화면 모델 (INHEGA-FOCUS-1103 2차, 보스 msg 4784·4787) — 서버 전용.
 *
 * 네 언어 필러를 한 모양으로 모은다.
 *   · ko 한눈에 보기·단계·외국기업 박스·관련 안내 → lib/focus-pillars.ts (1차, 맥7 검수 PASS)
 *   · en/zh/ja 제목·설명·한눈에 보기·단계·박스·관련 안내 → lib/focus-pillars-i18n.ts (언어별 실제 검색어로 작성, 직역 아님)
 *   · 네 언어 직답·내 상황 고르기·상황별 질문 → lib/focus-situations.ts
 * 화면에 조문 번호·출처·확인일·가격·수수료를 싣지 않는다(svc-nocite-gate·nofree-gate). 법령 대조표는 보고서에만.
 * 'use client' 컴포넌트에서 import 하지 말 것(원고가 번들에 실린다).
 * ──────────────────────────────────────────────────────────────────────────── */
import { FOCUS_PILLARS } from './focus-pillars'
import { FOCUS_PILLARS_I18N, type PillarLocale } from './focus-pillars-i18n'
import { FOCUS_SITUATIONS } from './focus-situations'
import { FOCUS_SERVICES } from './focus-services'
import { ORG_ID } from './org-jsonld'

export type FocusPageLocale = 'ko' | PillarLocale

export interface Situation {
  id: string
  q: string
  conclusion: string
  branches: { when: string; then: string }[]
  docs: string
  period: string
  href?: string
}

export interface PillarView {
  slug: string
  locale: FocusPageLocale
  label: string
  answer?: string
  chooser: { label: string; target: string }[]
  glance: { label: string; value: string }[]
  stagesHeading?: string
  stages?: { title: string; desc: string; href?: string }[]
  note?: { heading: string; items: string[] }
  situations: Situation[]
  related: { title: string; href: string }[]
}

export interface PillarUi {
  badge: string
  answerLabel: string
  chooserHeading: string
  glanceHeading: string // '{label}' 자리표시
  stagesHeading: string
  situationsHeading: string
  situationsLead: string
  conclusionLabel: string
  docsLabel: string
  periodLabel: string
  moreLabel: string
  stageMore: string
  relatedBadge: string
  relatedHeading: string // '{label}' 자리표시
  consult: string
  quote: string
  contactHref: string
  quoteHref: string
}

export const KO_UI: PillarUi = {
  badge: '중점 업무',
  answerLabel: '핵심 답변',
  chooserHeading: '내 상황 고르기',
  glanceHeading: '{label} 한눈에 보기',
  stagesHeading: '단계별 진행',
  situationsHeading: '상황별 질문',
  situationsLead: '실제로 많이 찾는 상황을 골라 결론부터 정리했습니다. 내 경우와 가까운 질문을 확인하세요.',
  conclusionLabel: '결론',
  docsLabel: '필요 서류',
  periodLabel: '기간',
  moreLabel: '더 보기',
  stageMore: '자세히 보기',
  relatedBadge: '관련 세부 안내',
  relatedHeading: '{label} 관련 가이드',
  consult: '{label} 상담 신청',
  quote: '견적 문의',
  contactHref: '/contact',
  quoteHref: '/quote',
}

export function pillarUi(locale: FocusPageLocale): PillarUi {
  return locale === 'ko' ? KO_UI : FOCUS_PILLARS_I18N[locale].ui
}

export function getPillarView(locale: FocusPageLocale, slug: string): PillarView | null {
  const sit = FOCUS_SITUATIONS[locale]?.[slug]
  if (locale === 'ko') {
    const p = FOCUS_PILLARS[slug]
    const f = FOCUS_SERVICES.find((x) => x.slug === slug)
    if (!p || !f) return null
    return {
      slug, locale, label: f.label,
      answer: sit?.answer,
      chooser: sit?.chooser ?? [],
      glance: p.glance,
      stagesHeading: p.stagesHeading,
      stages: p.stages,
      note: p.note,
      situations: sit?.situations ?? [],
      related: p.related,
    }
  }
  const p = FOCUS_PILLARS_I18N[locale]?.pillars[slug]
  if (!p) return null
  return {
    slug, locale, label: p.label,
    answer: sit?.answer,
    chooser: sit?.chooser ?? [],
    glance: p.glance,
    stagesHeading: p.stagesHeading,
    stages: p.stages,
    note: p.note,
    situations: sit?.situations ?? [],
    related: p.related,
  }
}

/** en/zh/ja 필러의 검색 의도형 제목·H1·설명(없으면 null → 종전 번역본 값을 쓴다). */
export function getPillarMeta(locale: PillarLocale, slug: string) {
  const p = FOCUS_PILLARS_I18N[locale]?.pillars[slug]
  return p ? { seoTitle: p.seoTitle, h1: p.h1, description: p.description, serviceType: p.label } : null
}

/** 상황 질문 → FAQPage Question(화면에 보이는 글자 그대로 이어 붙인다). 필러 FAQ 와 같은 FAQPage 한 개에 싣는다. */
export function situationQuestions(v: PillarView) {
  const ui = pillarUi(v.locale)
  return v.situations.map((s) => ({
    '@type': 'Question',
    name: s.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: [s.conclusion, ...s.branches.map((b) => `${b.when}: ${b.then}`), `${ui.docsLabel}: ${s.docs}`, `${ui.periodLabel}: ${s.period}`].join(' '),
    },
  }))
}

const LANG_TAG: Record<FocusPageLocale, string> = { ko: 'ko', en: 'en', zh: 'zh-Hans', ja: 'ja' }
const COUNTRY: Record<FocusPageLocale, string> = { ko: '대한민국', en: 'Republic of Korea', zh: '韩国', ja: '韓国' }

/** 필러 Service 노드 — @id 고정, provider 는 조직 노드 @id 참조(lib/org-jsonld.ts). */
export function pillarServiceJsonLd(v: PillarView, opts: { name: string; description: string; url: string; image?: unknown }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${opts.url}#service`,
    name: opts.name,
    serviceType: v.label,
    description: opts.description,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: COUNTRY[v.locale] },
    availableLanguage: ['ko', 'en', 'zh', 'ja'],
    inLanguage: LANG_TAG[v.locale],
    url: opts.url,
    mainEntityOfPage: opts.url,
    ...(opts.image ? { image: opts.image } : {}),
  }
}
