#!/usr/bin/env node
// NOFREE 게이트 (INHEGA-EN-BRAND 2, 맥7 2026-10-28 승인 — vk·f6·f4 와 같은 원칙) — 전 로캘 "무료/free/免费/無料" 표현 영구 금지.
//   node scripts/nofree-gate.mjs            원천: app · components · lib · content/industry-pages · 일일 은행 원고 · public/llms.txt (prebuild)
//   node scripts/nofree-gate.mjs <dir>...   빌드 산출물: .html · .rsc · .meta · .body · .json · .xml · .txt 전부(build.sh, .next/server/app)
// 패턴은 f6visa·f4visa scripts/nofree-gate.mjs 와 같다. 상담 CTA 는 "상담 신청 / Request a Consultation / 申请咨询 / ご相談を申し込む" 꼴.
// 제3자 사실(관청 수수료 없음·공공 교육 수강료 없음 등)은 '무료' 대신 "수수료 없음"·"수강료 없는"·"no fee" 처럼 사실 그대로 쓴다.
// content/blog/*.md 는 빌드가 읽지 않는 아카이브라 검사하지 않는다(scripts/inhega-daily/run.mjs 주석 참조).
import fs from 'node:fs'; import path from 'node:path'; import { fileURLToPath } from 'node:url';

export const NOFREE_RE = /무료|무상\s*(?:상담|검토)|(?<![A-Za-z])free(?:ly)?(?![A-Za-z])|miễn phí|không mất phí|ฟรี|ไม่มีค่าใช้จ่าย(?!แอบแฝง)|бесплатн|免费|免費|無料/giu;

export function scanText(text) {
  const out = [];
  for (const m of text.matchAll(NOFREE_RE)) out.push({ word: m[0], ctx: text.slice(Math.max(0, m.index - 30), m.index + m[0].length + 30).replace(/\s+/g, ' ') });
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
  for (const h of hits.slice(0, 40)) console.log(`  ✗ [NOFREE "${h.word}"] ${h.where}\n      …${h.ctx}…`);
  console.log(`[nofree] ${dirs.length ? 'build ' + dirs.join(',') : 'source'} hits=${hits.length}`);
  process.exit(hits.length ? 1 : 0);
}
