// 원고 은행 — BANK-REFILL-1029(2026-10-29, 맥4 하위 작성, kind=seo3958)
// 주제(풀): food-manufacturing(식품제조가공업등록) / 세부주제: post-management(사후관리 의무)
//
// 겹침 검사(blog-posts-data.ts·blog-i18n.ts·bank 대조):
//   food-manufacturing-license-guide / food-manufacturing-permit — 신규 등록 요건·시설기준·서류(본문이 '허가'로 오기).
//     permit 글의 '허가 후 의무' 는 품목제조보고·위생교육·자가품질검사를 한 줄씩 나열만(주기·기한 수치 없음).
//   food-manufacturing-fix — 무등록 처벌·영업정지·변경등록 누락 처분 → 처분은 자가품질검사 1차 예시만, 나머지 링크.
//   food-manufacturing-select(대행 선택), food-manufacturing-online-sales-report(bank+라이브, 온라인 판매·통신판매업)
//   haccp-post-certification-management-guide — HACCP 인증 후 평가·갱신 → 자가품질검사 면제 연결만 링크.
//   → 이 글은 "등록 후 제품마다·매년 할 일": 품목제조보고(생산 시작 전~7일)·변경보고, 자가품질검사 주기(별표 12 개정 2026. 9. 1.)·
//     기록 2년, 위생교육 매년 3시간, 건강진단 매년, 생산실적 보고 2월 말, 기록 보관만 다룬다.
//     '품목제조보고'·'자가품질검사 주기'를 제목에 쓴 기존 KO/i18n 제목 없음.
//
// 법령 대조(lawfetch.py, law.go.kr DRF OC=visionlaw, 2026-10-29 조회):
//   식품위생법           MST 285339, 2026. 10. 8. 시행 — 제31조 제1항~제3항, 제31조의2, 제37조 제5항·제6항, 제40조 제1항,
//                        제41조 제1항·제3항·제5항, 제42조 제2항, 제101조 제2항 제3호·제3항 제1호·제4항 제1호·제2호
//   식품위생법 시행령    MST 288767, 2026. 8. 18. 시행 — 제21조 제1호, 제26조의2 제1항 제1호·단서, 제27조 제1호
//   식품위생법 시행규칙  MST 289161, 2026. 9. 1. 시행 — 제31조 제1항·제4항, 제31조의2, 제45조 제1항, 제46조 제1항,
//                        제49조 제1항·제2항, 제52조 제1항 제1호·제2항 제1호·제6항, 제56조 제1항·제2항,
//                        별표 12 제1호·제3호·제5호·제6호 가목 1)·3)·4)·6)(개정 2026. 9. 1.), 별표 17 제1호 가목·나목·바목·사목,
//                        별표 23 Ⅱ. 1. 제9호 가목 1)·다목
//   식품위생 분야 종사자의 건강진단 규칙  MST 290621, 2026. 9. 29. 시행 — 제2조 제1항·제2항·제4항
// 인허가 구분: 식품제조·가공업 = '등록'(영 제26조의2 제1항 제1호, 시장·군수·구청장 / 주류는 식약처장). 허가 아님
//   (허가 업종은 영 제23조 — 식품조사처리업·단란·유흥주점). 품목제조 = '보고'(법 제37조 제6항), 신고·허가 아님.
// 조정·확인 못 한 점:
//   - 자가품질검사 주기의 품목 구분은 별표 12 원문 목록이 길어 대표 품목만 예시하고 "식품유형별로 확인"으로 맺음.
//     2026. 9. 1. 개정으로 별표 12 제6호 가목 5) 삭제 — 현행 원문 기준으로만 서술. 검사항목은 식약처 고시(원문 미조회) → 수치 없음.
//   - HACCP 적용업소 자가품질검사 면제(조사·평가 만점의 90% 이상)는 법 문언상 '면제할 수 있다'(재량) → "면제받을 수 있다".
//   - 위생교육 미이수·생산실적 미보고·품목제조 미보고·건강진단 위반 과태료 금액은 화면 금지라 '과태료 대상'만.
//   - 생산실적 보고 서식(별지 제50호)·전산 제출 경로는 법령 본문에 없어 쓰지 않음.
// 대조표: crosscheck/food-manufacturing-post-registration-duties.md

