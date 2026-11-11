// INHEGA-1111 B-2(보스 msg 6175·6176): 한국어 블로그 ↔ 서비스 내부링크.
// 원천은 lib/blog-topic-map.ts(글 → 서비스) 하나. 글 제목·날짜는 경량 색인(FEED_POSTS_KO), 서비스 이름은 메뉴 표기(SERVICE_MENU·INDUSTRY_MENU)를
// 그대로 쓴다 — 새 문구를 만들지 않는다. 301 로 옮겨진 글은 싣지 않는다.
import Link from 'next/link'
import { BLOG_TOPIC_SERVICE } from '@/lib/blog-topic-map'
import { FEED_POSTS_KO } from '@/lib/blog-feed-index.generated'
import { REDIRECTED_BLOG_SLUGS } from '@/lib/blog-redirects'
import { SERVICE_MENU, INDUSTRY_MENU } from '@/lib/services-menu.generated'

const POSTS = FEED_POSTS_KO.filter((p) => !REDIRECTED_BLOG_SLUGS.has(p.slug))
const POST_BY_SLUG = new Map(POSTS.map((p) => [p.slug, p]))
const SERVICE_NAME = new Map<string, string>([
  ...SERVICE_MENU.ko.map((s) => [s.href, s.shortTitle] as [string, string]),
  ...INDUSTRY_MENU.ko.map((s) => [s.href, s.shortTitle] as [string, string]),
])

/** 같은 서비스로 묶인 글(게시일 오름차순). 서비스 쪽이 메뉴에 없으면(보류 등) 빈 목록. */
function postsOfService(href: string) {
  if (!SERVICE_NAME.has(href)) return []
  return POSTS.filter((p) => BLOG_TOPIC_SERVICE[p.slug] === href).sort((a, b) => a.created_at.localeCompare(b.created_at) || a.slug.localeCompare(b.slug))
}

/** 같은 주제 글 — 묶음 안에서 뒤로 이어지는 최대 4편(고리 순서). 묶음이 3편 이상이면 모든 글이 같은 주제 글 2편 이상에서 링크된다. */
export function sameTopicPosts(slug: string) {
  const href = BLOG_TOPIC_SERVICE[slug]
  if (!href) return []
  const group = postsOfService(href)
  const i = group.findIndex((p) => p.slug === slug)
  if (i < 0) return []
  const k = Math.min(group.length - 1, 4)
  return Array.from({ length: k }, (_, j) => group[(i + 1 + j) % group.length])
}

const linkStyle = { color: 'var(--navy)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' } as const

/** 블로그 본문 상단 — 대응 서비스 쪽 링크 1개. */
export function BlogServiceLink({ slug }: { slug: string }) {
  const href = BLOG_TOPIC_SERVICE[slug]
  const name = href ? SERVICE_NAME.get(href) : undefined
  if (!href || !name) return null
  return (
    <p className="blog-service-link" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '10px', padding: '0.75rem 1rem', marginBottom: '1.5rem', fontSize: '0.9375rem', color: 'var(--slate)' }}>
      관련 업무 안내: <Link prefetch={false} href={href} style={linkStyle}>{name}</Link>
    </p>
  )
}

/** 블로그 글 끝 — 같은 주제 글. */
export function BlogSameTopic({ slug }: { slug: string }) {
  const list = sameTopicPosts(slug)
  if (!list.length) return null
  return (
    <section className="blog-same-topic" style={{ marginTop: '2.5rem', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.25rem 1.5rem' }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: 'var(--navy)', marginBottom: '0.75rem' }}>같은 주제 글</h2>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {list.map((p) => (
          <li key={p.slug}><Link prefetch={false} href={`/blog/${p.slug}`} style={linkStyle}>{p.title}</Link></li>
        ))}
      </ul>
    </section>
  )
}

/** 서비스 쪽 '관련 가이드' — 이 서비스로 묶인 글 중 같은 쪽에 아직 링크가 없는 글. */
export function ServiceTopicGuides({ href, exclude = [] }: { href: string; exclude?: string[] }) {
  const ex = new Set(exclude)
  const list = postsOfService(href).filter((p) => !ex.has(`/blog/${p.slug}`)).reverse()
  if (!list.length) return null
  return (
    <section className="fade-up" id="svc-topic-guides" style={{ marginTop: 'var(--block-gap)', marginBottom: 'var(--block-gap)' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <span className="badge badge-navy text-label">블로그</span>
        <h2 className="text-h2" style={{ marginTop: '0.75rem', color: 'var(--charcoal)' }}>관련 가이드</h2>
        <span className="accent-line" style={{ marginTop: '0.75rem' }} />
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {list.map((p) => (
          <li key={p.slug} style={{ background: 'var(--white)', borderRadius: '12px', padding: '1rem 1.25rem', border: '1px solid var(--border)', margin: 0 }}>
            <Link prefetch={false} href={`/blog/${p.slug}`} style={linkStyle}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** 쪽 HTML 조각에서 /blog/ 링크 경로만 뽑는다(같은 쪽에 이미 있는 글은 '관련 가이드'에 다시 싣지 않기 위해). */
export const blogHrefsIn = (html: string) => [...html.matchAll(/href="(\/blog\/[^"#?]+)"/g)].map((m) => m[1])
