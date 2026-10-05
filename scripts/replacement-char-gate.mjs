/**
 * 깨진 문자 게이트 — 소스에 U+FFFD가 있으면 빌드 중단(prebuild).
 * 2026-09-06 이모지 제거 때 4바이트 이모지가 반쯤 잘려 블로그 사이드바 3줄 앞에 깨진 문자가 한 달 가까이 떠 있었다.
 *   node scripts/replacement-char-gate.mjs
 */
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const DIRS = ['app', 'components', 'lib', 'content', 'messages']
const EXT = /\.(tsx?|mjs|json|mdx?|css)$/
const hits = []
function walk(d) {
  let names
  try { names = readdirSync(d) } catch { return }
  for (const n of names) {
    const p = join(d, n)
    if (statSync(p).isDirectory()) { if (n !== 'node_modules') walk(p); continue }
    if (!EXT.test(n)) continue
    readFileSync(p, 'utf8').split('\n').forEach((l, i) => { if (l.includes('�')) hits.push(`${p.slice(ROOT.length + 1)}:${i + 1}`) })
  }
}
for (const d of DIRS) walk(join(ROOT, d))
if (hits.length) {
  console.error(`[replacement-char-gate] FAIL — U+FFFD ${hits.length}곳`)
  for (const h of hits) console.error('  - ' + h)
  process.exit(1)
}
console.log('[replacement-char-gate] PASS — U+FFFD 0')
