/**
 * 사람이 원문(WTO 통보문 PDF 등)과 대조해 정정한 뉴스 항목 — 읽을 때 KV 값 위에 덮는다.
 *
 * 왜 KV 가 아니라 코드인가(INHEGA-AUDIT-1, 2026-10-27): 정정은 원래 수신 API 의 `_lock` 으로
 * 넣어야 하지만 맥4에는 NEWS_INGEST_TOKEN·KV 쓰기 권한이 없다. 그래서 표시 경로(readAllNews)에서만
 * 덮는다. 수집기가 같은 doc_key 를 옛 문구로 다시 보내도 화면은 이 값을 유지한다.
 * 저장 경로(upsert·delete)는 readStoredNews 로 원본을 읽으므로 KV 내용은 바꾸지 않는다.
 *
 * 키는 doc_key(예: 'EPING:120659'). article 은 기존 기사 위에 얕게 병합한다(sections·faq·keywords 는 통째 교체).
 */
import type { NewsArticle } from './news-article-schema'
import { basicArticle } from './news-basic-article'
import { NEWS_CORRECTIONS_RW2 } from './news-corrections-rw2'

export type NewsCorrection = {
  title_ko?: string
  summary_ko?: string
  product?: string
  stage?: string
  deadline?: string
  opportunity_reason?: string
  article?: Partial<NewsArticle>
  /** 이 시각(ISO) 이전에 생성된 구 기사는 정정 필드로 만든 기본 기사로 바꾼다. 이후 생성된 새 기사는 건드리지 않는다. */
  staleArticleBefore?: string
  /** 사람이 원문 대조로 정정한 시각(ISO). 표시용 updated_at(사이트맵 lastmod·dateModified)을 이 시각까지 올린다(INH-NEWS-TITLES 11-08). */
  corrected_at?: string
}

/**
 * 게시 부적합으로 목록·API·사이트맵·개별 페이지에서 내리는 항목(readAllNews 에서 제외, KV 는 그대로).
 * FR:2026-19164 — EPA 주간 환경영향평가서(EIS) 접수 목록 공지. 특정 품목·수출입 인허가 규제가 아니고
 * 단계·마감도 근거가 없다(맥3 원문 대조: 수출입 인허가 규제와 직접 관련 없음).
 */
export const UNPUBLISHED_DOC_KEYS: ReadonlySet<string> = new Set(['FR:2026-19164'])