const SLUG = 'food-manufacturing-post-registration-duties'

const entry = {
  topic: 'food-manufacturing',
  angle: 'post-management',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '식품제조가공업 품목제조보고',
  pexelsId: 36823725,
  coverImage: '',
  relatedServices: [
    { title: '식품제조가공업 등록', href: '/services/food-manufacturing' },
  ],

  ko: {
    title: '식품제조가공업 품목제조보고·자가품질검사·위생교육 — 등록 후 지켜야 할 의무와 주기',
    category: '식품',
    metaTitle: '식품제조가공업 품목제조보고·자가품질검사 주기·위생교육 정리',
    metaDescription: '식품제조가공업은 등록 후 제품마다 생산 시작 전이나 시작 후 7일 이내에 품목제조보고를 하고, 식품유형별 주기로 자가품질검사를 하며, 매년 위생교육과 건강진단, 2월 말 생산실적 보고를 해야 합니다.',
    excerpt: '식품제조가공업 등록을 마쳤다면 이제 제품마다 품목제조보고를 하고, 1개월에서 3개월 주기의 자가품질검사, 매년 3시간 위생교육과 건강진단, 다음 해 2월 말까지의 생산실적 보고, 생산·원료 기록 3년 보관을 이어 가야 합니다. 기한과 주기를 항목별로 안내합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>품목제조보고와 변경보고</li><li>자가품질검사 주기와 기록</li><li>위생교육·건강진단·생산실적 보고</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>식품제조·가공업은 「식품위생법」에 따라 시장·군수·구청장에게 등록하는 영업이고, 등록 후에는 제품마다 품목제조보고를 하고, 정해진 주기로 자가품질검사를 하며, 매년 위생교육과 건강진단을 받고 생산실적을 보고해야 합니다.</strong><!-- 근거: 식품위생법 제37조 제5항·제6항, 제31조 제1항, 제40조 제1항, 제41조 제1항, 제42조 제2항, 같은 법 시행령 제26조의2 제1항 제1호, 제27조 제1호 --> 허가 업종이 아니라 등록 업종이므로 관할 관청도 등록관청(주류 제조는 식품의약품안전처)입니다.<!-- 근거: 식품위생법 시행령 제26조의2 제1항 단서, 제23조 --></p>
<p>처음 등록하는 절차와 시설 기준은 <a href="/blog/food-manufacturing-license-guide">식품제조가공업 등록 절차와 시설 기준</a>에서, 영업정지 사유와 처분은 <a href="/blog/food-manufacturing-fix">식품제조가공업 영업정지 사유 정리</a>에서, HACCP 인증 후 관리는 <a href="/blog/haccp-post-certification-management-guide">HACCP 인증 후 사후관리</a>에서 다룹니다.</p>

<h2>품목제조보고와 변경보고</h2>
<p>등록을 마친 영업자가 식품을 제조·가공하려면 품목마다 등록관청에 보고해야 합니다. 보고 기한은 제품생산 시작 전이나 시작 후 7일 이내이고, 다른 영업자에게 위탁해 만들면 위탁자가 보고합니다.<!-- 근거: 식품위생법 제37조 제6항, 같은 법 시행규칙 제45조 제1항 --></p>
<ol><li>제품명과 식품유형, 원재료와 배합비율을 확정합니다.</li><li>제조방법설명서와 소비기한 설정사유서를 준비합니다(한시적 기준 인정 대상이면 검토서 추가).<!-- 근거: 식품위생법 시행규칙 제45조 제1항 제1호~제3호 --></li><li>품목제조보고서를 생산 시작 전이나 시작 후 7일 이내에 제출합니다.<!-- 근거: 식품위생법 시행규칙 제45조 제1항 --></li><li>제품명, 보고한 원재료·배합비율, 소비기한(연장)이 바뀌면 같은 기한 안에 변경보고서를 냅니다.<!-- 근거: 식품위생법 시행규칙 제46조 제1항 --></li></ol>
<p>품목제조보고를 하지 않거나 거짓으로 보고하면 과태료 대상입니다.<!-- 근거: 식품위생법 제101조 제2항 제3호 --> 수출용 식품을 만들기 위한 변경은 변경보고 대상에서 빠집니다.<!-- 근거: 식품위생법 시행규칙 제46조 제1항 단서 --></p>

<h2>자가품질검사 주기와 기록</h2>
<p>제조한 식품이 기준·규격에 맞는지 영업자가 직접 검사하거나 자가품질위탁 시험·검사기관에 맡겨 검사합니다. 검사는 품목별로 하되 같은 검사항목이 적용되면 식품유형별로 할 수 있고, 주기는 처음 제품을 제조한 날부터 셉니다.<!-- 근거: 식품위생법 제31조 제1항·제2항, 같은 법 시행규칙 제31조 제1항, 별표 12 제1호·제3호 --></p>
<table><thead><tr><th>식품 구분(예시)</th><th>검사 주기</th></tr></thead><tbody>
<tr><td>과자·캔디류·떡류, 초콜릿류, 잼류, 두부·묵류, 면류, 장류, 절임·조림류 등</td><td>3개월마다 1회 이상<!-- 근거: 식품위생법 시행규칙 별표 12 제6호 가목 1) --></td></tr>
<tr><td>빵류, 식육함유가공품, 알함유가공품, 과일·채소류음료·탄산음료류·두유류 등 일부 음료, 들기름</td><td>2개월마다 1회 이상<!-- 근거: 식품위생법 시행규칙 별표 12 제6호 가목 3) --></td></tr>
<tr><td>그 밖의 식품</td><td>1개월마다 1회 이상(주류는 6개월)<!-- 근거: 식품위생법 시행규칙 별표 12 제6호 가목 4) --></td></tr>
<tr><td>식중독 위험 고시 기간</td><td>3개월 주기 품목은 1개월, 2개월 주기 품목은 15일, 1개월 주기 품목은 1주일마다<!-- 근거: 식품위생법 시행규칙 별표 12 제6호 가목 6) --></td></tr>
</tbody></table>
<p>검사 기록서는 2년간 보관합니다. 직접 검사한 결과 위해 우려가 있으면 지체 없이 식품의약품안전처에 보고해야 하고, 부적합을 알고도 유통하면 처분 기준상 1차에 등록취소 대상입니다. 검사를 전혀 하지 않으면 1차에 품목 제조정지 1개월입니다.<!-- 근거: 식품위생법 시행규칙 제31조 제4항, 식품위생법 제31조 제3항, 같은 법 시행규칙 별표 23 Ⅱ 1. 제9호 가목 1)·다목 --> HACCP 적용업소는 조사·평가 결과가 만점의 90% 이상이면 자가품질검사를 면제받을 수 있습니다.<!-- 근거: 식품위생법 제31조의2 제2호, 같은 법 시행규칙 제31조의2 --></p>

