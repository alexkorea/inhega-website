import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      {
        userAgent: 'Amazonbot',
        disallow: '/',
      },
    ],
    // 기사 사이트맵은 KV 를 요청 시 읽는 별도 라우트다(정적 sitemap.ts 에 실을 수 없다).
    sitemap: ['https://inhega.co.kr/sitemap.xml', 'https://inhega.co.kr/sitemap-news.xml'],
    host: 'https://inhega.co.kr',
  }
}
