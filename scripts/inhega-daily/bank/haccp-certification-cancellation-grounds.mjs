// 원고 은행 보충 — BANK-REFILL-1029 (2026-10-29, 맥4 하위 작성) — 초안. bank/ 에 넣기 전 맥4 검수·사진(pexelsId) 필요.
// 주제: haccp(HACCP 인증) / 세부주제: penalties(위반 시 제재 — 인증취소·시정명령)
//
// 겹침 검사(blog-posts-data.ts·blog-i18n.ts·bank/):
//   haccp-certification-guide(최초 인증 절차) / haccp-post-certification-management-guide(정기 평가·연장·CCP 기록, 취소는 한두 문장)
//   haccp-mandatory-industries(의무 적용 업종) / haccp-select(대행 선택) / haccp-certification-change-application(변경 인증, bank·live)
//   → 이 글은 "어떤 위반이 시정명령이고 어떤 위반이 곧바로 인증취소인가": 법률상 취소 사유 5가지, 시행규칙 처분기준표(위반 유형별
//     인증취소/시정명령), 조사·평가 점수 구간(60%·85%), 반드시 취소되는 2가지, 시정명령 불이행 시 취소, 청문, 취소 뒤 명칭 사용 금지·
//     의무 적용 업소의 영업정지 기준만 다룬다. 변경 인증 절차·연장 신청은 링크로 넘긴다. 축산물 HACCP 은 별개 법률이라고 한 문장만.
//
// 법령 대조(law.go.kr DRF, OC=visionlaw, 2026-10-29 조회 — ~/work/bank-refill-1029/lawfetch.py):
//   식품위생법            MST 285339, 2026. 10. 8. 시행
//     제48조 제2항(의무 적용)·제3항·제5항(교육훈련)·제8항 각 호·단서(취소/시정, 필요적 취소)·제9항(명칭 사용 금지)·제10항(위탁 제조 금지·단서)
//     제48조의3 제1항(연 1회 이상 조사·평가), 제75조 제1항 제15호, 제81조 제2호(인증취소 청문), 제101조 제2항 제6호(명칭 사용 과태료 — 금액 미기재)
//   식품위생법 시행령      MST 288767, 2026. 8. 18. 시행 — 제33조 제1항 제1호(같은 식품 인증업소 위탁 허용), 제65조 제8호(조사·평가·인증취소·시정명령 지방식약청장 위임)
//   식품위생법 시행규칙    MST 289161, 2026. 9. 1. 시행 — 제63조 제4항(변경신청), 제64조 제1항 제2호(정기교육 매년 1회), 제66조 제2항,
//                          제67조 제1항 제1호·제2호·제2항, 별표 20(인증취소 등의 기준 제1호 가목~아목, 제2호~제8호),
//                          별표 23 Ⅱ. 개별기준 1. 식품제조·가공업 등 제13호(법 제48조 제2항 위반 1차 영업정지 7일·2차 15일·3차 1개월)
//   축산물 위생관리법      MST 285351, 2026. 10. 8. 시행 — 제9조, 제9조의4(축산물 쪽 인증취소는 별도 규정 — 구분만)
// 인허가 구분: HACCP = 식품의약품안전처장의 '인증'(식품위생법 제48조 제3항). 영업 허가·등록·신고와 별개. 처분은 '인증취소' 또는 '시정명령'.
//   (영업정지·영업허가 취소는 영업 쪽 처분 — 혼동 금지)
// 조정·확인 못 한 점:
//   - 위탁 제조 예외: 시행령 제33조 제1항은 같은 식품(제1호) 외에 같은 제조 공정·중요관리점(제2호) 인증업소 위탁도 허용 → 화면은 '처럼'으로 대표 예만.
//   - 조사·평가 주기: 법률 제48조의3 제1항은 '연 1회 이상 … 하여야 한다', 시행규칙 제66조 제1항은 '매년 1회 이상 … 할 수 있다' → 법률 문언 채택.
//   - 별표 20 제5호는 '변경신고', 시행규칙 제67조 제1항 제2호는 '변경신청' → 화면은 '변경신청(변경 인증)'.
//   - 인증취소 후 재인증 신청 제한 기간: 법률·시행령·시행규칙에서 찾지 못함(고시 미대조) → 쓰지 않음.
//   - 명칭 사용 과태료·과징금 금액: 형식 규칙상 쓰지 않음. 행정절차법상 사전통지 절차는 대조하지 않아 '청문'만 서술.
//   - 별표 23 의 영업정지 기준은 'Ⅱ.1 식품제조·가공업 등' 표에만 해당 행이 있어 그 업종으로 한정해 서술.
// 대조표: crosscheck/haccp-certification-cancellation-grounds.md

