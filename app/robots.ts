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
    sitemap: 'https://inhega.co.kr/sitemap.xml',
    host: 'https://inhega.co.kr',
  }
}
