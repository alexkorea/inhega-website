// inhega 일일 블로그 — 보스 영구지침 확정 주제 풀(18개).
//
// 출처: NAS `directives/inhega-블로그-발행지침서-v1.0.md` 제2장 2-1
//   "확정 풀(18개, 이것만 작성가능)"
// 이 목록 밖의 주제는 작성·발행 금지다(지침서 2-2 추가후보는 보스 승인 전 금지).
// 여기 배열을 늘리려면 보스 승인 문서를 근거로 커밋 메시지에 남길 것.
//
// slugStems: 그 주제의 글 슬러그가 시작해야 하는 접두어 목록.
//   지침서 제4장 "키워드앞" 규칙을 기계 검증하고, 기존 라이브 글의 주제 귀속을
//   판정(=로테이션 최근사용일 산출)하는 데도 쓴다.
// service: /services/<slug> 내부링크 대상(지침서 제5장 내부링크 규칙).

export const POOL = [
  { key: 'license-agency',       kw: '인허가대행',            service: null,                   slugStems: ['administrative-license-agency', 'administrative-license-permit', 'yongdo-byeongyeong-haengjengsa'] },
  { key: 'license-scrivener',    kw: '인허가행정사',          service: null,                   slugStems: ['administrative-scrivener', 'license-scrivener'] },
  { key: 'logistics',            kw: '국제물류주선업등록',    service: 'logistics',            slugStems: ['international-logistics', 'freight-forwarder', 'forwarder'] },
  { key: 'currency-exchange',    kw: '환전업등록',            service: 'currency-exchange',    slugStems: ['currency-exchange'] },
  { key: 'urban-guesthouse',     kw: '외국인도시민박업등록',  service: 'urban-guesthouse',     slugStems: ['urban-guesthouse', 'foreigner-urban-homestay', 'foreigner-homestay'] },
  { key: 'hostel',               kw: '호스텔업등록',          service: 'hostel',               slugStems: ['hostel'] },
  { key: 'building-usage',       kw: '건축물용도변경',        service: 'building-usage',       slugStems: ['building-usage-change', 'building-use-change'] },
  { key: 'food-manufacturing',   kw: '식품제조가공업허가',    service: 'food-manufacturing',   slugStems: ['food-manufacturing'] },
  { key: 'haccp',                kw: 'HACCP인증',             service: 'haccp',                slugStems: ['haccp'] },
  { key: 'venture-cert',         kw: '벤처기업인증',          service: 'venture-cert',         slugStems: ['venture'] },
  { key: 'innobiz',              kw: '이노비즈인증',          service: 'venture-cert',         slugStems: ['innobiz'] },
  { key: 'mainbiz',              kw: '메인비즈인증',          service: 'mainbiz',              slugStems: ['mainbiz'] },
  { key: 'research-lab',         kw: '기업부설연구소설립',    service: 'research-lab',         slugStems: ['corporate-research-lab', 'corporate-rnd-center', 'rnd-center', 'rnd-department'] },
  { key: 'nonprofit',            kw: '비영리사단법인설립',    service: 'nonprofit',            slugStems: ['nonprofit'] },
  { key: 'cosmetics-distributor',kw: '화장품책임판매업등록',  service: 'cosmetics',            slugStems: ['cosmetics'] },
  { key: 'quasi-drug',           kw: '의약외품허가',          service: 'cosmetics',            slugStems: ['quasi-drug'] },
  { key: 'procurement',          kw: '조달청나라장터등록',    service: 'procurement',          slugStems: ['procurement-narajangteo', 'narajangteo', 'g2b'] },
  { key: 'lbs',                  kw: '위치기반서비스사업신고', service: 'location-based-service', slugStems: ['location-based-service', 'location-information'] },
]

// 세부주제(angle) 카탈로그 — 슬러그 뒤에 붙는 "회차"를 숫자가 아니라 낱말로 표현한다.
// 지침서 제0장 X1(슬러그 날짜·연도 금지) + 제4장(자동번호 금지) 때문에
// `-2`, `-202609` 같은 회차 표기는 쓸 수 없다. 같은 주제의 n번째 글은
// 아래 세부주제 중 아직 안 쓴 것을 골라 그 낱말이 슬러그에 들어간다.
export const ANGLES = [
  { key: 'requirements',    ko: '요건·자격' },
  { key: 'documents',       ko: '구비서류' },
  { key: 'procedure',       ko: '신청 절차' },
  { key: 'period',          ko: '처리기간·법정수수료' },
  { key: 'change-report',   ko: '변경신고·변경등록' },
  { key: 'renewal',         ko: '갱신·주기적 신고' },
  { key: 'succession',      ko: '양도·양수·승계' },
  { key: 'penalties',       ko: '위반 시 제재' },
  { key: 'foreign',         ko: '외국인·외국법인 신청' },
  { key: 'rejection',       ko: '반려·보완 사례' },
  { key: 'post-management', ko: '사후관리 의무' },
  { key: 'comparison',      ko: '유사 제도 비교' },
  { key: 'checklist',       ko: '준비 체크리스트' },
]

export const POOL_KEYS = new Set(POOL.map((t) => t.key))
export const ANGLE_KEYS = new Set(ANGLES.map((a) => a.key))
export const topicByKey = (k) => POOL.find((t) => t.key === k)

/** 슬러그가 어느 주제에 속하는지 판정(접두어 최장일치). 풀 밖이면 null. */
export function topicOfSlug(slug) {
  let best = null
  let bestLen = 0
  for (const t of POOL) {
    for (const stem of t.slugStems) {
      if (slug === stem || slug.startsWith(stem + '-')) {
        if (stem.length > bestLen) { best = t; bestLen = stem.length }
      }
    }
  }
  return best
}
