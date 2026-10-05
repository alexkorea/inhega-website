#!/usr/bin/env node
/**
 * 홈 히어로 / 서비스 카드용 **반응형 WebP 2종**을 만든다.
 *
 * 왜 optimize-images.mjs 로 부족한가: 그 스크립트는 자산 1개당 파일 1개만 만든다.
 * 그런데 images.unoptimized=true(=CF Pages 에는 /_next/image 가 없다) 라서
 * next/image 는 srcSet 을 만들지 않는다 — 즉 데스크톱용 한 장이 412px 모바일에도
 * 그대로 간다(Lighthouse: 히어로 34.7%, 서비스 카드 50.3% 가 낭비).
 * 그래서 폭별로 파일을 미리 만들고 네이티브 img 의 srcSet 으로 직접 준다.
 *
 * 화질을 낮게 잡는 근거: 두 자산 모두 짙은 남색 오버레이 아래에 깔린다
 * (히어로 rgba(11,31,58,.72) / 카드 .55). 실제로 보이는 건 실루엣뿐이다.
 *
 * 사용: node scripts/build-responsive-images.mjs
 */
import sharp from 'sharp'
import { readdir, stat } from 'node:fs/promises'
import path from 'node:path'

const PUBLIC = new URL('../public/', import.meta.url).pathname
const STAMP = '20260923'

const JOBS = [
  // 홈 히어로는 2026-10-06 부터 hero-seoul(-ko-flat)-20261006-{768,1280,2000,2880}.webp(Pexels 11687718 원본에서 별도로 구움)를 쓴다. 아래 1024 소스는 OG 용 png 의 파생본만 만든다.
  { src: 'images/hero-seoul.png', widths: [{ w: 768, q: 50 }, { w: 1024, q: 60 }] },
  { match: /^service-[^/]+\.png$/, dir: 'images', widths: [{ w: 500, q: 50 }, { w: 800, q: 45 }] },
  // QR 은 어두운 오버레이가 없어 화질을 낮출 수 없다. 포맷만 JPEG -> WebP.
  { match: /^[^/]+\.jpg$/, dir: 'images/qr', widths: [{ w: 300, q: 80 }] },
]

export function responsiveName(src, width) {
  return src.replace(/\.(png|jpe?g|webp)$/i, '') + `-${STAMP}-${width}.webp`
}

async function build(rel, widths) {
  const out = []
  for (const { w, q } of widths) {
    const dest = responsiveName(rel, w)
    await sharp(path.join(PUBLIC, rel))
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: q, effort: 6 })
      .toFile(path.join(PUBLIC, dest))
    out.push([dest, (await stat(path.join(PUBLIC, dest))).size])
  }
  return out
}

let total = 0
for (const job of JOBS) {
  const rels = job.src
    ? [job.src]
    : (await readdir(path.join(PUBLIC, job.dir))).filter((f) => job.match.test(f)).map((f) => `${job.dir}/${f}`)
  for (const rel of rels) {
    for (const [dest, size] of await build(rel, job.widths)) {
      total += size
      console.log(`${dest}  ${size}`)
    }
  }
}
console.log(`총 ${total} bytes`)
