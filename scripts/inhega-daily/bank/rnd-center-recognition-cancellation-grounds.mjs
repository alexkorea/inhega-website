// 원고 은행 보충 — BANK-REFILL-1029(2026-10-29, 맥4 하위 작성)
// 주제: research-lab(기업부설연구소설립) / 세부주제: penalties(위반 시 제재)
//
// 겹침 검사(blog-posts-data.ts·blog-i18n.ts·bank 대조):
//   rnd-center-post-management(사후관리 개관 — 변경신고 30일·실태조사 절차·체크리스트, 취소 사유는 5줄 요약이고
//     "인력 미달 3개월 지속"·"5년 소급 추징" 등 현행 법령에서 확인되지 않는 서술 포함),
//   corporate-rnd-center-requirements(인정 요건), corporate-research-lab-required-documents(신청 서류),
//   rnd-center-relocation-dissolution-guide(이전·폐쇄), rnd-center-tax-credit(세액공제), rnd-department-vs-center,
//   corporate-research-lab-establishment-guide / agency-risk-guide.
//   → 이 글은 "인정취소" 하나만 판다: 법 제8조 10개 사유를 필수 취소(제1~3호)와 재량 취소(제4~10호)로 나눈 표,
//     변경신고 30일(영)과 1년(법 취소 사유)의 관계, 보완명령 1개월·연장 2개월, 청문 15일 전 통지와 생략 사유,
//     거짓 인정·거짓 변경신고 취소 시 1년 재신청 제한, 우수 기업부설연구소 지정 동반 취소, 사칭 금지.
//     실태조사 절차·세액공제는 쓰지 않고 링크로 넘긴다.
//
// 법령 대조(law.go.kr DRF, OC=visionlaw, lawfetch.py, 2026-10-29 조회):
//   현행 법률 확인: 기업부설연구소등의 연구개발 지원에 관한 법률 = 현행(MST 282553, 2026. 2. 1. 시행, 제정 법률 제20727호).
//     기초연구진흥 및 기술개발지원에 관한 법률(MST 268777) 제14조의2~제14조의6 은 "삭제" — 연구소 인정 근거가 아니다.
//     부칙(제20727호) 제4조: 종전 법률로 인정된 기업부설연구소등은 이 법에 따라 인정받은 것으로 본다.
//   기업부설연구소등의 연구개발 지원에 관한 법률   MST 282553, 2026. 2. 1. 시행
//     제7조 제4항·제5항·제6항, 제8조 제1항~제4항, 제9조, 제16조 제4항·제6항, 제21조 제1항·제2항, 제27조(과태료 — 대상만)
//   같은 법 시행령   MST 282915, 2026. 2. 1. 시행   제7조 제2항·제3항, 제9조, 제13조 제5항, 제16조 제1항 제6호·제7호
//   같은 법 시행규칙 MST 283223, 2026. 2. 1. 시행   제5조 제1항·제2항, 제6조, 제8조 제1항
// 인허가 구분: 기업부설연구소·연구개발전담부서 = 과학기술정보통신부장관의 "인정"(업무는 한국산업기술진흥협회 위탁).
//   등록·허가 아님. 바뀐 사항은 "변경신고". 제재는 "인정취소"(등록취소·허가취소 아님).
// 조정·확인 못 한 점:
//   - 변경신고 기한: 영 제7조 제2항은 30일 이내, 법 제8조 제1항 제5호의 취소 사유는 "1년 이내에 하지 아니한 경우" →
//     30일은 의무 기한, 1년은 취소 사유 기준으로 구분 서술. 30일~1년 사이 지연의 별도 제재는 법령에 없어 쓰지 않음.
//   - 인정취소에 따른 세액공제 등 조세 효과는 조세특례제한법 대조 범위 밖이라 쓰지 않고 rnd-center-tax-credit 로 넘김.
//   - 과태료 금액(법 제27조)은 화면 금액 금지라 "과태료 대상"으로만 서술. 시행령 별표 3 부과기준도 쓰지 않음.
//   - "활동이 없다고 인정할 만한 상당한 이유"의 구체 판단기준은 법령에 없어 예시를 들지 않음.
// 대조표: crosscheck/rnd-center-recognition-cancellation-grounds.md

const SLUG = 'rnd-center-recognition-cancellation-grounds'

