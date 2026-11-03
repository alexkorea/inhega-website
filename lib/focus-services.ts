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
