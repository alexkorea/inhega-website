/**
 * Cloudflare Pages(direct upload) 배포용 번들 조립 스크립트 — inhega-pages.
 *
 * `opennextjs-cloudflare build` 는 워커를 .open-next/worker.js 에 두고
 * .open-next/assets 는 정적자산만 남긴다. Pages 는 assets/_worker.js 규약을 쓰므로
 * 이 조립 단계를 건너뛰고 assets 를 그대로 올리면 전 라우트가 404 가 된다.
 *
 * 사용: node scripts/build-pages-bundle.mjs   (opennextjs-cloudflare build 이후)
 * 배포: cd .open-next/assets && wrangler pages deploy . --project-name=inhega-pages --branch=main
 *       배포 직후 반드시: bash /Users/mac4/scripts/deploy-done-auto.sh inhega
 *       (배포 완료 기준 = n8n 독립검증 PASS. 봇 자기보고는 완료가 아니다. 맥7 20260922-1425)
 *
 * _routes.json 은 public/_routes.json 이 그대로 복사되므로 여기서 건드리지 않는다.
 */
import fs from 'node:fs'
import path from 'node:path'

// ── CH-01: HTML 문서에 장기 s-maxage 가 실려 나가는 것을 차단한다 ──────────────
// Next 는 프리렌더된 페이지 응답에 `Cache-Control: s-maxage=31536000`(1년) 을 붙인다.
// Pages 의 `_headers` 는 정적자산에만 적용되고 `_worker.js` 응답에는 적용되지 않으므로
// 워커 출구에서 직접 덮어쓴다. 정적자산은 `_routes.json` exclude 로 워커를 아예
// 거치지 않으므로 장기 immutable 캐시는 그대로 유지된다.
// ISR 의 짧은 s-maxage(예: s-maxage=2)는 의도된 값이라 건드리지 않는다.
// ── /news(인허가 뉴스) 예외 ───────────────────────────────────────────────────
// /news 는 KV 를 요청 시 읽는 force-dynamic 라우트라 Next 가 `no-store` 를 붙인다.
// 재배포 없이 갱신되되 공유 캐시 신선도는 10분 이내여야 한다는 요건(맥7 20260922-1845)
// 이라 워커 출구에서 s-maxage=600 을 명시한다. 브라우저 캐시는 표준대로 must-revalidate.
// ── GSC-B1(2026-09-21): www → apex 301 ────────────────────────────────────────
// www.inhega.co.kr 이 본문을 200 으로 그대로 서빙하고 canonical 만 apex 를 가리켜
// GSC 가 "구글이 다른 canonical 선택"/"리다이렉트 페이지" 로 잡았다.
// 계정 토큰에 Zone 권한이 없어 존 Redirect Rule 을 만들 수 없으므로 워커 입구에서 301 한다.
// 경로·쿼리는 보존한다. (정적자산은 _routes.json exclude 라 워커를 타지 않는다 — 색인 대상 아님)
//
// ── 0951: <head> 의 폰트·이미지 preload 를 Link 헤더로도 낸다(103 Early Hints) ──────
// Pages 는 HTML 응답의 Link: rel=preload 를 캐시해 다음 요청부터 103 으로 먼저 보낸다.
// 임계 서브셋 폰트가 HTML 도착 전에 출발해 첫 페인트가 JS 실행보다 앞선다(모바일 LCP).
// 값은 응답 HTML 의 <head> 에서 그대로 뽑으므로 폰트 파일명이 바뀌어도 낡지 않는다.
// script preload 는 넣지 않는다 — JS 가 페인트 전에 끝나면 LCP 가 오히려 늦어진다.
// ── 0951b: Next async 청크 실행을 관측 LCP 페인트 뒤로 ──────────────────────────────
// PSI(구글 서버)에서는 JS 가 첫 페인트 전에 내려와 실행돼 Lantern LCP 그래프에 실린다.
// 워커 출구에서 HTMLRewriter 로 <script src=/_next/static/..js async> 를 preload(low)로 바꾸고
// 본문 끝 로더가 FCP·히어로 LCP 페인트 뒤에 다시 넣는다(scripts/defer-next-js.worker.js).
const WORKER_WRAPPER = `import opennextWorker from "./_worker-opennext.js";
export { DOQueueHandler, DOShardedTagCache, BucketCachePurge } from "./_worker-opennext.js";
import { deferNextScripts } from "./_defer-next-js.js";

const APEX_HOST = "inhega.co.kr";

const HTML_CACHE_CONTROL = "public, max-age=0, must-revalidate";
const NEWS_CACHE_CONTROL = "public, max-age=0, must-revalidate, s-maxage=600";
const NEWS_PATH = /^[/](?:(?:en|zh|ja)[/])?news(?:[/]|$)/;
const LONG_S_MAXAGE_SECONDS = 60;
const BODYLESS_STATUS = new Set([101, 204, 205, 304]);
const HEAD_PEEK_LIMIT = 65536;

function preloadLinks(head) {
  const out = [];
  const attr = (tag, name) => {
    const m = new RegExp("\\\\b" + name + '="([^"]*)"', "i").exec(tag);
    return m ? m[1].replace(/&amp;/g, "&") : "";
  };
  for (const tag of head.match(/<link\\b[^>]*>/gi) || []) {
    if (attr(tag, "rel") !== "preload") continue;
    const as = attr(tag, "as");
    if (as !== "font" && as !== "image") continue;
    const srcset = attr(tag, "imagesrcset");
    const href = attr(tag, "href") || srcset.trim().split(/\\s+/)[0] || "";
    if (!href.startsWith("/") || href.startsWith("//") || /[<>"\\s]/.test(href)) continue;
    if (/[<>"]/.test(srcset)) continue;
    let v = "<" + href + ">; rel=preload; as=" + as;
    if (as === "font") v += "; type=font/woff2; crossorigin";
    if (srcset) v += '; imagesrcset="' + srcset + '"; imagesizes="' + (attr(tag, "imagesizes") || "100vw") + '"';
    const fp = attr(tag, "fetchpriority");
    if (fp) v += "; fetchpriority=" + fp;
    if (!out.some((x) => x.startsWith("<" + href + ">"))) out.push(v);
  }
  return out;
}

async function withEarlyHints(response) {
  if (response.status !== 200 || !response.body) return response;
  const reader = response.body.getReader();
  const decoder = new TextDecoder();
  const chunks = [];
  let text = "";
  while (text.length < HEAD_PEEK_LIMIT) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    text += decoder.decode(value, { stream: true });
    if (text.includes("</head>")) break;
  }
  const body = new ReadableStream({
    start(controller) { for (const c of chunks) controller.enqueue(c); },
    async pull(controller) {
      const { done, value } = await reader.read();
      if (done) controller.close(); else controller.enqueue(value);
    },
    cancel(reason) { return reader.cancel(reason); },
  });
  const patched = new Response(body, response);
  const existing = patched.headers.get("link") || "";
  const add = preloadLinks(text.split("</head>")[0]).filter((v) => !existing.includes(v.slice(0, v.indexOf(">") + 1)));
  if (add.length) patched.headers.set("link", (existing ? existing + ", " : "") + add.join(", "));
  return patched;
}


export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.hostname === "www." + APEX_HOST) {
      url.hostname = APEX_HOST;
      return Response.redirect(url.toString(), 301);
    }
    let response = await opennextWorker.fetch(request, env, ctx);
    if (!(response.headers.get("content-type") || "").includes("text/html")) return response;
    if (BODYLESS_STATUS.has(response.status)) return response;
    if (request.method === "GET") response = await withEarlyHints(response);
    if (request.method === "GET" && response.status === 200) response = deferNextScripts(response);
    if (response.status === 200 && NEWS_PATH.test(url.pathname)) {
      const news = new Response(response.body, response);
      news.headers.set("cache-control", NEWS_CACHE_CONTROL);
      return news;
    }
    const match = /s-maxage=(\\d+)/i.exec(response.headers.get("cache-control") || "");
    if (!match || Number(match[1]) <= LONG_S_MAXAGE_SECONDS) return response;
    const patched = new Response(response.body, response);
    patched.headers.set("cache-control", HTML_CACHE_CONTROL);
    return patched;
  },
};
`

