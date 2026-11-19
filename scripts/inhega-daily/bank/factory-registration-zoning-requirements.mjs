// 원고 은행 — INHE-BANK-1119 담당 C(맥4 하위 작성, kind=seo3958, angle=requirements)
// 주제(풀): factory(공장등록) / 요건 질문: "이 땅·이 건물에서 공장등록이 되는지 무엇으로 판단하나?"
// 대표 검색어(안): '공장등록 조건' (SPEC 배정표, 1차 kw-sources NaverAC '공장등록조건'·'공장등록증 발급 조건') — 제목·메타제목 맨 앞.
//
// 겹침 검사: factory-registration-application-guide(신청 방법·5단계·처리기간 일반, 용도지역은 '사전 검토' 한 줄), factory-registration-leased-building(임차인 신청 자격·
//   500제곱미터 갈래·서류·7일/20일 — 용도지역·기준공장면적률은 '확인하라'는 한 문장), factory-fix(취소·처벌), factory-select(대행 선택)
//   → 용도지역별 공장 허용 범위, 건축물 용도(공장/제2종 근린생활시설 제조업소), 기준공장면적률 계산·예외, 입지 확인 신청을 요건 중심으로 다룬 글 없음.
//     신청 절차·서류·처리기간은 위 글로 링크만(본문에서 7일·20일 반복하지 않음).
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 로컬 사본 ~/work/inhebank-1119/law, 2026-11-19 수신):
//   산업집적활성화 및 공장설립에 관한 법률 MST 284369(2026. 9. 18. 시행) — 제8조 제1호·제2호(용도지역별 업종·규모, 기준공장면적률 고시), 제9조 제1항(지번별 공장설립 가능 여부 10일 이내 확인),
//     제11조 제1항(기준공장건축면적 적합)·제2항(미달 시 완료신고 반려), 제16조 제2항(승인 대상 외 공장 등록 신청), 제20조 제1항(과밀억제·성장관리·자연보전권역 500제곱미터 이상 신설·증설·이전·업종변경 제한)·제2항(예외 승인)
//   같은 법 시행령 MST 288883(2026. 9. 18. 시행) — 제2조 제1항(제조업=한국표준산업분류 제조업)·제2항 제4호(건축물 일부 임차 시 그 바닥면적을 공장부지로 봄),
//     제12조 제1항(입지기준 관계 법령: 건축법·국토계획법 등)·제2항·제3항(공장부지면적=수평투영면적, 공장건축물등 면적=각 층 바닥면적+옥외공작물 수평투영면적),
//     제14조 제1항(기준공장건축면적=공장부지면적×기준공장면적률)·제2항(승인일부터 4년 계획분), 제15조 제1호·제2호·제8호(녹지지역, 6미터 이상 도로, 임차 부지 건축 용지 적용 예외)
//   같은 법 시행규칙 MST 285509(2026. 4. 9. 시행) — 제12조 제1항(건축물대장 행정정보 확인)·제2항(건축법·국토계획법·대기·물환경·소음진동 등 관계 법령 기준과 기준공장면적률 적합 시 등록)
//   공장입지 기준고시(행정규칙 ID 2100000274928, 2026. 2. 25. 시행) — 제3조 제1항·제2항(별표 1 업종별 기준공장면적률, 2개 이상 업종 가중 계산), 제4조(지식산업센터 40퍼센트),
//     별표 1 면적률 값 3·5·7·10·12·15·20퍼센트(전수 집계)
//   국토의 계획 및 이용에 관한 법률 시행령 MST 288857(2026. 9. 18. 시행) — 제71조 제1항, 별표 2·별표 3(제1·2종 전용주거: 공장 없음), 별표 4 제2호 차목(제1종 일반주거: 조례로 인쇄·봉제·컴퓨터 조립·두부·세탁업 공장 등,
//     오염물질 배출 기준 해당 시 제외), 별표 12·13 제1호(전용·일반공업: 공장), 별표 14 제2호 자목(준공업: 바닥면적 5천제곱미터 이상 공장은 조례로 금지 가능), 별표 16 제2호 아목·별표 17 제2호 차목(생산·자연녹지: 조례로 도정·식품·첨단업종 공장 등),
//     별표 20 제1호 자목·차목(계획관리: 성장관리계획·지구단위계획 미수립 지역 공장 불가, 수립 지역도 업종 제한)
//   건축법 시행령 MST 291715(2026. 11. 12. 시행) — 별표 1 제4호 너목(제2종 근린생활시설 제조업소: 같은 건축물 500제곱미터 미만 + 배출시설 허가·신고 대상 아님 또는 폐수 전량 위탁), 제17호(공장)
// 인허가 구분: 공장등록 = '등록'(시장·군수·구청장, 산업단지는 관리기관). 500제곱미터 이상 신설 등은 공장설립등의 '승인'. 입지 확인은 '확인 신청'. 허가 아님.
// 확신 없어 뺀 것: 지자체별 도시·군계획조례의 실제 허용 업종(지역마다 다름 — 화면은 '조례로 정하는 범위'만), 공장입지 기준고시 별표 2(용도지역표 — 국토계획법 시행령 현행과 표현 차이가 있어 시행령 기준으로만 서술),
//   환경 배출시설 허가·신고 세부, 수도권 권역별 예외 허용 업종(시행령 제26조~제27조의2), 업종별 면적률 개별 값 예시(특정 업종 수치는 넣지 않음), 지식산업센터 입주 세부, 수수료(S4).

