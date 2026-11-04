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
import { FOCUS_EXPERTISE, type FocusExpertise } from './focus-expertise'
// AI-RECO-1103 12절: 중점 6 밖 55개 항목도 같은 블록(원고 content/reco-units → lib/reco-units.generated.ts)
import { RECO_UNITS } from './reco-units.generated'

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
  /** 3차: 처리하는 업무·이런 고객이 맡깁니다·용어 설명(lib/focus-expertise.ts) */
  expertise?: FocusExpertise
  /** 중점 6개(홈 카드·메뉴)면 true. 12절 항목 블록은 false — 배지 문구만 다르다 */
  focus: boolean
  /** 12절 항목: '처리하는 업무' 소제목 키워드(중점 6은 SERVICES_HEADING_KW) */
  kw?: string
}

/** 12절 항목 블록 배지(중점 6 은 '중점 업무') */
export const UNIT_BADGE: Record<FocusPageLocale, string> = { ko: '인허가 업무 안내', en: 'Licensing service', zh: '许可业务', ja: '許認可業務' }

function unitView(locale: FocusPageLocale, slug: string): PillarView | null {
  const u = RECO_UNITS[locale]?.[slug]
  if (!u) return null
  return {
    slug, locale, label: u.label, focus: false, kw: u.kw,
    answer: u.answer,
    chooser: u.chooser,
    glance: u.glance,
    situations: u.situations,
    related: [],
    expertise: { services: u.services, clients: u.clients, glossary: u.glossary },
  }
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
    if (!p || !f) return unitView(locale, slug)
    return {
      slug, locale, label: f.label, focus: true,
      answer: sit?.answer,
      chooser: sit?.chooser ?? [],
      glance: p.glance,
      stagesHeading: p.stagesHeading,
      stages: p.stages,
      note: p.note,
      situations: sit?.situations ?? [],
      related: p.related,
      expertise: FOCUS_EXPERTISE.ko[slug],
    }
  }
  const p = FOCUS_PILLARS_I18N[locale]?.pillars[slug]
  if (!p) return unitView(locale, slug)
  return {
    slug, locale, label: p.label, focus: true,
    answer: sit?.answer,
    chooser: sit?.chooser ?? [],
    glance: p.glance,
    stagesHeading: p.stagesHeading,
    stages: p.stages,
    note: p.note,
    situations: sit?.situations ?? [],
    related: p.related,
    expertise: FOCUS_EXPERTISE[locale]?.[slug],
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
  const catalog = pillarOfferCatalog(v, opts.url)
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
    ...(catalog ? { hasOfferCatalog: catalog } : {}),
  }
}

/* ────────────────────────────────────────────────────────────────────────────
 * 3차(보스 msg 4803·4805~4808): 사무소가 처리하는 업무 · 이런 고객이 맡깁니다 · 용어 설명 · 사무소 카드.
 * 사무소 카드 NAP 은 brand_registry D·lib/org-jsonld.ts 와 같은 값(상호·주소·대표전화·평일 09:30~17:30). 대표자 이름은 싣지 않는다.
 * 처리 사례 섹션은 두지 않는다(보스 제공 실제 사례가 없음 — 지어내기 금지).
 * ──────────────────────────────────────────────────────────────────────────── */
export interface ExpertiseUi {
  servicesHeading: string // '{kw}' 자리표시 = SERVICES_HEADING_KW (AI-RECO-1103 11절)
  clientsHeading: string
  glossaryBadge: string
  glossaryHeading: string // '{label}' 자리표시
  officeHeading: string
  officeName: string
  officeIntro: string
  officeRows: { label: string; value: string; href?: string }[]
  catalogName: string // '{label}' 자리표시 — Service.hasOfferCatalog 이름
}

