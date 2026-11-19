// 원고 은행 — INHE-BANK-1119(2026-11-19, 맥4 하위 작성 담당 B, kind=seo3958, angle=documents)
// 주제(풀): cosmetics-distributor(화장품책임판매업등록) / 세부주제: documents — 영유아·어린이 사용 화장품 제품별 안전성 자료 작성·보관
// 대표 검색어: '영유아 화장품 안전성 자료'(배정표 대표 검색어안 그대로)
//
// 겹침 검사(lib/blog-posts-data.ts·lib/i18n/blog-i18n.ts·bank 대조):
//   영유아·어린이 화장품 안전성 자료를 다룬 기존 KO/i18n 글 없음(blog-posts-data.ts 'cosmetics-*' 본문에 '영유아'·'어린이' 0건).
//   cosmetics-distributor-compliance-obligations — 품질관리기준·실적/원료 목록 보고·교육 → 이 글은 문서관리 절차 연결만 언급, 링크.
//     (그 글 머리 주석은 제4조의2·제4조의3 단계 시행을 이유로 이 주제를 다루지 않았음 → 이 글이 빈자리를 채움)
//   cosmetics-import-sales-registration-guide — 수입 등록·전성분 표시 → 링크만.
//   cosmetics-fix(ko 전용) — 표시·광고 위반 처분 일반 → 링크만, 이 글은 처분 '대상' 한 줄.
//   같은 배치 cosmetics-ingredient-review-checklist(아직 라이브 아님) — 영유아 보존제 제한은 그 글 FAQ 한 줄, 링크 금지 규칙에 따라 링크 안 함.
//
// 법령 대조(python3 -I ~/work/inhebank-1119/tools/law.py, law.go.kr DRF OC=visionlaw, 2026-11-19 조회, 사본 ~/work/inhebank-1119/law):
//   화장품법 MST 291337(2026. 10. 20. 시행) — 제4조의3 제1항 제1호~제3호(영유아·어린이 사용 표시·광고 시 제품별 안전성 자료 작성·보관)·제2항·제4항,
//     제24조 제1항 제5호의4(작성·보관 위반 → 등록 취소 등), 제37조 제1항(벌칙 — 금액 미기재), 제5조의2 제1항(회수)
//     ※ 법률 제21302호(2025. 12. 30.)로 종전 제4조의2가 제4조의3으로 이동. 시행규칙·고시는 아직 종전 번호 '법 제4조의2제1항'을 인용(문언 미정합).
//       같은 법 부칙 제1조 제1항: 제4조의3 제1항 제2호 개정규정과 제24조·제37조 등 중 '제4조의3제1항' 부분은 2029. 1. 1. 시행,
//       제4조의2(화장품 안전성 평가)는 업소 규모·제품별 2028. 1. 1.~2031. 1. 1. 단계 시행. 종전 규정에도 작성·보관 의무·처분·벌칙 규정 존재(번호만 다름).
//   화장품법 시행규칙 MST 285249(2026. 4. 2. 시행) — 제10조의2 제1항(영유아 3세 이하, 어린이 4세 이상 13세 이하)·제2항 제1호(1차·2차 포장 특정 표시, 명칭 포함)·
//     제2호(별표 5 제1호 가목~바목 매체, 어린이는 바목 제외), 제10조의3 제1항(표시·광고 전 3종 모두 미리 작성)·제2항 제1호(사용기한 표시: 마지막 제조·수입 제품
//     사용기한 만료일 이후 1년)·제2호(개봉 후 사용기간 표시: 제조연월일 이후 3년, 제조=제조번호 제조일자·수입=통관일자)·제3항,
//     제10조의4 제1항·제2항(5년마다 실태조사, 작성·보관 현황 포함), 제19조 제4항 제8호(사용기준 지정 보존제 함량 표시), 별표 5 제1호(광고 매체)
//   영유아 또는 어린이 사용 화장품 안전성 자료의 작성·보관에 관한 규정 행정규칙 ID 2100000191392(2020. 7. 24. 시행) — 제2조, 제3조 제1항(별표 작성방법)·
//     제2항(품질관리기준 문서·기록 관리 절차로 작성·개정·승인), 제4조 제1항(인쇄본·전자매체, 사본·백업)·제2항(기간 후 책임판매관리자 책임 하 폐기),
//     별표 제1호 가목·나목(제품표준서·제조관리기준서·수입관리기록서 사본 대체), 제2호 가목~다목, 제3호 가목·나목
//   화장품 안전기준 등에 관한 규정 ID 2100000276068(2026. 3. 18. 시행) — 별표 2 살리실릭애씨드 및 그 염류(영유아용 제품류·만 13세 이하 어린이 특정 표시 제품
//     사용금지, 샴푸 제외)·아이오도프로피닐부틸카바메이트(같은 취지, 목욕용·샤워젤류·샴푸류 제외), 제6조 제4항 제1호(영·유아용 제품류 미생물 한도 강화 — 수치 미기재)
// 인허가 구분: 제품별 안전성 자료는 '작성·보관' 의무 — 허가·승인·신고·등록·사전 제출 아님. 영업은 화장품책임판매업 '등록'.
// 확신 없어 뺀 것:
//   - 수출 전용 제품 적용 제외(법 제30조) — 현행 문언의 '제4조의3제1항' 부분은 2029. 1. 1. 시행이고 종전 제30조에 영유아 조항 포함 여부 미확인 → 뺌.
//   - 2029년 이후 '화장품 안전성 평가 자료' 작성 범위·안전성 평가자 검토가 영유아 자료에도 요구되는지 — 시행규칙 미개정이라 화면은 '세부 기준이 바뀔 수 있다'로만.
//   - '온 가족용'·'저자극' 등 연령 비특정 표현의 해당 여부 — 법령 기준(특정하여 표시·광고)만 쓰고 개별 판단으로 둠.
//   - 보존제 사용한도 수치, 미생물 한도 수치, 벌칙·과태료 금액(S4).
//   - 고시가 정하는 '해당 매체·수단과 유사한 매체' 목록 — 미확인.

