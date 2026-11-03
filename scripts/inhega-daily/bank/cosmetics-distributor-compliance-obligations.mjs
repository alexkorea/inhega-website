// 원고 은행 — BANK-REFILL-1029(2026-10-29, 맥4 하위 작성, kind=seo3958)
// 주제(풀): cosmetics-distributor(화장품책임판매업등록) / 세부주제: post-management(사후관리 의무)
//
// 겹침 검사(blog-posts-data.ts·blog-i18n.ts·bank 대조):
//   cosmetics-responsible-distributor — 최초 등록 절차·요건·관리자 자격(끝에 '등록 후 의무사항' H2 제목만, 본문 없음)
//   cosmetics-import-sales-registration-guide — 수입 판매 최초 등록·관리자 선임·전성분 표시
//   cosmetics-distributor-change-registration(라이브+bank) — 변경등록 대상·30일·서류 → 이 글은 변경등록을 다루지 않고 링크만.
//   cosmetics-fix — 광고 위반·무등록·변경등록 누락 처분 → 처분은 준수사항 위반 1차 예시 2개만, 나머지는 링크.
//   cosmetics-select / cosmetics-manufacturing-* — 대행 선택·제조업 → 겹침 없음.
//   → 이 글은 "등록 후 매년·매 제품마다 지킬 것": 품질관리기준·책임판매 후 안전관리기준, 제조번호별 품질검사·기록 보관,
//     생산·수입실적 보고(2월 말), 원료 목록 보고(유통·판매 전), 책임판매관리자 교육(최초 6개월·매년 보수)만 다룬다.
//     "준수사항"·"사후관리"를 제목에 쓴 기존 KO/i18n 제목 없음.
//
// 법령 대조(lawfetch.py, law.go.kr DRF OC=visionlaw, 2026-10-29 조회):
//   화장품법           MST 291337, 2026. 10. 20. 시행 — 제2조 제11호, 제3조 제1항·제3항, 제5조 제2항·제5항·제7항·제8항,
//                      제24조 제1항 제6호, 제40조 제1항 제3호·제4호
//   화장품법 시행령    MST 283963, 2026. 4. 2. 시행 — 제2조 제2호 가~라목, 제14조 제1호·제1호의3·제11호
//   화장품법 시행규칙  MST 285249, 2026. 4. 2. 시행 — 제7조, 제8조 제2항~제4항, 제12조(본문 단서·제1~6호·제10호·제11호),
//                      제13조 제1항~제3항, 제14조 제1항·제2항 제4호·제9항, 별표 1(제3호 가목·나목 5)·제4호 마목·제6호),
//                      별표 2(제3호~제5호), 별표 7 Ⅱ. 개별기준 차목 5) 나)·6) 나)
// 인허가 구분: 화장품책임판매업 = '등록'(법 제3조 제1항, 식약처장 → 지방식약청장 위임). 허가·신고 아님.
//   생산·수입실적·원료 목록 = '보고'(법 제5조 제5항). 신고 아님. 교육 = 책임판매관리자의 의무(법 제5조 제7항).
// 조정·확인 못 한 점:
//   - 화장품법 제4조의2(안전성 평가)·제4조의3(영유아·어린이 화장품)은 2025. 12. 30. 개정(법률 제21302호) 부칙상 업소 규모별로
//     2028~2031년 단계 시행·시행규칙 조문 번호도 미정합 → 이 글에서 다루지 않음.
//   - 교육 시간 '4시간 이상 8시간 이하'는 시행규칙 제14조 제9항(교육실시기관 교육계획의 교육시간) 문언 — 화면은 "1회 교육 시간"으로 서술.
//   - 생산실적 보고 서식·제출 시스템은 식약처 고시 사항(법령 본문에 없음) → "고시에 따라 화장품업 단체를 통해"로만.
//   - 과태료·법정 금액은 화면 금지라 쓰지 않음(제40조 '과태료 대상'만). 회수 의무(제5조의2)는 FAQ 한 줄.
// 대조표: crosscheck/cosmetics-distributor-compliance-obligations.md

const SLUG = 'cosmetics-distributor-compliance-obligations'

