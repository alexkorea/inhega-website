// 원고 은행 — INHE-BANK-1119 담당 C(맥4 하위 작성, kind=seo3958, angle=procedure)
// 주제(풀): health-food(건강기능식품) / 절차 질문: "해외 건강기능식품을 수입해 팔려면 어떤 순서로 무엇을 하나?"(외국기업 관점 포함)
// 대표 검색어(안): '건강기능식품 수입' (SPEC 배정표) — 제목·메타제목 맨 앞.
//
// 겹침 검사: health-food-select(영업등록·수입신고 기관/서류/행정사 선택 — ko 전용), health-food-fix(무등록·무신고 처벌, 등록취소·영업정지),
//   health-functional-food-home-online-sales(판매업 신고, FAQ 에서 수입은 영업등록 필요라고만 언급)
//   → 해외제조업소 등록·수입신고 시점·검사 종류(최초 정밀검사, 동일 제품 재수입)·OEM 수입 의무·외국인 신청인 서류를 순서대로 엮은 글 없음.
//     영업등록 기관·서류 상세와 처벌은 위 두 글로 링크만.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 로컬 사본 ~/work/inhebank-1119/law, 2026-11-19 수신):
//   수입식품안전관리 특별법 MST 285337(2026. 10. 8. 시행) — 제2조 제3호(해외제조업소)·제7호(직접구매 해외식품등), 제5조 제1항(수입자 또는 해외제조업소
//     설치·운영자가 수입신고 전까지 등록 신청)·제5항(미등록 시 수입신고 수리 거부 가능)·제6항(유효기간 2년, 2년 범위 연장), 제6조 제1항·제2항(현지실사·수입중단),
//     제14조 제1항(수입식품등 수입·판매업, 인터넷 구매 대행업 등), 제15조 제1항(영업등록)·제6항(제조업자 등 자사제품 제조용 원료 수입 시 등록 의제),
//     제17조 제1항(매년 위생교육)·제2항(미리 교육)·제3항(관리책임자 대리 수강), 제18조 제2항 제1호·제2호(주문자상표부착: 현지 위생평가, 검사 기록 2년 보관),
//     제20조 제1항(판매 목적 수입 시 수입신고)·제2항 제5호(건강기능식품 기준·규격 위반 제품 수입신고 금지)·제9항(OEM 소비기한 설정사유서), 제21조 제1항(통관 전 검사)
//   같은 법 시행령 MST 280513(2025. 12. 23. 시행) — 제2조 제1호·제3호(수입·판매업, 인터넷 구매 대행업 범위), 제3조(변경등록 대상=영업소 소재지),
//     제4조 제2호(건강기능식품제조업·유통전문판매업 등록 의제), 제14조 제1항 제1호·제5호·제6호(영업등록·수입신고 수리·검사 지방식약청 위임), 제2항 제1호(해외제조업소 등록 식품안전정보원 위탁)
//   같은 법 시행규칙 MST 290799(2026. 9. 30. 시행) — 제2조 제1항(해외제조업소 등록신청서+수출국 허가·등록 증명서류, 식품안전정보원장 제출)·제4항(유효기간 만료 7일 전 연장 신청),
//     제16조 제1항(영업등록신청서, 교육이수증·시설사용계약서, 지방식약청 제출)·제2항(외국인 신청인: 본국 기관 발행 서류 또는 공증 진술서로 영사관 확인)·제3항(영업등록증),
//     제17조 제1항(소재지 변경등록 30일 이내), 제23조 제1항(매년 3시간)·제2항(사전 4시간), 제24조 제4호(외국인 영업자는 관리책임자 대리 수강),
//     제27조 제1항(수입신고서 통관장소 관할 지방식약청 제출, 도착 예정일 5일 전부터 미리 신고, 제1호 한글표시 포장지·서류, 제1호의2 제품 사진, 제4호 OEM 소비기한 설정사유서)·제2항(구매대행 통관 전 신고),
//     제30조 제1항(검사 후 수입신고확인증), 별표 7 제1호(독립 사무소, 전자상거래 주택 사무소 예외, 위생적 보관창고·다른 곳 임차 가능, 직접 소비자 판매 안 하면 창고 생략 가능),
//     별표 9 제2호 가목~라목(서류·현장·정밀·무작위표본검사), 가목 7)(정밀검사 후 동일사 동일수입식품등 재수입은 서류검사), 별표 10 제1호 가목 1)(최초 수입=1등급, 정밀검사)·제4호 바목(건강기능식품 동일 제품 5년)
// 인허가 구분: 수입·판매업 = 영업'등록'(지방식약청), 품목마다 수입'신고'(통관장소 관할 지방식약청), 해외제조업소 = '등록'(식품안전정보원 위탁). 허가 아님. 판매업 '신고'(시·군·구)와 별개.
// 확신 없어 뺀 것: 영업등록·수입신고 처리기간(법령 본문에 없음 — 검사 종류별 일수 미확인), 검사·등록 수수료(S4), 벌칙 금액(S4, health-food-fix 로 링크),
//   해외 본사 명의 국내 지점(외국회사 영업소)으로 영업등록할 때의 세부 요건(법령에 명시 없음 — 화면은 '국내 사무소·창고 시설기준' 사실만),
//   한글표시사항 세부 항목(식품 등의 표시·광고에 관한 법률 미대조), 수입신고 생략 대상(별표 8의2) 세부, 우수수입업소 검사 생략 세부.