<h2>위생교육·건강진단·생산실적 보고</h2>
<p>식품제조·가공업자는 매년 3시간의 식품위생교육을 받아야 합니다(영업 전 신규 교육은 8시간). 영업자가 직접 종사하지 않거나 두 곳 이상에서 영업하면 종업원 중 책임자를 지정해 대신 받게 할 수 있고, 교육을 받지 않은 사람을 종사시키면 안 됩니다.<!-- 근거: 식품위생법 제41조 제1항·제3항·제5항, 같은 법 시행령 제27조 제1호, 시행규칙 제52조 제1항 제1호·제2항 제1호 --></p>
<p>식품을 직접 제조·가공하는 영업자와 종업원은 종사 전에 건강진단을 받고, 그 뒤 매 1년마다 유효기간 만료일 전후 30일 이내에 다시 받습니다. 지난해 생산실적은 다음 해 2월 말일까지 등록관청을 거쳐 보고합니다.<!-- 근거: 식품위생법 제40조 제1항, 같은 법 시행규칙 제49조 제1항·제2항, 식품위생 분야 종사자의 건강진단 규칙 제2조 제2항·제4항, 식품위생법 제42조 제2항, 시행규칙 제56조 --></p>
<ul><li>생산·작업기록과 원료출납 서류: 최종 기재일부터 3년 보관<!-- 근거: 식품위생법 시행규칙 별표 17 제1호 가목 --></li><li>제품 거래기록: 최종 기재일부터 2년 보관<!-- 근거: 식품위생법 시행규칙 별표 17 제1호 나목 --></li><li>위탁 제조 시 수탁 업소 위생 점검: 반기별 1회 이상<!-- 근거: 식품위생법 시행규칙 별표 17 제1호 바목 --></li><li>소비자 이물 신고 등 불만 사례: 내용을 기록해 2년 보관하고, 소비자가 제시한 이물과 증거품은 6개월 보관<!-- 근거: 식품위생법 시행규칙 별표 17 제1호 사목 --></li><li>수돗물이 아닌 지하수 등을 쓰는 경우: 1년(음료류 등 마시는 식품은 6개월)마다 먹는물 수질검사기관에서 검사받은 물만 사용<!-- 근거: 식품위생법 시행규칙 별표 17 제1호 자목, 식품위생법 제44조 제1항 제4호 --></li></ul>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 같은 제품의 포장 단위만 바꿔도 품목제조보고를 다시 하나요?</p><p class="faq-a">A. 변경보고 대상은 제품명, 보고한 원재료·배합비율, 소비기한 연장입니다. 그 밖의 변경은 등록관청에 처리 방법을 확인하십시오.<!-- 근거: 식품위생법 시행규칙 제46조 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 위탁 제조하면 자가품질검사는 누가 하나요?</p><p class="faq-a">A. 제조를 맡긴 영업자나 실제로 제조하는 영업자 중 한쪽이 검사합니다. 계약서에 책임 주체를 적어 두는 것이 좋습니다.<!-- 근거: 식품위생법 시행규칙 별표 12 제5호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 한 해 내내 휴업했는데 위생교육을 받아야 하나요?</p><p class="faq-a">A. 세무서에 휴업신고를 하고 그해 전체 기간 휴업했다면 그해 위생교육을 받지 않을 수 있습니다.<!-- 근거: 식품위생법 시행규칙 제52조 제6항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 생산실적이 없어도 보고하나요?</p><p class="faq-a">A. 보고는 생산 실적에 대한 것이므로, 실적이 없는 해의 처리는 등록관청에 미리 확인하십시오. 보고를 하지 않거나 거짓으로 하면 과태료 대상입니다.<!-- 근거: 식품위생법 제42조 제2항, 제101조 제4항 제2호 --></p></div>
</div>