const entry = {
  topic: 'cosmetics-distributor',
  angle: 'post-management',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '화장품책임판매업 준수사항',
  pexelsId: 11753640,
  coverImage: '',
  relatedServices: [
    { title: '화장품 제조업·책임판매업 등록', href: '/services/cosmetics' },
  ],

  ko: {
    title: '화장품책임판매업 준수사항 — 등록 후 품질·안전관리, 생산실적·원료 목록 보고, 책임판매관리자 교육',
    category: '화장품',
    metaTitle: '화장품책임판매업 준수사항 — 품질·안전관리, 실적·원료 목록 보고, 교육',
    metaDescription: '화장품책임판매업 등록 후에는 품질관리기준과 책임판매 후 안전관리기준을 지키고, 생산·수입실적은 매년 2월 말까지, 원료 목록은 유통·판매 전에 보고하며, 책임판매관리자는 매년 교육을 받아야 합니다.',
    excerpt: '화장품책임판매업은 등록으로 끝나지 않습니다. 제조번호별 품질검사와 기록 보관, 안전관리 정보 수집, 지난해 생산·수입실적의 2월 말 보고, 유통 전 원료 목록 보고, 책임판매관리자의 최초 6개월 이내 교육과 매년 보수교육까지 등록 후 지켜야 할 의무를 항목별로 안내합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>품질관리기준과 책임판매 후 안전관리기준</li><li>생산·수입실적과 원료 목록 보고</li><li>책임판매관리자 교육과 겸직·비종사</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>화장품책임판매업은 「화장품법」에 따라 식품의약품안전처에 등록하는 영업이고, 등록 후에는 품질관리기준과 책임판매 후 안전관리기준을 지키면서 지난해 생산·수입실적을 매년 2월 말까지, 원료 목록을 유통·판매 전에 보고해야 하며, 책임판매관리자는 매년 교육을 받아야 합니다.</strong><!-- 근거: 화장품법 제3조 제1항·제3항, 제5조 제2항·제5항·제7항, 같은 법 시행규칙 제13조 제1항·제2항, 화장품법 시행령 제14조 제1호 --> 이 의무를 지키지 않으면 업무정지 같은 행정처분이나 과태료 대상이 됩니다.<!-- 근거: 화장품법 제24조 제1항 제6호, 제40조 제1항 제3호·제4호 --></p>
<p>처음 등록하는 요건과 서류는 <a href="/blog/cosmetics-responsible-distributor">화장품 책임판매업 등록 절차</a>에서, 상호·소재지·관리자가 바뀔 때의 절차는 <a href="/blog/cosmetics-distributor-change-registration">화장품책임판매업 변경등록</a>에서, 광고 위반과 처분은 <a href="/blog/cosmetics-fix">화장품 행정처분 정리</a>에서 다룹니다. 여기서는 등록 이후 계속 지켜야 할 의무에 집중합니다.</p>

<h2>품질관리기준과 책임판매 후 안전관리기준</h2>
<p>책임판매업자는 품질관리기준과 책임판매 후 안전관리기준을 지켜야 하고, 이 업무는 책임판매관리자가 맡습니다. 직접 제조, 위탁 제조, 수입 유통 유형은 아래 항목을 모두 지키고, 전자상거래 수입대행형은 품질·안전관리기준, 수입관리기록서 일부, 안전성 정보 보고만 적용됩니다.<!-- 근거: 화장품법 제5조 제2항, 시행규칙 제7조·제8조 제2항, 제12조 각 호 외의 부분 단서, 화장품법 시행령 제2조 제2호 --></p>
<table><thead><tr><th>지켜야 할 사항</th><th>내용</th></tr></thead><tbody>
<tr><td>품질관리 업무 절차서</td><td>제조·품질관리, 품질 불량 처리, 회수, 교육·훈련, 문서 관리, 시장출하 기록 절차를 문서로 작성·보관<!-- 근거: 화장품법 시행규칙 별표 1 제3호 가목 --></td></tr>
<tr><td>제조번호별 품질검사</td><td>품질검사 후 유통. 제조업자와 책임판매업자가 같거나 지정 시험·검사기관 등에 위탁해 결과가 있으면 생략 가능<!-- 근거: 화장품법 시행규칙 제12조 제5호, 별표 1 제3호 나목 5) --></td></tr>
<tr><td>위탁 제조 관리</td><td>수탁 제조업자를 관리·감독하고 제품표준서·품질관리기록서를 받아 보관<!-- 근거: 화장품법 시행규칙 제12조 제3호·제6호 --></td></tr>
<tr><td>기록 보관</td><td>품질관리 기록과 제조업자 관리 기록을 제조일(수입은 수입일)부터 3년간 보관<!-- 근거: 화장품법 시행규칙 별표 1 제4호 마목 --></td></tr>
<tr><td>수입관리기록서</td><td>수입 화장품의 제품명, 제조국·제조회사, 제조번호별 수입량·품질검사 결과, 판매처 등을 기록<!-- 근거: 화장품법 시행규칙 제12조 제4호 --></td></tr>
<tr><td>안전관리 정보</td><td>학회·문헌 등에서 정보를 수집·검토하고 필요하면 회수·판매정지 등 안전확보 조치, 부작용 등 새 정보는 고시에 따라 보고<!-- 근거: 화장품법 시행규칙 별표 2 제3호~제5호, 제12조 제10호 --></td></tr>
</tbody></table>
<p>레티놀, 아스코빅애시드, 토코페롤, 과산화화합물, 효소를 0.5% 이상 넣은 제품은 안정성시험 자료를 사용기한 만료일부터 1년간 보존합니다. 품질관리 업무 절차서를 만들지 않으면 처분 기준상 1차 위반에 판매업무정지 3개월, 안전관리 정보를 검토하지 않으면 1차에 판매 또는 해당 품목 판매업무정지 1개월입니다.<!-- 근거: 화장품법 시행규칙 제12조 제11호, 별표 7 Ⅱ 차목 5) 나)·6) 나), 화장품법 제24조 제1항 제6호 --></p>

