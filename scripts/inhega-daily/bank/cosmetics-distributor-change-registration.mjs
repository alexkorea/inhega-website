// 원고 은행 — inhega-daily (INHEGA-BLOG-RESTART 2026-10-24, kind=seo3958)
// 주제(풀): cosmetics-distributor(화장품책임판매업등록) / 세부주제: change-report(변경신고·변경등록)
//
// 겹침 검사(기존 글과의 경계):
//   cosmetics-responsible-distributor  — 최초 등록 절차·제조업과 차이 → 이 글은 등록 후 '변경등록'만 다룬다(링크).
//   cosmetics-import-sales-registration-guide — 수입 판매 최초 등록·관리자 선임·사무실 → 관리자 자격은 교체 관점으로만(링크).
//   cosmetics-fix — 광고 위반·무등록·변경등록 누락 처분 → 이 글은 처분을 한 단락 예시로만 두고 링크로 넘긴다.
//   cosmetics-select / cosmetics-manufacturing-* — 대행 선택·제조업 → 겹침 없음.
//   제목 "화장품책임판매업 변경등록 …" 으로 시작하는 기존 KO/i18n 제목 없음(ko-titles.txt·blog-i18n.ts 대조).
//
// 법령 대조(lawtool.py, OC=visionlaw, 2026-10-24 조회):
//   화장품법              MST 291337, 시행 2026-10-20 — 제3조 제1항(등록·중요사항 변경 시 등록)·제3항(책임판매관리자),
//                          제3조의3(결격사유 제2·4·4의2·5호), 제24조 제1항 제1호(변경 사항 미등록 → 처분), 제26조(지위 승계)
//   화장품법 시행령        MST 283963, 시행 2026-04-02 — 제2조 제2호 가~라목(책임판매 유형), 제14조 제1호(등록·변경등록 권한 지방식약청 위임)
//   화장품법 시행규칙      MST 285249, 시행 2026-04-02 — 제4조 제2항(관할 지방식약청·서류), 제5조 제1항 제2호(변경등록 대상 5가지),
//                          제5조 제2항(30일/행정구역 개편 90일, 신청서+등록필증+서류, 관할 달라지면 새 소재지 청), 제5조 제3항(공동이용 확인),
//                          제5조 제4항(대장 기재·필증 뒷면 기재), 제8조 제1항~제4항(관리자 자격·직무·10명 이하 겸직·비종사신고),
//                          별표 7 Ⅱ.개별기준 가. 1)·3)·4)(변경 미등록 1차 처분), 별지 제6호서식(처리기간 10일, 책임판매관리자 7일)
// 확인 못 한 점: 처리기간은 법령 본문이 아니라 별지 제6호서식(시행규칙 서식)에만 있다. '변경 사유 발생일'의 사항별 기준일 정의는
//   법령에 없어 쓰지 않았다. 법정 수수료는 이번 규칙상 싣지 않는다. 상호·소재지 변경의 추가 서류는 시행규칙에 규정이 없다(그대로 서술).
// 대조표: crosscheck/cosmetics-distributor-change-registration.md

