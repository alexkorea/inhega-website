/**
 * 홈 히어로 사진(Pexels 11687718) 폭 후보 — INHEGA-HERO-1122.
 *
 * 히어로는 object-fit:cover 이고 모바일(≤767px)에선 칸 높이가 글 길이로 정해진다(511~722px).
 * 사진 비율이 1.528 이라 실제로 그려지는 폭 = 칸 높이 × 1.528 ≈ 780~1100 CSS px 로, 화면 폭(100vw)의
 * 1.8~3.4배다. 그래서 sizes=100vw 면 390×3 에서 1280 을 골라 밀도 1.25~1.55 로 흐렸다.
 * 모바일은 <source media> 로 "그려지는 폭"(2026-11-22 라이브 실측 +3%)을 알리고, 대역 때문에 q30 전용 파일을 쓴다.
 * 문구를 바꿔 히어로 높이가 달라지면 ~/work/imgqa-1122/box-hero.cjs 로 다시 재고 아래 값을 고칠 것.
 * 데스크톱(≥768)은 칸이 가로로 길어 100vw 가 맞다 — 기존 q60 파일 + 1600/1920/2400 단계.
 */
export const HERO_DESKTOP_WIDTHS = [768, 1280, 1600, 1920, 2000, 2400, 2880]
export const HERO_MOBILE_MEDIA = '(max-width: 767px)'
export const HERO_MOBILE_WIDTHS = [1280, 1600, 1920, 2400, 2880, 3200]

// 실측 그려진 폭(px): ko 320~375:903 390:828 412+:781 · en 320/360:1076 375/390:1028 412/430:953 440:831 480+:785
// zh 320:1028 360+:785(540~767 은 738~767) · ja 320:1103 360/375:953 390:831 412+:785
export const HERO_MOBILE_SIZES = {
  ko: '(max-width: 389px) 930px, (max-width: 411px) 855px, 805px',
  en: '(max-width: 374px) 1110px, (max-width: 411px) 1060px, (max-width: 439px) 985px, (max-width: 479px) 860px, 810px',
  zh: '(max-width: 359px) 1060px, 810px',
  ja: '(max-width: 359px) 1135px, (max-width: 389px) 985px, (max-width: 411px) 860px, 810px',
} as const

export function heroMobile(locale: keyof typeof HERO_MOBILE_SIZES) {
  return {
    base: locale === 'ko' ? '/images/hero-seoul-ko-flat-m-20261122' : '/images/hero-seoul-m-20261122',
    widths: HERO_MOBILE_WIDTHS,
    media: HERO_MOBILE_MEDIA,
    sizes: HERO_MOBILE_SIZES[locale],
  }
}
