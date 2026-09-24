/**
 * LCP/FCP/전송량 실측 (CDP). PSI 쿼터가 막혀 있어 로컬 크롬으로 잰다.
 *
 *   node scripts/measure-lcp.mjs <url> [반복=5]
 *
 * 조건은 PSI 모바일과 맞춘다 — Slow 4G(1.6Mbps/750kbps/150ms) + CPU 4배 감속 +
 * 390x844 모바일. 캐시는 매 회차 비운다. 같은 기계에서 빌드를 동시에 돌리면
 * LCP 가 부풀려지니 측정 중에는 빌드를 걸지 말 것.
 */
import { spawn } from 'node:child_process'

const URL_ = process.argv[2]
const N = Number(process.argv[3] || 5)
if (!URL_) { console.error('사용법: node scripts/measure-lcp.mjs <url> [반복]'); process.exit(1) }
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const port = 9800 + Math.floor(Math.random() * 190)
const proc = spawn(CHROME, [`--remote-debugging-port=${port}`, '--headless=new', '--disable-gpu',
  '--no-first-run', '--user-data-dir=/tmp/cdp-lcp-' + port, 'about:blank'], { stdio: 'ignore' })
let wsUrl
for (let i = 0; i < 80; i++) {
  try { wsUrl = (await (await fetch(`http://127.0.0.1:${port}/json/version`)).json()).webSocketDebuggerUrl; break }
  catch { await sleep(250) }
}
if (!wsUrl) { proc.kill(); console.error('Chrome 기동 실패'); process.exit(1) }

const runs = []
for (let i = 0; i < N; i++) {
  const sock = new WebSocket(wsUrl)
  await new Promise((r) => (sock.onopen = r))
  let id = 0; const pending = new Map(); const events = []
  sock.onmessage = (e) => {
    const m = JSON.parse(e.data)
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id) }
    else if (m.method) events.push(m)
  }
  const send = (method, params = {}, sessionId) => new Promise((res, rej) => {
    const mid = ++id
    pending.set(mid, (m) => (m.error ? rej(new Error(method + ': ' + m.error.message)) : res(m.result)))
    sock.send(JSON.stringify({ id: mid, method, params, sessionId }))
  })

  const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
  await send('Page.enable', {}, sessionId)
  await send('Network.enable', {}, sessionId)
  await send('Performance.enable', {}, sessionId)
  await send('Network.setCacheDisabled', { cacheDisabled: true }, sessionId)
  await send('Network.emulateNetworkConditions', {
    offline: false, latency: 150, downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8,
  }, sessionId)
  await send('Emulation.setCPUThrottlingRate', { rate: 4 }, sessionId)
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true }, sessionId)

  // 반드시 문서 생성 **전에** 심는다. Runtime.evaluate 로 about:blank 에 심으면
  // Page.navigate 가 문서를 갈아치우면서 옵저버가 사라져 LCP 가 null 로 나온다.
  await send('Page.addScriptToEvaluateOnNewDocument', {
    source: `window.__lcp=0;window.__fcp=0;window.__cls=0;
      new PerformanceObserver(l=>{for(const e of l.getEntries())window.__lcp=e.startTime}).observe({type:'largest-contentful-paint',buffered:true});
      new PerformanceObserver(l=>{for(const e of l.getEntries())if(e.name==='first-contentful-paint')window.__fcp=e.startTime}).observe({type:'paint',buffered:true});
      new PerformanceObserver(l=>{for(const e of l.getEntries())if(!e.hadRecentInput)window.__cls+=e.value}).observe({type:'layout-shift',buffered:true});`,
  }, sessionId)

  await send('Page.navigate', { url: URL_ }, sessionId)
  await sleep(12000)

  const r = await send('Runtime.evaluate', {
    expression: `(() => {
      const nav = performance.getEntriesByType('navigation')[0] || {};
      const res = performance.getEntriesByType('resource');
      const bytes = res.reduce((n,e)=>n+(e.encodedBodySize||e.transferSize||0),0);
      const js = res.filter(e=>e.initiatorType==='script'||/\\.js(\\?|$)/.test(e.name));
      const lcpEl = (window.__lcpEl||'');
      return { lcp: Math.round(window.__lcp), fcp: Math.round(window.__fcp), cls: +(window.__cls||0).toFixed(4),
               ttfb: Math.round(nav.responseStart||0), dcl: Math.round(nav.domContentLoadedEventEnd||0),
               reqs: res.length, bytes, jsReqs: js.length, jsBytes: js.reduce((n,e)=>n+(e.encodedBodySize||0),0) };
    })()`, returnByValue: true,
  }, sessionId)
  runs.push(r.result.value)
  console.log(`  #${i + 1} LCP ${r.result.value.lcp}ms  FCP ${r.result.value.fcp}ms  CLS ${r.result.value.cls}  JS ${r.result.value.jsReqs}건 ${(r.result.value.jsBytes / 1024).toFixed(0)}KB  전체 ${(r.result.value.bytes / 1024).toFixed(0)}KB`)
  await send('Target.closeTarget', { targetId })
  sock.close()
}
proc.kill()

if (runs.some((r) => !r.lcp)) { console.error('\n[LCP] LCP 가 0/null 인 회차가 있다 — 측정 실패로 본다'); process.exit(1) }
const med = (k) => { const v = runs.map((r) => r[k]).sort((a, b) => a - b); return v[Math.floor(v.length / 2)] }
console.log(`\n[LCP] ${URL_}`)
console.log(`  중앙값  LCP ${med('lcp')}ms  FCP ${med('fcp')}ms  CLS ${med('cls')}  TTFB ${med('ttfb')}ms`)
console.log(`  JS ${med('jsReqs')}건 ${(med('jsBytes') / 1024).toFixed(1)}KB · 전체 ${med('reqs')}건 ${(med('bytes') / 1024).toFixed(1)}KB`)
console.log(`  LCP 목표 2500ms → ${med('lcp') <= 2500 ? 'PASS' : 'FAIL'}`)
