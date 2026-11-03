// 원고 은행 보충 — BANK-REFILL-1029 (2026-10-29, 맥4 하위 작성) — 초안. bank/ 에 넣기 전 맥4 검수·사진(pexelsId) 필요.
// 주제: logistics(국제물류주선업등록) / 세부주제: renewal(갱신·주기적 신고 — 3년마다 등록기준 신고)
//
// 겹침 검사(blog-posts-data.ts·blog-i18n.ts·bank/):
//   international-logistics-registration-guide(신규 등록) / international-logistics-capital-funding-guide(자본금 마련)
//   freight-forwarder-capital-bond-requirements·freight-forwarder-capital-bond(자본금·보증보험 요건) / freight-forwarder-registration-guide
//   freight-forwarder-vs-domestic / forwarder-startup-checklist / international-logistics-select
//   international-logistics-business-succession(승계 신고 — 3년 신고는 표 한 줄)
//   international-logistics-fix(무등록 처벌·변경등록 과태료·3년 신고 미신고 처분 단계를 한 단락·FAQ 2개로만 다룸)
//   → 이 글은 3년 등록기준 신고의 "절차" 자체: 기산점(등록일)과 다음 신고시점 기재, 60일 기한, 신고서 기재 항목(자본금·보증보험 가입 여부),
//     첨부서류(1개월 이내 발행)·행정정보 공동이용, 처리기간 5일, 접수 위탁 가능성, 자본금 감소 시 변경등록과의 구분,
//     미신고·거짓 신고 처분의 운용(최근 1년 횟수 산정·감경 사유·과징금 갈음·청문·취소 후 2년 결격). 금액은 0건.
//
// 법령 대조(law.go.kr DRF, OC=visionlaw, 2026-10-29 조회 — ~/work/bank-refill-1029/lawfetch.py):
//   물류정책기본법          MST 276993, 2025. 10. 1. 시행
//     제43조 제1항·제2항·제3항·제4항(3년 경과마다 신고), 제44조 제5호(취소 후 2년), 제47조 제1항 제2호·제3호·제2항,
//     제65조 제2항(위탁), 제67조 제1항(과징금 갈음 — 금액 미기재), 제68조 제5호(등록취소 청문)
//   물류정책기본법 시행령   MST 289715, 2026. 9. 15. 시행 — 제30조의2(보증보험 기준·예외 각 호 — 금액 미기재), 제51조 제3항 제2호의3(신고 접수·검토 위탁 가능)
//   물류정책기본법 시행규칙 MST 285423, 2026. 4. 2. 시행 — 제5조 제2항 제1호~제4호·제3항(1개월)·제4항(행정정보 공동이용),
//     제7조 제1항 제2호·제2항(자본금 감소 변경등록 60일), 제7조의2 제1항~제4항, 제10조, 별표 2(제1호 가목~다목 일반기준, 제2호 나목·다목),
//     별지 제8호서식(국제물류주선업 등록기준 신고서: 처리기간 5일, 신고사항 = 자본금 또는 자산평가액·보증보험 가입 여부·미가입 사유,
//     임원 3명 초과 시 명부 별도)
// 인허가 구분: 국제물류주선업 = 시·도지사 '등록'(허가·인가 아님). 3년마다 하는 것은 '등록기준 신고'이지 등록 갱신이 아니다
//   (등록에 유효기간 규정 없음 — 갱신 신청 제도가 아님). 변경등록(제43조 제2항)·승계 신고(제45조)와 별개.
// 조정·확인 못 한 점:
//   - 신고 기한 60일을 넘긴 '지연 신고'를 별표 2 '신고를 하지 않은 경우'와 같이 보는지는 법령에 따로 없음 → "기한 안에 내지 않으면 미신고로
//     다뤄질 수 있다"는 단정 대신 "60일 안에" 의무와 미신고 처분만 서술.
//   - 실제 접수 창구(협회 위탁 여부·기관명): 시행령은 '위탁할 수 있다' 수준 → 기관명 미기재, "관할 시·도에 확인".
//   - 2회차 이후 신고시점: 규칙 제7조의2 제4항상 등록증·등록대장에 기재되는 시점을 따름 → "등록증에 적힌 다음 신고시점"으로만 서술(계산식 단정 안 함).
//   - 금액(자본금·자산평가액·보증보험·지급보증·화물배상책임보험·과징금·과태료)은 형식 규칙상 0건. 서식 '수수료 없음' 표기도 낱말 금지로 미기재.
// 대조표: crosscheck/international-logistics-registration-standards-report.md

