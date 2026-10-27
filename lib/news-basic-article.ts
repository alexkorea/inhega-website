/**
 * 기본 기사 — 해설 기사가 없거나(재생성 보류·실패) 구 기사가 깨져 걷어낸 항목의 /news/<slug> 본문.
 * 새로 지어내지 않고 정정된 title/summary/reason/stage/deadline 만 옮긴다(INHEGA-NEWS-FIX-2).
 * 해설 기사가 KV 로 들어오면 그 기사가 이 자리를 대신한다.
 */
import type { NewsArticle } from './news-article-schema'

type BasicSource = {
  title_ko: string
  summary_ko: string
  opportunity_reason: string
  stage: string
  deadline: string
}

const clip = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1).trimEnd()}…` : s)

const ymd = (v: string) => {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(v)
  return m ? `${m[1]}년 ${Number(m[2])}월 ${Number(m[3])}일` : v
}

export function basicArticle(it: BasicSource): NewsArticle {
  const schedule: string[] = []
  if (it.stage) schedule.push(`현재 단계는 ‘${it.stage}’입니다.`)
  if (it.deadline) schedule.push(`의견·시행 기한은 ${ymd(it.deadline)}입니다.`)
  const sections: NewsArticle['sections'] = []
  if (schedule.length) sections.push({ h2: '단계·일정', body: schedule })
  if (it.opportunity_reason) sections.push({ h2: '지금 확인할 것', body: [it.opportunity_reason] })
  if (!sections.length) sections.push({ h2: '규제 개요', body: [it.summary_ko] })
  return {
    meta_title: it.title_ko,
    meta_description: clip(it.summary_ko, 150),
    h1: it.title_ko,
    lead: it.summary_ko,
    sections,
    faq: [],
    keywords: [],
    disclaimer: '',
    generated_at: '',
    model: 'basic',
    og_image: '',
  }
}
