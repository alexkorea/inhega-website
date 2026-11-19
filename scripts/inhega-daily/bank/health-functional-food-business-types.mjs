// 원고 은행 — INHE-BANK-1119 담당 C(맥4 하위 작성, kind=seo3958, angle=comparison)
// 주제(풀): health-food(건강기능식품) / 비교 질문: "건강기능식품 영업은 어떤 종류가 있고, 내 사업은 허가·신고·등록 중 무엇을 받아야 하나?"
// 대표 검색어(안): '건강기능식품 영업 종류' (SPEC 배정표) — 제목·메타제목 맨 앞.
//
// 겹침 검사: health-functional-food-home-online-sales(집·온라인 판매자의 판매업 신고·서류·변경), health-functional-food-sales-registration-guide·
//   health-functional-food-registration(판매업 신고 일반 — 옛 구분 '전문판매업'·'방문판매업' 표기가 있어 링크하지 않음, 총괄 보고),
//   health-food-select·health-food-fix(수입 영업등록·처분) → 현행 영업 종류 전부(전문제조·벤처제조·일반판매·유통전문판매·맞춤형판매 + 수입·판매업)를
//   인허가 형태·기관·사전교육으로 한 표에 비교한 글 없음. 판매업 서류·절차는 home-online-sales, 수입 등록 상세는 health-food-select 로 링크.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 로컬 사본 ~/work/inhebank-1119/law, 2026-11-19 수신):
//   건강기능식품에 관한 법률 MST 285331(2026. 10. 8. 시행) — 제4조 제1항(제조업·판매업·맞춤형건강기능식품판매업, 제2호 삭제)·제2항, 제5조 제1항(제조업 영업소별 허가)·
//     제3항 제3호·제4호의2(품질관리인 미선임·우수건강기능식품제조기준 부적합 시 허가 거부)·제4항(허가 20일·변경신고 7일 통지)·제5항(미통지 시 간주),
//     제6조 제2항(판매업 시·군·구 신고, 약국·맞춤형 판매업 영업소 판매는 제외)·제3항(맞춤형 판매업 신고)·제4항(변경·폐업 신고)·제5항(3일 통지)·제6항(간주),
//     제12조 제1항(제조업 품질관리인), 제12조의3 제1항(맞춤형건강기능식품관리사), 제13조 제1항 단서(판매업 영업소별 매년 교육)·제2항(영업 전 교육)
//   같은 법 시행령 MST 267803(2025. 1. 3. 시행) — 제2조 제1호 가목·나목(전문제조업·벤처제조업), 제3호 가목·나목(일반판매업·유통전문판매업), 제4호(맞춤형건강기능식품판매업),
//     제3조(변경허가 대상=영업소 소재지), 제20조 제1항 제1호·제2호(제조업 허가·맞춤형 판매업 신고 지방식약청 위임)
//   같은 법 시행규칙 MST 286669(2026. 6. 2. 시행) — 제3조 제1항 제1호·제2호(전문·벤처제조업 허가 서류: 품질관리인 선임신고서, 벤처는 위탁생산계약서·기능성 원료 기술자료),
//     제4조 제2항(성명·상호·작업장 등 변경신고), 제5조 제1항(판매업·맞춤형 판매업 신고서, 지방식약청 또는 시·군·구 제출, 제4호 위탁생산계약서, 제4호의2 관리사 선임 신고서),
//     제19조 제1항(판매업 매년 2시간)·제3항(사전 교육: 제조업 8시간, 유통전문 4시간, 일반 2시간, 맞춤형 3시간)·제4항 제2호 다목(유통전문 교육 후 2년 이내 일반판매업은 이수 간주)·
//     제6항 제1호(품질관리인 신규 16시간·보수 6시간)
//   수입식품안전관리 특별법 MST 285337(2026. 10. 8. 시행) — 제14조 제1항 제1호(수입식품등 수입·판매업), 제15조 제1항(영업등록)·제6항(제조업자 등 자사 원료 수입 등록 의제), 제20조 제1항(수입신고)
//   같은 법 시행령 MST 280513 — 제4조 제2호(건강기능식품제조업·유통전문판매업 등록 의제), 제14조 제1항 제1호(영업등록 지방식약청 위임)
//   같은 법 시행규칙 MST 290799(2026. 9. 30. 시행) — 제23조 제2항(수입 영업 사전 위생교육 4시간)
// 인허가 구분: 제조업 = '허가'(지방식약청), 일반·유통전문판매업 = '신고'(시·군·구), 맞춤형판매업 = '신고'(지방식약청), 수입·판매업 = '영업등록'(지방식약청, 다른 법률).
//   현행 영업 종류에 '건강기능식품 수입업'(시행령 제2조 제2호 삭제)·'전문판매업'·'방문판매업'은 없음.
// 확신 없어 뺀 것: 맞춤형건강기능식품관리사 자격 세부(시행령 제5조의2 — 화면은 '자격을 갖춘 관리사' 만), 맞춤형 판매업 책임보험(가입 '할 수 있다' 임의 규정이라 생략),
//   허가·신고 수수료(S4), 시설기준 세부(별표 1 — home-online-sales 에서 일부 다룸), 소분 판매의 일반판매업 해당 여부, 방문판매원 교육 특례(시행규칙 제18조 제4항·제5항).

