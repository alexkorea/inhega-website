/**
 * 서비스 메뉴 경량화(2026-09-25, 맥7 승인) 회귀 게이트 — CDP 실측.
 *
 * 무엇을 보나
 * ───────────
 * 클라이언트가 lib/services-catalog.ts(본문 코퍼스 893KB 동반) 대신
 * lib/services-menu.ts(경량 생성판)를 import 하도록 바꿨다. 사용자가 만지는 것은
 * 그대로여야 한다 — 헤더 메가메뉴, 모바일 메뉴, 상담·견적 폼 select, 언어전환.
 *
 * 어떻게 보나
 * ───────────
 * 임계값을 스크립트에 박지 않는다. 두 오리진을 같은 탐침으로 찍어 **동등성**을 본다.
 *   node scripts/verify-services-menu.mjs --before https://inhega.co.kr --after http://localhost:3000
 * 한쪽만 주면 정본(lib/services-catalog.ts)에서 읽은 기대값과만 대조한다.
 *   node scripts/verify-services-menu.mjs --after https://inhega.co.kr
 *
 * 모바일 메뉴는 DOM 에 늘 있고 CSS 클래스(mobileMenuOpen)로만 열린다 —
 * DOM 길이 변화로 판정하면 거짓 FAIL 이 난다(2026-09-25에 한 번 그랬다).
 */
import { register } from 'node:module'
import { pathToFileURL, fileURLToPath } from 'node:url'
import { join, dirname } from 'node:path'
import { spawn } from 'node:child_process'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
register(pathToFileURL(join(ROOT, 'scripts/lib/ts-esm-loader.mjs')).href, pathToFileURL(ROOT + '/'))
const catalog = await import(pathToFileURL(join(ROOT, 'lib/services-catalog.ts')).href)

const argv = process.argv.slice(2)
const arg = (k, d) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : d }
const AFTER = (arg('--after', 'http://localhost:3000')).replace(/[/]+$/, '')
const BEFORE = arg('--before') ? arg('--before').replace(/[/]+$/, '') : null
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const LOCALES = [['ko', ''], ['en', '/en'], ['zh', '/zh'], ['ja', '/ja']]
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

async function openChrome() {
  const port = 9222 + Math.floor(Math.random() * 600)
  const proc = spawn(CHROME, [`--remote-debugging-port=${port}`, '--headless=new', '--disable-gpu',
    '--no-first-run', '--user-data-dir=/tmp/cdp-inhega-' + port, 'about:blank'], { stdio: 'ignore' })
  let ws
  for (let i = 0; i < 80; i++) {
    try { ws = (await (await fetch(`http://127.0.0.1:${port}/json/version`)).json()).webSocketDebuggerUrl; break }
    catch { await sleep(250) }
  }
  if (!ws) { proc.kill(); throw new Error('Chrome CDP 기동 실패') }
  const sock = new WebSocket(ws)
  await new Promise((r) => (sock.onopen = r))
  let id = 0; const pending = new Map()
  sock.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id) } }
  const send = (method, params = {}, sessionId) => new Promise((res, rej) => {
    const mid = ++id
    pending.set(mid, (m) => (m.error ? rej(new Error(method + ': ' + m.error.message)) : res(m.result)))
    sock.send(JSON.stringify({ id: mid, method, params, sessionId }))
  })
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true })
  await send('Page.enable', {}, sessionId)
  await send('Runtime.enable', {}, sessionId)
  // 모바일 메뉴가 실제로 보이는 폭으로 고정 — headless 의 --window-size 는 믿을 수 없다.
  await send('Emulation.setDeviceMetricsOverride',
    { width: 390, height: 844, deviceScaleFactor: 2, mobile: true }, sessionId)
  return {
    send, sessionId,
    close: () => { try { sock.close() } catch {} proc.kill() },
  }
}

/** 페이지 안에서 한 번에 돌리는 탐침. 두 오리진에 똑같이 던진다. */
/** 페이지 안에서 한 번에 돌리는 탐침. 두 오리진에 똑같이 던진다.
 *  클릭 뒤에는 반드시 React 의 리렌더를 한 틱 기다린다 — 같은 틱에서 속성을 읽으면
 *  aria-expanded 가 false 그대로라 거짓 FAIL 이 난다(2026-09-25에 한 번 그랬다). */
