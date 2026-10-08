# inhega.co.kr

Next.js + OpenNext(@opennextjs/cloudflare) 로 빌드해 **Cloudflare Pages `inhega-pages`** 에 직접 업로드(direct upload)로 배포한다. 라이브: https://inhega.co.kr

## 개발

```bash
npm run dev   # http://localhost:3000
```

## 배포 (Cloudflare Pages)

```bash
npx opennextjs-cloudflare build
node scripts/build-pages-bundle.mjs        # 번들 조립 단일 경로(빠뜨리면 _worker.js 증발)
cd .open-next/assets && npx wrangler pages deploy . --project-name=inhega-pages --branch=main
```
일일 블로그 무인 배포는 `~/sites/daily-blog-4am.mjs`(19:00) 의 cfBuildAndDeploy 가 같은 경로를 탄다.

배포 완료 판정은 n8n 독립검증 PASS(`~/scripts/deploy-done-auto.sh <site_key>`) 기준이다.