const SLUG = 'cosmetics-child-product-safety-file'

const entry = {
  topic: 'cosmetics-distributor',
  angle: 'documents',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '영유아 화장품 안전성 자료',
  source: { type: 'assignment', query: '영유아 화장품 안전성 자료' },
  pexelsId: 9775175,
  coverImage: '',
  relatedServices: [
    { title: '화장품책임판매업 등록', href: '/services/cosmetics' },
  ],

  ko: {
    title: '영유아 화장품 안전성 자료 — 어린이 사용 표시 전 준비할 서류와 보관 기간',
    category: '화장품',
    metaTitle: '영유아 화장품 안전성 자료 — 작성 대상·서류 구성·보관 기간',
    metaDescription: '영유아·어린이가 쓸 수 있다고 표시·광고하려면 제품별 안전성 자료 세 가지를 미리 작성해 보관해야 합니다. 대상 연령과 표시·광고 범위, 자료 구성, 보관 기간 계산법을 정리합니다.',
    excerpt: '화장품책임판매업자가 영유아(3세 이하)나 어린이(4세 이상 13세 이하)가 사용할 수 있는 화장품임을 표시·광고하려면, 그 전에 제품·제조방법 설명 자료, 안전성 평가 자료, 효능·효과 증명 자료를 모두 작성하고 정해진 기간 동안 보관해야 합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>언제 작성 의무가 생기나</li><li>제품별 안전성 자료 구성</li><li>보관 기간과 관리</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>화장품책임판매업자가 영유아(3세 이하)나 어린이(4세 이상 13세 이하)가 사용할 수 있는 화장품임을 표시·광고하려면, 그 전에 제품별 안전성 자료인 제품·제조방법 설명 자료, 안전성 평가 자료, 효능·효과 증명 자료를 모두 작성하고 정해진 기간 동안 보관해야 합니다.</strong><!-- 근거: 화장품법 제4조의3 제1항(시행규칙은 종전 번호 법 제4조의2제1항 인용), 시행규칙 제10조의2 제1항, 제10조의3 제1항 --> 식약처에 미리 내는 서류가 아니라 갖춰 두는 의무이며, 작성·보관하지 않으면 등록 취소 등 행정처분과 형사처벌 대상이 됩니다. 식약처는 5년마다 자료 작성·보관 현황 등을 실태조사합니다.<!-- 근거: 화장품법 제24조 제1항 제5호의4, 제37조 제1항, 시행규칙 제10조의4 제1항·제2항 --></p>
<p>등록 뒤 일반 준수사항은 <a href="/blog/cosmetics-distributor-compliance-obligations">화장품책임판매업자 준수사항</a>, 수입 제품 등록과 표시는 <a href="/blog/cosmetics-import-sales-registration-guide">화장품 수입 판매 등록 가이드</a>, 표시·광고 위반 처분은 <a href="/blog/cosmetics-fix">화장품 광고 위반 처분 정리</a>에서 다룹니다.</p>

<h2>언제 작성 의무가 생기나</h2>
<table><thead><tr><th>구분</th><th>작성 대상이 되는 경우</th></tr></thead><tbody>
<tr><td>표시</td><td>1차 포장이나 2차 포장에 영유아·어린이가 사용할 수 있는 화장품임을 특정해 표시하는 경우. 제품 명칭에 영유아·어린이 관련 표현이 들어간 경우도 포함합니다.<!-- 근거: 시행규칙 제10조의2 제2항 제1호 --></td></tr>
<tr><td>광고</td><td>신문·방송·잡지, 전단·팸플릿·견본, 인터넷, 포스터·간판·전광판, 비디오물·서적·간행물, 방문광고·실연 등에서 영유아·어린이 사용 제품임을 특정해 광고하는 경우. 어린이 제품은 방문광고·실연을 빼고 봅니다.<!-- 근거: 시행규칙 제10조의2 제2항 제2호, 별표 5 제1호 가목~바목 --></td></tr>
<tr><td>연령</td><td>영유아는 3세 이하, 어린이는 4세 이상 13세 이하입니다.<!-- 근거: 시행규칙 제10조의2 제1항 --></td></tr>
</tbody></table>
<p>이런 표시·광고를 하면 사용기준이 지정된 보존제의 함량을 포장에 적어야 합니다. 살리실릭애씨드 및 그 염류, 아이오도프로피닐부틸카바메이트 같은 일부 보존제는 영유아용 제품류나 만 13세 이하 어린이 사용을 특정해 표시하는 제품에 쓸 수 없고(샴푸 등 일부 예외), 영·유아용 제품류는 미생물 한도도 일반 제품보다 엄격합니다.<!-- 근거: 시행규칙 제19조 제4항 제8호, 화장품 안전기준 등에 관한 규정 별표 2 비고, 제6조 제4항 제1호 --></p>
<ol>
<li>포장 문구·제품명·상세페이지·광고안에서 영유아·어린이 표현을 모두 찾습니다.</li>
<li>표현이 있으면 처방의 보존제를 영유아·어린이 사용금지 조건과 대조합니다.</li>
<li>제품별 안전성 자료 세 가지를 표시·광고 전에 작성합니다.</li>
<li>포장에 보존제 함량 표시를 넣습니다.</li>
<li>보관 종료일을 계산해 문서관리 대장에 적어 둡니다.</li>
</ol>

<h2>제품별 안전성 자료 구성</h2>
<table><thead><tr><th>자료</th><th>담을 내용</th></tr></thead><tbody>
<tr><td>제품 및 제조방법 설명 자료</td><td>제품명, 효능·효과(기능성화장품), 사용상 주의사항, 원료명과 분량, 보관조건, 사용기한 등 제품 정보와 완제품까지의 제조방법. 내용이 담겨 있으면 제품표준서·제조관리기준서 사본, 수입 화장품은 수입관리기록서 사본으로 대신할 수 있습니다.</td></tr>
<tr><td>안전성 평가 자료</td><td>원료별 물리화학적 특성·독성·기준규격 검토(제조 중 제거된 성분 제외), 완제품이 유통화장품 안전관리 기준에 맞는지 검토한 자료, 사용 후 이상사례의 수집·검토·평가·조치 자료, 이를 종합한 제품 안전성 평가 결과</td></tr>
<tr><td>효능·효과 증명 자료</td><td>기능성화장품이면 심사 결과자료나 제출한 보고서, 표시·광고 중 사실에 관한 실증자료</td></tr>
</tbody></table>
<p>자료는 품질관리기준의 문서·기록 관리 절차에 따라 작성·개정·승인합니다. 화장품 안전성 평가 제도가 업소 규모와 제품에 따라 2028년부터 2031년까지 단계적으로 도입되고, 영유아·어린이 제품의 안전성 평가 자료 항목도 2029년부터 그 제도와 연결되므로 세부 작성 기준이 바뀔 수 있습니다.<!-- 근거: 영유아 또는 어린이 사용 화장품 안전성 자료의 작성·보관에 관한 규정 제3조 제2항·별표, 화장품법 부칙(법률 제21302호) 제1조 제1항 --></p>

<h2>보관 기간과 관리</h2>
<p>1차 포장에 사용기한을 표시하는 제품은 영유아·어린이 사용 표시·광고를 한 날부터 마지막으로 제조·수입된 제품의 사용기한 만료일 이후 1년까지, 개봉 후 사용기간을 표시하는 제품은 마지막 제조·수입 제품의 제조연월일 이후 3년까지 보관합니다. 제조는 제조번호에 따른 제조일자, 수입은 통관일자가 기준입니다.<!-- 근거: 시행규칙 제10조의3 제2항 제1호·제2호 --></p>
<p>보관은 인쇄본이나 전자매체로 하고 훼손에 대비해 사본·백업을 둘 수 있으며, 기간이 지나면 책임판매관리자 책임 아래 폐기할 수 있습니다. 기간은 마지막 제조·수입 제품을 기준으로 계산하므로 판매를 끝낸 뒤에도 보관이 이어집니다.<!-- 근거: 안전성 자료 작성·보관 규정 제4조 제1항·제2항 --> 유선행정사사무소는 표시·광고 문구 점검과 자료 목록·보관 대장 정리를 <a href="/services/cosmetics">화장품책임판매업 업무</a>와 함께 진행합니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 식약처에 자료를 제출해야 하나요?</p><p class="faq-a">A. 사전 제출 의무가 아니라 작성·보관 의무입니다. 다만 실태조사나 점검에서 요청받으면 바로 보여 줄 수 있도록 정리해 두어야 합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 제품명에 '키즈'만 들어가도 해당하나요?</p><p class="faq-a">A. 제품 명칭에 영유아·어린이에 관한 표현이 들어가면 표시에 해당합니다. 연령을 특정하지 않는 표현은 개별 판단이 필요하므로 문구를 정하기 전에 검토하는 것이 안전합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 해외 제조사가 원료 정보를 주지 않으면요?</p><p class="faq-a">A. 작성 책임은 국내 화장품책임판매업자에게 있습니다. 수입 계약에 원료 정보, 제조방법, 이상사례 정보 제공 조항을 넣어 두는 것이 좋습니다.</p></div>
</div>

<div class="cta-block"><h3>아기·어린이 표현을 쓰기 전에 확인하세요</h3><p>포장 문구와 광고안, 처방표를 보내 주시면 유선행정사사무소가 작성 대상 여부, 갖출 자료 목록, 보관 기간 계산을 정리해 드립니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 화장품법 제4조의3·제24조·제37조, 시행규칙 제10조의2~제10조의4·제19조, 영유아 또는 어린이 사용 화장품 안전성 자료의 작성·보관에 관한 규정 제3조·제4조·별표 --></p>`,
  },

  en: {
    title: 'Safety Files for Baby and Children\'s Cosmetics in Korea — Documents and Retention',
    category: 'Cosmetics',
    metaTitle: 'Baby and Children\'s Cosmetics Safety Files in Korea',
    metaDescription: 'Before claiming a cosmetic is for infants or children in Korea, a product safety file must be prepared and kept. Ages, claims covered, contents and retention.',
    excerpt: 'A responsible distributor in Korea that labels or advertises a cosmetic as usable by infants (3 or under) or children (4 to 13) must first prepare a product safety file with three parts and keep it for a set period.',
    content: `<div class="toc"><p>Contents</p><ol><li>When the duty applies</li><li>What the safety file contains</li><li>Retention and handling</li><li>FAQ</li></ol></div>
<p><strong>A responsible distributor in Korea that wants to label or advertise a cosmetic as usable by infants (aged 3 or under) or children (aged 4 to 13) must first prepare a product safety file, made up of a product and manufacturing description, safety assessment data and proof of claims, and keep it for a set period.</strong> It is not filed with the MFDS in advance but kept on hand; failing to prepare or keep it can lead to cancellation of registration and criminal penalties. The MFDS surveys how files are kept every 5 years.</p>
<p>See <a href="/en/blog/cosmetics-distributor-compliance-obligations">ongoing duties of a responsible distributor</a> and <a href="/en/blog/cosmetics-import-sales-registration-guide">our guide to registering for cosmetics import and sale</a>.</p>

<h2>When the duty applies</h2>
<table><thead><tr><th>Item</th><th>Covered when</th></tr></thead><tbody>
<tr><td>Labelling</td><td>The inner or outer packaging specifically states use by infants or children, including where the product name refers to them.</td></tr>
<tr><td>Advertising</td><td>Newspapers, broadcasting, magazines, leaflets, samples, the internet, posters, signs, videos, books, door-to-door sales or demonstrations specifically target infant or child use; for children's products, door-to-door sales and demonstrations are excluded.</td></tr>
<tr><td>Ages</td><td>Infants are 3 or under; children are 4 to 13.</td></tr>
</tbody></table>
<p>Such claims also require the content of designated preservatives on the packaging. Some preservatives, such as salicylic acid and its salts and iodopropynyl butylcarbamate, cannot be used in infant products or products claimed for children aged 13 or under (with some exceptions such as shampoo), and infant products face stricter microbial limits.</p>
<ol>
<li>Find every infant or child reference on packaging, product names, product pages and ads.</li>
<li>Check the preservatives in the formula against the restrictions.</li>
<li>Prepare all three parts of the file before the claim is made.</li>
<li>Add preservative content to the label.</li>
<li>Calculate the retention end date and record it.</li>
</ol>

<h2>What the safety file contains</h2>
<table><thead><tr><th>Part</th><th>Contents</th></tr></thead><tbody>
<tr><td>Product and manufacturing description</td><td>Name, claims, precautions, ingredients and amounts, storage, shelf life and the manufacturing method. A product standard, manufacturing control standard or, for imports, the import control record may be used instead if it covers these.</td></tr>
<tr><td>Safety assessment</td><td>Review of each ingredient's properties, toxicity and specifications; review against the finished product safety standards; adverse event collection and follow-up; and the overall assessment result.</td></tr>
<tr><td>Proof of claims</td><td>For functional cosmetics, the review result or report; and substantiation for factual claims in labels and ads.</td></tr>
</tbody></table>
<p>The file is prepared, revised and approved under the document control procedures of the quality control standards. A new cosmetic safety assessment system is being phased in from 2028 to 2031 depending on business size and product, and the safety assessment part for infant and children's products links to it from 2029, so detailed rules may change.</p>

<h2>Retention and handling</h2>
<p>If the inner packaging shows an expiry date, keep the file from the first claim until 1 year after the expiry of the last batch made or imported; if it shows a period after opening, until 3 years after the manufacturing date of the last batch. Manufacture counts from the batch's manufacturing date and imports from the customs clearance date.</p>
<p>Keep it in print or electronic form with copies or backups, and after the period it may be destroyed under the responsibility of the responsible manager. Because the period runs from the last batch, retention continues after sales end. YouSun Administrative Agency reviews label and ad wording and sets up the file index and retention log alongside <a href="/en/services/cosmetics">responsible distributor work</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Do we submit the file to the MFDS?</p><p class="faq-a">A. No advance submission is required, but it must be ready to show during surveys or inspections.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does "kids" in the product name count?</p><p class="faq-a">A. A product name referring to infants or children counts as labelling. Wording without a specific age needs case-by-case review before you finalise it.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the overseas manufacturer will not share ingredient data?</p><p class="faq-a">A. The Korean responsible distributor carries the duty, so build ingredient, manufacturing and adverse event data sharing into the supply contract.</p></div>
</div>

<div class="cta-block"><h3>Check before using baby or kids wording</h3><p>Send the packaging text, ad drafts and formula, and YouSun Administrative Agency will confirm whether the duty applies, list the file contents and calculate retention. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国婴幼儿化妆品安全性资料 — 标示儿童使用前须准备的文件与保管期限',
    category: '化妆品',
    metaTitle: '韩国婴幼儿·儿童化妆品安全性资料 — 对象·构成·保管期限',
    metaDescription: '在韩国标示或广告化妆品可供婴幼儿·儿童使用前，须事先制作并保管三类产品安全性资料。本文说明对象年龄、标示·广告范围、资料构成以及保管期限的计算方法。',
    excerpt: '韩国化妆品责任销售业者若要标示或广告产品可供婴幼儿（3岁以下）或儿童（4岁以上13岁以下）使用，须事先制作产品·制造方法说明资料、安全性评价资料、功效证明资料，并在规定期间内保管。',
    content: `<div class="toc"><p>目录</p><ol><li>何时产生制作义务</li><li>产品安全性资料的构成</li><li>保管期限与管理</li><li>常见问题</li></ol></div>
<p><strong>在韩国，化妆品责任销售业者若要标示或广告产品可供婴幼儿（3岁以下）或儿童（4岁以上13岁以下）使用，须在此之前制作产品安全性资料，即产品·制造方法说明资料、安全性评价资料、功效证明资料，并在规定期间内保管。</strong>这不是事先向食品药品安全处提交的文件，而是须备置的义务；未制作或保管的，可能受到撤销登记等行政处分及刑事处罚。食品药品安全处每5年对资料制作·保管情况等进行实态调查。</p>
<p>登记后的一般义务见<a href="/zh/blog/cosmetics-distributor-compliance-obligations">化妆品责任销售业者的遵守事项</a>，进口登记和标示见<a href="/zh/blog/cosmetics-import-sales-registration-guide">化妆品进口销售登记指南</a>。</p>

<h2>何时产生制作义务</h2>
<table><thead><tr><th>类型</th><th>属于制作对象的情形</th></tr></thead><tbody>
<tr><td>标示</td><td>在内包装或外包装上特定标示可供婴幼儿·儿童使用，包括产品名称中含有婴幼儿·儿童相关表述的情形。</td></tr>
<tr><td>广告</td><td>通过报纸·广播·杂志、传单·宣传册·样品、互联网、海报·招牌·电子屏、录像·书籍·出版物、上门推销·现场演示等特定宣传供婴幼儿·儿童使用；儿童产品不含上门推销·现场演示。</td></tr>
<tr><td>年龄</td><td>婴幼儿为3岁以下，儿童为4岁以上13岁以下。</td></tr>
</tbody></table>
<p>作此类标示·广告的，须在包装上标示已指定使用标准的防腐剂含量。水杨酸及其盐类、碘丙炔醇丁基氨甲酸酯等部分防腐剂不得用于婴幼儿用产品或特定标示供13岁以下儿童使用的产品（洗发水等部分除外），婴幼儿用产品的微生物限度也比一般产品更严。</p>
<ol>
<li>在包装文案、产品名、详情页、广告方案中找出所有婴幼儿·儿童表述。</li>
<li>如有，将配方中的防腐剂与婴幼儿·儿童禁用条件核对。</li>
<li>在标示·广告前制作全部三类资料。</li>
<li>在包装上加入防腐剂含量标示。</li>
<li>计算保管截止日并记入文件管理台账。</li>
</ol>

<h2>产品安全性资料的构成</h2>
<table><thead><tr><th>资料</th><th>内容</th></tr></thead><tbody>
<tr><td>产品及制造方法说明资料</td><td>产品名、功效（功能性化妆品）、使用注意事项、原料名及分量、保管条件、使用期限等产品信息和至成品的制造方法。内容齐备的，可用产品标准书、制造管理标准书副本代替，进口化妆品可用进口管理记录书副本代替。</td></tr>
<tr><td>安全性评价资料</td><td>各原料的理化特性·毒性·标准规格审查（制造中去除的成分除外）、成品是否符合流通化妆品安全管理标准的审查、使用后不良事例的收集·审查·评价·处置资料，以及综合得出的产品安全性评价结果。</td></tr>
<tr><td>功效证明资料</td><td>功能性化妆品的审查结果资料或已提交的报告书，以及标示·广告中事实部分的实证资料。</td></tr>
</tbody></table>
<p>资料须按质量管理标准中的文件·记录管理程序制作、修订和批准。化妆品安全性评价制度将根据企业规模和产品在2028年至2031年间分阶段导入，婴幼儿·儿童产品的安全性评价资料项目也将自2029年起与该制度衔接，具体制作标准可能变化。</p>

<h2>保管期限与管理</h2>
<p>内包装标示使用期限的产品，自作婴幼儿·儿童使用标示·广告之日起，保管至最后一批制造·进口产品使用期限届满后1年；标示开封后使用期间的产品，保管至最后一批产品制造年月日后3年。制造以制造编号对应的制造日期为准，进口以通关日期为准。</p>
<p>可用纸质或电子介质保管，并可备份；期限届满后可在责任销售管理者负责下销毁。期限以最后一批产品计算，因此停止销售后仍须继续保管。YouSun Administrative Agency可配合<a href="/zh/services/cosmetics">化妆品责任销售业相关业务</a>，检查标示·广告文案并整理资料目录和保管台账。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 资料要提交给食品药品安全处吗？</p><p class="faq-a">A. 没有事先提交义务，而是制作·保管义务；但在实态调查或检查中被要求时须能立即出示。</p></div>
<div class="faq-item"><p class="faq-q">Q. 产品名里只有"kids"也算吗？</p><p class="faq-a">A. 产品名称含有婴幼儿·儿童相关表述即属于标示。不特定年龄的表述需个别判断，确定文案前先审查较为稳妥。</p></div>
<div class="faq-item"><p class="faq-q">Q. 海外生产商不提供原料信息怎么办？</p><p class="faq-a">A. 制作责任在韩国的化妆品责任销售业者，建议在进口合同中加入提供原料信息、制造方法和不良事例信息的条款。</p></div>
</div>

<div class="cta-block"><h3>使用婴儿·儿童表述前先确认</h3><p>发送包装文案、广告方案和配方表，YouSun Administrative Agency为你确认是否属于制作对象、须备资料清单和保管期限。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の乳幼児化粧品の安全性資料 — 子ども向け表示の前に準備する書類と保管期間',
    category: '化粧品',
    metaTitle: '韓国の乳幼児・子ども用化粧品の安全性資料 — 対象・構成・保管期間',
    metaDescription: '韓国で化粧品を乳幼児・子どもが使えると表示・広告する前に、製品別の安全性資料3種を作成して保管する必要があります。対象年齢、表示・広告の範囲、資料の構成、保管期間の計算を解説します。',
    excerpt: '韓国の化粧品責任販売業者が乳幼児（3歳以下）や子ども（4歳以上13歳以下）が使える化粧品だと表示・広告するには、事前に製品・製造方法の説明資料、安全性評価資料、効能・効果の証明資料を作成し、定められた期間保管する必要があります。',
    content: `<div class="toc"><p>目次</p><ol><li>いつ作成義務が生じるか</li><li>製品別安全性資料の構成</li><li>保管期間と管理</li><li>よくある質問</li></ol></div>
<p><strong>韓国の化粧品責任販売業者が、乳幼児（3歳以下）や子ども（4歳以上13歳以下）が使用できる化粧品であると表示・広告するには、その前に製品別安全性資料である製品・製造方法の説明資料、安全性評価資料、効能・効果の証明資料をすべて作成し、定められた期間保管する必要があります。</strong>食品医薬品安全処に事前に提出する書類ではなく備えておく義務で、作成・保管しなければ登録取消などの行政処分や刑事罰の対象になります。食品医薬品安全処は5年ごとに資料の作成・保管状況などの実態調査を行います。</p>
<p>登録後の一般的な遵守事項は<a href="/ja/blog/cosmetics-distributor-compliance-obligations">化粧品責任販売業者の遵守事項</a>、輸入の登録と表示は<a href="/ja/blog/cosmetics-import-sales-registration-guide">化粧品の輸入販売登録ガイド</a>で扱っています。</p>

<h2>いつ作成義務が生じるか</h2>
<table><thead><tr><th>区分</th><th>作成対象になる場合</th></tr></thead><tbody>
<tr><td>表示</td><td>一次包装または二次包装に乳幼児・子どもが使用できる化粧品であることを特定して表示する場合。製品名に乳幼児・子どもに関する表現が入る場合も含みます。</td></tr>
<tr><td>広告</td><td>新聞・放送・雑誌、チラシ・パンフレット・見本、インターネット、ポスター・看板・電光掲示板、ビデオ・書籍・刊行物、訪問広告・実演などで乳幼児・子ども用であることを特定して広告する場合。子ども用製品は訪問広告・実演を除きます。</td></tr>
<tr><td>年齢</td><td>乳幼児は3歳以下、子どもは4歳以上13歳以下です。</td></tr>
</tbody></table>
<p>このような表示・広告をする場合は、使用基準が指定された防腐剤の含有量を包装に記載する必要があります。サリチル酸及びその塩類、ヨウ化プロピニルブチルカルバミン酸などの一部の防腐剤は、乳幼児用製品類や13歳以下の子どもの使用を特定して表示する製品には使えず（シャンプーなど一部例外あり）、乳幼児用製品類は微生物限度も一般製品より厳しくなっています。</p>
<ol>
<li>包装の文言・製品名・詳細ページ・広告案から乳幼児・子どもの表現をすべて洗い出します。</li>
<li>表現があれば、処方の防腐剤を乳幼児・子ども向けの使用禁止条件と照合します。</li>
<li>表示・広告の前に安全性資料3種を作成します。</li>
<li>包装に防腐剤の含有量表示を入れます。</li>
<li>保管終了日を計算して文書管理台帳に記録します。</li>
</ol>

<h2>製品別安全性資料の構成</h2>
<table><thead><tr><th>資料</th><th>内容</th></tr></thead><tbody>
<tr><td>製品及び製造方法の説明資料</td><td>製品名、効能・効果（機能性化粧品）、使用上の注意、原料名と分量、保管条件、使用期限などの製品情報と完成品までの製造方法。内容が含まれていれば製品標準書・製造管理基準書の写し、輸入化粧品は輸入管理記録書の写しで代えられます。</td></tr>
<tr><td>安全性評価資料</td><td>原料ごとの物理化学的特性・毒性・規格の検討（製造中に除去される成分を除く）、完成品が流通化粧品の安全管理基準に適合するかの検討、使用後の有害事例の収集・検討・評価・措置の資料、それらを総合した製品の安全性評価結果</td></tr>
<tr><td>効能・効果の証明資料</td><td>機能性化粧品なら審査結果の資料または提出した報告書、表示・広告のうち事実に関する実証資料</td></tr>
</tbody></table>
<p>資料は品質管理基準の文書・記録管理手順に従って作成・改訂・承認します。化粧品の安全性評価制度が事業所の規模と製品に応じて2028年から2031年にかけて段階的に導入され、乳幼児・子ども用製品の安全性評価資料の項目も2029年からその制度とつながるため、細かな作成基準は変わる可能性があります。</p>

<h2>保管期間と管理</h2>
<p>一次包装に使用期限を表示する製品は、乳幼児・子ども用の表示・広告をした日から、最後に製造・輸入された製品の使用期限満了日の後1年まで、開封後の使用期間を表示する製品は、最後の製品の製造年月日の後3年まで保管します。製造は製造番号に基づく製造日、輸入は通関日が基準です。</p>
<p>保管は印刷物または電子媒体で行い、写し・バックアップを置くことができ、期間経過後は責任販売管理者の責任のもとで廃棄できます。期間は最後の製品を基準に計算するため、販売終了後も保管は続きます。YouSun Administrative Agencyは表示・広告の文言チェックと資料目録・保管台帳の整理を<a href="/ja/services/cosmetics">化粧品責任販売業の業務</a>とあわせて進めます。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 資料を食品医薬品安全処に提出する必要がありますか。</p><p class="faq-a">A. 事前の提出義務ではなく作成・保管の義務です。ただし実態調査や点検で求められたときにすぐ示せるよう整理しておく必要があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 製品名に「キッズ」と入るだけでも該当しますか。</p><p class="faq-a">A. 製品名に乳幼児・子どもに関する表現が入れば表示に該当します。年齢を特定しない表現は個別の判断が必要なため、文言を決める前に検討するのが安全です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 海外メーカーが原料情報を出さない場合は？</p><p class="faq-a">A. 作成の責任は韓国の化粧品責任販売業者にあります。輸入契約に原料情報、製造方法、有害事例情報の提供条項を入れておくのがよいでしょう。</p></div>
</div>

<div class="cta-block"><h3>赤ちゃん・子ども向けの表現を使う前に確認を</h3><p>包装の文言と広告案、処方表をお送りいただければ、YouSun Administrative Agencyが作成対象かどうか、備える資料の一覧、保管期間の計算を整理します。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 제품별 안전성 자료는 '작성·보관' 의무(허가·인증·신고·승인 아님)
entry.wrongTerms = [
  '영유아 화장품 허가', '어린이 화장품 인증', '안전성 자료 신고', '안전성 자료 승인',
  'baby cosmetics permit', 'children\'s cosmetics certification', 'safety file registration',
  '婴幼儿化妆品许可', '儿童化妆品认证', '安全性资料申报',
  '乳幼児化粧品の許可', '子ども用化粧品の認証', '安全性資料の届出',
]

export default entry
