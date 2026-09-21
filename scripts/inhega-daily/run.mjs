#!/usr/bin/env node
// inhega-daily/run.mjs — inhega.co.kr 일일 블로그 1건(ko/en/zh/ja 4언어) 발행.
//
// 사용:
//   node scripts/inhega-daily/run.mjs                 # 드라이런(선택 결과 + 게이트만 출력)
//   node scripts/inhega-daily/run.mjs --write         # 실제 반영
//   node scripts/inhega-daily/run.mjs --write --slug=<slug>   # 특정 글 강제
//   node scripts/inhega-daily/run.mjs --list          # 원고 은행 현황
//
// 왜 이 구조인가 (2026-09-21, 맥7 지시 3):
//   종전 daily-blog-4am.mjs 는 하드코딩 3주제 + `-YYYYMM` 슬러그였다. 매월 2회차부터는
//   슬러그가 이미 존재해 무조건 skip → "0개 신규"로 조용히 정체했다.
//   여기서는 ① 보스 확정 18주제 풀(pool.mjs) 안에서 ② 주제별 최근사용일이 가장 오래된
//   주제를 먼저 ③ 그 주제의 아직 안 쓴 세부주제(angle) 원고를 골라 ④ 슬러그·제목 전수
//   중복검사와 발행게이트를 통과한 것만 발행한다. 슬러그에는 날짜·회차 숫자를 넣지 않고
//   세부주제 낱말을 넣는다(지침서 X1 / 제4장).
//
//   원고(4언어 본문)는 이 스크립트가 생성하지 않는다. bank/*.mjs 에 사람이 작성해
//   넣어 둔 원고를 발행하는 구조다 — YMYL(인허가) 영역에서 템플릿으로 수치를 찍어내면
//   허위정보가 된다(지침서 철칙3). 은행이 비면 조용히 통과하지 않고 exit 2 로 실패시켜
//   "무엇을 써야 하는지"를 로테이션 순서대로 알려준다(철칙2: 미발행을 발행 보고 금지).

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { POOL, ANGLES, topicOfSlug, topicByKey } from './pool.mjs'
import { gateArticle, printGate } from './gates.mjs'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(HERE, '..', '..')
const KO_FILE = path.join(ROOT, 'lib', 'blog-posts-data.ts')
const I18N_FILE = path.join(ROOT, 'lib', 'i18n', 'blog-i18n.ts')
const ARCHIVE_DIR = path.join(ROOT, 'content', 'blog')
const REDIRECTS_FILE = path.join(ROOT, 'lib', 'blog-redirects.ts')
const BANK_DIR = path.join(HERE, 'bank')
const STATE_FILE = path.join(HERE, 'state.json')
const LEDGER = path.join(ROOT, 'blog-log', 'inhega-daily.csv')

const argv = process.argv.slice(2)
const WRITE = argv.includes('--write')
const LIST = argv.includes('--list')
const arg = (n) => (argv.find((a) => a.startsWith(`--${n}=`)) || '').split('=')[1] || ''
const TODAY = arg('date') || new Date().toLocaleDateString('en-CA', { timeZone: 'Asia/Seoul' })
const FORCED = arg('slug')

