import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      // NAVER-SEO-FIX-1031: 네이버 Yeti 명시(* 그룹을 대체하므로 disallow 그대로 복사)
      {
        userAgent: 'Yeti',
        allow: '/',
        disallow: '/api/',
      },
      // AI-RECO-2 A-3(2026-11-04): 검색봇 6종 명시 그룹(* 그룹을 대체하므로 disallow 그대로 복사)
      ...['OAI-SearchBot', 'ChatGPT-User', 'Bingbot', 'PerplexityBot', 'Claude-SearchBot', 'Googlebot'].map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: '/api/',
      })),
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