<div class="cta-block"><h3>식품제조가공업 등록 후 의무, 일정표로 관리하세요</h3><p>품목제조보고와 변경보고, 생산실적 보고 준비까지 유선행정사사무소가 서류 작성을 돕습니다. 진행 범위는 <a href="/services/food-manufacturing">식품제조가공업 등록 안내</a>에서 확인하실 수 있습니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 식품위생법 제31조·제31조의2·제37조·제40조·제41조·제42조·제101조, 같은 법 시행령 제26조의2·제27조, 시행규칙 제31조·제45조·제46조·제49조·제52조·제56조·별표 12·별표 17·별표 23, 식품위생 분야 종사자의 건강진단 규칙 제2조 --></p>`,
  },

  en: {
    title: 'Food Manufacturing Product Reports, Self-Quality Testing and Hygiene Training in Korea — Duties After Registration',
    category: 'Food',
    metaTitle: 'Food Manufacturing Business Duties After Registration in Korea',
    metaDescription: 'Duties after food manufacturing registration in Korea: product reports within 7 days, self-quality testing cycles, yearly hygiene training and output reports.',
    excerpt: 'Once a food manufacturing and processing business is registered in Korea, each product needs a manufacturing report, testing runs every 1 to 3 months depending on the food type, hygiene training and health checks come every year, and production results are due by the end of February.',
    content: `<div class="toc"><p>Contents</p><ol><li>Product manufacturing reports and change reports</li><li>Self-quality testing cycles and records</li><li>Hygiene training, health checks and production reports</li><li>FAQ</li></ol></div>
<p><strong>A food manufacturing and processing business (식품제조·가공업) is <em>registered</em> with the city, county or district head under the Food Sanitation Act. After registration it must file a manufacturing report for each product, test its products on a fixed cycle, and every year complete hygiene training and health checks and report its production results.</strong> It is a registration business, not a permit business, so the registering office (the Ministry of Food and Drug Safety for liquor) is the contact point.</p>
<p>Initial steps and facility standards are covered in <a href="/en/blog/food-manufacturing-license-guide">our food manufacturing registration guide</a>, and management after HACCP certification in <a href="/en/blog/haccp-post-certification-management-guide">our HACCP post-certification guide</a>.</p>