/**
 * AI-RECO-1103 11절(보스 msg 4822): '처리하는 업무' 소제목에 필러 주 키워드 + 추천형 질문 키워드(대행·代办·代行)를 싣는다.
 * 키워드 원천: 보스 키워드 통합본 team-relay/seo-keywords/20261002/inhega.co.kr.txt → 매핑표는 보고서(bot-chat/mac4_mac7_AI-RECO-1103-KW.txt)에만.
 */
export const SERVICES_HEADING_KW: Record<FocusPageLocale, Record<string, string>> = {
  ko: { nonprofit: '비영리사단법인 설립 대행', 'telecom-business': '부가통신사업 신고·기간통신사업 등록 대행', 'location-based-service': '위치기반서비스사업 신고 대행', cosmetics: '화장품책임판매업 등록 대행', 'health-food': '건강기능식품 판매업 신고·수입 대행', factory: '공장등록 대행' },
  en: { nonprofit: 'Nonprofit association registration in Korea', 'telecom-business': 'Value-added telecom business filing in Korea', 'location-based-service': 'Location-based service business report in Korea', cosmetics: 'Cosmetics registration in Korea', 'health-food': 'Health functional food import registration in Korea', factory: 'Factory registration in Korea' },
  zh: { nonprofit: '韩国非营利社团法人设立代办', 'telecom-business': '韩国增值电信业务申报代办', 'location-based-service': '韩国位置服务申报代办', cosmetics: '韩国化妆品责任销售业注册代办', 'health-food': '韩国保健食品进口代办', factory: '韩国工厂登记代办' },
  ja: { nonprofit: '韓国の社団法人設立代行', 'telecom-business': '韓国の付加通信事業申告の代行', 'location-based-service': '韓国の位置情報サービス事業申告の代行', cosmetics: '韓国の化粧品責任販売業登録の代行', 'health-food': '韓国への健康機能食品輸入手続きの代行', factory: '韓国の工場設立・工場登録の代行' },
}

