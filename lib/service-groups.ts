/**
 * ────────────────────────────────────────────────────────────────────────────
 * 서비스 분야 그룹 (2026-10-04 맥7 0949 — 보스 msg 1792 "신규 업종이 홈에 없다")
 *
 * 기존 24종(lib/services-catalog.ts)과 신규 업종 페이지(lib/industry-pages.ts)를 한 목록으로
 * 보여 줄 때 쓰는 **분야 묶음만** 정한다. 서비스의 이름·설명·순서·존재 여부는 여기서 정하지
 * 않는다 — 그건 여전히 두 정본의 몫이고, 여기 적힌 slug 가 정본에 없으면 그냥 빠진다.
 *
 * 배정 기준은 업종의 성격(근거 법령이 다루는 분야)뿐이다. 새 사실을 붙이지 않는다.
 * 정본에 서비스가 추가됐는데 여기 배정이 없으면 scripts/build-services-menu.mjs 가 빌드를 멈춘다.
 *
 * 'use client' 메뉴도 import 하므로 본문 데이터를 import 하지 말 것(번들 회귀 — services-menu.ts 참고).
 * ──────────────────────────────────────────────────────────────────────────── */

export type GroupLocale = 'ko' | 'en' | 'zh' | 'ja'

export interface ServiceGroup {
  id: string
  label: Record<GroupLocale, string>
  /** 그룹 안 순서. 기존 24종을 먼저, 신규 업종을 뒤에 둔다. */
  slugs: string[]
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    id: 'food',
    label: { ko: '식품·주류', en: 'Food & Liquor', zh: '食品·酒类', ja: '食品・酒類' },
    slugs: ['food-manufacturing', 'haccp', 'health-food', 'restaurant-business-report', 'import-food-sales', 'liquor-import-sales-license', 'entertainment-bar-business-permit'],
  },
  {
    id: 'lodging',
    label: { ko: '숙박·관광·여행', en: 'Lodging, Tourism & Travel', zh: '住宿·旅游', ja: '宿泊・観光・旅行' },
    slugs: ['urban-guesthouse', 'hostel', 'hanok', 'accommodation-business-report', 'residential-lodging-business-report', 'rural-minbak-business-report', 'campground-business-registration', 'travel-agency-registration'],
  },
  {
    id: 'construction',
    label: { ko: '건설·부동산·개발', en: 'Construction, Real Estate & Development', zh: '建设·房地产·开发', ja: '建設・不動産・開発' },
    slugs: ['building-usage', 'factory', 'construction-business-registration', 'real-estate-development-business-registration', 'development-act-farmland-conversion-permit'],
  },
  {
    id: 'environment',
    label: { ko: '환경·화학·에너지', en: 'Environment, Chemicals & Energy', zh: '环境·化学·能源', ja: '環境・化学・エネルギー' },
    slugs: ['hazardous-chemical-business-permit', 'waste-treatment-business-permit', 'emission-facility-permit-report', 'solar-power-business-permit'],
  },
  {
    id: 'medical',
    label: { ko: '의료·제약·화장품·요양', en: 'Medical, Pharma, Cosmetics & Care', zh: '医疗·医药·化妆品·护理', ja: '医療・医薬・化粧品・介護' },
    slugs: ['cosmetics', 'functional-cosmetics', 'medical-device', 'pharmaceutical-wholesale-license', 'foreign-patient-attraction', 'long-term-care-institution-designation'],
  },
  {
    id: 'finance',
    label: { ko: '금융·환전·대부·송금', en: 'Finance, Exchange & Remittance', zh: '金融·兑换·借贷·汇款', ja: '金融・両替・貸金・送金' },
    slugs: ['currency-exchange', 'money-lending-business-registration', 'overseas-remittance-business-registration'],
  },
  {
    id: 'certification',
    label: { ko: '인증·기업확인·조달', en: 'Certification & Procurement', zh: '认证·企业认定·采购', ja: '認証・企業確認・調達' },
    slugs: ['women-enterprise', 'venture-cert', 'research-lab', 'rnd-support', 'procurement', 'mainbiz-management-innovation-sme', 'kc-radio-certification'],
  },
  {
    id: 'corporation',
    label: { ko: '법인·단체 설립', en: 'Corporations & Associations', zh: '法人·团体设立', ja: '法人・団体設立' },
    slugs: ['nonprofit', 'cooperative-establishment-report', 'foundation-establishment-permit'],
  },
  {
    id: 'education',
    label: { ko: '교육·문화·체육', en: 'Education, Culture & Sports', zh: '教育·文化·体育', ja: '教育・文化・スポーツ' },
    slugs: ['sports-club', 'sports-facility-business-report', 'academy-establishment-registration', 'entertainment-agency-business-registration'],
  },
  {
    id: 'transport',
    label: { ko: '운송·물류·자동차·항공', en: 'Transport, Logistics, Auto & Aviation', zh: '运输·物流·汽车·航空', ja: '運送・物流・自動車・航空' },
    slugs: ['logistics', 'freight-trucking', 'car-dealer-rental-business-registration', 'drone-business-registration'],
  },
  {
    id: 'trade',
    label: { ko: '유통·판매·수입', en: 'Distribution, Sales & Import', zh: '流通·销售·进口', ja: '流通・販売・輸入' },
    slugs: ['tobacco', 'ecig', 'mail-order-sales-report'],
  },
  {
    id: 'it',
    label: { ko: 'IT·통신', en: 'IT & Telecom', zh: 'IT·通信', ja: 'IT・通信' },
    slugs: ['location-based-service', 'software-business-performance-management'],
  },
  {
    id: 'living',
    label: { ko: '생활·위생 서비스', en: 'Personal & Hygiene Services', zh: '生活·卫生服务', ja: '生活・衛生サービス' },
    slugs: ['beauty-salon-business-report', 'disinfection-business-report', 'pet-business-permit-registration', 'marriage-brokerage-business-registration'],
  },
]

/**
 * 항목 배열을 그룹으로 묶는다. 순서는 SERVICE_GROUPS 의 그룹 순서·slug 순서이고,
 * 해당 로케일에 없는 slug 는 빠지며 항목이 0개인 그룹은 통째로 빠진다.
 * 배정되지 않은 slug 는 `unassigned` 로 돌려준다(생성기가 0건을 단언한다).
 */
export function groupBySlug<T extends { slug: string }>(
  items: T[],
  locale: GroupLocale,
): { groups: { id: string; label: string; items: T[] }[]; unassigned: string[] } {
  const bySlug = new Map(items.map((it) => [it.slug, it]))
  const used = new Set<string>()
  const groups: { id: string; label: string; items: T[] }[] = []
  for (const g of SERVICE_GROUPS) {
    const gi: T[] = []
    for (const s of g.slugs) {
      const it = bySlug.get(s)
      if (it && !used.has(s)) {
        gi.push(it)
        used.add(s)
      }
    }
    if (gi.length) groups.push({ id: g.id, label: g.label[locale], items: gi })
  }
  return { groups, unassigned: items.map((i) => i.slug).filter((s) => !used.has(s)) }
}
