/**
 * 업종 사진 게이트(INH-PHOTO60, 2026-10-05 맥7 · 보스 msg 2338~2345) — prebuild 에서 실행, 실패하면 빌드 중단.
 *
 * 검사
 *  1) 홈·/services·상세에 나오는 업종(4언어 디렉터리 전부)마다 lib/service-card-images.ts 에 사진이 있다
 *  2) 같은 사진 두 번 0 — pexels id·파일 경로·파일 바이트(sha256) 어느 것도 겹치면 실패
 *     기존 24종 services-data 의 image 도 업종마다 달라야 하고, 사진 표의 경로와 같아야 한다
 *  3) 파일 7종 규격: <slug>.webp 1200×750 ≤150KB · -800/-1200/-2000.webp 폭 일치, 2000w ≤400KB, -2880.webp 2880×1800 ≤700KB(히어로 PC 레티나) · -og.jpg 1200×630
 *  4) docs/IMAGE-CREDITS.md 에 모든 pexels id 가 있다(출처 기록)
 *
 *   node scripts/photo-gate.mjs
 */
import { register } from 'node:module'
import { pathToFileURL, fileURLToPath } from 'node:url'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { createHash } from 'node:crypto'
import { join, dirname } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
register(pathToFileURL(join(ROOT, 'scripts/lib/ts-esm-loader.mjs')).href, pathToFileURL(ROOT + '/'))

const errors = []
const fail = (m) => errors.push(m)

let photos, directory, catalog
try {
  photos = await import(pathToFileURL(join(ROOT, 'lib/service-card-images.ts')).href)
} catch (e) {
  console.error(`[photo-gate] FAIL — ${e.message}`)
  process.exit(1)
}
directory = await import(pathToFileURL(join(ROOT, 'lib/service-directory.ts')).href)
catalog = await import(pathToFileURL(join(ROOT, 'lib/services-catalog.ts')).href)

const { INDUSTRY_PHOTOS, INDUSTRY_PHOTO_DIR } = photos

// 1) 업종 ↔ 사진
const slugs = new Set()
for (const l of ['ko', 'en', 'zh', 'ja']) for (const g of directory.getServiceDirectory(l)) for (const e of g.items) slugs.add(e.slug)
for (const s of slugs) if (!INDUSTRY_PHOTOS[s]) fail(`사진 없음: ${s}`)
for (const s of Object.keys(INDUSTRY_PHOTOS)) if (!slugs.has(s)) fail(`디렉터리에 없는 업종의 사진: ${s}`)

// 2-a) 기존 24종 image 필드
for (const l of ['ko', 'en', 'zh', 'ja']) {
  const seenImg = new Map()
  for (const s of catalog.getServiceCatalog(l)) {
    const want = `${INDUSTRY_PHOTO_DIR}/${s.slug}.webp`
    if (s.image !== want) fail(`services-data image 불일치: ${s.slug} = ${s.image} (정본 ${want})`)
    const prev = seenImg.get(s.image)
    if (prev && prev !== s.slug) fail(`같은 image 를 두 업종이 쓴다: ${prev}, ${s.slug} → ${s.image}`)
    seenImg.set(s.image, s.slug)
  }
}

// 이미지 크기 읽기(의존성 없이 헤더만)
function webpSize(b) {
  if (b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') return null
  const c = b.toString('ascii', 12, 16)
  if (c === 'VP8X') return { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) }
  if (c === 'VP8 ') return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff }
  if (c === 'VP8L') { const v = b.readUInt32LE(21); return { w: (v & 0x3fff) + 1, h: ((v >> 14) & 0x3fff) + 1 } }
  return null
}
function jpegSize(b) {
  let i = 2
  while (i < b.length) {
    if (b[i] !== 0xff) return null
    const m = b[i + 1]
    const len = b.readUInt16BE(i + 2)
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return { w: b.readUInt16BE(i + 7), h: b.readUInt16BE(i + 5) }
    i += 2 + len
  }
  return null
}

// 2-b)·3) 파일
const SPECS = [
  { suf: '.webp', w: 1200, h: 750, max: 150_000 },
  { suf: '-400.webp', w: 400 },
  { suf: '-800.webp', w: 800 },
  { suf: '-1200.webp', w: 1200 },
  { suf: '-2000.webp', w: 2000, max: 400_000 },
  { suf: '-2880.webp', w: 2880, h: 1800, max: 700_000 },
  { suf: '-og.jpg', w: 1200, h: 630, jpeg: true },
]
const seenHash = new Map()
const seenId = new Map()
for (const [slug, p] of Object.entries(INDUSTRY_PHOTOS)) {
  if (seenId.has(p.pexels)) fail(`pexels ${p.pexels} 중복: ${seenId.get(p.pexels)}, ${slug}`)
  seenId.set(p.pexels, slug)
  for (const sp of SPECS) {
    const rel = `${INDUSTRY_PHOTO_DIR}/${slug}${sp.suf}`
    const f = join(ROOT, 'public', rel)
    if (!existsSync(f)) { fail(`파일 없음: ${rel}`); continue }
    const b = readFileSync(f)
    const d = sp.jpeg ? jpegSize(b) : webpSize(b)
    if (!d) { fail(`크기 판독 실패: ${rel}`); continue }
    if (d.w !== sp.w || (sp.h && d.h !== sp.h)) fail(`규격 불일치: ${rel} ${d.w}×${d.h} (기대 ${sp.w}×${sp.h ?? '?'})`)
    if (sp.max && statSync(f).size > sp.max) fail(`용량 초과: ${rel} ${statSync(f).size}B > ${sp.max}B`)
    const h = createHash('sha256').update(b).digest('hex')
    if (seenHash.has(h)) fail(`같은 파일 바이트: ${seenHash.get(h)} = ${rel}`)
    seenHash.set(h, rel)
  }
}

// 4) 크레딧
const credits = existsSync(join(ROOT, 'docs/IMAGE-CREDITS.md')) ? readFileSync(join(ROOT, 'docs/IMAGE-CREDITS.md'), 'utf8') : ''
for (const [slug, p] of Object.entries(INDUSTRY_PHOTOS)) if (!credits.includes(`/${p.pexels}/`)) fail(`크레딧 누락: ${slug} (pexels ${p.pexels}) — docs/IMAGE-CREDITS.md`)

if (errors.length) {
  console.error(`[photo-gate] FAIL ${errors.length}건`)
  for (const e of errors) console.error('  - ' + e)
  process.exit(1)
}
console.log(`[photo-gate] PASS — 업종 ${slugs.size}·사진 ${Object.keys(INDUSTRY_PHOTOS).length}장·파일 ${seenHash.size}개, 중복 0`)