const PHONE_HREF = 'tel:+8223632251'
export const EXPERTISE_UI: Record<FocusPageLocale, ExpertiseUi> = {
  ko: {
    servicesHeading: '{kw} — 유선행정사사무소가 처리하는 업무',
    clientsHeading: '이런 고객이 맡깁니다',
    glossaryBadge: '용어 설명',
    glossaryHeading: '{label} 용어 설명',
    officeHeading: '사무소 안내',
    officeName: '유선행정사사무소',
    officeIntro: '유선행정사사무소는 서울 중구 퇴계로에 있는 행정사사무소로, 행정기관에 내는 인허가·등록·신고 서류의 작성과 제출 대행을 맡습니다. 한국어·영어·중국어·일본어로 상담합니다.',
    officeRows: [
      { label: '주소', value: '(04614) 서울특별시 중구 퇴계로 324, 3층(광희동2가, 성우빌딩)' },
      { label: '대표전화', value: '02-363-2251', href: PHONE_HREF },
      { label: '운영시간', value: '평일 09:30~17:30 (토·일·공휴일 휴무)' },
      { label: '상담 언어', value: '한국어 · 영어 · 중국어 · 일본어' },
    ],
    catalogName: '{label} 처리 업무',
  },
  en: {
    servicesHeading: '{kw} — services handled by YouSun Administrative Agency',
    clientsHeading: 'Who typically engages us',
    glossaryBadge: 'Key terms',
    glossaryHeading: '{label}: key terms explained',
    officeHeading: 'Our office',
    officeName: 'YouSun Administrative Agency',
    officeIntro: 'YouSun Administrative Agency is a licensed administrative agent office (행정사사무소) on Toegye-ro in Jung-gu, Seoul. We prepare and file permit, registration and report applications with Korean government agencies on behalf of clients, in Korean, English, Chinese and Japanese.',
    officeRows: [
      { label: 'Address', value: '3F Seongwoo Bldg, 324 Toegye-ro, Jung-gu, Seoul 04614, Korea' },
      { label: 'Phone', value: '+82-2-363-2251', href: PHONE_HREF },
      { label: 'Hours', value: 'Mon–Fri 09:30–17:30 (KST), closed weekends and public holidays' },
      { label: 'Languages', value: 'Korean · English · Chinese · Japanese' },
    ],
    catalogName: '{label} services',
  },
  zh: {
    servicesHeading: '{kw} — YouSun Administrative Agency 办理的业务',
    clientsHeading: '委托我们的客户类型',
    glossaryBadge: '术语解释',
    glossaryHeading: '{label}术语解释',
    officeHeading: '事务所信息',
    officeName: 'YouSun Administrative Agency',
    officeIntro: 'YouSun Administrative Agency 是位于首尔中区退溪路的行政士事务所（행정사사무소），代客户制作并向韩国行政机关提交许可、登记、申报材料，可使用韩语、英语、中文、日语沟通。',
    officeRows: [
      { label: '地址', value: '首尔特别市中区退溪路324号成宇大厦3层（04614）' },
      { label: '电话', value: '+82-2-363-2251', href: PHONE_HREF },
      { label: '办公时间', value: '周一至周五 09:30–17:30（韩国时间），周末及法定节假日休息' },
      { label: '咨询语言', value: '韩语 · 英语 · 中文 · 日语' },
    ],
    catalogName: '{label}办理业务',
  },
  ja: {
    servicesHeading: '{kw} — YouSun Administrative Agency が扱う業務',
    clientsHeading: 'ご依頼の多いお客様',
    glossaryBadge: '用語解説',
    glossaryHeading: '{label}の用語解説',
    officeHeading: '事務所のご案内',
    officeName: 'YouSun Administrative Agency',
    officeIntro: 'YouSun Administrative Agency はソウル市中区退溪路にある行政士事務所（행정사사무소）で、韓国の行政機関に提出する許認可・登録・申告書類の作成と提出代行を行います。韓国語・英語・中国語・日本語でご相談いただけます。',
    officeRows: [
      { label: '住所', value: 'ソウル特別市中区退溪路324 成宇ビル3F（04614）' },
      { label: '電話', value: '+82-2-363-2251', href: PHONE_HREF },
      { label: '営業時間', value: '月〜金 09:30–17:30（KST）、土・日・祝日休み' },
      { label: '対応言語', value: '韓国語・英語・中国語・日本語' },
    ],
    catalogName: '{label}の取扱業務',
  },
}

const absHref = (url: string, href: string) => (href.startsWith('#') ? `${url}${href}` : `https://inhega.co.kr${href}`)

/** Service.hasOfferCatalog — 화면 '처리하는 업무' 목록 그대로(가격 없음). */
export function pillarOfferCatalog(v: PillarView, url: string) {
  const ex = v.expertise
  if (!ex || ex.services.length === 0) return null
  return {
    '@type': 'OfferCatalog',
    name: EXPERTISE_UI[v.locale].catalogName.replace('{label}', v.label),
    itemListElement: ex.services.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s.name, url: absHref(url, s.href), provider: { '@id': ORG_ID } },
    })),
  }
}

/** 용어 설명 → DefinedTermSet(화면 글자 그대로). */
export function pillarGlossaryJsonLd(v: PillarView, url: string) {
  const ex = v.expertise
  if (!ex || ex.glossary.length === 0) return null
  const setId = `${url}#svc-glossary`
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    '@id': setId,
    name: EXPERTISE_UI[v.locale].glossaryHeading.replace('{label}', v.label),
    inLanguage: LANG_TAG[v.locale],
    url: setId,
    publisher: { '@id': ORG_ID },
    hasDefinedTerm: ex.glossary.map((g) => ({
      '@type': 'DefinedTerm',
      '@id': `${url}#${g.id}`,
      name: g.term,
      description: g.def,
      url: `${url}#${g.id}`,
      inDefinedTermSet: setId,
    })),
  }
}
