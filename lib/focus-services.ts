/**
 * ────────────────────────────────────────────────────────────────────────────
 * 중점 업무 6개 (INHEGA-FOCUS-1103, 보스 msg 4781, 2026-11-03)
 *
 * 홈 '중점 업무' 카드 · 헤더 메뉴 맨 앞 '중점 업무' 묶음 · 서비스 상세의 필러 요약(lib/focus-pillars.ts)이
 * 이 배열 하나를 쓴다. 순서 = 보스 지시 순서. slug 는 정본(lib/services-data.ts)에 있어야 한다.
 * 기존 업무는 원래 분야 묶음에 그대로 남는다(삭제 금지) — 여기 6개는 앞에 한 번 더 걸 뿐이다.
 *
 * 'use client' 헤더도 import 하므로 본문 데이터를 import 하지 말 것(번들 회귀 — services-menu.ts 참고).
 * ──────────────────────────────────────────────────────────────────────────── */

export interface FocusService {
  slug: string
  href: string
  /** 카드·메뉴 이름 */
  label: string
  /** 카드 한 줄 설명 */
  desc: string
}

export const FOCUS_SERVICES: FocusService[] = [
  { slug: 'nonprofit', href: '/services/nonprofit', label: '비영리사단법인 설립', desc: '정관 작성·창립총회부터 주무관청 설립허가, 설립등기까지' },
  { slug: 'telecom-business', href: '/services/telecom-business', label: '정보통신분야 인허가', desc: '부가통신사업 신고·기간통신사업 등록과 특수한 유형 부가통신 등록' },
  { slug: 'location-based-service', href: '/services/location-based-service', label: '위치기반서비스사업 신고', desc: '국내 기업은 물론 한국 법인이 없는 외국기업 신고까지' },
  { slug: 'cosmetics', href: '/services/cosmetics', label: '화장품 인허가', desc: '성분 검토부터 책임판매업·제조업 등록, 기능성 심사, 안전성 자료까지' },
  { slug: 'health-food', href: '/services/health-food', label: '건강기능식품', desc: '판매업 신고·제조업 허가·수입 영업등록과 기능성 원료 인정' },
  { slug: 'factory', href: '/services/factory', label: '공장등록', desc: '공장설립 승인과 완료신고부터 공장등록증명서 발급까지' },
]

export const FOCUS_SLUGS = new Set(FOCUS_SERVICES.map((f) => f.slug))

/* 외국어 홈 카드·헤더 메뉴 '중점 업무'(INHEGA-FOCUS-1103 2차, 보스 msg 4784) — 순서·slug 는 위 배열과 같다.
   이름은 그 언어 사용자가 찾는 말로(직역 아님). 필러 본문은 lib/focus-pillars-i18n.ts(서버 전용). */
export type FocusLocale = 'en' | 'zh' | 'ja'
export interface FocusServicesText {
  badge: string
  heading: string
  lead: string
  more: string
  items: Record<string, { label: string; desc: string }>
}
export const FOCUS_SERVICES_I18N: Record<FocusLocale, FocusServicesText> = {
  en: {
    badge: 'Focus services',
    heading: 'What YouSun Administrative Agency handles most',
    lead: 'Six permit areas we handle most often for Korean and foreign companies. Each page covers who needs it, requirements, steps, documents and timelines.',
    more: 'Learn more',
    items: {
      nonprofit: { label: 'Nonprofit Association', desc: 'Articles, founding meeting, ministry permit and registration of an incorporated nonprofit association' },
      'telecom-business': { label: 'Telecom Business Registration', desc: 'Value-added telecommunications reports, special-type registration and facilities-based registration' },
      'location-based-service': { label: 'Location-Based Service Report', desc: 'Reports under the Location Information Act, including foreign companies without a Korean entity' },
      cosmetics: { label: 'Cosmetics Registration', desc: 'Ingredient review, responsible distributor and manufacturer registration, functional cosmetics and safety data' },
      'health-food': { label: 'Health Functional Food', desc: 'Import business registration, sales business report, manufacturing permit and functional ingredient approval' },
      factory: { label: 'Factory Registration', desc: 'Factory establishment approval, completion report and factory registration certificate' },
    },
  },
  zh: {
    badge: '重点业务',
    heading: 'YouSun Administrative Agency 重点业务',
    lead: '我们最常为韩国及外国企业办理的六类许可。各页面说明适用对象、要件、流程、所需材料与处理期限。',
    more: '了解详情',
    items: {
      nonprofit: { label: '韩国非营利社团法人设立', desc: '章程、创立大会、主管机关设立许可到法人登记' },
      'telecom-business': { label: '韩国增值电信业务申报', desc: '增值电信业务申报、特殊类型登记与基础电信业务登记' },
      'location-based-service': { label: '韩国位置服务事业申报', desc: '依位置信息法申报，没有韩国法人的外国企业也可办理' },
      cosmetics: { label: '韩国化妆品注册', desc: '成分审查、责任销售业与制造业注册、功能性化妆品审查与安全性资料' },
      'health-food': { label: '韩国保健食品（健康功能食品）', desc: '进口营业登记、销售业申报、制造业许可与功能性原料认定' },
      factory: { label: '韩国工厂登记', desc: '工厂设立批准、竣工申报到工厂登记证明' },
    },
  },
  ja: {
    badge: '重点業務',
    heading: 'YouSun Administrative Agency の重点業務',
    lead: '韓国企業・外国企業から最も多くご依頼いただく6分野です。各ページで対象・要件・手続き・必要書類・期間を確認できます。',
    more: '詳しく見る',
    items: {
      nonprofit: { label: '韓国の社団法人設立', desc: '定款・創立総会から主務官庁の設立許可、設立登記まで' },
      'telecom-business': { label: '韓国の付加通信事業申告', desc: '付加通信事業の申告、特殊な類型の登録、基幹通信事業の登録' },
      'location-based-service': { label: '韓国の位置情報サービス申告', desc: '位置情報法に基づく申告。韓国法人のない外国企業にも対応' },
      cosmetics: { label: '韓国の化粧品登録', desc: '成分検討から責任販売業・製造業登録、機能性化粧品の審査、安全性資料まで' },
      'health-food': { label: '韓国の健康機能食品', desc: '輸入営業登録、販売業申告、製造業許可、機能性原料の認定' },
      factory: { label: '韓国の工場登録', desc: '工場設立承認・完了申告から工場登録証明書の発給まで' },
    },
  },
}
