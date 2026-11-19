// 원고 은행 — INHE-BANK-1119(2026-11-19, 맥4 하위 작성 담당 B, kind=seo3958, angle=comparison)
// 주제(풀): cosmetics-distributor(화장품책임판매업등록) / 세부주제: comparison — 기능성화장품 '심사'와 '보고(심사 제외 품목 보고서)' 구분
// 대표 검색어: '기능성화장품 심사'(배정표 대표 검색어안 그대로)
//
// 겹침 검사(lib/blog-posts-data.ts·lib/i18n/blog-i18n.ts·bank 대조):
//   functional-cosmetics-select(ko 전용) — 직접 신청 가능 여부·행정사 선택 기준·제출처(평가원)·서류 개요·처리기간 60일, '심사 vs 보고서' H2 1개(개요 수준)
//     → 이 글은 보고 대상 세 갈래의 요건(같은 책임판매업자·대조군·제형 동일 간주·SPF 범위), 자료 면제 범위, 외국 자료 요건, 심사·보고 뒤 판매 흐름을 다룬다.
//       대행 범위·선택 기준은 링크만. 60일은 비교표 한 칸으로만.
//   functional-cosmetics-fix(ko 전용) — 반려·보완·변경심사·거짓 심사 처분 → 링크만(변경은 판매 흐름 한 줄).
//   quasi-drug-vs-cosmetics-classification — 기능성 범위와 의약외품 경계 → 링크만, 범위 11가지는 한 문장.
//   cosmetics-responsible-distributor — 책임판매업 최초 등록 → FAQ 한 줄 + 링크.
//   '기능성화장품 심사와 보고 차이/비교'를 제목으로 한 기존 KO/i18n 글 없음.
//
// 법령 대조(python3 -I ~/work/inhebank-1119/tools/law.py, law.go.kr DRF OC=visionlaw, 2026-11-19 조회, 사본 ~/work/inhebank-1119/law):
//   화장품법 MST 291337(2026. 10. 20. 시행) — 제2조 제2호(기능성화장품 정의), 제3조 제1항(책임판매업 등록), 제4조 제1항(품목별 심사 또는 보고서, 변경 시 동일)·
//     제3항·제4항, 제5조 제5항(원료 목록 유통·판매 전 보고), 제10조 제1항 제8호('기능성화장품' 글자 또는 도안), 제13조 제1항 제1호·제2호(의약품 오인·
//     심사결과와 다른 표시·광고 금지), 제15조 제1호(심사·보고 없는 기능성화장품 판매 등 금지)
//   화장품법 시행규칙 MST 285249(2026. 4. 2. 시행) — 제2조 제1호~제11호(기능성 범위), 제9조 제1항(심사의뢰서+자료 6종 안전성·유효성·SPF·기준 및 시험방법,
//     식품의약품안전평가원장, 고시 품목 자료 생략)·제3항(변경심사)·제4항(심사기준)·제5항(심사대장·결과통지서), 제10조 제1항 제1호~제3호(보고 대상)·
//     같은 항 제2호 단서(제2조 제1~3호·제8~11호는 대조군 비교실험 입증 시만)·가목~마목(SPF -20퍼센트 범위, 액제·로션제·크림제 동일 제형)·제2항(별지 제10호서식 보고서)·
//     제3항(보고대장 기재), 제19조 제4항 제2호(심사·보고 효능·효과, 용법·용량 표시)·제7호(제2조 제8~11호 '질병의 예방 및 치료를 위한 의약품이 아님'),
//     별지 제7호서식(심사의뢰서 처리기간 60일)
//   기능성화장품 심사에 관한 규정 — 현재 시행본 행정규칙일련번호 2100000269812(제2025-88호, 2025. 12. 16. 시행)로 대조.
//     제4조(제출자료 범위), 제5조 제1호 다목(1)(나)·(다)(개발국 정부 제출·승인 자료, SCI 학회지), 같은 호 나목(1)(인체첩포시험 국내외 대학·전문 연구기관),
//     제6조 제1항(기능성화장품 기준 및 시험방법·ICID·식품의 기준 및 규격 원료 → 안전성 자료 면제, 이상반응 우려 시 예외)·제2항(인체적용시험 제출 시 효력시험 면제,
//     해당 성분 효능 표시 불가)·제3항(고시 성분·함량 품목 가목~다목 면제)·제5항(SPF 10 이하 SPF 근거자료 면제), 제7조 제2항(외국 자료 한글요약문+원문),
//     제8조의2(심사 목적 제조품 — 우수화장품 제조관리기준·적합 통지, 최대 3개 제조단위), 제9조(제품명 중복 금지·수입품 책임판매업자명 병기)
//     ※ 개정본 ID 2100000288072(제2026-75호, 2026. 11. 10. 발령, 2027. 11. 11. 시행)은 아직 시행 전 — 인용한 조항 중 제5조·제6조 제6항·제10조만 바뀌고
//       위에 쓴 제6조 제1·2·3·5항, 제7조, 제8조의2, 제9조는 문언 동일(diff 확인). 화면에는 시행 전 개정 내용 미기재.
//   화장품 안전기준 등에 관한 규정 ID 2100000276068(2026. 3. 18. 시행) — 제6조 제7항(유통 기능성화장품 주원료 함량 = 심사·보고 기준 적합)
// 인허가 구분: 기능성화장품 = 품목별 '심사'(평가원장 심사결과통지서) 또는 '보고서 제출'(보고대장 기재). 허가·등록·신고 아님.
//   영업 = 화장품책임판매업 '등록'. 원료 목록 = '보고'.
// 확신 없어 뺀 것:
//   - 보고서 제출의 처리기간(별지 제10호서식에 처리기간 칸 없음) — 쓰지 않음. 변경심사 처리기간도 생략.
//   - 2027. 11. 11. 시행 개정 고시 내용(자외선 차단 ISO 23675·착색제 1% 미만 변경 면제 등) — 시행 전이라 화면 미기재.
//   - 수입품의 '같은 제조업자' 요건 적용 범위 — 시행규칙상 제조업자는 국내 등록 화장품제조업자로 읽히나 명문 해석 미확인 → 화면은 '같은 책임판매업자' 중심으로만.
//   - 심사·변경심사 법정 수수료(S4), 시험기관·시험 기간 실무 수치.
//   - 기능성화장품 도안의 구체 모양(식약처장이 정하는 도안) — 이름만.

