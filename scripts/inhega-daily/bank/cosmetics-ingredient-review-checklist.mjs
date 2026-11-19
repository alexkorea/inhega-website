// 원고 은행 — INHE-BANK-1119(2026-11-19, 맥4 하위 작성 담당 B, kind=seo3958, angle=checklist)
// 주제(풀): cosmetics-distributor(화장품책임판매업등록) / 세부주제: checklist — 수입·출시 전 전성분(원료) 검토 체크리스트
// 대표 검색어: '화장품 성분 검토'(배정표 대표 검색어안 그대로)
//
// 겹침 검사(lib/blog-posts-data.ts·lib/i18n/blog-i18n.ts·bank/cosmetics-*.mjs 대조):
//   cosmetics-import-sales-registration-guide — 수입 판매 등록 절차·관리자·'전성분 표시 기준과 한국어 표기' H2(표시 일반론)
//     → 이 글은 표시 일반론을 반복하지 않고 '처방(원료) 단계 대조'와 '처방표→전성분 표시로 옮길 때' 규칙만 짧게. 등록·표시 일반은 링크.
//   cosmetics-distributor-compliance-obligations — 원료 목록 보고(유통·판매 전)·실적 보고 → FAQ 한 줄 + 링크.
//   quasi-drug-vs-cosmetics-classification — 의약외품/화장품 구분 → 링크만.
//   functional-cosmetics-fix/select — 기능성 심사 반려·대행 → 이 글은 '기능성 해당 여부 판단' 한 단계로만 언급, 서비스 링크.
//   cosmetics-responsible-distributor·cosmetics-fix·cosmetics-select·cosmetics-manufacturing-* — 등록·처분·제조업 → 겹침 없음.
//   '성분 검토'·'사용할 수 없는 원료'·'사용한도'를 제목·H2로 다룬 기존 KO/i18n 글 없음.
//
// 법령 대조(python3 -I ~/work/inhebank-1119/tools/law.py, law.go.kr DRF OC=visionlaw, 2026-11-19 조회, 사본 ~/work/inhebank-1119/law):
//   화장품법 MST 291337(2026. 10. 20. 시행) — 제5조 제5항(원료 목록 유통·판매 전 보고), 제8조 제1항(사용할 수 없는 원료 고시)·
//     제2항(사용상 제한 원료 사용기준, 지정·고시 외 보존제·색소·자외선차단제 사용 불가)·제6항·제7항(사용금지 해제·사용기준 지정 신청),
//     제15조 제5호(사용금지 원료·유통화장품 안전관리 기준 부적합 판매 금지)·제6호(코뿔소 뿔·호랑이 뼈),
//     제15조의2 제1항 제1호~제6호(동물실험 화장품·원료 유통·판매 금지와 예외)
//   화장품법 시행규칙 MST 285249(2026. 4. 2. 시행) — 제17조의3 제1항(신청서+요약본·기원·특성·안전성/유효성·시험성적서)·제3항(180일 이내 결과 통지),
//     제19조 제4항 제3호(성분명을 명칭에 쓴 경우 함량 표시), 제21조 제2호(표준화된 일반명),
//     별표 4 제3호 가목(5포인트)·나목(함량 순, 1퍼센트 이하·착향제·착색제 순서 무관)·다목(혼합원료 개별 성분)·마목(향료 표시와 알레르기 유발성분 예외)
//   화장품 안전기준 등에 관한 규정 행정규칙 ID 2100000276068(2026. 3. 18. 시행) — 제3조(별표 1 사용할 수 없는 원료),
//     제4조(별표 2 사용상의 제한이 필요한 원료 — 보존제 성분·자외선 차단성분·염모제 성분·기타 구분, 비고란 조건, 별표 2 외 보존제·자외선 차단제 사용 불가),
//     제6조 제2항(비의도적 유래 물질 검출 허용 한도: 납·니켈·비소·수은·안티몬·카드뮴·디옥산·메탄올·포름알데하이드·프탈레이트류)·제4항(미생물한도)·제5항(내용량)
//     별표 2 살리실릭애씨드 및 그 염류 비고(영유아용 제품류 또는 만 13세 이하 어린이 사용 특정 표시 제품 사용금지, 샴푸 제외)
//   화장품 사용할 때의 주의사항 및 알레르기 유발성분 표시에 관한 규정 ID 2100000283642(2026. 8. 5. 시행) — 제4조, 별표 2(착향제 구성 성분 중
//     알레르기 유발성분 25종, 단서: 사용 후 씻어내는 제품 0.01% 초과·씻어내지 않는 제품 0.001% 초과 함유 시)
//   화장품의 색소 종류 및 기준 ID 2100000229664(2023. 9. 21. 시행) — 고시 이름만 화면에 사용(개별 색소 기준 미기재)
//   화장품 원료 사용금지 해제·변경 및 사용기준 지정·변경 심사에 관한 규정 ID 2100000257060(2025. 3. 26. 시행) — 제3조(심사대상 4가지)·제4조(제출자료)
// 인허가 구분: 원료 사용 자체는 허가·등록 대상이 아니다. 원료 목록은 '보고'(법 제5조 제5항), 사용금지 해제·사용기준 지정은 '신청'→'심사 결과 통지'(법 제8조 제6항·제7항),
//   기능성화장품은 '심사' 또는 '보고서 제출'(법 제4조 제1항). 영업은 화장품책임판매업 '등록'.
// 확신 없어 뺀 것:
//   - 개별 원료의 사용한도 수치(별표 2) — 고시 표가 길고 제품 유형별 단서가 많아 화면에 옮기지 않음(알레르기 유발성분 표시 기준 0.01%·0.001% 만 고시 단서로 확인해 기재).
//   - 비의도적 유래 물질 검출 허용 한도·미생물 한도 수치(제6조) — 물질명만 기재.
//   - INCI→한글 명칭 대응표의 공식 출처(업계 성분사전 등) — 법령에 명시된 것은 '표준화된 일반명'뿐이라 사전 이름은 쓰지 않음.
//   - 소용량(10~50밀리리터·그램) 포장 성분 생략 특례 — 수입 가이드 글과 겹치고 분량상 생략.
//   - 동물실험 예외 판단의 세부(식약처장이 정하는 경우 등)·원료 사용금지 해제 심사의 보완기한 — 화면 미기재.
//   - 인체 세포·조직 배양액 안전기준 — 해당 제품군이 한정돼 생략.
//   - 금액(S4) 일체.

