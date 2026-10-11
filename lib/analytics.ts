// GA4 (inhega 전용 속성 G-6F621HBC7B, 맥7 생성) — INH-REC-1B, 보스 msg 3051·3054.
// 개인정보는 보내지 않는다: 이름·전화·이메일·문의내용은 어떤 이벤트에도 넣지 않고,
// page_location 은 쿼리를 utm_*·gclid·page 만 남겨 정제한다(그 밖의 쿼리는 버린다).
export const GA_ID = 'G-6F621HBC7B'
const INTERNAL_KEY = 'inhega_internal'
const KEEP_QUERY = /^(utm_[a-z]+|gclid|page)$/

type Gtag = (...args: unknown[]) => void
type GaWindow = Window & { dataLayer?: unknown[]; gtag?: Gtag }

/** 점검·테스트 방문: ?inhega_internal=1 이면 이후 모든 hit 에 traffic_type=internal(=0 이면 해제). */
export function isInternal(): boolean {
  try {
    const v = new URLSearchParams(location.search).get(INTERNAL_KEY)
    if (v === '1') localStorage.setItem(INTERNAL_KEY, '1')
    else if (v === '0') localStorage.removeItem(INTERNAL_KEY)
    return localStorage.getItem(INTERNAL_KEY) === '1'
  } catch {
    return false
  }
}

export function cleanUrl(href: string): string {
  try {
    const u = new URL(href)
    for (const k of [...u.searchParams.keys()]) if (!KEEP_QUERY.test(k)) u.searchParams.delete(k)
    u.hash = ''
    return u.toString()
  } catch {
    return ''
  }
}

export const cleanLocation = () => cleanUrl(location.href)

function device(): string {
  const ua = navigator.userAgent
  if (/iPad|Tablet/i.test(ua) || (/Android/i.test(ua) && !/Mobile/i.test(ua))) return 'tablet'
  return /Mobi|iPhone|Android/i.test(ua) ? 'mobile' : 'desktop'
}

/** 모든 이벤트 공통 매개변수 — 경로·언어(html lang)·기기만. */
export function baseParams(): Record<string, string> {
  return {
    page_location: cleanLocation(),
    page_path: location.pathname,
    page_language: document.documentElement.lang || '',
    device: device(),
  }
}

export function gaEvent(name: string, params: Record<string, string>) {
  const w = window as GaWindow
  if (typeof w.gtag !== 'function') return
  w.gtag('event', name, { ...baseParams(), ...params })
}

/** 상담폼이 서버에서 정상 접수 응답을 받은 뒤에만 호출한다(버튼 클릭 아님). */
export function trackFormSuccess(form: 'contact' | 'quote') {
  gaEvent('form_submit_success', { link_type: 'form', form_name: form })
}
