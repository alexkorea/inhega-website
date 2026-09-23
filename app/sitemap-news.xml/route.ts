/**
 * GET /sitemap-news.xml — 기사 페이지 전용 사이트맵.
 *
 * 기사는 재배포 없이 KV 로 들어오므로 **정적 sitemap.ts 에는 실을 수 없다**
 * (빌드 시점 목록으로 굳는다). 그래서 별도 라우트로 빼서 요청 시 KV 를 읽는다.
 * robots.txt 가 이 주소를 같이 알려 준다.
 *
 * 기사 없는 항목은 개별 URL 자체가 404 이므로 넣지 않는다.
 * lastmod 는 updated_at(내용이 실제로 바뀐 시각) 기준이다.
 */
import { articlesOf, readAllNews, sortNews } from '@/lib/news-data'

export const dynamic = 'force-dynamic'

const BASE = 'https://inhega.co.kr'

const esc = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

export async function GET() {
  const items = articlesOf(sortNews(await readAllNews()))

  const urls = items
    .map((it) => {
      const lastmod = it.updated_at || it.ingested_at || ''
      return [
        '  <url>',
        `    <loc>${esc(`${BASE}/news/${it.slug}`)}</loc>`,
        lastmod ? `    <lastmod>${esc(lastmod)}</lastmod>` : '',
        '    <changefreq>monthly</changefreq>',
        '    <priority>0.7</priority>',
        '  </url>',
      ]
        .filter(Boolean)
        .join('\n')
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

  return new Response(xml, {
    headers: {
      'content-type': 'application/xml; charset=utf-8',
      'cache-control': 'public, max-age=0, must-revalidate, s-maxage=600',
    },
  })
}