const entry = {
  topic: 'research-lab',
  angle: 'penalties',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '기업부설연구소 인정취소',
  pexelsId: 11589239,
  coverImage: '',
  relatedServices: [
    { title: '기업부설연구소 설립', href: '/services/research-lab' },
  ],

  ko: {
    title: '기업부설연구소 인정취소 — 반드시 취소되는 사유와 변경신고 누락의 결과',
    category: '기업부설연구소',
    metaTitle: '기업부설연구소 인정취소 — 취소 사유 10가지와 변경신고 1년 기준',
    metaDescription: '기업부설연구소 인정취소 사유는 법률에 10가지로 정해져 있고, 그중 거짓 인정·기업 요청·폐업은 반드시 취소됩니다. 변경신고 30일과 1년 기준, 보완명령, 청문과 재신청 제한을 안내합니다.',
    excerpt: '기업부설연구소는 거짓 인정, 폐업 같은 사유가 있으면 반드시, 변경신고를 1년 넘게 하지 않거나 보완명령을 이행하지 않으면 재량으로 인정이 취소될 수 있습니다. 사유별 구분, 청문 절차, 취소 뒤 재신청 제한과 우수 연구소 지정 취소까지 다룹니다.',
    content: `<div class="toc"><p>목차</p><ol><li>인정취소 사유 — 반드시 취소와 취소할 수 있음</li><li>변경신고 누락과 보완명령이 취소로 이어지는 경로</li><li>취소 절차와 취소 뒤의 결과</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>기업부설연구소와 연구개발전담부서의 인정취소 사유는 「기업부설연구소등의 연구개발 지원에 관한 법률」에 10가지로 정해져 있고, 거짓·부정한 방법의 인정이나 변경신고, 기업의 취소 요청, 기업의 폐업은 반드시 취소되며, 변경신고를 사유 발생일부터 1년 이내에 하지 않은 경우 등 나머지 7가지는 취소될 수 있는 사유입니다.</strong><!-- 근거: 기업부설연구소등의 연구개발 지원에 관한 법률 제8조 제1항 --> 연구소는 허가나 등록이 아니라 과학기술정보통신부장관의 인정을 받는 제도이고, 접수와 인정취소 실무는 한국산업기술진흥협회가 위탁받아 처리합니다.<!-- 근거: 같은 법 제7조 제1항, 같은 법 시행령 제16조 제1항 제4호·제6호·제7호 --> 2026년 2월 1일 이 법 시행 전에 인정받은 연구소도 이 법에 따라 인정받은 것으로 보므로 같은 취소 기준이 적용됩니다.<!-- 근거: 같은 법 부칙(법률 제20727호) 제1조·제4조 --></p>
<p>인정 요건은 <a href="/blog/corporate-rnd-center-requirements">기업부설연구소 설립 요건과 인원 기준</a>에서, 실태조사 대응은 <a href="/blog/rnd-center-post-management">기업부설연구소 변경신고와 사후관리</a>에서 다룹니다. 여기서는 인정이 취소되는 사유와 그 뒤의 결과에 집중합니다.</p>

<h2>인정취소 사유 — 반드시 취소와 취소할 수 있음</h2>
<table><thead><tr><th>취소 사유</th><th>구분</th></tr></thead><tbody>
<tr><td>거짓이나 그 밖의 부정한 방법으로 인정을 받거나 변경신고를 한 경우</td><td>반드시 취소</td></tr>
<tr><td>기업이 스스로 인정취소를 요청한 경우(별도 취소 사유가 있으면 제외)</td><td>반드시 취소</td></tr>
<tr><td>연구소를 운영하는 기업이 폐업한 경우</td><td>반드시 취소</td></tr>
<tr><td>연구소 폐쇄 사실이 확인된 경우</td><td>취소할 수 있음</td></tr>
<tr><td>변경신고를 사유 발생일부터 1년 이내에 하지 않은 경우<!-- 근거: 기업부설연구소등의 연구개발 지원에 관한 법률 제8조 제1항 제5호 --></td><td>취소할 수 있음</td></tr>
<tr><td>보완명령을 기간 안에 이행하지 않은 경우</td><td>취소할 수 있음</td></tr>
<tr><td>준수사항을 위반한 경우</td><td>취소할 수 있음</td></tr>
<tr><td>다른 법률의 제한으로 연구개발 수행이 불가능해진 경우</td><td>취소할 수 있음</td></tr>
<tr><td>현장조사를 정당한 사유 없이 거부·방해·기피한 경우</td><td>취소할 수 있음</td></tr>
<tr><td>연구소 활동이 없다고 인정할 만한 상당한 이유가 있는 경우</td><td>취소할 수 있음</td></tr>
</tbody></table>
<p>준수사항 위반은 범위가 넓습니다. 연구전담요원은 생산·판매·영업 등 다른 업무를 겸하지 않아야 하고, 단독주택·공동주택이나 허가받지 않은 건물·가건물에 연구소를 둘 수 없으며, 매년 연구개발 실적과 요청받은 자료를 내야 합니다.<!-- 근거: 기업부설연구소등의 연구개발 지원에 관한 법률 제9조 제1호~제4호 --> 시행령은 여기에 연구 외 업무를 맡을 상시 종업원을 둘 것, 하나의 주소지에 둘 것, 연구전담요원과 연구보조원이 연구시설에서 근무할 것을 더합니다.<!-- 근거: 같은 법 시행령 제9조 제1호~제3호 --> 창업일부터 3년이 지나지 않은 소기업의 대표자가 연구전담요원을 겸하는 경우는 겸업 금지의 예외입니다.<!-- 근거: 같은 법 제9조 제1호 단서 --></p>

<h2>변경신고 누락과 보완명령이 취소로 이어지는 경로</h2>
<p>기업의 명칭·소재지·대표자·기업 유형·업종이나 연구소의 명칭·소재지·연구 분야·연구소장·연구개발인력·연구공간이 바뀌면 변경신고 대상입니다. 신고는 사유가 생긴 날부터 30일 이내에 변경사항 증명 서류를 붙여 한국산업기술진흥협회에 냅니다.<!-- 근거: 같은 법 제7조 제4항, 같은 법 시행령 제7조 제2항, 같은 법 시행규칙 제5조 제1항·제2항 --> 30일은 지켜야 할 기한이고, 1년이 지나도록 신고하지 않으면 그때부터는 인정취소 사유가 됩니다. 거짓으로 변경신고를 했다면 기간과 상관없이 반드시 취소됩니다.<!-- 근거: 같은 법 제8조 제1항 제1호·제5호 --></p>
<p>연구원 퇴사로 인원이 기준에 못 미치는 등 인정기준을 충족하지 못하게 되면 1개월 이상의 기간을 정한 보완명령이 먼저 나옵니다. 보완 기간은 1개월이 원칙이고, 기업이 신청하면 2개월 범위에서 연장될 수 있습니다.<!-- 근거: 같은 법 제7조 제5항, 같은 법 시행령 제7조 제3항, 같은 법 시행규칙 제6조 --> 바뀐 사항이 생기면 다음 순서로 처리하십시오.</p>
<ol><li>바뀐 날(퇴사일, 이전일, 대표자 변경일 등)을 확정합니다.</li><li>그날부터 30일 이내를 신고 기한으로 잡습니다.<!-- 근거: 같은 법 시행령 제7조 제2항 --></li><li>인원·공간이 인정기준에 못 미치게 되었는지 함께 확인합니다.</li><li>미달이면 충원·공간 보완 계획을 세워 두고, 보완명령이 오면 기간 안에 이행하거나 연장을 신청합니다.<!-- 근거: 같은 법 시행규칙 제6조 --></li><li>변경신고서와 증명 서류를 사실대로 작성해 제출합니다.</li></ol>

<h2>취소 절차와 취소 뒤의 결과</h2>
<p>인정을 취소하려면 청문을 거쳐야 하고, 청문 15일 전까지 연구소 명칭과 주소, 취소 원인 사실, 의견 제출 방법과 기한, 청문일자와 취소 예정일이 기업에 통지됩니다. 기업 요청이나 폐업에 따른 취소, 의견진술 기회를 명백히 포기한 경우에는 청문을 생략할 수 있습니다.<!-- 근거: 같은 법 제8조 제2항·제3항 --> 현장조사는 원칙적으로 조사 개시 7일 전까지 서면으로 통지되며, 이를 정당한 사유 없이 거부하면 취소 사유이자 과태료 대상입니다.<!-- 근거: 같은 법 제21조 제1항·제2항, 제8조 제1항 제9호, 제27조 제2항 제1호 --></p>
<p>거짓이나 부정한 방법으로 인정을 받거나 변경신고를 해서 취소된 기업은 취소된 날부터 1년이 지날 때까지 다시 인정을 신청할 수 없습니다.<!-- 근거: 같은 법 제8조 제4항 --> 우수 기업부설연구소로 지정되어 있었다면 인정취소와 함께 지정도 반드시 취소되고 지정서를 반납해야 합니다.<!-- 근거: 같은 법 제16조 제4항 제2호, 같은 법 시행령 제13조 제5항 --> 취소 뒤에도 인정받은 연구소라고 표시하면 사칭으로 과태료 대상이 됩니다. 연구소 인정을 전제로 한 세제 혜택은 <a href="/blog/rnd-center-tax-credit">기업부설연구소 세액공제</a>에서 따로 확인하십시오.<!-- 근거: 같은 법 제7조 제6항, 제27조 제3항 제1호 --></p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 변경신고를 30일 넘겨 늦게 하면 바로 취소되나요?<!-- 근거: 기업부설연구소등의 연구개발 지원에 관한 법률 시행령 제7조 제2항 --></p><p class="faq-a">A. 30일은 신고 기한이고, 법률상 취소 사유는 사유 발생일부터 1년 이내에 신고하지 않은 경우입니다. 기한을 넘겼다면 1년이 되기 전에 사실대로 신고하십시오.<!-- 근거: 같은 법 시행령 제7조 제2항, 같은 법 제8조 제1항 제5호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 연구원이 퇴사해 인원이 부족해졌습니다. 곧바로 취소되나요?<!-- 근거: 기업부설연구소등의 연구개발 지원에 관한 법률 시행령 제7조 제2항 --></p><p class="faq-a">A. 인정기준 미달이면 먼저 1개월 이상의 기간을 정한 보완명령이 나옵니다. 그 기간 안에 충원하지 못하면 취소될 수 있으므로 연장 신청 여부도 함께 검토하십시오.<!-- 근거: 같은 법 제7조 제5항, 제8조 제1항 제6호, 같은 법 시행규칙 제6조 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 취소된 뒤 다시 인정받을 수 있나요?</p><p class="faq-a">A. 거짓·부정한 방법으로 취소된 경우에만 1년의 재신청 제한이 있습니다. 그 밖의 사유라면 인정기준을 다시 갖추어 신청할 수 있습니다.<!-- 근거: 같은 법 제8조 제4항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 연구소를 집이나 가건물로 옮겨도 되나요?</p><p class="faq-a">A. 단독주택·공동주택, 허가받지 않은 건물이나 가건물에는 연구소를 둘 수 없고, 위반하면 취소 사유가 됩니다.<!-- 근거: 같은 법 제9조 제2호, 제8조 제1항 제7호 --></p></div>
</div>

<div class="cta-block"><h3>인정취소 전에 변경신고와 보완부터 점검하세요</h3><p>유선행정사사무소가 변경신고서 작성, 보완명령 대응 서류, 청문 의견서 준비를 돕습니다. 진행 범위는 <a href="/services/research-lab">기업부설연구소 설립 안내</a>에서 확인하실 수 있습니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 기업부설연구소등의 연구개발 지원에 관한 법률 제7조·제8조·제9조·제16조·제21조·제27조·부칙, 같은 법 시행령 제7조·제9조·제13조·제16조, 같은 법 시행규칙 제5조·제6조 --></p>`,
  },

  en: {
    title: 'Cancellation of Corporate R&D Center Recognition in Korea — Mandatory Grounds and Consequences of a Missed Change Report',
    category: 'Corporate R&D Center',
    metaTitle: 'Corporate R&D Center Recognition Cancellation in Korea — 10 Grounds',
    metaDescription: 'Korean law lists 10 grounds for cancelling corporate R&D center recognition. Three are mandatory. Change reports, correction orders and hearings explained.',
    excerpt: 'Recognition of a corporate R&D center must be cancelled for false recognition, a company request or closure, and may be cancelled if a change report is not filed within 1 year or a correction order is ignored. Grounds, hearing procedure, the reapplication bar and loss of excellent-center designation.',
    content: `<div class="toc"><p>Contents</p><ol><li>Mandatory and discretionary grounds</li><li>How missed change reports and correction orders lead to cancellation</li><li>Procedure and what follows cancellation</li><li>FAQ</li></ol></div>
<p><strong>The Act on Support for Research and Development of Corporate Research Institutes lists 10 grounds for cancelling the recognition of a corporate R&D center (기업부설연구소) or dedicated R&D department. Recognition or a change report obtained by false or fraudulent means, a request by the company and closure of the company lead to mandatory cancellation; the other 7, such as not filing a change report within 1 year, are discretionary.</strong> This is a <em>recognition</em> by the Minister of Science and ICT, not a permit or registration, and the Korea Industrial Technology Association (KOITA) handles filings and cancellations on the Minister's behalf. Centers recognised before the Act took effect on 1 February 2026 are treated as recognised under it, so the same rules apply.</p>
<p>Recognition requirements are covered in <a href="/en/blog/corporate-rnd-center-requirements">our corporate R&D center requirements guide</a>. This page focuses on cancellation and its consequences.</p>

<h2>Mandatory and discretionary grounds</h2>
<table><thead><tr><th>Ground</th><th>Type</th></tr></thead><tbody>
<tr><td>Recognition or a change report obtained by false or fraudulent means</td><td>Mandatory</td></tr>
<tr><td>The company requests cancellation (unless another ground exists)</td><td>Mandatory</td></tr>
<tr><td>The company closes its business</td><td>Mandatory</td></tr>
<tr><td>Closure of the center is confirmed</td><td>Discretionary</td></tr>
<tr><td>No change report within 1 year of the change</td><td>Discretionary</td></tr>
<tr><td>A correction order is not carried out in time</td><td>Discretionary</td></tr>
<tr><td>Breach of the compliance duties</td><td>Discretionary</td></tr>
<tr><td>Research becomes impossible due to restrictions under other laws</td><td>Discretionary</td></tr>
<tr><td>Refusing, obstructing or evading an on-site inspection without good reason</td><td>Discretionary</td></tr>
<tr><td>Substantial reason to believe the center is inactive</td><td>Discretionary</td></tr>
</tbody></table>
<p>The compliance duties are broad. Dedicated researchers must not also handle production, sales or other business work; the center cannot be in a detached house, multi-unit housing, an unpermitted building or a temporary structure; and the company must submit R&D results every year and any data requested. The Decree adds that non-research staff must be employed, the center must be at one address and researchers must work in the research facility. A small company's representative within 3 years of founding may double as a dedicated researcher.</p>

<h2>How missed change reports and correction orders lead to cancellation</h2>
<p>A change report is required when the company's name, address, representative, company type or industry changes, or when the center's name, address, research field, head, research staff or research space changes. File it with KOITA, with supporting documents, within 30 days of the change. The 30 days are the filing deadline; failing to report for 1 year makes it a ground for cancellation. A false change report leads to mandatory cancellation regardless of timing.</p>
<p>If the center no longer meets the recognition standards, for example because a researcher left, a correction order with a period of at least 1 month comes first. The period is 1 month in principle and can be extended by up to 2 months at the company's request. When something changes:</p>
<ol><li>Fix the date of the change, such as a resignation, move or new representative.</li><li>Count 30 days from that date as your filing deadline.</li><li>Check whether staff or space now falls short of the standards.</li><li>If so, plan hiring or space fixes, and meet any correction order in time or request an extension.</li><li>File an accurate change report with supporting documents.</li></ol>

<h2>Procedure and what follows cancellation</h2>
<p>Cancellation requires a hearing. At least 15 days before it, the company is notified of the center's name and address, the facts behind the cancellation, how and by when to submit opinions, and the hearing and planned cancellation dates. The hearing may be skipped for cancellations on request or after closure, or where the company clearly waives its right to state an opinion. On-site inspections are in principle notified in writing at least 7 days in advance, and refusing one without good reason is both a ground for cancellation and subject to an administrative fine.</p>
<p>A company whose recognition was cancelled for false or fraudulent recognition or change reporting cannot reapply until 1 year after cancellation. If the center was designated an excellent corporate R&D center, that designation must also be cancelled and the certificate returned. Continuing to present the center as recognised after cancellation is false representation subject to an administrative fine. For tax effects, see <a href="/en/blog/rnd-center-tax-credit">our R&D center tax credit guide</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Is recognition cancelled immediately if I file a change report after 30 days?</p><p class="faq-a">A. The 30 days are the filing deadline; the cancellation ground is failing to report within 1 year. If you are late, file accurately before 1 year passes.</p></div>
<div class="faq-item"><p class="faq-q">Q. A researcher left and we are short of staff. Is recognition cancelled at once?</p><p class="faq-a">A. A correction order with a period of at least 1 month comes first. If you cannot hire in time, cancellation is possible, so consider requesting an extension.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can we be recognised again after cancellation?</p><p class="faq-a">A. Only cancellation for false or fraudulent means carries the 1-year bar. Otherwise you can reapply once you meet the standards again.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can the center move to a house or a temporary structure?</p><p class="faq-a">A. No. Houses, multi-unit housing, unpermitted buildings and temporary structures are excluded, and a breach is a ground for cancellation. For help, see <a href="/en/services/research-lab">our corporate R&D center service</a>.</p></div>
</div>

<div class="cta-block"><h3>Check change reports and corrections before cancellation</h3><p>YouSun Administrative Agency helps prepare change reports, responses to correction orders and opinion statements for hearings. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '企业附属研究所认定撤销 — 必须撤销的事由与漏报变更申报的后果',
    category: '企业附属研究所',
    metaTitle: '企业附属研究所认定撤销 — 10项撤销事由与变更申报1年标准',
    metaDescription: '韩国法律规定了10项企业附属研究所认定撤销事由，其中虚假认定、企业申请撤销和企业歇业属于必须撤销。另含变更申报30日与1年标准、补正命令、听证及重新申请限制。',
    excerpt: '企业附属研究所存在虚假认定、歇业等事由时必须撤销认定；超过1年未办理变更申报或未履行补正命令的，也可能被撤销。内容包括事由分类、听证程序、撤销后的重新申请限制以及优秀研究所指定的撤销。',
    content: `<div class="toc"><p>目录</p><ol><li>认定撤销事由 — 必须撤销与可以撤销</li><li>漏报变更申报与补正命令导致撤销的路径</li><li>撤销程序与撤销后的结果</li><li>常见问题</li></ol></div>
<p><strong>韩国《企业附属研究所等研究开发支援法》规定了10项企业附属研究所（기업부설연구소）及研究开发专门部门的认定撤销事由。以虚假或不正当方法取得认定或办理变更申报、企业申请撤销、企业歇业的，必须撤销；自事由发生之日起1年内未办理变更申报等其余7项，属于可以撤销的事由。</strong>研究所不是许可或登记，而是由科学技术信息通信部长官作出的<em>认定</em>，受理与撤销实务委托韩国产业技术振兴协会（KOITA）办理。该法于2026年2月1日施行，施行前已获认定的研究所视为依该法认定，适用相同的撤销标准。</p>
<p>认定条件请参阅<a href="/zh/blog/corporate-rnd-center-requirements">企业附属研究所设立条件</a>。本文聚焦于撤销事由及其后果。</p>

<h2>认定撤销事由 — 必须撤销与可以撤销</h2>
<table><thead><tr><th>撤销事由</th><th>分类</th></tr></thead><tbody>
<tr><td>以虚假或不正当方法取得认定或办理变更申报</td><td>必须撤销</td></tr>
<tr><td>企业自行申请撤销认定（另有撤销事由的除外）</td><td>必须撤销</td></tr>
<tr><td>运营研究所的企业歇业</td><td>必须撤销</td></tr>
<tr><td>确认研究所已关闭</td><td>可以撤销</td></tr>
<tr><td>自事由发生之日起1年内未办理变更申报</td><td>可以撤销</td></tr>
<tr><td>未在期限内履行补正命令</td><td>可以撤销</td></tr>
<tr><td>违反遵守事项</td><td>可以撤销</td></tr>
<tr><td>因其他法律的限制而无法进行研究开发</td><td>可以撤销</td></tr>
<tr><td>无正当理由拒绝、妨碍或逃避现场调查</td><td>可以撤销</td></tr>
<tr><td>有相当理由认定研究所无实际活动</td><td>可以撤销</td></tr>
</tbody></table>
<p>遵守事项范围很广。研究专职人员不得兼任生产、销售、营业等其他业务；研究所不得设在独栋住宅、共同住宅、未经许可的建筑或临时建筑；每年须提交研究开发业绩及被要求的资料。施行令还要求配备负责研究以外业务的常设员工、研究所设在一个地址、研究专职人员和研究辅助人员在研究设施内工作。创业未满3年的小企业代表人兼任研究专职人员的，属于兼职禁止的例外。</p>

<h2>漏报变更申报与补正命令导致撤销的路径</h2>
<p>企业的名称、所在地、代表人、企业类型、行业，或研究所的名称、所在地、研究领域、研究所所长、研究开发人员、研究空间发生变化的，须办理变更申报。须自事由发生之日起30日内，附上证明材料向韩国产业技术振兴协会提交。30日是应遵守的期限，超过1年仍未申报的，即构成认定撤销事由。虚假变更申报则无论时间长短都必须撤销。</p>
<p>因研究人员离职等导致不符合认定标准时，会先下达期限为1个月以上的补正命令。补正期限原则上为1个月，企业申请时可在2个月范围内延长。发生变化时，请按以下顺序处理：</p>
<ol><li>确定变化发生的日期（离职日、搬迁日、代表人变更日等）。</li><li>以该日起30日内作为申报期限。</li><li>同时确认人员和空间是否已低于认定标准。</li><li>如低于标准，提前制定补充人员或空间的计划，收到补正命令后在期限内履行或申请延长。</li><li>如实填写变更申报书并附证明材料提交。</li></ol>

<h2>撤销程序与撤销后的结果</h2>
<p>撤销认定须经过听证。听证15日前，会向企业通知研究所名称与地址、撤销原因事实、提交意见的方法与期限、听证日期及预定撤销日。因企业申请或歇业而撤销，或企业明确放弃陈述意见机会的，可以不举行听证。现场调查原则上在开始7日前书面通知，无正当理由拒绝的，既构成撤销事由，也会被处以过怠金。</p>
<p>因以虚假或不正当方法取得认定或办理变更申报而被撤销的企业，自撤销之日起满1年前不得重新申请认定。若研究所曾被指定为优秀企业附属研究所，该指定也必须一并撤销，并须交还指定书。撤销后仍标示为已认定研究所的，属于冒称，会被处以过怠金。税收方面的影响请参阅<a href="/zh/blog/rnd-center-tax-credit">研究所税额抵免指南</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 超过30日才办理变更申报，会立即被撤销吗？</p><p class="faq-a">A. 30日是申报期限，法律上的撤销事由是自事由发生之日起1年内未申报。如已逾期，请在满1年前如实申报。</p></div>
<div class="faq-item"><p class="faq-q">Q. 研究人员离职导致人数不足，会立即被撤销吗？</p><p class="faq-a">A. 会先下达期限为1个月以上的补正命令。期限内无法补充人员的可能被撤销，请同时考虑申请延长。</p></div>
<div class="faq-item"><p class="faq-q">Q. 被撤销后还能再次获得认定吗？</p><p class="faq-a">A. 只有因虚假或不正当方法被撤销的，才有1年的重新申请限制。其他事由在重新具备认定标准后即可申请。</p></div>
<div class="faq-item"><p class="faq-q">Q. 研究所可以搬到住宅或临时建筑吗？</p><p class="faq-a">A. 不可以。住宅、未经许可的建筑和临时建筑均被排除，违反即构成撤销事由。相关协助请参阅<a href="/zh/services/research-lab">企业附属研究所设立服务</a>。</p></div>
</div>

<div class="cta-block"><h3>在撤销之前，先检查变更申报与补正</h3><p>YouSun Administrative Agency 协助撰写变更申报书、补正命令应对材料以及听证意见书。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '企業附設研究所の認定取消し — 必ず取り消される事由と変更申告漏れの結果',
    category: '企業附設研究所',
    metaTitle: '企業附設研究所の認定取消し — 取消事由10項目と変更申告1年基準',
    metaDescription: '韓国の企業附設研究所の認定取消事由は法律で10項目定められ、虚偽の認定、企業の要請、廃業は必ず取り消されます。変更申告の30日と1年の基準、補完命令、聴聞と再申請制限も扱います。',
    excerpt: '企業附設研究所は、虚偽の認定や廃業などがあれば必ず、変更申告を1年以上しなかったり補完命令を履行しなかったりすれば裁量で認定が取り消されることがあります。事由の区分、聴聞手続、取消し後の再申請制限、優秀研究所指定の取消しまで扱います。',
    content: `<div class="toc"><p>目次</p><ol><li>認定取消事由 — 必ず取消しと取り消すことができる場合</li><li>変更申告漏れと補完命令が取消しにつながる経路</li><li>取消手続と取消し後の結果</li><li>よくある質問</li></ol></div>
<p><strong>韓国の「企業附設研究所等の研究開発支援に関する法律」は、企業附設研究所（기업부설연구소）と研究開発専担部署の認定取消事由を10項目定めています。虚偽・不正な方法による認定や変更申告、企業による取消しの要請、企業の廃業は必ず取り消され、事由発生日から1年以内に変更申告をしなかった場合など残りの7項目は、取り消すことができる事由です。</strong>研究所は許可や登録ではなく科学技術情報通信部長官の<em>認定</em>を受ける制度で、受付と認定取消しの実務は韓国産業技術振興協会（KOITA）が委託を受けて処理します。同法は2026年2月1日に施行され、それ以前に認定された研究所も同法による認定とみなされるため、同じ取消基準が適用されます。</p>
<p>認定要件は<a href="/ja/blog/corporate-rnd-center-requirements">企業附設研究所の設立要件</a>をご覧ください。ここでは取消事由とその後の結果に絞ります。</p>

<h2>認定取消事由 — 必ず取消しと取り消すことができる場合</h2>
<table><thead><tr><th>取消事由</th><th>区分</th></tr></thead><tbody>
<tr><td>虚偽その他不正な方法で認定を受け、または変更申告をした場合</td><td>必ず取消し</td></tr>
<tr><td>企業が自ら認定取消しを要請した場合（別の取消事由がある場合を除く）</td><td>必ず取消し</td></tr>
<tr><td>研究所を運営する企業が廃業した場合</td><td>必ず取消し</td></tr>
<tr><td>研究所の閉鎖が確認された場合</td><td>取り消すことができる</td></tr>
<tr><td>事由発生日から1年以内に変更申告をしなかった場合</td><td>取り消すことができる</td></tr>
<tr><td>補完命令を期間内に履行しなかった場合</td><td>取り消すことができる</td></tr>
<tr><td>遵守事項に違反した場合</td><td>取り消すことができる</td></tr>
<tr><td>他の法律による制限で研究開発ができなくなった場合</td><td>取り消すことができる</td></tr>
<tr><td>現場調査を正当な理由なく拒否・妨害・忌避した場合</td><td>取り消すことができる</td></tr>
<tr><td>研究所の活動がないと認めるに足りる相当な理由がある場合</td><td>取り消すことができる</td></tr>
</tbody></table>
<p>遵守事項の範囲は広いです。研究専担要員は生産・販売・営業など他の業務を兼ねてはならず、一戸建て住宅・共同住宅や許可を受けていない建物・仮設建物に研究所を置くことはできず、毎年研究開発の実績と求められた資料を提出しなければなりません。施行令はさらに、研究以外の業務を担う常勤従業員を置くこと、一つの所在地に置くこと、研究専担要員と研究補助員が研究施設で勤務することを求めます。創業から3年が経過していない小企業の代表者が研究専担要員を兼ねる場合は、兼業禁止の例外です。</p>

<h2>変更申告漏れと補完命令が取消しにつながる経路</h2>
<p>企業の名称・所在地・代表者・企業類型・業種、または研究所の名称・所在地・研究分野・研究所長・研究開発人材・研究空間が変わると、変更申告の対象になります。事由が生じた日から30日以内に、変更を証明する書類を添えて韓国産業技術振興協会に提出します。30日は守るべき期限で、1年を過ぎても申告しなければ認定取消事由になります。虚偽の変更申告は期間に関係なく必ず取り消されます。</p>
<p>研究員の退職などで認定基準を満たさなくなると、まず1か月以上の期間を定めた補完命令が出されます。補完期間は1か月が原則で、企業が申請すれば2か月の範囲で延長されることがあります。変更が生じたら、次の順序で対応してください。</p>
<ol><li>変更が生じた日（退職日、移転日、代表者変更日など）を確定します。</li><li>その日から30日以内を申告期限とします。</li><li>人員・空間が認定基準を下回っていないか併せて確認します。</li><li>下回っていれば充員・空間補完の計画を立て、補完命令が出たら期間内に履行するか延長を申請します。</li><li>変更申告書と証明書類を事実どおりに作成して提出します。</li></ol>

<h2>取消手続と取消し後の結果</h2>
<p>認定を取り消すには聴聞を経なければならず、聴聞の15日前までに、研究所の名称と住所、取消しの原因となる事実、意見提出の方法と期限、聴聞日と取消予定日が企業に通知されます。企業の要請や廃業による取消し、意見陳述の機会を明確に放棄した場合は、聴聞を省略できます。現場調査は原則として開始の7日前までに書面で通知され、正当な理由なく拒否すると取消事由となるうえ、過怠料の対象にもなります。</p>
<p>虚偽・不正な方法による認定や変更申告を理由に取り消された企業は、取消日から1年が経過するまで再び認定を申請できません。優秀企業附設研究所に指定されていた場合は、指定も必ず取り消され、指定書を返納しなければなりません。取消し後も認定研究所であると表示すると詐称となり、過怠料の対象です。税制面の影響は<a href="/ja/blog/rnd-center-tax-credit">研究所の税額控除ガイド</a>でご確認ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 変更申告が30日を過ぎたら、すぐに取り消されますか。</p><p class="faq-a">A. 30日は申告期限で、法律上の取消事由は事由発生日から1年以内に申告しなかった場合です。遅れた場合は、1年が経つ前に事実どおり申告してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 研究員が退職して人数が足りません。すぐに取り消されますか。</p><p class="faq-a">A. まず1か月以上の期間を定めた補完命令が出されます。期間内に充員できなければ取り消されることがあるため、延長申請も検討してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 取消し後に再び認定を受けられますか。</p><p class="faq-a">A. 1年の再申請制限があるのは、虚偽・不正な方法で取り消された場合だけです。その他の事由なら、認定基準を再び満たせば申請できます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 研究所を自宅や仮設建物に移してもよいですか。</p><p class="faq-a">A. いいえ。住宅、許可を受けていない建物や仮設建物には置けず、違反すれば取消事由になります。ご相談は<a href="/ja/services/research-lab">企業附設研究所設立サービス</a>をご覧ください。</p></div>
</div>

<div class="cta-block"><h3>取消しの前に変更申告と補完の点検を</h3><p>YouSun Administrative Agency が変更申告書の作成、補完命令への対応書類、聴聞の意見書の準備をお手伝いします。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  wrongTerms: ['기업부설연구소 등록취소', '기업부설연구소 허가', '연구소 설립허가', '연구소 등록증', 'research center license', 'research center permit', '研究所许可', '研究所登记', '研究所許可', '研究所登録'],
}

export default entry
