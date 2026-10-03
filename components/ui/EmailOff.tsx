/**
 * Cloudflare Email Address Obfuscation 제외 구간 — `<!--email_off-->…<!--/email_off-->`.
 *
 * 존 설정이 켜져 있으면 CF 엣지가 HTML 안의 이메일을 [email protected] 로 바꾸고
 * 렌더 차단 스크립트 /cdn-cgi/scripts/…/email-decode.min.js 를 모든 페이지에 주입한다(L1, ~250ms).
 * 같은 주소가 JSON-LD·RSC 페이로드(script 안이라 CF 가 건드리지 않는다)에 평문으로 이미 있어
 * 난독화의 보호 효과는 없다. 그래서 화면에 보이는 이메일만 이 구간으로 감싼다.
 *
 * 표식은 display:contents 빈 span 에 담는다 — flex 컨테이너 안에서도 간격을 만들지 않는다.
 * CF 는 원시 HTML 에서 두 주석 사이를 통째로 건너뛰므로 태그 경계와 무관하게 동작한다.
 * 이메일을 새로 노출하면 반드시 이걸로 감쌀 것(하나라도 빠지면 스크립트가 다시 실린다).
 */
const MARK = { display: 'contents' } as const

export function EmailOff({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span style={MARK} dangerouslySetInnerHTML={{ __html: '<!--email_off-->' }} />
      {children}
      <span style={MARK} dangerouslySetInnerHTML={{ __html: '<!--/email_off-->' }} />
    </>
  )
}
