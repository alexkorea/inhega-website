/**
 * Cloudflare Pages(direct upload) 배포용 번들 조립 스크립트 — inhega-pages.
 *
 * `opennextjs-cloudflare build` 는 워커를 .open-next/worker.js 에 두고
 * .open-next/assets 는 정적자산만 남긴다. Pages 는 assets/_worker.js 규약을 쓰므로
 * 이 조립 단계를 건너뛰고 assets 를 그대로 올리면 전 라우트가 404 가 된다.
 *
 * 사용: node scripts/build-pages-bundle.mjs   (opennextjs-cloudflare build 이후)
 * 배포: cd .open-next/assets && wrangler pages deploy . --project-name=inhega-pages --branch=main
 *
 * _routes.json 은 public/_routes.json 이 그대로 복사되므로 여기서 건드리지 않는다.
 */
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const OUT = path.join(ROOT, '.open-next')
const ASSETS = path.join(OUT, 'assets')

if (!fs.existsSync(path.join(OUT, 'worker.js'))) {
  console.error('.open-next/worker.js 없음 — 먼저 `npx opennextjs-cloudflare build` 실행')
  process.exit(1)
}

fs.copyFileSync(path.join(OUT, 'worker.js'), path.join(ASSETS, '_worker.js'))

for (const dir of ['cloudflare', 'middleware', 'server-functions', '.build']) {
  const src = path.join(OUT, dir)
  if (!fs.existsSync(src)) continue
  fs.rmSync(path.join(ASSETS, dir), { recursive: true, force: true })
  fs.cpSync(src, path.join(ASSETS, dir), { recursive: true })
}

const cacheRoot = path.join(OUT, 'cache')
if (fs.existsSync(cacheRoot)) {
  const dest = path.join(ASSETS, 'cdn-cgi', '_next_cache')
  fs.rmSync(dest, { recursive: true, force: true })
  fs.mkdirSync(dest, { recursive: true })
  for (const entry of fs.readdirSync(cacheRoot)) {
    fs.cpSync(path.join(cacheRoot, entry), path.join(dest, entry), { recursive: true })
  }
}

if (!fs.existsSync(path.join(ASSETS, '_routes.json'))) {
  console.error('assets/_routes.json 없음 — public/_routes.json 확인 필요')
  process.exit(1)
}

console.log('Pages 번들 준비 완료 → .open-next/assets (_worker.js + cloudflare/middleware/server-functions + cdn-cgi/_next_cache)')
