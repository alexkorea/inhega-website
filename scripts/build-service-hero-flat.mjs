#!/usr/bin/env node
/**
 * 서비스 상세 히어로용 **오버레이 합성본** WebP 를 만든다(L1, 2026-10-03).
 *
 * 서비스 상세 히어로는 사진 위에 단색 rgba(11,31,58,.72) 를 덮는다. 단색이므로 그 색을
 * 이미지에 미리 합성해도 화면은 같고, 대비가 낮아진 이미지는 훨씬 작게 압축된다.
 * 합성본을 쓰는 곳은 오버레이 div 를 지워야 한다(두 번 어두워진다).
 * 서비스 목록 카드는 오버레이가 다르므로(.55) 기존 -20260923 파일을 그대로 쓴다.
 *
 * 원본 PNG 에서 굽는다 — 이미 lossy 인 WebP 를 재인코딩하면 세대손실만 나고 크기는 안 준다.
 * 사용: node scripts/build-service-hero-flat.mjs
 */
import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const PUBLIC = new URL('../public/images/', import.meta.url).pathname
export const STAMP = 'flat-20261003'
const OVERLAY = { r: 11, g: 31, b: 58, alpha: 0.72 }
const WIDTHS = [{ w: 500, q: 50 }, { w: 800, q: 45 }]

let total = 0
for (const f of (await readdir(PUBLIC)).filter((f) => /^service-[^/]+\.png$/.test(f))) {
  const base = f.replace(/\.png$/, '')
  for (const { w, q } of WIDTHS) {
    const img = sharp(path.join(PUBLIC, f)).resize({ width: w, withoutEnlargement: true })
    const { width, height } = await img.clone().metadata().then(async () => {
      const b = await img.clone().toBuffer({ resolveWithObject: true })
      return b.info
    })
    const dest = `${base}-${STAMP}-${w}.webp`
    await img
      .composite([{
        input: { create: { width, height, channels: 4, background: OVERLAY } },
        blend: 'over',
      }])
      .flatten({ background: { r: OVERLAY.r, g: OVERLAY.g, b: OVERLAY.b } })
      .webp({ quality: q, effort: 6 })
      .toFile(path.join(PUBLIC, dest))
    const size = (await stat(path.join(PUBLIC, dest))).size
    total += size
    console.log(`${dest}  ${size}`)
  }
}
console.log(`총 ${total} bytes`)