const SLUG = 'health-functional-food-import-procedure'

const entry = {
  topic: 'health-food',
  angle: 'procedure',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '건강기능식품 수입',
  source: { type: 'SPEC', query: '건강기능식품 수입' },
  pexelsId: 29300543,
  coverImage: '',
  relatedServices: [
    { title: '건강기능식품 수입 영업등록·수입신고', href: '/services/health-food' },
  ],

  ko: {
    title: '건강기능식품 수입 절차 — 해외 제품을 들여와 팔기까지 등록·신고·검사 순서',
    category: '식품/의약',
    metaTitle: '건강기능식품 수입 절차 — 해외제조업소 등록부터 수입신고·검사까지',
    metaDescription: '해외 건강기능식품을 수입해 팔려면 수입·판매업 영업등록, 해외제조업소 등록, 수입신고와 검사를 차례로 거칩니다. 외국기업이 준비할 서류와 첫 수입 때 정밀검사까지 정리했습니다.',
    excerpt: '해외 건강기능식품을 판매 목적으로 들여오려면 지방식품의약품안전청에 수입식품등 수입·판매업 영업등록을 하고, 수입신고 전까지 해외제조업소를 등록한 뒤, 들여올 때마다 수입신고와 검사를 거쳐 수입신고확인증을 받아야 팔 수 있습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>누가 어떤 방식으로 들여오나</li><li>단계별 수입 절차</li><li>외국기업이 따로 챙길 것</li><li>유선행정사사무소가 돕는 범위</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>해외 건강기능식품을 팔 목적으로 들여오려면 세 가지 절차를 차례로 거칩니다. 먼저 지방식품의약품안전청에 수입식품등 수입·판매업 영업등록을 하고, 수입신고 전까지 해외제조업소를 등록한 다음, 제품이 들어올 때마다 수입신고를 하고 검사에 적합해야 수입신고확인증을 받아 판매할 수 있습니다.</strong><!-- 근거: 수입식품안전관리 특별법 제5조 제1항, 제15조 제1항, 제20조 제1항, 제21조 제1항, 시행규칙 제30조 제1항 --> 건강기능식품 판매업 신고만으로는 수입할 수 없습니다.</p>
<p>영업등록 기관과 서류는 <a href="/blog/health-food-select">건강기능식품 수입신고 대행·행정사 선택 기준</a>, 등록 없이 수입했을 때의 처분은 <a href="/blog/health-food-fix">건강기능식품 수입 영업등록 취소·처벌 정리</a>에서 따로 다룹니다.</p>

<h2>누가 어떤 방식으로 들여오나</h2>
<table><thead><tr><th>수입 방식</th><th>필요한 절차</th></tr></thead><tbody>
<tr><td>국내 회사가 직접 수입해 판매</td><td>수입식품등 수입·판매업 영업등록 후 품목마다 수입신고</td></tr>
<tr><td>소비자 주문을 받아 해외 사이트에서 대신 구매</td><td>수입식품등 인터넷 구매 대행업 영업등록, 통관 전에 구매대행 수입신고<!-- 근거: 법 제14조 제1항 제3호, 시행규칙 제27조 제2항 --></td></tr>
<tr><td>건강기능식품제조업자·유통전문판매업자가 자사 제품 원료로 수입</td><td>영업등록을 한 것으로 보지만 수입신고는 해야 합니다.<!-- 근거: 법 제15조 제6항, 시행령 제4조 제2호 --></td></tr>
<tr><td>개인이 직접 먹으려고 해외 사이트에서 구매</td><td>판매 목적 수입이 아니어서 이 절차와 구분되며, 되팔려면 영업등록과 수입신고가 필요합니다.<!-- 근거: 법 제2조 제7호, 제20조 제1항 --></td></tr>
</tbody></table>

<h2>단계별 수입 절차</h2>
<ol><li>영업 전에 수입식품 위생교육 4시간을 받습니다.<!-- 근거: 법 제17조 제2항, 시행규칙 제23조 제2항 --></li><li>독립된 사무소와 위생적인 보관창고를 갖춥니다. 창고는 다른 곳을 임차해도 되고, 소비자에게 직접 팔지 않으면 따로 두지 않을 수 있습니다.<!-- 근거: 시행규칙 별표 7 제1호 가목~다목 --></li><li>지방식품의약품안전청에 영업등록을 신청해 영업등록증을 받습니다.</li><li>수입신고 전까지 해외제조업소의 명칭·소재지·생산 품목을 등록합니다.</li><li>제품이 들어오면 통관장소 관할 지방식품의약품안전청에 수입신고를 하고 검사를 받습니다.</li><li>적합 판정으로 수입신고확인증을 받은 뒤 판매합니다.</li></ol>
<table><thead><tr><th>단계</th><th>제출처</th><th>핵심 서류·시점</th></tr></thead><tbody>
<tr><td>영업등록</td><td>지방식품의약품안전청</td><td>영업등록신청서, 교육이수증, 창고를 임차한 경우 시설사용계약서<!-- 근거: 시행규칙 제16조 제1항 --></td></tr>
<tr><td>해외제조업소 등록</td><td>식품안전정보원</td><td>등록신청서와 수출국에서 허가·등록을 받았음을 보여 주는 서류, 유효기간 2년<!-- 근거: 법 제5조 제6항, 시행령 제14조 제2항 제1호, 시행규칙 제2조 제1항 --></td></tr>
<tr><td>수입신고</td><td>통관장소 관할 지방식품의약품안전청</td><td>수입신고서, 한글표시가 된 포장지 또는 한글표시 서류, 제품 사진. 도착 예정일 5일 전부터 미리 신고 가능<!-- 근거: 시행규칙 제27조 제1항 --></td></tr>
<tr><td>검사</td><td>지방식품의약품안전청</td><td>서류·현장·정밀·무작위표본검사 중 대상에 따라 실시, 처음 수입하는 제품은 정밀검사<!-- 근거: 시행규칙 별표 9 제2호, 별표 10 제1호 가목 --></td></tr>
</tbody></table>
<p>해외제조업소를 등록하지 않으면 수입신고가 수리되지 않을 수 있고, 국내 기준·규격에 맞지 않는 건강기능식품은 수입신고 자체를 할 수 없습니다.<!-- 근거: 법 제5조 제5항, 제20조 제2항 제5호 --> 그래서 제품 성분과 표시를 국내 기준으로 먼저 검토한 뒤 첫 선적을 정하는 편이 안전합니다.</p>

<h2>외국기업이 따로 챙길 것</h2>
<p>해외제조업소 등록은 국내 수입자뿐 아니라 해외 공장을 운영하는 회사도 직접 신청할 수 있습니다.<!-- 근거: 법 제5조 제1항 --> 반면 영업등록은 국내 사무소·창고 시설기준을 갖춰야 하므로, 한국에 거점이 없다면 이미 영업등록을 한 수입·판매업자를 통해 들여오는 방법을 검토합니다. 신청인이 외국인이면 결격 여부를 확인하려고 본국 기관이 발행한 서류나 공증받은 진술서로서 영사관 확인을 거친 서류를 요구받을 수 있고, 위생교육은 종업원 중 관리책임자를 지정해 대신 받게 할 수 있습니다.<!-- 근거: 시행규칙 제16조 제2항, 법 제17조 제3항, 시행규칙 제24조 제4호 --> 자기 상표로 해외 공장에 위탁 생산한 제품을 들여오면 해외식품 위생평가기관의 현지 위생평가를 받게 하고, 제품 검사 기록을 2년간 보관하며, 수입신고 때 소비기한 설정사유서를 냅니다.<!-- 근거: 법 제18조 제2항 제1호·제2호, 제20조 제9항, 시행규칙 제27조 제1항 제4호 --></p>

<h2>유선행정사사무소가 돕는 범위</h2>
<p>유선행정사사무소는 수입 방식에 맞는 영업 종류를 정하고, 영업등록 신청서와 시설 서류, 해외제조업소 등록 신청, 외국인 신청인 서류 준비를 함께 처리합니다. 해외 제조사와 주고받을 서류 목록을 첫 선적 전에 정리해 두면 보완 요청으로 통관이 늦어지는 일을 줄일 수 있습니다. 국내에서 판매만 하는 단계라면 <a href="/blog/health-functional-food-home-online-sales">건강기능식품 온라인 판매 자격</a>도 참고하실 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 같은 제품을 다시 들여와도 매번 정밀검사를 받나요?</p><p class="faq-a">A. 정밀검사를 받은 제품과 제조국·해외제조업소·제품명·제조방법·원료·배합비율이 모두 같고 5년 안에 다시 수입하면 서류검사 대상으로 분류됩니다.<!-- 근거: 시행규칙 별표 9 제2호 가목 7), 별표 10 제4호 바목 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 해외제조업소 등록은 한 번 하면 끝인가요?</p><p class="faq-a">A. 유효기간이 2년이라 계속 수입하려면 만료 7일 전까지 연장을 신청합니다. 등록 사항이 바뀌면 변경등록도 해야 합니다.<!-- 근거: 법 제5조 제2항·제6항·제7항, 시행규칙 제2조 제4항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 영업등록 뒤에도 매년 할 일이 있나요?</p><p class="faq-a">A. 매년 위생교육 3시간을 받고, 영업소를 옮기면 30일 이내에 새 소재지 관할 지방식품의약품안전청에 변경등록을 합니다.<!-- 근거: 법 제17조 제1항, 시행령 제3조, 시행규칙 제17조 제1항, 제23조 제1항 --></p></div>
</div>

<div class="cta-block"><h3>첫 선적 전에 순서부터 맞추세요</h3><p>들여올 제품과 해외 제조사, 판매 방식을 알려 주시면 유선행정사사무소가 필요한 등록·신고와 준비 서류를 정리해 드립니다. 진행 범위는 <a href="/services/health-food">건강기능식품 인허가 안내</a>에서 확인하실 수 있습니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 수입식품안전관리 특별법 제2조·제5조·제14조·제15조·제17조·제18조·제20조·제21조, 시행령 제2조~제4조·제14조, 시행규칙 제2조·제16조·제17조·제23조·제24조·제27조·제30조·별표 7·별표 9·별표 10 --></p>`,
  },

  en: {
    title: 'Importing Health Functional Foods Into Korea — Registration, Declaration and Inspection Steps',
    category: 'Food',
    metaTitle: 'Importing Health Functional Foods Into Korea: Step by Step',
    metaDescription: 'Importing health functional foods into Korea for sale: business registration, foreign manufacturer registration, then an import declaration and inspection.',
    excerpt: 'To bring health functional foods into Korea for sale, register an imported food import and sales business with the regional MFDS office, register the foreign manufacturing site before declaring, then file an import declaration and pass inspection for every shipment.',
    content: `<div class="toc"><p>Contents</p><ol><li>Who imports, and how</li><li>Import steps</li><li>Points for foreign companies</li><li>How we help</li><li>FAQ</li></ol></div>
<p><strong>Importing health functional foods into Korea for sale takes three steps in order. Register an imported food import and sales business with the regional Ministry of Food and Drug Safety (MFDS) office, register the foreign manufacturing site before your first declaration, and file an import declaration for every shipment. Only after passing inspection and receiving the import declaration certificate may you sell.</strong> A health functional food sales report alone does not allow importing.</p>
<p>For selling in Korea once goods have cleared, see <a href="/en/blog/health-functional-food-home-online-sales">selling health functional foods online from home</a>.</p>

<h2>Who imports, and how</h2>
<table><thead><tr><th>Import model</th><th>What is needed</th></tr></thead><tbody>
<tr><td>A Korean company imports and sells</td><td>Import and sales business registration, then a declaration per product</td></tr>
<tr><td>Buying from overseas sites on behalf of consumers</td><td>Online purchase agency registration and a declaration before customs clearance</td></tr>
<tr><td>A licensed manufacturer or distribution specialist importing raw materials for its own products</td><td>Treated as registered, but the import declaration is still required</td></tr>
<tr><td>An individual buying for personal use</td><td>Not an import for sale; reselling requires registration and declaration</td></tr>
</tbody></table>

<h2>Import steps</h2>
<ol><li>Complete 4 hours of imported food hygiene training before opening.</li><li>Set up an independent office and a hygienic warehouse; the warehouse may be leased elsewhere, and is optional if you never sell directly to consumers.</li><li>Apply to the regional MFDS office and receive the business registration certificate.</li><li>Register the foreign manufacturer's name, address and products before declaring.</li><li>When goods arrive, file the declaration with the MFDS office covering the customs location and undergo inspection.</li><li>Sell after receiving the import declaration certificate.</li></ol>
<table><thead><tr><th>Step</th><th>Where</th><th>Key documents and timing</th></tr></thead><tbody>
<tr><td>Business registration</td><td>Regional MFDS office</td><td>Application, training certificate, facility lease if the warehouse is leased</td></tr>
<tr><td>Foreign manufacturer registration</td><td>Korea Food Safety Information Service</td><td>Application and proof of licensing in the exporting country; valid for 2 years</td></tr>
<tr><td>Import declaration</td><td>MFDS office for the customs location</td><td>Declaration form, Korean-language label or label document, product photos; may be filed from 5 days before arrival</td></tr>
<tr><td>Inspection</td><td>Regional MFDS office</td><td>Document, on-site, laboratory or random sampling inspection; first imports get laboratory testing</td></tr>
</tbody></table>
<p>An unregistered manufacturer can lead to a rejected declaration, and products that fail Korean standards and specifications cannot be declared at all, so review ingredients and labels against Korean standards before the first shipment.</p>

<h2>Points for foreign companies</h2>
<p>The overseas factory operator may itself register the manufacturing site. Business registration, however, requires an office and warehouse meeting the facility standards, so without a Korean base consider importing through an already registered importer. A foreign applicant may be asked for documents issued by home-country authorities or a notarised statement confirmed by a Korean consulate, and may appoint an employee as manager to attend hygiene training. For own-brand products made under contract abroad, arrange an on-site hygiene assessment by a designated assessment body, keep test records for 2 years, and submit a shelf-life rationale with the declaration.</p>

<h2>How we help</h2>
<p>YouSun Administrative Agency identifies the right business type, prepares the registration and facility documents, files the foreign manufacturer registration and assembles foreign applicant documents. See <a href="/en/services/health-food">our health functional food service page</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Is every repeat shipment tested in a laboratory?</p><p class="faq-a">A. If the product matches a lab-tested one in country, manufacturer, name, method, ingredients and ratios and is re-imported within 5 years, it falls under document inspection.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is foreign manufacturer registration permanent?</p><p class="faq-a">A. It is valid for 2 years; apply for an extension at least 7 days before expiry, and register any changes.</p></div>
<div class="faq-item"><p class="faq-q">Q. What recurs after registration?</p><p class="faq-a">A. Annual hygiene training of 3 hours, and a change registration within 30 days if the business moves.</p></div>
</div>

<div class="cta-block"><h3>Get the order right before the first shipment</h3><p>Tell us the products, the foreign manufacturer and how you will sell, and YouSun Administrative Agency will set out the registrations, declarations and documents needed. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '向韩国进口健康功能食品的流程 — 从登记、申报到检验',
    category: '食品',
    metaTitle: '向韩国进口健康功能食品 — 营业登记、海外工厂登记与进口申报',
    metaDescription: '向韩国进口健康功能食品（保健食品）用于销售，须依次办理进口·销售业营业登记、海外制造企业登记，以及每批货物的进口申报和检验。本文说明外国企业须准备的材料。',
    excerpt: '以销售为目的向韩国进口健康功能食品，须先向地方食品医药品安全厅办理进口食品等进口·销售业营业登记，在进口申报前登记海外制造企业，然后每批货物办理进口申报并通过检验，取得进口申报确认证后方可销售。',
    content: `<div class="toc"><p>目录</p><ol><li>谁以何种方式进口</li><li>进口步骤</li><li>外国企业须注意的事项</li><li>我们可以协助的范围</li><li>常见问题</li></ol></div>
<p><strong>以销售为目的向韩国进口健康功能食品（건강기능식품，相当于保健食品），须依次完成三项手续：先向地方食品医药品安全厅办理进口食品等进口·销售业营业登记；在进口申报前登记海外制造企业；每批货物入境时办理进口申报，检验合格并取得进口申报确认证后才能销售。</strong>仅办理健康功能食品销售业申报不能进口。</p>
<p>通关后在韩国销售的说明，见<a href="/zh/blog/health-functional-food-home-online-sales">居家网上销售健康功能食品</a>。</p>

<h2>谁以何种方式进口</h2>
<table><thead><tr><th>进口方式</th><th>所需手续</th></tr></thead><tbody>
<tr><td>韩国公司直接进口并销售</td><td>进口·销售业营业登记，之后按品目进口申报</td></tr>
<tr><td>接受消费者委托在海外网站代购</td><td>进口食品等网络代购业营业登记，通关前办理代购进口申报</td></tr>
<tr><td>制造业者、流通专门销售业者为自家产品进口原料</td><td>视为已登记，但仍须进口申报</td></tr>
<tr><td>个人为自用在海外网站购买</td><td>不属于以销售为目的的进口；如要转售，须办理登记和申报</td></tr>
</tbody></table>

<h2>进口步骤</h2>
<ol><li>开业前接受4小时进口食品卫生教育。</li><li>具备独立办公室和卫生的保管仓库；仓库可在别处租用，不直接向消费者销售的可不设仓库。</li><li>向地方食品医药品安全厅申请营业登记，领取营业登记证。</li><li>进口申报前登记海外制造企业的名称、所在地和生产品目。</li><li>货物到达后，向管辖通关地点的地方食品医药品安全厅申报并接受检验。</li><li>检验合格、取得进口申报确认证后销售。</li></ol>
<table><thead><tr><th>步骤</th><th>提交机关</th><th>主要材料与时点</th></tr></thead><tbody>
<tr><td>营业登记</td><td>地方食品医药品安全厅</td><td>营业登记申请书、教育完成证、租用仓库的设施使用合同</td></tr>
<tr><td>海外制造企业登记</td><td>食品安全信息院</td><td>登记申请书及在出口国取得许可·登记的证明材料，有效期2年</td></tr>
<tr><td>进口申报</td><td>管辖通关地点的地方食品医药品安全厅</td><td>进口申报书、有韩文标示的包装或韩文标示材料、产品照片；可自预计到达日前5日起提前申报</td></tr>
<tr><td>检验</td><td>地方食品医药品安全厅</td><td>按对象实施书面、现场、精密或随机抽样检验；首次进口的产品须精密检验</td></tr>
</tbody></table>
<p>未登记海外制造企业的，进口申报可能不被受理；不符合韩国标准·规格的健康功能食品不能申报进口，因此首批发货前应先按韩国标准检查成分和标示。</p>

<h2>外国企业须注意的事项</h2>
<p>海外制造企业登记除韩国进口商外，海外工厂的运营者也可以直接申请。而营业登记须具备符合设施标准的办公室和仓库，在韩国没有据点的，可考虑通过已登记的进口·销售业者进口。申请人为外国人的，可能被要求提交本国机关签发的材料或经公证的陈述书并经韩国领事馆确认；卫生教育可指定员工中的管理责任人代为参加。以自有品牌委托海外工厂生产的产品，须由海外食品卫生评价机构进行现场卫生评价，检验记录保存2年，并在进口申报时提交保质期设定理由书。</p>

<h2>我们可以协助的范围</h2>
<p>YouSun Administrative Agency根据进口方式确定营业种类，准备营业登记申请和设施材料，办理海外制造企业登记，并协助整理外国申请人材料。详见<a href="/zh/services/health-food">健康功能食品许可服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 同一产品再次进口，每次都要精密检验吗？</p><p class="faq-a">A. 与已接受精密检验的产品在制造国、海外制造企业、产品名、制造方法、原料及配比上完全相同，且在5年内再次进口的，归为书面检验对象。</p></div>
<div class="faq-item"><p class="faq-q">Q. 海外制造企业登记一次就够了吗？</p><p class="faq-a">A. 有效期为2年，须在到期前7日前申请延长；登记事项变更时须办理变更登记。</p></div>
<div class="faq-item"><p class="faq-q">Q. 登记后每年还要做什么？</p><p class="faq-a">A. 每年接受3小时卫生教育；营业所迁移的，须在30日内办理变更登记。</p></div>
</div>

<div class="cta-block"><h3>首批发货前先理顺顺序</h3><p>告诉我们要进口的产品、海外制造商和销售方式，YouSun Administrative Agency为你整理所需的登记、申报和材料。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国へ健康機能食品を輸入する手順 — 登録・輸入申告・検査の順番',
    category: '食品',
    metaTitle: '韓国への健康機能食品の輸入 — 営業登録・海外製造業所登録・輸入申告',
    metaDescription: '韓国へ健康機能食品を販売目的で輸入するには、輸入・販売業の営業登録、海外製造業所の登録、輸入ごとの申告と検査が必要です。外国企業が準備する書類も解説します。',
    excerpt: '韓国で販売するために健康機能食品を輸入するには、地方食品医薬品安全庁で輸入食品等輸入・販売業の営業登録をし、輸入申告の前までに海外製造業所を登録したうえで、輸入のたびに申告と検査を経て輸入申告確認証を受ける必要があります。',
    content: `<div class="toc"><p>目次</p><ol><li>誰がどの方法で輸入するか</li><li>輸入の手順</li><li>外国企業が押さえる点</li><li>サポートの範囲</li><li>よくある質問</li></ol></div>
<p><strong>韓国で販売する目的で健康機能食品（건강기능식품）を輸入するには、三つの手続を順に進めます。まず地方食品医薬品安全庁で輸入食品等輸入・販売業の営業登録をし、輸入申告の前までに海外製造業所を登録し、製品が届くたびに輸入申告をして検査に適合し、輸入申告確認証を受けてから販売します。</strong>健康機能食品販売業の申告だけでは輸入できません。</p>
<p>通関後に韓国で販売する方法は<a href="/ja/blog/health-functional-food-home-online-sales">自宅から健康機能食品をネット販売する場合</a>をご覧ください。</p>

<h2>誰がどの方法で輸入するか</h2>
<table><thead><tr><th>輸入の形</th><th>必要な手続</th></tr></thead><tbody>
<tr><td>韓国の会社が直接輸入して販売</td><td>輸入・販売業の営業登録の後、品目ごとに輸入申告</td></tr>
<tr><td>消費者の注文を受けて海外サイトで購入を代行</td><td>輸入食品等インターネット購入代行業の営業登録、通関前の購入代行輸入申告</td></tr>
<tr><td>製造業者・流通専門販売業者が自社製品の原料として輸入</td><td>営業登録をしたものとみなされますが、輸入申告は必要です</td></tr>
<tr><td>個人が自分で食べるために海外サイトで購入</td><td>販売目的の輸入ではありません。転売するなら登録と申告が必要です</td></tr>
</tbody></table>

<h2>輸入の手順</h2>
<ol><li>営業前に輸入食品の衛生教育を4時間受けます。</li><li>独立した事務所と衛生的な保管倉庫を用意します。倉庫は別の場所を借りてもよく、消費者に直接販売しなければ設けなくても構いません。</li><li>地方食品医薬品安全庁に営業登録を申請し、営業登録証を受け取ります。</li><li>輸入申告の前までに海外製造業所の名称・所在地・生産品目を登録します。</li><li>製品が到着したら、通関場所を管轄する地方食品医薬品安全庁に輸入申告をして検査を受けます。</li><li>適合となり輸入申告確認証を受けてから販売します。</li></ol>
<table><thead><tr><th>段階</th><th>提出先</th><th>主な書類・時期</th></tr></thead><tbody>
<tr><td>営業登録</td><td>地方食品医薬品安全庁</td><td>営業登録申請書、教育修了証、倉庫を借りる場合は施設使用契約書</td></tr>
<tr><td>海外製造業所登録</td><td>食品安全情報院</td><td>登録申請書と輸出国で許可・登録を受けたことを示す書類、有効期間2年</td></tr>
<tr><td>輸入申告</td><td>通関場所を管轄する地方食品医薬品安全庁</td><td>輸入申告書、ハングル表示のある包装またはハングル表示の書類、製品写真。到着予定日の5日前から事前申告可</td></tr>
<tr><td>検査</td><td>地方食品医薬品安全庁</td><td>書類・現場・精密・無作為標本検査のいずれか。初めて輸入する製品は精密検査</td></tr>
</tbody></table>
<p>海外製造業所を登録していないと輸入申告が受理されないことがあり、韓国の基準・規格に合わない健康機能食品はそもそも輸入申告ができません。初回の船積み前に、成分と表示を韓国の基準で確認しておくと安全です。</p>

<h2>外国企業が押さえる点</h2>
<p>海外製造業所の登録は、韓国の輸入者だけでなく海外工場を運営する会社も直接申請できます。一方、営業登録には施設基準を満たす事務所と倉庫が必要なため、韓国に拠点がなければ、すでに営業登録をした輸入・販売業者を通じて輸入する方法を検討します。申請人が外国人の場合、本国の機関が発行した書類や公証を受けた陳述書で韓国の領事館の確認を受けたものを求められることがあり、衛生教育は従業員の中から管理責任者を指定して代わりに受けさせることができます。自社ブランドで海外工場に製造を委託した製品は、海外食品衛生評価機関による現地衛生評価を受けさせ、検査記録を2年間保管し、輸入申告の際に消費期限の設定理由書を提出します。</p>

<h2>サポートの範囲</h2>
<p>YouSun Administrative Agencyは、輸入の形に合う営業の種類を決め、営業登録申請と施設書類、海外製造業所の登録申請、外国人申請人の書類準備まで対応します。<a href="/ja/services/health-food">健康機能食品の許認可サービス</a>もご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 同じ製品を再び輸入しても毎回精密検査ですか。</p><p class="faq-a">A. 精密検査を受けた製品と製造国・海外製造業所・製品名・製造方法・原料・配合比率がすべて同じで、5年以内に再輸入する場合は書類検査の対象になります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 海外製造業所の登録は一度で終わりですか。</p><p class="faq-a">A. 有効期間は2年なので、輸入を続けるなら満了の7日前までに延長を申請します。登録事項が変わったときは変更登録も必要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 営業登録の後、毎年することはありますか。</p><p class="faq-a">A. 毎年3時間の衛生教育を受け、営業所を移したときは30日以内に変更登録をします。</p></div>
</div>

<div class="cta-block"><h3>初回の船積み前に順番を整えましょう</h3><p>輸入する製品、海外の製造業者、販売方法をお知らせいただければ、YouSun Administrative Agencyが必要な登録・申告と準備書類を整理します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 수입·판매업은 '영업등록', 품목은 '수입신고', 허가 아님
entry.wrongTerms = [
  '수입판매업 허가', '수입·판매업 허가', '건강기능식품 수입허가', '수입업 신고증', '해외제조업소 허가',
  'import license for health functional foods', 'import sales business permit', 'import permit for each shipment',
  '进口销售业许可', '进口许可证',
  '輸入販売業の許可', '輸入許可証',
]

export default entry
