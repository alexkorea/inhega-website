// 원고 은행 — inhega-daily (INHEGA-BLOG-RESTART 2026-10-24, kind seo3958)
// 주제: food-manufacturing(식품제조가공업등록) / 세부주제: comparison(유사 제도 비교)
// 대표 검색어: "식품제조가공업 통신판매업 신고" — GSC 약 29회 노출·클릭 0, 이 의도를 겨냥한 기존 글 없음(착지는 license-guide 의 우연 노출).
// 이전 장문 초안(bank/food-manufacturing-online-sales-report.prev.mjs.txt, BLOG-REFILL-1014 보류)을 새 분량으로 압축 재작성.
//   - 식품제조·가공업은 '허가'가 아니라 '등록'(시행령 제26조의2) — 4언어 모두 registration/登记/登録.
//   - 화면 조문·별표 번호 전부 제거, 근거는 <!-- 근거: --> 주석에만. 비용 면제 CTA 제거.
//
// 겹침 검사(기존 글과 경계):
//   food-manufacturing-license-guide(등록 절차·시설기준), food-manufacturing-permit(요건·소분업), food-manufacturing-fix(처분),
//   online-shop-communication-sales-registration-guide / online-shopping-mall-notification(통신판매업 일반·면제),
//   haccp-mandatory-industries(HACCP 의무 업종)
//   → 이 글은 "직접 만든 식품을 온라인으로 팔 때 어느 식품위생법 영업 형태 + 통신판매업 신고"만 다룬다.
//     허가/등록/신고 일반 구분·시설기준·처분은 링크로 넘긴다.
//
// 법령 대조(law.go.kr DRF API, OC=visionlaw, 2026-10-24 조회):
//   식품위생법                 MST 285339, 2026. 10. 8. 시행 — 제37조 제4항·제5항·제6항, 제12항 제2호·제3호, 제13항
//   식품위생법 시행령          MST 288767, 2026. 8. 18. 시행 — 제21조 제1호·제2호·제5호 가목·나목 3), 제23조(허가 업종 = 식품조사처리업·단란·유흥뿐),
//                              제25조 제1항 제2호·제5호(신고), 제26조의2 제1항 제1호·단서(등록, 주류는 식약처)
//   식품위생법 시행규칙        MST 289161, 2026. 9. 1. 시행 — 제37조·별표 15, 제45조 제1항(7일·위탁자 보고),
//                              별표 14 제5호 나목 4) 가)·나)(유통전문판매업 사무소·창고), 별표 17 제2호 가목·나목·다목(즉석판매 준수사항)
//   전자상거래 등에서의 소비자보호에 관한 법률   MST 282793, 2026. 7. 21. 시행 — 제12조 제1항~제3항
//   같은 법 시행령             MST 288143, 2026. 7. 21. 시행 — 제13조 제1항·제2항
//   공정거래위원회 고시 「통신판매업 신고 면제 기준에 대한 고시」 제2022-4호(행정규칙일련번호 2100000210384, 2022. 4. 5. 시행) — 제2조 제1항·제2항
//
// 확인 못 한 점:
//   - 즉석판매제조·가공업 우편·택배 배달의 식약처장 고시 원문(admrul 검색 미발견) → 세부 조건·수치 없이 "고시 기준에 따라"로만 서술.
//   - HACCP 의무 품목 목록은 다루지 않고 링크(haccp-mandatory-industries)로 넘김.
// 금액·수수료 0건. 대조표: crosscheck/food-manufacturing-online-sales-report.md