const ROOT = process.cwd()
const OUT = path.join(ROOT, '.open-next')
const ASSETS = path.join(OUT, 'assets')

if (!fs.existsSync(path.join(OUT, 'worker.js'))) {
  console.error('.open-next/worker.js 없음 — 먼저 `npx opennextjs-cloudflare build` 실행')
  process.exit(1)
}

fs.copyFileSync(path.join(OUT, 'worker.js'), path.join(ASSETS, '_worker-opennext.js'))
fs.writeFileSync(path.join(ASSETS, '_worker.js'), WORKER_WRAPPER)
// 0951b: Next 청크 실행을 관측 LCP 페인트 뒤로 미루는 모듈(래퍼가 import). 원본은 scripts/defer-next-js.worker.js
fs.copyFileSync(path.join(process.cwd(), 'scripts', 'defer-next-js.worker.js'), path.join(ASSETS, '_defer-next-js.js'))

for (const dir of ['cloudflare', 'middleware', 'server-functions', '.build']) {
  const src = path.join(OUT, dir)
  if (!fs.existsSync(src)) continue
  fs.rmSync(path.join(ASSETS, dir), { recursive: true, force: true })
  fs.cpSync(src, path.join(ASSETS, dir), { recursive: true })
}

const cacheRoot = path.join(OUT, 'cache')
if (fs.existsSync(cacheRoot)) {
  const dest = path.join(ASSETS, 'cdn-cgi', '_next_cache')
  fs.rmSync(dest, { recursive: true, force: true })
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(cacheRoot)) {
    fs.cpSync(path.join(cacheRoot, entry), path.join(dest, entry), { recursive: true })
  }
}