<h2>생산·수입실적과 원료 목록 보고</h2>
<p>보고 의무는 두 가지입니다. 지난해 생산실적이나 수입실적은 매년 2월 말까지, 제조에 쓴 원료 목록은 그 화장품을 유통·판매하기 전까지 보고합니다.<!-- 근거: 화장품법 제5조 제5항, 같은 법 시행규칙 제13조 제1항·제2항 --></p>
<ol><li>제품별 지난해 생산량 또는 수입량을 집계합니다.</li><li>식약처 고시에 따라 대한화장품협회 등 화장품업 단체(수입은 한국의약품수출입협회 포함)를 통해 2월 말까지 보고합니다.<!-- 근거: 화장품법 시행규칙 제13조 제1항 --></li><li>새 제품은 출시 전에 원료 목록을 보고합니다.</li><li>처방이 바뀌어 보고한 원료 목록이 달라지면 다시 보고합니다.<!-- 근거: 화장품법 시행규칙 제13조 제2항 --></li></ol>
<p>전자무역문서로 표준통관예정보고를 하고 수입하는 책임판매업자는 수입실적과 원료 목록 보고를 하지 않을 수 있습니다.<!-- 근거: 화장품법 시행규칙 제13조 제3항 --> 실적이나 원료 목록을 보고하지 않으면 과태료 대상입니다.<!-- 근거: 화장품법 제40조 제1항 제3호 --></p>

