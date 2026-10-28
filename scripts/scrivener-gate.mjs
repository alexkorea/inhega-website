#!/usr/bin/env node
/**
 * TERM-UNIFY-1028(맥7 승인, 2026-10-28) — en 행정사 표기는 'Administrative Agent'(법 이름 'Certified Administrative Agents Act').
 * 'Scrivener' 계열 낱말 0건. 예외: slug(하이픈 결합 'administrative-scrivener-scope-and-limits' 등 — URL 불변), 'judicial scrivener'(법무사).
 *   node scripts/scrivener-gate.mjs          → 원천(app·components·lib·일일 은행 원고) 검사 (prebuild)
 *   node scripts/scrivener-gate.mjs <dir>... → 빌드 산출물 검사 (build.sh, next build 뒤)
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const RE = /(?<![-\w/])(?<!judicial )(?<!Judicial )scriveners?(?![-\w])/giu
export function scrivenerHits(text) {
  return [...text.matchAll(RE)].map((m) => text.slice(Math.max(0, m.index - 30), m.index + 20).replace(/\s+/g, ' '))
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)
if (isMain) {
  const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..')
  const dirs = process.argv.slice(2)
  const roots = dirs.length ? dirs.map((d) => path.resolve(d)) : ['app', 'components', 'lib', 'scripts/inhega-daily/bank'].map((d) => path.join(ROOT, d))
  const EXT = dirs.length ? /\.(html|rsc|json|js|txt|xml|body|meta)$/ : /\.(tsx?|mjs|js|json|mdx?)$/
  const SKIP = /node_modules|\.bak|\.orig$|\.map$/
  let files = 0
  const bad = []
  const visit = (p) => {
    if (SKIP.test(p)) return
    const st = fs.statSync(p, { throwIfNoEntry: false })
    if (!st) return
    if (st.isDirectory()) { for (const e of fs.readdirSync(p)) visit(path.join(p, e)); return }
    if (!EXT.test(p)) return
    files++
    for (const h of scrivenerHits(fs.readFileSync(p, 'utf8'))) bad.push(`${path.relative(ROOT, p)}  …${h}…`)
  }
  for (const r of roots) visit(r)
  if (bad.length) {
    console.error(`[scrivener-gate] ${dirs.length ? 'out' : 'src'} 'Scrivener' ${bad.length}건 — en 행정사는 'Administrative Agent'(법 이름 Certified Administrative Agents Act)로 고칠 것`)
    for (const b of bad.slice(0, 30)) console.error('  ✗ ' + b)
    process.exit(1)
  }
  console.log(`[scrivener-gate] ${dirs.length ? 'out' : 'src'} OK (파일 ${files}, 0건)`)
}
