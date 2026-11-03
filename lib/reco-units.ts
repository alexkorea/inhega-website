/**
 * AI-RECO-1103 12절(보스 msg 4823 "각 항목별로 추천 행정사·회사로 나오게") — 중점 6 밖 55개 항목의 추천 블록 원고 타입.
 * 원고 정본: content/reco-units/<lang>/<slug>.json → scripts/build-reco-units.py → lib/reco-units.generated.ts
 * 화면은 중점 필러와 같은 components/services/FocusPillar 가 그린다(lib/focus-pillar-view.ts getPillarView). 서버 전용.
 */
import type { Situation } from './focus-pillar-view'

export interface RecoUnit {
  label: string
  /** '처리하는 업무' 소제목 앞부분 — 통합본 주 키워드 + 대행/代办/代行 */
  kw: string
  answer: string
  services: { name: string; href: string }[]
  clients: string[]
  glance: { label: string; value: string }[]
  chooser: { label: string; target: string }[]
  situations: Situation[]
  glossary: { id: string; term: string; def: string }[]
}