<h2>책임판매관리자 교육과 겸직·비종사</h2>
<p>책임판매관리자는 화장품 안전성 확보와 품질관리 교육을 매년 받아야 합니다. 최초 교육은 종사한 날부터 6개월 이내, 보수 교육은 그 뒤 매년 1회이고, 1회 교육 시간은 4시간 이상 8시간 이하입니다.<!-- 근거: 화장품법 제5조 제7항, 같은 법 시행규칙 제14조 제1항·제9항 --> 교육을 받지 않으면 과태료 대상이고, 준수사항을 어긴 책임판매업자에게는 교육명령이 내려질 수 있습니다.<!-- 근거: 화장품법 제40조 제1항 제4호, 제5조 제8항, 시행규칙 제14조 제2항 제4호 --></p>
<p>상시근로자가 10명 이하이고 대표자(법인은 대표)가 관리자 자격을 갖추면 대표가 직무를 함께 수행할 수 있습니다. 관리자가 퇴사해 업무에서 빠지면 관리업무 비종사신고서를 지방식품의약품안전청에 낼 수 있고, 새 관리자는 변경등록 대상입니다.<!-- 근거: 화장품법 시행규칙 제8조 제3항·제4항, 제5조 제1항 제2호 --></p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 제조를 모두 위탁하면 품질관리 의무가 줄어드나요?</p><p class="faq-a">A. 아닙니다. 위탁해도 수탁 제조업자를 관리·감독하고 기록을 받아 보관해야 하며, 출하 책임은 책임판매업자에게 있습니다.<!-- 근거: 화장품법 시행규칙 제12조 제6호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 지난해 판매 실적이 없어도 보고하나요?</p><p class="faq-a">A. 보고 의무는 생산·수입실적에 대한 것이므로, 실적이 없는 해의 처리 방법은 보고를 받는 화장품업 단체에 미리 확인하십시오.<!-- 근거: 화장품법 시행규칙 제13조 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 책임판매관리자가 바뀌면 교육도 다시 받나요?</p><p class="faq-a">A. 새 관리자는 종사한 날부터 6개월 이내에 최초 교육을 받고, 그 뒤 매년 1회 보수 교육을 받습니다.<!-- 근거: 화장품법 시행규칙 제14조 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 부작용 신고가 들어오면 어떻게 하나요?</p><p class="faq-a">A. 정보를 검토·기록하고 필요하면 회수·판매정지 등 조치를 하며, 고시에 따라 식약처에 보고합니다. 위해 화장품이면 회수계획을 미리 보고하고 회수합니다.<!-- 근거: 화장품법 시행규칙 제12조 제10호, 별표 2 제4호, 화장품법 제5조의2 제1항·제2항 --></p></div>
</div>

<div class="cta-block"><h3>화장품책임판매업 사후관리, 일정부터 잡아 두세요</h3><p>실적·원료 목록 보고 일정, 책임판매관리자 교육, 관리자 교체에 따른 변경등록까지 유선행정사사무소가 서류 준비를 돕습니다. 진행 범위는 <a href="/services/cosmetics">화장품 제조업·책임판매업 등록 안내</a>에서 확인하실 수 있습니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 화장품법 제3조·제5조·제24조·제40조, 화장품법 시행령 제2조·제14조, 화장품법 시행규칙 제7조·제8조·제12조·제13조·제14조·별표 1·별표 2·별표 7 --></p>`,
  },

  en: {
    title: 'Cosmetics Responsible Distributor Compliance in Korea — Quality and Safety Management, Annual Reports, Manager Training',
    category: 'Cosmetics',
    metaTitle: 'Cosmetics Distributor Compliance Obligations in Korea',
    metaDescription: 'Duties after cosmetics responsible distributor registration in Korea: quality and safety standards, February production reports, ingredient lists, training.',
    excerpt: 'Registration is only the start for a cosmetics responsible distributor in Korea. Batch quality testing, record keeping, safety information, the annual production or import report due by the end of February, the ingredient list before sale and yearly training for the responsible manager all continue after registration.',
    content: `<div class="toc"><p>Contents</p><ol><li>Quality control and post-sale safety standards</li><li>Production or import reports and ingredient lists</li><li>Responsible manager training</li><li>FAQ</li></ol></div>
<p><strong>A cosmetics responsible distributor (화장품책임판매업) is <em>registered</em> with the Ministry of Food and Drug Safety under the Cosmetics Act. After registration, the business must follow the quality control standards and post-sale safety management standards, report last year's production or import results by the end of February each year, report the ingredient list before distribution or sale, and have its responsible manager trained every year.</strong> Breaching these duties can lead to a business suspension or an administrative fine.</p>
<p>Initial requirements are covered in <a href="/en/blog/cosmetics-responsible-distributor">our responsible distributor registration guide</a>, and changes of name, address or manager in <a href="/en/blog/cosmetics-distributor-change-registration">our change registration guide</a>. This page covers the ongoing duties.</p>

