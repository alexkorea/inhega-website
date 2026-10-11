// GA4 설치(INH-REC-1B) — ko/en/zh/ja 4개 루트 레이아웃 전부에 실린다(Next instrumentation-client).
//
// page_view 1회 보장 — page_view 는 이 파일만 보낸다:
// - 첫 화면: 쿼리를 정제한 주소로 1회(config 의 자동 page_view 는 끔).
// - 클라이언트 이동(pushState·replaceState·popstate): 주소가 바뀔 때마다 1회. bfcache 복원도 1회.
// - 이 속성 스트림은 향상된 측정 '브라우저 기록 기반 페이지 변경'이 켜져 있어 gtag 도 이동 page_view 를
//   보내려 하는데(send_page_view:false·ae_block_history 로는 안 꺼짐), Next 라우팅에서 이동 일부를 놓친다
//   (2026-10-11 실측 5회 중 4회 누락). 그래서 gtag 가 dataLayer 로 흘리는 gtm.historyChange-v2 를 걸러
//   gtag 쪽 이동 page_view 를 끄고, 누락 없는 이 파일의 감지만 쓴다.
// - gtag/js 는 LCP 보호를 위해 load + idle 뒤에 주입한다(koreamoa KM-LCP-2 방식). 그 전 hit 은 dataLayer 에 쌓였다 나간다.
import { GA_ID, isInternal, cleanUrl, cleanLocation, baseParams, gaEvent } from './lib/analytics'

type Gtag = (...args: unknown[]) => void
type GaWindow = Window & { dataLayer?: unknown[]; gtag?: Gtag }

let lastHref = ''

function pageView(referrer: string) {
  const w = window as GaWindow
  if (typeof w.gtag !== 'function') return
  const params: Record<string, string> = { ...baseParams(), ...(referrer ? { page_referrer: referrer } : {}) }
  w.gtag('set', { page_location: params.page_location })
  // 제목은 이동 직후 아직 바뀌기 전일 수 있어 한 박자 뒤에 읽는다(주소·경로는 지금 값으로 고정).
  setTimeout(() => w.gtag!('event', 'page_view', { ...params, page_title: document.title }), 100)
}

function onUrlMaybeChanged() {
  if (location.href === lastHref) return
  const prev = lastHref
  lastHref = location.href
  pageView(cleanUrl(prev))
}

/** gtag 가 교체한 dataLayer.push 를 감싸 gtag 자체의 기록 기반 이동 이벤트만 버린다. */
function dropGtagHistoryEvents() {
  const dl = (window as GaWindow).dataLayer
  if (!dl) return
  const push = dl.push
  dl.push = function (...items: unknown[]) {
    const kept = items.filter((x) => !(x && typeof x === 'object' && (x as { event?: string }).event === 'gtm.historyChange-v2'))
    return kept.length ? push.apply(dl, kept) : dl.length
  }
}

function init() {
  const h = location.hostname
  const internal = isInternal()
  // 운영 도메인에서만 수집. 프리뷰(pages.dev)·로컬은 내부 플래그가 있을 때만(→ 전부 internal).
  if (h !== 'inhega.co.kr' && h !== 'www.inhega.co.kr' && !internal) return

  const w = window as GaWindow
  w.dataLayer = w.dataLayer || []
  w.gtag = function () {
    // gtag 는 arguments 객체를 그대로 받아야 한다
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments)
  }
  w.gtag('js', new Date())
  if (internal) w.gtag('set', { traffic_type: 'internal' })
  w.gtag('config', GA_ID, { send_page_view: false, ...(internal ? { traffic_type: 'internal', debug_mode: true } : {}) })
  lastHref = location.href
  w.gtag('set', { page_location: cleanLocation() })
  pageView(cleanUrl(document.referrer))

  // 이동 감지 — Next·gtag 가 나중에 이 함수를 다시 감싸도 이 래퍼는 체인 안에서 그대로 돈다.
  for (const m of ['pushState', 'replaceState'] as const) {
    const orig = history[m]
    history[m] = function (this: History, ...args: Parameters<History['pushState']>) {
      const r = orig.apply(this, args)
      onUrlMaybeChanged()
      return r
    }
  }
  addEventListener('popstate', onUrlMaybeChanged)
  addEventListener('pageshow', (e) => {
    if (e.persisted) pageView('')
  })

  // 전화·카카오: 문서 단위 위임이라 본문 원고(HTML 문자열) 안의 링크도 잡힌다. 링크 주소·번호는 보내지 않는다.
  document.addEventListener(
    'click',
    (e) => {
      const a = (e.target as Element | null)?.closest?.('a[href]')
      if (!a) return
      const href = a.getAttribute('href') || ''
      if (/^tel:/i.test(href)) gaEvent('phone_click', { link_type: 'tel' })
      else if (/^https?:\/\/([a-z0-9-]+\.)*kakao\.com\//i.test(href)) gaEvent('kakao_click', { link_type: a.querySelector('img') ? 'kakao_qr' : 'kakao_link' })
    },
    true,
  )

  const load = () => {
    const s = document.createElement('script')
    s.async = true
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID
    s.onload = dropGtagHistoryEvents
    document.head.appendChild(s)
  }
  const idle = () => {
    const ric = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => void }).requestIdleCallback
    if (ric) ric(load, { timeout: 4000 })
    else setTimeout(load, 2000)
  }
  if (document.readyState === 'complete') idle()
  else addEventListener('load', idle)
}

try {
  init()
} catch {
  // 측정 실패가 사이트 동작을 막지 않게 한다
}