const SLUG = 'cosmetics-functional-review-vs-report'

const entry = {
  topic: 'cosmetics-distributor',
  angle: 'comparison',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '기능성화장품 심사',
  source: { type: 'assignment', query: '기능성화장품 심사' },
  pexelsId: 7615819,
  coverImage: '',
  relatedServices: [
    { title: '기능성화장품 심사·보고', href: '/services/functional-cosmetics' },
    { title: '화장품책임판매업 등록', href: '/services/cosmetics' },
  ],

  ko: {
    title: '기능성화장품 심사와 보고 차이 — 내 제품은 어느 쪽이고 무엇을 내나',
    category: '화장품',
    metaTitle: '기능성화장품 심사와 보고서 제출 — 대상 구분·제출자료·판매 흐름',
    metaDescription: '기능성화장품은 품목별로 심사를 받거나 보고서를 냅니다. 고시 품목이나 이미 심사받은 품목과 같으면 보고, 아니면 안전성·유효성 자료를 갖춘 심사입니다. 대상 구분, 자료 면제, 판매 전 표시 흐름을 짚습니다.',
    excerpt: '기능성화장품으로 인정받아 팔려면 품목별로 식품의약품안전평가원장의 심사를 받거나 보고서를 제출해야 합니다. 효능 성분과 효능·효과, 용법·용량, 기준 및 시험방법이 고시 품목이나 이미 심사받은 품목과 같으면 보고, 그렇지 않으면 심사입니다. 두 절차의 차이와 이후 판매 흐름을 비교합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>심사와 보고는 무엇이 다른가</li><li>보고서로 끝나는 세 가지 경우</li><li>심사 자료와 면제 범위</li><li>심사·보고 뒤 판매 흐름</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>기능성화장품으로 인정받아 판매하려는 화장품제조업자·화장품책임판매업자·연구기관 등은 품목별로 식품의약품안전평가원장의 심사를 받거나 보고서를 제출해야 합니다. 효능 성분의 종류·함량, 효능·효과, 용법·용량, 기준 및 시험방법이 고시 품목이나 이미 심사받은 품목과 같으면 보고서로, 그렇지 않으면 안전성·유효성 자료를 갖춘 심사로 갑니다.</strong><!-- 근거: 화장품법 제4조 제1항, 시행규칙 제9조 제1항, 제10조 제1항·제2항 --> 기능성화장품의 범위는 미백, 주름 개선, 자외선 차단, 모발 색상 변화, 체모 제거, 탈모 증상 완화, 여드름성 피부 완화, 피부장벽 회복, 튼살 붉은 선 완화 등 11가지로 정해져 있습니다.<!-- 근거: 시행규칙 제2조 제1호~제11호 --></p>
<p>심사 신청 방법과 대행 범위는 <a href="/blog/functional-cosmetics-select">기능성화장품 심사 신청 안내</a>, 반려·보완과 변경심사는 <a href="/blog/functional-cosmetics-fix">기능성화장품 심사 반려·보완 정리</a>, 의약외품과의 경계는 <a href="/blog/quasi-drug-vs-cosmetics-classification">의약외품과 화장품 구분</a>에서 다룹니다.</p>

<h2>심사와 보고는 무엇이 다른가</h2>
<table><thead><tr><th>구분</th><th>심사</th><th>보고</th></tr></thead><tbody>
<tr><td>대상</td><td>고시 품목·이미 심사받은 품목과 같지 않은 기능성화장품</td><td>고시 품목 또는 이미 심사받은 품목과 정해진 사항이 모두 같은 기능성화장품<!-- 근거: 시행규칙 제9조 제1항, 제10조 제1항 --></td></tr>
<tr><td>내는 서류</td><td>기능성화장품 심사의뢰서와 기원·개발 경위, 안전성, 유효성, 기준 및 시험방법 자료</td><td>기능성화장품 심사 제외 품목 보고서(제품명, 효능·효과, 용법·용량, 효능 원료 등)<!-- 근거: 시행규칙 제9조 제1항, 제10조 제2항, 별지 제10호서식 --></td></tr>
<tr><td>결과</td><td>심사대장에 적고 심사결과통지서 발급, 서식상 처리기간 60일<!-- 근거: 시행규칙 제9조 제5항, 별지 제7호서식 처리기간 --></td><td>요건을 확인한 뒤 보고대장에 기재<!-- 근거: 시행규칙 제10조 제3항 --></td></tr>
</tbody></table>

<h2>보고서로 끝나는 세 가지 경우</h2>
<ol>
<li>효능 성분의 종류·함량, 효능·효과, 용법·용량, 기준 및 시험방법이 식품의약품안전처장이 고시한 품목과 같은 경우</li>
<li>같은 책임판매업자(또는 직접 설계·개발·생산한 같은 제조업자, 같은 연구기관)가 이미 심사받은 품목과 효능 원료의 종류·규격·함량, 효능·효과, 기준 및 시험방법, 용법·용량, 제형이 모두 같은 경우</li>
<li>이미 심사받은 자외선 차단 품목의 성분·함량과 고시된 미백·주름개선 성분·함량을 섞은 품목으로, 나머지 사항이 모두 같은 경우</li>
</ol>
<p>둘째 경우에서 미백·주름개선과 탈모·여드름·피부장벽·튼살 유형은 이미 심사받은 품목이 대조군 비교실험으로 효능을 입증했을 때만 보고로 갈 수 있습니다. 자외선 차단 제품은 차단지수 측정값이 마이너스 20퍼센트 이하 범위면 같은 효능·효과로 보고, 일부 유형은 액제·로션제·크림제를 같은 제형으로 봅니다.<!-- 근거: 시행규칙 제10조 제1항 제2호 단서·나목·마목 --> 다른 회사가 심사받은 품목과 처방이 같다는 이유만으로는 보고 대상이 되지 않습니다.</p>

<h2>심사 자료와 면제 범위</h2>
<p>심사에는 단회투여독성·1차 피부자극·안점막자극·피부감작성·광독성·인체첩포시험 같은 안전성 자료와 효력시험·인체적용시험 같은 유효성 자료가 기본입니다.<!-- 근거: 시행규칙 제9조 제1항 제2호·제3호, 기능성화장품 심사에 관한 규정 제4조 --> 다만 다음 경우에는 일부 자료를 내지 않아도 됩니다.</p>
<ul>
<li>기능성화장품 기준 및 시험방법, 국제화장품원료집(ICID), 식품의 기준 및 규격에 정한 원료로 만든 제품은 안전성 자료 면제(인체적용시험에서 이상반응 우려가 있으면 예외)</li>
<li>인체적용시험 자료를 내면 효력시험 자료를 면제받을 수 있지만, 그 성분의 효능·효과는 표시할 수 없음</li>
<li>고시한 성분·함량 품목은 기원·안전성·유효성 자료 면제</li>
<li>자외선 차단지수 10 이하 제품은 차단지수 설정 근거자료 면제<!-- 근거: 기능성화장품 심사에 관한 규정 제6조 제1항·제2항·제3항·제5항 --></li>
</ul>

<h2>심사·보고 뒤 판매 흐름</h2>
<p>심사를 받지 않거나 보고서를 내지 않은 기능성화장품은 판매하거나 판매 목적으로 수입·보관·진열할 수 없습니다. 심사를 위해 만든 제품은 우수화장품 제조관리기준을 지켜 제조하고 결과가 적합으로 통지되면, 제조번호 기준 최대 3개 제조단위까지 심사 뒤 제조한 것으로 봅니다.<!-- 근거: 화장품법 제15조 제1호, 기능성화장품 심사에 관한 규정 제8조의2 --> 그다음 순서는 이렇습니다.</p>
<ol>
<li>심사·보고한 원료와 함량대로 제조·수입합니다. 유통 제품의 주원료 함량도 그 기준에 맞아야 합니다.</li>
<li>포장에 '기능성화장품' 글자나 도안, 심사·보고한 효능·효과와 용법·용량을 표시하고, 탈모·여드름·피부장벽·튼살 유형은 "질병의 예방 및 치료를 위한 의약품이 아님" 문구를 넣습니다.</li>
<li>원료 목록을 유통·판매 전에 보고합니다.</li>
<li>광고에는 심사결과와 다른 내용이나 의약품으로 오인될 표현을 쓰지 않습니다.</li>
<li>처방·효능 등 심사·보고 사항이 바뀌면 변경심사나 보고를 다시 합니다.</li>
</ol>
<p>유선행정사사무소는 처방과 효능 문구를 보고 심사·보고 갈래를 판단하고, 심사의뢰서·보고서와 책임판매업 서류 작성·제출을 진행합니다. 범위는 <a href="/services/functional-cosmetics">기능성화장품 심사·보고 안내</a>에서 확인하세요.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 수입 제품의 해외 시험자료를 그대로 쓸 수 있나요?</p><p class="faq-a">A. 효력시험은 개발국 정부에 제출·평가된 자료나 과학논문인용색인 등재 학회지 게재 자료도 인정되고, 외국 자료는 한글요약문과 원문을 함께 냅니다. 인체첩포시험은 국내외 대학이나 전문 연구기관에서 실시한 것이어야 합니다.<!-- 근거: 기능성화장품 심사에 관한 규정 제5조 제1호 나목(1)·다목(1), 제7조 제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 다른 회사가 심사받은 제품명과 같은 이름을 써도 되나요?</p><p class="faq-a">A. 제품명은 이미 심사받은 기능성화장품 명칭과 같으면 안 됩니다. 같은 제조소 제품을 여러 책임판매업자가 수입하면 책임판매업자명을 함께 적어 구분합니다.<!-- 근거: 기능성화장품 심사에 관한 규정 제9조 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 책임판매업 등록 전에 심사부터 받을 수 있나요?</p><p class="faq-a">A. 심사·보고를 할 수 있는 것은 화장품제조업자, 등록한 화장품책임판매업자, 대학·연구기관 등입니다. 수입해 팔 회사라면 <a href="/blog/cosmetics-responsible-distributor">화장품책임판매업 등록</a>을 먼저 마치는 것이 순서입니다.<!-- 근거: 화장품법 제3조 제1항, 제4조 제1항 --></p></div>
</div>

<div class="cta-block"><h3>심사인지 보고인지부터 확인하세요</h3><p>처방표와 표시하려는 효능 문구를 보내 주시면 유선행정사사무소가 심사·보고 갈래와 준비 서류, 판매 전 표시 점검 순서를 정리해 드립니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 화장품법 제4조·제10조·제13조·제15조, 시행규칙 제2조·제9조·제10조·제19조, 기능성화장품 심사에 관한 규정(제2025-88호) 제4조~제9조 --></p>`,
  },

  en: {
    title: 'Functional Cosmetics Review vs Report in Korea — Which Route Applies',
    category: 'Cosmetics',
    metaTitle: 'Functional Cosmetics Review or Report in Korea — Scope and Data',
    metaDescription: 'Functional cosmetics in Korea need a review or a report per product. Learn which applies, what data is needed or waived, and the labelling steps before sale.',
    excerpt: 'To sell a functional cosmetic in Korea, each product must either pass review by the MFDS evaluation institute or be reported. If the active ingredients, claims, directions and test methods match a listed product or one already reviewed, a report is enough; otherwise a full review with safety and efficacy data applies.',
    content: `<div class="toc"><p>Contents</p><ol><li>Review vs report</li><li>Three cases where a report is enough</li><li>Review data and waivers</li><li>After review or report</li><li>FAQ</li></ol></div>
<p><strong>Manufacturers, registered responsible distributors and research institutes that want to sell a product as a functional cosmetic in Korea must, product by product, obtain a review from the National Institute of Food and Drug Safety Evaluation or submit a report. If the type and amount of active ingredients, claims, directions and test methods match a listed product or one already reviewed, a report is enough; otherwise a review with safety and efficacy data is required.</strong> Functional cosmetics cover 11 categories, including whitening, wrinkle care, sun protection, hair colour, hair removal, hair loss relief, acne-prone skin, skin barrier repair and stretch marks.</p>
<p>For borderline products, see <a href="/en/blog/quasi-drug-vs-cosmetics-classification">quasi-drug or cosmetic</a>.</p>

<h2>Review vs report</h2>
<table><thead><tr><th>Item</th><th>Review</th><th>Report</th></tr></thead><tbody>
<tr><td>Applies to</td><td>Functional cosmetics that do not match a listed or reviewed product</td><td>Products matching a listed or reviewed product in all required points</td></tr>
<tr><td>Submission</td><td>Review application with origin, safety, efficacy and test method data</td><td>Report form for products exempt from review (name, claims, directions, actives)</td></tr>
<tr><td>Outcome</td><td>Entered in the review register and a result notice issued; the form shows 60 days</td><td>Entered in the report register after the requirements are checked</td></tr>
</tbody></table>

<h2>Three cases where a report is enough</h2>
<ol>
<li>The actives, claims, directions and test methods match a product listed by the MFDS.</li>
<li>The same responsible distributor (or the same manufacturer that designed and produced it, or the same institute) already had a product reviewed, and the actives, claims, test methods, directions and formulation type are all the same.</li>
<li>A reviewed sunscreen combined with listed whitening or anti-wrinkle actives, with everything else the same.</li>
</ol>
<p>In the second case, whitening, wrinkle, hair loss, acne, skin barrier and stretch mark products qualify only if the reviewed product proved efficacy against a control. For sunscreens, a measured SPF within minus 20 percent counts as the same claim, and for some categories solutions, lotions and creams count as one formulation type. A matching formula reviewed by another company does not qualify.</p>

<h2>Review data and waivers</h2>
<p>A review normally needs safety data such as single-dose toxicity, primary skin irritation, eye irritation, sensitisation, phototoxicity and human patch tests, and efficacy data such as efficacy and human application tests. Some data may be waived:</p>
<ul>
<li>Products made with ingredients in the official functional cosmetics standards, the International Cosmetic Ingredient Dictionary (ICID) or the food standards: safety data waived, unless human tests raise safety concerns.</li>
<li>Submitting human application data can waive efficacy test data, but that ingredient's effect cannot then be claimed.</li>
<li>Products using listed actives and amounts: origin, safety and efficacy data waived.</li>
<li>Sunscreens of SPF 10 or less: SPF data waived.</li>
</ul>

<h2>After review or report</h2>
<p>A functional cosmetic without a review or report cannot be sold, or imported, stored or displayed for sale. Batches made for the review under GMP count as made after the review once the result is notified as suitable, up to 3 batches by batch number. Then:</p>
<ol>
<li>Manufacture or import with the reviewed or reported ingredients and amounts.</li>
<li>Label the product with the functional cosmetic wording or mark and the reviewed claims and directions; hair loss, acne, skin barrier and stretch mark products also need the statement that they are not medicines for preventing or treating disease.</li>
<li>Report the ingredient list before distribution.</li>
<li>Keep advertising consistent with the review result and avoid medicinal claims.</li>
<li>File a change review or a new report if reviewed or reported details change.</li>
</ol>
<p>YouSun Administrative Agency decides the route from your formula and claims and prepares the review application or report and the distributor paperwork. See <a href="/en/services/functional-cosmetics">our functional cosmetics service</a> and <a href="/en/services/cosmetics">responsible distributor registration</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can we use overseas test data for an imported product?</p><p class="faq-a">A. Efficacy data submitted to and evaluated by the government of the country of development, or published in journals in the Science Citation Index, can be used. Foreign data is filed with a Korean summary and the original. Human patch tests must be run by a university or specialist research institute in Korea or abroad.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can we use the same product name as a reviewed product?</p><p class="faq-a">A. No. Where several distributors import the same product from one plant, each adds its own name to tell them apart.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can we get a review before registering as a responsible distributor?</p><p class="faq-a">A. Reviews and reports are open to manufacturers, registered responsible distributors and research institutes, so an importer should register first.</p></div>
</div>

<div class="cta-block"><h3>Find out first: review or report?</h3><p>Send the formula and the claims you want to make, and YouSun Administrative Agency will set out the route, the documents and the labelling checks before sale. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国功能性化妆品审查与报告的区别 — 我的产品走哪条路',
    category: '化妆品',
    metaTitle: '韩国功能性化妆品审查与报告 — 对象区分·提交资料·销售流程',
    metaDescription: '韩国功能性化妆品须按品目接受审查或提交报告。与告示品目或已审查品目相同的提交报告，否则须附安全性·有效性资料接受审查。本文说明对象区分、资料豁免和销售前的标示流程。',
    excerpt: '在韩国以功能性化妆品名义销售，须按品目接受食品医药品安全评价院长的审查或提交报告。功效成分、功效、用法用量、标准及试验方法与告示品目或已审查品目相同的提交报告，否则接受审查。',
    content: `<div class="toc"><p>目录</p><ol><li>审查与报告有何不同</li><li>只需报告的三种情形</li><li>审查资料与豁免范围</li><li>审查·报告后的销售流程</li><li>常见问题</li></ol></div>
<p><strong>希望以功能性化妆品名义销售的化妆品制造业者、已登记的化妆品责任销售业者及研究机构等，须按品目接受食品医药品安全评价院长的审查或提交报告。功效成分的种类和含量、功效、用法用量、标准及试验方法与告示品目或已审查品目相同的，提交报告即可；否则须附安全性和有效性资料接受审查。</strong>功能性化妆品的范围限定为美白、改善皱纹、防晒、改变发色、脱毛、缓解脱发、缓解痤疮性皮肤、恢复皮肤屏障、淡化妊娠纹红线等11类。</p>
<p>与医药外品的界限见<a href="/zh/blog/quasi-drug-vs-cosmetics-classification">医药外品与化妆品的区分</a>。</p>

<h2>审查与报告有何不同</h2>
<table><thead><tr><th>项目</th><th>审查</th><th>报告</th></tr></thead><tbody>
<tr><td>对象</td><td>与告示品目、已审查品目不同的功能性化妆品</td><td>在规定事项上与告示品目或已审查品目完全相同的产品</td></tr>
<tr><td>提交文件</td><td>功能性化妆品审查委托书及来源·开发经过、安全性、有效性、标准及试验方法资料</td><td>审查豁免品目报告书（产品名、功效、用法用量、功效原料等）</td></tr>
<tr><td>结果</td><td>登记审查台账并发放审查结果通知书，表格所列处理期限60日</td><td>确认要件后登记报告台账</td></tr>
</tbody></table>

<h2>只需报告的三种情形</h2>
<ol>
<li>功效成分、功效、用法用量、标准及试验方法与食品药品安全处长告示的品目相同。</li>
<li>同一责任销售业者（或自行设计·开发·生产的同一制造业者、同一研究机构）已获审查的品目，与本品的功效原料种类·规格·含量、功效、标准及试验方法、用法用量、剂型全部相同。</li>
<li>已审查的防晒品目成分与告示的美白·改善皱纹成分混合，其他事项全部相同。</li>
</ol>
<p>第二种情形中，美白、改善皱纹以及脱发、痤疮、皮肤屏障、妊娠纹类，仅限已审查品目通过对照组比较实验证明功效的情形。防晒产品的防晒指数测定值在负20%以内视为同一功效；部分类型将液剂、乳液剂、霜剂视为同一剂型。仅因配方与其他公司已审查的品目相同，并不能走报告路径。</p>

<h2>审查资料与豁免范围</h2>
<p>审查通常需要单次给药毒性、初次皮肤刺激、眼黏膜刺激、皮肤致敏、光毒性、人体斑贴试验等安全性资料，以及功效试验、人体应用试验等有效性资料。下列情形可豁免部分资料：</p>
<ul>
<li>使用功能性化妆品标准及试验方法、国际化妆品原料集（ICID）、食品标准及规格所定原料的产品，豁免安全性资料（人体试验显示安全隐患的除外）。</li>
<li>提交人体应用试验资料可豁免功效试验资料，但该成分的功效不得标示。</li>
<li>使用告示成分·含量的品目，豁免来源、安全性、有效性资料。</li>
<li>防晒指数10以下的产品，豁免防晒指数设定依据资料。</li>
</ul>

<h2>审查·报告后的销售流程</h2>
<p>未经审查或未提交报告的功能性化妆品，不得销售，也不得为销售而进口、保管、陈列。为审查而制造的产品按优良化妆品制造管理标准生产且结果通知为合格的，按制造编号最多3个制造单位视为审查后制造。之后的顺序如下：</p>
<ol>
<li>按审查·报告的原料和含量制造或进口。</li>
<li>包装上标示"功能性化妆品"字样或图案以及审查·报告的功效和用法用量；脱发、痤疮、皮肤屏障、妊娠纹类还须写明"并非用于预防和治疗疾病的医药品"。</li>
<li>流通销售前报告原料目录。</li>
<li>广告不得与审查结果不符，也不得使人误认为医药品。</li>
<li>审查·报告事项变更的，重新办理变更审查或报告。</li>
</ol>
<p>YouSun Administrative Agency根据配方和功效文案判断走审查还是报告，并制作提交审查委托书、报告书及责任销售业文件。详见<a href="/zh/services/functional-cosmetics">功能性化妆品审查·报告服务</a>和<a href="/zh/services/cosmetics">化妆品责任销售业登记</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 进口产品可以直接使用海外试验资料吗？</p><p class="faq-a">A. 已提交开发国政府并经评价的功效试验资料，或刊登于科学引文索引收录期刊的资料可以使用；外国资料须同时提交韩文摘要和原件。人体斑贴试验须由国内外大学或专业研究机构实施。</p></div>
<div class="faq-item"><p class="faq-q">Q. 可以使用与已审查产品相同的产品名吗？</p><p class="faq-a">A. 不可以。多家责任销售业者进口同一工厂的同一产品时，须并列标注各自的业者名加以区分。</p></div>
<div class="faq-item"><p class="faq-q">Q. 登记责任销售业之前可以先申请审查吗？</p><p class="faq-a">A. 可申请审查·报告的是制造业者、已登记的责任销售业者及研究机构等，进口销售的公司应先完成登记。</p></div>
</div>

<div class="cta-block"><h3>先确认是审查还是报告</h3><p>发送配方表和拟标示的功效文案，YouSun Administrative Agency为你整理路径、所需文件和销售前的标示检查顺序。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の機能性化粧品の審査と報告の違い — 自社製品はどちらで何を出すか',
    category: '化粧品',
    metaTitle: '韓国の機能性化粧品の審査と報告書提出 — 対象区分・提出資料・販売の流れ',
    metaDescription: '韓国の機能性化粧品は品目ごとに審査を受けるか報告書を提出します。告示品目や審査済み品目と同じなら報告、そうでなければ安全性・有効性資料を備えた審査です。対象区分、資料の免除、販売前の表示の流れを解説します。',
    excerpt: '韓国で機能性化粧品として販売するには、品目ごとに食品医薬品安全評価院長の審査を受けるか報告書を提出します。効能成分、効能・効果、用法・用量、基準及び試験方法が告示品目や審査済み品目と同じなら報告、そうでなければ審査です。',
    content: `<div class="toc"><p>目次</p><ol><li>審査と報告は何が違うか</li><li>報告で済む三つのケース</li><li>審査資料と免除の範囲</li><li>審査・報告後の販売の流れ</li><li>よくある質問</li></ol></div>
<p><strong>機能性化粧品として認められて販売しようとする化粧品製造業者・登録した化粧品責任販売業者・研究機関などは、品目ごとに食品医薬品安全評価院長の審査を受けるか報告書を提出する必要があります。効能成分の種類・含有量、効能・効果、用法・用量、基準及び試験方法が告示品目や審査済み品目と同じなら報告、そうでなければ安全性・有効性の資料を備えた審査になります。</strong>機能性化粧品の範囲は、美白、しわ改善、紫外線遮断、毛髪の色の変化、除毛、脱毛症状の緩和、にきび肌の緩和、皮膚バリアの回復、妊娠線の赤い線の緩和など11種類に定められています。</p>
<p>医薬部外品との境界は<a href="/ja/blog/quasi-drug-vs-cosmetics-classification">医薬部外品と化粧品の区分</a>で扱っています。</p>

<h2>審査と報告は何が違うか</h2>
<table><thead><tr><th>区分</th><th>審査</th><th>報告</th></tr></thead><tbody>
<tr><td>対象</td><td>告示品目・審査済み品目と同じでない機能性化粧品</td><td>定められた事項がすべて告示品目または審査済み品目と同じ製品</td></tr>
<tr><td>提出書類</td><td>機能性化粧品審査依頼書と起源・開発経緯、安全性、有効性、基準及び試験方法の資料</td><td>審査除外品目報告書（製品名、効能・効果、用法・用量、効能原料など）</td></tr>
<tr><td>結果</td><td>審査台帳に記載し審査結果通知書を発給、様式上の処理期間は60日</td><td>要件を確認したうえで報告台帳に記載</td></tr>
</tbody></table>

<h2>報告で済む三つのケース</h2>
<ol>
<li>効能成分、効能・効果、用法・用量、基準及び試験方法が食品医薬品安全処長の告示した品目と同じ場合</li>
<li>同じ責任販売業者（または自ら設計・開発・生産した同じ製造業者、同じ研究機関）がすでに審査を受けた品目と、効能原料の種類・規格・含有量、効能・効果、基準及び試験方法、用法・用量、剤形がすべて同じ場合</li>
<li>審査済みの紫外線遮断品目の成分に、告示された美白・しわ改善成分を混合した品目で、その他の事項がすべて同じ場合</li>
</ol>
<p>二つ目のケースでは、美白・しわ改善と脱毛・にきび・皮膚バリア・妊娠線の類型は、審査済み品目が対照群との比較試験で効能を立証している場合に限られます。紫外線遮断製品は遮断指数の測定値がマイナス20%以内なら同じ効能・効果とみなし、一部の類型では液剤・ローション剤・クリーム剤を同じ剤形とみなします。他社が審査を受けた品目と処方が同じというだけでは報告の対象になりません。</p>

<h2>審査資料と免除の範囲</h2>
<p>審査には単回投与毒性・一次皮膚刺激・眼粘膜刺激・皮膚感作性・光毒性・ヒトパッチテストなどの安全性資料と、効力試験・ヒト適用試験などの有効性資料が基本です。ただし次の場合は一部の資料が免除されます。</p>
<ul>
<li>機能性化粧品基準及び試験方法、国際化粧品原料集（ICID）、食品の基準及び規格に定める原料で作った製品は安全性資料を免除（ヒト試験で安全性の懸念がある場合を除く）</li>
<li>ヒト適用試験資料を出せば効力試験資料を免除できるが、その成分の効能・効果は表示できない</li>
<li>告示された成分・含有量の品目は起源・安全性・有効性の資料を免除</li>
<li>紫外線遮断指数10以下の製品は遮断指数設定の資料を免除</li>
</ul>

<h2>審査・報告後の販売の流れ</h2>
<p>審査を受けていない、または報告書を出していない機能性化粧品は、販売することも販売目的で輸入・保管・陳列することもできません。審査のために製造した製品は優秀化粧品製造管理基準を守って製造し、結果が適合と通知されれば、製造番号基準で最大3製造単位まで審査後に製造したものとみなされます。その後の順序は次のとおりです。</p>
<ol>
<li>審査・報告した原料と含有量のとおりに製造・輸入します。</li>
<li>包装に「機能性化粧品」の文字または図案、審査・報告した効能・効果と用法・用量を表示し、脱毛・にきび・皮膚バリア・妊娠線の類型は「疾病の予防及び治療のための医薬品ではない」旨の文言を入れます。</li>
<li>原料リストを流通・販売の前に報告します。</li>
<li>広告には審査結果と異なる内容や医薬品と誤認される表現を使いません。</li>
<li>処方・効能など審査・報告事項が変われば、変更審査や報告をやり直します。</li>
</ol>
<p>YouSun Administrative Agencyは処方と効能の文言から審査・報告のどちらかを判断し、審査依頼書・報告書と責任販売業の書類の作成・提出を進めます。詳しくは<a href="/ja/services/functional-cosmetics">機能性化粧品の審査・報告サービス</a>と<a href="/ja/services/cosmetics">化粧品責任販売業の登録</a>をご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 輸入製品の海外試験資料をそのまま使えますか。</p><p class="faq-a">A. 開発国の政府に提出され評価された効力試験資料や、科学引用索引に収録された学会誌に掲載された資料も認められ、外国の資料は韓国語の要約文と原文をあわせて提出します。ヒトパッチテストは国内外の大学または専門研究機関で実施したものである必要があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 他社が審査を受けた製品と同じ名前を使えますか。</p><p class="faq-a">A. 使えません。同じ製造所の製品を複数の責任販売業者が輸入する場合は、責任販売業者名を併記して区別します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 責任販売業の登録前に審査を受けられますか。</p><p class="faq-a">A. 審査・報告ができるのは製造業者、登録した責任販売業者、大学・研究機関などです。輸入して販売する会社は先に登録を済ませるのが順序です。</p></div>
</div>

<div class="cta-block"><h3>まず審査か報告かを確認しましょう</h3><p>処方表と表示したい効能の文言をお送りいただければ、YouSun Administrative Agencyが審査・報告の区分、準備書類、販売前の表示チェックの順序を整理します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 기능성화장품은 '심사' 또는 '보고서 제출'(허가·등록·신고 아님)
entry.wrongTerms = [
  '기능성화장품 허가', '기능성화장품 품목허가', '기능성화장품 등록', '기능성화장품 신고',
  'functional cosmetics permit', 'functional cosmetics licence', 'functional cosmetics registration',
  '功能性化妆品许可', '功能性化妆品注册', '功能性化妆品备案',
  '機能性化粧品の許可', '機能性化粧品の登録', '機能性化粧品の届出',
]

export default entry
