// INHEGA-BLOG-RESTART 원고 (2026-10-24, 맥4 하위 작성)
// 주제: quasi-drug(의약외품허가) / 세부주제: comparison(유사 제도 비교) — 의약외품과 화장품(기능성화장품 포함)의 구분과 영업 절차 비교
//
// 겹침 검사(ko-titles.txt·blog-i18n.ts):
//   quasi-drug-manufacturing-permit(제조업 신고·품목허가 절차), quasi-drug-import-permit(수입업 신고·수입 품목허가),
//   quasi-drug-fix(무허가 처벌·행정처분), quasi-drug-select(대행 선택 기준), cosmetics-*(제조업·책임판매업 등록 절차·시설),
//   functional-cosmetics-*(심사 반려·선택 기준).
//   → 이 글은 "내 제품이 어느 쪽인가(정의·고시 품목·기능성 범위)"와 "그에 따라 갈리는 영업 절차의 종류"만 다룬다.
//     각 절차의 서류·시설 세부는 기존 글로 링크해 넘긴다. "의약외품과 화장품 구분/차이"를 제목으로 한 기존 글 없음.
//
// 법령 대조(law.go.kr DRF API, OC=visionlaw, 2026-10-24 조회):
//   약사법                         MST 285341, 2026. 10. 8. 시행 — 제2조 제4호·제7호, 제31조 제4항·제9항, 제36조 제1항·제2항·제3항
//   의약품 등의 안전에 관한 규칙   MST 284019, 2026. 3. 5. 시행 — 제2조 제1항·제3항, 제5조 제1항 제3호
//   화장품법                       MST 291337, 2026. 10. 20. 시행 — 제2조 제1호·제2호·제10호·제11호, 제3조 제1항~제3항, 제4조 제1항
//   화장품법 시행령                MST 283963, 2026. 4. 2. 시행 — 제2조 제1호·제2호(책임판매업에 수입 화장품 유통·판매 포함)
//   화장품법 시행규칙              MST 285249, 2026. 4. 2. 시행 — 제2조 제1호~제11호, 제3조 제2항, 제4조 제2항, 제9조 제1항, 제10조 제1항
//   식약처 고시 「의약외품 범위 지정」 행정규칙일련번호 2100000189721, 제2020-48호(2020. 5. 29. 발령, 2020. 6. 1. 시행) 제1호~제4호
//
// 확인 못 한 점(본문에 쓰지 않음):
//   - 처리기간·수수료(민원 안내 사항) — 법령 본문에서 확인하지 않아 싣지 않음.
//   - 화장품법 제2조 제1호 단서는 「약사법」상 '의약품'만 제외한다고 적고 '의약외품'은 명시하지 않는다.
//     → 본문은 "의약외품으로 지정된 물품을 제조하려면 약사법 절차"라는 문언 범위로만 서술(화장품 정의에서 의약외품이 빠진다고 쓰지 않음).
//   - 의약외품 시설기준(대통령령) 세부, 치약제 불소 함량 등 수치 — 본문에서 수치는 쓰지 않음.
//   - 데오도런트(화장품)·액취방지제(의약외품) 경계는 화장품 유형 별표를 대조하지 않아 쓰지 않음.
// 금액·수수료·비용 면제 표현 0건. 화면 조문 번호 0건(근거는 <!-- 근거: --> 주석에만).
// 대조표: crosscheck/quasi-drug-vs-cosmetics-classification.md
//

