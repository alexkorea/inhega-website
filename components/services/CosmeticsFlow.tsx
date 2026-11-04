import Link from 'next/link'
import { getCosmeticsHub, type HubLocale } from '@/lib/cosmetics-hub'
import styles from './CosmeticsFlow.module.css'

/**
 * INHEGA-COSMETICS: 화장품 인허가 업무 연결 흐름 — 단계도(①~⑥, 각 단계 표 행으로 이동) + 관계 설명 + 단계별 표
 * (정식 명칭·관할 기관·대상·필요한 경우·우리가 하는 일·상세 페이지). 좁은 화면에서는 표 행이 카드로 바뀐다(JS 없음).
 * id="svc-stages" — 예전 '단계' 블록 자리(상황 질문의 #svc-stages 링크가 여기로 온다).
 */
export default function CosmeticsFlow({ slug, locale }: { slug: string; locale: HubLocale }) {
  const hub = getCosmeticsHub(locale, slug)
  if (!hub) return null
  const c = hub.cols
  return (
    <div id="svc-stages" className={styles.wrap}>
      <h2 className={styles.heading}>{hub.heading}</h2>
      <p className={styles.lead}>{hub.lead}</p>
      <ol className={styles.diagram} aria-label={hub.diagramLabel}>
        {hub.steps.map((s) => (
          <li key={s.id}>
            <a href={`#${s.id}`}><span className={styles.no}>{s.no}</span><span>{s.short}</span></a>
          </li>
        ))}
      </ol>
      {hub.relations.length > 0 && (
        <ul className={styles.relations}>
          {hub.relations.map((r) => <li key={r}>{r}</li>)}
        </ul>
      )}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr><th scope="col">{c.name}</th><th scope="col">{c.agency}</th><th scope="col">{c.target}</th><th scope="col">{c.when}</th><th scope="col">{c.we}</th><th scope="col">{c.link}</th></tr>
          </thead>
          <tbody>
            {hub.steps.map((s) => (
              <tr key={s.id} id={s.id}>
                <th scope="row" data-label={c.name}><span className={styles.no}>{s.no}</span> {s.name}</th>
                <td data-label={c.agency}>{s.agency}</td>
                <td data-label={c.target}>{s.target}</td>
                <td data-label={c.when}>{s.when}</td>
                <td data-label={c.we}>{s.we}</td>
                <td data-label={c.link}><Link prefetch={false} href={s.href}>{s.linkText}</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
