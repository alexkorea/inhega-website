#!/usr/bin/env node
// 글꼴 서브셋 게이트(맥7 0948, 2026-10-04).
// 페이지 HTML 의 한글(음절·호환 자모) 중 Pretendard 에 있는데 그 페이지가 쓰는 서브셋
// unicode-range 밖인 글자가 1자라도 있으면 실패한다. 밖인 글자는 시스템 폰트로 그려져
// 한 줄 안에서 글꼴이 섞인다.
//   홈(/, /en, /zh, /ja) → 'Pretendard Critical'(09-24 critical+widget ∪ home-chars.txt) 커버리지
//   그 밖              → 'Pretendard Site'(site + ext) 커버리지
// 커버리지는 scripts/build-font-subset.py 가 쓴 scripts/fonts/coverage.json 을 읽는다.
//
//   node scripts/font-gate.mjs                   빌드 산출물(.next/server/app/**/*.html) 전건
//   node scripts/font-gate.mjs --base <url>      <url>/sitemap.xml 전 URL 을 받아 검사(프리뷰·라이브)
//   --fix-home  홈만 실패했으면 그 글자를 scripts/fonts/home-chars.txt 에 더하고 종료코드 2
//               (scripts/build.sh 가 서브셋을 다시 굽고 한 번 더 빌드한다)
// 검사 대상은 그려지는 텍스트다 — <script>(JSON-LD·RSC 페이로드)·<style>·주석은 뺀다.
// 속성(alt·aria-label·placeholder 등)은 그려질 수 있으므로 남긴다.
import { readFileSync, readdirSync, statSync, existsSync, appendFileSync } from 'node:fs'
import { join, relative } from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const cov = JSON.parse(readFileSync(join(ROOT, 'scripts/fonts/coverage.json'), 'utf8'))
const site = new Set(cov.site), home = new Set(cov.home), cmap = new Set(cov.cmap)
const HOME = new Set(['/', '/en', '/zh', '/ja'])
const isHangul = (c) => (c >= 0xac00 && c <= 0xd7a3) || (c >= 0x3131 && c <= 0x318e)

const visible = (html) => html
  .replace(/<script\b[\s\S]*?<\/script>/gi, '')
  .replace(/<style\b[\s\S]*?<\/style>/gi, '')
  .replace(/<!--[\s\S]*?-->/g, '')

function check(path, html) {
  const need = HOME.has(path) ? home : site
  const miss = new Set()
  for (const ch of visible(html)) {
    const c = ch.codePointAt(0)
    if (isHangul(c) && cmap.has(c) && !need.has(c)) miss.add(ch)
  }
  return miss
}

const pages = []
const argBase = process.argv.indexOf('--base')
if (argBase > 0) {
  const base = process.argv[argBase + 1].replace(/\/+$/, '')
  const xml = await (await fetch(base + '/sitemap.xml')).text()
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)
  const q = [...new Set(urls)]
  let i = 0
  await Promise.all(Array.from({ length: 8 }, async () => {
    while (i < q.length) {
      const p = q[i++]
      for (let t = 0; t < 3; t++) {
        try {
          const r = await fetch(base + p, { redirect: 'follow' })
          pages.push({ path: p.replace(/(.)\/+$/, '$1'), html: await r.text(), status: r.status }); break
        } catch (e) { if (t === 2) pages.push({ path: p, html: '', status: 'ERR ' + e.message }) }
      }
    }
  }))
} else {
  const dir = join(ROOT, '.next/server/app')
  if (!existsSync(dir)) { console.error('[font-gate] .next/server/app 없음 — next build 뒤에 돌릴 것'); process.exit(1) }
  const walk = (d) => readdirSync(d).flatMap((f) => {
    const p = join(d, f)
    return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : []
  })
  for (const f of walk(dir)) {
    let p = '/' + relative(dir, f).replace(/\.html$/, '')
    p = p === '/index' ? '/' : p.replace(/\/index$/, '')
    if (/^\/(_not-found|_global-error)/.test(p)) continue
    pages.push({ path: p, html: readFileSync(f, 'utf8'), status: 200 })
  }
}

let bad = 0, errs = 0, badOther = 0
const total = new Set(), homeMiss = new Set()
for (const { path, html, status } of pages.sort((a, b) => a.path.localeCompare(b.path))) {
  if (status !== 200) { errs++; console.error(`[font-gate] ${status} ${path}`); continue }
  const miss = check(path, html)
  if (miss.size) {
    bad++; miss.forEach((c) => total.add(c))
    if (HOME.has(path)) miss.forEach((c) => homeMiss.add(c)); else badOther++
    console.error(`[font-gate] FAIL ${path} 밖 ${miss.size}자: ${[...miss].join('')}`)
  }
}
console.log(`[font-gate] ${pages.length}쪽 검사, 서브셋 밖 한글 ${total.size}자(${bad}쪽), 응답오류 ${errs}`)
if (process.argv.includes('--fix-home') && homeMiss.size && !badOther && !errs) {
  appendFileSync(join(ROOT, 'scripts/fonts/home-chars.txt'),
    `# ${new Date().toISOString()} font-gate --fix-home\n${[...homeMiss].sort().join('')}\n`)
  console.error(`[font-gate] 홈 글자 ${homeMiss.size}자를 home-chars.txt 에 더했다 — 서브셋 재생성 후 재빌드 필요`)
  process.exit(2)
}
process.exit(bad || errs ? 1 : 0)