<h2>Product manufacturing reports and change reports</h2>
<p>To make a food, a registered business reports each product to the registering office before production starts or within 7 days after it starts. If production is outsourced, the business that commissions it files the report.</p>
<ol><li>Fix the product name, food type, ingredients and mixing ratios.</li><li>Prepare a description of the manufacturing method and a statement of reasons for the use-by period.</li><li>Submit the product manufacturing report before production or within 7 days after it starts.</li><li>If the name, reported ingredients or ratios, or the use-by period (extension) change, file a change report within the same window.</li></ol>
<p>Failing to report, or reporting falsely, is subject to an administrative fine. Changes made only to produce food for export are excluded.</p>

<h2>Self-quality testing cycles and records</h2>
<p>The business tests whether its food meets the standards, either itself or through a designated testing body. Testing is done per product, or per food type where the same items apply, and the cycle runs from the day the product was first made.</p>
<table><thead><tr><th>Food group (examples)</th><th>Cycle</th></tr></thead><tbody>
<tr><td>Confectionery, candy, rice cakes, chocolate, jam, tofu, noodles, fermented sauces, pickles and similar</td><td>At least once every 3 months</td></tr>
<tr><td>Bread, foods containing meat or eggs, some beverages such as fruit and vegetable drinks, carbonated drinks and soy milk, perilla oil</td><td>At least once every 2 months</td></tr>
<tr><td>Other foods</td><td>At least once every 1 month (6 months for liquor)</td></tr>
<tr><td>Announced food poisoning risk periods</td><td>3-month items monthly, 2-month items every 15 days, 1-month items weekly</td></tr>
</tbody></table>
<p>Test records are kept for 2 years. If in-house testing shows a possible hazard, it must be reported to the Ministry without delay. Selling food known to fail can lead to cancellation of the registration at the 1st violation, and skipping testing entirely means a 1-month product manufacturing suspension. A HACCP-certified site that scores 90% or more in its evaluation can be exempted from self-quality testing.</p>

<h2>Hygiene training, health checks and production reports</h2>
<p>Food manufacturers take 3 hours of food hygiene training every year (8 hours before opening). If the owner does not work on site or runs 2 or more sites, a designated staff member may attend instead, and untrained staff may not be put to work.</p>
<p>Owners and staff who handle food directly get a health check before starting work, then every 1 year within 30 days before or after the expiry date. Last year's production results are reported through the registering office by the end of February.</p>
<ul><li>Production, work and ingredient records: keep for 3 years from the last entry</li><li>Product transaction records: keep for 2 years</li><li>Outsourced production: inspect the contract site at least once every half year</li><li>Customer complaints such as foreign matter: record and keep for 2 years, and keep the evidence for 6 months</li><li>Groundwater instead of tap water: use only water tested by a drinking water lab every 1 year (6 months for beverages)</li></ul>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Do I re-report if only the package size changes?</p><p class="faq-a">A. Change reports cover the product name, reported ingredients and ratios, and use-by extensions. Ask the registering office how other changes are handled.</p></div>
<div class="faq-item"><p class="faq-q">Q. Who tests outsourced products?</p><p class="faq-a">A. Either the commissioning business or the actual maker. Put the responsible party in the contract.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do I need training if I was closed all year?</p><p class="faq-a">A. If you filed a suspension with the tax office and were closed for the whole year, you may skip that year's training.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do I report a year with no production?</p><p class="faq-a">A. Check with the registering office in advance. For help, see <a href="/en/services/food-manufacturing">our food manufacturing registration service</a>.</p></div>
</div>

