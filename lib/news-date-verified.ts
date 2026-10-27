/**
 * 법제처 항목의 원문 시행·공포일 — law.go.kr 이 워커에서 읽히지 않을 때 쓰는 확인값(INHEGA-NEWS-HELD).
 *
 * 2026-10-27 맥3 가 `_lock` 정정을 재전송하자 수신단의 시행일 대조가 law.go.kr 에서
 * `<시행일자>` 없는 응답(OC 사용자 검증 실패 — HTTP 200 + `<result>사용자 정보 검증에 실패…`)을 받아
 * KRLAW 10건을 `date_check.error` 로 게시 보류했고, 그때 저장돼 있던 시행일자도 지워졌다.
 * 맥4 에는 NEWS_INGEST_TOKEN·KV 권한이 없어 저장값을 되돌릴 수 없으므로, 맥4 에서
 * lawService.do?OC=test&target=law&MST=<번호>&type=XML 을 직접 읽어 parseLawXml 로 뽑은 값을 여기에 둔다.
 *
 * 읽기 경로(readAllNews)에서 **저장된 대조가 조회 실패(error)일 때만** 이 값으로 글의 날짜를 다시 대조한다
 * — 글이 원문과 어긋나면 그대로 보류된다. 다음 수신에서 원문 대조가 성공하면 저장값이 우선한다.
 * 확인일 2026-10-27(맥4).
 */
export type VerifiedLawDates = { effective: string; promulgated: string; partial: string[]; name: string }

export const NEWS_LAW_DATES: Record<string, VerifiedLawDates> = {
  'KRLAW:291321': { effective: '2027-10-21', promulgated: '2026-10-20', partial: ['2026-10-20', '2027-12-31'], name: '의료기기법' },
  'KRLAW:291337': { effective: '2026-10-20', promulgated: '2026-10-20', partial: [], name: '화장품법' },
  'KRLAW:290943': { effective: '2026-10-02', promulgated: '2026-10-02', partial: [], name: '자동차관리법 시행규칙' },
  'KRLAW:290567': { effective: '2026-10-02', promulgated: '2026-10-01', partial: [], name: '전자장치 부착 등에 관한 법률 시행규칙' },
  'KRLAW:290799': { effective: '2026-09-30', promulgated: '2026-09-30', partial: [], name: '수입식품안전관리 특별법 시행규칙' },
  'KRLAW:290541': { effective: '2026-10-01', promulgated: '2026-09-29', partial: ['2026-09-29'], name: '식품산업진흥법 시행령' },
  'KRLAW:289983': { effective: '2026-09-18', promulgated: '2026-09-18', partial: [], name: '체외진단의료기기법 시행규칙' },
  'KRLAW:289587': { effective: '2026-09-15', promulgated: '2026-09-15', partial: [], name: '식품산업진흥법' },
  'KRLAW:289781': { effective: '2027-03-16', promulgated: '2026-09-15', partial: ['2026-09-15', '2027-12-31'], name: '의료기기법' },
  'KRLAW:289865': { effective: '2026-09-15', promulgated: '2026-09-15', partial: [], name: '자동차관리법 시행규칙' },
}
