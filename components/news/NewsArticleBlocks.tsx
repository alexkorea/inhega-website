/**
 * 기사 본문 블록 렌더러(서버 컴포넌트).
 *
 * 입력은 런타임에 들어온 모델 생성 텍스트다. **HTML 로 주입하지 않는다** —
 * lib/news-article-render.ts 가 뽑아 준 구조를 React 엘리먼트로만 그린다.
 */
import type { Block, InlineToken } from '@/lib/news-article-render'
import styles from '@/app/news-article.module.css'

function Inline({ tokens }: { tokens: InlineToken[] }) {
  return (
    <>
      {tokens.map((tk, i) => {
        if (tk.t === 'b') return <strong key={i}>{tk.v}</strong>
        if (tk.t === 'code') return <code key={i} className={styles.code}>{tk.v}</code>
        return <span key={i}>{tk.v}</span>
      })}
    </>
  )
}

export default function NewsArticleBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.kind) {
          case 'h3':
            return <h3 key={i} className={styles.h3}><Inline tokens={b.inline} /></h3>
          case 'quote':
            return <blockquote key={i} className={styles.quote}><Inline tokens={b.inline} /></blockquote>
          case 'ul':
            return (
              <ul key={i} className={styles.list}>
                {b.items.map((it, j) => <li key={j}><Inline tokens={it} /></li>)}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i} className={styles.list}>
                {b.items.map((it, j) => <li key={j}><Inline tokens={it} /></li>)}
              </ol>
            )
          default:
            return <p key={i} className={styles.p}><Inline tokens={b.inline} /></p>
        }
      })}
    </>
  )
}