<div class="cta-block"><h3>Keep your food manufacturing duties on schedule</h3><p>YouSun Administrative Agency helps prepare product manufacturing reports, change reports and annual production reports. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国食品制造加工业品目制造报告·自主质量检验·卫生教育 — 登记后的义务与周期',
    category: '食品',
    metaTitle: '韩国食品制造加工业登记后的义务：品目制造报告与检验周期',
    metaDescription: '韩国食品制造加工业登记后，每个产品须在生产开始前或开始后7日内进行品目制造报告，按食品类型周期进行自主质量检验，并每年接受卫生教育、健康检查和报告生产实绩。',
    excerpt: '食品制造加工业完成登记后，每个产品都要进行品目制造报告，按1至3个月周期进行自主质量检验，每年接受3小时卫生教育和健康检查，在次年2月底前报告生产实绩，并将生产·原料记录保存3年。',
    content: `<div class="toc"><p>目录</p><ol><li>品目制造报告与变更报告</li><li>自主质量检验周期与记录</li><li>卫生教育·健康检查·生产实绩报告</li><li>常见问题</li></ol></div>
<p><strong>食品制造·加工业（식품제조·가공업）是依据韩国《食品卫生法》向市长·郡守·区厅长<em>登记</em>的营业。登记后须对每个产品进行品目制造报告，按规定周期进行自主质量检验，并每年接受卫生教育和健康检查、报告生产实绩。</strong>它属于登记业种而非许可业种，主管机关是登记机关（酒类制造为食品医药品安全处）。</p>
<p>首次登记流程与设施标准请参阅<a href="/zh/blog/food-manufacturing-license-guide">食品制造加工业登记指南</a>，HACCP认证后的管理请参阅<a href="/zh/blog/haccp-post-certification-management-guide">HACCP认证后管理</a>。</p>

<h2>品目制造报告与变更报告</h2>
<p>已登记的营业者制造·加工食品时，须按品目向登记机关报告，期限为产品生产开始前或开始后7日内；委托其他营业者制造的，由委托方报告。</p>
<ol><li>确定产品名、食品类型、原材料及配比。</li><li>准备制造方法说明书和消费期限设定理由书。</li><li>在生产开始前或开始后7日内提交品目制造报告书。</li><li>产品名、已报告的原材料·配比或消费期限（延长）变更时，在同一期限内提交变更报告书。</li></ol>
<p>未报告或虚假报告的，属于罚款对象。仅为生产出口用食品而作的变更，不属于变更报告对象。</p>

<h2>自主质量检验周期与记录</h2>
<p>营业者须检验所制造的食品是否符合标准·规格，可自行检验，也可委托指定检验机构。原则上按品目检验，适用相同检验项目的可按食品类型检验，周期自首次制造产品之日起计算。</p>
<table><thead><tr><th>食品区分（举例）</th><th>检验周期</th></tr></thead><tbody>
<tr><td>饼干·糖果·年糕、巧克力、果酱、豆腐·凉粉、面类、酱类、腌渍·炖煮类等</td><td>每3个月1次以上</td></tr>
<tr><td>面包、含肉加工品、含蛋加工品、果蔬汁·碳酸饮料·豆奶等部分饮料、紫苏油</td><td>每2个月1次以上</td></tr>
<tr><td>其他食品</td><td>每1个月1次以上（酒类为6个月）</td></tr>
<tr><td>食物中毒高风险公告期间</td><td>3个月周期品目改为1个月，2个月周期品目改为15日，1个月周期品目改为每周</td></tr>
</tbody></table>
<p>检验记录须保存2年。自行检验发现可能危害健康的，须立即向食药处报告；明知不合格仍流通的，按处分标准第1次即可能被撤销登记；完全未检验的，第1次为品目制造停止1个月。HACCP适用企业评估结果达满分90%以上的，可免除自主质量检验。</p>

<h2>卫生教育·健康检查·生产实绩报告</h2>
<p>食品制造·加工业者每年须接受3小时食品卫生教育（开业前新办教育为8小时）。营业者不直接从业或在两处以上营业的，可指定员工中的负责人代为受训；不得让未受训人员从事营业。</p>
<p>直接从事食品制造·加工的营业者和员工须在从业前接受健康检查，此后每1年在有效期届满日前后30日内再次检查。上一年的生产实绩须在次年2月底前经登记机关报告。</p>
<ul><li>生产·作业记录与原料出入库文件：自最后记载日起保存3年</li><li>产品交易记录：保存2年</li><li>委托制造时：每半年至少1次检查受托企业卫生状况</li><li>消费者异物投诉等：记录并保存2年，消费者提供的异物和证据品保存6个月</li><li>使用自来水以外的地下水等：每1年（饮料等为6个月）经饮用水水质检验机构检验合格后方可使用</li></ul>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 只改变包装规格，需要重新报告吗？</p><p class="faq-a">A. 变更报告对象是产品名、已报告的原材料·配比及消费期限延长。其他变更请向登记机关确认处理方式。</p></div>
<div class="faq-item"><p class="faq-q">Q. 委托制造时由谁进行自主质量检验？</p><p class="faq-a">A. 由委托方或实际制造方其中一方检验，建议在合同中写明责任方。</p></div>
<div class="faq-item"><p class="faq-q">Q. 全年停业也要接受卫生教育吗？</p><p class="faq-a">A. 已向税务署申报停业且全年停业的，可以不接受当年的卫生教育。</p></div>
<div class="faq-item"><p class="faq-q">Q. 没有生产实绩也要报告吗？</p><p class="faq-a">A. 请事先向登记机关确认。需要协助请参阅<a href="/zh/services/food-manufacturing">食品制造加工业登记服务</a>。</p></div>
</div>

<div class="cta-block"><h3>食品制造加工业登记后的义务，按日程管理</h3><p>YouSun Administrative Agency协助准备品目制造报告、变更报告和生产实绩报告材料。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の食品製造加工業 品目製造報告・自家品質検査・衛生教育 — 登録後の義務と周期',
    category: '食品',
    metaTitle: '韓国の食品製造加工業 登録後の義務：品目製造報告と検査周期',
    metaDescription: '韓国の食品製造加工業は登録後、製品ごとに生産開始前か開始後7日以内に品目製造報告をし、食品類型別の周期で自家品質検査を行い、毎年衛生教育・健康診断・生産実績報告が必要です。',
    excerpt: '食品製造加工業の登録を終えたら、製品ごとの品目製造報告、1か月から3か月周期の自家品質検査、毎年3時間の衛生教育と健康診断、翌年2月末までの生産実績報告、生産・原料記録の3年保管が続きます。',
    content: `<div class="toc"><p>目次</p><ol><li>品目製造報告と変更報告</li><li>自家品質検査の周期と記録</li><li>衛生教育・健康診断・生産実績報告</li><li>よくある質問</li></ol></div>
