// BEYE-1007-FIX #12: 서비스 상세 맨 끝 '근거 법령' 접기 1개 — 본문 괄호 조문·근거 법령 절·공식 기준 인용을 여기로 모은다.
// 기본은 닫힘. 고객 화면 본문에는 조문 번호·기준일이 남지 않는다(lib/law-refs.ts).
export default function LawRefs({
  heading,
  lawHtml,
  refs,
  refsLabel,
  citations,
}: {
  heading: string
  lawHtml?: string
  refs?: string[]
  refsLabel?: string
  citations?: { text: string; source: string }[]
}) {
  const hasRefs = !!refs && refs.length > 0
  const hasCites = !!citations && citations.length > 0
  if (!lawHtml && !hasRefs && !hasCites) return null
  return (
    <details className="svc-overview-content svc-lawrefs" id="svc-lawrefs">
      <summary>{heading}</summary>
      {lawHtml && <div dangerouslySetInnerHTML={{ __html: lawHtml }} />}
      {hasCites && (
        <ul>
          {citations!.map((c) => (
            <li key={c.text + c.source}>{c.text} — {c.source}</li>
          ))}
        </ul>
      )}
      {hasRefs && (
        <>
          {refsLabel && <p className="svc-lawrefs-label">{refsLabel}</p>}
          <ul>
            {refs!.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </>
      )}
    </details>
  )
}
