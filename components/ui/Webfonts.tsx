/**
 * 웹폰트 로딩 — 첫 화면에 필요한 글자만 자체호스팅으로 먼저 받고, 나머지는 뒤로 미룬다.
 *
 * 그전에는 jsdelivr(Pretendard dynamic-subset)와 Google(Outfit) 스타일시트를
 * 렌더블로킹 <link> 로 받았다. dynamic-subset 은 유니코드 '구간' 단위라 홈이 쓰는
 * 음절이 302자여도 구간 파일을 통째로 받아, 2026-09-24 실측에서 폰트만 15요청
 * 414KB 로 전송량 1위였다(홈 LCP 4.7~7.4s).
 *
 * 지금은 app/globals.css 안의 자체호스팅 @font-face 가 첫 화면을 책임진다.
 * jsdelivr 시트는 '아직 서브셋에 없는 글자'용 안전망이라 media=print 로 받아
 * 렌더를 막지 않고, 로드가 끝나면 아래 스크립트가 media 를 all 로 바꾼다.
 */
export default function Webfonts() {
  return (
    <>
      <link
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href="/fonts/pretendard-critical-20260924.woff2"
      />
      <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="anonymous" />
      <link
        rel="stylesheet"
        media="print"
        data-async-font=""
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
      />
      <script
        dangerouslySetInnerHTML={{
          __html:
            "addEventListener('load',function(){document.querySelectorAll('link[data-async-font]').forEach(function(l){l.media='all'})})",
        }}
      />
    </>
  )
}