<h2>Quality control and post-sale safety standards</h2>
<p>The distributor must follow both standards, and the responsible manager carries out the work. Businesses that make, outsource or import cosmetics follow every item below. E-commerce import agency sellers follow only the two standards, part of the import record and safety reporting.</p>
<table><thead><tr><th>Duty</th><th>What it means</th></tr></thead><tbody>
<tr><td>Quality procedure manual</td><td>Written procedures for manufacturing and quality control, defects, recalls, training, documents and shipment records</td></tr>
<tr><td>Batch quality testing</td><td>Test each batch before release, unless the maker and distributor are the same or a designated testing body has batch results</td></tr>
<tr><td>Outsourced manufacturing</td><td>Supervise the contract maker and keep its product standards and quality records</td></tr>
<tr><td>Record keeping</td><td>Keep quality and maker supervision records for 3 years from manufacture (import date for imports)</td></tr>
<tr><td>Import record</td><td>Product name, country and maker, import quantity and test results by batch, and buyers</td></tr>
<tr><td>Safety information</td><td>Collect and review safety information, take steps such as recall or sales suspension, and report new data such as side effects</td></tr>
</tbody></table>
<p>Products containing 0.5% or more of retinol, ascorbic acid, tocopherol, peroxides or enzymes need stability test data kept for 1 year after the expiry date. Under the disposition standards, failing to prepare the quality procedure manual means a 3-month suspension of sales at the 1st violation, and failing to review safety information means a 1-month suspension of sales of the business or the product.</p>

<h2>Production or import reports and ingredient lists</h2>
<p>There are two reports. Last year's production or import results are due by the end of February each year, and the list of ingredients used in manufacture is due before the product is distributed or sold.</p>
<ol><li>Total last year's production or import volume for each product.</li><li>Report it by the end of February through a cosmetics industry association, such as the Korea Cosmetic Association.</li><li>Report the ingredient list before launching a new product.</li><li>Report again if a formula change alters the reported list.</li></ol>
<p>Distributors that import with a standard customs pre-declaration filed as an electronic trade document may skip the import report and the ingredient list. Failing to report is subject to an administrative fine.</p>

<h2>Responsible manager training</h2>
<p>The responsible manager must take training on cosmetics safety and quality control every year. The first session is due within 6 months of starting the job, then a refresher once every year, and each session runs 4 to 8 hours. Missing training is subject to an administrative fine, and a distributor that breaches its duties can be ordered to attend training.</p>
<p>If the business has 10 or fewer regular employees and the owner (or the representative of a corporation) is qualified, the owner may act as the manager. When a manager leaves, a notice of non-engagement can be filed with the regional food and drug office, and the new manager requires a change registration.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. If all manufacturing is outsourced, are the quality duties lighter?</p><p class="faq-a">A. No. You must still supervise the contract maker and keep its records, and responsibility for release stays with the distributor.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do I report if I had no sales last year?</p><p class="faq-a">A. The duty covers production and import results, so check with the receiving association how a year without results is handled.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does a new manager need training again?</p><p class="faq-a">A. Yes. The new manager takes the first session within 6 months of starting, then a refresher once a year.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if a customer reports a side effect?</p><p class="faq-a">A. Review and record it, take steps such as recall if needed, and report it to the Ministry. See <a href="/en/services/cosmetics">our cosmetics registration service</a> for help.</p></div>
</div>