<p><strong>食品製造・加工業（식품제조·가공업）は、韓国の「食品衛生法」に基づき市長・郡守・区庁長に<em>登録</em>する営業です。登録後は製品ごとに品目製造報告をし、定められた周期で自家品質検査を行い、毎年衛生教育と健康診断を受け、生産実績を報告しなければなりません。</strong>許可業種ではなく登録業種なので、窓口は登録官庁（酒類の製造は食品医薬品安全処）です。</p>
<p>最初の登録手続と施設基準は<a href="/ja/blog/food-manufacturing-license-guide">食品製造加工業の登録ガイド</a>を、HACCP認証後の管理は<a href="/ja/blog/haccp-post-certification-management-guide">HACCP認証後の事後管理</a>をご覧ください。</p>

<h2>品目製造報告と変更報告</h2>
<p>登録した営業者が食品を製造・加工するときは、品目ごとに登録官庁へ報告します。期限は製品の生産開始前か開始後7日以内で、他の営業者に委託して製造する場合は委託者が報告します。</p>
<ol><li>製品名、食品類型、原材料と配合比率を確定します。</li><li>製造方法説明書と消費期限設定理由書を準備します。</li><li>品目製造報告書を生産開始前か開始後7日以内に提出します。</li><li>製品名、報告済みの原材料・配合比率、消費期限（延長）が変わる場合は、同じ期限内に変更報告書を提出します。</li></ol>
<p>品目製造報告をしない、または虚偽の報告をすると過料の対象です。輸出用食品を製造するための変更は変更報告の対象外です。</p>