const entry = {
  topic: "food-manufacturing",
  angle: "comparison",
  slug: "food-manufacturing-online-sales-report",
  kind: "seo3958",
  keyword: "식품제조가공업 통신판매업 신고",
  pexelsId: 15807279,
  coverImage: '',
  relatedServices: [{"title": "식품제조가공업 등록", "href": "/services/food-manufacturing"}, {"title": "통신판매업 신고", "href": "/services/mail-order-sales-report"}],
  ko: {
    title: "식품제조가공업 통신판매업 신고 — 직접 만든 식품을 온라인으로 팔 때 필요한 것",
    category: "식품",
    metaTitle: "식품제조가공업 통신판매업 신고 — 온라인 판매 영업 형태와 면제 기준",
    metaDescription: "직접 만든 식품을 온라인으로 팔 때 필요한 식품위생법상 등록·신고와 통신판매업 신고를 비교합니다. 식품제조가공업 등록, 즉석판매제조가공업·유통전문판매업 신고의 차이와 면제 기준을 확인하세요.",
    excerpt: "직접 만든 식품을 인터넷으로 팔려면 식품위생법상 영업 등록이나 신고와 전자상거래법상 통신판매업 신고를 따로 갖춰야 합니다. 판매 구조별로 맞는 영업 형태와 통신판매업 신고 면제 기준을 비교합니다.",
    content: `<div class="toc"><p>목차</p><ol><li>온라인 판매에는 신고가 두 갈래입니다</li><li>만드는 방식에 따른 식품위생법상 영업 형태</li><li>통신판매업 신고와 면제 기준</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>직접 만든 식품을 온라인으로 팔려면 「식품위생법」에 따른 영업 등록 또는 신고와 「전자상거래 등에서의 소비자보호에 관한 법률」(이하 전자상거래법)에 따른 통신판매업 신고를 각각 갖춰야 합니다.</strong> 식품제조·가공업 등록증이 있어도 통신판매업 신고가 저절로 되지 않고, 통신판매업 신고만으로 식품을 만들어 팔 수도 없습니다.<!-- 근거: 식품위생법 제37조 제4항·제5항, 전자상거래법 제12조 제1항 --></p>

<h2>온라인 판매에는 신고가 두 갈래입니다</h2>
<p>두 절차는 담당 법률도, 신고하는 내용도 다르고 신고증도 따로 나옵니다. 식품 영업의 절차와 시설기준 전반은 <a href="/blog/food-manufacturing-license-guide">식품제조가공업 신청 방법과 시설 기준</a>에서 다뤘습니다.</p>
<table><thead><tr><th>구분</th><th>식품위생법</th><th>전자상거래법</th></tr></thead><tbody>
<tr><td>다루는 대상</td><td>식품을 제조·가공·소분·판매하는 영업</td><td>자사 쇼핑몰·오픈마켓 입점 등 통신판매 방식</td></tr>
<tr><td>절차</td><td>영업 종류에 따라 등록 또는 신고</td><td>통신판매업 신고(면제 기준에 해당하면 생략 가능)</td></tr>
<tr><td>접수처</td><td>영업소 소재지 시·군·구청(주류 제조는 식품의약품안전처)<!-- 근거: 식품위생법 시행령 제25조 제1항, 제26조의2 제1항 --></td><td>주된 사무소 소재지 시·군·구청(주된 사무소가 외국이면 공정거래위원회)<!-- 근거: 전자상거래법 시행령 제13조 제1항 --></td></tr>
</tbody></table>

<h2>만드는 방식에 따른 식품위생법상 영업 형태</h2>
<p>어디서 만들어 누구에게 파는지에 따라 영업의 종류가 갈립니다. 식품제조·가공업은 허가가 아니라 <strong>등록</strong> 대상이고, 즉석판매제조·가공업·유통전문판매업·식품소분업은 <strong>신고</strong> 대상입니다.<!-- 근거: 식품위생법 시행령 제21조 제1호·제2호·제5호, 제25조 제1항 제2호·제5호, 제26조의2 제1항 제1호 --></p>
<table><thead><tr><th>판매 구조</th><th>영업 종류</th><th>절차</th></tr></thead><tbody>
<tr><td>내 작업장에서 만들어 온라인·도매로 판매</td><td>식품제조·가공업</td><td>등록 + 제품마다 품목제조보고</td></tr>
<tr><td>매장에서 만들어 최종소비자에게 직접·택배로 판매</td><td>즉석판매제조·가공업</td><td>신고</td></tr>
<tr><td>제조업체에 맡겨 내 상표로 판매</td><td>유통전문판매업</td><td>신고</td></tr>
<tr><td>완제품을 나누어 재포장해 판매</td><td>식품소분업</td><td>신고</td></tr>
</tbody></table>
<p><strong>식품제조·가공업</strong>은 정의상 판매 상대방 제한이 없어 온라인 소매와 납품을 함께 할 수 있습니다. 대신 제품을 만들 때마다 품목제조보고를 해야 하며, 보고서는 제품생산 시작 전이나 시작 후 7일 이내에 냅니다. 위탁 제조라면 위탁한 쪽이 보고합니다.<!-- 근거: 식품위생법 제37조 제6항, 시행규칙 제45조 제1항 --> 일부 품목은 식품안전관리인증기준(HACCP) 의무 적용 대상이므로 <a href="/blog/haccp-mandatory-industries">HACCP 의무 적용 업종</a>도 확인해야 합니다.<!-- 근거: 식품위생법 제48조 제2항 --></p>
<p><strong>즉석판매제조·가공업</strong>은 제조·가공업소에서 직접 최종소비자에게 파는 영업입니다. 만든 식품을 영업장 밖에서 팔 수 없지만, 영업자나 종업원이 최종소비자에게 직접 배달하거나 식품의약품안전처장이 고시하는 기준에 따라 우편·택배로 최종소비자에게 배달하는 것은 예외입니다. 유통·판매를 목적으로 하는 사람에게 넘기는 것은 금지되고, 빵류·과자류·떡류를 음식점·위탁급식영업자·집단급식소에 만든 당일 파는 경우만 예외이며 그 거래 증빙은 6개월간 보관합니다.<!-- 근거: 식품위생법 시행령 제21조 제2호, 시행규칙 별표 17 제2호 가목·나목·다목 --> 다른 판매자에게 물량을 넘기려면 식품제조·가공업을 검토해야 합니다.</p>
<p><strong>유통전문판매업</strong>은 스스로 만들지 않고 식품제조·가공업자에게 의뢰해 만든 식품을 자기 상표로 파는 영업입니다. 통신판매 형태라 구매자가 사무소를 찾지 않으면 주택 용도 건축물이나 창업보육센터를 사무소로 쓸 수 있고, 보관 창고는 영업소와 다른 곳에 두거나 임차할 수 있습니다.<!-- 근거: 식품위생법 시행령 제21조 제5호 나목 3), 시행규칙 별표 14 제5호 나목 4) 가)·나) --></p>

<h2>통신판매업 신고와 면제 기준</h2>
<p>통신판매업자는 상호(법인은 대표자 성명 포함), 주소, 전화번호, 전자우편주소, 인터넷 도메인 이름, 호스트서버 소재지 등을 신고합니다. 법인 등기사항증명서와 사업자등록증명은 관청이 행정정보 공동이용으로 확인합니다. 소비자가 먼저 결제하는 선지급식 판매라면 결제대금예치 이용이나 소비자피해보상보험계약 등을 증명하는 서류를 함께 냅니다.<!-- 근거: 전자상거래법 제12조 제1항, 같은 법 시행령 제13조 제1항·제2항 --> 서류 준비는 <a href="/blog/online-shop-communication-sales-registration-guide">통신판매업 신고 가이드</a>를 참고하시기 바랍니다.</p>
<p>공정거래위원회 고시에 따라 직전년도 통신판매 거래횟수가 50회 미만이거나 부가가치세법상 간이과세자이면 신고하지 않을 수 있고, 청약철회 등으로 취소된 거래는 횟수에 넣지 않습니다. 이 면제는 통신판매업 신고에만 적용되며 식품위생법상 등록·신고는 판매량과 관계없이 필요합니다.<!-- 근거: 통신판매업 신고 면제 기준에 대한 고시 제2조 제1항·제2항 --> 신고한 사항이 바뀌거나 휴업·폐업·재개할 때도 신고합니다.<!-- 근거: 전자상거래법 제12조 제2항·제3항 --></p>
<p>판매 시작 전 확인 순서는 다음과 같습니다.</p>
<ol>
<li>판매 상대방과 만드는 장소를 기준으로 영업 종류를 정합니다.</li>
<li>등록증·신고증의 영업 종류와 소재지가 실제 작업장과 같은지 봅니다.</li>
<li>식품제조·가공업이라면 판매할 제품마다 품목제조보고를 마칩니다.</li>
<li>즉석판매제조·가공업이라면 택배 배달이 고시 기준에 맞는지 확인합니다.</li>
<li>통신판매업 신고 대상인지 판단하고, 선지급식이면 구매안전 서류를 준비합니다.</li>
</ol>
<p>무등록 제조나 변경등록 누락 시 처분은 <a href="/blog/food-manufacturing-fix">식품제조가공업 영업정지·무등록 처벌 정리</a>에서, 등록 지원 범위는 <a href="/services/food-manufacturing">식품제조가공업 등록 서비스</a>에서 보실 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 식품제조가공업 등록을 했으면 통신판매업 신고는 안 해도 되나요?</p><p class="faq-a">A. 아닙니다. 두 절차는 법률이 다른 별개의 절차이므로, 면제 기준에 해당하지 않으면 통신판매업 신고를 따로 해야 합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 즉석판매제조가공업으로도 택배 판매가 되나요?</p><p class="faq-a">A. 식품의약품안전처장 고시 기준에 따라 최종소비자에게 배달하는 경우에는 가능합니다. 다른 판매자에게 넘겨 다시 팔게 하는 구조는 허용되지 않습니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 식품제조가공업은 허가 업종인가요?</p><p class="faq-a">A. 아닙니다. 식품제조·가공업은 시·군·구청에 하는 등록 업종이고, 즉석판매제조·가공업과 유통전문판매업은 신고 업종입니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 판매량이 적으면 통신판매업 신고를 생략할 수 있나요?</p><p class="faq-a">A. 직전년도 거래횟수가 50회 미만이거나 간이과세자라면 신고하지 않을 수 있습니다. 식품위생법상 등록이나 신고는 그와 관계없이 필요합니다.<!-- 근거: 통신판매업 신고 면제 기준에 대한 고시 제2조 제1항 --></p></div>
</div>

<div class="cta-block">
 <h3>만든 식품을 온라인으로 팔 계획이라면</h3>
 <p>판매 구조와 작업장 상황을 보고 맞는 영업 형태와 통신판매업 신고 대상 여부를 유선행정사사무소가 먼저 확인해 드립니다. 통신판매업 신고는 <a href="/services/mail-order-sales-report">통신판매업 신고 서비스</a>에서 함께 진행할 수 있습니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=food-manufacturing-online-sales-report">상담 신청하기</a>
</div>

<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 식품위생법, 같은 법 시행령, 같은 법 시행규칙, 전자상거래 등에서의 소비자보호에 관한 법률, 같은 법 시행령, 통신판매업 신고 면제 기준에 대한 고시 --></p>`,
  },
  en: {
    title: "Food Manufacturing Business and Mail-Order Report in Korea — What You Need to Sell Food You Make Online",
    category: "Food",
    metaTitle: "Food Manufacturing Business and Mail-Order Report in Korea",
    metaDescription: "Selling homemade food online in Korea needs a Food Sanitation Act registration or report plus a mail-order business report. Compare the business types.",
    excerpt: "To sell food you make online in Korea, you need a business registration or report under the Food Sanitation Act and, separately, a mail-order business report. This guide compares the business types by sales structure and explains the exemption threshold.",
    content: `<div class="toc"><p>Contents</p><ol><li>Selling food online takes two separate filings</li><li>Business types under the Food Sanitation Act by how you make the food</li><li>Mail-order business report and the exemption threshold</li><li>FAQ</li></ol></div>
<p><strong>To sell food you make yourself online in Korea, you need both a business registration or report under the Food Sanitation Act and a mail-order business report under the Act on the Consumer Protection in Electronic Commerce (the E-Commerce Act).</strong> One does not replace the other.</p>

<h2>Selling food online takes two separate filings</h2>
<p>The two procedures fall under different laws and produce separate certificates. The general procedure and facility standards for food businesses are covered in <a href="/en/blog/food-manufacturing-license-guide">our guide to the food manufacturing business</a>.</p>
<table><thead><tr><th>Item</th><th>Food Sanitation Act</th><th>E-Commerce Act</th></tr></thead><tbody>
<tr><td>What it governs</td><td>Businesses that make, process, repackage or sell food</td><td>Mail-order selling (own online store, open markets)</td></tr>
<tr><td>Procedure</td><td>Registration or report, depending on the business type</td><td>Mail-order business report (unless exempt)</td></tr>
<tr><td>Where to file</td><td>City, county or district office where the premises are (alcoholic beverage manufacturing: Ministry of Food and Drug Safety)</td><td>City, county or district office of the principal office (Fair Trade Commission if the principal office is abroad)</td></tr>
</tbody></table>

<h2>Business types under the Food Sanitation Act by how you make the food</h2>
<p>Which business type applies depends on where you make the food and to whom you sell it. The food manufacturing and processing business is subject to <strong>registration</strong>, not a permit. The instant sale manufacturing and processing business, the specialized distribution and sales business and the food repackaging business are subject to a <strong>report</strong>.</p>
<table><thead><tr><th>Sales structure</th><th>Business type</th><th>Procedure</th></tr></thead><tbody>
<tr><td>Made in your own workshop, sold online and wholesale</td><td>Food manufacturing and processing business</td><td>Registration + product manufacturing report for each product</td></tr>
<tr><td>Made in your shop, sold directly or by courier to end consumers</td><td>Instant sale manufacturing and processing business</td><td>Report</td></tr>
<tr><td>Made by a contract manufacturer, sold under your own brand</td><td>Specialized distribution and sales business</td><td>Report</td></tr>
<tr><td>Finished products divided and repackaged for sale</td><td>Food repackaging business</td><td>Report</td></tr>
</tbody></table>
<p>A <strong>food manufacturing and processing business</strong> has no restriction on buyers in its definition, so it can sell online to consumers and supply other businesses at the same time. It must file a product manufacturing report for each product before production starts or within 7 days after it starts; for outsourced production, the commissioning party files it. Some product types must apply HACCP (Hazard Analysis and Critical Control Points), so check that as well.</p>
<p>An <strong>instant sale manufacturing and processing business</strong> sells food directly to end consumers at the place where it is made. It may not sell outside the premises, except when the operator or staff deliver directly to end consumers, or when the food is sent by post or courier to end consumers under standards set by the Minister of Food and Drug Safety. Selling to anyone who intends to resell is prohibited. The only exception is bread, confectionery and rice cakes sold on the day they are made to restaurants, contract caterers or institutional food service facilities, and the transaction records must be kept for 6 months.</p>
<p>A <strong>specialized distribution and sales business</strong> does not manufacture itself; it sells under its own brand food made on commission by a food manufacturing and processing business. If it sells by mail order and buyers do not visit the office, a residential building or a startup incubation center may be used as the office, and the storage warehouse may be located elsewhere or leased.</p>

<h2>Mail-order business report and the exemption threshold</h2>
<p>A mail-order business reports its trade name (for a corporation, including the representative's name), address, phone number, email address, internet domain name and hosting server location. The office checks the corporate register and the business registration certificate through shared administrative information. For prepaid sales, where the consumer pays first, you also submit a document proving the use of escrow or a consumer damage compensation insurance contract. For the paperwork, see our <a href="/en/blog/online-shop-communication-sales-registration-guide">mail-order business report guide</a>.</p>
<p>Under the Fair Trade Commission notice, you may skip the report if you had fewer than 50 mail-order transactions in the previous year or you are a simplified VAT taxpayer; transactions cancelled by withdrawal of the order are not counted. The Food Sanitation Act filing is still required regardless of sales volume. Changes to reported details and suspension, closure or resumption of business must also be reported.</p>
<p>Before you start selling, check in this order:</p>
<ol>
<li>Decide the business type based on whom you sell to and where you make the food.</li>
<li>Confirm that the business type and address on your certificate match your actual workshop.</li>
<li>For a food manufacturing and processing business, finish the product manufacturing report for each product you will sell.</li>
<li>For an instant sale manufacturing and processing business, confirm that courier delivery meets the official standards.</li>
<li>Check whether the mail-order report applies and, for prepaid sales, prepare the purchase-safety document.</li>
</ol>
<p>For support with registration, see our <a href="/en/services/food-manufacturing">food manufacturing business registration service</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. I registered a food manufacturing business. Do I still need the mail-order report?</p><p class="faq-a">A. Yes. They are separate procedures, so unless you are exempt you must file it as well.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can an instant sale manufacturing and processing business ship by courier?</p><p class="faq-a">A. Yes, when delivering to end consumers in line with the standards set by the Minister of Food and Drug Safety. Passing products to another seller for resale is not allowed.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is the food manufacturing business a permit business?</p><p class="faq-a">A. No. It is registered with the city, county or district office.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can I skip the mail-order report if my sales are small?</p><p class="faq-a">A. If you had fewer than 50 transactions in the previous year or you are a simplified VAT taxpayer, you may skip it. The Food Sanitation Act filing is required either way.</p></div>
</div>

<div class="cta-block">
 <h3>Planning to sell food you make online?</h3>
 <p>YouSun Administrative Agency reviews your sales structure and workshop and confirms the right business type and whether you need the mail-order report. We can also handle the <a href="/en/services/mail-order-sales-report">mail-order business report</a>. Phone 02-363-2251, weekdays 09:30~17:30 KST.</p>
 <a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=food-manufacturing-online-sales-report">Request a consultation</a>
</div>

<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },
  zh: {
    title: "食品制造加工业 通信销售业申报——网上销售自制食品需要办理什么",
    category: "食品",
    metaTitle: "食品制造加工业与通信销售业申报——网上销售自制食品",
    metaDescription: "在韩国网上销售自制食品，需要《食品卫生法》上的营业登记或申报，以及电子商务法上的通信销售业申报。本文按销售结构比较营业类型，并说明通信销售业申报的免除标准。",
    excerpt: "在韩国网上销售自己制作的食品，需要分别办理《食品卫生法》上的营业登记或申报和通信销售业申报。本文按销售结构比较适用的营业类型，并说明申报免除标准。",
    content: `<div class="toc"><p>目录</p><ol><li>网上销售需要两项手续</li><li>按制作方式区分的《食品卫生法》营业类型</li><li>通信销售业申报与免除标准</li><li>常见问题</li></ol></div>
<p><strong>在韩国把自己制作的食品放到网上销售，需要同时具备《食品卫生法》规定的营业登记或申报，以及《电子商务等消费者保护法》（以下简称电子商务法）规定的通信销售业申报。</strong>即使持有食品制造加工业登记证，通信销售业申报也不会自动完成；反过来，仅凭通信销售业申报也不能制作并销售食品。</p>

<h2>网上销售需要两项手续</h2>
<p>两项手续所依据的法律不同，申报内容不同，证书也分别发放。食品营业的办理流程和设施标准请参阅<a href="/zh/blog/food-manufacturing-license-guide">食品制造加工业办理指南</a>。</p>
<table><thead><tr><th>项目</th><th>食品卫生法</th><th>电子商务法</th></tr></thead><tbody>
<tr><td>规范对象</td><td>制造、加工、分装、销售食品的营业</td><td>自营网店、入驻开放市场等通信销售方式</td></tr>
<tr><td>手续</td><td>按营业类型办理登记或申报</td><td>通信销售业申报（符合免除标准时可不申报）</td></tr>
<tr><td>受理机关</td><td>营业场所所在地的市、郡、区厅（酒类制造为食品医药品安全处）</td><td>主要事务所所在地的市、郡、区厅（主要事务所在国外时为公平交易委员会）</td></tr>
</tbody></table>

<h2>按制作方式区分的《食品卫生法》营业类型</h2>
<p>在哪里制作、卖给谁，决定了营业类型。食品制造加工业办理的是<strong>登记</strong>，不是许可；即时销售制造加工业、流通专门销售业和食品分装业办理的是<strong>申报</strong>。</p>
<table><thead><tr><th>销售结构</th><th>营业类型</th><th>手续</th></tr></thead><tbody>
<tr><td>在自己的作业场制作，网上零售及批发</td><td>食品制造加工业</td><td>登记＋每种产品的品目制造报告</td></tr>
<tr><td>在店内制作，直接或快递卖给最终消费者</td><td>即时销售制造加工业</td><td>申报</td></tr>
<tr><td>委托制造企业生产，以自有商标销售</td><td>流通专门销售业</td><td>申报</td></tr>
<tr><td>把成品分装后重新包装销售</td><td>食品分装业</td><td>申报</td></tr>
</tbody></table>
<p><strong>食品制造加工业</strong>在定义上不限制销售对象，可以同时做网上零售和供货。但每生产一种产品都要提交品目制造报告，时间为开始生产前或开始生产后7日以内；委托生产时由委托方报告。部分品目属于HACCP（食品安全管理认证标准）强制适用对象，也需要一并确认。</p>
<p><strong>即时销售制造加工业</strong>是在制造加工场所直接卖给最终消费者的营业。原则上不得在营业场所以外销售，但由经营者或员工直接送给最终消费者，或按照食品医药品安全处长公告的标准以邮寄、快递方式送给最终消费者的，属于例外。不得卖给以流通、销售为目的的人；只有面包类、饼干类、年糕类在制作当天卖给餐饮店、委托供餐经营者或集体供餐场所时例外，相关交易凭证须保存6个月。如果打算向其他卖家供货，应考虑食品制造加工业。</p>
<p><strong>流通专门销售业</strong>不自行制造，而是委托食品制造加工业者生产，再以自有商标销售。以通信销售形式经营且买家不到访事务所时，可以把住宅用途建筑物或创业孵化中心作为事务所；仓库可以设在营业场所以外的地方，也可以租用。</p>

<h2>通信销售业申报与免除标准</h2>
<p>通信销售业者需申报商号（法人须包括代表人姓名）、地址、电话、电子邮箱、网站域名和主机服务器所在地等。法人登记事项证明和营业执照证明由机关通过行政信息共享查询。采用消费者先付款的预付式销售时，还要一并提交使用资金托管或签订消费者损害赔偿保险合同等的证明文件。材料准备请参阅<a href="/zh/blog/online-shop-communication-sales-registration-guide">通信销售业申报指南</a>。</p>
<p>根据公平交易委员会公告，上一年度通信销售交易次数不足50次，或属于增值税简易纳税人的，可以不申报；因撤回订购等取消的交易不计入次数。该免除只适用于通信销售业申报，《食品卫生法》上的登记或申报与销售量无关，仍然必须办理。申报事项变更以及停业、歇业、恢复营业时也要申报。</p>
<p>开始销售前，建议按以下顺序确认：</p>
<ol>
<li>根据销售对象和制作地点确定营业类型。</li>
<li>确认登记证或申报证上的营业类型和地址与实际作业场一致。</li>
<li>如为食品制造加工业，完成每种待售产品的品目制造报告。</li>
<li>如为即时销售制造加工业，确认快递配送符合公告标准。</li>
<li>判断是否需要通信销售业申报，预付式销售还要准备购买安全证明文件。</li>
</ol>
<p>如需办理登记，请参阅<a href="/zh/services/food-manufacturing">食品制造加工业登记服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 已经办理食品制造加工业登记，还需要通信销售业申报吗？</p><p class="faq-a">A. 需要。两者是依据不同法律的独立手续，不符合免除标准时必须另行申报。</p></div>
<div class="faq-item"><p class="faq-q">Q. 即时销售制造加工业可以快递销售吗？</p><p class="faq-a">A. 按照食品医药品安全处长公告的标准配送给最终消费者的，可以。交给其他卖家转售的结构不被允许。</p></div>
<div class="faq-item"><p class="faq-q">Q. 食品制造加工业属于许可类营业吗？</p><p class="faq-a">A. 不是。它是在市、郡、区厅办理的登记类营业；即时销售制造加工业和流通专门销售业属于申报类营业。</p></div>
<div class="faq-item"><p class="faq-q">Q. 销量很少，可以不做通信销售业申报吗？</p><p class="faq-a">A. 上一年度交易次数不足50次或属于简易纳税人的，可以不申报。但《食品卫生法》上的登记或申报仍然需要。</p></div>
</div>

<div class="cta-block">
 <h3>打算在网上销售自制食品？</h3>
 <p>유선행정사사무소会根据您的销售结构和作业场情况，先确认合适的营业类型以及是否需要通信销售业申报，也可以协助办理<a href="/zh/services/mail-order-sales-report">通信销售业申报</a>。电话 02-363-2251，工作日 09:30~17:30 KST。</p>
 <a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=food-manufacturing-online-sales-report">申请咨询</a>
</div>

<p class="author-block">유선행정사사무소（代表行政士 정유선）</p>`,
  },
  ja: {
    title: "食品製造加工業の通信販売業申告——自分で作った食品をオンラインで売るときに必要な手続き",
    category: "食品",
    metaTitle: "食品製造加工業と通信販売業申告——手作り食品のオンライン販売",
    metaDescription: "韓国で自分で作った食品をオンライン販売するには、食品衛生法上の営業登録または届出と、電子商取引法上の通信販売業申告が必要です。販売の形ごとに営業形態と免除基準を比較します。",
    excerpt: "韓国で手作りの食品をオンラインで売るには、食品衛生法上の営業登録または届出と通信販売業申告をそれぞれ備える必要があります。販売の形ごとに合う営業形態と申告の免除基準を比較します。",
    content: `<div class="toc"><p>目次</p><ol><li>オンライン販売には手続きが二つ必要です</li><li>作り方で決まる食品衛生法上の営業形態</li><li>通信販売業申告と免除基準</li><li>よくある質問</li></ol></div>
<p><strong>韓国で自分で作った食品をオンラインで販売するには、「食品衛生法」による営業の登録または届出と、「電子商取引等における消費者保護に関する法律」（以下、電子商取引法）による通信販売業申告の両方が必要です。</strong>食品製造・加工業の登録証があっても通信販売業申告が自動的に済むわけではなく、通信販売業申告だけで食品を製造して販売することもできません。</p>

<h2>オンライン販売には手続きが二つ必要です</h2>
<p>二つの手続きは根拠となる法律も申告内容も異なり、証明書も別々に交付されます。食品営業の手続きと施設基準の全体は<a href="/ja/blog/food-manufacturing-license-guide">食品製造加工業の申請ガイド</a>をご覧ください。</p>
<table><thead><tr><th>区分</th><th>食品衛生法</th><th>電子商取引法</th></tr></thead><tbody>
<tr><td>対象</td><td>食品を製造・加工・小分け・販売する営業</td><td>自社ショッピングモールやオープンマーケット出店などの通信販売</td></tr>
<tr><td>手続き</td><td>営業の種類に応じて登録または届出</td><td>通信販売業申告（免除基準に該当すれば不要）</td></tr>
<tr><td>窓口</td><td>営業所所在地の市・郡・区庁（酒類の製造は食品医薬品安全処）</td><td>主たる事務所所在地の市・郡・区庁（主たる事務所が外国にある場合は公正取引委員会）</td></tr>
</tbody></table>

<h2>作り方で決まる食品衛生法上の営業形態</h2>
<p>どこで作り、誰に売るかによって営業の種類が分かれます。食品製造・加工業は許可ではなく<strong>登録</strong>の対象で、即席販売製造・加工業、流通専門販売業、食品小分け業は<strong>届出</strong>の対象です。</p>
<table><thead><tr><th>販売の形</th><th>営業の種類</th><th>手続き</th></tr></thead><tbody>
<tr><td>自分の作業場で作り、オンライン販売・卸売をする</td><td>食品製造・加工業</td><td>登録＋製品ごとの品目製造報告</td></tr>
<tr><td>店舗で作り、最終消費者に直接または宅配で販売する</td><td>即席販売製造・加工業</td><td>届出</td></tr>
<tr><td>製造業者に委託し、自社ブランドで販売する</td><td>流通専門販売業</td><td>届出</td></tr>
<tr><td>完成品を小分けして再包装し販売する</td><td>食品小分け業</td><td>届出</td></tr>
</tbody></table>
<p><strong>食品製造・加工業</strong>は定義上、販売の相手方に制限がないため、オンラインでの小売と他社への納品を同時に行えます。その代わり、製品を作るたびに品目製造報告が必要で、報告書は製品の生産開始前か開始後7日以内に提出します。委託製造の場合は委託した側が報告します。一部の品目はHACCP（食品安全管理認証基準）の義務適用対象なので、あわせて確認が必要です。</p>
<p><strong>即席販売製造・加工業</strong>は、製造・加工した場所で最終消費者に直接販売する営業です。営業場以外での販売はできませんが、営業者や従業員が最終消費者に直接配達する場合と、食品医薬品安全処長が告示する基準に従って郵便・宅配で最終消費者に配達する場合は例外です。流通・販売を目的とする者への販売は禁止され、パン類・菓子類・餅類を飲食店・委託給食営業者・集団給食所に製造当日に販売する場合だけが例外で、その取引の証明書類は6か月間保管します。他の販売者に商品を卸す予定であれば、食品製造・加工業を検討すべきです。</p>
<p><strong>流通専門販売業</strong>は自ら製造せず、食品製造・加工業者に依頼して作った食品を自社の商標で販売する営業です。通信販売の形態で購入者が事務所を訪れない場合は、住宅用途の建築物や創業保育センターを事務所として使え、保管倉庫は営業所と別の場所に設けたり賃借したりできます。</p>

<h2>通信販売業申告と免除基準</h2>
<p>通信販売業者は、商号（法人は代表者の氏名を含む）、住所、電話番号、電子メールアドレス、インターネットのドメイン名、ホストサーバーの所在地などを申告します。法人の登記事項証明書と事業者登録証明は、窓口が行政情報の共同利用で確認します。消費者が先に代金を支払う前払い式の販売では、エスクローの利用や消費者被害補償保険契約などを証明する書類もあわせて提出します。書類の準備は<a href="/ja/blog/online-shop-communication-sales-registration-guide">通信販売業申告ガイド</a>をご参照ください。</p>
<p>公正取引委員会の告示により、前年度の通信販売の取引回数が50回未満か、付加価値税法上の簡易課税者であれば申告しないことができます。申込みの撤回などで取り消された取引は回数に含めません。この免除は通信販売業申告にだけ適用され、食品衛生法上の登録や届出は販売量に関係なく必要です。申告事項の変更や、休業・廃業・営業再開の際も申告します。</p>
<p>販売を始める前は、次の順序で確認すると安心です。</p>
<ol>
<li>販売の相手方と製造場所をもとに営業の種類を決めます。</li>
<li>登録証・届出証の営業の種類と所在地が実際の作業場と一致しているか確認します。</li>
<li>食品製造・加工業であれば、販売する製品ごとに品目製造報告を済ませます。</li>
<li>即席販売製造・加工業であれば、宅配での配達が告示の基準に合っているか確認します。</li>
<li>通信販売業申告の対象かを判断し、前払い式なら購入安全サービスの書類を準備します。</li>
</ol>
<p>登録のサポートについては<a href="/ja/services/food-manufacturing">食品製造加工業登録サービス</a>をご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 食品製造加工業の登録をしていれば、通信販売業申告は不要ですか。</p><p class="faq-a">A. いいえ。二つは法律の異なる別々の手続きなので、免除基準に該当しなければ通信販売業申告も別に必要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 即席販売製造加工業でも宅配で販売できますか。</p><p class="faq-a">A. 食品医薬品安全処長の告示基準に従って最終消費者に配達する場合は可能です。他の販売者に渡して転売させる形は認められません。</p></div>
<div class="faq-item"><p class="faq-q">Q. 食品製造加工業は許可が必要な業種ですか。</p><p class="faq-a">A. いいえ。食品製造・加工業は市・郡・区庁への登録業種で、即席販売製造・加工業と流通専門販売業は届出業種です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 販売量が少なければ通信販売業申告を省略できますか。</p><p class="faq-a">A. 前年度の取引回数が50回未満か簡易課税者であれば、申告しないことができます。ただし食品衛生法上の登録や届出はそれとは関係なく必要です。</p></div>
</div>

<div class="cta-block">
 <h3>手作りの食品をオンラインで売る予定なら</h3>
 <p>YouSun Administrative Agencyが販売の形と作業場の状況を確認し、適切な営業形態と通信販売業申告の要否をまずご案内します。<a href="/ja/services/mail-order-sales-report">通信販売業申告</a>もあわせてお手伝いできます。電話 02-363-2251、平日 09:30~17:30 KST。</p>
 <a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=food-manufacturing-online-sales-report">相談を申し込む</a>
</div>

<p class="author-block">YouSun Administrative Agency（代表行政士 チョン・ユソン）</p>`,
  },
}

// 이 주제에서 틀리기 쉬운 인허가 구분 오기(4언어) — 식품제조·가공업은 '등록', 즉석판매제조·가공업·유통전문판매업·통신판매업은 '신고'
entry.wrongTerms = ["식품제조가공업 허가", "식품제조·가공업 허가", "식품제조가공업허가", "식품제조업 영업허가", "식품제조가공업 영업허가", "즉석판매제조가공업 허가", "통신판매업 허가", "food manufacturing permit", "manufacturing and processing permit", "food manufacturing license", "mail-order business permit", "食品制造加工业许可", "食品制造加工业营业许可", "通信销售业许可", "食品製造加工業許可", "食品製造・加工業の許可", "通信販売業許可"]

export default entry