const SLUG = 'cosmetics-ingredient-review-checklist'

const entry = {
  topic: 'cosmetics-distributor',
  angle: 'checklist',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '화장품 성분 검토',
  source: { type: 'assignment', query: '화장품 성분 검토' },
  pexelsId: 6707558,
  coverImage: '',
  relatedServices: [
    { title: '화장품책임판매업 등록', href: '/services/cosmetics' },
    { title: '기능성화장품 심사·보고', href: '/services/functional-cosmetics' },
  ],

  ko: {
    title: '화장품 성분 검토 — 수입·출시 전 전성분 체크리스트와 처방 검토 순서',
    category: '화장품',
    metaTitle: '화장품 성분 검토 — 사용금지·사용제한 원료와 전성분 표시 점검',
    metaDescription: '해외 처방을 들여오거나 신제품을 내기 전에 하는 화장품 성분 검토 순서입니다. 사용할 수 없는 원료, 사용한도가 있는 보존제·자외선 차단성분, 색소 고시, 알레르기 유발성분과 전성분 표시까지 짚습니다.',
    excerpt: '화장품 성분 검토는 처방의 원료를 화장품 안전기준 등에 관한 규정과 하나씩 대조하는 일입니다. 사용할 수 없는 원료는 배합량과 관계없이 쓸 수 없고, 보존제·자외선 차단성분 등은 고시된 사용한도와 조건 안에서만 쓸 수 있습니다. 해외 처방 검토 순서와 전성분 표시로 옮길 때의 규칙을 정리합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>원료 기준 세 갈래</li><li>해외 처방 검토 순서</li><li>전성분 표시로 옮길 때</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>화장품 성분 검토는 처방의 원료 하나하나를 식품의약품안전처 고시인 화장품 안전기준 등에 관한 규정과 대조하는 일에서 시작합니다. 사용할 수 없는 원료가 들어 있으면 그 제품은 수입·판매할 수 없고, 보존제·자외선 차단성분·염모제 성분처럼 사용상 제한이 필요한 원료는 고시된 사용한도와 조건 안에서만 쓸 수 있습니다. 사용기준이 지정·고시되지 않은 보존제·색소·자외선차단제는 쓸 수 없습니다.</strong><!-- 근거: 화장품법 제8조 제1항·제2항, 제15조 제5호, 화장품 안전기준 등에 관한 규정 제3조·제4조 --> 원료 단계에서 걸리면 라벨이나 광고를 고쳐서는 해결되지 않으므로, 계약·발주 전에 처방표부터 받아 보는 것이 순서입니다.</p>
<p>수입 화장품 판매 등록과 전성분 표시의 기본은 <a href="/blog/cosmetics-import-sales-registration-guide">화장품 수입 판매 등록 가이드</a>, 유통 전 원료 목록 보고는 <a href="/blog/cosmetics-distributor-compliance-obligations">화장품책임판매업자 준수사항</a>, 제품이 의약외품에 가까운지는 <a href="/blog/quasi-drug-vs-cosmetics-classification">의약외품과 화장품 구분</a>에서 다룹니다.</p>

<h2>원료 기준 세 갈래</h2>
<table><thead><tr><th>구분</th><th>확인할 것</th></tr></thead><tbody>
<tr><td>사용할 수 없는 원료</td><td>고시 목록에 오른 원료는 배합량과 관계없이 쓸 수 없습니다. 코뿔소 뿔·호랑이 뼈와 그 추출물을 쓴 화장품도 판매가 금지됩니다.<!-- 근거: 화장품법 제8조 제1항, 제15조 제5호·제6호, 안전기준 규정 제3조 별표 1 --></td></tr>
<tr><td>사용상의 제한이 필요한 원료</td><td>보존제 성분, 자외선 차단성분, 염모제 성분, 기타로 나뉘고, 원료마다 사용한도와 함께 '사용 후 씻어내는 제품에만', '에어로졸 제품에는 사용금지', '영유아용 제품류에는 사용금지' 같은 조건이 붙습니다.<!-- 근거: 안전기준 규정 제4조 별표 2 구분·비고란 --></td></tr>
<tr><td>목록 밖의 보존제·색소·자외선차단제</td><td>사용기준이 지정·고시된 것만 쓸 수 있습니다. 색소는 화장품의 색소 종류 및 기준 고시에 오른 것인지 따로 확인합니다.<!-- 근거: 화장품법 제8조 제2항, 안전기준 규정 제4조 후단 --></td></tr>
<tr><td>완제품 안전관리 기준</td><td>일부러 넣지 않았어도 납·니켈·비소·수은·카드뮴·디옥산·메탄올·포름알데하이드·프탈레이트류 등이 비의도적으로 검출되면 허용 한도 안이어야 하고, 미생물 한도와 내용량 기준도 맞아야 합니다.<!-- 근거: 안전기준 규정 제6조 제2항·제4항·제5항, 화장품법 제15조 제5호 --></td></tr>
</tbody></table>
<p>동물실험을 실시한 화장품이나 동물실험을 거친 원료로 만든 화장품도 원칙적으로 유통·판매할 수 없습니다. 동물대체시험법이 없는 경우, 다른 법령에 따라 동물실험으로 개발된 원료를 쓰는 경우 등 법에 정한 예외가 있으므로, 제조사에 원료별 시험 이력을 함께 요청해 두면 판단이 빨라집니다.<!-- 근거: 화장품법 제15조의2 제1항 제1호~제6호 --></p>

<h2>해외 처방 검토 순서</h2>
<ol>
<li>제조사에서 원료명·배합량·원료 규격이 적힌 처방표를 받고, 혼합원료는 개별 성분까지 풀어 달라고 요청합니다.</li>
<li>INCI 명칭 등 해외 성분명을 표준화된 한글 일반명으로 맞춥니다.</li>
<li>사용할 수 없는 원료 목록과 하나씩 대조합니다.</li>
<li>사용상 제한이 필요한 원료는 사용한도와 제품 조건(씻어내는 제품인지, 영유아·어린이용임을 표시하는지)을 함께 봅니다.</li>
<li>보존제·색소·자외선 차단성분이 고시 목록 안에 있는지 확인합니다.</li>
<li>미백·주름개선·자외선 차단 같은 효능 성분이 있으면 기능성화장품 심사·보고 대상인지 판단합니다.</li>
<li>착향제의 알레르기 유발성분 함량을 확인하고 전성분 표시안을 만듭니다.</li>
</ol>
<p>꼭 써야 하는 원료가 사용금지 목록에 있거나 사용기준이 없는 보존제라면, 화장품제조업자·화장품책임판매업자·연구기관 등이 식품의약품안전처장에게 사용금지 해제나 사용기준 지정을 신청할 수 있습니다. 원료의 기원·특성, 안전성 자료, 시험성적서를 내고 자료 제출일부터 180일 이내에 결과를 통지받습니다.<!-- 근거: 화장품법 제8조 제6항·제7항, 시행규칙 제17조의3 제1항·제3항, 원료 사용금지 해제·변경 및 사용기준 지정·변경 심사에 관한 규정 제3조·제4조 --> 효능 성분이 있다면 <a href="/services/functional-cosmetics">기능성화장품 심사·보고 안내</a>를 함께 보세요.</p>

<h2>전성분 표시로 옮길 때</h2>
<p>검토를 마친 처방표는 그대로 전성분 표시의 원본이 됩니다. 성분명은 표준화된 일반명을 쓰고, 함량이 많은 것부터 적되 1퍼센트 이하로 쓴 성분과 착향제·착색제는 순서에 상관없이 적을 수 있습니다. 혼합원료는 개별 성분 명칭으로 적고, 글자 크기는 5포인트 이상입니다.<!-- 근거: 시행규칙 제21조 제2호, 별표 4 제3호 가목~다목 --></p>
<p>착향제는 '향료'로 적을 수 있지만, 고시된 알레르기 유발성분 25종이 사용 후 씻어내는 제품에 0.01% 초과, 씻어내지 않는 제품에 0.001% 초과로 들어 있으면 그 성분명을 따로 적어야 합니다. 성분명을 제품 명칭에 넣었다면 그 성분의 함량도 표시합니다.<!-- 근거: 시행규칙 별표 4 제3호 마목, 제19조 제4항 제3호, 화장품 사용할 때의 주의사항 및 알레르기 유발성분 표시에 관한 규정 제4조 별표 2 단서 --> 유선행정사사무소는 처방표와 고시 목록의 대조표 작성, 원료 목록 보고와 책임판매업 서류 준비를 함께 진행합니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 해외에서 이미 팔리는 제품이면 국내 기준도 통과하나요?</p><p class="faq-a">A. 나라마다 사용금지·사용한도 목록이 달라 해외 판매 사실만으로는 판단할 수 없습니다. 국내 고시 목록과 다시 대조해야 합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 원료 목록 보고는 언제 하나요?</p><p class="faq-a">A. 화장품책임판매업자는 제조과정에 사용된 원료의 목록을 유통·판매 전에 보고합니다. 처방이 바뀌면 성분 검토와 표시안도 다시 맞춥니다.<!-- 근거: 화장품법 제5조 제5항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 검토에서 문제가 나오면 어떻게 하나요?</p><p class="faq-a">A. 사용한도 초과는 배합량 조정으로 풀리는 경우가 많지만, 사용금지 원료는 처방을 바꾸거나 사용금지 해제 신청을 검토해야 합니다. 출시 일정에 여유를 두고 처방 단계에서 확인하는 것이 안전합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 영유아·어린이용으로 팔 계획이면 더 볼 것이 있나요?</p><p class="faq-a">A. 살리실릭애씨드 및 그 염류처럼 영유아용 제품류나 만 13세 이하 어린이 사용을 특정해 표시하는 제품에는 쓸 수 없는 보존제가 있고, 제품별 안전성 자료도 따로 작성·보관해야 합니다.<!-- 근거: 안전기준 규정 별표 2 살리실릭애씨드 및 그 염류 비고, 화장품법 제4조의3 제1항 --></p></div>
</div>

<div class="cta-block"><h3>처방표를 받았다면 출시 전에 점검하세요</h3><p>제품 유형과 처방표(성분명·배합량)를 보내 주시면 유선행정사사무소가 고시 목록 대조, 기능성 심사·보고 해당 여부, 책임판매 서류 준비 순서를 정리해 드립니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 화장품법 제5조·제8조·제15조·제15조의2, 시행규칙 제17조의3·제19조·제21조·별표 4, 화장품 안전기준 등에 관한 규정 제3조·제4조·제6조, 알레르기 유발성분 표시 규정 제4조 --></p>`,
  },

  en: {
    title: 'Cosmetic Ingredient Review in Korea — A Pre-Launch Checklist for Imported Formulas',
    category: 'Cosmetics',
    metaTitle: 'Cosmetic Ingredient Review in Korea — Banned and Restricted Lists',
    metaDescription: 'Review a cosmetic formula before import or launch in Korea: banned ingredients, restricted preservatives and UV filters, colourants, allergens and the label.',
    excerpt: 'A cosmetic ingredient review in Korea means checking every ingredient in the formula against the MFDS Cosmetic Safety Standards. Banned ingredients cannot be used at any level, and restricted ones such as preservatives and UV filters only within the listed limits and conditions.',
    content: `<div class="toc"><p>Contents</p><ol><li>Three ingredient checks</li><li>Reviewing an overseas formula</li><li>From formula to label</li><li>FAQ</li></ol></div>
<p><strong>A cosmetic ingredient review in Korea starts by matching every ingredient in the formula against the Regulation on Cosmetic Safety Standards issued by the Ministry of Food and Drug Safety (MFDS). A product containing a banned ingredient cannot be imported or sold, and restricted ingredients such as preservatives, UV filters and hair dye ingredients may be used only within the listed limits and conditions. Preservatives, colourants and UV filters without a designated standard cannot be used at all.</strong> A problem at ingredient level cannot be fixed on the label, so ask for the formula sheet before you sign or order.</p>
<p>For registration and the basics of ingredient labelling, see <a href="/en/blog/cosmetics-import-sales-registration-guide">our guide to registering for cosmetics import and sale</a>; for the ingredient list report before distribution, see <a href="/en/blog/cosmetics-distributor-compliance-obligations">ongoing duties of a responsible distributor</a>; and for borderline products, see <a href="/en/blog/quasi-drug-vs-cosmetics-classification">quasi-drug or cosmetic</a>.</p>

<h2>Three ingredient checks</h2>
<table><thead><tr><th>Check</th><th>What to look for</th></tr></thead><tbody>
<tr><td>Banned ingredients</td><td>Anything on the banned list cannot be used at any level. Products using rhinoceros horn or tiger bone and their extracts are also prohibited.</td></tr>
<tr><td>Restricted ingredients</td><td>Grouped as preservatives, UV filters, hair dye ingredients and others, each with a limit and conditions such as rinse-off only, not in aerosols, or not in products for infants.</td></tr>
<tr><td>Unlisted preservatives, colourants, UV filters</td><td>Only those with a designated standard may be used. Check colourants against the separate MFDS colourant list.</td></tr>
<tr><td>Finished product standards</td><td>Unintended traces of lead, nickel, arsenic, mercury, cadmium, dioxane, methanol, formaldehyde or phthalates must stay within the limits, and microbial and net content standards must be met.</td></tr>
</tbody></table>
<p>Cosmetics tested on animals, or made with ingredients tested on animals, generally cannot be distributed or sold either. The law sets out exceptions, for example where no alternative test method exists, so ask the manufacturer for the test history of each ingredient.</p>

<h2>Reviewing an overseas formula</h2>
<ol>
<li>Obtain a formula sheet with ingredient names, amounts and specifications, with blends broken down into each component.</li>
<li>Convert INCI and other foreign names to the standardised Korean names.</li>
<li>Check each ingredient against the banned list.</li>
<li>For restricted ingredients, check the limit and the product conditions, such as rinse-off use or a claim for infants or children.</li>
<li>Confirm that preservatives, colourants and UV filters are on the lists.</li>
<li>If there are whitening, anti-wrinkle or sunscreen actives, decide whether functional cosmetic review or reporting applies.</li>
<li>Check fragrance allergen levels and draft the ingredient label.</li>
</ol>
<p>If you must use a banned ingredient or a preservative without a standard, a manufacturer, responsible distributor or research institute may apply to the MFDS to lift the ban or set a standard, submitting data on origin, properties, safety and test results. The result is notified within 180 days of submission. For actives, see <a href="/en/services/functional-cosmetics">our functional cosmetics service</a>.</p>

<h2>From formula to label</h2>
<p>The reviewed formula becomes the source of the full ingredient list. Use the standardised names and list ingredients in descending order, although ingredients at 1 percent or less, fragrances and colourants may be listed in any order. Blends are listed by component, in type of at least 5 points.</p>
<p>Fragrance may be listed simply as fragrance, but any of the 25 listed allergens above 0.01% in rinse-off products or 0.001% in leave-on products must be named. If an ingredient name is part of the product name, its content must be shown. YouSun Administrative Agency prepares the comparison table against the official lists, the ingredient list report and the distributor paperwork.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. The product already sells overseas. Does it pass in Korea?</p><p class="faq-a">A. Not necessarily. Banned and restricted lists differ by country, so the formula must be checked against the Korean lists again.</p></div>
<div class="faq-item"><p class="faq-q">Q. When is the ingredient list reported?</p><p class="faq-a">A. The responsible distributor reports the list of ingredients used before distribution or sale. If the formula changes, review and the label draft are updated too.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the review finds a problem?</p><p class="faq-a">A. An excess over a limit can often be fixed by adjusting the amount, but a banned ingredient means reformulating or applying to lift the ban. Allow time in the launch schedule.</p></div>
<div class="faq-item"><p class="faq-q">Q. Anything extra for products aimed at infants or children?</p><p class="faq-a">A. Some preservatives, such as salicylic acid and its salts, cannot be used in products for infants or products claimed for children aged 13 or under, and a product safety file must be kept.</p></div>
</div>

<div class="cta-block"><h3>Have the formula sheet? Check it before launch</h3><p>Send the product type and formula (names and amounts), and YouSun Administrative Agency will set out the list check, whether functional review or reporting applies, and the order of the distributor paperwork. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国化妆品成分审查 — 进口·上市前的全成分检查清单',
    category: '化妆品',
    metaTitle: '韩国化妆品成分审查 — 禁用·限用原料与全成分标示',
    metaDescription: '在韩国进口或推出化妆品前如何审查配方：逐项核对禁用原料、有限量要求的防腐剂和防晒成分、色素告示目录、香料中的过敏原，再把审查结果转换为全成分标示，按步骤说明海外配方的检查顺序。',
    excerpt: '韩国的化妆品成分审查，就是把配方中的每种原料与食品药品安全处的《化妆品安全标准等相关规定》逐一核对。禁用原料不论用量都不能使用，防腐剂、防晒成分等限用原料只能在告示的限量和条件内使用。',
    content: `<div class="toc"><p>目录</p><ol><li>原料标准的三条线</li><li>海外配方的审查顺序</li><li>转换为全成分标示</li><li>常见问题</li></ol></div>
<p><strong>在韩国，化妆品成分审查从把配方中的每种原料与食品药品安全处告示《化妆品安全标准等相关规定》逐一核对开始。含有禁用原料的产品不能进口和销售；防腐剂、防晒成分、染发剂成分等需要限制使用的原料，只能在告示的限量和条件内使用；未指定使用标准的防腐剂、色素、防晒剂一律不能使用。</strong>原料层面的问题无法靠修改标签解决，因此应在签约或下单前先拿到配方表。</p>
<p>进口销售登记和全成分标示的基础见<a href="/zh/blog/cosmetics-import-sales-registration-guide">化妆品进口销售登记指南</a>，流通前的原料目录报告见<a href="/zh/blog/cosmetics-distributor-compliance-obligations">化妆品责任销售业者的遵守事项</a>，产品是否接近医药外品见<a href="/zh/blog/quasi-drug-vs-cosmetics-classification">医药外品与化妆品的区分</a>。</p>

<h2>原料标准的三条线</h2>
<table><thead><tr><th>类型</th><th>确认要点</th></tr></thead><tbody>
<tr><td>禁用原料</td><td>列入告示目录的原料不论用量都不能使用。使用犀牛角、虎骨及其提取物的化妆品也禁止销售。</td></tr>
<tr><td>需要限制使用的原料</td><td>分为防腐剂、防晒成分、染发剂成分和其他，每种原料都有限量，并附有"仅限冲洗类产品""气雾剂产品禁用""婴幼儿用产品禁用"等条件。</td></tr>
<tr><td>目录外的防腐剂·色素·防晒剂</td><td>只有指定了使用标准的才能使用。色素另行确认是否列入化妆品色素种类及标准告示。</td></tr>
<tr><td>成品安全管理标准</td><td>即使未人为添加，铅、镍、砷、汞、镉、二恶烷、甲醇、甲醛、邻苯二甲酸酯类等非故意检出也须在允许限度内，并符合微生物限度和内容量标准。</td></tr>
</tbody></table>
<p>进行过动物实验的化妆品，或使用经过动物实验的原料制造的化妆品，原则上也不能流通销售。法律规定了无动物替代试验方法等例外，建议向生产商索取各原料的试验记录。</p>

<h2>海外配方的审查顺序</h2>
<ol>
<li>向生产商索取写明原料名、配比和原料规格的配方表，混合原料拆分到单个成分。</li>
<li>把INCI等外文成分名对应为标准化的韩文通用名。</li>
<li>与禁用原料目录逐一核对。</li>
<li>限用原料同时核对限量和产品条件（是否冲洗类、是否标示婴幼儿·儿童用）。</li>
<li>确认防腐剂、色素、防晒成分在告示目录内。</li>
<li>含美白、改善皱纹、防晒等功效成分的，判断是否属于功能性化妆品审查或报告对象。</li>
<li>确认香料中过敏原的含量，制作全成分标示方案。</li>
</ol>
<p>必须使用的原料在禁用目录中，或是没有使用标准的防腐剂时，化妆品制造业者、责任销售业者或研究机构等可以向食品药品安全处长申请解除禁用或指定使用标准，提交原料来源与特性、安全性资料、检验报告，自提交之日起180日内获得结果通知。功效成分请参考<a href="/zh/services/functional-cosmetics">功能性化妆品审查·报告服务</a>。</p>

<h2>转换为全成分标示</h2>
<p>审查完成的配方表就是全成分标示的底稿。成分名使用标准化通用名，按含量从多到少排列，但含量在1%以下的成分以及香料、着色剂可以不按顺序。混合原料写出各单个成分，字号不小于5磅。</p>
<p>香料可标为"香料"，但告示的25种过敏原在冲洗类产品中超过0.01%、驻留类产品中超过0.001%时，须写出该成分名。产品名称中使用成分名的，还须标示该成分含量。YouSun Administrative Agency可协助制作配方与告示目录的对照表，并准备原料目录报告和责任销售业文件。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 已在海外销售的产品，在韩国也能通过吗？</p><p class="faq-a">A. 不一定。各国禁用和限量目录不同，必须与韩国告示目录重新核对。</p></div>
<div class="faq-item"><p class="faq-q">Q. 原料目录什么时候报告？</p><p class="faq-a">A. 责任销售业者须在流通销售前报告制造过程中使用的原料目录。配方变更时，成分审查和标示方案也要同步更新。</p></div>
<div class="faq-item"><p class="faq-q">Q. 审查发现问题怎么办？</p><p class="faq-a">A. 超出限量多可通过调整配比解决；禁用原料则须调整配方或研究申请解除禁用。应在上市日程中预留时间。</p></div>
<div class="faq-item"><p class="faq-q">Q. 打算作为婴幼儿·儿童用销售，还要注意什么？</p><p class="faq-a">A. 水杨酸及其盐类等部分防腐剂不能用于婴幼儿用产品或特定标示供13岁以下儿童使用的产品，并且须另行制作和保管产品安全性资料。</p></div>
</div>

<div class="cta-block"><h3>拿到配方表后，上市前先检查</h3><p>发送产品类型和配方表（成分名·配比），YouSun Administrative Agency为你整理告示目录对照、是否属于功能性审查·报告以及责任销售文件的准备顺序。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の化粧品成分チェック — 輸入・発売前の全成分チェックリスト',
    category: '化粧品',
    metaTitle: '韓国の化粧品成分チェック — 使用禁止・使用制限原料と全成分表示',
    metaDescription: '韓国で化粧品を輸入・発売する前の処方チェックの手順です。使用できない原料、上限のある防腐剤・紫外線吸収剤、色素の告示、香料アレルゲン、全成分表示まで確認します。',
    excerpt: '韓国の化粧品成分チェックは、処方の原料を食品医薬品安全処の「化粧品安全基準等に関する規定」と一つずつ照合する作業です。使用できない原料は配合量に関係なく使えず、防腐剤や紫外線吸収剤などは告示された上限と条件の範囲でのみ使えます。',
    content: `<div class="toc"><p>目次</p><ol><li>原料基準の三つの線</li><li>海外処方のチェック手順</li><li>全成分表示に移すとき</li><li>よくある質問</li></ol></div>
<p><strong>韓国の化粧品成分チェックは、処方の原料一つひとつを食品医薬品安全処の告示「化粧品安全基準等に関する規定」と照合することから始まります。使用できない原料が入っていればその製品は輸入・販売できず、防腐剤・紫外線吸収剤・染毛剤成分のように使用上の制限が必要な原料は、告示された上限と条件の範囲でのみ使えます。使用基準が指定されていない防腐剤・色素・紫外線吸収剤は使えません。</strong>原料段階の問題はラベルの修正では解決できないため、契約・発注の前に処方表を受け取るのが順序です。</p>
<p>輸入販売の登録と全成分表示の基本は<a href="/ja/blog/cosmetics-import-sales-registration-guide">化粧品の輸入販売登録ガイド</a>、流通前の原料リスト報告は<a href="/ja/blog/cosmetics-distributor-compliance-obligations">化粧品責任販売業者の遵守事項</a>、医薬部外品に近いかどうかは<a href="/ja/blog/quasi-drug-vs-cosmetics-classification">医薬部外品と化粧品の区分</a>で扱っています。</p>

<h2>原料基準の三つの線</h2>
<table><thead><tr><th>区分</th><th>確認すること</th></tr></thead><tbody>
<tr><td>使用できない原料</td><td>告示のリストにある原料は配合量に関係なく使えません。サイの角・虎の骨とその抽出物を使った化粧品も販売禁止です。</td></tr>
<tr><td>使用上の制限が必要な原料</td><td>防腐剤成分、紫外線遮断成分、染毛剤成分、その他に分かれ、原料ごとに上限とともに「洗い流す製品に限る」「エアゾール製品には使用禁止」「乳幼児用製品類には使用禁止」といった条件が付きます。</td></tr>
<tr><td>リスト外の防腐剤・色素・紫外線吸収剤</td><td>使用基準が指定・告示されたものだけ使えます。色素は化粧品の色素の種類及び基準の告示にあるかを別に確認します。</td></tr>
<tr><td>完成品の安全管理基準</td><td>意図して加えていなくても、鉛・ニッケル・ヒ素・水銀・カドミウム・ジオキサン・メタノール・ホルムアルデヒド・フタル酸エステル類などが非意図的に検出される場合は許容限度内である必要があり、微生物限度と内容量の基準も満たす必要があります。</td></tr>
</tbody></table>
<p>動物実験を行った化粧品や、動物実験を経た原料で作った化粧品も、原則として流通・販売できません。代替試験法がない場合など法定の例外があるため、メーカーに原料ごとの試験履歴もあわせて求めておくと判断が早くなります。</p>

<h2>海外処方のチェック手順</h2>
<ol>
<li>メーカーから原料名・配合量・原料規格が書かれた処方表を受け取り、混合原料は個別成分まで分けてもらいます。</li>
<li>INCI名など海外の成分名を標準化された韓国語の一般名に合わせます。</li>
<li>使用できない原料のリストと一つずつ照合します。</li>
<li>使用制限原料は上限と製品条件（洗い流す製品か、乳幼児・子ども用と表示するか）をあわせて確認します。</li>
<li>防腐剤・色素・紫外線遮断成分が告示リストにあるかを確認します。</li>
<li>美白・しわ改善・紫外線遮断などの効能成分があれば、機能性化粧品の審査・報告の対象かを判断します。</li>
<li>香料のアレルゲン含有量を確認し、全成分表示案を作ります。</li>
</ol>
<p>どうしても使いたい原料が使用禁止リストにある場合や、使用基準のない防腐剤である場合は、化粧品製造業者・化粧品責任販売業者・研究機関などが食品医薬品安全処長に使用禁止の解除や使用基準の指定を申請できます。原料の起源・特性、安全性資料、試験成績書を提出し、提出日から180日以内に結果が通知されます。効能成分については<a href="/ja/services/functional-cosmetics">機能性化粧品の審査・報告サービス</a>もご覧ください。</p>

<h2>全成分表示に移すとき</h2>
<p>チェックを終えた処方表がそのまま全成分表示の原本になります。成分名は標準化された一般名を使い、含有量の多い順に記載しますが、1パーセント以下の成分と着香剤・着色剤は順不同で記載できます。混合原料は個別成分の名称で記載し、文字の大きさは5ポイント以上です。</p>
<p>着香剤は「香料」と記載できますが、告示されたアレルゲン25種が洗い流す製品で0.01%、洗い流さない製品で0.001%を超えて含まれる場合は、その成分名を記載する必要があります。成分名を製品名に使った場合は、その成分の含有量も表示します。YouSun Administrative Agencyは処方表と告示リストの照合表の作成、原料リスト報告と責任販売業の書類準備をあわせて進めます。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 海外ですでに販売している製品なら、韓国の基準も通りますか。</p><p class="faq-a">A. そうとは限りません。国ごとに使用禁止・上限のリストが異なるため、韓国の告示リストと照合し直す必要があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 原料リストの報告はいつですか。</p><p class="faq-a">A. 化粧品責任販売業者は、製造過程で使用した原料のリストを流通・販売の前に報告します。処方が変われば成分チェックと表示案も合わせ直します。</p></div>
<div class="faq-item"><p class="faq-q">Q. チェックで問題が見つかったら？</p><p class="faq-a">A. 上限超過は配合量の調整で解決できることが多いですが、使用禁止原料は処方の変更か使用禁止解除の申請を検討する必要があります。発売日程に余裕を持たせてください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 乳幼児・子ども向けに販売する予定なら、ほかに確認することは？</p><p class="faq-a">A. サリチル酸及びその塩類のように、乳幼児用製品類や13歳以下の子どもの使用を特定して表示する製品には使えない防腐剤があり、製品別の安全性資料も別途作成・保管する必要があります。</p></div>
</div>

<div class="cta-block"><h3>処方表を受け取ったら発売前に確認を</h3><p>製品の種類と処方表（成分名・配合量）をお送りいただければ、YouSun Administrative Agencyが告示リストとの照合、機能性の審査・報告の該当有無、責任販売の書類準備の順序を整理します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 원료 사용은 허가 대상이 아니고, 원료 목록은 '보고', 사용금지 해제는 '신청'
entry.wrongTerms = [
  '원료 사용 허가', '성분 허가', '원료 목록 신고', '전성분 신고',
  'ingredient permit', 'ingredient licence', 'ingredient list registration',
  '原料使用许可', '成分许可', '原料目录申报',
  '原料の使用許可', '成分の許可', '原料リストの届出',
]

export default entry
