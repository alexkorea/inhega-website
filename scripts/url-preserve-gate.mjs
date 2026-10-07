#!/usr/bin/env node
/**
 * URL 보존 게이트 (SEO-FIX-1007, 맥7·보스 msg 2715).
 *
 * 2026-08-16~09-05 에 옛 소스로 만든 빌드가 프로덕션에 올라가 3주간
 *   - GSC 에 노출되던 URL 324개 중 274개가 404,
 *   - 전 페이지 canonical 이 www.inhega.co.kr,
 *   - 사이트맵 545 → 141
 * 상태로 서빙됐다. 기존 게이트(seo-gate·font-gate)는 "있는 페이지가 올바른가"만 봐서 통과했다.
 * 이 게이트는 "있던 URL 이 아직 있는가"를 본다.
 *
 * 검사 (next build 산출물 기준, 네트워크 없음):
 *   1. scripts/data/url-baseline.txt 의 모든 경로가 새 사이트맵에 있거나 redirects() 로 301/308 된다.
 *   2. 새 사이트맵의 모든 <loc> 가 https://inhega.co.kr (apex) 이다.
 * 통과하면 새 사이트맵에만 있는 경로를 베이스라인에 덧붙인다(자동 성장).
 * URL 을 의도적으로 없애려면 lib/blog-redirects.ts 에 301 을 넣는다 — 베이스라인에서 지우는 길은 없다.
 *
 * 사용: node scripts/url-preserve-gate.mjs [--no-update]
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://inhega.co.kr';
const BASE = join(ROOT, 'scripts/data/url-baseline.txt');
const SM = join(ROOT, '.next/server/app/sitemap.xml.body');
const RM = join(ROOT, '.next/routes-manifest.json');

const fail = (m) => { console.error(`[URL GATE] FAIL — ${m}`); process.exit(1); };
for (const f of [BASE, SM, RM]) if (!existsSync(f)) fail(`${f} 없음 (next build 후에 실행)`);

const locs = [...readFileSync(SM, 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].replace(/&amp;/g, '&'));
const badHost = locs.filter((u) => !(u === ORIGIN || u.startsWith(ORIGIN + '/')));
if (badHost.length) fail(`사이트맵 host 가 ${ORIGIN} 이 아닌 URL ${badHost.length}건 — 예: ${badHost.slice(0, 3).join(' ')}`);

const path = (u) => u.slice(ORIGIN.length) || '/';
const live = new Set(locs.map(path));
const redirects = JSON.parse(readFileSync(RM, 'utf8')).redirects
  .filter((r) => r.statusCode === 301 || r.statusCode === 308 || r.permanent)
  .map((r) => new RegExp(r.regex));

const baseline = readFileSync(BASE, 'utf8').split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
const missing = baseline.filter((p) => !live.has(p) && !redirects.some((re) => re.test(p)));

console.log(`[URL GATE] 베이스라인 ${baseline.length} · 새 사이트맵 ${live.size} · 영구 리다이렉트 ${redirects.length}`);
if (missing.length) {
  console.error(missing.slice(0, 40).map((p) => `  사라짐: ${p}`).join('\n'));
  fail(`베이스라인 URL ${missing.length}건이 새 빌드에서 사이트맵에도 없고 301 도 없다 (404 예정). ` +
       `의도한 삭제면 lib/blog-redirects.ts 에 같은 주제 페이지로 301 을 넣을 것.`);
}

if (!process.argv.includes('--no-update')) {
  const known = new Set(baseline);
  const added = [...live].filter((p) => !known.has(p)).sort();
  if (added.length) {
    writeFileSync(BASE, readFileSync(BASE, 'utf8').replace(/\n*$/, '\n') + added.join('\n') + '\n');
    console.log(`[URL GATE] 베이스라인에 새 URL ${added.length}건 추가`);
  }
}
console.log('[URL GATE] PASS');