const SLUG = 'international-logistics-registration-standards-report'

export default {
  topic: 'logistics',
  angle: 'renewal',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '국제물류주선업 등록기준 신고',
  wrongTerms: [
    '국제물류주선업 허가', '국제물류주선업허가', '국제물류주선업 인가', '등록 갱신', '등록갱신', '갱신허가',
    'freight forwarding license', 'forwarder permit', 'license renewal', 'registration renewal',
    '国际货运代理业许可', '许可更新', '登记更新',
    '国際物流周旋業許可', '許可更新', '登録更新',
  ],
  pexelsId: 36652827,
  coverImage: '',
  relatedServices: [
    { title: '국제물류주선업 등록', href: '/services/logistics' },
  ],

  ko: {
    title: '국제물류주선업 등록기준 신고 — 3년마다 60일 안에 내는 신고서와 미신고 처분',
    category: '물류/유통',
    metaTitle: '국제물류주선업 등록기준 신고 — 3년 주기·60일 기한·서류·처분 단계',
    metaDescription: '국제물류주선업자는 등록한 날부터 3년이 지날 때마다 60일 안에 등록기준 신고서를 시·도지사에게 냅니다. 신고서 항목, 첨부서류, 변경등록과의 차이, 미신고 처분 단계를 설명합니다.',
    excerpt: '국제물류주선업 등록에는 갱신 신청이 없는 대신 3년마다 등록기준 신고가 있습니다. 기산점과 60일 기한, 신고서에 적는 항목과 첨부서류, 처리 순서, 신고하지 않았을 때 경고부터 등록취소까지의 처분 단계를 다룹니다.',
    content: `<div class="toc"><p>목차</p><ol><li>등록기준 신고의 시점과 기한</li><li>신고서·첨부서류와 처리 순서</li><li>미신고·거짓 신고의 처분 단계</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>국제물류주선업자는 등록기준에 관한 사항을 3년이 지날 때마다 신고해야 하며, 등록한 날부터 3년이 지난 때(등록기준 신고시점)부터 60일 이내에 등록기준 신고서를 시·도지사에게 제출합니다.</strong><!-- 근거: 물류정책기본법 제43조 제4항, 같은 법 시행규칙 제7조의2 제1항 --> 국제물류주선업은 시·도지사에게 하는 등록이고 유효기간을 두어 다시 받는 구조가 아니므로, 이 신고가 등록을 유지하기 위한 주기적 점검 역할을 합니다. 신고를 하지 않거나 거짓으로 하면 사업정지나 등록취소 사유가 됩니다.<!-- 근거: 물류정책기본법 제43조 제1항, 제47조 제1항 제3호 --></p>
<p>처음 등록하는 절차는 <a href="/blog/international-logistics-registration-guide">국제물류주선업 등록 가이드</a>, 자본금·보증보험 요건은 <a href="/blog/freight-forwarder-capital-bond-requirements">국제물류주선업 자본금·보증보험 요건</a>, 무등록·변경등록 누락 제재는 <a href="/blog/international-logistics-fix">국제물류주선업 처벌·과태료 정리</a>에서 확인할 수 있습니다.</p>

<h2>등록기준 신고의 시점과 기한</h2>
<p>첫 신고시점은 등록한 날부터 3년이 지난 때이고, 그때부터 60일 안에 신고서를 냅니다. 시·도지사는 신고를 심사해 수리하면 등록증과 등록대장에 다음 번 신고시점을 적습니다. 그 뒤로는 등록증에 적힌 시점을 기준으로 같은 신고를 되풀이합니다.<!-- 근거: 물류정책기본법 제43조 제4항, 같은 법 시행규칙 제7조의2 제1항·제4항 --></p>
<p>신고 대상인 등록기준은 자본금(법인이 아니면 자산평가액)과 보증보험 가입입니다. 자본금이 일정 규모 이상이거나 컨테이너장치장을 소유한 경우, 은행 지급보증이나 화물배상책임보험이 있는 경우에는 보증보험 가입 의무가 없습니다.<!-- 근거: 물류정책기본법 제43조 제3항, 같은 법 시행령 제30조의2 각 호 --></p>
<table><thead><tr><th>절차</th><th>사유</th><th>기한</th></tr></thead><tbody>
<tr><td>등록기준 신고</td><td>등록 후 3년 경과(이후 등록증 기재 시점)<!-- 근거: 물류정책기본법 제43조 제4항, 시행규칙 제7조의2 제1항·제4항 --></td><td>신고시점부터 60일 이내<!-- 근거: 시행규칙 제7조의2 제1항·제4항 --></td></tr>
<tr><td>변경등록</td><td>상호·대표자·임원·주사무소 변경, 자본금 또는 자산평가액 감소</td><td>변경사유 발생일부터 60일 이내<!-- 근거: 시행규칙 제7조 제1항·제2항 --></td></tr>
<tr><td>승계 신고</td><td>양도·양수, 상속, 법인 합병</td><td>승계한 날부터 30일 이내<!-- 근거: 물류정책기본법 제45조 제2항, 시행규칙 제8조 제1항 --></td></tr>
</tbody></table>
<p>자본금이 줄었다면 3년 신고를 기다리지 말고 변경등록부터 해야 합니다.<!-- 근거: 시행규칙 제7조 제1항 제2호·제2항 --> 양도·합병 절차는 <a href="/blog/international-logistics-business-succession">국제물류주선업 양도양수·승계 신고</a>에서 다룹니다.</p>

<h2>신고서·첨부서류와 처리 순서</h2>
<p>등록기준 신고서에는 상호, 대표자, 임원, 주소와 함께 신고사항으로 자본금 또는 자산평가액, 보증보험 가입 여부와 미가입 사유를 적습니다. 임원이 3명을 넘으면 임원 명부를 따로 냅니다. 서식의 처리기간은 5일입니다.<!-- 근거: 물류정책기본법 시행규칙 별지 제8호서식 --> 첨부서류는 신규 등록 때와 같은 규정을 따릅니다.<!-- 근거: 시행규칙 제7조의2 제2항, 제5조 제2항 --></p>
<ul>
<li>등록기준에 적합함을 증명하는 서류</li>
<li>자기 명의로 발행할 선하증권·항공화물운송장의 양식과 약관 서류</li>
<li>신고인(법인은 임원)이 외국인이면 결격사유가 없음을 확인하는 본국 서류(아포스티유 또는 영사 확인)</li>
<li>외국인투자기업이면 외국인투자를 증명하는 서류</li>
</ul>
<p>위 서류는 제출일 전 1개월 이내에 발행되거나 작성된 것이어야 하고, 법인 등기사항증명서 같은 정보는 시·도지사가 행정정보 공동이용으로 확인합니다.<!-- 근거: 시행규칙 제5조 제3항·제4항 --> 시·도지사는 신고 접수와 내용 검토를 물류관련협회 등에 맡길 수 있으므로 접수 창구는 관할 시·도에 먼저 확인합니다.<!-- 근거: 물류정책기본법 제65조 제2항, 같은 법 시행령 제51조 제3항 제2호의3 --></p>
<ol>
<li>등록증에 적힌 신고시점을 확인하고 60일 기한을 일정표에 넣습니다.<!-- 근거: 시행규칙 제7조의2 제1항·제4항 --></li>
<li>자본금 또는 자산평가액이 등록 때보다 줄지 않았는지 확인합니다.</li>
<li>보증보험 증권의 보험기간이 끊기지 않았는지, 면제 사유가 지금도 유지되는지 확인합니다.</li>
<li>첨부서류를 1개월 이내 발행분으로 준비합니다.<!-- 근거: 시행규칙 제5조 제3항 --></li>
<li>신고서를 제출하고, 수리 후 등록증에 기재된 다음 신고시점을 기록해 둡니다.<!-- 근거: 시행규칙 제7조의2 제1항·제4항 --></li>
</ol>

<h2>미신고·거짓 신고의 처분 단계</h2>
<p>신고를 하지 않거나 거짓으로 신고하면 1차 경고, 2차 사업정지 30일, 3차 사업정지 60일, 4차 등록취소입니다. 신고 과정에서 등록기준에 못 미친 사실이 드러나도 같은 단계의 처분 기준이 적용됩니다.<!-- 근거: 물류정책기본법 제47조 제1항 제2호·제3호, 같은 법 시행규칙 제10조, 별표 2 제2호 나목·다목 --> 위반 횟수는 최근 1년 동안 같은 위반으로 처분받은 경우를 기준으로 셉니다.<!-- 근거: 시행규칙 별표 2 제1호 나목 --></p>
<p>사소한 부주의나 오류로 인한 위반, 경미한 위반, 처음 위반이면서 5년 이상 모범적으로 영업한 경우에는 사업정지를 2분의 1 범위에서 줄이거나 등록취소를 6개월 사업정지로 감경할 수 있습니다.<!-- 근거: 시행규칙 별표 2 제1호 다목 --> 사업정지가 이용자에게 심한 불편을 주면 과징금으로 갈음할 수 있고, 등록취소 전에는 청문을 거칩니다. 등록이 취소되면 2년 동안 다시 등록할 수 없습니다.<!-- 근거: 물류정책기본법 제67조 제1항, 제68조 제5호, 제44조 제5호 --> 신고서 준비는 <a href="/services/logistics">국제물류주선업 등록 서비스</a>에서 안내합니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 국제물류주선업 등록도 3년마다 갱신해야 하나요?<!-- 근거: 물류정책기본법 제43조 제4항 --></p><p class="faq-a">A. 등록 자체를 다시 받는 제도는 없습니다. 대신 3년이 지날 때마다 등록기준을 신고하고, 신고시점부터 60일 안에 신고서를 냅니다.<!-- 근거: 물류정책기본법 제43조 제4항, 시행규칙 제7조의2 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 다음 신고시점은 어떻게 알 수 있나요?</p><p class="faq-a">A. 신고가 수리되면 시·도지사가 등록증과 등록대장에 다음 번 신고시점을 적습니다. 등록증을 확인하면 됩니다.<!-- 근거: 시행규칙 제7조의2 제4항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 신고를 한 번 놓치면 바로 등록이 취소되나요?</p><p class="faq-a">A. 처분 기준상 1차는 경고이고, 같은 위반이 최근 1년 안에 반복되면 사업정지 30일, 60일을 거쳐 4차에 등록취소입니다.<!-- 근거: 시행규칙 별표 2 제1호 나목, 제2호 다목 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 신고 시점에 보증보험이 끝나 있으면 어떻게 하나요?</p><p class="faq-a">A. 보증보험은 면제 사유가 없는 한 등록기준이므로, 신고 전에 다시 가입해 기준을 갖춰야 합니다. 기준 미달은 경고부터 등록취소까지의 처분 대상입니다.<!-- 근거: 시행령 제30조의2, 물류정책기본법 제47조 제1항 제2호, 시행규칙 별표 2 제2호 나목 --></p></div>
</div>

<div class="cta-block"><h3>국제물류주선업 등록기준 신고 상담</h3><p>신고시점 확인, 자본금·보증보험 점검, 신고서와 첨부서류 준비는 유선행정사사무소에 문의해 주십시오. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 물류정책기본법, 같은 법 시행령, 같은 법 시행규칙 --></p>`,
  },
  en: {
    title: 'Freight Forwarder Registration Standards Report in Korea — Every 3 Years, Within 60 Days',
    category: 'Logistics',
    metaTitle: 'Freight Forwarder Registration Standards Report in Korea — 3-Year Cycle',
    metaDescription: 'Korean international freight forwarders must report on their registration standards every 3 years, within 60 days. Learn the form, documents and sanction steps.',
    excerpt: 'A Korean international freight forwarding registration has no expiry to apply for again. Instead, the forwarder reports on its registration standards every 3 years. The timing, the 60-day deadline, the form and documents, and the sanction steps for failing to report.',
    content: `<div class="toc"><p>Contents</p><ol><li>When the report is due</li><li>Form, documents and steps</li><li>Sanctions for not reporting or false reporting</li><li>FAQ</li></ol></div>
<p><strong>A registered international freight forwarder (국제물류주선업자) in Korea must report on its registration standards each time 3 years pass. The first report is due within 60 days from the point 3 years after the registration date, and it is filed with the Mayor or Governor of the relevant metropolitan city or province.</strong> Freight forwarding is a registration with no validity period to apply for again, so this report serves as the periodic check that keeps the registration in good standing. Not reporting, or reporting falsely, is a ground for business suspension or cancellation.</p>
<p>For first-time registration, see <a href="/en/blog/international-logistics-registration-guide">our registration guide</a>. For capital and guarantee insurance rules, see <a href="/en/blog/freight-forwarder-capital-bond-requirements">capital and guarantee insurance requirements</a>.</p>

<h2>When the report is due</h2>
<p>The first reporting point is 3 years after the registration date, and the report is due within 60 days from then. When the authority accepts the report, it writes the next reporting point on the registration certificate and in the register. After that, the same report is repeated based on the date written on the certificate.</p>
<p>The registration standards covered are paid-in capital (asset value for individuals) and guarantee insurance. Guarantee insurance is not required if capital is above a set level, the forwarder owns a container yard, or it holds a bank payment guarantee or cargo liability insurance.</p>
<table><thead><tr><th>Procedure</th><th>Trigger</th><th>Deadline</th></tr></thead><tbody>
<tr><td>Registration standards report</td><td>3 years after registration (then the date on the certificate)</td><td>Within 60 days of the reporting point</td></tr>
<tr><td>Change registration</td><td>Change of name, representative, officers or head office; decrease in capital or asset value</td><td>Within 60 days of the change</td></tr>
<tr><td>Succession report</td><td>Transfer, inheritance, merger</td><td>Within 30 days of succession</td></tr>
</tbody></table>
<p>If capital has decreased, file a change registration first rather than waiting for the 3-year report. For transfers and mergers, see <a href="/en/blog/international-logistics-business-succession">business succession reports</a>.</p>

<h2>Form, documents and steps</h2>
<p>The registration standards report form lists the trade name, representative, officers and address, and the reported items: capital or asset value, and whether guarantee insurance is in place (with the reason if not). If there are more than 3 officers, attach a separate list. The processing period on the form is 5 days. The attachments follow the same rules as a new registration:</p>
<ul>
<li>Documents proving the registration standards are met</li>
<li>The format and terms of the bills of lading and air waybills to be issued in the forwarder's own name</li>
<li>If the reporter (or, for a company, an officer) is a foreign national, home-country documents showing no disqualification (apostille or consular confirmation)</li>
<li>For a foreign-invested company, proof of foreign investment</li>
</ul>
<p>These documents must have been issued or prepared within 1 month before filing, and the authority checks records such as the corporate registry through shared administrative data. Because the authority may delegate intake and review to a logistics association or similar body, confirm the filing desk with the province first.</p>
<ol>
<li>Check the reporting point on the registration certificate and put the 60-day deadline on your calendar.</li>
<li>Confirm that capital or asset value has not fallen since registration.</li>
<li>Check that the guarantee insurance period has not lapsed, or that the exemption still applies.</li>
<li>Prepare attachments issued within 1 month.</li>
<li>File the report and, once accepted, note the next reporting point written on the certificate.</li>
</ol>

<h2>Sanctions for not reporting or false reporting</h2>
<p>Not reporting or reporting falsely leads to a warning for the 1st violation, a 30-day business suspension for the 2nd, a 60-day suspension for the 3rd and cancellation for the 4th. The same steps apply if the report reveals that the registration standards are no longer met. Violations are counted based on sanctions for the same violation within the last 1 year.</p>
<p>The authority may reduce a suspension by up to half, or reduce cancellation to a 6-month suspension, if the violation was a minor oversight, its impact was slight, or it was a first violation by a forwarder with 5 or more years of exemplary business. A penalty surcharge may replace a suspension that would seriously inconvenience customers, and a hearing is held before cancellation. After cancellation, the forwarder cannot register again for 2 years. For help preparing the report, see <a href="/en/services/logistics">our freight forwarding registration service</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Does the registration have to be renewed every 3 years?</p><p class="faq-a">A. There is no procedure to obtain the registration again. Instead, you report on the registration standards each time 3 years pass, within 60 days of the reporting point.</p></div>
<div class="faq-item"><p class="faq-q">Q. How do I know the next reporting point?</p><p class="faq-a">A. When a report is accepted, the authority writes the next reporting point on the registration certificate and in the register.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is the registration cancelled the first time I miss the report?</p><p class="faq-a">A. Under the sanction standards, the 1st violation is a warning. If the same violation repeats within 1 year, it moves to 30-day and 60-day suspensions, then cancellation at the 4th.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the guarantee insurance has expired at the reporting point?</p><p class="faq-a">A. Unless an exemption applies, guarantee insurance is a registration standard, so take out a new policy before reporting. Falling short of the standards is subject to the steps from warning to cancellation.</p></div>
</div>

<div class="cta-block"><h3>Talk to us about your registration standards report</h3><p>To check your reporting point, review capital and guarantee insurance, and prepare the form and attachments, contact YouSun Administrative Agency. Phone 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '国际货运代理业登记标准申报 — 每满3年须在60日内提交的申报书与未申报处分',
    category: '物流/配送',
    metaTitle: '韩国国际货运代理业登记标准申报 — 3年周期·60日期限·材料·处分',
    metaDescription: '韩国国际货运代理业者须自登记之日起每满3年，在60日内向市·道知事提交登记标准申报书。下面说明申报书项目、附件、与变更登记的区别及未申报的处分阶段。',
    excerpt: '韩国国际货运代理业登记没有重新申请的有效期制度，取而代之的是每3年一次的登记标准申报。起算点与60日期限、申报书项目与附件、办理顺序，以及未申报时从警告到撤销登记的处分阶段。',
    content: `<div class="toc"><p>目录</p><ol><li>登记标准申报的时点与期限</li><li>申报书·附件与办理顺序</li><li>未申报·虚假申报的处分阶段</li><li>常见问题</li></ol></div>
<p><strong>韩国国际货运代理业者（국제물류주선업자）须每满3年申报一次登记标准相关事项，自登记之日起满3年之时（登记标准申报时点）起60日内，向市·道知事提交登记标准申报书。</strong>国际货运代理业是向市·道知事办理的登记，并没有到期后重新取得的有效期制度，因此这项申报承担着维持登记的定期检查作用。未申报或虚假申报的，构成停业或撤销登记的事由。</p>
<p>首次登记流程请参阅<a href="/zh/blog/international-logistics-registration-guide">国际货运代理业登记指南</a>，资本金与保证保险要求请参阅<a href="/zh/blog/freight-forwarder-capital-bond-requirements">资本金与保证保险要求</a>。</p>

<h2>登记标准申报的时点与期限</h2>
<p>首次申报时点为自登记之日起满3年之时，须自该时点起60日内提交申报书。市·道知事审查后受理申报的，会在登记证和登记台账上记载下一次申报时点。此后以登记证上记载的时点为准，重复同样的申报。</p>
<p>申报对象的登记标准是资本金（非法人为资产评估额）和保证保险。资本金达到一定规模以上、拥有集装箱堆场、取得银行支付担保或投保货物赔偿责任保险的，无需投保保证保险。</p>
<table><thead><tr><th>程序</th><th>事由</th><th>期限</th></tr></thead><tbody>
<tr><td>登记标准申报</td><td>登记后满3年（此后为登记证记载时点）</td><td>自申报时点起60日内</td></tr>
<tr><td>变更登记</td><td>商号·代表人·高管·总部变更，资本金或资产评估额减少</td><td>自变更事由发生之日起60日内</td></tr>
<tr><td>承继申报</td><td>转让受让、继承、法人合并</td><td>自承继之日起30日内</td></tr>
</tbody></table>
<p>资本金减少的，不要等到3年申报，应先办理变更登记。转让与合并请参阅<a href="/zh/blog/international-logistics-business-succession">国际货运代理业转让受让·承继申报</a>。</p>

<h2>申报书·附件与办理顺序</h2>
<p>登记标准申报书除商号、代表人、高管、地址外，还须填写申报事项：资本金或资产评估额、是否投保保证保险及未投保理由。高管超过3名的，另附高管名册。表格记载的处理期限为5日。附件适用与新登记相同的规定：</p>
<ul>
<li>证明符合登记标准的材料</li>
<li>以本人名义签发的提单及航空货运单的格式与条款材料</li>
<li>申报人（法人为高管）为外国人的，证明不属于欠格事由的本国文件（海牙认证或领事确认）</li>
<li>外商投资企业的外商投资证明材料</li>
</ul>
<p>上述材料须为提交日前1个月内签发或制作，法人登记事项证明等信息由市·道知事通过行政信息共享查验。市·道知事可将申报受理与审查委托给物流相关协会等机构，请先向管辖市·道确认受理窗口。</p>
<ol>
<li>确认登记证上记载的申报时点，把60日期限列入日程。</li>
<li>确认资本金或资产评估额没有低于登记时。</li>
<li>确认保证保险的保险期间没有中断，或免除事由仍然有效。</li>
<li>准备1个月内签发的附件。</li>
<li>提交申报书，受理后记下登记证上记载的下一次申报时点。</li>
</ol>

<h2>未申报·虚假申报的处分阶段</h2>
<p>未申报或虚假申报的，第1次警告，第2次停业30日，第3次停业60日，第4次撤销登记。申报过程中发现已不符合登记标准的，也适用同样阶段的处分标准。违规次数以最近1年内因同一违规受到处分的情形为准计算。</p>
<p>因轻微疏忽或错误造成、违规程度轻微，或首次违规且已模范经营5年以上的，停业可在一半范围内减轻，撤销登记可减为6个月停业。停业会给用户带来严重不便的，可改以课征金代替；撤销登记前须经听证。登记被撤销后2年内不得重新登记。申报书准备请参阅<a href="/zh/services/logistics">国际货运代理业登记服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 国际货运代理业登记也要每3年重新办理吗？</p><p class="faq-a">A. 没有重新取得登记的制度。取而代之的是每满3年申报登记标准，在申报时点起60日内提交申报书。</p></div>
<div class="faq-item"><p class="faq-q">Q. 怎样知道下一次申报时点？</p><p class="faq-a">A. 申报被受理后，市·道知事会在登记证和登记台账上记载下一次申报时点，查看登记证即可。</p></div>
<div class="faq-item"><p class="faq-q">Q. 漏报一次就会被撤销登记吗？</p><p class="faq-a">A. 按处分标准，第1次为警告；同一违规在最近1年内反复的，依次为停业30日、60日，第4次撤销登记。</p></div>
<div class="faq-item"><p class="faq-q">Q. 申报时保证保险已到期怎么办？</p><p class="faq-a">A. 除非有免除事由，保证保险属于登记标准，应在申报前重新投保。不符合标准的，适用从警告到撤销登记的处分。</p></div>
</div>

<div class="cta-block"><h3>国际货运代理业登记标准申报咨询</h3><p>确认申报时点、检查资本金与保证保险、准备申报书和附件，请联系YouSun Administrative Agency（代表行政士 Jung Yu-sun）。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '国際物流周旋業の登録基準届出 — 3年ごとに60日以内に出す届出書と未届出の処分',
    category: '物流・流通',
    metaTitle: '韓国の国際物流周旋業 登録基準届出 — 3年周期・60日期限・書類・処分',
    metaDescription: '韓国の国際物流周旋業者は、登録日から3年が経過するたびに60日以内に登録基準届出書を市・道知事に提出します。届出書の項目、添付書類、変更登録との違い、未届出の処分段階を説明します。',
    excerpt: '韓国の国際物流周旋業の登録には、期限が来て取り直す有効期間の制度がない代わりに、3年ごとの登録基準届出があります。起算点と60日の期限、届出書の項目と添付書類、手順、届け出なかった場合の警告から登録取消までの処分段階を扱います。',
    content: `<div class="toc"><p>目次</p><ol><li>登録基準届出の時点と期限</li><li>届出書・添付書類と手順</li><li>未届出・虚偽届出の処分段階</li><li>よくある質問</li></ol></div>
<p><strong>韓国の国際物流周旋業者（국제물류주선업자）は、登録基準に関する事項を3年が経過するたびに届け出なければならず、登録日から3年が経過した時（登録基準届出時点）から60日以内に登録基準届出書を市・道知事に提出します。</strong>国際物流周旋業は市・道知事への登録であり、有効期間が切れて取り直す仕組みではないため、この届出が登録を維持するための定期的な点検の役割を果たします。届け出なかったり虚偽の届出をしたりすると、事業停止や登録取消の事由になります。</p>
<p>初めて登録する手続は<a href="/ja/blog/international-logistics-registration-guide">国際物流周旋業 登録ガイド</a>、資本金・保証保険の要件は<a href="/ja/blog/freight-forwarder-capital-bond-requirements">資本金・保証保険の要件</a>をご覧ください。</p>

<h2>登録基準届出の時点と期限</h2>
<p>最初の届出時点は登録日から3年が経過した時で、そこから60日以内に届出書を出します。市・道知事は届出を審査して受理すると、登録証と登録台帳に次回の届出時点を記載します。その後は登録証に記載された時点を基準に同じ届出を繰り返します。</p>
<p>届出の対象となる登録基準は、資本金（法人でなければ資産評価額）と保証保険への加入です。資本金が一定規模以上の場合、コンテナ蔵置場を所有する場合、銀行の支払保証や貨物賠償責任保険がある場合は、保証保険の加入義務がありません。</p>
<table><thead><tr><th>手続</th><th>事由</th><th>期限</th></tr></thead><tbody>
<tr><td>登録基準届出</td><td>登録後3年経過（以後は登録証記載の時点）</td><td>届出時点から60日以内</td></tr>
<tr><td>変更登録</td><td>商号・代表者・役員・主事務所の変更、資本金または資産評価額の減少</td><td>変更事由の発生日から60日以内</td></tr>
<tr><td>承継届出</td><td>譲渡・譲受、相続、法人合併</td><td>承継日から30日以内</td></tr>
</tbody></table>
<p>資本金が減った場合は3年の届出を待たず、先に変更登録をします。譲渡・合併の手続は<a href="/ja/blog/international-logistics-business-succession">国際物流周旋業の譲渡・譲受と承継届出</a>で扱っています。</p>

<h2>届出書・添付書類と手順</h2>
<p>登録基準届出書には、商号、代表者、役員、住所とともに、届出事項として資本金または資産評価額、保証保険の加入有無と未加入の理由を記入します。役員が3名を超える場合は役員名簿を別に提出します。書式に記載された処理期間は5日です。添付書類は新規登録と同じ規定に従います。</p>
<ul>
<li>登録基準に適合することを証明する書類</li>
<li>自己名義で発行する船荷証券・航空貨物運送状の様式と約款に関する書類</li>
<li>届出人（法人は役員）が外国人の場合、欠格事由に当たらないことを確認する本国の書類（アポスティーユまたは領事確認）</li>
<li>外国人投資企業の場合、外国人投資を証明する書類</li>
</ul>
<p>これらの書類は提出日前1か月以内に発行または作成されたものでなければならず、法人登記事項証明書などの情報は市・道知事が行政情報の共同利用で確認します。市・道知事は届出の受付と内容の検討を物流関連協会などに委託できるため、受付窓口は管轄の市・道に先に確認してください。</p>
<ol>
<li>登録証に記載された届出時点を確認し、60日の期限を予定表に入れます。</li>
<li>資本金または資産評価額が登録時より減っていないか確認します。</li>
<li>保証保険の保険期間が途切れていないか、免除事由が今も続いているか確認します。</li>
<li>添付書類を1か月以内の発行分で準備します。</li>
<li>届出書を提出し、受理後に登録証に記載された次回の届出時点を控えておきます。</li>
</ol>

<h2>未届出・虚偽届出の処分段階</h2>
<p>届け出なかったり虚偽の届出をしたりすると、1回目は警告、2回目は事業停止30日、3回目は事業停止60日、4回目は登録取消です。届出の過程で登録基準を満たしていないことが分かった場合も、同じ段階の処分基準が適用されます。違反回数は、最近1年間に同じ違反で処分を受けた場合を基準に数えます。</p>
<p>些細な不注意や誤りによる違反、軽微な違反、初めての違反で5年以上模範的に営業してきた場合には、事業停止を2分の1の範囲で減らし、登録取消を6か月の事業停止に軽減することができます。事業停止が利用者に著しい不便を与える場合は課徴金に代えることができ、登録取消の前には聴聞が行われます。登録が取り消されると2年間は再び登録できません。届出書の準備は<a href="/ja/services/logistics">国際物流周旋業 登録サービス</a>でご案内しています。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 国際物流周旋業の登録も3年ごとに取り直す必要がありますか。</p><p class="faq-a">A. 登録そのものを取り直す制度はありません。その代わり、3年が経過するたびに登録基準を届け出て、届出時点から60日以内に届出書を出します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 次回の届出時点はどうすれば分かりますか。</p><p class="faq-a">A. 届出が受理されると、市・道知事が登録証と登録台帳に次回の届出時点を記載します。登録証で確認できます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 一度届出を忘れると、すぐに登録が取り消されますか。</p><p class="faq-a">A. 処分基準では1回目は警告で、同じ違反が最近1年以内に繰り返されると事業停止30日、60日を経て、4回目に登録取消となります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 届出時点で保証保険が切れていたらどうしますか。</p><p class="faq-a">A. 免除事由がない限り保証保険は登録基準なので、届出の前に改めて加入して基準を満たす必要があります。基準を満たさない場合は警告から登録取消までの処分の対象です。</p></div>
</div>

<div class="cta-block"><h3>国際物流周旋業の登録基準届出のご相談</h3><p>届出時点の確認、資本金・保証保険の点検、届出書と添付書類の準備は、YouSun Administrative Agency（代表行政士 Jung Yu-sun）にお問い合わせください。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

}