const SLUG = 'haccp-certification-cancellation-grounds'

export default {
  topic: 'haccp',
  angle: 'penalties',
  slug: SLUG,
  kind: 'seo3958',
  keyword: 'HACCP 인증취소',
  wrongTerms: [
    'HACCP 허가', 'HACCP 허가취소', 'HACCP 등록취소', 'HACCP 지정취소', 'HACCP 영업허가',
    'HACCP permit', 'HACCP license revocation', 'HACCP licence',
    'HACCP许可', 'HACCP吊销许可', 'HACCP許可', 'HACCP許可取消',
  ],
  pexelsId: 29652193,
  coverImage: '',
  relatedServices: [
    { title: 'HACCP 인증', href: '/services/haccp' },
  ],

  ko: {
    title: 'HACCP 인증취소 — 시정명령으로 끝나는 위반과 곧바로 취소되는 위반',
    category: '식품',
    metaTitle: 'HACCP 인증취소 사유 — 시정명령과의 차이·조사평가 점수 기준',
    metaDescription: 'HACCP 인증은 조사·평가 결과에 따라 취소되거나 시정명령을 받습니다. 거짓 인증과 영업정지 2개월 이상은 반드시 취소되고, 평가 점수 60% 미만도 취소 대상입니다.',
    excerpt: 'HACCP 적용업소가 기준을 지키지 않으면 인증취소나 시정명령을 받습니다. 위반 유형별로 어느 쪽인지, 조사·평가 점수 구간, 반드시 취소되는 두 경우, 취소 뒤 달라지는 점을 설명합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>인증취소와 시정명령의 법적 사유</li><li>위반 유형별 처분기준</li><li>처분 전후에 할 일</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>HACCP(식품안전관리인증기준) 인증은 조사·평가 결과 기준을 지키지 않은 업소에 대해 취소하거나 시정을 명할 수 있고, 거짓이나 부정한 방법으로 인증을 받았거나 영업정지 2개월 이상의 처분을 받은 경우에는 반드시 취소됩니다.</strong><!-- 근거: 식품위생법 제48조 제8항 각 호·단서 --> 인증취소는 영업 허가·등록과는 별개인 '인증'에 대한 처분입니다. 다만 인증이 취소되면 인증 업소라는 명칭을 더 쓸 수 없고, 의무 적용 업소는 기준 준수 의무가 그대로 남습니다.<!-- 근거: 식품위생법 제48조 제2항·제9항 --></p>
<p>처음 인증을 받는 절차는 <a href="/blog/haccp-certification-guide">HACCP 인증 가이드</a>, 소재지·중요관리점을 바꿀 때의 절차는 <a href="/blog/haccp-certification-change-application">HACCP 인증 변경 신청</a>, 의무 적용 대상은 <a href="/blog/haccp-mandatory-industries">HACCP 의무 적용 업종</a>에서 확인할 수 있습니다.</p>

<h2>인증취소와 시정명령의 법적 사유</h2>
<p>「식품위생법」은 식품의약품안전처장이 HACCP 적용업소의 기준 준수 여부와 교육훈련 수료 여부를 연 1회 이상 조사·평가하도록 하고, 이 조사·평가와 인증취소·시정명령 권한은 지방식품의약품안전청장에게 위임되어 있습니다.<!-- 근거: 식품위생법 제48조의3 제1항, 제48조 제8항, 같은 법 시행령 제65조 제8호 --> 처분 사유는 다음 다섯 가지입니다.</p>
<ul>
<li>식품안전관리인증기준을 지키지 않은 경우</li>
<li>거짓이나 그 밖의 부정한 방법으로 인증을 받은 경우(반드시 취소)</li>
<li>영업정지 2개월 이상의 행정처분을 받은 경우(반드시 취소)<!-- 근거: 식품위생법 제48조 제8항 제1호의2·제2호·단서 --></li>
<li>영업자와 종업원이 정해진 교육훈련을 받지 않은 경우</li>
<li>인증받은 식품을 다른 업소에 위탁해 제조·가공하거나, 소재지·중요관리점 변경신청을 하지 않은 경우<!-- 근거: 식품위생법 제48조 제8항 제1호·제3호·제4호, 같은 법 시행규칙 제67조 제1항 --></li>
</ul>
<p>위탁 제조는 같은 식품으로 인증받은 다른 업소에 맡기는 경우처럼 예외가 있습니다.<!-- 근거: 식품위생법 제48조 제10항 단서, 같은 법 시행령 제33조 제1항 제1호 --> 축산물 가공장 등의 안전관리인증은 「축산물 위생관리법」에 별도의 취소 규정이 있어 여기서 다루는 기준과 다릅니다.</p>

<h2>위반 유형별 처분기준</h2>
<p>시행규칙의 처분기준은 위반 내용에 따라 인증취소와 시정명령을 나눕니다.<!-- 근거: 식품위생법 시행규칙 제67조 제2항 --></p>
<table><thead><tr><th>위반 내용</th><th>처분</th></tr></thead><tbody>
<tr><td>원·부재료 검사성적서를 받지 않고 자체검사도 하지 않음</td><td>인증취소</td></tr>
<tr><td>작업장 세척·소독과 종사자 위생관리를 모두 하지 않음</td><td>인증취소</td></tr>
<tr><td>중요관리점 모니터링을 하지 않거나 한계기준 위반에도 개선조치를 하지 않음</td><td>인증취소</td></tr>
<tr><td>신규 제품·추가 공정의 위해요소분석을 전혀 하지 않음</td><td>인증취소</td></tr>
<tr><td>기준서에 정한 제조·가공 방법대로 만들지 않음</td><td>시정명령</td></tr>
<tr><td>조사·평가 부적합, 선행요건 또는 HACCP 관리분야 60% 미만<!-- 근거: 식품위생법 시행규칙 별표 20 제1호 사목 --></td><td>인증취소</td></tr>
<tr><td>조사·평가 부적합, 60% 이상 85% 미만<!-- 근거: 식품위생법 시행규칙 별표 20 제1호 아목 --></td><td>시정명령</td></tr>
<tr><td>교육훈련 미이수, 변경신청 누락</td><td>시정명령</td></tr>
<tr><td>인증 식품을 다른 업소에 위탁 제조</td><td>인증취소</td></tr>
<tr><td>영업정지 2개월 이상 또는 이를 갈음한 과징금<!-- 근거: 식품위생법 시행규칙 별표 20 제2호 --></td><td>인증취소</td></tr>
</tbody></table>
<p>시정명령으로 끝나는 위반도 그대로 두면 취소로 이어집니다. 제조·가공 방법, 교육훈련, 변경신청 위반으로 2회 이상 시정명령을 받고도 이행하지 않거나, 점수 구간에 따른 시정명령을 이행하지 않으면 인증취소입니다.<!-- 근거: 식품위생법 시행규칙 별표 20 제6호·제7호 --> 종업원 정기교육은 인증받은 연도를 빼고 매년 1회 이상이므로 이수 기록을 함께 관리해야 합니다.<!-- 근거: 식품위생법 시행규칙 제64조 제1항 제2호 --></p>

<h2>처분 전후에 할 일</h2>
<p>인증을 취소하려면 청문을 거쳐야 하므로, 통지를 받으면 의견을 낼 기회가 있습니다.<!-- 근거: 식품위생법 제81조 제2호 --> 다음 순서로 대응합니다.</p>
<ol>
<li>통지서에 적힌 위반 항목이 처분기준표에서 시정명령 대상인지 인증취소 대상인지 확인합니다.</li>
<li>중요관리점 모니터링 일지, 개선조치 기록, 교육 이수 기록처럼 사실관계를 보여 줄 자료를 모읍니다.</li>
<li>시정명령이면 정해진 기한 안에 이행하고 결과를 남깁니다. 미이행이 반복되면 취소 사유가 됩니다.<!-- 근거: 식품위생법 시행규칙 별표 20 제6호 --></li>
<li>청문에서 사실관계와 이미 마친 개선 내용을 설명합니다.</li>
<li>취소되면 포장·광고에서 HACCP 적용업소 명칭을 즉시 내립니다. 계속 쓰면 과태료 대상입니다.<!-- 근거: 식품위생법 제48조 제9항, 제101조 제2항 제6호 --></li>
</ol>
<p>의무 적용 업소는 인증이 취소돼도 기준을 지킬 의무가 남습니다. 식품제조·가공업 등이 이를 어기면 1차 영업정지 7일, 2차 15일, 3차 1개월의 영업 처분 기준이 따로 있습니다.<!-- 근거: 식품위생법 제48조 제2항, 제75조 제1항 제15호, 같은 법 시행규칙 별표 23 Ⅱ.1 제13호 --> 재인증 준비와 서류 정리는 <a href="/services/haccp">HACCP 인증 서비스</a>에서 안내합니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 조사·평가에서 부적합이 나오면 바로 취소되나요?</p><p class="faq-a">A. 점수에 따라 다릅니다. 선행요건이나 HACCP 관리분야가 60% 미만이면 인증취소, 60% 이상 85% 미만이면 시정명령이고, 그 시정명령을 이행하지 않으면 취소됩니다.<!-- 근거: 식품위생법 시행규칙 별표 20 제1호 사목·아목, 제7호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 영업정지 처분을 받으면 HACCP 인증도 잃나요?</p><p class="faq-a">A. 영업정지 2개월 이상이거나 이를 갈음한 과징금 처분이면 인증을 반드시 취소합니다. 그보다 짧은 정지는 이 사유에 해당하지 않습니다.<!-- 근거: 식품위생법 제48조 제8항 제2호·단서, 같은 법 시행규칙 별표 20 제2호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 종업원이 정기교육을 빠뜨리면 어떻게 되나요?</p><p class="faq-a">A. 교육훈련 미이수는 시정명령 대상입니다. 2회 이상 시정명령을 받고도 이행하지 않으면 인증취소 사유가 됩니다.<!-- 근거: 식품위생법 시행규칙 별표 20 제3호·제6호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 인증이 취소된 뒤 남은 포장재의 HACCP 표시는 써도 되나요?</p><p class="faq-a">A. 인증 업소가 아닌 영업자는 그 명칭을 쓸 수 없고, 어기면 과태료 대상입니다. 표시가 남은 포장재와 광고물은 사용을 멈춰야 합니다.<!-- 근거: 식품위생법 제48조 제9항, 제101조 제2항 제6호 --></p></div>
</div>

<div class="cta-block"><h3>HACCP 처분 대응 상담</h3><p>처분 통지 내용 검토, 시정 결과 정리, 재인증 서류 준비는 유선행정사사무소에 문의해 주십시오. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 식품위생법, 같은 법 시행령, 같은 법 시행규칙 --></p>`,
  },
  en: {
    title: 'HACCP Certification Cancellation in Korea — Corrective Orders vs. Immediate Cancellation',
    category: 'Food',
    metaTitle: 'HACCP Certification Cancellation in Korea — Grounds and Score Rules',
    metaDescription: 'Korean HACCP certification can be cancelled or met with a corrective order. Fraud or a business suspension of 2 months or more means mandatory cancellation.',
    excerpt: 'When a HACCP-certified site in Korea breaks the standards, it faces either a corrective order or cancellation. Which violations lead where, the inspection score bands, the two mandatory cancellation cases and what changes afterwards.',
    content: `<div class="toc"><p>Contents</p><ol><li>Legal grounds for cancellation and corrective orders</li><li>Sanction standards by violation</li><li>What to do before and after a sanction</li><li>FAQ</li></ol></div>
<p><strong>Under the Food Sanitation Act, HACCP (Hazard Analysis and Critical Control Point) certification can be cancelled, or a corrective order issued, when an inspection shows the site is not following the standards. Cancellation is mandatory if the certification was obtained by fraud or if the business received a suspension of 2 months or more.</strong> HACCP is a certification, separate from the business license or registration. Once it is cancelled, the site may no longer call itself a HACCP-certified site, and businesses for which HACCP is mandatory still have to follow the standards.</p>
<p>For the first application, see <a href="/en/blog/haccp-certification-guide">our HACCP certification guide</a>. For relocation or changes to critical control points, see <a href="/en/blog/haccp-certification-change-application">HACCP certification change applications</a>.</p>

<h2>Legal grounds for cancellation and corrective orders</h2>
<p>The Minister of Food and Drug Safety must inspect and evaluate each certified site at least 1 time a year for compliance and training, and this power, together with cancellation and corrective orders, is delegated to the regional food and drug safety offices. The grounds are:</p>
<ul>
<li>Not following the HACCP standards</li>
<li>Obtaining certification by fraud or other improper means (mandatory cancellation)</li>
<li>Receiving a business suspension of 2 months or more (mandatory cancellation)</li>
<li>The operator or employees not completing the required training</li>
<li>Outsourcing production of a certified food to another site, or failing to apply for a change of location or critical control points</li>
</ul>
<p>Outsourcing is allowed in some cases, for example to another site certified for the same food. HACCP for livestock product plants falls under the Livestock Products Sanitary Control Act, which has its own cancellation rules.</p>

<h2>Sanction standards by violation</h2>
<p>The Enforcement Rule divides violations into those leading to cancellation and those leading to a corrective order.</p>
<table><thead><tr><th>Violation</th><th>Sanction</th></tr></thead><tbody>
<tr><td>No supplier test reports for raw materials and no in-house testing</td><td>Cancellation</td></tr>
<tr><td>No cleaning or disinfection of the workplace and no staff hygiene control</td><td>Cancellation</td></tr>
<tr><td>No monitoring of critical control points, or no corrective action after a critical limit is breached</td><td>Cancellation</td></tr>
<tr><td>No hazard analysis at all for a new product or added process</td><td>Cancellation</td></tr>
<tr><td>Not following the production method in the HACCP plan</td><td>Corrective order</td></tr>
<tr><td>Failed inspection with under 60% in prerequisite programs or HACCP management</td><td>Cancellation</td></tr>
<tr><td>Failed inspection with 60% to under 85%</td><td>Corrective order</td></tr>
<tr><td>Training not completed; change application not filed</td><td>Corrective order</td></tr>
<tr><td>Outsourcing a certified food to another site</td><td>Cancellation</td></tr>
<tr><td>Business suspension of 2 months or more, or a penalty surcharge in its place</td><td>Cancellation</td></tr>
</tbody></table>
<p>A corrective order can still end in cancellation. Ignoring 2 or more corrective orders for production method, training or change application violations, or ignoring an order issued for the 60% to 85% score band, leads to cancellation. Regular employee training is required at least 1 time every year except the year of certification, so keep completion records.</p>

<h2>What to do before and after a sanction</h2>
<p>Cancellation requires a hearing, so you have a chance to present your position. Respond in this order:</p>
<ol>
<li>Check whether each violation in the notice is a corrective order item or a cancellation item in the standards table.</li>
<li>Gather records such as critical control point monitoring logs, corrective action records and training records.</li>
<li>If you receive a corrective order, comply within the deadline and keep proof. Repeated non-compliance leads to cancellation.</li>
<li>At the hearing, explain the facts and the improvements already made.</li>
<li>If the certification is cancelled, remove the HACCP name from packaging and advertising at once. Continued use is subject to an administrative fine.</li>
</ol>
<p>Businesses for which HACCP is mandatory must keep following the standards even after cancellation. For food manufacturing and processing businesses, a breach carries a business suspension of 7 days for a first violation, 15 days for a second and 1 month for a third. For help with recertification, see <a href="/en/services/haccp">our HACCP certification service</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Does a failed inspection mean immediate cancellation?</p><p class="faq-a">A. It depends on the score. Under 60% in prerequisite programs or HACCP management means cancellation; 60% to under 85% means a corrective order, and ignoring that order leads to cancellation.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do we also lose HACCP certification after a business suspension?</p><p class="faq-a">A. A suspension of 2 months or more, or a penalty surcharge in its place, means mandatory cancellation. Shorter suspensions do not fall under this ground.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if employees miss regular training?</p><p class="faq-a">A. Missing training leads to a corrective order. Ignoring 2 or more corrective orders becomes a ground for cancellation.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can we use leftover packaging with the HACCP mark after cancellation?</p><p class="faq-a">A. A business that is not certified may not use the name, and doing so is subject to an administrative fine. Stop using such packaging and advertising.</p></div>
</div>

<div class="cta-block"><h3>Talk to us about a HACCP sanction</h3><p>To review a sanction notice, organize corrective action records or prepare recertification documents, contact YouSun Administrative Agency. Phone 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: 'HACCP认证撤销 — 以纠正命令了结的违规与直接撤销的违规',
    category: '食品',
    metaTitle: '韩国HACCP认证撤销事由 — 与纠正命令的区别及评估分数标准',
    metaDescription: '韩国HACCP认证可依调查评估结果被撤销或收到纠正命令。以虚假方式取得认证或受到2个月以上停业处分的，必须撤销认证；评估分数低于60%也属撤销对象。',
    excerpt: 'HACCP适用业所未遵守标准时，将被撤销认证或收到纠正命令。按违规类型区分处分、调查评估分数区间、必须撤销的两种情形，以及撤销后的变化。',
    content: `<div class="toc"><p>目录</p><ol><li>撤销认证与纠正命令的法定事由</li><li>按违规类型的处分标准</li><li>处分前后应做的事</li><li>常见问题</li></ol></div>
<p><strong>根据韩国《食品卫生法》，HACCP（食品安全管理认证标准）适用业所经调查评估未遵守标准的，可被撤销认证或被命令纠正；以虚假或其他不正当方式取得认证，或受到2个月以上停业处分的，必须撤销认证。</strong>HACCP属于“认证”，与营业许可·登记是不同的制度。认证被撤销后不得再使用认证业所名称，属于强制适用对象的营业者仍须遵守标准。</p>
<p>首次认证流程请参阅<a href="/zh/blog/haccp-certification-guide">HACCP认证指南</a>，营业场所迁移或关键控制点变更请参阅<a href="/zh/blog/haccp-certification-change-application">HACCP认证变更申请</a>。</p>

<h2>撤销认证与纠正命令的法定事由</h2>
<p>食品药品安全处长须每年1次以上对认证业所的标准遵守情况和教育培训完成情况进行调查评估，该权限及撤销认证·纠正命令权限已委任给地方食品药品安全厅长。处分事由如下：</p>
<ul>
<li>未遵守食品安全管理认证标准</li>
<li>以虚假或其他不正当方式取得认证（必须撤销）</li>
<li>受到2个月以上停业处分（必须撤销）</li>
<li>营业者及员工未接受规定的教育培训</li>
<li>将认证食品委托其他业所生产加工，或未申请营业场所·关键控制点变更</li>
</ul>
<p>委托生产也有例外，例如委托给就同一食品取得认证的其他业所。畜产品加工场等的安全管理认证另由《畜产品卫生管理法》规定撤销事由，与这里所说的标准不同。</p>

<h2>按违规类型的处分标准</h2>
<p>施行规则的处分标准按违规内容分为撤销认证和纠正命令。</p>
<table><thead><tr><th>违规内容</th><th>处分</th></tr></thead><tbody>
<tr><td>未取得原辅料检验报告，也未进行自检</td><td>撤销认证</td></tr>
<tr><td>未清洗消毒作业场所，也未进行从业人员卫生管理</td><td>撤销认证</td></tr>
<tr><td>未监控关键控制点，或超出关键限值仍未采取改进措施</td><td>撤销认证</td></tr>
<tr><td>对新产品或新增工序完全未进行危害分析</td><td>撤销认证</td></tr>
<tr><td>未按计划书规定的方法生产加工</td><td>纠正命令</td></tr>
<tr><td>调查评估不合格，前提条件或HACCP管理领域低于60%</td><td>撤销认证</td></tr>
<tr><td>调查评估不合格，60%以上未满85%</td><td>纠正命令</td></tr>
<tr><td>未完成教育培训、未申请变更</td><td>纠正命令</td></tr>
<tr><td>将认证食品委托其他业所生产</td><td>撤销认证</td></tr>
<tr><td>停业2个月以上或以课征金代替停业</td><td>撤销认证</td></tr>
</tbody></table>
<p>以纠正命令了结的违规若置之不理，也会导致撤销。因生产方法、教育培训、变更申请违规受到2次以上纠正命令仍未履行，或未履行按分数区间下达的纠正命令的，将撤销认证。员工定期培训除取得认证当年外须每年1次以上，应一并保存完成记录。</p>

<h2>处分前后应做的事</h2>
<p>撤销认证前须经过听证程序，收到通知后有陈述意见的机会。建议按以下顺序应对：</p>
<ol>
<li>确认通知书所列违规项目在处分标准表中属于纠正命令还是撤销认证。</li>
<li>收集关键控制点监控记录、改进措施记录、培训完成记录等证明事实的资料。</li>
<li>收到纠正命令的，在期限内履行并留存结果。反复不履行将构成撤销事由。</li>
<li>在听证中说明事实及已完成的改进内容。</li>
<li>认证被撤销后，立即从包装和广告中撤下HACCP适用业所名称。继续使用将被处以过怠金。</li>
</ol>
<p>强制适用对象即使认证被撤销，仍须遵守标准。食品制造加工业等违反时，另有第1次停业7日、第2次15日、第3次1个月的营业处分标准。重新认证的准备请参阅<a href="/zh/services/haccp">HACCP认证服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 调查评估不合格会立即撤销吗？</p><p class="faq-a">A. 视分数而定。前提条件或HACCP管理领域低于60%的撤销认证，60%以上未满85%的为纠正命令，未履行该命令的将被撤销。</p></div>
<div class="faq-item"><p class="faq-q">Q. 受到停业处分，HACCP认证也会失去吗？</p><p class="faq-a">A. 停业2个月以上或以课征金代替停业的，必须撤销认证。更短的停业不属于此事由。</p></div>
<div class="faq-item"><p class="faq-q">Q. 员工漏掉定期培训会怎样？</p><p class="faq-a">A. 未完成培训属于纠正命令对象。受到2次以上纠正命令仍未履行的，构成撤销事由。</p></div>
<div class="faq-item"><p class="faq-q">Q. 认证撤销后，剩余包装上的HACCP标识还能用吗？</p><p class="faq-a">A. 非认证业所的营业者不得使用该名称，违者将被处以过怠金。应停止使用带有该标识的包装和广告物。</p></div>
</div>

<div class="cta-block"><h3>HACCP处分应对咨询</h3><p>处分通知审查、纠正结果整理、重新认证材料准备，请联系YouSun Administrative Agency（代表行政士 Jung Yu-sun）。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: 'HACCP認証取消 — 是正命令で済む違反と直ちに取り消される違反',
    category: '食品',
    metaTitle: '韓国のHACCP認証取消事由 — 是正命令との違いと評価点数の基準',
    metaDescription: '韓国のHACCP認証は調査・評価の結果により取消または是正命令を受けます。虚偽の認証と2か月以上の営業停止は必ず取消となり、評価点数60%未満も取消の対象です。',
    excerpt: 'HACCP適用業所が基準を守らない場合、認証取消か是正命令を受けます。違反の種類ごとの処分、調査・評価の点数区分、必ず取り消される二つの場合、取消後に変わる点を説明します。',
    content: `<div class="toc"><p>目次</p><ol><li>認証取消と是正命令の法的事由</li><li>違反の種類別の処分基準</li><li>処分の前後にすべきこと</li><li>よくある質問</li></ol></div>
<p><strong>韓国の「食品衛生法」により、HACCP（食品安全管理認証基準）適用業所が調査・評価で基準を守っていないと判断されると、認証の取消または是正命令を受けることがあります。虚偽その他不正な方法で認証を受けた場合と、2か月以上の営業停止処分を受けた場合は、必ず認証が取り消されます。</strong>HACCPは営業許可・登録とは別の「認証」です。取り消されると認証業所の名称は使えなくなり、義務適用の対象となる営業者は引き続き基準を守らなければなりません。</p>
<p>最初の認証手続きは<a href="/ja/blog/haccp-certification-guide">HACCP認証の取得方法と手続き</a>、営業所の移転や重要管理点の変更は<a href="/ja/blog/haccp-certification-change-application">HACCP認証の変更申請</a>をご覧ください。</p>

<h2>認証取消と是正命令の法的事由</h2>
<p>食品医薬品安全処長は認証業所の基準遵守と教育訓練の修了状況を年1回以上調査・評価しなければならず、この権限と認証取消・是正命令の権限は地方食品医薬品安全庁長に委任されています。処分事由は次のとおりです。</p>
<ul>
<li>食品安全管理認証基準を守らなかった場合</li>
<li>虚偽その他不正な方法で認証を受けた場合（必ず取消）</li>
<li>2か月以上の営業停止処分を受けた場合（必ず取消）</li>
<li>営業者と従業員が定められた教育訓練を受けなかった場合</li>
<li>認証を受けた食品を他の業所に委託して製造・加工した場合、または所在地・重要管理点の変更申請をしなかった場合</li>
</ul>
<p>委託製造には、同じ食品で認証を受けた他の業所に委託する場合などの例外があります。畜産物加工場などの安全管理認証は「畜産物衛生管理法」に別の取消規定があり、ここでの基準とは異なります。</p>

<h2>違反の種類別の処分基準</h2>
<p>施行規則の処分基準は、違反の内容によって認証取消と是正命令に分かれています。</p>
<table><thead><tr><th>違反の内容</th><th>処分</th></tr></thead><tbody>
<tr><td>原材料・副材料の検査成績書を受け取らず、自主検査もしない</td><td>認証取消</td></tr>
<tr><td>作業場の洗浄・消毒も従事者の衛生管理もしない</td><td>認証取消</td></tr>
<tr><td>重要管理点のモニタリングをしない、または管理基準の逸脱後も改善措置をしない</td><td>認証取消</td></tr>
<tr><td>新製品・追加工程の危害要因分析をまったくしない</td><td>認証取消</td></tr>
<tr><td>基準書に定めた製造・加工方法どおりに作らない</td><td>是正命令</td></tr>
<tr><td>調査・評価で不適合、前提条件またはHACCP管理分野が60%未満</td><td>認証取消</td></tr>
<tr><td>調査・評価で不適合、60%以上85%未満</td><td>是正命令</td></tr>
<tr><td>教育訓練の未修了、変更申請の漏れ</td><td>是正命令</td></tr>
<tr><td>認証食品を他の業所に委託製造</td><td>認証取消</td></tr>
<tr><td>2か月以上の営業停止、またはそれに代わる課徴金</td><td>認証取消</td></tr>
</tbody></table>
<p>是正命令で済む違反も放置すれば取消につながります。製造方法、教育訓練、変更申請の違反で2回以上是正命令を受けても履行しない場合や、点数区分による是正命令を履行しない場合は認証取消です。従業員の定期教育は認証を受けた年を除き毎年1回以上なので、修了記録もあわせて管理してください。</p>

<h2>処分の前後にすべきこと</h2>
<p>認証を取り消すには聴聞を経なければならないため、通知を受けたら意見を述べる機会があります。次の順で対応します。</p>
<ol>
<li>通知書の違反項目が処分基準表で是正命令の対象か認証取消の対象かを確認します。</li>
<li>重要管理点のモニタリング記録、改善措置の記録、教育修了記録など事実関係を示す資料を集めます。</li>
<li>是正命令であれば期限内に履行し、結果を残します。不履行が重なると取消事由になります。</li>
<li>聴聞では事実関係とすでに終えた改善内容を説明します。</li>
<li>取り消された場合は、包装や広告からHACCP適用業所の名称を直ちに外します。使い続けると過料の対象です。</li>
</ol>
<p>義務適用の業所は、認証が取り消されても基準を守る義務が残ります。食品製造・加工業などが違反すると、1回目は営業停止7日、2回目は15日、3回目は1か月という営業処分の基準が別にあります。再認証の準備は<a href="/ja/services/haccp">HACCP認証サービス</a>でご案内しています。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 調査・評価で不適合になると、すぐに取り消されますか。</p><p class="faq-a">A. 点数によります。前提条件またはHACCP管理分野が60%未満なら認証取消、60%以上85%未満なら是正命令で、その命令を履行しないと取り消されます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 営業停止処分を受けるとHACCP認証も失いますか。</p><p class="faq-a">A. 2か月以上の営業停止、またはそれに代わる課徴金の処分であれば、認証は必ず取り消されます。それより短い停止はこの事由に当たりません。</p></div>
<div class="faq-item"><p class="faq-q">Q. 従業員が定期教育を受け忘れたらどうなりますか。</p><p class="faq-a">A. 教育訓練の未修了は是正命令の対象です。2回以上是正命令を受けても履行しなければ取消事由になります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 取消後、残った包装材のHACCP表示は使えますか。</p><p class="faq-a">A. 認証業所でない営業者はその名称を使えず、違反すると過料の対象です。表示の残った包装材や広告物は使用をやめてください。</p></div>
</div>

<div class="cta-block"><h3>HACCPの処分対応のご相談</h3><p>処分通知の確認、是正結果の整理、再認証の書類準備は、YouSun Administrative Agency（代表行政士 Jung Yu-sun）にお問い合わせください。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

}