<div class="cta-block"><h3>Keep your cosmetics compliance calendar on track</h3><p>YouSun Administrative Agency helps prepare annual reports, ingredient list filings and change registrations when the manager changes. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国化妆品责任销售业遵守事项 — 登记后的质量与安全管理、生产实绩与原料目录报告、责任销售管理人教育',
    category: '化妆品',
    metaTitle: '韩国化妆品责任销售业登记后的遵守事项',
    metaDescription: '韩国化妆品责任销售业登记后，须遵守质量管理与销售后安全管理标准，每年2月底前报告生产·进口实绩，流通前报告原料目录，责任销售管理人每年接受教育。',
    excerpt: '化妆品责任销售业登记并不是终点。按批号质量检验与记录保存、安全管理信息收集、每年2月底前报告上一年生产·进口实绩、流通前报告原料目录，以及责任销售管理人6个月内首次教育和每年进修教育，都是登记后的持续义务。',
    content: `<div class="toc"><p>目录</p><ol><li>质量管理标准与销售后安全管理标准</li><li>生产·进口实绩与原料目录报告</li><li>责任销售管理人教育</li><li>常见问题</li></ol></div>
<p><strong>化妆品责任销售业（화장품책임판매업）是依据韩国《化妆品法》向食品医药品安全处<em>登记</em>的营业。登记后须遵守质量管理标准和销售后安全管理标准，每年2月底前报告上一年的生产或进口实绩，在流通·销售前报告原料目录，责任销售管理人须每年接受教育。</strong>违反这些义务，可能受到停业等行政处分或罚款。</p>
<p>首次登记的条件请参阅<a href="/zh/blog/cosmetics-responsible-distributor">化妆品责任销售业登记流程</a>，商号·地址·管理人变更请参阅<a href="/zh/blog/cosmetics-distributor-change-registration">化妆品责任销售业变更登记</a>。本页只讲登记后的持续义务。</p>

<h2>质量管理标准与销售后安全管理标准</h2>
<p>责任销售业者须遵守这两项标准，具体工作由责任销售管理人负责。自行制造、委托制造和进口流通类型须遵守下表全部事项；电子商务进口代购类型只适用两项标准、部分进口管理记录和安全信息报告。</p>
<table><thead><tr><th>遵守事项</th><th>内容</th></tr></thead><tbody>
<tr><td>质量管理业务程序书</td><td>以书面形式制定制造与质量管理、不良处理、召回、教育培训、文件管理、出货记录等程序并保存</td></tr>
<tr><td>按批号质量检验</td><td>检验后方可流通；制造业者与责任销售业者相同或委托指定检验机构已有结果的，可以省略</td></tr>
<tr><td>委托制造管理</td><td>监督受托制造业者，接收并保存产品标准书和质量管理记录</td></tr>
<tr><td>记录保存</td><td>质量管理记录和制造业者管理记录自制造日（进口为进口日）起保存3年</td></tr>
<tr><td>进口管理记录</td><td>记录产品名、制造国与制造公司、各批号进口量与检验结果、销售对象等</td></tr>
<tr><td>安全管理信息</td><td>收集并审查安全信息，必要时采取召回、停止销售等措施，副作用等新信息按告示报告</td></tr>
</tbody></table>
<p>含有0.5%以上视黄醇、抗坏血酸、生育酚、过氧化合物或酶的产品，须将稳定性试验资料保存至使用期限届满后1年。按处分标准，未制定质量管理业务程序书的，第1次违规为停止销售业务3个月；未审查安全管理信息的，第1次为停止销售或该品目销售业务1个月。</p>

<h2>生产·进口实绩与原料目录报告</h2>
<p>报告义务有两项：上一年的生产实绩或进口实绩须在每年2月底前报告；制造中使用的原料目录须在该化妆品流通·销售前报告。</p>
<ol><li>按产品统计上一年的生产量或进口量。</li><li>按食药处告示，通过大韩化妆品协会等化妆品行业团体在2月底前报告。</li><li>新产品上市前报告原料目录。</li><li>配方变更导致已报告的原料目录变化时，须再次报告。</li></ol>
<p>以电子贸易文件进行标准通关预定报告后进口的责任销售业者，可以不报告进口实绩和原料目录。未报告实绩或原料目录的，属于罚款对象。</p>

<h2>责任销售管理人教育</h2>
<p>责任销售管理人须每年接受化妆品安全性与质量管理教育。首次教育须在任职之日起6个月内完成，此后每年进修1次，每次教育时间为4小时以上8小时以下。未接受教育的属于罚款对象；违反遵守事项的责任销售业者可能被命令接受教育。</p>
<p>常勤员工10人以下、且代表本人具备管理人资格的，代表可兼任管理人职务。管理人离职时可向地方食品医药品安全厅提交管理业务非从事申报书，新管理人须办理变更登记。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 全部委托制造，质量义务会减少吗？</p><p class="faq-a">A. 不会。仍须监督受托制造业者并保存其记录，出货责任在责任销售业者。</p></div>
<div class="faq-item"><p class="faq-q">Q. 上一年没有销售实绩也要报告吗？</p><p class="faq-a">A. 报告义务针对生产·进口实绩，没有实绩年度如何处理，请事先向受理报告的行业团体确认。</p></div>
<div class="faq-item"><p class="faq-q">Q. 更换管理人后要重新接受教育吗？</p><p class="faq-a">A. 新管理人须在任职之日起6个月内接受首次教育，此后每年进修1次。</p></div>
<div class="faq-item"><p class="faq-q">Q. 收到副作用反映怎么办？</p><p class="faq-a">A. 审查并记录信息，必要时采取召回等措施，并按告示向食药处报告。需要协助请参阅<a href="/zh/services/cosmetics">化妆品登记服务</a>。</p></div>
</div>

<div class="cta-block"><h3>化妆品责任销售业的持续义务，提前安排日程</h3><p>YouSun Administrative Agency协助准备实绩报告、原料目录报告以及更换管理人时的变更登记材料。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の化粧品責任販売業の遵守事項 — 登録後の品質・安全管理、生産実績・原料目録の報告、責任販売管理者の教育',
    category: '化粧品',
    metaTitle: '韓国の化粧品責任販売業 登録後の遵守事項',
    metaDescription: '韓国の化粧品責任販売業は登録後、品質管理基準と販売後安全管理基準を守り、生産・輸入実績を毎年2月末までに、原料目録を流通前に報告し、責任販売管理者は毎年教育を受けます。',
    excerpt: '化粧品責任販売業は登録して終わりではありません。製造番号ごとの品質検査と記録の保管、安全管理情報の収集、前年の生産・輸入実績の2月末までの報告、流通前の原料目録の報告、責任販売管理者の6か月以内の初回教育と毎年の補修教育が続きます。',
    content: `<div class="toc"><p>目次</p><ol><li>品質管理基準と販売後安全管理基準</li><li>生産・輸入実績と原料目録の報告</li><li>責任販売管理者の教育</li><li>よくある質問</li></ol></div>