const SLUG = 'health-functional-food-business-types'

const entry = {
  topic: 'health-food',
  angle: 'comparison',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '건강기능식품 영업 종류',
  source: { type: 'SPEC', query: '건강기능식품 영업 종류' },
  pexelsId: 3683049,
  coverImage: '',
  relatedServices: [
    { title: '건강기능식품 제조업 허가·판매업 신고', href: '/services/health-food' },
  ],

  ko: {
    title: '건강기능식품 영업 종류 — 제조업 허가·판매업 신고·수입 영업등록 중 무엇이 필요할까',
    category: '식품/의약',
    metaTitle: '건강기능식품 영업 종류 — 허가·신고·등록 구분과 사전 교육 비교',
    metaDescription: '건강기능식품 영업은 제조업(허가), 일반·유통전문판매업(신고), 맞춤형건강기능식품판매업(신고)으로 나뉘고 수입은 영업등록입니다. 업종별 기관·교육 시간을 표로 비교했습니다.',
    excerpt: '건강기능식품 영업은 직접 만들거나 위탁해 만드는 제조업(허가), 완제품을 파는 일반판매업과 내 상표로 위탁 생산해 파는 유통전문판매업(신고), 소분·조합하는 맞춤형건강기능식품판매업(신고)으로 나뉩니다. 해외 제품 수입은 다른 법률의 영업등록입니다.',
    content: `<div class="toc"><p>목차</p><ol><li>현행 영업 종류 한눈에 보기</li><li>내 사업에 맞는 영업 고르기</li><li>허가와 신고, 이후 관리의 차이</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>건강기능식품 영업은 건강기능식품에 관한 법률에 따라 제조업, 판매업, 맞춤형건강기능식품판매업 세 가지로 나뉩니다. 제조업은 전문제조업·벤처제조업으로 지방식품의약품안전청의 허가를, 판매업은 일반판매업·유통전문판매업으로 시·군·구 신고를, 맞춤형 판매업은 지방식품의약품안전청 신고를 거칩니다. 해외 제품 수입은 수입식품안전관리 특별법의 수입식품등 수입·판매업 영업등록으로 따로 받습니다.</strong><!-- 근거: 건강기능식품에 관한 법률 제4조 제1항, 제5조 제1항, 제6조 제2항·제3항, 시행령 제2조, 제20조 제1항 제1호·제2호, 수입식품안전관리 특별법 제14조 제1항 제1호, 제15조 제1항 --></p>
<p>판매업 신고 서류와 절차는 <a href="/blog/health-functional-food-home-online-sales">건강기능식품 온라인 판매 자격</a>, 수입 영업등록 기관과 서류는 <a href="/blog/health-food-select">건강기능식품 수입신고 대행·행정사 선택 기준</a>에서 다룹니다.</p>

<h2>현행 영업 종류 한눈에 보기</h2>
<table><thead><tr><th>영업 종류</th><th>하는 일</th><th>인허가·기관</th><th>영업 전 교육</th></tr></thead><tbody>
<tr><td>전문제조업</td><td>건강기능식품을 직접 제조</td><td>허가, 지방식품의약품안전청</td><td>8시간</td></tr>
<tr><td>벤처제조업</td><td>벤처기업이 전문제조업자에게 위탁해 제조</td><td>허가, 지방식품의약품안전청</td><td>8시간</td></tr>
<tr><td>일반판매업</td><td>완제품 판매(유통전문판매업 제외)</td><td>신고, 시·군·구</td><td>2시간</td></tr>
<tr><td>유통전문판매업</td><td>전문제조업자에게 의뢰해 만든 제품을 자기 상표로 유통·판매</td><td>신고, 시·군·구</td><td>4시간</td></tr>
<tr><td>맞춤형건강기능식품판매업</td><td>개인에 맞게 소분·조합한 제품 판매</td><td>신고, 지방식품의약품안전청</td><td>3시간</td></tr>
<tr><td>수입식품등 수입·판매업</td><td>해외 제품을 수입해 판매</td><td>영업등록, 지방식품의약품안전청</td><td>4시간</td></tr>
</tbody></table>
<p>교육 시간은 영업을 시작하기 전에 받는 교육 기준입니다.<!-- 근거: 건강기능식품에 관한 법률 시행규칙 제19조 제3항, 수입식품안전관리 특별법 시행규칙 제23조 제2항 --> 약국이나 맞춤형건강기능식품판매업 영업소에서 건강기능식품을 파는 경우에는 판매업 신고를 따로 하지 않습니다.<!-- 근거: 법 제6조 제2항 단서 --></p>

<h2>내 사업에 맞는 영업 고르기</h2>
<ol><li>공장을 갖추고 직접 만들면 전문제조업 허가입니다. 시설기준, 품질관리인 선임, 우수건강기능식품제조기준 적합이 허가 요건입니다.</li><li>벤처기업 확인을 받은 회사가 기능성 원료 기술을 갖고 위탁 생산하면 벤처제조업 허가를 검토합니다. 위탁생산계약서와 원료 기술자료가 필요합니다.</li><li>벤처기업이 아닌 회사가 내 상표로 위탁 생산해 팔면 유통전문판매업 신고입니다.</li><li>다른 회사 완제품을 사서 팔기만 하면 일반판매업 신고입니다.</li><li>고객 상담을 거쳐 소분·조합해 팔면 맞춤형건강기능식품판매업 신고와 자격을 갖춘 맞춤형건강기능식품관리사가 필요합니다.</li><li>해외에서 들여오면 수입·판매업 영업등록 후 들여올 때마다 수입신고를 합니다.</li></ol>
<p>건강기능식품제조업자나 유통전문판매업자가 자기 제품의 원료로 수입할 때는 수입 영업등록을 한 것으로 보지만, 수입신고는 그대로 해야 합니다.<!-- 근거: 수입식품안전관리 특별법 제15조 제6항, 제20조 제1항, 시행령 제4조 제2호 --> 한 회사가 여러 영업을 함께 하려면 영업마다 허가·신고·등록을 각각 갖춥니다.</p>
<p>전문제조업 허가를 신청할 때는 제조할 제품의 종류와 제조방법설명서, 제조시설 배치도와 주요 기계·기구 목록, 품질관리인 선임신고서, 제품표준서와 제조·위생·품질관리 기준서를 붙여 지방식품의약품안전청에 냅니다. 토지이용계획확인서와 건축물대장은 담당 기관이 행정정보로 확인합니다.<!-- 근거: 시행규칙 제3조 제1항 제1호, 제2항 제1호·제2호 --></p>

<h2>허가와 신고, 이후 관리의 차이</h2>
<table><thead><tr><th>구분</th><th>제조업(허가)</th><th>판매업(신고)</th></tr></thead><tbody>
<tr><td>처리 통지</td><td>신청일부터 20일 이내, 통지가 없으면 허가 간주<!-- 근거: 법 제5조 제4항·제5항 --></td><td>신고일부터 3일 이내, 통지가 없으면 수리 간주<!-- 근거: 법 제6조 제5항·제6항 --></td></tr>
<tr><td>영업소 이전</td><td>변경허가</td><td>변경신고</td></tr>
<tr><td>상호·대표자 변경</td><td>변경신고(7일 이내 수리 통지)<!-- 근거: 법 제5조 제2항·제4항, 시행령 제3조, 시행규칙 제4조 제2항 --></td><td>변경신고</td></tr>
<tr><td>정기 교육</td><td>품질관리인 신규 16시간, 이후 매년 보수 6시간</td><td>영업소별 매년 2시간<!-- 근거: 법 제13조 제1항, 시행규칙 제19조 제1항·제6항 --></td></tr>
</tbody></table>
<p>판매업자가 세무서에 폐업신고를 하거나 사업자등록이 말소되면 신고 사항이 직권으로 말소될 수 있으므로, 영업을 쉬거나 접을 때도 신고 관청 절차를 함께 챙깁니다.<!-- 근거: 법 제6조 제4항·제7항 --> 처음부터 업종을 잘못 고르면 신고를 다시 하고 교육도 다시 받아야 할 수 있습니다. 유선행정사사무소는 사업 구조를 듣고 맞는 영업 종류를 정한 뒤 허가 신청서나 영업신고서, 위탁생산계약서와 관리 인력 서류를 함께 준비합니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 일반판매업으로 신고하고 내 상표 제품도 팔 수 있나요?</p><p class="faq-a">A. 전문제조업자에게 의뢰해 자기 상표로 파는 영업은 일반판매업 범위에서 빠지고 유통전문판매업에 해당합니다. 이때는 위탁생산계약서를 붙여 유통전문판매업으로 신고합니다.<!-- 근거: 시행령 제2조 제3호 가목·나목, 시행규칙 제5조 제1항 제4호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 유통전문판매업 교육을 받았는데 일반판매업을 추가하면 또 받나요?</p><p class="faq-a">A. 유통전문판매업을 위해 영업 전 교육을 받은 날부터 2년 이내에 일반판매업을 하려면 교육을 받은 것으로 봅니다.<!-- 근거: 시행규칙 제19조 제4항 제2호 다목 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 해외 공장에 내 상표로 맡긴 제품은 유통전문판매업인가요?</p><p class="faq-a">A. 유통전문판매업은 국내 전문제조업자에게 의뢰한 제품을 전제로 합니다. 해외에서 만든 제품을 들여오면 수입·판매업 영업등록과 수입신고 절차를 따릅니다.<!-- 근거: 시행령 제2조 제3호 나목, 수입식품안전관리 특별법 제15조 제1항, 제20조 제1항 --></p></div>
</div>

<div class="cta-block"><h3>업종부터 정해야 서류가 정해집니다</h3><p>만들지, 맡길지, 들여올지, 어떻게 팔지 알려 주시면 유선행정사사무소가 필요한 영업 종류와 준비 서류를 정리해 드립니다. 진행 범위는 <a href="/services/health-food">건강기능식품 인허가 안내</a>에서 확인하실 수 있습니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 건강기능식품에 관한 법률 제4조~제6조·제12조·제12조의3·제13조, 시행령 제2조·제3조·제20조, 시행규칙 제3조~제5조·제19조, 수입식품안전관리 특별법 제14조·제15조·제20조, 같은 법 시행령 제4조, 시행규칙 제23조 --></p>`,
  },

  en: {
    title: 'Types of Health Functional Food Business in Korea — Licence, Report or Registration?',
    category: 'Food',
    metaTitle: 'Health Functional Food Business Types in Korea Compared',
    metaDescription: 'Korean health functional food businesses: manufacturing (licence), general or distribution-specialist sales (report), customised sales, and import registration.',
    excerpt: 'Under Korean law, health functional food businesses are manufacturing (licence), general sales and distribution-specialist sales (report), and customised health functional food sales (report). Importing falls under a separate act and needs business registration.',
    content: `<div class="toc"><p>Contents</p><ol><li>Current business types at a glance</li><li>Choosing the right type</li><li>Licence versus report afterwards</li><li>FAQ</li></ol></div>
<p><strong>The Health Functional Foods Act divides the business into manufacturing, sales and customised health functional food sales. Manufacturing (specialist or venture) needs a licence from the regional Ministry of Food and Drug Safety (MFDS) office; sales (general or distribution specialist) needs a report to the city, county or district office; customised sales needs a report to the regional MFDS office. Importing is a separate import and sales business registration under the Special Act on Imported Food Safety Control.</strong></p>
<p>For sales report documents see <a href="/en/blog/health-functional-food-home-online-sales">selling health functional foods online from home</a>.</p>

<h2>Current business types at a glance</h2>
<table><thead><tr><th>Type</th><th>What it does</th><th>Authorisation</th><th>Training before opening</th></tr></thead><tbody>
<tr><td>Specialist manufacturing</td><td>Makes products itself</td><td>Licence, regional MFDS</td><td>8 hours</td></tr>
<tr><td>Venture manufacturing</td><td>A venture company outsources production to a specialist manufacturer</td><td>Licence, regional MFDS</td><td>8 hours</td></tr>
<tr><td>General sales</td><td>Sells finished products</td><td>Report, local district office</td><td>2 hours</td></tr>
<tr><td>Distribution-specialist sales</td><td>Sells own-brand products made by a specialist manufacturer</td><td>Report, local district office</td><td>4 hours</td></tr>
<tr><td>Customised sales</td><td>Sells products portioned and combined for individuals</td><td>Report, regional MFDS</td><td>3 hours</td></tr>
<tr><td>Imported food import and sales</td><td>Imports and sells foreign products</td><td>Registration, regional MFDS</td><td>4 hours</td></tr>
</tbody></table>
<p>Pharmacies and customised sales premises do not file a separate sales report to sell health functional foods.</p>

<h2>Choosing the right type</h2>
<ol><li>Own factory: specialist manufacturing licence, requiring facility standards, a quality manager and good manufacturing practice compliance.</li><li>A certified venture company with ingredient technology outsourcing production: consider a venture manufacturing licence, with a contract and technical data.</li><li>A non-venture company selling its own brand made under contract: distribution-specialist report.</li><li>Buying and reselling finished products: general sales report.</li><li>Portioning and combining after consultation: customised sales report and a qualified customised product manager.</li><li>Bringing products from abroad: import registration, then a declaration per shipment.</li></ol>
<p>Manufacturers and distribution specialists importing raw materials for their own products are treated as registered importers but still declare each import. Each business run by one company needs its own authorisation.</p>
<p>A specialist manufacturing licence application includes the product types and manufacturing method, the facility layout and equipment list, the quality manager appointment and the product and quality control standards; the office checks land use and building records itself.</p>

<h2>Licence versus report afterwards</h2>
<table><thead><tr><th>Item</th><th>Manufacturing (licence)</th><th>Sales (report)</th></tr></thead><tbody>
<tr><td>Decision notice</td><td>Within 20 days; deemed granted if none</td><td>Within 3 days; deemed accepted if none</td></tr>
<tr><td>Moving premises</td><td>Change licence</td><td>Change report</td></tr>
<tr><td>Trade name or representative</td><td>Change report (notice within 7 days)</td><td>Change report</td></tr>
<tr><td>Recurring training</td><td>Quality manager: 16 hours initially, then 6 hours yearly</td><td>2 hours yearly per premises</td></tr>
</tbody></table>
<p>If a seller closes with the tax office or its business registration is cancelled, the sales report may be struck off ex officio, so handle the closure with the reporting office too. Choosing the wrong type can mean filing again and retaking training. YouSun Administrative Agency confirms the type, then prepares the licence application or report, the contract manufacturing agreement and staff documents. See <a href="/en/services/health-food">our health functional food service page</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a general seller also sell its own brand?</p><p class="faq-a">A. Own-brand products made by a specialist manufacturer fall under distribution-specialist sales, so report that type with the contract manufacturing agreement.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do I retake training to add general sales?</p><p class="faq-a">A. Not if you took the distribution-specialist pre-opening training within the last 2 years.</p></div>
<div class="faq-item"><p class="faq-q">Q. What about own-brand products made abroad?</p><p class="faq-a">A. Distribution-specialist sales assumes a Korean specialist manufacturer. Products made abroad follow import registration and declaration.</p></div>
</div>

<div class="cta-block"><h3>The business type decides the paperwork</h3><p>Tell us whether you will make, outsource or import, and how you will sell, and YouSun Administrative Agency will confirm the type and documents. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国健康功能食品营业种类 — 制造业许可、销售业申报还是进口营业登记',
    category: '食品',
    metaTitle: '韩国健康功能食品营业种类比较 — 许可·申报·登记',
    metaDescription: '韩国健康功能食品营业分为制造业（许可）、一般·流通专门销售业（申报）和定制型健康功能食品销售业（申报），进口则须办理营业登记。本文按营业种类比较主管机关和教育时间。',
    excerpt: '韩国健康功能食品（保健食品）营业分为自行或委托生产的制造业（许可）、销售成品的一般销售业和以自有品牌委托生产销售的流通专门销售业（申报），以及分装·组合销售的定制型销售业（申报）。进口适用另一部法律的营业登记。',
    content: `<div class="toc"><p>目录</p><ol><li>现行营业种类一览</li><li>选择适合的营业种类</li><li>许可与申报的后续管理</li><li>常见问题</li></ol></div>
<p><strong>依据《健康功能食品法》，健康功能食品营业分为制造业、销售业和定制型健康功能食品销售业三类。制造业（专门制造业·风险企业制造业）须取得地方食品医药品安全厅许可；销售业（一般销售业·流通专门销售业）向市·郡·区申报；定制型销售业向地方食品医药品安全厅申报。进口海外产品则依《进口食品安全管理特别法》另行办理进口食品等进口·销售业营业登记。</strong></p>
<p>销售业申报材料见<a href="/zh/blog/health-functional-food-home-online-sales">居家网上销售健康功能食品</a>。</p>

<h2>现行营业种类一览</h2>
<table><thead><tr><th>营业种类</th><th>业务内容</th><th>许可形式·机关</th><th>开业前教育</th></tr></thead><tbody>
<tr><td>专门制造业</td><td>自行生产</td><td>许可，地方食品医药品安全厅</td><td>8小时</td></tr>
<tr><td>风险企业制造业</td><td>风险企业委托专门制造业者生产</td><td>许可，地方食品医药品安全厅</td><td>8小时</td></tr>
<tr><td>一般销售业</td><td>销售成品</td><td>申报，市·郡·区</td><td>2小时</td></tr>
<tr><td>流通专门销售业</td><td>委托专门制造业者生产，以自有品牌流通销售</td><td>申报，市·郡·区</td><td>4小时</td></tr>
<tr><td>定制型销售业</td><td>销售按个人需要分装·组合的产品</td><td>申报，地方食品医药品安全厅</td><td>3小时</td></tr>
<tr><td>进口食品等进口·销售业</td><td>进口并销售海外产品</td><td>营业登记，地方食品医药品安全厅</td><td>4小时</td></tr>
</tbody></table>
<p>在药店或定制型销售业营业所销售健康功能食品的，无须另行办理销售业申报。</p>

<h2>选择适合的营业种类</h2>
<ol><li>自建工厂生产：专门制造业许可，须符合设施标准、选任质量管理人并符合优良健康功能食品制造标准。</li><li>已获风险企业确认、拥有功能性原料技术并委托生产的：可考虑风险企业制造业许可，须提交委托生产合同和技术资料。</li><li>非风险企业以自有品牌委托生产销售：流通专门销售业申报。</li><li>只采购他人成品销售：一般销售业申报。</li><li>经咨询后分装·组合销售：定制型销售业申报，并须配备有资格的定制型健康功能食品管理师。</li><li>从海外引进：进口·销售业营业登记，此后每批货物办理进口申报。</li></ol>
<p>制造业者或流通专门销售业者为自家产品进口原料的，视为已办理进口营业登记，但仍须进口申报。同一公司经营多种营业的，须分别取得许可、申报或登记。</p>
<p>申请专门制造业许可时，须向地方食品医药品安全厅提交拟生产产品的种类和制造方法说明书、制造设施布置图和主要机械·器具清单、质量管理人选任申报书，以及产品标准书和制造·卫生·质量管理标准书；土地利用计划确认书和建筑物台账由机关通过行政信息共享确认。</p>

<h2>许可与申报的后续管理</h2>
<table><thead><tr><th>项目</th><th>制造业（许可）</th><th>销售业（申报）</th></tr></thead><tbody>
<tr><td>处理通知</td><td>20日内；未通知视为许可</td><td>3日内；未通知视为受理</td></tr>
<tr><td>营业所迁移</td><td>变更许可</td><td>变更申报</td></tr>
<tr><td>商号·代表人变更</td><td>变更申报（7日内通知）</td><td>变更申报</td></tr>
<tr><td>定期教育</td><td>质量管理人新任16小时，之后每年进修6小时</td><td>每个营业所每年2小时</td></tr>
</tbody></table>
<p>销售业者向税务署办理停业申报或营业执照被注销的，申报事项可能被依职权注销，停业或结业时也要一并办理申报机关的手续。选错营业种类，可能须重新申报、重新受训。YouSun Administrative Agency先确定营业种类，再准备许可申请书或营业申报书、委托生产合同和人员材料。详见<a href="/zh/services/health-food">健康功能食品许可服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 申报一般销售业后，可以销售自有品牌产品吗？</p><p class="faq-a">A. 委托专门制造业者生产并以自有品牌销售的，不属于一般销售业，而属于流通专门销售业，须附委托生产合同另行申报。</p></div>
<div class="faq-item"><p class="faq-q">Q. 已接受流通专门销售业教育，增加一般销售业还要再受训吗？</p><p class="faq-a">A. 自接受流通专门销售业开业前教育之日起2年内开展一般销售业的，视为已受训。</p></div>
<div class="faq-item"><p class="faq-q">Q. 委托海外工厂以自有品牌生产的产品算流通专门销售业吗？</p><p class="faq-a">A. 流通专门销售业以委托韩国专门制造业者为前提。海外生产的产品须走进口·销售业营业登记和进口申报程序。</p></div>
</div>

<div class="cta-block"><h3>先定营业种类，材料才能确定</h3><p>告诉我们是自产、委托还是进口，以及如何销售，YouSun Administrative Agency为你确定营业种类和所需材料。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の健康機能食品の営業の種類 — 製造業の許可・販売業の申告・輸入の営業登録',
    category: '食品',
    metaTitle: '韓国の健康機能食品の営業の種類 — 許可・申告・登録の違い',
    metaDescription: '韓国の健康機能食品の営業は、製造業（許可）、一般・流通専門販売業（申告）、オーダーメイド健康機能食品販売業（申告）に分かれ、輸入は営業登録です。機関と教育時間を比較します。',
    excerpt: '韓国の健康機能食品の営業は、自ら作るか委託して作る製造業（許可）、完成品を売る一般販売業と自社ブランドで委託生産して売る流通専門販売業（申告）、小分け・組み合わせるオーダーメイド販売業（申告）に分かれます。輸入は別の法律の営業登録です。',
    content: `<div class="toc"><p>目次</p><ol><li>現行の営業の種類</li><li>自分の事業に合う営業を選ぶ</li><li>許可と申告、その後の管理の違い</li><li>よくある質問</li></ol></div>
<p><strong>健康機能食品法では、健康機能食品の営業を製造業、販売業、オーダーメイド健康機能食品販売業の三つに分けています。製造業（専門製造業・ベンチャー製造業）は地方食品医薬品安全庁の許可、販売業（一般販売業・流通専門販売業）は市・郡・区への申告、オーダーメイド販売業は地方食品医薬品安全庁への申告です。海外製品の輸入は、輸入食品安全管理特別法による輸入食品等輸入・販売業の営業登録が別に必要です。</strong></p>
<p>販売業の申告書類は<a href="/ja/blog/health-functional-food-home-online-sales">自宅から健康機能食品をネット販売する場合</a>をご覧ください。</p>

<h2>現行の営業の種類</h2>
<table><thead><tr><th>営業の種類</th><th>内容</th><th>許認可・機関</th><th>営業前の教育</th></tr></thead><tbody>
<tr><td>専門製造業</td><td>自ら製造</td><td>許可、地方食品医薬品安全庁</td><td>8時間</td></tr>
<tr><td>ベンチャー製造業</td><td>ベンチャー企業が専門製造業者に委託して製造</td><td>許可、地方食品医薬品安全庁</td><td>8時間</td></tr>
<tr><td>一般販売業</td><td>完成品の販売</td><td>申告、市・郡・区</td><td>2時間</td></tr>
<tr><td>流通専門販売業</td><td>専門製造業者に依頼した製品を自社ブランドで流通・販売</td><td>申告、市・郡・区</td><td>4時間</td></tr>
<tr><td>オーダーメイド販売業</td><td>個人に合わせて小分け・組み合わせた製品の販売</td><td>申告、地方食品医薬品安全庁</td><td>3時間</td></tr>
<tr><td>輸入食品等輸入・販売業</td><td>海外製品を輸入して販売</td><td>営業登録、地方食品医薬品安全庁</td><td>4時間</td></tr>
</tbody></table>
<p>薬局やオーダーメイド販売業の営業所で健康機能食品を販売する場合は、販売業の申告を別にする必要はありません。</p>

<h2>自分の事業に合う営業を選ぶ</h2>
<ol><li>工場を備えて自ら製造するなら専門製造業の許可です。施設基準、品質管理人の選任、優良健康機能食品製造基準への適合が要件です。</li><li>ベンチャー企業の確認を受けた会社が機能性原料の技術をもって委託生産するなら、ベンチャー製造業の許可を検討します。委託生産契約書と技術資料が必要です。</li><li>ベンチャー企業でない会社が自社ブランドで委託生産して売るなら流通専門販売業の申告です。</li><li>他社の完成品を仕入れて売るだけなら一般販売業の申告です。</li><li>相談を経て小分け・組み合わせて売るなら、オーダーメイド販売業の申告と資格のある管理士が必要です。</li><li>海外から持ち込むなら、輸入・販売業の営業登録をし、輸入のたびに輸入申告をします。</li></ol>
<p>製造業者や流通専門販売業者が自社製品の原料として輸入する場合は営業登録をしたものとみなされますが、輸入申告は必要です。一つの会社が複数の営業をするなら、営業ごとに許可・申告・登録をそろえます。</p>
<p>専門製造業の許可を申請するときは、製造する製品の種類と製造方法説明書、製造施設の配置図と主な機械・器具の目録、品質管理人の選任申告書、製品標準書と製造・衛生・品質管理の基準書を添えて地方食品医薬品安全庁に提出します。土地利用計画確認書と建築物台帳は機関が行政情報で確認します。</p>

<h2>許可と申告、その後の管理の違い</h2>
<table><thead><tr><th>項目</th><th>製造業（許可）</th><th>販売業（申告）</th></tr></thead><tbody>
<tr><td>処理の通知</td><td>20日以内、通知がなければ許可したものとみなす</td><td>3日以内、通知がなければ受理したものとみなす</td></tr>
<tr><td>営業所の移転</td><td>変更許可</td><td>変更申告</td></tr>
<tr><td>商号・代表者の変更</td><td>変更申告（7日以内に通知）</td><td>変更申告</td></tr>
<tr><td>定期の教育</td><td>品質管理人は新規16時間、その後毎年6時間</td><td>営業所ごとに毎年2時間</td></tr>
</tbody></table>
<p>販売業者が税務署に廃業申告をしたり事業者登録が抹消されたりすると、申告事項が職権で抹消されることがあるため、休業・廃業のときも申告先の手続をあわせて行います。業種を誤ると、申告や教育をやり直すことになりかねません。YouSun Administrative Agencyは事業の形をうかがって営業の種類を決め、許可申請書や営業申告書、委託生産契約書、人員の書類を準備します。<a href="/ja/services/health-food">健康機能食品の許認可サービス</a>もご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 一般販売業で申告して、自社ブランド製品も売れますか。</p><p class="faq-a">A. 専門製造業者に依頼して自社ブランドで売る営業は一般販売業から除かれ、流通専門販売業にあたります。委託生産契約書を添えて流通専門販売業として申告します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 流通専門販売業の教育を受けた後、一般販売業を加えるとまた受けますか。</p><p class="faq-a">A. 流通専門販売業の営業前教育を受けた日から2年以内に一般販売業を始める場合は、教育を受けたものとみなされます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 海外工場に自社ブランドで委託した製品は流通専門販売業ですか。</p><p class="faq-a">A. 流通専門販売業は韓国の専門製造業者への依頼が前提です。海外で作った製品は輸入・販売業の営業登録と輸入申告の手続によります。</p></div>
</div>

<div class="cta-block"><h3>業種が決まれば書類が決まります</h3><p>自ら作るのか、委託するのか、輸入するのか、どう売るのかをお知らせいただければ、YouSun Administrative Agencyが営業の種類と準備書類を整理します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 제조업 '허가', 판매업 '신고', 수입 '영업등록'
entry.wrongTerms = [
  '건강기능식품 제조업 신고', '판매업 허가', '유통전문판매업 허가', '맞춤형건강기능식품판매업 허가', '건강기능식품 수입업 신고', '방문판매업 신고',
  'manufacturing report', 'sales licence', 'sales license',
  '制造业申报', '销售业许可',
  '製造業の申告', '販売業の許可', '販売業許可',
]

export default entry
