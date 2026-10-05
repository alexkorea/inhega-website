/**
 * 블로그 사이드바 연락처 3줄(주소·시간·메신저) 앞 아이콘.
 *
 * 예전엔 이모지(📍🕐💬)였는데 2026-09-06 이모지 제거 커밋(7be2361)에서 4바이트 문자가 반쯤 잘려
 * 소스에 U+FFFD(물음표 마름모)가 그대로 박혔다 — 폰트·서브셋 문제가 아니라 소스 바이트 문제였다.
 * 글리프에 기대지 않도록 SVG 로 그린다(currentColor, 장식이라 aria-hidden).
 */
const PATHS = {
  pin: 'M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  clock: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 4v5l3.5 2',
  chat: 'M4 5h16v11H9l-5 4V5z',
} as const

export function ContactLineIcon({ name }: { name: keyof typeof PATHS }) {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flex: '0 0 auto', marginTop: '0.3em' }}
    >
      <path d={PATHS[name]} />
    </svg>
  )
}

/** 아이콘 + 글 한 줄. 글이 두 줄로 접혀도 아이콘은 첫 줄에 붙는다. */
export function ContactLine({ icon, children }: { icon: keyof typeof PATHS; children: React.ReactNode }) {
  return (
    <p style={{ display: 'flex', gap: '0.4rem', alignItems: 'flex-start' }}>
      <ContactLineIcon name={icon} />
      <span>{children}</span>
    </p>
  )
}