<p><strong>化粧品責任販売業（화장품책임판매업）は、韓国の「化粧品法」に基づき食品医薬品安全処に<em>登録</em>する営業です。登録後は品質管理基準と販売後安全管理基準を守り、前年の生産実績または輸入実績を毎年2月末までに、原料目録を流通・販売前に報告し、責任販売管理者は毎年教育を受けなければなりません。</strong>これらの義務に違反すると、業務停止などの行政処分や過料の対象になります。</p>
<p>最初の登録要件は<a href="/ja/blog/cosmetics-responsible-distributor">化粧品責任販売業の登録手続</a>を、商号・所在地・管理者の変更は<a href="/ja/blog/cosmetics-distributor-change-registration">化粧品責任販売業の変更登録</a>をご覧ください。このページでは登録後に続く義務に絞ります。</p>

<h2>品質管理基準と販売後安全管理基準</h2>
<p>責任販売業者はこの二つの基準を守る必要があり、実務は責任販売管理者が担います。自社製造、委託製造、輸入流通の類型は下表のすべてを守り、電子商取引の輸入代行型は二つの基準、輸入管理記録書の一部、安全性情報の報告のみが適用されます。</p>
<table><thead><tr><th>守るべき事項</th><th>内容</th></tr></thead><tbody>
<tr><td>品質管理業務手順書</td><td>製造・品質管理、品質不良の処理、回収、教育訓練、文書管理、出荷記録の手順を文書で作成・保管</td></tr>
<tr><td>製造番号ごとの品質検査</td><td>検査後に流通。製造業者と責任販売業者が同じ場合や、指定検査機関などへの委託で結果がある場合は省略可能</td></tr>
<tr><td>委託製造の管理</td><td>受託製造業者を管理・監督し、製品標準書と品質管理記録書を受け取って保管</td></tr>
<tr><td>記録の保管</td><td>品質管理記録と製造業者管理記録を製造日（輸入は輸入日）から3年間保管</td></tr>
<tr><td>輸入管理記録書</td><td>製品名、製造国・製造会社、製造番号ごとの輸入量と検査結果、販売先などを記録</td></tr>
<tr><td>安全管理情報</td><td>安全管理情報を収集・検討し、必要なら回収や販売停止などの措置、副作用など新たな情報は告示に従い報告</td></tr>
</tbody></table>
<p>レチノール、アスコルビン酸、トコフェロール、過酸化化合物、酵素を0.5%以上含む製品は、安定性試験資料を使用期限満了日から1年間保存します。処分基準では、品質管理業務手順書を作成しない場合は1次違反で販売業務停止3か月、安全管理情報を検討しない場合は1次で販売または当該品目の販売業務停止1か月です。</p>