const SLUG = 'factory-registration-zoning-requirements'

const entry = {
  topic: 'factory',
  angle: 'requirements',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '공장등록 조건',
  source: { type: 'NaverAC', query: '공장등록조건' },
  pexelsId: 34718930,
  coverImage: '',
  relatedServices: [
    { title: '공장설립 승인·공장등록', href: '/services/factory' },
    { title: '건축물 용도변경', href: '/services/building-usage' },
  ],

  ko: {
    title: '공장등록 조건 — 용도지역·건축물 용도·기준공장면적률로 등록 가능 여부 보기',
    category: '건축/부동산',
    metaTitle: '공장등록 조건 — 용도지역·건물 용도·기준공장면적률 확인법',
    metaDescription: '공장등록은 제조업이면서 용도지역, 건축물 용도, 기준공장면적률이 관계 법령에 맞아야 됩니다. 용도지역별 공장 허용 범위와 면적률 계산, 미리 입지를 확인하는 방법을 정리했습니다.',
    excerpt: '공장등록이 되려면 한국표준산업분류상 제조업이어야 하고, 그 땅의 용도지역에서 해당 업종 공장이 허용되며, 건축물 용도가 공장 또는 제조업소이고, 공장건축면적이 업종별 기준공장면적률에 맞아야 합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>공장등록 조건 네 가지</li><li>용도지역별 공장 허용 범위</li><li>기준공장면적률 계산과 예외</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>공장등록이 되려면 하는 일이 한국표준산업분류상 제조업이어야 하고, 시장·군수·구청장이 건축법·국토의 계획 및 이용에 관한 법률·환경 관계 법령의 기준과 기준공장면적률에 맞는지 확인한 뒤 등록합니다. 실제로는 용도지역에서 그 업종 공장이 허용되는지, 건축물 용도가 공장이나 제조업소인지, 부지 대비 공장건축면적이 업종별 기준에 맞는지가 조건입니다.</strong><!-- 근거: 산업집적활성화 및 공장설립에 관한 법률 시행령 제2조 제1항, 시행규칙 제12조 제2항 --></p>
<p>신청 서류와 처리기간은 <a href="/blog/factory-registration-application-guide">공장등록 신청 방법과 처리기간</a>, 빌린 건물에서 등록하는 경우는 <a href="/blog/factory-registration-leased-building">임대 공장등록</a>에서 다룹니다.</p>

<h2>공장등록 조건 네 가지</h2>
<table><thead><tr><th>조건</th><th>확인 자료</th><th>걸리는 경우</th></tr></thead><tbody>
<tr><td>제조업 해당</td><td>사업계획서의 업종</td><td>판매·보관만 하고 제조·가공·조립·수리 시설이 없음</td></tr>
<tr><td>용도지역 허용</td><td>토지이용계획확인서</td><td>전용주거지역이거나 그 업종 공장을 허용하지 않는 지역</td></tr>
<tr><td>건축물 용도</td><td>건축물대장</td><td>공장이나 제2종 근린생활시설 제조업소가 아닌 용도</td></tr>
<tr><td>기준공장면적률</td><td>배치도·면적 산출</td><td>공장건축면적이 업종별 기준공장건축면적에 못 미침<!-- 근거: 법 제11조 제1항, 시행령 제2조 제2항 제1호, 시행규칙 제12조 제1항·제2항 --></td></tr>
</tbody></table>
<p>제2종 근린생활시설 제조업소는 같은 건축물에서 그 용도로 쓰는 바닥면적 합계가 500제곱미터 미만이고, 대기·물·소음 배출시설 허가나 신고 대상이 아니거나 폐수를 전량 위탁처리하는 시설이어야 합니다.<!-- 근거: 건축법 시행령 별표 1 제4호 너목 --> 공장에는 제조시설뿐 아니라 시험생산시설, 부지 안의 관리·복지 부대시설, 관계 법령에 따라 설치가 의무인 시설도 포함되고, 산업단지 안의 공장은 시장·군수·구청장 대신 관리기관이 등록을 맡습니다.<!-- 근거: 시행령 제2조 제2항 제1호~제3호, 법 제16조 제1항·제2항 --> 제조업소 범위를 넘으면 건축물 용도가 공장이어야 하므로 <a href="/services/building-usage">건축물 용도변경</a>을 먼저 검토합니다.</p>

<h2>용도지역별 공장 허용 범위</h2>
<table><thead><tr><th>용도지역</th><th>공장 건축</th></tr></thead><tbody>
<tr><td>제1종·제2종 전용주거지역</td><td>공장 불가</td></tr>
<tr><td>제1종 일반주거지역</td><td>도시·군계획조례로 인쇄업·봉제업·컴퓨터 조립·두부제조업·세탁업 공장 등 일부만, 오염물질 배출 기준에 걸리면 제외</td></tr>
<tr><td>전용공업·일반공업지역</td><td>공장 건축 가능</td></tr>
<tr><td>준공업지역</td><td>공장 가능, 바닥면적 합계 5천제곱미터 이상 공장은 조례로 막을 수 있음</td></tr>
<tr><td>생산녹지·자연녹지지역</td><td>조례로 도정공장·식품공장·첨단업종 공장 등 일부만</td></tr>
<tr><td>계획관리지역</td><td>성장관리계획·지구단위계획이 없는 곳은 공장 불가, 계획이 있어도 업종 제한<!-- 근거: 국토의 계획 및 이용에 관한 법률 시행령 제71조 제1항, 별표 2~별표 4, 별표 12~별표 14, 별표 16·별표 17, 별표 20 제1호 자목·차목 --></td></tr>
</tbody></table>
<p>수도권 과밀억제권역·성장관리권역·자연보전권역에서는 공장건축면적 500제곱미터 이상 공장의 신설·증설·이전·업종변경이 원칙적으로 제한되고, 예외에 해당할 때만 승인을 받아 진행합니다.<!-- 근거: 산업집적활성화 및 공장설립에 관한 법률 제20조 제1항·제2항 --> 조례는 지역마다 달라 같은 용도지역이라도 결과가 다를 수 있습니다.</p>

<h2>기준공장면적률 계산과 예외</h2>
<ol><li>공장부지면적은 부지의 수평투영면적으로 봅니다.</li><li>공장건축면적은 부지 안 건축물 각 층 바닥면적에 건물 밖 기계·장치 같은 옥외공작물의 수평투영면적을 더합니다.</li><li>공장부지면적에 업종별 기준공장면적률을 곱한 기준공장건축면적 이상이어야 합니다. 면적률은 업종에 따라 3%에서 20%이고, 지식산업센터는 40%입니다.<!-- 근거: 시행령 제14조 제1항, 공장입지 기준고시 제3조 제1항·별표 1(면적률 값 전수 집계), 제4조 --></li><li>두 업종 이상이면 업종별 건축면적 비중으로 가중해 계산합니다.<!-- 근거: 공장입지 기준고시 제3조 제2항 제2호 --></li><li>승인 대상 공장은 승인일부터 4년 안의 건축 계획분까지 포함합니다.<!-- 근거: 시행령 제12조 제2항·제3항, 제14조, 공장입지 기준고시 제3조·제4조·별표 1 --></li></ol>
<p>예를 들어 부지 1,000제곱미터에 면적률 15% 업종이면 공장건축면적이 150제곱미터 이상이어야 합니다. 녹지지역 용지, 6미터 이상 도로가 있는 용지, 공장부지를 임차한 자가 공장을 짓는 용지 등은 이 기준을 적용하지 않습니다.<!-- 근거: 시행령 제14조 제1항, 제15조 제1호·제2호·제8호 --> 건물 일부만 빌려 등록하는 공장은 빌린 부분의 바닥면적을 공장부지로 봅니다.<!-- 근거: 시행령 제2조 제2항 제4호 --></p>
<p>유선행정사사무소는 토지이용계획과 건축물대장을 먼저 대조해 등록 가능 여부를 판단하고, 면적 산출과 사업계획서 작성, 등록 신청까지 이어서 처리합니다. 진행 범위는 <a href="/services/factory">공장설립 승인·공장등록 안내</a>에서 확인하실 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 계약 전에 공장을 세울 수 있는 땅인지 미리 알 수 있나요?</p><p class="faq-a">A. 토지소유자나 이해관계인이 시장·군수·구청장에게 신청하면 10일 이내에 지번별로 공장설립이 가능한지 확인해 알려 줍니다.<!-- 근거: 법 제9조 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 기준공장면적률에 못 미치면 어떻게 되나요?</p><p class="faq-a">A. 승인을 받아 지은 공장이 완료신고 때 기준에 못 미치면 신고가 반려되고, 요건을 갖춰 다시 신고해야 합니다. 설계 단계에서 면적을 맞춰 두는 것이 안전합니다.<!-- 근거: 법 제11조 제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 용도지역은 맞는데 건물이 사무실 용도예요.</p><p class="faq-a">A. 건축물 용도도 관계 법령 기준에 들어가므로 공장이나 제조업소 용도로 바꾼 뒤 등록을 신청합니다. 용도변경이 가능한지는 그 용도지역의 건축 제한과 건물 구조를 함께 봅니다.</p></div>
</div>

<div class="cta-block"><h3>주소와 업종만 알려 주세요</h3><p>지번과 건물, 업종, 예정 면적을 알려 주시면 유선행정사사무소가 공장등록 조건에 맞는지와 먼저 풀어야 할 문제를 정리해 드립니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 산업집적활성화 및 공장설립에 관한 법률 제8조·제9조·제11조·제16조·제20조, 시행령 제2조·제12조·제14조·제15조, 시행규칙 제12조, 공장입지 기준고시 제3조·제4조, 국토의 계획 및 이용에 관한 법률 시행령 제71조, 건축법 시행령 별표 1 --></p>`,
  },

  en: {
    title: 'Factory Registration Requirements in Korea — Zoning, Building Use and Factory Area Ratio',
    category: 'Manufacturing',
    metaTitle: 'Factory Registration Requirements in Korea: Zoning and Area Ratio',
    metaDescription: 'Factory registration in Korea requires a manufacturing business, a zone that allows the factory, a suitable building use and the standard factory area ratio.',
    excerpt: 'To register a factory in Korea, the business must be manufacturing under the Korean Standard Industrial Classification, the zoning must allow that type of factory, the building must be in factory or manufacturing workshop use, and the factory floor area must meet the standard ratio for the industry.',
    content: `<div class="toc"><p>Contents</p><ol><li>Four conditions</li><li>Factories by zoning district</li><li>Standard factory area ratio</li><li>FAQ</li></ol></div>
<p><strong>A factory can be registered only if the business is manufacturing under the Korean Standard Industrial Classification, and the city, county or district office confirms that it meets the Building Act, the National Land Planning and Utilization Act, environmental rules and the standard factory area ratio. In practice the conditions are whether the zoning allows that factory, whether the building is in factory or manufacturing workshop use, and whether the factory area is large enough for the site.</strong></p>
<p>For filing steps see <a href="/en/blog/factory-registration-application-guide">our factory registration guide</a>, and for leased buildings see <a href="/en/blog/factory-registration-leased-building">registering a factory in a leased building</a>.</p>

<h2>Four conditions</h2>
<table><thead><tr><th>Condition</th><th>Record checked</th><th>Typical problem</th></tr></thead><tbody>
<tr><td>Manufacturing business</td><td>Industry in the business plan</td><td>Only sales or storage, no processing, assembly or repair</td></tr>
<tr><td>Zoning</td><td>Land use plan certificate</td><td>Exclusive residential zone, or a zone not allowing that factory</td></tr>
<tr><td>Building use</td><td>Building register</td><td>Not factory or manufacturing workshop use</td></tr>
<tr><td>Area ratio</td><td>Layout and area calculation</td><td>Factory floor area below the industry standard</td></tr>
</tbody></table>
<p>A manufacturing workshop must use under 500 square metres of floor area in the building and must not need an air, water or noise emission permit or report, unless all wastewater is sent out for treatment. A factory includes not only production lines but also trial production facilities, on-site support and welfare facilities and facilities required by law, and factories inside industrial complexes are registered by the complex management body instead of the local office. Beyond the workshop limits, the building needs factory use; see <a href="/en/services/building-usage">building use change</a>.</p>

<h2>Factories by zoning district</h2>
<table><thead><tr><th>Zone</th><th>Factories</th></tr></thead><tbody>
<tr><td>Exclusive residential</td><td>Not allowed</td></tr>
<tr><td>Type 1 general residential</td><td>Only certain factories such as printing, sewing, computer assembly, tofu and laundry, under local ordinance and without listed pollutants</td></tr>
<tr><td>Exclusive and general industrial</td><td>Allowed</td></tr>
<tr><td>Semi-industrial</td><td>Allowed; factories of 5,000 square metres or more may be barred by ordinance</td></tr>
<tr><td>Production and natural green</td><td>Only some, such as rice milling, food and high-tech factories, under ordinance</td></tr>
<tr><td>Planned management</td><td>Not allowed without a growth management or district unit plan; industry limits even with a plan</td></tr>
</tbody></table>
<p>In the Seoul metropolitan overcrowding, growth management and nature conservation regions, new building, expansion, relocation or change of industry for factories of 500 square metres or more is restricted, and exceptions need approval. Ordinances vary by area.</p>

<h2>Standard factory area ratio</h2>
<ol><li>Site area is the horizontal projection of the site.</li><li>Factory area is the floor area of every storey plus the projection of outdoor machinery and structures.</li><li>Factory area must reach site area times the industry ratio, which ranges from 3% to 20%; knowledge industry centres use 40%.</li><li>Multiple industries are weighted by their share of floor area.</li><li>For approved factories, construction planned within 4 years of approval counts.</li></ol>
<p>For example, a 1,000 square metre site in a 15% industry needs at least 150 square metres of factory area. Green zone sites, sites with a road of 6 metres or more and sites leased by the builder are exempt. When only part of a building is leased, the leased floor area is treated as the site.</p>
<p>YouSun Administrative Agency checks the land use plan and building register first, then calculates areas, drafts the business plan and files the registration. See <a href="/en/services/factory">our factory service page</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can I check the land before signing?</p><p class="faq-a">A. Yes. On application by the owner or an interested party, the local office confirms within 10 days whether a factory can be built on that lot.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the area ratio is not met?</p><p class="faq-a">A. For an approved factory, the completion report is returned until the requirement is met, so fix the area at the design stage.</p></div>
<div class="faq-item"><p class="faq-q">Q. The zoning is fine but the building is office use.</p><p class="faq-a">A. Change it to factory or workshop use first; whether that is possible depends on zoning limits and the structure.</p></div>
</div>

<div class="cta-block"><h3>Send us the address and industry</h3><p>Share the lot, building, industry and planned area, and YouSun Administrative Agency will check the conditions and what to solve first. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国工厂登记的条件 — 用途地域、建筑物用途与基准工厂面积率',
    category: '制造业',
    metaTitle: '韩国工厂登记条件 — 用途地域·建筑用途·基准工厂面积率',
    metaDescription: '在韩国办理工厂登记，须属于制造业，且用途地域、建筑物用途和基准工厂面积率符合相关法令。本文说明各用途地域允许的工厂范围、面积率计算和事先确认选址的方法。',
    excerpt: '在韩国办理工厂登记，须属于韩国标准产业分类中的制造业，所在用途地域允许该行业的工厂，建筑物用途为工厂或制造业所，且工厂建筑面积符合行业基准工厂面积率。',
    content: `<div class="toc"><p>目录</p><ol><li>工厂登记的四项条件</li><li>各用途地域的工厂允许范围</li><li>基准工厂面积率的计算与例外</li><li>常见问题</li></ol></div>
<p><strong>工厂登记的前提是所从事的业务属于韩国标准产业分类中的制造业，市长·郡守·区厅长确认其符合建筑法、国土规划及利用法、环境相关法令的标准和基准工厂面积率后予以登记。实际上要看三点：用途地域是否允许该行业的工厂、建筑物用途是否为工厂或制造业所、相对于用地的工厂建筑面积是否达到行业标准。</strong></p>
<p>申请材料与流程见<a href="/zh/blog/factory-registration-application-guide">工厂登记申请指南</a>，租用建筑物登记的情况见<a href="/zh/blog/factory-registration-leased-building">租用建筑物的工厂登记</a>。</p>

<h2>工厂登记的四项条件</h2>
<table><thead><tr><th>条件</th><th>确认材料</th><th>常见问题</th></tr></thead><tbody>
<tr><td>属于制造业</td><td>事业计划书中的行业</td><td>只做销售·保管，没有制造·加工·组装·修理设施</td></tr>
<tr><td>用途地域允许</td><td>土地利用计划确认书</td><td>专用住宅地域，或不允许该行业工厂的地域</td></tr>
<tr><td>建筑物用途</td><td>建筑物台账</td><td>不是工厂或第二种近邻生活设施中的制造业所</td></tr>
<tr><td>基准工厂面积率</td><td>布置图·面积计算</td><td>工厂建筑面积低于行业基准</td></tr>
</tbody></table>
<p>第二种近邻生活设施中的制造业所，须在同一建筑物内该用途的楼面面积合计不足500平方米，且不属于大气·水·噪声排放设施许可或申报对象，或废水全部委托处理。工厂除制造设施外，还包括试生产设施、用地内的管理·福利附属设施以及相关法令规定须设置的设施；产业园区内的工厂由管理机构而非市长·郡守·区厅长办理登记。超出制造业所范围的，建筑物用途须为工厂，可先研究<a href="/zh/services/building-usage">建筑物用途变更</a>。</p>

<h2>各用途地域的工厂允许范围</h2>
<table><thead><tr><th>用途地域</th><th>工厂建筑</th></tr></thead><tbody>
<tr><td>第一种·第二种专用住宅地域</td><td>不允许</td></tr>
<tr><td>第一种一般住宅地域</td><td>依城市·郡规划条例，仅限印刷、缝制、电脑组装、豆腐制造、洗衣等部分工厂，且不得排放规定污染物</td></tr>
<tr><td>专用工业·一般工业地域</td><td>允许</td></tr>
<tr><td>准工业地域</td><td>允许；楼面面积合计5千平方米以上的工厂可被条例禁止</td></tr>
<tr><td>生产绿地·自然绿地地域</td><td>依条例仅限碾米、食品、尖端行业等部分工厂</td></tr>
<tr><td>计划管理地域</td><td>未制定成长管理计划·地区单位计划的不允许，有计划也有行业限制</td></tr>
</tbody></table>
<p>在首都圈过密抑制圈域、成长管理圈域和自然保护圈域，工厂建筑面积500平方米以上工厂的新设·增设·迁移·变更行业原则上受限，仅在例外情形下经批准进行。条例因地区而异。</p>

<h2>基准工厂面积率的计算与例外</h2>
<ol><li>工厂用地面积按用地的水平投影面积计算。</li><li>工厂建筑面积为用地内建筑物各层楼面面积加上室外机械·装置等构筑物的水平投影面积。</li><li>须达到用地面积乘以行业基准工厂面积率所得的基准工厂建筑面积；面积率按行业为3%至20%，知识产业中心为40%。</li><li>经营两个以上行业的，按各行业建筑面积比重加权计算。</li><li>须经批准的工厂，计入自批准日起4年内的建设计划部分。</li></ol>
<p>例如，用地1,000平方米、面积率15%的行业，工厂建筑面积须达到150平方米以上。绿地地域用地、有6米以上道路的用地、租用工厂用地者自建工厂的用地等不适用该标准。仅租用建筑物一部分登记的工厂，以租用部分的楼面面积视为工厂用地。</p>
<p>YouSun Administrative Agency先核对土地利用计划和建筑物台账判断能否登记，再进行面积计算、编写事业计划书并办理登记申请。详见<a href="/zh/services/factory">工厂设立批准·工厂登记服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 签约前能否先确认这块地能不能建工厂？</p><p class="faq-a">A. 可以。土地所有人或利害关系人向市长·郡守·区厅长申请后，10日内会按地号告知能否设立工厂。</p></div>
<div class="faq-item"><p class="faq-q">Q. 达不到基准工厂面积率会怎样？</p><p class="faq-a">A. 经批准建设的工厂在完工申报时达不到标准的，申报会被退回，须补足要件后重新申报，最好在设计阶段就把面积定好。</p></div>
<div class="faq-item"><p class="faq-q">Q. 用途地域没问题，但建筑物是办公用途怎么办？</p><p class="faq-a">A. 须先变更为工厂或制造业所用途再申请登记，能否变更要结合该用途地域的建筑限制和建筑结构判断。</p></div>
</div>

<div class="cta-block"><h3>告诉我们地址和行业即可</h3><p>提供地号、建筑物、行业和计划面积，YouSun Administrative Agency为你判断是否符合工厂登记条件以及需要先解决的问题。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の工場登録の条件 — 用途地域・建築物の用途・基準工場面積率',
    category: '製造業',
    metaTitle: '韓国の工場登録の条件 — 用途地域・建物用途・基準工場面積率',
    metaDescription: '韓国で工場登録をするには、製造業であることに加え、用途地域・建築物の用途・基準工場面積率が関係法令に合っている必要があります。用途地域別の許容範囲と面積率の計算を解説します。',
    excerpt: '韓国で工場登録をするには、韓国標準産業分類上の製造業であり、その土地の用途地域で当該業種の工場が認められ、建築物の用途が工場または製造業所で、工場建築面積が業種別の基準工場面積率を満たす必要があります。',
    content: `<div class="toc"><p>目次</p><ol><li>工場登録の四つの条件</li><li>用途地域別の工場の許容範囲</li><li>基準工場面積率の計算と例外</li><li>よくある質問</li></ol></div>
<p><strong>工場登録には、事業が韓国標準産業分類上の製造業であることが前提で、市長・郡守・区庁長が建築法、国土の計画及び利用に関する法律、環境関係法令の基準と基準工場面積率に合うかを確認して登録します。実際には、用途地域でその業種の工場が認められるか、建築物の用途が工場または製造業所か、敷地に対する工場建築面積が業種別の基準を満たすかが条件です。</strong></p>
<p>申請書類と処理期間は<a href="/ja/blog/factory-registration-application-guide">工場登録の申請ガイド</a>、借りた建物で登録する場合は<a href="/ja/blog/factory-registration-leased-building">賃借建物での工場登録</a>をご覧ください。</p>

<h2>工場登録の四つの条件</h2>
<table><thead><tr><th>条件</th><th>確認資料</th><th>引っかかる例</th></tr></thead><tbody>
<tr><td>製造業にあたる</td><td>事業計画書の業種</td><td>販売・保管だけで、製造・加工・組立・修理の施設がない</td></tr>
<tr><td>用途地域で許容</td><td>土地利用計画確認書</td><td>専用住居地域、またはその業種の工場を認めない地域</td></tr>
<tr><td>建築物の用途</td><td>建築物台帳</td><td>工場や第二種近隣生活施設の製造業所ではない用途</td></tr>
<tr><td>基準工場面積率</td><td>配置図・面積算出</td><td>工場建築面積が業種別の基準に届かない</td></tr>
</tbody></table>
<p>第二種近隣生活施設の製造業所は、同じ建築物でその用途に使う床面積の合計が500平方メートル未満で、大気・水・騒音の排出施設の許可や申告の対象でないか、廃水を全量委託処理する施設である必要があります。工場には製造施設だけでなく、試験生産施設、敷地内の管理・福利の付帯施設、関係法令で設置が義務づけられた施設も含まれ、産業団地内の工場は市長・郡守・区庁長ではなく管理機関が登録を担当します。製造業所の範囲を超えると建築物の用途は工場でなければならないため、先に<a href="/ja/services/building-usage">建築物の用途変更</a>を検討します。</p>

<h2>用途地域別の工場の許容範囲</h2>
<table><thead><tr><th>用途地域</th><th>工場の建築</th></tr></thead><tbody>
<tr><td>第一種・第二種専用住居地域</td><td>不可</td></tr>
<tr><td>第一種一般住居地域</td><td>都市・郡計画条例により、印刷業・縫製業・コンピュータ組立・豆腐製造業・洗濯業などの一部の工場のみ。所定の汚染物質を排出するものは除く</td></tr>
<tr><td>専用工業・一般工業地域</td><td>建築可</td></tr>
<tr><td>準工業地域</td><td>可。ただし床面積の合計が5千平方メートル以上の工場は条例で禁止されることがある</td></tr>
<tr><td>生産緑地・自然緑地地域</td><td>条例により精米工場・食品工場・先端業種の工場などの一部のみ</td></tr>
<tr><td>計画管理地域</td><td>成長管理計画・地区単位計画がない所は不可、計画があっても業種の制限あり</td></tr>
</tbody></table>
<p>首都圏の過密抑制圏域・成長管理圏域・自然保全圏域では、工場建築面積500平方メートル以上の工場の新設・増設・移転・業種変更が原則として制限され、例外にあたる場合だけ承認を受けて進めます。条例は地域ごとに異なります。</p>

<h2>基準工場面積率の計算と例外</h2>
<ol><li>工場敷地面積は敷地の水平投影面積とします。</li><li>工場建築面積は、敷地内の建築物の各階の床面積に、屋外の機械・装置などの工作物の水平投影面積を加えたものです。</li><li>工場敷地面積に業種別の基準工場面積率を掛けた基準工場建築面積以上が必要です。面積率は業種により3%から20%、知識産業センターは40%です。</li><li>二つ以上の業種なら、業種ごとの建築面積の比重で加重して計算します。</li><li>承認対象の工場は、承認日から4年以内の建築計画分まで含めます。</li></ol>
<p>たとえば敷地1,000平方メートルで面積率15%の業種なら、工場建築面積は150平方メートル以上必要です。緑地地域の用地、6メートル以上の道路がある用地、工場敷地を借りた者が工場を建てる用地などはこの基準を適用しません。建物の一部だけを借りて登録する工場は、借りた部分の床面積を工場敷地とみなします。</p>
<p>YouSun Administrative Agencyは、土地利用計画と建築物台帳を先に照合して登録の可否を判断し、面積の算出、事業計画書の作成、登録申請まで続けて対応します。<a href="/ja/services/factory">工場設立承認・工場登録サービス</a>もご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 契約前に工場を建てられる土地か確認できますか。</p><p class="faq-a">A. できます。土地所有者や利害関係人が市長・郡守・区庁長に申請すると、10日以内に地番ごとに工場設立が可能かを確認して知らせてくれます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 基準工場面積率に届かないとどうなりますか。</p><p class="faq-a">A. 承認を受けて建てた工場が完了申告の時点で基準に届かないと申告が返戻され、要件を整えて申告し直します。設計段階で面積を合わせておくのが安全です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 用途地域は合っていますが、建物が事務所用途です。</p><p class="faq-a">A. 工場や製造業所の用途に変更してから登録を申請します。変更できるかは、その用途地域の建築制限と建物の構造をあわせて判断します。</p></div>
</div>

<div class="cta-block"><h3>住所と業種をお知らせください</h3><p>地番、建物、業種、予定面積をお知らせいただければ、YouSun Administrative Agencyが工場登録の条件に合うかと、先に解決すべき点を整理します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 공장등록은 '등록', 500제곱미터 이상 신설은 '승인', 허가 아님
entry.wrongTerms = [
  '공장등록 허가', '공장설립 허가', '공장설립허가', '공장 허가증', '입지 허가',
  'factory permit', 'factory license', 'factory construction permit',
  '工厂设立许可', '工厂登记许可', '工厂许可证',
  '工場設立許可', '工場登録許可', '工場の許可証',
]

export default entry
