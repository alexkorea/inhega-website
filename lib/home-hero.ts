/**
 * 홈 히어로 사진(Pexels 11687718, 6915×4526) 폭 후보 — INHEGA-HERO-1122.
 *
 * 히어로는 object-fit:cover 이고 모바일(≤767px)에선 칸 높이가 글 길이로 정해진다(511~722px).
 * 사진 비율이 1.528 이라 실제로 그려지는 폭 = 칸 높이 × 1.528 ≈ 780~1100 CSS px 로 화면 폭(100vw)의
 * 1.8~3.4배다. 그래서 sizes=100vw 면 390×3 에서 1280 을 골라 밀도 1.25~1.55 로 흐렸다.
 *
 * 모바일은 <source media> 로 "그려지는 폭"(2026-11-22 라이브 실측 +3%)을 알리고, 대역 때문에 q30 전용 파일을 쓴다.
 *  - ≤479px: 칸에 보이는 건 사진 가운데 61% 이하라, 가운데 66% 폭만 자른 파일(-mc-, 비율 1.008)을 준다.
 *    칸 비율(≤0.94)이 1.008 보다 좁아 여전히 높이 기준 cover 라 화면 결과는 전체판과 같다(평균차 1~2.5/255).
 *    전송량이 전체판의 약 2/3.
 *  - 480~767px: 전체 프레임(-m-).
 * 데스크톱(≥768)은 칸이 가로로 길어 100vw 가 맞다 — 기존 q60 파일 + 1600/1920/2400 단계.
 * 문구를 바꿔 히어로 높이가 달라지면 ~/work/imgqa-1122/box-hero.cjs 로 다시 재고 아래 값을 고칠 것.
 */
export const HERO_DESKTOP_WIDTHS = [768, 1280, 1600, 1920, 2000, 2400, 2880]
export const HERO_MOBILE_WIDTHS = [1280, 1600, 1920, 2400, 2880, 3200]
export const HERO_CROP_WIDTHS = [1060, 1270, 1580, 1720, 1900, 2120]
const CROP = 0.66

type Locale = 'ko' | 'en' | 'zh' | 'ja'

// 전체 프레임 기준 "그려지는 폭" 실측(+3%) — [최대 화면폭, px] 순서, 마지막은 그 위 전부.
// 실측: ko 320~375:903 390:828 412+:781 · en 320/360:1076 375/390:1028 412/430:953 440:831 480+:785
//       zh 320:1028 360+:785(540~767 은 738~767) · ja 320:1103 360/375:953 390:831 412+:785
const DRAWN: Record<Locale, { small: [number, number][]; rest: number; mid: number }> = {
  ko: { small: [[389, 930], [411, 855]], rest: 805, mid: 805 },
  en: { small: [[374, 1110], [411, 1060], [439, 985]], rest: 860, mid: 810 },
  zh: { small: [[359, 1060]], rest: 810, mid: 810 },
  ja: { small: [[359, 1135], [389, 985], [411, 860]], rest: 810, mid: 810 },
}

const sizesOf = (pairs: [number, number][], rest: number, k: number) =>
  [...pairs.map(([mw, px]) => `(max-width: ${mw}px) ${Math.round(px * k)}px`), `${Math.round(rest * k)}px`].join(', ')

export function heroSources(locale: Locale) {
  const d = DRAWN[locale]
  const pre = locale === 'ko' ? '/images/hero-seoul-ko-flat' : '/images/hero-seoul'
  return [
    { base: `${pre}-mc-20261122`, widths: HERO_CROP_WIDTHS, media: '(max-width: 479px)', sizes: sizesOf(d.small, d.rest, CROP) },
    { base: `${pre}-m-20261122`, widths: HERO_MOBILE_WIDTHS, media: '(max-width: 767px)', sizes: `${d.mid}px` },
  ]
}
