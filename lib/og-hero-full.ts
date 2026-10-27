/**
 * INHEGA-AUDIT-2(2026-10-27): 제목 낱말을 고쳐 대표이미지를 다시 구운 og 키(locale/slug).
 * 상세 상단 틀(높이 300px·cover)은 390px 화면에서 좌우를, 넓은 화면에서 위아래(사이트명·분류)를 잘라
 * 이미지 속 글자가 잘린다 → 이 이미지들만 1200:630 비율 그대로 보여 준다. 다른 글 적용은 승인 후(보스 msg 3144).
 */
const OG_HERO_FULL = new Set<string>([
  'ko/tobacco-import-sales-guide',
  'en/tobacco-import-sales-guide',
  'zh/tobacco-import-sales-guide',
  'ja/tobacco-import-sales-guide',
  'ko/e-cigarette-import-license-guide',
  'en/e-cigarette-import-license-guide',
  'zh/e-cigarette-import-license-guide',
  'ja/e-cigarette-import-license-guide',
  'ko/tobacco-license-tax-bond',
  'zh/tobacco-license-tax-bond',
  'ko/tobacco-license-renewal',
  'zh/tobacco-license-renewal',
  'ko/tobacco-import-documents',
  'zh/tobacco-import-documents',
  'ko/e-cigarette-import-permit',
  'zh/e-cigarette-import-permit',
  'ko/ecig-select',
  'zh/currency-exchange-registration-guide',
  'ja/currency-exchange-registration-guide',
  'ja/administrative-license-permit-specialist-guide',
  'ja/yongdo-byeongyeong-haengjengsa',
])

/** src = ogThumb() 결과(/og/<locale>/<slug>.png?v=…). */
export function ogHeroBox(src: string): { height?: string; aspectRatio?: string } {
  const key = src.replace(/^\/og\//, '').replace(/\.png(\?.*)?$/, '')
  return OG_HERO_FULL.has(key) ? { aspectRatio: '1200 / 630' } : { height: '300px' }
}