export default {
  topic: 'cosmetics-distributor',
  angle: 'change-report',
  slug: 'cosmetics-distributor-change-registration',
  kind: 'seo3958',
  keyword: '화장품책임판매업 변경등록',
  wrongTerms: [
    '화장품책임판매업 허가', '책임판매업 허가', '책임판매업 신고', '화장품책임판매업 신고', '변경신고서',
    'cosmetics distribution permit', 'distributor permit', 'distribution license',
    '化妆品责任销售业许可', '变更申报',
    '化粧品責任販売業許可', '変更届出',
  ],
  pexelsId: 7691112,
  coverImage: '',
  relatedServices: [
    { title: '화장품 제조업·책임판매업 등록', href: '/services/cosmetics' },
  ],

  ko: {
    title: '화장품책임판매업 변경등록 — 대상 5가지, 30일 기한, 서류와 책임판매관리자 교체',
    category: '화장품',
    metaTitle: '화장품책임판매업 변경등록 대상·30일 기한·서류·책임판매관리자 자격',
    metaDescription: '화장품책임판매업 변경등록이 필요한 대표자·상호·소재지·책임판매관리자·책임판매 유형 변경, 30일 신청 기한, 관할 지방식약청, 첨부 서류, 새 책임판매관리자 자격, 누락 시 처분까지 안내합니다.',
    excerpt: '대표자·상호·소재지·책임판매관리자·책임판매 유형이 바뀌면 변경 사유가 생긴 날부터 30일 이내에 지방식품의약품안전청에 변경등록을 해야 합니다. 사항별 서류와 처리기간, 책임판매관리자 교체 시 자격 요건, 놓쳤을 때의 처분을 안내합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>변경등록이 필요한 사항</li><li>신청 기한·관할 지방식약청·제출 서류</li><li>책임판매관리자를 바꿀 때 자격 확인</li><li>변경등록을 놓쳤을 때</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>화장품책임판매업 변경등록은 등록한 사항 중 대표자·상호·소재지·책임판매관리자·책임판매 유형이 바뀌었을 때, 변경 사유가 생긴 날부터 30일 이내에 지방식품의약품안전청장에게 신청하는 절차입니다.</strong> 화장품책임판매업은 「화장품법」상 '등록' 대상 영업이고, 등록한 중요 사항을 바꿀 때에도 같은 방식으로 등록해야 합니다.<!-- 근거: 화장품법 제3조 제1항; 화장품법 시행규칙 제5조 제1항 제2호·제2항 --></p>
<p>최초 등록 절차는 <a href="/blog/cosmetics-responsible-distributor">화장품 책임판매업 등록 절차</a>를 참고하시고, 여기서는 등록 후 바뀐 사항을 반영하는 방법을 다룹니다.</p>

<h2>변경등록이 필요한 사항</h2>
<p>「화장품법 시행규칙」은 화장품책임판매업자가 변경등록을 해야 하는 경우를 다섯 가지로 정합니다. 사항마다 첨부 서류와 처리기간이 다릅니다.<!-- 근거: 화장품법 시행규칙 제5조 제1항 제2호 가~마목, 제2항 각 호 --></p>
<table><thead><tr><th>변경 사항</th><th>신청서·등록필증 외 첨부 서류</th><th>처리기간</th></tr></thead><tbody>
<tr><td>화장품책임판매업자 변경(법인은 대표자 변경)</td><td>양도·양수라면 이를 증명하는 서류</td><td>10일<!-- 근거: 화장품법 시행규칙 제5조 제2항 제1호 다목, 별지 제6호서식 --></td></tr>
<tr><td>상호 변경(법인은 법인 명칭 변경)</td><td>시행규칙이 따로 정한 서류 없음</td><td>10일<!-- 근거: 화장품법 시행규칙 별지 제6호서식 --></td></tr>
<tr><td>화장품책임판매업소 소재지 변경</td><td>시행규칙이 따로 정한 서류 없음</td><td>10일<!-- 근거: 화장품법 시행규칙 별지 제6호서식 --></td></tr>
<tr><td>책임판매관리자 변경</td><td>새 책임판매관리자의 자격을 확인할 수 있는 서류</td><td>7일<!-- 근거: 화장품법 시행규칙 제5조 제2항 제3호, 별지 제6호서식 --></td></tr>
<tr><td>책임판매 유형 변경</td><td>수입대행형에서 다른 유형으로 바꾸거나 추가하면 품질관리·책임판매 후 안전관리 기준 규정과 책임판매관리자 자격 서류</td><td>10일<!-- 근거: 화장품법 시행규칙 제5조 제2항 제4호 나목, 별지 제6호서식; 화장품법 시행령 제2조 제2호 --></td></tr>
</tbody></table>
<p>법인 등기사항증명서는 지방식품의약품안전청이 행정정보 공동이용으로 직접 확인하고, 상속으로 영업자가 바뀐 경우의 가족관계증명서도 같은 방식으로 확인합니다. 영업을 양수하거나 상속받은 사람은 종전 영업자의 지위를 승계하지만, 영업자가 바뀌는 것 자체가 변경등록 사항이므로 신청은 따로 해야 합니다.<!-- 근거: 화장품법 시행규칙 제5조 제1항 제2호 가목·제3항; 화장품법 제26조 --></p>
<p>새로 영업자가 되는 사람은 「화장품법」의 결격사유, 예컨대 피성년후견인, 이 법 위반으로 금고 이상의 실형을 선고받고 집행이 끝나지 않은 사람, 등록이 취소된 날부터 1년이 지나지 않은 자 등에 해당하지 않아야 합니다.<!-- 근거: 화장품법 제3조의3 제2호·제4호·제5호 --></p>

<h2>신청 기한·관할 지방식약청·제출 서류</h2>
<p>기한은 변경 사유가 발생한 날부터 30일 이내이고, 행정구역 개편으로 소재지가 바뀐 경우에는 90일 이내입니다. 화장품책임판매업 변경등록 신청서(전자문서 포함)에 등록필증과 해당 서류를 붙여 지방식품의약품안전청장에게 제출합니다.<!-- 근거: 화장품법 시행규칙 제5조 제2항; 화장품법 시행령 제14조 제1호 --></p>
<ol>
<li>변경 사유가 생긴 날을 기록하고, 그날부터 30일 안에 접수되도록 일정을 잡습니다.<!-- 근거: 화장품법 시행규칙 제5조 제2항 --></li>
<li>위 표에서 변경 사항별 첨부 서류를 준비하고 등록필증을 함께 챙깁니다.</li>
<li>소재지를 옮기면서 관할 지방식품의약품안전청이 달라지면 새 소재지를 관할하는 청에 제출합니다.</li>
<li>처리기간은 10일이고, 책임판매관리자 변경등록은 7일입니다.<!-- 근거: 화장품법 시행규칙 별지 제6호서식 --></li>
<li>지방식품의약품안전청은 등록대장에 변경사항을 적고, 등록필증 뒷면에 변경 내용을 기재해 돌려줍니다.</li>
</ol>

<h2>책임판매관리자를 바꿀 때 자격 확인</h2>
<p>책임판매관리자는 품질관리기준에 따른 품질관리, 책임판매 후 안전관리기준에 따른 안전확보, 원료·자재 입고부터 완제품 출고까지의 시험·검사에 대한 제조업자 관리·감독을 맡습니다. 새로 선임할 사람은 다음 중 하나에 해당해야 합니다.</p>
<ul>
<li>「의료법」에 따른 의사 또는 「약사법」에 따른 약사</li>
<li>이공계 학과 또는 향장학·화장품과학·한의학·한약학·간호학 등을 전공해 학사 이상 학위를 받은 사람</li>
<li>화학·생물학·생명과학 등 화장품 관련 분야 전문학사 학위를 받은 뒤 화장품 제조 또는 품질관리 업무에 1년 이상 종사한 사람<!-- 근거: 화장품법 시행규칙 제8조 제1항 제3호 --></li>
<li>식품의약품안전처장이 고시하는 전문 교육과정을 이수한 사람(고시한 품목만 해당)</li>
<li>맞춤형화장품조제관리사 자격시험에 합격한 사람</li>
<li>그 밖에 화장품 제조 또는 품질관리 업무에 2년 이상 종사한 사람<!-- 근거: 화장품법 시행규칙 제8조 제1항 제4호 --></li>
</ul>
<p>상시근로자가 10명 이하인 업체는 대표자가 위 자격을 갖추었다면 직접 책임판매관리자 직무를 수행할 수 있고, 이 경우 책임판매관리자를 둔 것으로 봅니다. 수입대행형 거래 목적의 알선·수여 영업만 등록한 업체에는 위 자격기준과 자격 서류 제출 규정이 적용되지 않습니다.<!-- 근거: 화장품법 시행규칙 제8조 제1항 본문 괄호·제3항, 제5조 제2항 제3호 괄호 --></p>
<p>기존 책임판매관리자가 그만두면 그 사람은 관리업무 비종사신고서를 관할 지방식품의약품안전청에 낼 수 있습니다. 이는 퇴직한 관리자 쪽 절차이므로, 업체는 후임자 자격 서류를 갖춰 별도로 변경등록을 해야 합니다. 관리자 선임과 사무실 준비는 <a href="/blog/cosmetics-import-sales-registration-guide">화장품 수입 판매 등록 가이드</a>도 참고하실 수 있습니다.</p>

<h2>변경등록을 놓쳤을 때</h2>
<p>변경 사항을 등록하지 않으면 「화장품법」상 등록 취소, 업무정지 등 행정처분 사유가 되고, 처분은 위반 횟수가 쌓일수록 무거워집니다. 대표자·상호나 책임판매관리자 변경을 등록하지 않은 경우 1차 위반은 시정명령이지만, 책임판매업소 소재지 변경을 등록하지 않으면 1차 위반부터 판매업무정지 1개월이 정해져 있습니다.<!-- 근거: 화장품법 제24조 제1항 제1호; 화장품법 시행규칙 별표 7 Ⅱ 가. 1)·3)·4) --></p>
<p>변경등록 누락 처분과 무등록 영업 처벌은 <a href="/blog/cosmetics-fix">화장품책임판매업 행정처분 안내</a>에서 자세히 다루었습니다. 이미 기한이 지났다면 사실관계와 서류를 맞춰 지금 바로 신청하는 것이 우선입니다. 등록·변경 업무 전반은 <a href="/services/cosmetics">화장품 업종 등록 서비스</a>에서 확인하실 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 사무실을 다른 시·도로 옮기면 어디에 신청하나요?</p><p class="faq-a">A. 관할 지방식품의약품안전청이 달라지는 이전이라면 새 소재지를 관할하는 청에 변경 사유가 생긴 날부터 30일 이내에 신청합니다.<!-- 근거: 화장품법 시행규칙 제5조 제2항 후단 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 책임판매관리자가 갑자기 퇴사했습니다. 무엇부터 해야 하나요?</p><p class="faq-a">A. 자격 요건을 갖춘 후임자를 선임하고 30일 이내에 자격 서류와 함께 변경등록을 신청합니다. 처리기간은 7일입니다. 상시근로자 10명 이하 업체라면 자격을 갖춘 대표자가 직무를 맡을 수도 있습니다.<!-- 근거: 화장품법 시행규칙 제5조 제2항 제3호, 제8조 제3항, 별지 제6호서식 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 행정구역 개편으로 주소만 바뀌어도 기한이 같나요?</p><p class="faq-a">A. 행정구역 개편에 따른 소재지 변경은 90일 이내에 신청하면 됩니다.<!-- 근거: 화장품법 시행규칙 제5조 제2항 괄호 --></p></div>
</div>

