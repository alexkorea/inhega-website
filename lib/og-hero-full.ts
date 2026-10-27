/**
 * 블로그 상세 상단 대표이미지 틀.
 * INHEGA-AUDIT-2(2026-10-27): 높이 300px·cover 틀이 390px 화면에서 좌우를, 넓은 화면에서 위아래(사이트명·분류)를
 * 잘라 이미지 속 글자가 잘림 → 재생성 21장만 1200:630 비율로 표시.
 * INHEGA-AUDIT-3(2026-10-27, 후보 A 승인): 전 글 1200:630 일괄 전환(public/og 대표이미지는 전부 1200×630).
 */
/** src = ogThumb() 결과(/og/<locale>/<slug>.png?v=…). */
export function ogHeroBox(_src: string): { aspectRatio: string } {
  return { aspectRatio: '1200 / 630' }
}