<h2>生産・輸入実績と原料目録の報告</h2>
<p>報告義務は二つです。前年の生産実績または輸入実績は毎年2月末までに、製造に使った原料目録はその化粧品を流通・販売する前に報告します。</p>
<ol><li>製品ごとに前年の生産量または輸入量を集計します。</li><li>食薬処の告示に従い、大韓化粧品協会などの化粧品業団体を通じて2月末までに報告します。</li><li>新製品は発売前に原料目録を報告します。</li><li>処方の変更で報告済みの原料目録が変わる場合は、改めて報告します。</li></ol>
<p>電子貿易文書で標準通関予定報告をして輸入する責任販売業者は、輸入実績と原料目録の報告をしないことができます。実績や原料目録を報告しない場合は過料の対象です。</p>

<h2>責任販売管理者の教育</h2>
<p>責任販売管理者は、化粧品の安全性確保と品質管理に関する教育を毎年受けなければなりません。初回教育は従事した日から6か月以内、その後は毎年1回の補修教育で、1回の教育時間は4時間以上8時間以下です。教育を受けないと過料の対象となり、遵守事項に違反した責任販売業者には教育命令が出されることがあります。</p>
<p>常時勤労者が10人以下で、代表者本人が管理者の資格を持つ場合は、代表者が職務を兼ねることができます。管理者が退職したときは地方食品医薬品安全庁に管理業務非従事申告書を提出でき、新しい管理者は変更登録の対象です。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 製造をすべて委託すれば品質管理の義務は軽くなりますか。</p><p class="faq-a">A. いいえ。受託製造業者を管理・監督し記録を保管する必要があり、出荷の責任は責任販売業者にあります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 前年に実績がなくても報告しますか。</p><p class="faq-a">A. 報告義務は生産・輸入実績が対象なので、実績がない年の扱いは報告先の化粧品業団体に事前に確認してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 管理者が交代したら教育を受け直しますか。</p><p class="faq-a">A. 新しい管理者は従事した日から6か月以内に初回教育を受け、その後は毎年1回の補修教育を受けます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 副作用の申し出があった場合はどうしますか。</p><p class="faq-a">A. 情報を検討・記録し、必要なら回収などの措置をとり、告示に従い食薬処に報告します。サポートは<a href="/ja/services/cosmetics">化粧品登録サービス</a>をご覧ください。</p></div>
</div>

<div class="cta-block"><h3>化粧品責任販売業の事後管理は日程管理から</h3><p>YouSun Administrative Agencyが、実績報告、原料目録の報告、管理者交代に伴う変更登録の書類準備をお手伝いします。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 이 주제에서 틀리기 쉬운 인허가 구분 오기(4언어) — 책임판매업은 '등록', 실적·원료 목록은 '보고'
entry.wrongTerms = [
  '화장품책임판매업 허가', '책임판매업 허가', '화장품책임판매업 신고', '책임판매업 신고', '생산실적 신고', '원료 목록 신고', '원료목록 신고',
  'cosmetics distribution permit', 'distributor permit', 'distribution license', 'production report filing permit',
  '化妆品责任销售业许可', '责任销售业许可', '生产实绩申报', '原料目录申报',
  '化粧品責任販売業許可', '責任販売業の許可', '生産実績の届出', '原料目録の届出',
]

export default entry
