#!/usr/bin/env node
/**
 * 뉴스 기사 OG 카드 동기화 — og-pipeline 으로 `/og/news/<slug>.png` 를 굽는다.
 *
 * 왜 이런 모양인가: 기사는 **재배포 없이** KV 로 들어오는데 OG 카드는 배포 산출물이다.
 * 워커 런타임에서 PNG 를 만들 수단이 없으므로(next/og 는 CF 워커에서 못 쓴다)
 * "라이브 목록을 읽어 → 없는 카드만 생성 → 다음 배포에 싣는다" 로 잇는다.
 * 카드가 아직 없는 기사는 lib/news-article-render.ts 의 폴백(사이트 히어로)을 쓴다.
 *
 *   node scripts/news-og-sync.mjs                        # 라이브 기준
 *   node scripts/news-og-sync.mjs http://127.0.0.1:8788  # 로컬 기준
 *
 * 생성 후에는 `node scripts/build-og-thumbs.mjs` 가 index.json 을 TS 로 다시 굽는다
 * (워커에는 파일시스템이 없어 키 목록을 정적 모듈로 갖고 있어야 한다).
 */
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { homedir } from 'node:os'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const PIPELINE = join(homedir(), 'tools', 'og-pipeline')
const MANIFEST = join(PIPELINE, 'manifests', 'inhega-news.json')
const OG_DIR = join(ROOT, 'public', 'og')
const OG_INDEX = join(OG_DIR, 'index.json')

const BASE = (process.argv[2] || 'https://inhega.co.kr').replace(/[/]+$/, '')

if (!existsSync(join(PIPELINE, 'generate.mjs'))) {
  console.error(`[news-og] og-pipeline 없음: ${PIPELINE}`)
  process.exit(1)
}

const res = await fetch(`${BASE}/api/news?has_article=1&article=1&limit=200`)
if (!res.ok) {
  console.error(`[news-og] /api/news 응답 ${res.status}`)
  process.exit(1)
}
const { items = [] } = await res.json()

const have = new Set(existsSync(OG_INDEX) ? Object.keys(JSON.parse(readFileSync(OG_INDEX, 'utf8')).items ?? {}) : [])

// 카드 텍스트는 기사 h1 을 쓴다(목록 제목은 원문 직역이라 카드에 길고 어색하다).
const todo = items
  .filter((it) => it.slug && !have.has(`news/${it.slug}`))
  .map((it) => ({
    key: `news/${it.slug}`,
    slug: it.slug,
    lang: 'ko',
    title: it.article?.h1 || it.title_ko,
    category: it.product || '인허가',
    visa: null,
  }))

if (!todo.length) {
  console.log(`[news-og] 생성할 카드 없음 — 기사 ${items.length}건 모두 카드 보유`)
  process.exit(0)
}

writeFileSync(
  MANIFEST,
  JSON.stringify({ site: 'inhega', siteName: 'inhega.co.kr', items: todo }, null, 1)
)
console.log(`[news-og] ${todo.length}장 생성 시작 — manifest ${MANIFEST}`)

execFileSync(
  process.execPath,
  [join(PIPELINE, 'generate.mjs'), '--manifest', MANIFEST, '--outdir', OG_DIR, '--index', OG_INDEX],
  { stdio: 'inherit', cwd: PIPELINE }
)

execFileSync(process.execPath, [join(ROOT, 'scripts', 'build-og-thumbs.mjs')], { stdio: 'inherit', cwd: ROOT })
console.log('[news-og] 완료 — 다음 배포에 실린다')