const PROBE = `(async () => {
  const tick = () => new Promise(r => setTimeout(() => requestAnimationFrame(() => r()), 120));
  const norm = s => (s||'').replace(/\\s+/g,' ').trim();
  const q = s => [...document.querySelectorAll(s)];
  const svcLinks = [...new Set(q('a').map(a=>a.getAttribute('href')).filter(h=>h && /\\/services\\//.test(h)))].sort();
  const svcTexts = [...new Set(q('a').filter(a=>/\\/services\\//.test(a.getAttribute('href')||'')).map(a=>norm(a.textContent)))].sort();
  const groupLabels = [...new Set(q('p').map(p=>norm(p.textContent)).filter(t=>t && t.length<24))];
  const langLinks = [...new Set(q('a').map(a=>a.getAttribute('href')).filter(h=>/^\\/(en|zh|ja)$|^\\/$/.test(h||'')))].sort();

  // 메가메뉴는 클릭이 아니라 wrapper 의 onMouseEnter 로 열린다 — click() 으로는 안 열린다.
  const mega = q('button').find(b=>b.getAttribute('aria-haspopup')==='true');
  let megaBefore=null, megaAfter=null, megaPanelLinks=0, megaClosed=null;
  if (mega) {
    const wrap = mega.parentElement;
    megaBefore = mega.getAttribute('aria-expanded');
    wrap.dispatchEvent(new MouseEvent('mouseover', {bubbles:true}));
    wrap.dispatchEvent(new MouseEvent('mouseenter', {bubbles:false}));
    await tick();
    megaAfter = mega.getAttribute('aria-expanded');
    const panel = q('div').find(d=>/megaMenu(?!Inner|Header|Group|Item|Desc)/.test(d.className||''));
    megaPanelLinks = panel ? panel.querySelectorAll('a[href*="/services/"]').length : 0;
    wrap.dispatchEvent(new MouseEvent('mouseout', {bubbles:true}));
    wrap.dispatchEvent(new MouseEvent('mouseleave', {bubbles:false}));
    await tick();
    megaClosed = mega.getAttribute('aria-expanded');
  }

  // 모바일 토글: DOM 상주 + CSS 클래스 토글이라 className 변화로 판정한다
  const toggle = q('button').find(b=>/메뉴|menu/i.test(b.getAttribute('aria-label')||''));
  let mobBefore=null, mobAfter=null, mobLinks=0;
  if (toggle) {
    const panel = q('div').find(d=>/mobileMenu/.test(d.className||''));
    mobBefore = panel ? panel.className : null;
    toggle.click(); await tick();
    const panel2 = q('div').find(d=>/mobileMenu/.test(d.className||''));
    mobAfter = panel2 ? panel2.className : null;
    mobLinks = panel2 ? panel2.querySelectorAll('a[href*="/services/"]').length : 0;
  }

  const sel = q('select').find(s=>s.options.length>5);
  // placeholder(맨 앞 빈 값/안내문)는 빼고 실제 선택지만 본다
  const options = sel ? [...sel.options].filter(o=>o.value !== '').map(o=>norm(o.textContent)) : null;
  // 견적폼 1단계는 select 가 아니라 버튼 그리드다(data-selected 를 가진 선택 버튼).
  const pickButtons = q('button[data-selected]').map(b=>norm(b.textContent));

  return { svcLinks, svcTexts, groupLabels, langLinks,
           megaBefore, megaAfter, megaPanelLinks, mobBefore, mobAfter, mobLinks,
           options, pickButtons, megaClosed, h1: norm((document.querySelector('h1')||{}).textContent),
           bodyLen: document.body.innerText.length };
})()`

async function probe(ctx, url, expr = PROBE) {
  await ctx.send('Page.navigate', { url }, ctx.sessionId)
  for (let i = 0; i < 100; i++) {
    const r = await ctx.send('Runtime.evaluate', { expression: 'document.readyState', returnByValue: true }, ctx.sessionId)
    if (r.result.value === 'complete') break
    await sleep(150)
  }
  await sleep(1000) // hydration
  const r = await ctx.send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }, ctx.sessionId)
  if (r.exceptionDetails) throw new Error(r.exceptionDetails.text)
  return r.result.value
}

async function collect(base) {
  const ctx = await openChrome()
  const out = {}
  try {
    for (const [locale, prefix] of LOCALES) {
      out[locale] = {
        home: await probe(ctx, base + prefix + '/'),
        contact: await probe(ctx, base + prefix + '/contact'),
        services: await probe(ctx, base + prefix + '/services'),
        detail: await probe(ctx, base + catalog.getServiceCatalog(locale)[0].href),
      }
    }
    out.quote = await probe(ctx, base + '/quote')
  } finally { ctx.close() }
  return out
}

const results = []
const check = (name, ok, detail) => { results.push({ name, ok }); console.log(`${ok ? '  PASS' : '  FAIL'}  ${name}${detail ? ' — ' + detail : ''}`) }
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b)

console.log(`[menu-gate] after=${AFTER}${BEFORE ? `  before=${BEFORE}` : ''}`)
const after = await collect(AFTER)
const before = BEFORE ? await collect(BEFORE) : null