export const NEWS_CORRECTIONS: Record<string, NewsCorrection> = {
  ...NEWS_CORRECTIONS_RW2,
  // ── INH-NEWS-TITLES(맥7 11-08 승인): QA1107 CAND 16건 + EPING:121171, 연방관보 API·WTO 통보문 원문 대조 ──
  // 원문 제목의 분류 꼬리표('Medical Devices; ○○ Devices;', '…; Guidance for Industry; Availability')를 세미콜론째 옮긴 제목.
  // 본문(기사)이 같은 결함 제목을 되풀이하면 staleArticleBefore 로 기본 기사, 본문이 멀쩡하면 article.h1·meta_title 만 덮는다.
  // URL·slug 는 그대로(404 금지).
  'FR:2026-22180': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 섬유성 폐질환 소견 의뢰용 영상의학 소프트웨어 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 섬유성 폐질환 관련 소견의 의뢰를 돕는 영상의학 소프트웨어(radiology software for referral of findings related to fibrotic lung disease)를 영상의학 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 해당 기기 유형에 적용되는 특별관리 항목이 명령에 명시되며, 시행일은 2026년 10월 30일입니다(분류 적용은 2024년 1월 12일부터).',
  },
  'FR:2026-22181': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 척수·경막외 시술용 척추 영상 시스템 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 척수·경막외 등 신경축 시술에 쓰는 척추 영상 시스템(spinal imaging system for neuraxial procedures)을 마취과 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 해당 기기 유형에 적용되는 특별관리 항목이 명령에 명시되며, 시행일은 2026년 10월 30일입니다(분류 적용은 2024년 1월 19일부터).',
  },
  'FR:2026-22182': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 일반판매(OTC)용 수면무호흡 위험 평가 기기 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 일반판매(OTC)용 수면무호흡 위험 평가 기기(over-the-counter device to assess risk of sleep apnea)를 마취과 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 해당 기기 유형에 적용되는 특별관리 항목이 명령에 명시되며, 시행일은 2026년 10월 30일입니다(분류 적용은 2024년 2월 6일부터).',
  },
  // 구 기사 본문에 생성 프롬프트(원문 자료 블록)가 새어 있었다 → 기본 기사.
  'FR:2026-22203': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 의약품·생물의약품 전달 기기의 필수 약물전달 성능 특성 가이드라인 개정 초안 공개',
    summary_ko:
      '미국 식품의약국(FDA)이 업계용 가이드라인 개정 초안 「의약품·생물의약품 전달용 기기의 필수 약물전달 성능 특성(Essential Drug Delivery Performance Characteristics for Devices Intended to Deliver Drugs and Biological Products)」을 공개했습니다. 2024년 7월 1일 공고된 초안 「필수 약물전달 출력(Essential Drug Delivery Outputs)」을 개정·대체하며, 약물전달 기기와 기기 구성품을 포함한 복합제품의 성능 정보·자료 작성 방법을 권고합니다. 의견 제출 마감은 2027년 1월 28일입니다.',
    staleArticleBefore: '2026-11-08T06:00:00.000Z',
  },
  'FR:2026-21516': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 처방의약품 사용 관련 소프트웨어 규제 고려사항 최종 가이드라인 공개',
    summary_ko:
      '미국 식품의약국(FDA)이 업계용 최종 가이드라인 「처방의약품 사용 관련 소프트웨어 규제 고려사항(Regulatory Considerations for Prescription Drug Use-Related Software)」을 공개했습니다. 의약품 스폰서가 처방의약품 또는 의약품 주도 의약품-기기 복합제품과 함께 배포하는 소프트웨어 출력물에 FDA의 의약품 표시(labeling) 권한을 어떻게 적용하는지 설명하며, 2023년 9월 19일 공개된 같은 제목의 초안을 확정한 것입니다.',
    staleArticleBefore: '2026-11-08T06:00:00.000Z',
  },
  'FR:2026-20725': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 조혈세포 농축 키트 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 조혈세포 농축 키트(hematopoietic cell enrichment kit)를 면역학·미생물학 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 해당 기기 유형에 적용되는 특별관리 항목이 명령에 명시되며, 시행일은 2026년 10월 9일입니다(분류 적용은 2023년 11월 6일부터).',
    staleArticleBefore: '2026-10-27T11:00:00Z',
  },
  'FR:2026-20726': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 일반판매(OTC)용 영아 맥박수·산소포화도 모니터 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 일반판매(OTC)용 영아 맥박수·산소포화도 모니터(infant pulse rate and oxygen saturation monitor for over-the-counter use)를 심혈관 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 해당 기기 유형에 적용되는 특별관리 항목이 명령에 명시되며, 시행일은 2026년 10월 9일입니다(분류 적용은 2023년 11월 8일부터).',
    staleArticleBefore: '2026-11-08T06:00:00.000Z',
  },
  'FR:2026-20727': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 가정 채취 검체로 성매개감염 비바이러스성 병원체 핵산을 검출하는 시스템 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 가정에서 채취한 검체로 성매개감염을 일으키는 비바이러스성 미생물의 핵산을 검출하는 시스템(system for detection of nucleic acid from non-viral microorganism(s) causing sexually transmitted infections using home-collected specimens)을 면역학·미생물학 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 시행일은 2026년 10월 9일입니다(분류 적용은 2023년 11월 15일부터).',
    article: {
      h1: '미국 FDA, 가정 채취 검체로 성매개감염 비바이러스성 병원체 핵산을 검출하는 시스템 2등급(특별관리) 분류',
      meta_title: '미국 FDA, 가정 채취 검체 성매개감염 핵산 검출 시스템 2등급(특별관리) 분류',
    },
  },
  'FR:2026-20630': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 APHIS, 절화 수입규정 개정 — 국화 흰녹병 관련 조항 삭제',
    summary_ko:
      '미국 농무부 동식물검역소(APHIS)가 신선 절화 수입규정에서 품목별 수입요건을 삭제해 농산물 수입요건 데이터베이스(ACIR)로 옮기고, 국화 흰녹병(Puccinia horiana, CWR) 발생국산 국화속(Chrysanthemum)·Leucanthemella·Nipponanthemum 절화의 수입 제한을 모두 없애는 최종 규칙을 공고했습니다. 시행일은 2026년 11월 9일입니다.',
    article: {
      h1: '미국 APHIS, 절화 수입규정 개정 — 국화 흰녹병 관련 조항 삭제',
      meta_title: '미국 APHIS, 절화 수입규정 개정 — 국화 흰녹병 관련 조항 삭제',
    },
  },
  'FR:2026-20440': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 비열·기계적 조직 절제용 집속초음파 시스템 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 비열·기계적 조직 절제용 집속초음파 시스템(focused ultrasound system for non-thermal, mechanical tissue ablation)을 일반·성형외과 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 해당 기기 유형에 적용되는 특별관리 항목이 명령에 명시되며, 시행일은 2026년 10월 6일입니다(분류 적용은 2023년 10월 6일부터).',
    article: {
      h1: '미국 FDA, 비열·기계적 조직 절제용 집속초음파 시스템 2등급(특별관리) 분류',
      meta_title: '미국 FDA, 비열·기계적 조직 절제용 집속초음파 시스템 2등급(특별관리) 분류',
    },
  },
  'FR:2026-20441': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 맥박산소측정 보조용 고산소증 모니터링 기기 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 맥박산소측정 보조용 고산소증 모니터링 기기(hyperoxia monitoring device adjunct to pulse oximetry)를 심혈관 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 해당 기기 유형에 적용되는 특별관리 항목이 명령에 명시되며, 시행일은 2026년 10월 6일입니다(분류 적용은 2023년 10월 12일부터).',
    staleArticleBefore: '2026-10-27T11:00:00Z',
  },
  'FR:2026-20443': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 유전성 암 소인 평가용 고처리량 DNA 시퀀싱 검사 시스템 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 유전성 암 소인 평가용 고처리량 DNA 시퀀싱 검사 시스템(high throughput DNA sequencing for hereditary cancer predisposition assessment test system)을 면역학·미생물학 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 해당 기기 유형에 적용되는 특별관리 항목이 명령에 명시되며, 시행일은 2026년 10월 6일입니다(분류 적용은 2023년 9월 29일부터).',
    staleArticleBefore: '2026-10-27T11:00:00Z',
  },
  'FR:2026-20448': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 일부 2등급 임상독성 검사 시스템 시판전신고(510(k)) 면제',
    summary_ko:
      '미국 식품의약국(FDA)이 일부 2등급 임상독성 검사 시스템(certain clinical toxicology test systems)을 일정 제한 아래 시판전신고(510(k)) 대상에서 면제하는 최종 명령을 공고하고, 연방규정집(CFR)의 해당 분류 조문을 고쳤습니다. 면제는 즉시 효력이 있으며 시행일은 2026년 10월 6일입니다.',
    article: {
      h1: '미국 FDA, 일부 2등급 임상독성 검사 시스템 시판전신고(510(k)) 면제',
      meta_title: '미국 FDA, 일부 2등급 임상독성 검사 시스템 시판전신고(510(k)) 면제',
    },
  },
  'FR:2026-20075': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 상온 혈관 자가이식편 세척·보관 용액 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 상온에서 쓰는 혈관 자가이식편 세척·보관 용액(flushing and storage solution for vascular autografts at room temperature)을 소화기·비뇨기 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 해당 기기 유형에 적용되는 특별관리 항목이 명령에 명시되며, 시행일은 2026년 9월 30일입니다(분류 적용은 2023년 10월 4일부터).',
    opportunity_reason: '미국에 해당 기기를 수출하는 기업은 2류 분류와 특별관리 항목(시행 2026-09-30)을 확인할 필요가 있습니다.', // RW2 값 유지
    stage: '확정',
    deadline: '2026-09-30',
    staleArticleBefore: '2026-11-08T06:00:00.000Z',
  },
  'FR:2026-19074': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 FDA, 영상의학 컴퓨터 보조 검출·진단 기기와 컴퓨터 보조 분류·알림 기기 시판전신고 일부 면제',
    summary_ko:
      '미국 식품의약국(FDA)이 영상의학 컴퓨터 보조 검출·진단 기기(computer-aided detection and/or diagnosis devices)와 컴퓨터 보조 분류·알림 기기(computer-aided triage and notification devices)의 시판전신고(510(k)) 일부 면제 청원(2025년 12월 29일 연방관보 공고)에 대한 최종 결정을 명령으로 공고했습니다. 시행일은 2026년 9월 17일입니다.',
    article: {
      h1: '미국 FDA, 영상의학 컴퓨터 보조 검출·진단 기기와 컴퓨터 보조 분류·알림 기기 시판전신고 일부 면제',
      meta_title: '미국 FDA, 영상의학 컴퓨터 보조 검출·진단·분류 기기 시판전신고 일부 면제',
    },
  },
  'FR:2026-19177': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 농무부, 북동부 등 연방 우유 유통명령의 통일 가격 산정 규정 정정',
    summary_ko:
      '미국 농무부 농산물유통청(AMS)이 11개 연방 우유 유통명령(FMMO)의 가격 규정을 개정한 2025년 1월 17일 최종 규칙을 정정하는 규칙을 공고했습니다. 오하이오주 모건 카운티(Morgan County)의 1등급(Class I) 가격차를 바로잡고, 사우스다코타주 섀넌 카운티(Shannon County)를 1등급 가격차 표에서 삭제합니다. 시행일은 2026년 9월 18일입니다.',
    staleArticleBefore: '2026-11-08T06:00:00.000Z',
  },
  // WTO G/TBT/N/USA/2289/Add.2(2026-11-06) = 연방관보 2026-22576 최종 규칙. 'Significant New Use Rules(SNUR)'를
  // '중요한 신용 사용 규칙'으로 오역, 본문 전체가 같은 오역을 되풀이 → 기본 기사.
  'EPING:121171': {
    corrected_at: '2026-11-08T06:40:00.000Z',
    title_ko: '미국 EPA, 특정 화학물질에 대한 중요 신규 사용 규칙(SNUR) 최종 공표(25-3.5e)',
    summary_ko:
      '미국 환경보호청(EPA)이 독성물질관리법(TSCA)에 따라 제조전신고(PMN) 대상이면서 TSCA 명령(Order)을 받은 특정 화학물질에 대해 중요 신규 사용 규칙(SNUR)을 최종 공표했습니다. 중요 신규 사용으로 지정된 활동을 위해 해당 물질을 제조(수입 포함)하거나 가공하려는 자는 시작 최소 90일 전에 EPA에 신고해야 하며, EPA가 신고를 검토·결정하기 전에는 그 활동을 시작할 수 없습니다. 연방관보 게재일은 2026년 11월 5일, 시행일은 2027년 1월 4일입니다(WTO 통보 G/TBT/N/USA/2289/Add.2).',
    staleArticleBefore: '2026-11-08T06:00:00.000Z',
  },
  // ── QA1107-INHEGA #1(맥6 실측 11-07): 제목 오역·세미콜론 꼬리표, 연방관보 API 원문 대조(11-08) ──
  // 'Unleashing the Power of Unlicensed Ultra-Wideband Devices; Petition of Robert Bosch LLC …'(FCC, Proposed rule)
  // 을 'ula 밴드 …'로 잘라 옮겼다. 단계 '초안'·마감 빈칸도 원문(의견 2026-12-02, 반론 2027-01-04)과 달랐다.
  'FR:2026-22337': {
    title_ko: '미국 FCC, 초광대역(UWB) 기술 발전에 따른 무선기기 규칙 개정 제안',
    product: '초광대역(UWB) 무선기기',
    stage: '의견수렴',
    deadline: '2026-12-02',
    summary_ko:
      '미국 연방통신위원회(FCC)가 2002년에 처음 채택한 초광대역(UWB) 기기 규칙(Part 15 Subpart F)을 그동안의 기술 발전에 맞게 고치는 규칙 개정안을 공고했습니다. 로버트 보쉬(Robert Bosch LLC)와 자동차혁신연합(Alliance for Automotive Innovation) 등의 개정 청원을 함께 다룹니다. 의견 제출 마감은 2026년 12월 2일, 반론 의견 마감은 2027년 1월 4일입니다.',
    opportunity_reason:
      '미국에 UWB 기능이 들어간 위치 추적기·차량용 기기·스마트 기기를 수출하는 기업은 개정안의 기술 기준 변화가 FCC 장비 인증에 미치는 영향을 확인할 필요가 있습니다.',
    staleArticleBefore: '2026-11-08T05:00:00.000Z',
  },
  // FDA 분류 명령 4건 — 원문 제목의 분류 꼬리표('Medical Devices; ○○ Devices;')를 세미콜론째 옮겼다.
  'FR:2026-22589': {
    title_ko: '미국 FDA, 정형외과용 웨어러블 진동기기 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 정형외과용 웨어러블 진동기기(wearable vibration device for orthopedic use)를 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 해당 기기 유형에 적용되는 특별관리 항목이 명령에 명시되며, 시행일은 2026년 11월 5일입니다.',
    staleArticleBefore: '2026-11-08T05:00:00.000Z',
  },
  'FR:2026-22590': {
    stage: '확정',
    deadline: '2026-11-05', // 원문 'This order is effective November 5, 2026'
    title_ko: '미국 FDA, 경도인지장애 예후 평가 소프트웨어 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 경도인지장애 예후 평가 소프트웨어(prognostic assessment software of mild cognitive impairment)를 신경계 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 해당 기기 유형에 적용되는 특별관리 항목이 명령에 명시되며, 시행일은 2026년 11월 5일입니다.',
    staleArticleBefore: '2026-11-08T05:00:00.000Z',
  },
  'FR:2026-22593': {
    stage: '확정',
    deadline: '2026-11-05', // 원문 'This order is effective November 5, 2026'
    title_ko: '미국 FDA, 인공지능 자궁경부 세포검사 디지털 슬라이드 영상 시스템 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 인공지능 알고리즘을 쓰는 자궁경부 세포검사 디지털 슬라이드 영상 시스템(digital cervical cytology slide imaging system with artificial intelligence algorithm)을 혈액학·병리학 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 시행일은 2026년 11월 5일입니다.',
    staleArticleBefore: '2026-11-08T05:00:00.000Z',
  },
  'FR:2026-22179': {
    title_ko: '미국 FDA, 피부암 의심 병변용 소프트웨어 보조 진단기기 2등급(특별관리) 분류',
    summary_ko:
      '미국 식품의약국(FDA)이 의사가 피부암이 의심되는 병변에 쓰는 소프트웨어 보조 진단기기(software-aided adjunctive diagnostic device)를 일반·성형외과 기기 중 2등급(특별관리, special controls)으로 분류하는 최종 명령을 공고했습니다. 시행일은 2026년 10월 30일입니다.',
    staleArticleBefore: '2026-11-08T05:00:00.000Z',
  },
  // ── INHEGA-QA1102-FIX B-1(보스눈 11-02): 자동번역 오역·한자 혼입 재번역, 원문 대조 ──
  // garage door operators 를 '주차장 문 운반기'·'문장치기'로 오역. 연방관보 2026-22213(직접 최종규칙):
  // 시행 2026-12-29, 중대한 반대 의견 마감 2026-11-30 — '확정' 단계의 날짜는 시행일로 둔다.
  'EPING:121024': {
    title_ko: '미국 CPSC, 차고문 자동개폐기 안전기준 개정(직접 최종규칙)',
    product: '차고문 자동개폐기',
    stage: '확정',
    deadline: '2026-12-29',
    summary_ko: '미국 소비자제품안전위원회(CPSC)가 UL 325 표준의 2025년 10월 끼임 방지 조항 개정을 반영해 차고문 자동개폐기 의무 안전기준을 고치는 직접 최종규칙을 공고했습니다. 2026년 11월 30일까지 중대한 반대 의견이 접수되지 않으면 2026년 12월 29일부터 시행됩니다.',
    opportunity_reason: '미국에 차고문 자동개폐기를 수출하는 기업은 개정된 UL 325 끼임 방지 조항 충족 여부와 시험 성적을 확인할 필요가 있습니다.',
    staleArticleBefore: '2026-11-04T00:00:00.000Z',
  },
  'FR:2026-22213': {
    title_ko: '미국 CPSC, 차고문 자동개폐기 안전기준 개정(직접 최종규칙)',
    product: '차고문 자동개폐기',
    stage: '확정',
    deadline: '2026-12-29',
    summary_ko: '미국 소비자제품안전위원회(CPSC)가 UL 325 표준의 2025년 10월 끼임 방지 조항 개정을 반영해 차고문 자동개폐기 의무 안전기준을 고치는 직접 최종규칙을 공고했습니다. 2026년 11월 30일까지 중대한 반대 의견이 접수되지 않으면 2026년 12월 29일부터 시행됩니다.',
    opportunity_reason: '미국에 차고문 자동개폐기를 수출하는 기업은 개정된 UL 325 끼임 방지 조항 충족 여부와 시험 성적을 확인할 필요가 있습니다.',
  },
  // 제목·요약·품목이 중국어로 흘렀다. 연방관보 2026-21963(EPA 최종규칙, 시행 2026-11-27) 대조.
  'EPING:120964': {
    title_ko: '미국 EPA, 복합목재제품 포름알데히드 방출기준의 인용 표준 갱신(최종규칙)',
    product: '복합목재제품(합판·파티클보드·MDF 등)',
    stage: '확정',
    deadline: '2026-11-27',
    summary_ko: '미국 환경보호청(EPA)이 독성물질관리법(TSCA)에 따른 복합목재제품 포름알데히드 방출기준에서 인용하는 자율 합의 표준을 개정·대체된 최신판으로 바꾸는 최종규칙을 공고했습니다. 주로 시험방법과 제품 표준이 갱신되고, 소형 품질관리 챔버 시험방법이 새로 인용됩니다. 시행일은 2026년 11월 27일입니다.',
    opportunity_reason: '미국에 복합목재제품이나 이를 쓴 완제품을 수출하는 기업은 시험·품질관리에 쓰는 표준 판이 바뀌었는지 확인할 필요가 있습니다.',
  },
  // 'Radio Act'를 '라디오법'으로 직역, 품목 영문 괄호가 'microwave ove' 로 잘림. ePing G/TBT/N/JPN/887/Add.1
  // (2026-10-30 배포) 품목: 산업용 가열장치·전자레인지·전기수술기(radio knife)·MRI·유도가열로·초음파 세척기.
  // 요약의 '11월 2일부터 적용'은 원문(로그인 필요) 확인이 안 돼 날짜를 빼고 원문 확인으로 둔다.
  'EPING:120980': {
    title_ko: '일본, 전파법 시행규칙 등 일부개정 WTO 추가 통보(고주파 이용설비)',
    product: '고주파 이용설비(산업용 가열장치·전자레인지·전기수술기·MRI 등)',
    stage: '확정',
    deadline: '',
    summary_ko: '일본이 국제표준 CISPR 11 을 반영한 전파법 시행규칙 등 일부개정(G/TBT/N/JPN/887, 2025년 11월 통보)에 관한 추가 통보를 2026년 10월 30일 WTO에 배포했습니다. 대상은 산업용 가열장치, 전자레인지, 전기수술기, MRI, 유도가열로, 초음파 세척기 등 고주파 이용설비입니다. 시행 일정은 원문 통보문에서 확인해야 합니다.',
    opportunity_reason: '일본에 고주파 이용설비를 수출하는 기업은 개정된 CISPR 11 기준에 맞는 전자파 적합성 시험이 필요한지 확인할 필요가 있습니다.',
  },
  // 품목·제목의 일본어 원어 괄호 제거(한자 게이트).
  'EGOV:22a624f9': { product: '모의비행장치' },
  'EGOV:e39d31cc': { title_ko: '일본 후생노동대신 지정 요지도의약품 일부개정안 의견모집' },
  // G/TBT/N/CHN/2365(2026-10-22): lighters 를 '촛불'로 오역, 채택·시행일 미정인데 '수출할 수 없다' 단정,
  // 중국 시험·신고 대행 서술 — 원문 4·5·6·9·10항 기준으로 정정.
  'EPING:120659': {
    title_ko: '중국, 라이터 안전기준 국가표준안 WTO 통보 — 의견수렴 단계',
    product: '라이터(궐련·엽궐련·파이프용) (cigarette lighters, cigar lighters and pipe lighters)',
    stage: '의견수렴',
    deadline: '2026-12-21',
    opportunity_reason: '중국에 라이터를 수출하는 기업은 표준안 채택 여부와 최종 내용을 확인할 필요가 있습니다. 현재는 의견수렴 단계입니다.',
    summary_ko:
      '중국 국가시장감독관리총국(국가표준화관리위원회)이 궐련·엽궐련·파이프용 라이터의 안전 요구사항을 정한 국가표준안을 WTO에 통보했습니다. 의견 제출 마감은 2026년 12월 21일이며, 채택일과 시행일은 아직 정해지지 않았습니다.',
    article: {
      meta_title: '중국 라이터 안전기준 국가표준안 통보 — 의견수렴 단계',
      meta_description:
        '중국이 궐련·엽궐련·파이프용 라이터 안전기준 국가표준안을 WTO에 통보했습니다. 의견 마감은 2026년 12월 21일이고 채택일·시행일은 미정입니다. 대상 품목과 단계를 확인하세요.',
      h1: '중국, 라이터 안전기준 국가표준안 통보(의견수렴)',
      lead:
        '중국 국가시장감독관리총국(국가표준화관리위원회)이 라이터의 안전 요구사항을 정한 국가표준안 「라이터—안전 규격」을 WTO 기술무역장벽(TBT) 위원회에 통보했습니다. 현재는 의견을 받는 단계이며, 의견 제출 마감은 2026년 12월 21일입니다. 채택 예정일과 시행 예정일은 통보문에 "추후 결정"으로 적혀 있습니다.',
      sections: [
        {
          h2: '무엇이 바뀌나',
          body: [
            '통보된 국가표준안은 사용자가 정상적으로 쓰거나 합리적으로 예상할 수 있는 방식으로 잘못 쓰는 경우에도 합리적인 수준의 안전을 확보하도록 라이터에 대한 요구사항을 정합니다. 통보 목적은 기만 행위 방지와 소비자 보호, 사람의 건강·안전 보호, 품질 요건입니다.',
            '아직 채택되지 않은 안이므로, 지금 바로 적용되는 수출 요건은 아닙니다. 최종 표준의 내용과 적용 시점은 채택 후 공표되는 원문으로 확인해야 합니다.',
          ],
        },
        {
          h2: '적용 대상·범위·일정',
          body: [
            '대상은 궐련·엽궐련·파이프용 라이터로 통칭되는 불꽃을 내는 모든 제품입니다(HS 961310·961320·961380). 성냥과, 궐련·엽궐련·파이프가 아닌 다른 물질에 불을 붙이는 점화기구에는 적용되지 않습니다.',
            '의견 제출 마감은 2026년 12월 21일(통보일부터 60일)입니다. 채택 예정일과 시행 예정일은 정해지지 않았습니다.',
          ],
        },
        {
          h2: '한국 기업·수출업체에 미치는 영향',
          body: [
            '중국에 라이터를 수출하는 기업은 표준안이 채택될 경우 제품 설계·시험 대응이 필요할 수 있습니다. 다만 현재는 의견수렴 단계이고 시행일이 정해지지 않았으므로, 구체적인 의무와 시점은 최종 표준이 공표된 뒤 확인해야 합니다.',
            '표준안 원문(중국어, 27쪽)은 통보문에 적힌 WTO 문서 링크에서 받을 수 있고, 의견은 중국 WTO/TBT 국가통보·문의센터로 제출합니다.',
          ],
        },
        {
          h2: '지금 확인할 것',
          body: [
            '자사 제품이 대상 품목(궐련·엽궐련·파이프용 라이터, HS 961310·961320·961380)에 해당하는지 확인합니다.',
            '표준안 원문을 받아 현재 제품 사양과 차이가 있는지 검토하고, 의견이 있으면 2026년 12월 21일까지 제출합니다.',
            '채택일·시행일 공표 여부를 계속 확인합니다.',
          ],
        },
      ],
      faq: [
        {
          q: '이 기준은 어떤 제품에 적용되나요?',
          a: '궐련·엽궐련·파이프용 라이터로 통칭되는 불꽃을 내는 모든 제품(HS 961310·961320·961380)이 대상입니다. 성냥과 다른 물질용 점화기구는 제외됩니다.',
        },
        {
          q: '언제부터 적용되나요?',
          a: '아직 정해지지 않았습니다. 통보문에는 채택 예정일과 시행 예정일이 모두 "추후 결정"으로 적혀 있으며, 현재는 2026년 12월 21일까지 의견을 받는 단계입니다.',
        },
        {
          q: '지금 기준을 충족하지 못하면 수출할 수 없나요?',
          a: '현재는 채택 전 의견수렴 단계라 이 표준안이 바로 수출 요건이 되지는 않습니다. 채택·시행 일정이 공표되면 그때의 최종 내용을 기준으로 대응 여부를 판단해야 합니다.',
        },
      ],
      keywords: ['중국 라이터 안전기준', 'WTO TBT 통보', 'G/TBT/N/CHN/2365', '라이터 수출', '의견수렴'],
    },
  },

  // G/TBT/N/USA/2043/Add.3(2026-10-26): 발표기관을 '국토교통안전공단'·PHMSA 로 혼용, 의견마감 연장을
  // '확정' 단계로 분류, 통보문에 없는 HS 코드·의무 제출·시험 요구를 서술 — 원문 기준으로 정정.
  'EPING:120884': {
    title_ko: '미국 NHTSA, THOR-50M 충돌시험 인체모형 규정안 의견마감 11월 21일로 연장',
    product: '자동차 충돌시험용 인체모형(THOR-50M) (anthropomorphic test devices)',
    stage: '의견수렴',
    deadline: '2026-11-21',
    opportunity_reason: '충돌시험 관련 자동차·부품 기업은 마감 전 의견 제출 여부를 검토할 수 있습니다. 규정은 아직 제안 단계입니다.',
    summary_ko:
      '미국 도로교통안전국(NHTSA)이 THOR-50M 충돌시험 인체모형에 관한 보완 규정안(SNPRM)의 의견 제출 기간을 30일 연장했습니다. 마감은 2026년 10월 22일에서 11월 21일로 바뀌었고, 규정은 아직 제안 단계입니다.',
    article: {
      meta_title: '미국 THOR-50M 인체모형 규정안 의견마감 연장(11월 21일)',
      meta_description:
        '미국 NHTSA가 THOR-50M 충돌시험 인체모형 보완 규정안의 의견 제출 기간을 2026년 11월 21일까지 30일 연장했습니다. 아직 제안 단계이며 확정된 규정이 아닙니다.',
      h1: '미국 THOR-50M 인체모형 규정안 의견마감 연장',
      lead:
        '미국 도로교통안전국(NHTSA)이 자동차혁신연합(Alliance for Automotive Innovation)의 요청에 따라, 2026년 9월 22일 공고한 THOR-50M 보완 규정안(SNPRM)의 의견 제출 기간을 30일 연장했습니다. 마감은 2026년 10월 22일에서 11월 21일로 바뀌었습니다. 규정이 확정된 것이 아니라 의견을 받는 기간이 늘어난 것입니다.',
      sections: [
        {
          h2: '무엇이 바뀌나',
          body: [
            'NHTSA는 2023년 9월 규정안으로 첨단 충돌시험 인체모형 THOR-50M(성인 남성 50백분위)을 규정(미국 연방규정 49 CFR Part 572)에 추가하는 방안을 제안했습니다. 2026년 9월 22일 보완 규정안은 추가 척추(spine) 구성과 얼굴 폼(face foam) 대체안을 정하는 데 대한 의견을 구하고 추가 자료를 공개했습니다.',
            '이번 통보는 그 보완 규정안의 의견 제출 기간만 2026년 11월 21일까지 연장한 것입니다. 규정의 채택이나 시행을 알리는 내용은 없습니다.',
          ],
        },
        {
          h2: '적용 대상·범위·일정',
          body: [
            '대상은 자동차 충돌시험에 쓰는 인체모형(시험장치) 규정입니다. 관련 문서와 접수된 의견은 Regulations.gov 의 Docket NHTSA-2023-0031 에서 볼 수 있습니다.',
            'WTO 회원국과 이해관계자는 2026년 11월 21일 미국 동부시간 오후 4시까지 미국 TBT 문의처에 의견을 낼 수 있습니다.',
          ],
        },
        {
          h2: '한국 기업·수출업체에 미치는 영향',
          body: [
            '현재는 제안 단계라 한국 기업에 바로 생기는 의무는 없습니다. 충돌시험·안전 인증과 관련된 자동차·부품 기업은 최종 규정이 나오면 시험 방법이 어떻게 정해지는지 확인하고, 의견이 있으면 마감 전에 제출할 수 있습니다.',
          ],
        },
        {
          h2: '지금 확인할 것',
          body: [
            'Docket NHTSA-2023-0031 에서 보완 규정안과 추가 자료를 확인합니다.',
            '의견을 내려면 2026년 11월 21일 미국 동부시간 오후 4시 전에 제출합니다.',
            '최종 규정 공표 여부를 계속 확인합니다.',
          ],
        },
      ],
      faq: [
        {
          q: '의견 마감은 언제인가요?',
          a: '2026년 11월 21일 미국 동부시간 오후 4시입니다. 원래 마감은 2026년 10월 22일이었고 30일 연장되었습니다.',
        },
        {
          q: '이번 통보로 규정이 확정되었나요?',
          a: '아닙니다. 보완 규정안의 의견 제출 기간을 연장한 것이며, 규정의 채택·시행 일정은 통보되지 않았습니다.',
        },
        {
          q: '발표 기관은 어디인가요?',
          a: '미국 교통부 산하 도로교통안전국(NHTSA)입니다.',
        },
      ],
      keywords: ['THOR-50M', 'NHTSA', '49 CFR Part 572', 'WTO TBT 통보', '의견마감 연장'],
    },
  },
}

