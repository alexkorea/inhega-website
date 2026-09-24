/**
 * 웹폰트 로딩 — 첫 화면에 필요한 글자만 자체호스팅으로 먼저 받는다.
 *
 * 그전에는 jsdelivr(Pretendard dynamic-subset)와 Google(Outfit) 스타일시트를
 * 렌더블로킹 <link> 로 받았다. dynamic-subset 은 유니코드 '구간' 단위라 홈이 쓰는
 * 음절이 302자여도 구간 파일을 통째로 받아, 2026-09-24 실측에서 폰트만 15요청
 * 414KB 로 전송량 1위였다(홈 LCP 4.7~7.4s).
 *
 * 지금은 app/globals.css 안의 자체호스팅 @font-face 가 전부를 책임진다.
 * 안전망(dynamic-subset 92면)도 2026-09-25 에 그 안으로 들어갔다 — 별도 시트를
 * media=print 로 받았다가 load 이후 all 로 바꾸면 그 순간 문서 전체 스타일 재계산이
 * 돌고, 이미 받아 둔 font-display:optional 서체가 다시 적용되며 본문이 재배치된다
 * (실측 CLS 0.2233, 그 시트만 막으면 0.0000). 그래서 비동기 시트도 플립 스크립트도 없다.
 *
 * 남는 건 임계 서브셋 preload 한 줄뿐이고, 그것도 fetchPriority=low 다.
 * 93KB 를 High 로 받으면 LCP 히어로 이미지(95KB)와 대역을 정면으로 다툰다 —
 * 2026-09-25 실측(Slow 4G + CPU 4x)에서 이 폰트만 막으면 LCP 3564ms → 2728ms 였다.
 * low 로 내리면 이미지가 먼저 끝나고, 빠른 회선에서는 그래도 제때 도착해
 * optional 이 Pretendard 를 적용한다(느린 회선은 메트릭 정합 폴백으로 끝난다).
 */
export default function Webfonts() {
  return (
    <link
      rel="preload"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      fetchPriority="low"
      href="/fonts/pretendard-critical-20260924.woff2"
    />
  )
}
