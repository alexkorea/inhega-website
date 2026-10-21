#!/usr/bin/env node
/**
 * 인허가 뉴스 시행일 전수 감사 — `npm run news:date-gate [baseUrl]` (QA1020-FIX 1)
 *
 * 라이브 공개 목록(/api/news?article=1)의 법제처(kr_law_go_kr) 항목을 전부 law.go.kr
 * 원문 `<시행일자>` 와 대조한다. 판정은 수신단과 같은 lib/news-date-gate.ts 를 쓴다
 * (esbuild 로 번들해 import — 판정 로직을 두 벌 두지 않는다).
 * 불일치가 하나라도 있으면 exit 1. `--json <파일>` 이면 결과를 파일로도 남긴다.
 *
 * 공개 목록은 이미 게시 보류된 항목을 빼고 내보낸다 — 보류분까지 보려면 수신 토큰으로
 * `GET /api/news/ingest?raw=1&datecheck=1` 을 쓴다(워커에서 law.go.kr 을 다시 읽는다).
 */
import { build } from 'esbuild'
import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const args = process.argv.slice(2)
const jsonAt = args.indexOf('--json')
const jsonOut = jsonAt >= 0 ? args.splice(jsonAt, 2)[1] : ''
const BASE = (args[0] || 'https://inhega.co.kr').replace(/\/$/, '')

const tmp = mkdtempSync(join(tmpdir(), 'news-date-gate-'))
const out = join(tmp, 'gate.mjs')
await build({ entryPoints: [join(ROOT, 'lib', 'news-date-gate.ts')], outfile: out, bundle: true, format: 'esm', platform: 'node', logLevel: 'warning' })
const G = await import(pathToFileURL(out).href)

const res = await fetch(`${BASE}/api/news?article=1&limit=200`, { headers: { 'cache-control': 'no-cache' } })
if (!res.ok) {
  console.error(`목록 조회 실패 HTTP ${res.status}`)
  process.exit(2)
}
const { items } = await res.json()
const targets = items.filter((it) => it.source_key === 'kr_law_go_kr')

const results = []
for (const it of targets) {
  const url = G.lawXmlUrl(it.url)
  let law = null
  let error = ''
  try {
    const r = await fetch(url)
    if (!r.ok) throw new Error(`HTTP ${r.status}`)
    law = G.parseLawXml(await r.text())
    if (!law) error = '시행일자 없음'
  } catch (e) {
    error = String(e)
  }
  const reasons = law ? G.checkEffectiveDates(it, law) : []
  results.push({
    slug: it.slug,
    title: it.article?.h1 || it.title_ko,
    effective: law?.effective || '',
    promulgated: law?.promulgated || '',
    partial: law?.partial || [],
    error,
    reasons,
  })
  await new Promise((r) => setTimeout(r, 300))
}

let bad = 0
for (const r of results) {
  const fail = r.error || r.reasons.length
  if (fail) bad++
  console.log(`${fail ? 'FAIL' : 'PASS'}  /news/${r.slug}  시행 ${r.effective || '?'} (공포 ${r.promulgated || '?'}${r.partial.length ? `, 단서 ${r.partial.join('·')}` : ''})  ${r.title}`)
  if (r.error) console.log(`      원문 조회 실패: ${r.error}`)
  for (const why of r.reasons) console.log(`      - ${why}`)
}
console.log(`\n법제처 항목 ${results.length}건 · 불일치 ${bad}건 (공개 목록 ${items.length}건 중)`)
if (jsonOut) writeFileSync(jsonOut, JSON.stringify({ base: BASE, checked_at: new Date().toISOString(), results }, null, 1))
process.exit(bad ? 1 : 0)