for (const [locale] of LOCALES) {
  console.log(`\n[${locale}]`)
  const a = after[locale]
  const exp = catalog.getServiceCatalogByCategory(locale)
  const expItems = exp.flatMap((g) => g.items)

  // 정본 대조 (절대 기준)
  const missing = expItems.filter((s) => !a.home.svcLinks.includes(s.href))
  check(`${locale} 메가메뉴 서비스 ${expItems.length}종 링크`, missing.length === 0,
    missing.length ? `누락: ${missing.slice(0, 3).map((m) => m.slug).join(',')}` : `${a.home.svcLinks.length}개`)
  const catMissing = exp.map((g) => g.category).filter((c) => !a.home.groupLabels.includes(c))
  check(`${locale} 메가메뉴 카테고리 ${exp.length}종`, catMissing.length === 0, catMissing.join(',') || '전부 렌더')
  check(`${locale} 메가메뉴 hover 열림/닫힘 + 패널 ${expItems.length}종`,
    a.home.megaBefore === 'false' && a.home.megaAfter === 'true' && a.home.megaClosed === 'false'
      && a.home.megaPanelLinks === expItems.length,
    `aria-expanded ${a.home.megaBefore}→${a.home.megaAfter}→${a.home.megaClosed}, 패널 링크 ${a.home.megaPanelLinks}개`)
  check(`${locale} 모바일 메뉴 열림(class 토글)`,
    !!a.home.mobAfter && a.home.mobAfter !== a.home.mobBefore && a.home.mobLinks === expItems.length,
    `패널 서비스 링크 ${a.home.mobLinks}개, class ${a.home.mobBefore === a.home.mobAfter ? '불변' : '토글됨'}`)
  check(`${locale} 언어전환 링크 4종`, a.home.langLinks.length === 4, JSON.stringify(a.home.langLinks))
  const expOpts = catalog.getServiceSelectOptions(locale)
  const optMissing = expOpts.filter((o) => !(a.contact.options || []).includes(o))
  check(`${locale} 상담폼 select ${expOpts.length}개`, optMissing.length === 0,
    optMissing.length ? `누락: ${optMissing.slice(0, 3).join(',')}` : `${a.contact.options?.length}개`)

  // 변경 전 라이브와의 동등성
  if (before) {
    const b = before[locale]
    check(`${locale} [동등성] 메뉴 링크·표기`, eq(a.home.svcLinks, b.home.svcLinks) && eq(a.home.svcTexts, b.home.svcTexts),
      eq(a.home.svcLinks, b.home.svcLinks) ? '' : `before ${b.home.svcLinks.length} / after ${a.home.svcLinks.length}`)
    check(`${locale} [동등성] 상담폼 선택지`, eq(a.contact.options, b.contact.options),
      eq(a.contact.options, b.contact.options) ? `${a.contact.options?.length}개 동일` : 'select 내용 달라짐')
    check(`${locale} [동등성] /services 목록`, eq(a.services.svcLinks, b.services.svcLinks),
      `${a.services.svcLinks.length} vs ${b.services.svcLinks.length}`)
    check(`${locale} [동등성] 상세 h1·본문량`, a.detail.h1 === b.detail.h1 && Math.abs(a.detail.bodyLen - b.detail.bodyLen) <= 40,
      `"${a.detail.h1}" ${b.detail.bodyLen}자→${a.detail.bodyLen}자`)
  }
}

console.log('\n[ko] /quote')
const expQuote = catalog.getServiceSelectOptions('ko')
// 1단계 서비스 버튼 + 2단계 업종 버튼이 같은 그리드라, 서비스 목록이 앞에서 순서대로 나오는지 본다.
const qBtns = after.quote.pickButtons || []
const qHead = qBtns.slice(0, expQuote.length)
check(`ko 견적폼 1단계 서비스 ${expQuote.length}개(순서 포함)`, eq(qHead, expQuote),
  eq(qHead, expQuote) ? `버튼 ${qBtns.length}개 중 앞 ${expQuote.length}개 일치` : `앞 3개: ${qHead.slice(0, 3).join(',')}`)
if (before) check('ko [동등성] 견적폼 선택 버튼', eq(qBtns, before.quote.pickButtons),
  eq(qBtns, before.quote.pickButtons) ? `${qBtns.length}개 동일` : `before ${before.quote.pickButtons?.length} / after ${qBtns.length}`)

const failed = results.filter((r) => !r.ok)
console.log(`\n[menu-gate] ${results.length}건 중 PASS ${results.length - failed.length} / FAIL ${failed.length}`)
if (failed.length) console.log('FAIL: ' + failed.map((f) => f.name).join(' | '))
process.exit(failed.length ? 1 : 0)
