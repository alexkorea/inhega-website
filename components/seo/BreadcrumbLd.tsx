// NAVER-SEO-FIX-1031: BreadcrumbList JSON-LD 만 낸다(화면 문구 무변경). items 의 path 는 사이트 절대 경로.
const BASE = 'https://inhega.co.kr'

export default function BreadcrumbLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${BASE}${it.path}` })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