/** KV 에서 읽은 항목에 정정을 덮는다. 정정이 없으면 같은 객체를 돌려준다. */
export function applyNewsCorrection<T extends { doc_key: string; article: NewsArticle | null } & Parameters<typeof basicArticle>[0]>(item: T): T {
  const c = NEWS_CORRECTIONS[item.doc_key]
  if (!c) return item
  const { article, staleArticleBefore, corrected_at, ...fields } = c
  const bumped = corrected_at && 'updated_at' in item && String((item as { updated_at?: string }).updated_at || '') < corrected_at
  const merged: T = {
    ...item,
    ...fields,
    ...(bumped ? { updated_at: corrected_at } : {}),
    article: item.article && article ? { ...item.article, ...article } : item.article,
  }
  if (staleArticleBefore && merged.article && (merged.article.generated_at || '') < staleArticleBefore) {
    return { ...merged, article: basicArticle(merged) }
  }
  return merged
}

/** CJK 통합한자(확장 A·호환 포함). 한글 기사 키워드에 모델이 흘린 중국어·일본어 원어(예: 意见提交截止日期)를 걸러낸다. */
const HAN = /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/

/** 표시용 — 한자가 섞인 keywords 를 뺀다(INHEGA-NEWS-FIX-3). 걸러낼 것이 없으면 같은 객체를 돌려준다. */
export function dropHanKeywords<T extends { article: NewsArticle | null }>(item: T): T {
  const kw = item.article?.keywords
  if (!kw || !kw.some((k) => HAN.test(k))) return item
  return { ...item, article: { ...item.article!, keywords: kw.filter((k) => !HAN.test(k)) } }
}