const entry = {
  topic: 'quasi-drug',
  angle: 'comparison',
  slug: 'quasi-drug-vs-cosmetics-classification',
  kind: 'seo3958',
  keyword: '의약외품 화장품 차이',
  pexelsId: 12065623,
  coverImage: '',
  relatedServices: [
    { title: '화장품 제조업·책임판매업 등록', href: '/services/cosmetics' },
    { title: '기능성화장품 심사', href: '/services/functional-cosmetics' },
  ],

  ko: {
    title: '의약외품 화장품 차이 — 법적 정의, 해당 품목, 제조업 신고와 화장품 등록 비교',
    category: '의약외품/화장품',
    metaTitle: '의약외품 화장품 차이 — 정의·품목 예시·신고와 등록 절차 비교',
    metaDescription: '의약외품과 화장품은 적용 법률과 영업 절차가 다릅니다. 법적 정의, 고시로 정한 의약외품 품목, 기능성화장품 범위, 제조업 신고·품목허가와 화장품 등록·심사를 비교해 정리했습니다.',
    excerpt: '같은 생활용품이라도 의약외품이면 「약사법」에 따라 제조업 신고와 품목허가·신고를, 화장품이면 「화장품법」에 따라 제조업·책임판매업 등록과 기능성 심사·보고를 거칩니다. 정의와 품목 예시, 절차 차이를 비교했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>법적 정의부터 다릅니다</li><li>어떤 제품이 어느 쪽에 해당하는가</li><li>영업 절차 비교 — 신고·허가와 등록·심사</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>의약외품과 화장품의 차이는 적용 법률과 영업 절차에서 갈립니다.</strong> 의약외품은 「약사법」에 따라 식품의약품안전처장이 지정한 물품이고, 화장품은 「화장품법」의 정의에 해당하는 물품입니다. 어느 쪽으로 분류되느냐에 따라 제조업 신고와 품목허가를 거칠지, 제조업·책임판매업 등록을 할지가 정해집니다.</p>

<h2>법적 정의부터 다릅니다</h2>
<p>「화장품법」은 화장품을 인체를 청결·미화하여 매력을 더하고 용모를 밝게 변화시키거나 피부·모발의 건강을 유지 또는 증진하기 위하여 바르고 문지르거나 뿌리는 등의 방법으로 사용하는 물품으로서 <strong>인체에 대한 작용이 경미한 것</strong>으로 정의합니다. 「약사법」상 의약품에 해당하는 물품은 화장품에서 빠집니다.<!-- 근거: 화장품법 제2조 제1호 --></p>
<p>「약사법」은 의약외품을 다음 세 갈래 중 하나에 해당하는 물품으로서 <strong>식품의약품안전처장이 지정하는 것</strong>으로 정의합니다. 질병의 진단·치료 목적이나 약리학적 영향을 줄 목적으로 쓰는 물품은 의약외품이 아니라 의약품 쪽으로 갑니다.<!-- 근거: 약사법 제2조 제4호 나목·다목, 제7호 각 목 외 부분 --></p>
<ul>
<li>질병을 치료·경감·처치 또는 예방할 목적으로 사용되는 섬유·고무제품 또는 이와 유사한 것<!-- 근거: 약사법 제2조 제7호 가목 --></li>
<li>인체에 대한 작용이 약하거나 인체에 직접 작용하지 않으며 기구 또는 기계가 아닌 것과 이와 유사한 것<!-- 근거: 약사법 제2조 제7호 나목 --></li>
<li>감염병 예방을 위하여 살균·살충 및 이와 유사한 용도로 사용되는 제제<!-- 근거: 약사법 제2조 제7호 다목 --></li>
</ul>
<p>기능성화장품은 별도 법률이 아니라 <strong>화장품의 한 종류</strong>입니다. 미백·주름개선·자외선 차단 등 법이 정한 효능에 도움을 주는 화장품으로서 총리령으로 정하는 것입니다.<!-- 근거: 화장품법 제2조 제2호 --></p>

<h2>어떤 제품이 어느 쪽에 해당하는가</h2>
<p>의약외품의 구체적인 품목은 식약처 고시 「의약외품 범위 지정」이 정하고, 기능성화장품의 범위는 「화장품법 시행규칙」이 정합니다.</p>
<table><thead><tr><th>구분</th><th>법령에 나오는 품목 예시</th></tr></thead><tbody>
<tr><td>의약외품(섬유·고무제품 등)</td><td>생리대·탐폰·생리컵, 수술용·보건용·비말차단용 마스크, 안대·붕대·거즈·탈지면·반창고<!-- 근거: 의약외품 범위 지정 고시 제1호 가목~다목 --></td></tr>
<tr><td>의약외품(작용이 약한 제제 등)</td><td>치약제, 구중청량제, 액취방지제, 땀띠·짓무름용제, 모기·진드기 기피제, 콘택트렌즈관리용품, 인체용 외용 소독제, 치아미백제, 니코틴이 없는 금연 보조 제품<!-- 근거: 의약외품 범위 지정 고시 제2호 가목·다목~바목·자목 --></td></tr>
<tr><td>의약외품(유사 물품)</td><td>구강 청결용 물휴지, 멸균면봉·멸균장갑, 휴대용 산소 흡입 물품<!-- 근거: 의약외품 범위 지정 고시 제4호 나목·다목·마목 --></td></tr>
<tr><td>기능성화장품</td><td>미백, 주름 개선, 자외선 차단·태닝, 염모·탈염·탈색, 제모, 탈모 증상 완화, 여드름성 피부 완화(인체세정용), 피부장벽 기능 회복, 튼살 붉은 선 완화<!-- 근거: 화장품법 시행규칙 제2조 제1호~제11호 --></td></tr>
<tr><td>일반 화장품</td><td>화장품 정의에 맞고 위에 해당하지 않는 제품</td></tr>
</tbody></table>
<p>염모제와 탈모 관련 제품은 현재 고시 목록에 없고, 「화장품법 시행규칙」이 기능성화장품으로 정하고 있습니다. 다만 일시적으로 모발 색을 바꾸는 제품, 물리적으로 체모를 제거하는 제품, 코팅 등으로 모발을 굵게 보이게만 하는 제품은 기능성화장품 범위에서 빠집니다.<!-- 근거: 화장품법 시행규칙 제2조 제6호·제7호·제8호 단서 --> 분류는 다음 순서로 확인하십시오.</p>
<ol>
<li>사용 목적이 질병의 진단·치료이거나 약리학적 영향을 주려는 것인지 봅니다. 그렇다면 의약품 검토 대상입니다.</li>
<li>「의약외품 범위 지정」 고시 목록에 해당하는 품목인지 확인합니다.</li>
<li>고시 품목이 아니라면 기능성화장품 범위에 드는 효능을 표방하는지 확인합니다.</li>
<li>어디에도 해당하지 않으면 일반 화장품으로 보고 영업 등록 여부를 정합니다.</li>
</ol>

<h2>영업 절차 비교 — 신고·허가와 등록·심사</h2>
<p>분류가 정해지면 필요한 절차의 이름부터 달라집니다. 의약외품은 <strong>제조업 '신고'</strong>와 <strong>품목 '허가' 또는 '신고'</strong>, 화장품은 <strong>영업 '등록'</strong>, 기능성화장품은 여기에 <strong>품목별 '심사' 또는 '보고서 제출'</strong>이 더해집니다.</p>
<table><thead><tr><th>비교 항목</th><th>의약외품</th><th>화장품(기능성 포함)</th></tr></thead><tbody>
<tr><td>영업 절차</td><td>시설기준을 갖추고 제조업신고<!-- 근거: 약사법 제31조 제4항 --></td><td>화장품제조업 또는 화장품책임판매업 등록<!-- 근거: 화장품법 제3조 제1항 --></td></tr>
<tr><td>접수처</td><td>지방식품의약품안전청장<!-- 근거: 의약품 등의 안전에 관한 규칙 제2조 제1항 --></td><td>제조소 또는 책임판매업소 소재지 관할 지방식품의약품안전청장<!-- 근거: 화장품법 시행규칙 제3조 제2항, 제4조 제2항 --></td></tr>
<tr><td>제품 단위 절차</td><td>품목별 품목허가 또는 품목신고(표준제조기준에 맞는 품목 등은 신고)<!-- 근거: 약사법 제31조 제4항, 의약품 등의 안전에 관한 규칙 제5조 제1항 제3호 --></td><td>일반 화장품은 품목 단위 허가 절차 없음, 기능성화장품은 안전성·유효성 심사 또는 보고서 제출<!-- 근거: 화장품법 제4조 제1항 --></td></tr>
<tr><td>필수 인력</td><td>제조관리자(약사·한약사, 섬유·고무제품 등만 제조하면 식약처장 승인 기술자)<!-- 근거: 약사법 제36조 제1항·제2항 --></td><td>책임판매업은 책임판매관리자, 제조업은 시설기준 충족<!-- 근거: 화장품법 제3조 제2항·제3항 --></td></tr>
</tbody></table>
<p>의약외품 제조업 신고를 할 때는 그 업종에 속하는 품목을 하나 이상 함께 허가 신청하거나 신고해야 합니다.<!-- 근거: 의약품 등의 안전에 관한 규칙 제2조 제3항 --> 신고 내용을 바꿀 때도 변경신고 대상인지 확인해야 합니다.<!-- 근거: 약사법 제31조 제9항 --> 서류와 진행 순서는 <a href="/blog/quasi-drug-manufacturing-permit">의약외품 제조업 신고와 품목허가 절차</a>에서 다뤘습니다.</p>
<p>화장품은 직접 만들면 화장품제조업, 자기 이름으로 유통·판매하거나 수입하면 화장품책임판매업이 기준입니다. 2차 포장이나 표시만 하는 공정은 제조에 들어가지 않습니다.<!-- 근거: 화장품법 제2조 제10호·제11호 --> 책임판매업 요건은 <a href="/blog/cosmetics-responsible-distributor">화장품 책임판매업 등록 절차</a>, 등록 대행은 <a href="/services/cosmetics">화장품 제조업·책임판매업 등록</a> 안내를 참고하십시오. 기능성화장품은 고시 품목과 성분·함량 등이 같으면 심사 대신 식품의약품안전평가원장에게 보고서를 내고, 그 밖에는 심사를 받습니다.<!-- 근거: 화장품법 시행규칙 제9조 제1항, 제10조 제1항 제1호 --> 자세한 내용은 <a href="/services/functional-cosmetics">기능성화장품 심사</a> 안내에 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 화장품 책임판매업 등록으로 치약이나 마스크도 만들어 팔 수 있나요?</p><p class="faq-a">A. 치약제와 수술용·보건용·비말차단용 마스크는 고시상 의약외품입니다. 이를 제조하려면 「약사법」에 따른 제조업신고와 품목허가 또는 품목신고가 따로 필요합니다.<!-- 근거: 약사법 제31조 제4항, 의약외품 범위 지정 고시 제1호 나목·제2호 가목 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 탈모 샴푸는 의약외품인가요, 기능성화장품인가요?</p><p class="faq-a">A. 탈모 증상의 완화에 도움을 주는 화장품은 「화장품법 시행규칙」상 기능성화장품입니다. 물리적으로 모발을 굵게 보이게만 하는 제품은 기능성 범위에서 빠집니다.<!-- 근거: 화장품법 시행규칙 제2조 제8호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 기능성화장품도 식약처 허가를 받아야 하나요?</p><p class="faq-a">A. 기능성화장품은 허가가 아니라 품목별 안전성·유효성 심사를 받거나 보고서를 제출하는 절차입니다. 화장품제조업자·책임판매업자 또는 총리령으로 정하는 대학·연구소 등이 신청합니다.<!-- 근거: 화장품법 제4조 제1항 --></p></div>
</div>

<div class="cta-block"><h3>제품 분류와 인허가 경로를 함께 점검하세요</h3><p>분류에 따라 준비할 시설·인력·서류가 달라집니다. 유선행정사사무소가 제품 정보를 바탕으로 분류와 필요한 신고·등록 절차를 함께 검토합니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=quasi-drug-vs-cosmetics-classification">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 약사법, 의약품 등의 안전에 관한 규칙, 화장품법, 화장품법 시행규칙, 식품의약품안전처 고시 「의약외품 범위 지정」 --></p>`,
  },

  en: {
    title: 'Quasi-Drug vs Cosmetics in Korea — Legal Definitions, Product Examples and Licensing Routes',
    category: 'Quasi-drugs & Cosmetics',
    metaTitle: 'Quasi-Drug vs Cosmetics in Korea — Definitions and Procedures Compared',
    metaDescription: 'How Korean law separates quasi-drugs from cosmetics: legal definitions, designated products, functional cosmetics, and report, permit and registration routes.',
    excerpt: 'A quasi-drug in Korea goes through a manufacturing business report and a product permit or report under the Pharmaceutical Affairs Act, while cosmetics need business registration under the Cosmetics Act. Here is how to tell them apart.',
    content: `<div class="toc"><p>Contents</p><ol><li>The legal definitions differ</li><li>Which products fall where</li><li>Procedures compared — report and permit vs registration and review</li><li>FAQ</li></ol></div>
<p><strong>The difference between a quasi-drug and a cosmetic in Korea lies in the governing law and the business procedure.</strong> A quasi-drug (의약외품) is an article designated by the Minister of Food and Drug Safety under the Pharmaceutical Affairs Act, while a cosmetic is an article that meets the definition in the Cosmetics Act. The classification decides whether you file a manufacturing business report and obtain a product permit, or register as a cosmetics manufacturer or responsible distributor.</p>

<h2>The legal definitions differ</h2>
<p>The Cosmetics Act defines a cosmetic as an article applied to the body by rubbing, spreading, spraying or similar methods to cleanse or beautify the body, add attractiveness, brighten the appearance, or maintain or improve the health of skin and hair, <strong>with only a mild effect on the human body</strong>. Articles that are medicines under the Pharmaceutical Affairs Act are excluded.</p>
<p>The Pharmaceutical Affairs Act defines a quasi-drug as an article in one of the three groups below <strong>that the Minister of Food and Drug Safety designates</strong>. Articles used to diagnose or treat disease, or to produce a pharmacological effect, are medicines rather than quasi-drugs.</p>
<ul>
<li>Textile or rubber products, or similar items, used to treat, relieve, manage or prevent disease</li>
<li>Items with a weak effect on the body or no direct effect on it, which are not instruments or machines, and similar items</li>
<li>Preparations used for sterilisation, insecticide or similar purposes to prevent infectious diseases</li>
</ul>
<p>Functional cosmetics are not governed by a separate law; they are <strong>a type of cosmetic</strong> that helps with effects set out in the Act, such as whitening, wrinkle improvement or UV protection, as specified by Ordinance of the Prime Minister.</p>

<h2>Which products fall where</h2>
<p>Specific quasi-drug items are listed in the MFDS public notice on the designation of the scope of quasi-drugs, and the scope of functional cosmetics is set by the Enforcement Rule of the Cosmetics Act.</p>
<table><thead><tr><th>Category</th><th>Examples named in the rules</th></tr></thead><tbody>
<tr><td>Quasi-drugs (textile and rubber products, etc.)</td><td>Sanitary pads, tampons and menstrual cups; surgical, health and droplet-blocking masks; eye patches, bandages, gauze, cotton wool and adhesive plasters</td></tr>
<tr><td>Quasi-drugs (mild preparations, etc.)</td><td>Toothpaste, mouth fresheners, antiperspirants for body odour, prickly heat remedies, mosquito and tick repellents, contact lens care products, external disinfectants for human use, tooth whiteners, smoking cessation aids without nicotine</td></tr>
<tr><td>Quasi-drugs (similar items)</td><td>Oral cleansing wet wipes, sterile swabs and gloves, portable oxygen inhalers</td></tr>
<tr><td>Functional cosmetics</td><td>Whitening, wrinkle improvement, UV protection and tanning, hair dyeing and bleaching, hair removal, relief of hair-loss symptoms, acne-prone skin care (cleansing products only), skin barrier recovery, stretch mark redness</td></tr>
<tr><td>General cosmetics</td><td>Products that fit the cosmetic definition and none of the above</td></tr>
</tbody></table>
<p>Hair dyes and hair-loss products are not on the current quasi-drug list; the Enforcement Rule treats them as functional cosmetics. Products that change hair colour only temporarily, remove hair physically, or merely make hair look thicker by coating are outside the functional scope. A safe order for classifying a product is:</p>
<ol>
<li>Check whether the purpose is to diagnose or treat disease or to cause a pharmacological effect. If so, review it as a medicine.</li>
<li>Check whether it appears on the quasi-drug designation list.</li>
<li>If not, check whether it claims an effect within the functional cosmetics scope.</li>
<li>If none applies, treat it as a general cosmetic and decide on business registration.</li>
</ol>

<h2>Procedures compared — report and permit vs registration and review</h2>
<p>Once the classification is settled, even the names of the procedures change. Quasi-drugs need a <strong>manufacturing business report</strong> and a <strong>product permit or product report</strong>; cosmetics need <strong>business registration</strong>; functional cosmetics add a <strong>product-by-product review or report submission</strong>.</p>
<table><thead><tr><th>Item</th><th>Quasi-drugs</th><th>Cosmetics (incl. functional)</th></tr></thead><tbody>
<tr><td>Business procedure</td><td>Manufacturing business report after meeting facility standards</td><td>Registration as a cosmetics manufacturer or responsible distributor</td></tr>
<tr><td>Filed with</td><td>Regional Office of Food and Drug Safety</td><td>Regional Office with jurisdiction over the factory or distributor's office</td></tr>
<tr><td>Product-level step</td><td>Product permit or product report for each item (report for items meeting standard manufacturing criteria, etc.)</td><td>No product permit for general cosmetics; safety and efficacy review or report for functional cosmetics</td></tr>
<tr><td>Required staff</td><td>Manufacturing manager (pharmacist or herbal pharmacist; an approved technician if only textile or rubber products are made)</td><td>Responsible sales manager for distributors; facility standards for manufacturers</td></tr>
</tbody></table>
<p>When filing a quasi-drug manufacturing business report, you must apply for a permit for, or report, at least one product in that line at the same time, and changes may require a change report. Our post on the <a href="/en/blog/cosmetics-responsible-distributor">cosmetics responsible distributor registration</a> covers the distributor route.</p>
<p>If you make cosmetics yourself, you need manufacturer registration; if you distribute or import them under your name, you need responsible distributor registration. Secondary packaging or labelling alone does not count as manufacturing. For functional cosmetics, a product identical in ingredients and content to a notified item can be reported to the National Institute of Food and Drug Safety Evaluation instead of reviewed; others are reviewed. See our <a href="/en/services/cosmetics">cosmetics registration</a> and <a href="/en/services/functional-cosmetics">functional cosmetics review</a> services.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a cosmetics responsible distributor registration cover making and selling toothpaste or masks?</p><p class="faq-a">A. Toothpaste and surgical, health and droplet-blocking masks are designated quasi-drugs. Making them requires a manufacturing business report and a product permit or report under the Pharmaceutical Affairs Act.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is an anti-hair-loss shampoo a quasi-drug or a functional cosmetic?</p><p class="faq-a">A. A cosmetic that helps relieve hair-loss symptoms is a functional cosmetic under the Enforcement Rule. A product that only makes hair look thicker physically is outside that scope.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do functional cosmetics need an MFDS permit?</p><p class="faq-a">A. No. They go through a product-by-product safety and efficacy review or report submission, filed by a cosmetics manufacturer, responsible distributor, or a qualifying university or research institute.</p></div>
</div>

<div class="cta-block"><h3>Check product classification and licensing route together</h3><p>Facilities, staff and documents differ depending on whether your product is a quasi-drug or a cosmetic. YouSun Administrative Agency reviews your product information and the reports or registrations you need. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=quasi-drug-vs-cosmetics-classification">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国医药外品与化妆品的区别 — 法律定义、品目示例与申报·登记程序比较',
    category: '医药外品/化妆品',
    metaTitle: '韩国医药外品与化妆品区别 — 定义与程序比较',
    metaDescription: '韩国法律如何区分医药外品与化妆品？本文整理法律定义、告示指定的医药外品品目、功能性化妆品范围，并比较医药外品制造业申报、品目许可与化妆品营业登记、功能性审查的区别。',
    excerpt: '在韩国，医药外品须依《药事法》办理制造业申报及品目许可或申报，化妆品则须依《化妆品法》办理制造业、责任销售业登记，功能性化妆品另需审查或提交报告书。',
    content: `<div class="toc"><p>目录</p><ol><li>法律定义不同</li><li>哪些产品属于哪一类</li><li>程序比较 — 申报·许可与登记·审查</li><li>常见问题</li></ol></div>
<p><strong>韩国医药外品与化妆品的区别，在于适用法律和营业程序。</strong>医药外品（의약외품）是依《药事法》由食品医药品安全处长指定的物品，化妆品则是符合《化妆品法》定义的物品。分类结果决定您要办理制造业申报和品目许可，还是办理化妆品制造业或责任销售业登记。</p>

<h2>法律定义不同</h2>
<p>《化妆品法》将化妆品定义为：为清洁、美化人体以增加魅力、使容貌明亮，或维持、增进皮肤与毛发健康，以涂抹、揉擦、喷洒等方式使用于人体，且<strong>对人体作用轻微</strong>的物品。属于《药事法》上医药品的物品不属于化妆品。</p>
<p>《药事法》将医药外品定义为属于以下三类之一、<strong>并由食品医药品安全处长指定</strong>的物品。以诊断、治疗疾病或产生药理作用为目的的物品属于医药品，而非医药外品。</p>
<ul>
<li>用于治疗、减轻、处置或预防疾病的纤维、橡胶制品或类似物品</li>
<li>对人体作用较弱或不直接作用于人体、且非器具或机械的物品及类似物品</li>
<li>为预防传染病而用于杀菌、杀虫及类似用途的制剂</li>
</ul>
<p>功能性化妆品并非由另一部法律规范，而是<strong>化妆品的一种</strong>，指有助于美白、改善皱纹、防晒等法定功效、并由总理令规定的化妆品。</p>

<h2>哪些产品属于哪一类</h2>
<p>医药外品的具体品目由食品医药品安全处告示《医药外品范围指定》规定，功能性化妆品的范围由《化妆品法施行规则》规定。</p>
<table><thead><tr><th>类别</th><th>法规列举的品目示例</th></tr></thead><tbody>
<tr><td>医药外品（纤维·橡胶制品等）</td><td>卫生巾、卫生棉条、月经杯；手术用、保健用、飞沫阻隔用口罩；眼罩、绷带、纱布、脱脂棉、创可贴</td></tr>
<tr><td>医药外品（作用较弱的制剂等）</td><td>牙膏、口腔清新剂、腋臭防止剂、痱子用剂、蚊虫及蜱虫驱避剂、隐形眼镜护理用品、人体用外用消毒剂、牙齿美白剂、不含尼古丁的戒烟辅助产品</td></tr>
<tr><td>医药外品（类似物品）</td><td>口腔清洁湿巾、灭菌棉签与灭菌手套、便携式氧气吸入用品</td></tr>
<tr><td>功能性化妆品</td><td>美白、改善皱纹、防晒与助晒、染发与脱色、脱毛、缓解脱发症状、缓解痤疮皮肤（限清洁产品）、修复皮肤屏障、淡化妊娠纹红线</td></tr>
<tr><td>一般化妆品</td><td>符合化妆品定义且不属于上述任何一类的产品</td></tr>
</tbody></table>
<p>染发剂和脱发相关产品目前不在医药外品告示目录中，施行规则将其规定为功能性化妆品。但暂时改变发色、以物理方式除毛、或仅通过涂层使头发看起来更粗的产品，不属于功能性范围。建议按以下顺序判断：</p>
<ol>
<li>确认使用目的是否为诊断、治疗疾病或产生药理作用；如是，应按医药品研究。</li>
<li>确认是否属于《医药外品范围指定》告示所列品目。</li>
<li>如不属于，确认是否标榜功能性化妆品范围内的功效。</li>
<li>均不属于时，按一般化妆品决定营业登记事项。</li>
</ol>

<h2>程序比较 — 申报·许可与登记·审查</h2>
<p>分类确定后，所需程序的名称也随之不同。医药外品需要<strong>制造业申报</strong>和<strong>品目许可或品目申报</strong>，化妆品需要<strong>营业登记</strong>，功能性化妆品还需<strong>按品目审查或提交报告书</strong>。</p>
<table><thead><tr><th>比较项目</th><th>医药外品</th><th>化妆品（含功能性）</th></tr></thead><tbody>
<tr><td>营业程序</td><td>具备设施标准后办理制造业申报</td><td>化妆品制造业或化妆品责任销售业登记</td></tr>
<tr><td>受理机关</td><td>地方食品医药品安全厅</td><td>制造所或责任销售业所所在地管辖的地方食品医药品安全厅</td></tr>
<tr><td>品目程序</td><td>按品目办理许可或申报（符合标准制造基准的品目等为申报）</td><td>一般化妆品无品目许可；功能性化妆品须接受安全性·有效性审查或提交报告书</td></tr>
<tr><td>必备人员</td><td>制造管理者（药师·韩药师；仅制造纤维·橡胶制品等时为经批准的技术人员）</td><td>责任销售业须设责任销售管理者；制造业须符合设施标准</td></tr>
</tbody></table>
<p>办理医药外品制造业申报时，须同时就该业种至少一个品目申请许可或办理申报；变更申报事项时也须确认是否需要变更申报。责任销售业的具体要求请参阅<a href="/zh/blog/cosmetics-responsible-distributor">化妆品责任销售业登记指南</a>。</p>
<p>自行生产化妆品须办理制造业登记，以自己名义流通、销售或进口则须办理责任销售业登记。仅进行二次包装或标示的工序不属于制造。功能性化妆品若与告示品目的成分、含量等相同，可向食品医药品安全评价院长提交报告书代替审查，其他情况须接受审查。相关服务见<a href="/zh/services/cosmetics">化妆品登记</a>与<a href="/zh/services/functional-cosmetics">功能性化妆品审查</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 凭化妆品责任销售业登记，可以生产并销售牙膏或口罩吗？</p><p class="faq-a">A. 牙膏以及手术用、保健用、飞沫阻隔用口罩是告示指定的医药外品。制造这些产品须依《药事法》另行办理制造业申报及品目许可或品目申报。</p></div>
<div class="faq-item"><p class="faq-q">Q. 防脱发洗发水是医药外品还是功能性化妆品？</p><p class="faq-a">A. 有助于缓解脱发症状的化妆品，依施行规则属于功能性化妆品。仅以物理方式使头发看起来更粗的产品不在该范围内。</p></div>
<div class="faq-item"><p class="faq-q">Q. 功能性化妆品也需要食药处许可吗？</p><p class="faq-a">A. 不是许可，而是按品目接受安全性·有效性审查或提交报告书，由化妆品制造业者、责任销售业者或总理令规定的大学·研究所等办理。</p></div>
</div>

<div class="cta-block"><h3>请同时确认产品分类与许可路径</h3><p>产品属于医药外品还是化妆品，所需设施、人员和材料都不同。유선행정사사무소（代表行政士 정유선）将根据产品信息一并审查分类及所需申报·登记程序。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=quasi-drug-vs-cosmetics-classification">申请咨询</a></div>
<p class="author-block">유선행정사사무소（代表行政士 정유선）</p>`,
  },

  ja: {
    title: '韓国の医薬外品と化粧品の違い — 法的定義・該当品目・製造業申告と化粧品登録の比較',
    category: '医薬外品・化粧品',
    metaTitle: '韓国の医薬外品と化粧品の違い — 定義と手続きの比較',
    metaDescription: '韓国法で医薬外品と化粧品はどう区別されるのか。法的定義、告示で指定された医薬外品の品目、機能性化粧品の範囲、製造業申告・品目許可と化粧品登録・審査の違いを整理しました。',
    excerpt: '韓国では、医薬外品は「薬事法」に基づく製造業申告と品目許可または品目申告、化粧品は「化粧品法」に基づく製造業・責任販売業の登録、機能性化粧品はさらに審査または報告書提出が必要です。',
    content: `<div class="toc"><p>目次</p><ol><li>法的定義から異なります</li><li>どの製品がどちらに当たるか</li><li>手続きの比較 — 申告・許可と登録・審査</li><li>よくある質問</li></ol></div>
<p><strong>韓国における医薬外品と化粧品の違いは、適用される法律と営業手続きにあります。</strong>医薬外品（의약외품）は「薬事法」に基づき食品医薬品安全処長が指定する物品であり、化粧品は「化粧品法」の定義に当たる物品です。どちらに分類されるかによって、製造業申告と品目許可を行うのか、化粧品製造業・責任販売業の登録を行うのかが決まります。</p>

<h2>法的定義から異なります</h2>
<p>「化粧品法」は化粧品を、人体を清潔・美化して魅力を加え、容貌を明るく変化させ、または皮膚・毛髪の健康を維持・増進するために、塗る・こする・噴霧するなどの方法で使用する物品であって、<strong>人体への作用が軽微なもの</strong>と定義しています。「薬事法」上の医薬品に当たる物品は化粧品から除かれます。</p>
<p>「薬事法」は医薬外品を、次の三つのいずれかに当たる物品で<strong>食品医薬品安全処長が指定するもの</strong>と定義しています。疾病の診断・治療や薬理学的作用を目的とする物品は、医薬外品ではなく医薬品となります。</p>
<ul>
<li>疾病の治療・軽減・処置または予防を目的に使用される繊維・ゴム製品またはこれに類するもの</li>
<li>人体への作用が弱いか人体に直接作用せず、器具・機械ではないもの及びこれに類するもの</li>
<li>感染症予防のため殺菌・殺虫及びこれに類する用途に使用される製剤</li>
</ul>
<p>機能性化粧品は別の法律ではなく<strong>化粧品の一種</strong>であり、美白・しわ改善・紫外線防止など法定の効能に役立つ化粧品で、総理令で定めるものを指します。</p>

<h2>どの製品がどちらに当たるか</h2>
<p>医薬外品の具体的な品目は食品医薬品安全処の告示「医薬外品範囲指定」が、機能性化粧品の範囲は「化粧品法施行規則」が定めています。</p>
<table><thead><tr><th>区分</th><th>法令に挙げられた品目の例</th></tr></thead><tbody>
<tr><td>医薬外品（繊維・ゴム製品など）</td><td>生理用ナプキン・タンポン・月経カップ、手術用・保健用・飛沫遮断用マスク、眼帯・包帯・ガーゼ・脱脂綿・絆創膏</td></tr>
<tr><td>医薬外品（作用の弱い製剤など）</td><td>歯磨き剤、口中清涼剤、腋臭防止剤、あせも・ただれ用剤、蚊・ダニ忌避剤、コンタクトレンズケア用品、人体用外用消毒剤、歯牙美白剤、ニコチンを含まない禁煙補助製品</td></tr>
<tr><td>医薬外品（類似物品）</td><td>口腔清浄用ウェットティッシュ、滅菌綿棒・滅菌手袋、携帯用酸素吸入用品</td></tr>
<tr><td>機能性化粧品</td><td>美白、しわ改善、紫外線防止・日焼け、染毛・脱染・脱色、除毛、脱毛症状の緩和、にきび肌の緩和（洗浄製品に限る）、皮膚バリア機能の回復、妊娠線の赤みの緩和</td></tr>
<tr><td>一般化粧品</td><td>化粧品の定義に合い、上記のいずれにも当たらない製品</td></tr>
</tbody></table>
<p>染毛剤と脱毛関連製品は現在の医薬外品告示の目録になく、施行規則が機能性化粧品として定めています。ただし一時的に髪色を変える製品、物理的に体毛を除去する製品、コーティングなどで髪を太く見せるだけの製品は機能性の範囲から外れます。分類は次の順序で確認するのが安全です。</p>
<ol>
<li>使用目的が疾病の診断・治療や薬理学的作用かを確認します。該当すれば医薬品として検討します。</li>
<li>「医薬外品範囲指定」告示の目録に当たる品目かを確認します。</li>
<li>当たらなければ、機能性化粧品の範囲に入る効能を標榜しているかを確認します。</li>
<li>いずれにも当たらなければ一般化粧品として営業登録の要否を決めます。</li>
</ol>

<h2>手続きの比較 — 申告・許可と登録・審査</h2>
<p>分類が決まると、必要な手続きの名称から変わります。医薬外品は<strong>製造業「申告」</strong>と<strong>品目「許可」または「申告」</strong>、化粧品は<strong>営業「登録」</strong>、機能性化粧品はさらに<strong>品目ごとの「審査」または「報告書提出」</strong>が加わります。</p>
<table><thead><tr><th>比較項目</th><th>医薬外品</th><th>化粧品（機能性を含む）</th></tr></thead><tbody>
<tr><td>営業手続き</td><td>施設基準を備えて製造業申告</td><td>化粧品製造業または化粧品責任販売業の登録</td></tr>
<tr><td>提出先</td><td>地方食品医薬品安全庁</td><td>製造所または責任販売業所の所在地を管轄する地方食品医薬品安全庁</td></tr>
<tr><td>品目単位の手続き</td><td>品目ごとに品目許可または品目申告（標準製造基準に合う品目などは申告）</td><td>一般化粧品は品目許可なし、機能性化粧品は安全性・有効性の審査または報告書提出</td></tr>
<tr><td>必要な人員</td><td>製造管理者（薬剤師・韓薬剤師、繊維・ゴム製品などのみ製造する場合は承認を受けた技術者）</td><td>責任販売業は責任販売管理者、製造業は施設基準の充足</td></tr>
</tbody></table>
<p>医薬外品の製造業申告をする際は、その業種に属する品目を一つ以上同時に許可申請または申告しなければなりません。申告事項を変更する場合も変更申告の対象か確認が必要です。責任販売業の要件は<a href="/ja/blog/cosmetics-responsible-distributor">化粧品責任販売業登録ガイド</a>をご覧ください。</p>
<p>自ら化粧品を製造する場合は製造業、自社名で流通・販売または輸入する場合は責任販売業の登録が基準です。二次包装や表示のみの工程は製造に含まれません。機能性化粧品は、告示品目と成分・含量などが同じであれば審査に代えて食品医薬品安全評価院長に報告書を提出し、それ以外は審査を受けます。<a href="/ja/services/cosmetics">化粧品登録</a>と<a href="/ja/services/functional-cosmetics">機能性化粧品審査</a>のご案内もご参照ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 化粧品責任販売業の登録で歯磨き剤やマスクを製造・販売できますか？</p><p class="faq-a">A. 歯磨き剤と手術用・保健用・飛沫遮断用マスクは告示上の医薬外品です。これらを製造するには「薬事法」に基づく製造業申告と品目許可または品目申告が別途必要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 脱毛防止シャンプーは医薬外品ですか、機能性化粧品ですか？</p><p class="faq-a">A. 脱毛症状の緩和に役立つ化粧品は施行規則上の機能性化粧品です。物理的に髪を太く見せるだけの製品はその範囲から外れます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 機能性化粧品にも食薬処の許可が必要ですか？</p><p class="faq-a">A. 許可ではなく、品目ごとに安全性・有効性の審査を受けるか報告書を提出する手続きです。化粧品製造業者、責任販売業者、または総理令で定める大学・研究所などが行います。</p></div>
</div>

<div class="cta-block"><h3>製品分類と許認可の経路を一緒に確認しましょう</h3><p>医薬外品か化粧品かによって、準備すべき施設・人員・書類が異なります。YouSun Administrative Agencyが製品情報をもとに分類と必要な申告・登録手続きを検討します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=quasi-drug-vs-cosmetics-classification">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 チョン・ユソン）</p>`,
  },
}

entry.wrongTerms = [
    '의약외품 제조업 허가', '의약외품 제조업허가', '의약외품제조업 허가',
    '화장품 제조업 허가', '화장품제조업 허가', '화장품 제조업허가',
    '화장품책임판매업 허가', '화장품 책임판매업 허가', '책임판매업 허가',
    '기능성화장품 허가', '기능성 화장품 허가',
    'quasi-drug manufacturing permit', 'quasi-drug manufacturing license',
    'cosmetics manufacturing permit', 'cosmetics manufacturing license', 'functional cosmetics permit',
    '医药外品制造业许可', '化妆品制造业许可', '化妆品责任销售业许可', '功能性化妆品许可',
    '医薬外品製造業許可', '化粧品製造業許可', '化粧品責任販売業許可', '機能性化粧品許可',
  ]

export default entry
