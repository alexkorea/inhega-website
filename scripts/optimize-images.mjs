#!/usr/bin/env node
/**
 * Re-encodes the oversized raster assets in public/ to WebP.
 *
 * Why this exists: on Cloudflare Pages the Next image optimizer (/_next/image)
 * is a pass-through — it returns the original bytes for every `w=` value
 * (verified 2026-09-22: w=256, w=640 and w=1200 all returned the same
 * 1,127,455-byte hero PNG). So `next/image` gave us no resizing at all and the
 * home page shipped 5 MB of images. We therefore size the assets ourselves and
 * set `images.unoptimized` in next.config.ts.
 *
 * Idempotent: skips a .webp that is newer than its source.
 */
import sharp from 'sharp'
import { readdir, stat, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'

const ROOT = new URL('..', import.meta.url).pathname
const PUBLIC = path.join(ROOT, 'public')

// maxWidth is chosen from how the asset is actually rendered:
//  hero  — full-bleed, capped at 1600 (covers a 1440 desktop and 390@3x mobile)
//  cards — bento tiles, never wider than ~800 CSS px
//  team  — 144 px circular avatars (2x = 288)
//  logo  — 40 px mark (3x = 120)
const RULES = [
  { match: /^images\/hero-[^/]+\.(png|jpg|jpeg)$/, maxWidth: 1600, quality: 72 },
  { match: /^images\/service-[^/]+\.(png|jpg|jpeg)$/, maxWidth: 800, quality: 72 },
  { match: /^(images\/)?team\/[^/]+\.(png|jpg|jpeg)$/, maxWidth: 288, quality: 75 },
  { match: /^logo\.png$/, maxWidth: 120, quality: 80 },
]

async function* walk(dir, base = '') {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${e.name}` : e.name
    if (e.isDirectory()) yield* walk(path.join(dir, e.name), rel)
    else yield rel
  }
}

let converted = 0, savedBytes = 0
for await (const rel of walk(PUBLIC)) {
  const rule = RULES.find((r) => r.match.test(rel))
  if (!rule) continue
  const src = path.join(PUBLIC, rel)
  const out = path.join(PUBLIC, rel.replace(/\.(png|jpg|jpeg)$/, '.webp'))
  const srcStat = await stat(src)
  if (existsSync(out) && (await stat(out)).mtimeMs >= srcStat.mtimeMs) continue
  await mkdir(path.dirname(out), { recursive: true })
  await sharp(src)
    .resize({ width: rule.maxWidth, withoutEnlargement: true })
    .webp({ quality: rule.quality })
    .toFile(out)
  const outStat = await stat(out)
  converted++
  savedBytes += srcStat.size - outStat.size
  console.log(
    `${rel} ${(srcStat.size / 1024).toFixed(0)}KB -> ${path.basename(out)} ${(outStat.size / 1024).toFixed(0)}KB`
  )
}
console.log(`\n${converted} converted, ${(savedBytes / 1024 / 1024).toFixed(2)} MB saved`)