<h2>自家品質検査の周期と記録</h2>
<p>営業者は、製造した食品が基準・規格に適合するかを自ら検査するか、指定された検査機関に委託して検査します。検査は品目ごとに行い、同じ検査項目が適用される場合は食品類型ごとにでき、周期は最初に製品を製造した日から数えます。</p>
<table><thead><tr><th>食品の区分（例）</th><th>検査周期</th></tr></thead><tbody>
<tr><td>菓子・キャンディ類・餅類、チョコレート類、ジャム類、豆腐・ムク類、麺類、醤類、漬物・煮物類など</td><td>3か月ごとに1回以上</td></tr>
<tr><td>パン類、食肉含有加工品、卵含有加工品、果実・野菜飲料・炭酸飲料・豆乳など一部の飲料、えごま油</td><td>2か月ごとに1回以上</td></tr>
<tr><td>その他の食品</td><td>1か月ごとに1回以上（酒類は6か月）</td></tr>
<tr><td>食中毒の危険が高いと告示された期間</td><td>3か月周期の品目は1か月、2か月周期の品目は15日、1か月周期の品目は1週間ごと</td></tr>
</tbody></table>
<p>検査記録書は2年間保管します。自ら検査して健康被害のおそれがあれば遅滞なく食薬処に報告し、不適合と知りながら流通させると処分基準上1次で登録取消しの対象です。検査をまったくしない場合は1次で品目製造停止1か月です。HACCP適用業所は、調査・評価の結果が満点の90%以上なら自家品質検査を免除されることがあります。</p>

<h2>衛生教育・健康診断・生産実績報告</h2>
<p>食品製造・加工業者は毎年3時間の食品衛生教育を受けます（営業開始前の新規教育は8時間）。営業者が直接従事しない場合や2か所以上で営業する場合は、従業員の中から責任者を指定して代わりに受講させることができ、教育を受けていない人を従事させてはいけません。</p>
<p>食品を直接製造・加工する営業者と従業員は従事前に健康診断を受け、その後は1年ごとに有効期間満了日の前後30日以内に受け直します。前年の生産実績は翌年2月末日までに登録官庁を経由して報告します。</p>
<ul><li>生産・作業記録と原料出納書類：最終記載日から3年保管</li><li>製品の取引記録：2年保管</li><li>委託製造の場合：受託業所の衛生状態を半期ごとに1回以上点検</li><li>異物などの苦情：内容を記録して2年保管し、消費者が示した異物と証拠品は6か月保管</li><li>水道水以外の地下水などを使う場合：1年（飲料など飲む食品は6か月）ごとに飲用水水質検査機関で検査を受けた水のみ使用</li></ul>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 包装単位だけを変える場合も報告し直しますか。</p><p class="faq-a">A. 変更報告の対象は製品名、報告済みの原材料・配合比率、消費期限の延長です。その他の変更は登録官庁に扱いを確認してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 委託製造では誰が自家品質検査をしますか。</p><p class="faq-a">A. 委託者か実際に製造する者のどちらかが検査します。契約書に責任者を明記しておくと安心です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 1年間ずっと休業していても衛生教育は必要ですか。</p><p class="faq-a">A. 税務署に休業申告をしてその年の全期間休業した場合は、その年の衛生教育を受けないことができます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 生産実績がなくても報告しますか。</p><p class="faq-a">A. 登録官庁に事前に確認してください。サポートは<a href="/ja/services/food-manufacturing">食品製造加工業の登録サービス</a>をご覧ください。</p></div>
</div>

<div class="cta-block"><h3>食品製造加工業の登録後の義務は日程表で管理</h3><p>YouSun Administrative Agencyが、品目製造報告、変更報告、生産実績報告の書類準備をお手伝いします。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 이 주제에서 틀리기 쉬운 인허가 구분 오기(4언어) — 식품제조·가공업은 '등록'(허가 아님), 품목제조는 '보고'(신고·허가 아님)
entry.wrongTerms = [
  '식품제조가공업 허가', '식품제조·가공업 허가', '식품제조업 허가', '식품제조가공업 영업허가', '영업허가', '품목제조신고', '품목제조 신고', '품목제조허가',
  'food manufacturing permit', 'food manufacturing license', 'food manufacturing licence', 'business permit', 'manufacturing permit',
  '食品制造加工业许可', '食品制造业许可', '营业许可', '品目制造申报', '品目制造许可',
  '食品製造加工業許可', '食品製造業の許可', '営業許可', '品目製造届出', '品目製造許可',
]

export default entry