const esc = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'")
const normTitle = (s) => (s || '').replace(/\s+/g, '').replace(/[·•\-–—:,."'()「」『』]/g, '').toLowerCase()

// ── 라이브 현황 수집 ─────────────────────────────────────────────────────────
function readContext() {
  const ko = fs.readFileSync(KO_FILE, 'utf8')
  const i18n = fs.readFileSync(I18N_FILE, 'utf8')

  const koSlugs = new Set()
  const koTitles = new Map()
  const koDates = new Map()
  for (const block of ko.split(/\n  \{\n/).slice(1)) {
    const slug = (block.match(/\n?\s*slug: '([^']+)'/) || [])[1]
    if (!slug) continue
    const title = (block.match(/\n\s*title: '((?:[^'\\]|\\.)*)'/) || [])[1] || ''
    const date = (block.match(/created_at: '([0-9]{4}-[0-9]{2}-[0-9]{2})/) || [])[1] || '0000-00-00'
    koSlugs.add(slug)
    if (title) koTitles.set(normTitle(title.replace(/\\'/g, "'")), slug)
    koDates.set(slug, date)
  }

  const i18nSlugs = new Set()
  const i18nTitles = { en: new Map(), zh: new Map(), ja: new Map() }
  for (const block of i18n.split(/\n  \{\n/).slice(1)) {
    const slug = (block.match(/\s*slug: '([^']+)'/) || [])[1]
    const locale = (block.match(/locale: '(en|zh|ja)'/) || [])[1]
    const title = (block.match(/\n\s*title: '((?:[^'\\]|\\.)*)'/) || [])[1] || ''
    if (!slug || !locale) continue
    i18nSlugs.add(slug)
    if (title) i18nTitles[locale].set(normTitle(title.replace(/\\'/g, "'")), slug)
  }

  const archiveSlugs = new Set(
    fs.existsSync(ARCHIVE_DIR) ? fs.readdirSync(ARCHIVE_DIR).map((f) => f.replace(/\.(md|mdx)$/, '')) : []
  )

  const redirectedSlugs = new Set()
  if (fs.existsSync(REDIRECTS_FILE)) {
    const r = fs.readFileSync(REDIRECTS_FILE, 'utf8')
    for (const m of r.matchAll(/'([a-z0-9-]{4,})'/g)) redirectedSlugs.add(m[1])
  }

  const maxId = Math.max(0, ...[...ko.matchAll(/\n    id: '(\d+)'/g)].map((m) => Number(m[1])))
  return { koSlugs, koTitles, koDates, i18nSlugs, i18nTitles, archiveSlugs, redirectedSlugs, maxId }
}

const readState = () => {
  try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')) } catch { return { history: [] } }
}

async function loadBank() {
  if (!fs.existsSync(BANK_DIR)) return []
  const out = []
  for (const f of fs.readdirSync(BANK_DIR).filter((f) => f.endsWith('.mjs')).sort()) {
    const mod = await import(path.join(BANK_DIR, f))
    const entry = mod.default || mod.article
    if (!entry) { console.error(`bank/${f}: default export 없음 — 건너뜀`); continue }
    out.push({ ...entry, _file: f })
  }
  return out
}

// ── 로테이션: 주제별 최근사용일이 가장 오래된 주제부터 ────────────────────────
// 최근사용일 = 라이브 KO 글(created_at) 과 발행이력 중 최신값. 한 번도 안 쓴 주제가 최우선.
function rankTopics(ctx, state) {
  const lastUsed = new Map(POOL.map((t) => [t.key, '0000-00-00']))
  for (const [slug, date] of ctx.koDates) {
    const t = topicOfSlug(slug)
    if (t && date > lastUsed.get(t.key)) lastUsed.set(t.key, date)
  }
  for (const h of state.history) {
    const t = topicByKey(h.topic)
    if (t && h.date > lastUsed.get(t.key)) lastUsed.set(t.key, h.date)
  }
  return POOL.map((t) => ({ topic: t, lastUsed: lastUsed.get(t.key) }))
    .sort((a, b) => a.lastUsed.localeCompare(b.lastUsed) || a.topic.key.localeCompare(b.topic.key))
}

function usedAngles(ctx, state, topicKey) {
  const used = new Set(state.history.filter((h) => h.topic === topicKey).map((h) => h.angle))
  return used
}

function main() {
  const ctx = readContext()
  const state = readState()

  return loadBank().then((bank) => {
    if (LIST) {
      console.log(`원고 은행 ${bank.length}건`)
      for (const e of bank) console.log(`  ${ctx.koSlugs.has(e.slug) ? '발행됨' : '대기  '} ${e.topic}/${e.angle} ${e.slug} (${e._file})`)
      return 0
    }

    // 멱등: 같은 날 이미 발행했으면 재발행하지 않는다.
    const todayDone = state.history.find((h) => h.date === TODAY)
    if (todayDone && !FORCED) {
      console.log(`이미 오늘(${TODAY}) 발행됨: ${todayDone.slug} — no-op`)
      console.log(`✅ published ${todayDone.slug}`)
      return 0
    }

    const pending = bank.filter((e) => !ctx.koSlugs.has(e.slug) && !state.history.some((h) => h.slug === e.slug))
    let picked = null
    if (FORCED) {
      picked = bank.find((e) => e.slug === FORCED)
      if (!picked) { console.error(`--slug=${FORCED} 원고를 은행에서 찾지 못했습니다`); return 3 }
    } else {
      for (const { topic } of rankTopics(ctx, state)) {
        const used = usedAngles(ctx, state, topic.key)
        const cands = pending.filter((e) => e.topic === topic.key && !used.has(e.angle))
        if (cands.length) {
          const order = ANGLES.map((a) => a.key)
          cands.sort((a, b) => order.indexOf(a.angle) - order.indexOf(b.angle))
          picked = cands[0]
          break
        }
      }
    }

    if (!picked) {
      console.error('✗ 발행 가능한 원고가 없습니다 (원고 은행 고갈).')
      console.error('  다음에 작성해야 할 주제·세부주제 (로테이션 순서):')
      const ranked = rankTopics(ctx, state)
      for (const { topic, lastUsed } of ranked.slice(0, 5)) {
        const used = usedAngles(ctx, state, topic.key)
        const next = ANGLES.find((a) => !used.has(a.key))
        console.error(`   - ${topic.kw} (${topic.key}) — 최근사용 ${lastUsed} — 세부주제: ${next ? next.ko + ' / ' + next.key : '전체 소진'}`)
      }
      console.error('  원고 작성 위치: scripts/inhega-daily/bank/<slug>.mjs (지침서 제10장 STEP1~4)')
      return 2
    }

    const gate = gateArticle(picked, ctx)
    printGate(gate, `${picked.topic}/${picked.angle} → ${picked.slug}`)
    if (!gate.pass) {
      console.error('✗ 게이트 FAIL — 발행하지 않습니다(철칙1: SEO 자산 깎느니 미발행).')
      return 3
    }
    if (!WRITE) {
      console.log(`\n(드라이런) 발행 대상: ${picked.slug} — 실제 반영은 --write`)
      return 0
    }

    writeKo(picked, ctx)
    writeI18n(picked)
    writeArchive(picked)
    appendLedger(picked, gate)
    state.history.push({ date: TODAY, topic: picked.topic, angle: picked.angle, slug: picked.slug })
    fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2) + '\n', 'utf8')
    console.log(`✅ published ${picked.slug}`)
    return 0
  })
}

// ── 파일 반영 ────────────────────────────────────────────────────────────────
function writeKo(e, ctx) {
  const data = fs.readFileSync(KO_FILE, 'utf8')
  const MARKER = '\n]\n\nexport function getBlogPostBySlug'
  const idx = data.indexOf(MARKER)
  if (idx === -1) throw new Error('blog-posts-data.ts 배열 종료 마커를 찾지 못했습니다')
  const id = String(ctx.maxId + 1)
  const rs = (e.relatedServices || []).map((s) => `      { title: '${esc(s.title)}', href: '${esc(s.href)}' },`).join('\n')
  const entry = [
    '  {',
    `    id: '${id}',`,
    `    slug: '${e.slug}',`,
    '    relatedServices: [',
    rs,
    '    ],',
    `    title: '${esc(e.ko.title)}',`,
    `    category: '${esc(e.ko.category)}',`,
    `    excerpt: '${esc(e.ko.excerpt)}',`,
    `    meta_title: '${esc(e.ko.metaTitle)}',`,
    `    meta_description: '${esc(e.ko.metaDescription)}',`,
    `    cover_image: '${esc(e.coverImage)}',`,
    `    created_at: '${TODAY}T00:00:00Z',`,
    `    content: \`${e.ko.content}\``,
    '  }',
  ].join('\n')
  fs.writeFileSync(KO_FILE, data.slice(0, idx) + ',\n' + entry + data.slice(idx), 'utf8')
  console.log(`  ✓ lib/blog-posts-data.ts += ${e.slug} (id ${id})`)
}

function writeI18n(e) {
  const data = fs.readFileSync(I18N_FILE, 'utf8')
  const MARKER = '\n]\n\nexport function getBlogI18n'
  const idx = data.indexOf(MARKER)
  if (idx === -1) throw new Error('blog-i18n.ts 배열 종료 마커를 찾지 못했습니다')
  const blocks = ['en', 'zh', 'ja'].map((loc) => {
    const a = e[loc]
    return [
      '  {',
      `    slug: '${e.slug}',`,
      `    locale: '${loc}',`,
      `    title: '${esc(a.title)}',`,
      `    metaTitle: '${esc(a.metaTitle)}',`,
      `    metaDescription: '${esc(a.metaDescription)}',`,
      `    category: '${esc(a.category)}',`,
      `    excerpt: '${esc(a.excerpt)}',`,
      `    content: \`${a.content}\``,
      '  }',
    ].join('\n')
  })
  const head = `  // ── ${e.slug} (inhega-daily ${TODAY}) ──`
  fs.writeFileSync(I18N_FILE, data.slice(0, idx) + ',\n' + head + '\n' + blocks.join(',\n') + data.slice(idx), 'utf8')
  console.log(`  ✓ lib/i18n/blog-i18n.ts += ${e.slug} × en/zh/ja`)
}

// content/blog/*.md 는 빌드가 읽지 않는 아카이브다. 발행분 원문 보존용으로만 쓴다.
function writeArchive(e) {
  if (!fs.existsSync(ARCHIVE_DIR)) fs.mkdirSync(ARCHIVE_DIR, { recursive: true })
  const fm = [
    '---',
    `title: "${e.ko.title.replace(/"/g, '\\"')}"`,
    `date: "${TODAY}"`,
    `category: "${e.ko.category}"`,
    `topic: "${e.topic}"`,
    `angle: "${e.angle}"`,
    `slug: "${e.slug}"`,
    '---',
    '',
  ].join('\n')
  fs.writeFileSync(path.join(ARCHIVE_DIR, `${e.slug}.md`), fm + e.ko.content + '\n', 'utf8')
  console.log(`  ✓ content/blog/${e.slug}.md (아카이브)`)
}

// 발행대장(지침서 제1장): 하루 한 줄.
function appendLedger(e, gate) {
  const dir = path.dirname(LEDGER)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(LEDGER)) {
    fs.writeFileSync(LEDGER, 'date,topic,angle,slug,locales,gate_checks,gate_pass,ko_title\n', 'utf8')
  }
  const row = [TODAY, e.topic, e.angle, e.slug, 'ko|en|zh|ja', gate.checks.length, gate.pass ? 'PASS' : 'FAIL', `"${e.ko.title.replace(/"/g, '""')}"`]
  fs.appendFileSync(LEDGER, row.join(',') + '\n', 'utf8')
  console.log(`  ✓ blog-log/inhega-daily.csv 기록`)
}

main().then((code) => process.exit(code)).catch((err) => { console.error(err); process.exit(1) })
