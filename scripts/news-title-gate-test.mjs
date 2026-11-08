#!/usr/bin/env node
/**
 * 뉴스 제목 품질 게이트 시험 — `node scripts/news-title-gate-test.mjs [news.json]`
 * (QA1107-INHEGA #1) 고정 사례 + 라이브 /api/news 전체(정정 레이어 적용 후)에 게이트를 돌려
 * 몇 건이 보류 큐로 가는지 보여 준다. 고정 사례가 하나라도 틀리면 rc=1.
 *
 * `--warn`(INH-NEWS-TITLES 11-08): 기존 게시분 경고 모드 — 수신 시각과 무관하게 모든 게시 항목의
 * 목록 제목 + 기사 h1·meta_title 에 같은 규칙(소문자 조각·세미콜론·고유명사)을 돌려 WARN 으로 찍기만 한다.
 * 보류·404 처리는 하지 않는다(색인된 URL 보존). 라이브는 article=1 로 읽어 기사 제목까지 본다.
 */
import { build } from 'esbuild'
import { mkdtempSync, readFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const tmp = mkdtempSync(join(tmpdir(), 'news-title-'))
const out = join(tmp, 'gate.mjs')
await build({
  stdin: {
    contents: "export * from './lib/news-title-gate'\nexport { applyNewsCorrection, UNPUBLISHED_DOC_KEYS } from './lib/news-corrections'\n",
    resolveDir: ROOT, loader: 'ts',
  },
  outfile: out, bundle: true, format: 'esm', platform: 'node', logLevel: 'error',
  alias: { '@': ROOT },
})
const g = await import(pathToFileURL(out).href)

let fail = 0
const FR = 'https://www.federalregister.gov/documents/2026/11/02/2026-22337/unleashing-the-power-of-unlicensed-ultra-wideband-devices-petition-of-robert-bosch-llc-for-amendment'
const cases = [
  [{ title_ko: 'ula 밴드 기술의 발전에 따른 UWB 규칙 개정 공고', summary_ko: 'FCC는 …', url: FR }, true],
  [{ title_ko: '의료기기; 관절용 웨어러블 진동기기의 분류', summary_ko: 'FDA는 …', url: '' }, true],
  [{ title_ko: '미국 FCC, UWB 규칙 개정 제안', summary_ko: '연방통신위원회 …', url: FR }, true], // 보쉬 누락
  [{ title_ko: '미국 FCC, 초광대역(UWB) 규칙 개정 제안', summary_ko: '로버트 보쉬(Robert Bosch LLC) 청원', url: FR }, false],
  [{ title_ko: 'MRI 장비 기준 개정', summary_ko: '', url: '' }, false],
  [{ title_ko: '미국 CPSC, 차고문 자동개폐기 안전기준 개정', summary_ko: '', url: 'https://eping.wto.org/en/Search?documentSymbol=G%2FTBT' }, false],
]
for (const [it, want] of cases) {
  const got = g.hasTitleDefect(it)
  if (got !== want) { fail++; console.log('FAIL', it.title_ko, g.titleQualityReasons(it)) }
}
console.log(`고정 사례 ${cases.length - fail}/${cases.length}`)

const WARN = process.argv.includes('--warn')
const src = process.argv.slice(2).find((a) => !a.startsWith('--'))
const LIVE = WARN ? 'https://inhega.co.kr/api/news?limit=500&article=1' : 'https://inhega.co.kr/api/news?limit=500'
const raw = src ? JSON.parse(readFileSync(src, 'utf8')) : await (await fetch(LIVE)).json()
const items = (raw.items || raw).filter((it) => !g.UNPUBLISHED_DOC_KEYS.has(it.doc_key)).map((it) => g.applyNewsCorrection({ article: null, ...it }))
const flagged = items.map((it) => ({ it, r: g.titleQualityReasons(it), hold: g.hasTitleDefect(it) })).filter((x) => x.r.length)
const held = flagged.filter((x) => x.hold)
console.log(`대상 ${items.length}건 — 게시 보류(${g.TITLE_GATE_SINCE} 이후 수신) ${held.length}건, 게이트 이전 게시분 결함(승인 후보) ${flagged.length - held.length}건`)
for (const { it, r, hold } of flagged) console.log(`  ${hold ? 'HOLD' : 'CAND'} ${it.doc_key} ${it.published_date} | ${it.title_ko} | ${r.join(', ')}`)
if (WARN) {
  const warn = []
  for (const it of items) {
    const titles = [['title', it.title_ko], ['h1', it.article?.h1], ['meta_title', it.article?.meta_title]]
    for (const [k, t] of titles) {
      if (!t) continue
      const r = g.titleQualityReasons({ ...it, title_ko: t })
      if (r.length) warn.push(`  WARN ${it.doc_key} ${k} | ${t} | ${r.join(', ')}`)
    }
  }
  const withArticle = items.filter((it) => it.article).length
  console.log(`[경고 모드] 게시 ${items.length}건(기사 ${withArticle}건) 제목·h1·meta_title 검사 — 경고 ${warn.length}건 (보류·404 없음)`)
  for (const w of warn) console.log(w)
}
process.exit(fail ? 1 : 0)
