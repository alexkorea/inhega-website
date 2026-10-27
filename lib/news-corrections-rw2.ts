/**
 * INHEGA-NEWS-FIX-2 (맥3 RW-NEWS-QUALITY-2 원문 대조 결과, 2026-10-27) — KV 잠금(locked_fields)으로
 * 수신 API 가 못 덮은 정정과, 기사 본문이 아직 재생성되지 않은 항목의 title/summary 정정을 표시 레이어에 싣는다.
 * 원본: ~/work/rw_corrections_for_mac4.json. 빈 문자열은 "비움" 의도라 그대로 덮는다(키가 없으면 건드리지 않는다).
 *
 * staleArticleBefore: 그 시각 **이전**에 생성된 구 기사는 깨진 본문(오역 고유명사·한자·원문에 없는 의무)이라
 * 정정 필드로 만든 기본 기사로 바꾼다. 맥3 가 재생성해 보낸 새 기사(generated_at 이 그 시각 이후)는
 * 건드리지 않는다 — 정정 title/summary 만 위에 얹는다.
 */
import type { NewsCorrection } from './news-corrections'

/** 이 시각(UTC) 이전에 생성된 기사 = 맥3 재생성 전의 구 기사. 마지막 구 기사 생성은 08:58Z. */
const STALE_CUTOFF = '2026-10-27T11:00:00Z'