if (!fs.existsSync(path.join(ASSETS, '_routes.json'))) {
  console.error('assets/_routes.json 없음 — public/_routes.json 확인 필요')
  process.exit(1)
}

// ── C6 금지어 게이트 (2026-10-03 맥7 C6, 보스 msg 1698) ─────────────────────────
// 조립된 배포물 전체(HTML·RSC .txt·JSON·JS·xml·_worker.js·server-functions)에서 법조 직역
// 명칭이 1건이라도 나오면 조립 실패 → 배포 중단. 'power of attorney' 만 예외.
// 원고(blog-posts-data·blog-i18n·services-data·industry-pages·bank)·일일블로그 어느 경로로
// 재유입돼도 여기서 막힌다. 수동 배포와 19:00 자동화가 모두 이 스크립트를 거친다.
{
  const { c6Hits } = await import('./lib/c6-banned.mjs')
  const BIN = /\.(png|jpe?g|webp|avif|gif|ico|woff2?|ttf|otf|eot|pdf|wasm|br|gz|zip|mp4|webm)$/i
  const hits = []
  let scanned = 0
  const walkC6 = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name)
      if (e.isDirectory()) { walkC6(p); continue }
      if (BIN.test(e.name)) continue
      scanned++
      const h = c6Hits(fs.readFileSync(p, 'utf8'))
      if (h.length) hits.push({ file: path.relative(ASSETS, p), n: h.length, first: h[0] })
    }
  }
  walkC6(ASSETS)
  if (hits.length) {
    console.error(`C6 금지어 게이트 FAIL — ${hits.length}개 파일 ${hits.reduce((a, b) => a + b.n, 0)}건 (배포 중단)`)
    for (const h of hits.slice(0, 20)) console.error(`  ${h.n}  ${h.file}  …${h.first.context}…`)
    process.exit(1)
  }
  console.log(`C6 금지어 게이트 PASS — ${scanned}개 파일 0건`)
}

// ── 풋터 사업자번호 게이트 (2026-10-03 맥7 지시, 보스 msg 1677) ─────────────────
// 방금 빌드한 .next 를 로컬 next start 로 띄워 홈 + 사이트맵 표본 30쪽의 <footer> 에
// 사업자등록번호(정본 NAS brand_registry.json)가 없으면 조립 실패 → 배포 중단.
// 수동 배포와 19:00 자동화(daily-blog-4am.mjs cfBuildAndDeploy)가 모두 이 스크립트를 거친다.
{
  const { spawnSync } = await import('node:child_process')
  spawnSync('/bin/sh', ['-c', 'lsof -b -w -ti tcp:4396 | xargs kill 2>/dev/null'])
  const g = spawnSync(process.execPath, ['/Users/mac4/scripts/bizno-footer-gate.mjs', 'inhega',
    '--start', 'npx next start -p 4396', '--url', 'http://127.0.0.1:4396', '--sample', '30'], { cwd: ROOT, stdio: 'inherit' })
  if (g.status !== 0) {
    console.error('풋터 사업자번호 게이트 FAIL — 배포 중단')
    process.exit(1)
  }
}

console.log('Pages 번들 준비 완료 → .open-next/assets (_worker.js + cloudflare/middleware/server-functions + cdn-cgi/_next_cache)')
