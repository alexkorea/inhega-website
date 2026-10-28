#!/usr/bin/env node
// 상호 영문 표기 게이트 (INHEGA-EN-NAME, 보스 msg 4270 확정 2026-10-28) — 영문 상호는 'YouSun Administrative Agency' 하나.
//   등록부: NAS team-relay/brand_registry.md 브랜드 D · content-guard/brand_registry.json brands.D.name_en (중·일문도 영어 그대로)
//   node scripts/brandname-gate.mjs            원천: app · components · lib · content/industry-pages · 일일 은행 원고 · public/llms.txt (prebuild)
//   node scripts/brandname-gate.mjs <dir>...   빌드 산출물: .html · .rsc · .meta · .body · .json · .xml · .txt 전부(build.sh, .next/server/app)
// 걸리는 꼴: 유선의 로마자(Yuseon·YuSun·Yusun·Yoosun·Yu-sun·YouSun …) 뒤에 Administrative·Admin·Office·Agency·Agent·Attorney·Law·Legal 이 오는데
//   정확히 'YouSun Administrative Agency' 가 아닌 것, 'YouSun Administrative Agency Office' 처럼 덧붙인 것, 그리고 'Administrative Attorney'(폐기 표기).
// 대표 영문 이름(Jung Yu-sun · Jeong Yuseon)은 이 게이트 범위가 아니다 — 뒤에 위 낱말이 오지 않으면 걸리지 않는다.
// content/blog/*.md 는 빌드가 읽지 않는 아카이브라 검사하지 않는다.
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';

export const BRAND_EN = 'YouSun Administrative Agency';
const NAME_RE = /(?<![A-Za-z])(?:Yu|You|Yoo)[- ]?s(?:e?o|u)n\s+(?:Administrative|Admin|Office|Agency|Agent|Attorney|Law|Legal)(?:\s+(?:Agency|Agent|Office|Attorney))*(?![A-Za-z])/giu;
const ATTORNEY_RE = /Administrative\s+Attorney/giu;

export function scanText(text) {
  const out = [];
  const ctx = (i, n) => text.slice(Math.max(0, i - 30), i + n + 30).replace(/\s+/g, ' ');
  for (const m of text.matchAll(NAME_RE)) if (m[0] !== BRAND_EN) out.push({ word: m[0], ctx: ctx(m.index, m[0].length) });
  for (const m of text.matchAll(ATTORNEY_RE)) out.push({ word: m[0], ctx: ctx(m.index, m[0].length) });
  return out;
}

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const hits = [];
  const add = (where, text) => { for (const h of scanText(text)) hits.push({ where, ...h }); };
  const SKIP = /node_modules|\.bak|\.orig$|\.map$/;
  const walk = (d, re, cb) => { if (!fs.existsSync(d)) return; for (const e of fs.readdirSync(d, { withFileTypes: true })) { const p = path.join(d, e.name); if (SKIP.test(p)) continue; if (e.isDirectory()) walk(p, re, cb); else if (re.test(e.name)) cb(p); } };
  const dirs = process.argv.slice(2);
  if (dirs.length) {
    for (const d of dirs) walk(path.resolve(d), /\.(html|rsc|meta|body|json|xml|txt)$/, (p) => add(path.relative(ROOT, p), fs.readFileSync(p, 'utf8')));
  } else {
    const llms = path.join(ROOT, 'public', 'llms.txt');
    if (fs.existsSync(llms)) add('public/llms.txt', fs.readFileSync(llms, 'utf8'));
    for (const d of ['app', 'components', 'lib', 'content/industry-pages', 'scripts/inhega-daily/bank']) walk(path.join(ROOT, d), /\.(tsx?|mjs|js|json|mdx?)$/, (p) => add(path.relative(ROOT, p), fs.readFileSync(p, 'utf8')));
  }
  for (const h of hits.slice(0, 40)) console.log(`  ✗ [BRAND-EN "${h.word}" → "${BRAND_EN}"] ${h.where}\n      …${h.ctx}…`);
  console.log(`[brandname] ${dirs.length ? 'build ' + dirs.join(',') : 'source'} hits=${hits.length}`);
  process.exit(hits.length ? 1 : 0);
}