<div class="cta-block"><h3>변경등록 기한이 다가오거나 책임판매관리자를 바꿔야 한다면</h3><p>변경 사항별 서류 점검과 신청서 작성을 유선행정사사무소가 함께 준비합니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=cosmetics-distributor-change-registration">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 화장품법, 화장품법 시행령, 화장품법 시행규칙 --></p>`,
  },

  en: {
    title: 'Cosmetics Responsible Distributor Change Registration in Korea — 30-Day Deadline, Documents, Manager Replacement',
    category: 'Cosmetics',
    metaTitle: 'Cosmetics Distributor Change Registration in Korea: Deadline & Documents',
    metaDescription: 'When a Korean cosmetics responsible distributor must file a change registration: the 30-day deadline, competent regional office, documents and manager rules.',
    excerpt: 'If the representative, trade name, address, responsible sales manager or distribution type changes, a change registration must be filed with the Regional Office of Food and Drug Safety within 30 days. Documents, processing periods, manager qualifications and the consequences of missing it.',
    content: `<div class="toc"><p>Contents</p><ol><li>Changes that require change registration</li><li>Deadline, competent office and documents</li><li>Qualifications when replacing the responsible sales manager</li><li>If you miss the change registration</li><li>FAQ</li></ol></div>
<p><strong>A cosmetics responsible distributor (화장품책임판매업) must file a change registration with the Regional Office of Food and Drug Safety within 30 days from the date the change occurred whenever its representative, trade name, business address, responsible sales manager or distribution type changes.</strong> Under the Cosmetics Act, this business is subject to registration, and changes to important registered items must be registered in the same way.</p>
<p>For the initial process, see <a href="/en/blog/cosmetics-responsible-distributor">our guide to responsible distributor registration</a>; this article covers changes after registration.</p>

<h2>Changes that require change registration</h2>
<p>The Enforcement Rule of the Cosmetics Act lists five cases in which a responsible distributor must file a change registration. The attachments and processing period differ by case.</p>
<table><thead><tr><th>Change</th><th>Attachments besides the application and certificate</th><th>Processing period</th></tr></thead><tbody>
<tr><td>Change of the business operator (for a corporation, its representative)</td><td>Proof of transfer, if the business was transferred</td><td>10 days</td></tr>
<tr><td>Change of trade name (for a corporation, its corporate name)</td><td>No additional document specified</td><td>10 days</td></tr>
<tr><td>Change of business address</td><td>No additional document specified</td><td>10 days</td></tr>
<tr><td>Change of responsible sales manager</td><td>Documents proving the new manager's qualifications</td><td>7 days</td></tr>
<tr><td>Change of distribution type</td><td>When moving from, or adding to, the import-agency type: the quality control and post-market safety standards and the manager's qualification documents</td><td>10 days</td></tr>
</tbody></table>
<p>The regional office checks the corporate register itself through shared administrative information, and in the case of inheritance it also checks the family relation certificate. A transferee or heir succeeds to the previous operator's status, but a change of operator is itself a change registration item, so the filing is still required.</p>
<p>A person who newly becomes the operator must not fall under the disqualifications of the Cosmetics Act, such as being under adult guardianship, having been sentenced to imprisonment for violating the Act without completing the sentence, or being a person whose registration was cancelled less than 1 year ago.</p>

<h2>Deadline, competent office and documents</h2>
<p>The deadline is 30 days from the date the change occurred, or 90 days when the address changed because of an administrative district reorganization. Submit the change registration application (electronic filing is allowed) together with the registration certificate and the relevant documents to the Regional Office of Food and Drug Safety (지방식품의약품안전청).</p>
<ol>
<li>Record the date the change occurred and schedule the filing so that it is received within 30 days.</li>
<li>Prepare the attachments for each change listed above, together with the registration certificate.</li>
<li>If the move places the business under a different regional office, file with the office that has jurisdiction over the new address.</li>
<li>The processing period is 10 days, or 7 days for a change of responsible sales manager.</li>
<li>The office records the change in the register and notes it on the back of the certificate before returning it.</li>
</ol>

<h2>Qualifications when replacing the responsible sales manager</h2>
<p>The responsible sales manager handles quality control, post-market safety management and supervision of the manufacturer's testing from raw material intake to finished product release. The new manager must fall under one of the following:</p>
<ul>
<li>A physician under the Medical Service Act or a pharmacist under the Pharmaceutical Affairs Act</li>
<li>A holder of a bachelor's degree or higher in science and engineering, cosmetic science, Korean medicine, nursing or a similar field</li>
<li>A holder of an associate degree in a cosmetics-related field such as chemistry, biology or life science with at least 1 year of experience in cosmetics manufacturing or quality control</li>
<li>A person who completed a specialized training course designated by the Minister of Food and Drug Safety (designated items only)</li>
<li>A person who passed the customized cosmetics preparation manager examination</li>
<li>Any other person with at least 2 years of experience in cosmetics manufacturing or quality control</li>
</ul>
<p>In a business with 10 or fewer regular employees, a qualified representative may perform the manager's duties personally and is then deemed to be the manager. These qualification rules do not apply to a business registered only for import-agency brokerage in e-commerce.</p>
<p>A departing manager may file a notice of no longer engaging in management duties with the regional office. That is the manager's own procedure; the business must still file its change registration with the successor's documents. See also <a href="/en/blog/cosmetics-import-sales-registration-guide">our guide to registering a cosmetics importer</a>.</p>

<h2>If you miss the change registration</h2>
<p>Failing to register a change is a ground for administrative action under the Cosmetics Act, including business suspension or cancellation of registration, and the sanction becomes heavier with repeated violations. For an unregistered change of representative, trade name or manager, the 1st violation leads to a corrective order, but for an unregistered change of business address the 1st violation already carries a 1-month suspension of sales operations.</p>
<p>If the deadline has passed, align the facts and documents and file as soon as possible. Our registration support is described on the <a href="/en/services/cosmetics">cosmetics registration service page</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Where do we file if we move to another province?</p><p class="faq-a">A. If the move changes the competent regional office, file with the office for the new address within 30 days from the date of the change.</p></div>
<div class="faq-item"><p class="faq-q">Q. Our responsible sales manager suddenly resigned. What first?</p><p class="faq-a">A. Appoint a qualified successor and file the change registration with the qualification documents within 30 days. Processing takes 7 days. In a business with 10 or fewer regular employees, a qualified representative may take on the role.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is the deadline the same if only the address changed due to district reorganization?</p><p class="faq-a">A. No. An address change caused by an administrative district reorganization may be filed within 90 days.</p></div>
</div>

<div class="cta-block"><h3>Change registration deadline approaching or replacing your manager?</h3><p>Yuseon Administrative Scrivener Office prepares the document check and application with you. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=cosmetics-distributor-change-registration">Request a consultation</a></div>
<p class="author-block">Yuseon Administrative Scrivener Office (Chief Scrivener Jeong Yuseon)</p>`,
  },

  zh: {
    title: '化妆品责任销售业变更登记：适用情形、30日期限、材料与责任销售管理人更换',
    category: '化妆品',
    metaTitle: '韩国化妆品责任销售业变更登记：30日期限与所需材料',
    metaDescription: '韩国化妆品责任销售业在代表人、商号、所在地、责任销售管理人或销售类型变更时，须在30日内向地方食品医药品安全厅办理变更登记。本文说明材料、处理期限与管理人资格。',
    excerpt: '代表人、商号、所在地、责任销售管理人或责任销售类型发生变更时，须自变更事由发生之日起30日内向地方食品医药品安全厅办理变更登记。本文介绍各事项材料、处理期限、管理人资格及逾期后果。',
    content: `<div class="toc"><p>目录</p><ol><li>需要办理变更登记的事项</li><li>申请期限、管辖机关与材料</li><li>更换责任销售管理人时的资格</li><li>未办理变更登记的后果</li><li>常见问题</li></ol></div>
<p><strong>韩国化妆品责任销售业（화장품책임판매업）的代表人、商号、所在地、责任销售管理人或责任销售类型发生变更时，须自变更事由发生之日起30日内向地方食品医药品安全厅厅长申请变更登记。</strong>根据《化妆品法》，该行业属于"登记"类营业，已登记的重要事项变更时也须以相同方式登记。</p>
<p>首次登记流程请参阅<a href="/zh/blog/cosmetics-responsible-distributor">化妆品责任销售业登记指南</a>。本文聚焦已取得登记证的企业如何在期限内反映经营中的变更。</p>

<h2>需要办理变更登记的事项</h2>
<p>《化妆品法施行规则》规定了责任销售业者须办理变更登记的五种情形，各情形的附加材料与处理期限不同。</p>
<table><thead><tr><th>变更事项</th><th>申请书、登记证以外的材料</th><th>处理期限</th></tr></thead><tbody>
<tr><td>责任销售业者变更（法人为代表人变更）</td><td>如属转让，提交转让证明材料</td><td>10日</td></tr>
<tr><td>商号变更（法人为名称变更）</td><td>施行规则未另行规定材料</td><td>10日</td></tr>
<tr><td>营业所所在地变更</td><td>施行规则未另行规定材料</td><td>10日</td></tr>
<tr><td>责任销售管理人变更</td><td>可确认新管理人资格的材料</td><td>7日</td></tr>
<tr><td>责任销售类型变更</td><td>由进口代理型变更或追加其他类型时，提交质量管理及销售后安全管理标准规程与管理人资格材料</td><td>10日</td></tr>
</tbody></table>
<p>法人登记簿誊本由地方食品医药品安全厅通过行政信息共享自行确认；因继承变更营业者时，家庭关系证明书也以同样方式确认。受让人或继承人虽承继原营业者的地位，但营业者变更本身即为变更登记事项，仍须另行申请。</p>
<p>新成为营业者的人不得属于《化妆品法》规定的欠格事由，例如受成年监护者、因违反该法被判处监禁以上实刑且尚未执行完毕者、登记被撤销后未满1年者等。</p>

<h2>申请期限、管辖机关与材料</h2>
<p>期限为变更事由发生之日起30日内；因行政区划调整导致所在地变更的为90日内。须将变更登记申请书（含电子文件）连同登记证及相关材料提交地方食品医药品安全厅厅长。</p>
<ol>
<li>记录变更事由发生日，安排在30日内完成受理。</li>
<li>按上表准备各变更事项的材料，并备好登记证。</li>
<li>迁址后管辖厅不同的，向新所在地的管辖厅提交。</li>
<li>处理期限为10日，责任销售管理人变更登记为7日。</li>
<li>主管厅在登记簿记载变更事项，并在登记证背面注明后返还。</li>
</ol>

<h2>更换责任销售管理人时的资格</h2>
<p>责任销售管理人负责质量管理、销售后安全管理，以及对制造业者从原料入库到成品出库的试验检查进行监督。新任管理人须符合以下之一：</p>
<ul>
<li>《医疗法》规定的医师或《药事法》规定的药师</li>
<li>理工科或香妆学、化妆品科学、韩医学、护理学等专业学士以上学位者</li>
<li>化学、生物学、生命科学等化妆品相关专业专科学历，并从事化妆品制造或质量管理工作1年以上者</li>
<li>完成食品医药品安全处长告示的专业培训课程者（限告示品目）</li>
<li>通过定制化妆品调制管理师资格考试者</li>
<li>其他从事化妆品制造或质量管理工作2年以上者</li>
</ul>
<p>常时雇员10人以下的企业，具备上述资格的代表人可亲自履行管理人职务，视为已配置管理人。仅登记电子商务进口代理型斡旋业务的企业不适用上述资格标准。</p>
<p>原管理人离职时，本人可向管辖厅提交管理业务不从事申报书，但这是管理人本人的手续，企业仍须凭继任者资格材料另行办理变更登记。另可参阅<a href="/zh/blog/cosmetics-import-sales-registration-guide">化妆品进口销售登记指南</a>。</p>

<h2>未办理变更登记的后果</h2>
<p>未登记变更事项属于《化妆品法》规定的行政处分事由，可导致停业乃至撤销登记，违规次数越多处分越重。代表人、商号或管理人变更未登记的，第1次违规为纠正命令；营业所所在地变更未登记的，第1次违规即为停止销售业务1个月。</p>
<p>已超过期限的，应尽快整理事实与材料并提出申请。登记业务支持请见<a href="/zh/services/cosmetics">化妆品登记服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 迁往其他市、道时向哪里申请？</p><p class="faq-a">A. 若迁址导致管辖厅变化，应自变更之日起30日内向新所在地的管辖厅申请。</p></div>
<div class="faq-item"><p class="faq-q">Q. 责任销售管理人突然离职怎么办？</p><p class="faq-a">A. 选任具备资格的继任者，并在30日内附资格材料申请变更登记，处理期限为7日。常时雇员10人以下的企业也可由具备资格的代表人兼任。</p></div>
<div class="faq-item"><p class="faq-q">Q. 因行政区划调整仅地址变化，期限相同吗？</p><p class="faq-a">A. 此类所在地变更可在90日内申请。</p></div>
</div>

<div class="cta-block"><h3>变更登记期限将至或需更换管理人？</h3><p>유선행정사사무소（代表行政士 정유선）协助核对材料并准备申请书。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=cosmetics-distributor-change-registration">申请咨询</a></div>
<p class="author-block">유선행정사사무소（代表行政士 정유선）</p>`,
  },

  ja: {
    title: '化粧品責任販売業の変更登録 — 対象5項目、30日以内の申請、書類と責任販売管理者の交代',
    category: '化粧品',
    metaTitle: '韓国の化粧品責任販売業 変更登録：30日の期限と必要書類',
    metaDescription: '韓国で化粧品責任販売業の代表者・商号・所在地・責任販売管理者・責任販売類型が変わった場合の変更登録について、30日の期限、管轄の地方食品医薬品安全庁、書類、管理者資格を解説します。',
    excerpt: '代表者・商号・所在地・責任販売管理者・責任販売類型が変わったら、変更事由が生じた日から30日以内に地方食品医薬品安全庁へ変更登録を申請します。項目別の書類と処理期間、管理者の資格、怠った場合の処分を解説します。',
    content: `<div class="toc"><p>目次</p><ol><li>変更登録が必要な事項</li><li>申請期限・管轄庁・提出書類</li><li>責任販売管理者を交代するときの資格</li><li>変更登録を怠った場合</li><li>よくある質問</li></ol></div>
<p><strong>韓国の化粧品責任販売業（화장품책임판매업）では、代表者・商号・所在地・責任販売管理者・責任販売類型が変わったとき、変更事由が生じた日から30日以内に地方食品医薬品安全庁長へ変更登録を申請しなければなりません。</strong>「化粧品法」上、この業種は「登録」の対象であり、登録した重要事項を変更するときも同じく登録が必要です。</p>
<p>最初の登録手続は<a href="/ja/blog/cosmetics-responsible-distributor">化粧品責任販売業の登録ガイド</a>で扱いました。本記事では、すでに登録証を受けた事業者が営業中の変更を期限内に登録へ反映する方法に絞って説明します。</p>

<h2>変更登録が必要な事項</h2>
<p>「化粧品法施行規則」は、責任販売業者が変更登録をすべき場合を五つ定めています。項目ごとに添付書類と処理期間が異なります。</p>
<table><thead><tr><th>変更事項</th><th>申請書・登録証以外の添付書類</th><th>処理期間</th></tr></thead><tbody>
<tr><td>責任販売業者の変更（法人は代表者の変更）</td><td>譲渡・譲受の場合はそれを証明する書類</td><td>10日</td></tr>
<tr><td>商号の変更（法人は法人名称の変更）</td><td>施行規則に別途定めなし</td><td>10日</td></tr>
<tr><td>営業所所在地の変更</td><td>施行規則に別途定めなし</td><td>10日</td></tr>
<tr><td>責任販売管理者の変更</td><td>新しい管理者の資格を確認できる書類</td><td>7日</td></tr>
<tr><td>責任販売類型の変更</td><td>輸入代行型から他の類型へ変更・追加する場合、品質管理・販売後安全管理基準の規程と管理者の資格書類</td><td>10日</td></tr>
</tbody></table>
<p>法人の登記事項証明書は地方食品医薬品安全庁が行政情報の共同利用で確認し、相続による営業者変更の場合は家族関係証明書も同じ方法で確認します。譲受人や相続人は従前の営業者の地位を承継しますが、営業者の変更そのものが変更登録事項なので、申請は別途必要です。</p>
<p>新たに営業者となる人は、被成年後見人、同法違反で禁錮以上の実刑を言い渡され執行が終わっていない人、登録取消から1年を経過していない者など、「化粧品法」の欠格事由に該当してはなりません。</p>

<h2>申請期限・管轄庁・提出書類</h2>
<p>期限は変更事由が生じた日から30日以内で、行政区域の改編により所在地が変わった場合は90日以内です。変更登録申請書（電子文書を含む）に登録証と該当書類を添えて地方食品医薬品安全庁長に提出します。</p>
<ol>
<li>変更事由が生じた日を記録し、30日以内に受理されるよう日程を組みます。</li>
<li>上の表に沿って項目別の添付書類と登録証を準備します。</li>
<li>移転により管轄庁が変わる場合は、新しい所在地を管轄する庁に提出します。</li>
<li>処理期間は10日、責任販売管理者の変更登録は7日です。</li>
<li>庁は登録台帳に変更事項を記載し、登録証の裏面に変更内容を記入して返付します。</li>
</ol>

<h2>責任販売管理者を交代するときの資格</h2>
<p>責任販売管理者は品質管理、販売後の安全管理、そして原料の入庫から完成品の出庫までの試験・検査について製造業者を管理・監督する役割を担います。新たに選任する人は次のいずれかに該当する必要があります。</p>
<ul>
<li>「医療法」上の医師または「薬事法」上の薬剤師</li>
<li>理工系学科または香粧学・化粧品科学・韓医学・看護学などを専攻し学士以上の学位を取得した人</li>
<li>化学・生物学・生命科学など化粧品関連分野の専門学士学位を取得後、化粧品の製造または品質管理業務に1年以上従事した人</li>
<li>食品医薬品安全処長が告示する専門教育課程を修了した人（告示品目に限る）</li>
<li>カスタマイズ化粧品調製管理士の資格試験に合格した人</li>
<li>その他、化粧品の製造または品質管理業務に2年以上従事した人</li>
</ul>
<p>常時勤労者が10人以下の事業者では、資格を備えた代表者が自ら管理者の職務を行うことができ、その場合は管理者を置いたものとみなされます。電子商取引の輸入代行型あっせん営業のみを登録した事業者には、上記の資格基準は適用されません。</p>
<p>前任の管理者が退職した場合、本人は管理業務非従事の申告書を管轄庁に提出できます。ただしこれは管理者本人の手続であり、事業者は後任者の資格書類をそろえて別途変更登録をする必要があります。<a href="/ja/blog/cosmetics-import-sales-registration-guide">化粧品輸入販売の登録ガイド</a>もあわせてご覧ください。</p>

<h2>変更登録を怠った場合</h2>
<p>変更事項を登録しないと「化粧品法」上の行政処分事由となり、業務停止や登録取消に至ることもあり、違反回数が重なるほど処分は重くなります。代表者・商号・管理者の変更を登録しなかった場合、1次違反は是正命令ですが、営業所所在地の変更を登録しなかった場合は1次違反から販売業務停止1か月と定められています。</p>
<p>すでに期限を過ぎている場合は、事実関係と書類を整えてすぐに申請することが先決です。登録業務のサポートは<a href="/ja/services/cosmetics">化粧品登録サービス</a>をご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 他の市・道へ事務所を移す場合、どこに申請しますか。</p><p class="faq-a">A. 移転により管轄の地方食品医薬品安全庁が変わる場合は、変更日から30日以内に新しい所在地の管轄庁へ申請します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 責任販売管理者が急に退職しました。まず何をすべきですか。</p><p class="faq-a">A. 資格を満たす後任者を選任し、30日以内に資格書類を添えて変更登録を申請します。処理期間は7日です。常時勤労者10人以下の事業者なら、資格を持つ代表者が兼ねることもできます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 行政区域の改編で住所だけが変わった場合も期限は同じですか。</p><p class="faq-a">A. 行政区域改編による所在地変更は90日以内に申請すれば足ります。</p></div>
</div>

<div class="cta-block"><h3>変更登録の期限が迫っている、または管理者を交代する場合</h3><p>ユソン行政士事務所が項目別の書類確認と申請書の準備をお手伝いします。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=cosmetics-distributor-change-registration">相談を申し込む</a></div>
<p class="author-block">ユソン行政士事務所（代表行政士 チョン・ユソン）</p>`,
  },
}