export const NEWS_CORRECTIONS_RW2: Record<string, NewsCorrection> = {
  "KRLAW:291321": {
    title_ko: "의료기기법 일부개정(국가필수의료기기 안정공급 지원)",
    summary_ko: "의료기기법 일부개정이 2026년 10월 20일 공포되었으며 2027년 10월 21일부터 시행됩니다. 보건복지부장관과 식품의약품안전처장이 지정하는 '국가필수의료기기'의 지정·안정공급 지원 근거와 협의회를 신설하고, 의료기관에 의료기기를 판매·임대하지 않고 경제적 이익 등을 제공하지 않은 판매업자·임대업자에 대해 지출보고서 작성·공개·보관 의무를 면제합니다.",
    opportunity_reason: "의료기기 제조·수입·판매 업체는 시행일(2027-10-21)과 개정 조문을 확인할 필요가 있습니다.",
    stage: "확정",
    deadline: "2027-10-21",
  },
  "KRLAW:290943": {
    title_ko: "자동차관리법 시행규칙 개정",
    summary_ko: "자동차관리법 시행규칙 일부개정이 2026년 10월 2일 시행되었습니다. 검찰청 폐지·공소청 신설에 따라 종전 검찰청 관련 명칭을 관할 공소청으로 정비하는 개정으로, 자동차 관련 실체 규제의 변경은 없습니다.",
    opportunity_reason: "국내 자동차부품 제조업체들이 새로운 규칙을 준수해야 합니다.",
    stage: "확정",
    deadline: "2026-10-02",
  },
  "KRLAW:290567": {
    title_ko: "전자장치 부착 등에 관한 법률 시행규칙 개정",
    summary_ko: "전자장치 부착 등에 관한 법률 시행규칙 일부개정이 2026년 10월 2일 시행되었습니다. 검찰청 폐지·공소청 신설에 따라 종전 검찰청 관련 명칭을 정비하는 개정입니다.",
    opportunity_reason: "한국 기업이 전자장치 부착 관련 인허가 절차를 변경해야 합니다.",
    stage: "시행",
    deadline: "2026-10-02",
  },
  "KRLAW:289587": {
    title_ko: "식품산업진흥법 개정",
    summary_ko: "식품산업진흥법이 농림축산식품부·해양수산부 소관 법률의 제재처분 기준과 이행강제금을 일괄 정비하는 타법개정으로 2026년 9월 15일 개정·시행되었습니다. 법률에 제재처분의 상한을 명확히 하고 행정기본법과 중복되는 규정을 삭제하는 내용입니다.",
    opportunity_reason: "국내 식품 수출기업이 식품산업진흥법에 따른 신고 및 인증 절차를 준수해야 합니다.",
    stage: "확정",
    deadline: "2026-09-15",
  },
  "KRLAW:289865": {
    title_ko: "자동차관리법 시행규칙 개정",
    summary_ko: "자동차관리법 시행규칙이 국토교통부령 19개를 함께 정비하는 타법개정(일괄개정)으로 2026년 9월 15일 시행되었습니다. 행정정보 공동이용 대상이 아닌 사업자등록증 확인 규정 정비, 상위법령에 어긋나는 첨부서류·평가 방법 조정, 인용조문 오류 정정 등이 내용이며 자동차 관련 실체 규제의 변경은 아닙니다.",
    opportunity_reason: "국내 자동차부품 제조업체와 수출업체가 새로운 자동차관리법 시행규칙을 준수해야 합니다.",
    stage: "확정",
    deadline: "2026-09-15",
  },
  "KRLAW:290799": {
    title_ko: "수입식품안전관리 특별법 시행규칙 개정",
    summary_ko: "수입식품안전관리 특별법 시행규칙 일부개정이 2026년 9월 30일 시행되었습니다. 우수수입업소 변경등록 절차와 영업등록 등의 첨부서류를 간소화하고, 수입식품 용도변경 승인 사유와 자동화 방식의 수입신고 수리 대상을 확대하며, 수입·판매업 등의 시설기준을 완화하고, 위해 우려가 있는 수입식품에 대한 정밀검사를 강화하는 내용입니다.",
    opportunity_reason: "수입식품 영업자는 개정 조문과 시행일(2026-09-30)을 확인할 필요가 있습니다.",
    stage: "확정",
    deadline: "2026-09-30",
  },
  "KRLAW:290541": {
    title_ko: "식품산업진흥법 시행령 개정",
    summary_ko: "식품산업진흥법 시행령 일부개정이 2026년 9월 29일 공포되어 2026년 10월 1일부터 시행됩니다. 식품산업 시설의 자동화·기계화·지능화를 하려는 식품사업자에 대해 국가와 지방자치단체가 필요한 비용을 지원하는 근거와 지원 신청 시 사업계획서 제출 등 세부 사항을 정합니다.",
    opportunity_reason: "식품사업자는 지원 요건과 시행일(2026-10-01)을 확인할 필요가 있습니다.",
    stage: "확정",
    deadline: "2026-10-01",
  },
  "KRLAW:289781": {
    title_ko: "의료기기법 일부 개정",
    summary_ko: "의료기기법 일부개정이 2026년 9월 15일 공포되어 2027년 3월 16일부터 시행됩니다. 식품의약품안전처장이 정보통신망의 위법한 의료기기 표시·광고를 모니터링할 수 있도록 하고, 허가·인증·신고를 하지 않은 의료기기의 판매·임대 알선을 금지하며, 관세청장에게 의료기기 수입신고 내역 제공을 요청할 수 있는 근거를 마련합니다.",
    opportunity_reason: "의료기기 제조·수입·판매 업체는 시행일(2027-03-16)과 개정 조문을 확인할 필요가 있습니다.",
    stage: "확정",
    deadline: "2027-03-16",
  },
  "EPING:120296": {
    title_ko: "일본 농림수산성, 사료·사료첨가제 규격기준 개정안 — 구아니디노아세트산 허용량 확대",
    summary_ko: "일본 농림수산성(MAFF)이 「사료 및 사료첨가제의 성분규격 등에 관한 성령」의 사료 일반 제조방법 기준을 개정해, 수입 사료첨가제 구아니디노아세트산(guanidinoacetic acid)을 돼지와 산란계 이외의 모든 닭 사료에 최대 0.12%까지 사용할 수 있게 하는 개정안(G/TBT/N/JPN/917)을 통보했습니다. 채택·시행 예정은 2026년 10월로 통보되었으며 의견마감은 원문에 기재되어 있지 않습니다.",
    opportunity_reason: "일본에 해당 사료첨가제를 수출하는 기업은 개정안의 최종 확정 여부와 허용량 조건을 확인할 필요가 있습니다.",
    stage: "초안",
    deadline: "",
  },
  "EPING:120295": {
    title_ko: "일본 농림수산성, 사료·사료첨가제 규격기준 개정안 — 구아니디노아세트산 허용량 확대",
    summary_ko: "일본 농림수산성(MAFF)이 「사료 및 사료첨가제의 성분규격 등에 관한 성령」의 사료 일반 제조방법 기준을 개정해, 수입 사료첨가제 구아니디노아세트산을 돼지와 산란계 이외의 모든 닭 사료에 최대 0.12%까지 사용할 수 있게 하고 허용 동물 종을 확대하는 개정안(G/SPS/N/JPN/1432)을 통보했습니다. 채택·시행 예정은 2026년 10월로 통보되었으며 의견마감은 원문에 기재되어 있지 않습니다.",
    opportunity_reason: "일본에 해당 사료첨가제를 수출하는 기업은 개정안의 최종 확정 여부와 허용량 조건을 확인할 필요가 있습니다.",
    stage: "초안",
    deadline: "",
  },
  "EPING:120790": {
    title_ko: "중국, 전동 휠체어 안전기술규범 국가표준안 통보 — 의견수렴 단계",
    summary_ko: "중국이 1인용 전동 휠체어(HS 871310, 사용자 체중 25kg 초과 100kg 이하)의 용어·일반원칙·표시·안전요구사항·시험방법·기업 품질보증능력 및 제품 일관성·검사규칙을 정한 국가표준안(G/TBT/N/CHN/2375)을 WTO에 통보했습니다. 의견마감은 2026년 11월 25일이며 채택일은 미정, 시행은 승인 12개월 후로 통보되었습니다.",
    opportunity_reason: "중국에 전동 휠체어를 수출하는 기업은 표준안의 채택 여부와 최종 내용을 확인할 필요가 있습니다. 현재는 의견수렴 단계입니다.",
    stage: "의견수렴",
    deadline: "2026-11-25",
  },
  "FR:2026-20075": {
    title_ko: "의료기기; 소화기·비뇨기 의료기기; 혈관 자가이식편용 상온 세척·보관 용액의 분류",
    summary_ko: "미국 FDA가 상온에서 쓰는 혈관 자가이식편용 세척·보관 용액(flushing and storage solution for vascular autografts at room temperature)을 2류(특별관리, special controls)로 분류하는 최종 명령을 공고했습니다. 시행일은 2026년 9월 30일입니다.",
    opportunity_reason: "미국에 해당 기기를 수출하는 기업은 2류 분류와 특별관리 항목(시행 2026-09-30)을 확인할 필요가 있습니다.",
    stage: "확정",
    deadline: "2026-09-30",
  },
  "FR:2026-19181": {
    title_ko: "의료기기 사전승인 신청서 전자제출 템플릿 안내서 초안 공개",
    summary_ko: "미국 FDA가 의료기기 시판전승인신청서(PMA)의 전자제출 템플릿에 관한 안내서 초안(draft guidance)을 공개했습니다. CDRH·CBER에 일부 PMA와 PMA 보충서류를 전자제출하는 신청인에게 공개된 자료와 관련 콘텐츠를 소개하는 문서입니다. 의견마감은 2026년 11월 17일입니다.",
    opportunity_reason: "미국에 의료기기를 수출하는 기업은 안내서 초안의 최종 확정 여부와 전자제출 자료를 확인할 필요가 있습니다. 안내서는 일반적으로 법적 구속력이 없는 권고입니다.",
    stage: "의견수렴",
    deadline: "2026-11-17",
  },
  "EPING:120513": {
    title_ko: "EU, 인화알루미늄(aluminium phosphide) 살생물제품 승인 만료일 연장 결정 폐지안",
    summary_ko: "EU 집행위원회가 인화알루미늄(aluminium phosphide releasing phosphine)의 살생물제품 PT 14·18·20 승인 만료일을 연장한 결정(Implementing Decision (EU) 2025/2279)을 폐지하는 결정안(Draft Commission Implementing Decision)을 통보했습니다. 채택 예정은 2027년 2월, 시행은 EU 관보 게재 20일 후이며 의견마감은 2026년 12월 5일입니다.",
    opportunity_reason: "해당 물질을 쓰는 살생물제품을 EU에 수출하는 기업은 결정안의 확정 여부와 승인 갱신 내용을 확인할 필요가 있습니다.",
    stage: "의견수렴",
    deadline: "2026-12-05",
    staleArticleBefore: STALE_CUTOFF,
  },
  "EPING:120331": {
    title_ko: "EU, 인화마그네슘 살생물제품(PT 18) 활성물질 승인 갱신 시행규정안",
    summary_ko: "EU 집행위원회가 인화마그네슘(magnesium phosphide releasing phosphine)을 살생물제품 PT 18 활성물질로 일정 조건 하에 승인 갱신하는 시행규정안(Draft Commission Implementing Regulation, G/TBT/N/EU/1240)을 통보했습니다. 규정안 단계이며 채택 예정은 2027년 2월, 시행은 EU 관보 게재 20일 후, 의견마감은 2026년 11월 29일입니다.",
    opportunity_reason: "해당 물질을 쓰는 살생물제품을 EU에 수출하는 기업은 규정안의 확정 여부와 승인 조건을 확인할 필요가 있습니다.",
    stage: "의견수렴",
    deadline: "2026-11-29",
    staleArticleBefore: STALE_CUTOFF,
  },
  "EPING:120303": {
    title_ko: "위험물질: ASME 코드 제12편과 전미 보일러 검사규정(NBIC) 도입",
    summary_ko: "미국 관로·위험물안전청(PHMSA)이 위험물 규정(HMR)에 ASME 보일러·압력용기 코드 Section XII(2015판)와 전미 보일러·압력용기 검사관협회 검사규정(NBIC) Parts 2·3(2015판, Supplement 6 포함)을 인용 편입하고, 운송용 탱크(탱크로리·극저온 이동식 탱크·다중 탱크차 등)의 제작과 계속 사용에 쓸 수 있도록 허용하는 최종 규정(Final rule)을 공표했습니다. 시행일은 2026년 10월 28일이며 자발적 준수일은 2026년 9월 28일입니다.",
    opportunity_reason: "미국에 위험물 운송용 탱크를 수출·공급하는 기업은 시행일(2026-10-28) 이후 적용되는 인용 규격 내용을 확인할 필요가 있습니다.",
    stage: "확정",
    deadline: "2026-10-28",
    staleArticleBefore: STALE_CUTOFF,
  },
  // 맥3 JSON 에는 없으나 구 기사 잔존(생수박버터·빌리소디컬 등 오역 고유명사)이 확인된 항목 — KV 의 title/summary 는 이미 맞다.
  "EPING:120326": { staleArticleBefore: STALE_CUTOFF },
  // INHEGA-NEWS-FIX-3 — 맥3 RW-NEWS-REGEN(10-27 22시대)에서 가드 거부(원문에 없는 의무 서술·단계 과장·한자 잔존)로
  // 구 기사가 남은 항목. title/summary/reason/stage/deadline 은 KV 값(= 맥3 JSON 정정값)을 그대로 쓰고 본문만 기본 기사로.
  "EPING:120276": { staleArticleBefore: STALE_CUTOFF },
  "EPING:120228": { staleArticleBefore: STALE_CUTOFF },
  "EPING:120001": { staleArticleBefore: STALE_CUTOFF },
  "EPING:120663": { staleArticleBefore: STALE_CUTOFF },
  "EPING:120920": { staleArticleBefore: STALE_CUTOFF },
  "EPING:120788": { staleArticleBefore: STALE_CUTOFF },
  "EPING:120787": { staleArticleBefore: STALE_CUTOFF },
  "EPING:120560": { staleArticleBefore: STALE_CUTOFF },
  "EPING:120489": { staleArticleBefore: STALE_CUTOFF },
  "EPING:120332": { staleArticleBefore: STALE_CUTOFF },
  // 제목·요약의 괄호 한자 원어(要指導醫藥品·省令)는 빼고 한글 표기만 둔다 — 그 밖의 문구는 맥3 정정값 그대로.
  "EGOV:44e02535": {
    title_ko: "일본 후생노동대신 지정 요지도의약품 일부개정안 의견모집",
    staleArticleBefore: STALE_CUTOFF,
  },
  "EGOV:cb3045ec": { staleArticleBefore: STALE_CUTOFF },
  "EGOV:3689f5e1": {
    title_ko: "일본 의약품의료기기등법 일부개정법 시행에 따른 후생노동성 관계 성령 정비안 의견모집",
    summary_ko: "일본 후생노동성이 의약품의료기기등법 등을 일부 개정하는 법률의 일부 시행에 따라 후생노동성 관계 성령을 정비하는 성령안(관련 조문: 법 제14조의2 제3항, 제36조의3 제1항·제2항 등)에 대한 의견을 모집합니다. 의견마감은 2026년 11월 14일입니다.",
    staleArticleBefore: STALE_CUTOFF,
  },
  "EGOV:2d9f6cf0": { staleArticleBefore: STALE_CUTOFF },
  "FR:2026-20725": { staleArticleBefore: STALE_CUTOFF },
  "FR:2026-20441": { staleArticleBefore: STALE_CUTOFF },
  "FR:2026-20443": { staleArticleBefore: STALE_CUTOFF },
}
