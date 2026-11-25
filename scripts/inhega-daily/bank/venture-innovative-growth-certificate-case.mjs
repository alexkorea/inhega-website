// INHE-VENTURE-CASE-1125(2026-11-25, 맥4, 보스 msg 7668 직접 지시)
// 주제: venture-cert / 세부주제: procedure(실제 발급 확인서로 보는 혁신성장유형 확인 결과와 준비 과정)
//
// 사례 자료: 보스 제공 실제 벤처기업확인서 1장(~/venture_cert_case_1125.jpg, 개인정보 보스가 가림, 게시 허락).
//   확인서에서 읽히는 사실만 사용: 확인유형 혁신성장유형 / 발급일 2026-11-24 / 유효기간 2026-11-24~2029-11-23 /
//   「벤처기업육성에 관한 특별법」 제25조 문구 / 하단 '(사)벤처기업협회 … 벤처기업종합관리시스템을 통해 … 발급'.
//   업종·평가 점수·소요 기간·지원 내용은 확인서에 없어 쓰지 않음.
//
// 겹침 검사(라이브 ko 8편 + /services/venture-cert): 기존 글은 세 유형 비교·갱신·세제·재신청·대행 선택·총론.
//   이 글에만 있는 것: 실제 확인서 항목 읽기, 혁신성장유형 평가표(고시 별표 4) 창업 3년 미만/이상/재확인 지표 차이,
//   확인일 산정(요령 제19조)·만료 140일 전 요청을 이 확인서 날짜로 계산(2029-07-06), 재발급 사유(요령 제18조⑤),
//   영문·중문 확인서(요령 제18조④), 확인마크 사용기간(요령 제30조).
//
// 법령·고시 대조(2026-11-25 조회, 사본 ~/work/inhe-venture-1125/law/):
//   벤처기업육성에 관한 특별법 MST 284081(2026-07-01 시행) 제2조의2 제1항 제2호 다목, 제25조 제1항·제2항, 제25조의2, 제25조의3, 제25조의5
//   같은 법 시행령 MST 287501(2026-07-01 시행) 제2조의3 제11항, 제18조의4, 제18조의6
//   같은 법 시행규칙 MST 263983(2024-07-10 시행) 제8조 제1항~제3항
//   벤처기업확인요령(중소벤처기업부 고시 제2026-68호, 2026-08-20 시행) 제15조·제16조·제18조·제19조·제30조, 별표 3·4
// 쓰지 않은 것: 확인 수수료(요령 제22조 — 금액·수수료 화면 금지), 평가표 배점 비율(화면 단순화), 전문평가기관 12곳 전체 목록.
// 대조표: crosscheck/venture-innovative-growth-certificate-case.md

const SLUG = 'venture-innovative-growth-certificate-case'
const IMG = '/images/blog-cases/venture-innovative-growth-certificate.webp'
const fig = (alt, cap) => `<figure style="margin:1.5rem auto;max-width:420px"><img src="${IMG}" alt="${alt}" width="607" height="800" loading="lazy" decoding="async" style="width:100%;height:auto;border:1px solid #e2e8f0;border-radius:8px"><figcaption style="font-size:0.8125rem;color:#718096;text-align:center;margin-top:0.5rem">${cap}</figcaption></figure>`

const entry = {
  topic: 'venture-cert',
  angle: 'procedure',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '혁신성장유형 벤처기업확인',
  // 대표 이미지 = 보스 제공 실제 확인서(Pexels 아님). og-pipeline 대신 ~/work/inhe-venture-1125/tools/og-case.mjs 로 그림.
  localPhoto: IMG,
  coverImage: '',
  relatedServices: [
    { title: '벤처기업 확인·이노비즈 인증', href: '/services/venture-cert' },
  ],

  ko: {
    title: '혁신성장유형 벤처기업확인서 발급 사례 — 확인서 읽는 법과 준비자료',
    category: '기업인증',
    metaTitle: '혁신성장유형 벤처기업확인 발급 사례 — 평가 지표·준비자료·발급 뒤 관리',
    metaDescription: '혁신성장유형 벤처기업확인서 실제 발급본으로 확인유형·유효기간 3년의 뜻을 읽고, 창업 3년 미만·이상에 따라 달라지는 평가 지표와 준비자료, 만료 140일 전 재확인 요청까지 정리했습니다.',
    excerpt: '2026년 11월 24일 발급된 혁신성장유형 벤처기업확인서를 기준으로 확인서 항목을 읽는 법, 창업 연차에 따라 달라지는 평가 지표, 준비자료와 발급 뒤 재확인·재발급 시점을 설명합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>확인서 항목 읽는 법</li><li>혁신성장유형 평가 지표와 준비자료</li><li>발급 뒤 할 일</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>혁신성장유형 벤처기업확인은 투자 유치나 기업부설연구소 없이도 벤처기업확인기관이 기술의 혁신성과 사업의 성장성을 평가해 벤처기업임을 확인하는 유형이며, 확인서 유효기간은 확인일부터 3년입니다.</strong><!-- 근거: 벤처기업육성에 관한 특별법 제2조의2 제1항 제2호 다목, 같은 법 시행령 제18조의4 --> 아래는 유선행정사사무소가 신청을 도와 2026년 11월 24일 발급된 실제 확인서이며, 기업 정보는 가렸습니다.<!-- 근거: 보스 제공 확인서 venture_cert_case_1125.jpg --></p>
${fig('혁신성장유형 벤처기업확인서(2026년 11월 발급, 기업 정보 가림)', '혁신성장유형 벤처기업확인서 실제 발급본(기업 정보 가림)')}
<p>세 유형의 요건 차이는 <a href="/blog/venture-confirmation-types-comparison">벤처기업 확인 유형 비교</a>에서, 확인 뒤 세제 지원은 <a href="/blog/venture-tax-benefits">벤처기업 세제 혜택</a>에서 다룹니다.</p>

<h2>확인서 항목 읽는 법</h2>
<table><thead><tr><th>항목</th><th>이 확인서</th><th>뜻</th></tr></thead><tbody>
<tr><td>확인유형</td><td>혁신성장유형</td><td>투자·연구개발비 요건이 아니라 기술의 혁신성과 사업의 성장성 평가로 확인받았다는 뜻</td></tr>
<tr><td>발급일</td><td>2026년 11월 24일<!-- 근거: 확인서 표기 --></td><td>벤처기업확인위원회 심의를 거쳐 확인서가 나온 날</td></tr>
<tr><td>유효기간</td><td>2026년 11월 24일 ~ 2029년 11월 23일<!-- 근거: 확인서 표기, 시행령 제18조의4, 벤처기업확인요령 제19조 제1항 제2호 --></td><td>재확인 기간 밖에서 받은 확인이라 발급일부터 3년<!-- 근거: 벤처기업확인요령 제19조 제1항 제2호, 시행령 제18조의4 --></td></tr>
<tr><td>법 문구</td><td>「벤처기업육성에 관한 특별법」의 확인 규정</td><td>법이 정한 벤처기업 해당 여부 확인을 받았다는 뜻으로, 이 법에 따른 지원을 받는 출발점</td></tr>
<tr><td>발급 기관</td><td>벤처기업확인기관</td><td>중소벤처기업부장관이 지정한 확인기관이 벤처확인종합관리시스템으로 발급</td></tr>
</tbody></table>
<p>유효기간 시작일이 발급일과 같다는 것은 종전 확인서의 만료 전 재확인이 아니라는 표시입니다. 만료 전 6개월 안에 미리 재확인을 받으면 새 유효기간은 종전 만료일 다음 날부터 이어집니다.<!-- 근거: 벤처기업확인요령 제19조 제1항 제1호·제2호 --></p>

<h2>혁신성장유형 평가 지표와 준비자료</h2>
<p>신청은 벤처확인종합관리시스템에서 하고, 평가는 현장실사로 진행됩니다. 결과는 서류를 모두 갖춰 접수증을 받은 날부터 45일 안에 통지되며, 부득이하면 20일 이내에서 한 번 연장됩니다.<!-- 근거: 벤처기업육성에 관한 특별법 시행규칙 제8조 제2항 제2호, 벤처기업확인요령 제15조 제1항·제4항, 제16조 제2항 --> 평가표 지표는 창업 연차에 따라 다릅니다.</p>
<table><thead><tr><th>구분</th><th>창업 3년 미만</th><th>창업 3년 이상</th></tr></thead><tbody>
<tr><td>기술혁신성</td><td>연구조직·인력의 전문성, 기술개발 계획, R&amp;D 실적, 기술의 차별성, 지식재산권</td><td>왼쪽 지표에 연구개발비 투자현황 추가<!-- 근거: 벤처기업확인요령 별표 4 제1호·제2호 --></td></tr>
<tr><td>사업성장성</td><td>목표시장 설정, 기업가정신 기반 사업계획, 협업 실적, ESG 경영, 자금운용 계획</td><td>왼쪽 지표에 고용상승률(고용보험 피보험자 기준) 추가<!-- 근거: 벤처기업확인요령 별표 4 제1호·제2호 --></td></tr>
</tbody></table>
<p>3년 뒤 재확인을 신청할 때는 최근 3년간의 사업성과 지표가 더해집니다.<!-- 근거: 벤처기업확인요령 별표 4 제3호 --> 준비자료는 다음 순서로 모읍니다.</p>
<ol><li>사업자등록증과 법인등기사항전부증명서(개인사업자는 등기 서류 면제 가능)</li><li>사업계획서 — 문제 정의, 해결 방안, 성장 전략, 팀 구성이 드러나게</li><li>기술 자료 — 연구조직·기술인력 현황, 신청 기술(제품·서비스)의 R&amp;D 실적, 관련 지식재산권</li><li>사업 자료 — 목표시장 근거, 국내외 제휴 실적, 자금 조달·운용 계획</li><li>확인기관 세부지침이 정하는 추가 서류</li></ol>
<p>서류가 빠지면 접수가 완료되지 않은 것으로 보고 보완을 요청받습니다.<!-- 근거: 벤처기업확인요령 제15조 제2항·제3항 --> 서류 정리와 사업계획서 구성 지원 범위는 <a href="/services/venture-cert">벤처기업 확인 안내</a>에서 볼 수 있습니다.</p>

<h2>발급 뒤 할 일</h2>
<ol><li>재확인 일정 잡기 — 확인기관은 만료 6개월 전까지 알려 주고, 만료일 이전에 확인을 이어 받으려면 만료 140일 전까지 요청해야 합니다. 이 확인서라면 2029년 7월 6일까지입니다.<!-- 근거: 벤처기업확인요령 제19조 제2항, 2029-11-23 − 140일 = 2029-07-06 --></li><li>회사 정보가 바뀌면 재발급 — 업체명·소재지·대표자(개인사업자 제외) 변경, 합병, 조직 변경 때 재발급을 신청하며 유효기간은 종전과 같습니다.<!-- 근거: 벤처기업확인요령 제18조 제5항·제6항 --></li><li>해외 거래처용 확인서 — 요청하면 영문 또는 중문 확인서를 받을 수 있습니다.<!-- 근거: 벤처기업확인요령 제18조 제4항 --></li><li>확인마크 — 사업장 게시와 홍보에 쓸 수 있고, 사용기간은 확인서 유효기간까지입니다.<!-- 근거: 벤처기업확인요령 제30조 --></li><li>요건 유지 — 거짓으로 확인받으면 반드시 취소되고, 요건을 잃거나 휴업 등으로 6개월간 기업활동이 없으면 청문을 거쳐 취소될 수 있습니다.<!-- 근거: 벤처기업육성에 관한 특별법 제25조의2 제1항·제2항, 같은 법 시행령 제18조의6 제1항 --></li></ol>
<p>재확인 서류 준비는 <a href="/blog/venture-certification-renewal">벤처기업 재확인 절차와 준비</a>에서 이어집니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 투자나 연구소가 없어도 혁신성장유형을 신청할 수 있나요?</p><p class="faq-a">A. 네. 혁신성장유형은 투자 유치나 연구소 보유를 전제로 하지 않습니다. 연구소가 있다면 평가표의 연구조직 지표에 반영됩니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 결과 통지 기한의 마지막 날이 공휴일이면 어떻게 되나요?</p><p class="faq-a">A. 마지막 날이 토요일이나 공휴일이면 그다음 날이 기한의 마지막 날이 됩니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 결과에 동의할 수 없으면 어떻게 하나요?</p><p class="faq-a">A. 통지받은 날부터 30일 이내에 확인기관에 문서로 이의신청을 할 수 있고, 확인기관은 30일 이내에 심의 결과를 알리며 15일 범위에서 한 번 연장할 수 있습니다.<!-- 근거: 벤처기업육성에 관한 특별법 제25조의5 제1항·제2항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 확인서를 받은 뒤 상호를 바꾸면 다시 평가받나요?</p><p class="faq-a">A. 아닙니다. 재발급을 신청하면 되고, 재발급 확인서의 유효기간은 종전과 같습니다.</p></div>
</div>

<div class="cta-block"><h3>혁신성장유형 벤처기업확인, 우리 회사가 맞는지 먼저 점검하세요</h3><p>유선행정사사무소가 유형 판단, 평가 지표에 맞춘 사업계획서 구성, 준비자료 정리와 재확인 일정 관리를 돕습니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 벤처기업육성에 관한 특별법 제2조의2·제25조·제25조의2·제25조의5, 같은 법 시행령 제18조의4·제18조의6, 같은 법 시행규칙 제8조, 벤처기업확인요령 제15조·제16조·제18조·제19조·제30조·별표 4 --></p>`,
  },

  en: {
    title: 'Innovative Growth Venture Certificate in Korea — A Real Issued Case and How to Prepare',
    category: 'Business Certification',
    metaTitle: 'Innovative Growth Venture Certificate in Korea: A Real Case',
    metaDescription: 'A real innovative growth venture certificate from Korea: its 3-year validity, evaluation indicators by company age, documents and re-confirmation timing.',
    excerpt: 'Using a real innovative growth venture company certificate issued on 24 November 2026, this guide explains each field, the evaluation indicators that change with company age, the documents to prepare and what to do after issuance.',
    content: `<div class="toc"><p>Contents</p><ol><li>How to read the certificate</li><li>Evaluation indicators and documents</li><li>After the certificate is issued</li><li>FAQ</li></ol></div>
<p><strong>The innovative growth type is the venture company confirmation route in which the designated confirmation agency evaluates the innovativeness of your technology and the growth potential of your business, with no investment or in-house research institute required. The certificate is valid for 3 years from the confirmation date.</strong> Below is a real certificate issued on 24 November 2026 for a client of YouSun Administrative Agency, with company details masked.</p>
${fig('Innovative growth type venture company certificate (issued November 2026, company details masked)', 'Real innovative growth venture company certificate (company details masked; Korean original)')}
<p>For the differences between the three types, see <a href="/en/blog/venture-confirmation-types-comparison">venture company confirmation types compared</a>; for tax support after confirmation, see <a href="/en/blog/venture-tax-benefits">venture company tax benefits</a>.</p>

<h2>How to read the certificate</h2>
<table><thead><tr><th>Field</th><th>This certificate</th><th>Meaning</th></tr></thead><tbody>
<tr><td>Confirmation type</td><td>Innovative growth</td><td>Confirmed through an evaluation of technology and growth, not through investment or R&amp;D spending thresholds</td></tr>
<tr><td>Issue date</td><td>24 November 2026</td><td>The day the certificate was issued after review by the Venture Company Confirmation Committee</td></tr>
<tr><td>Validity</td><td>24 November 2026 – 23 November 2029</td><td>Not an early re-confirmation, so the 3 years run from the issue date</td></tr>
<tr><td>Legal wording</td><td>The confirmation provision of the Act on Special Measures for the Promotion of Venture Businesses</td><td>The company has been confirmed as a venture company under the Act, the starting point for support under it</td></tr>
<tr><td>Issuer</td><td>Venture company confirmation agency</td><td>An agency designated by the Minister of SMEs and Startups issues it through the venture confirmation management system</td></tr>
</tbody></table>
<p>When the validity starts on the issue date, the certificate is not an early re-confirmation. If a company is re-confirmed within 6 months before expiry, the new period starts the day after the old one ends.</p>

<h2>Evaluation indicators and documents</h2>
<p>You apply through the venture confirmation management system, and the evaluation includes an on-site review. The result is due within 45 days from the day you receive the receipt for a complete application, extendable once by up to 20 days. The indicators depend on company age.</p>
<table><thead><tr><th>Area</th><th>Under 3 years since founding</th><th>3 years or more</th></tr></thead><tbody>
<tr><td>Technology innovation</td><td>Research team and staff expertise, development plan, R&amp;D record, technical differentiation, intellectual property</td><td>Same, plus R&amp;D investment</td></tr>
<tr><td>Business growth</td><td>Target market, entrepreneurship-based business plan, partnerships, ESG management, funding plan</td><td>Same, plus employment growth (insured employees)</td></tr>
</tbody></table>
<p>At re-confirmation 3 years later, business performance over the last 3 years is added. Prepare documents in this order:</p>
<ol><li>Business registration certificate and corporate register extract (sole proprietors may be exempt from the register)</li><li>Business plan showing the problem, solution, growth strategy and team</li><li>Technology materials: research team and technical staff, R&amp;D record for the product or service, related intellectual property</li><li>Business materials: target market evidence, domestic and overseas partnerships, funding plan</li><li>Any further documents set by the agency's detailed guidelines</li></ol>
<p>An incomplete application is not treated as received until you supplement it. For the scope of our support, see <a href="/en/services/venture-cert">our venture confirmation service</a>.</p>

<h2>After the certificate is issued</h2>
<ol><li>Plan re-confirmation: the agency notifies you 6 months before expiry, and to continue without a gap you must apply at least 140 days before expiry, which for this certificate means by 6 July 2029.</li><li>Reissue after changes: a change of company name, location or representative (not for sole proprietors), a merger or a change of corporate form requires reissue, and the validity stays the same.</li><li>English or Chinese certificate: available on request for overseas partners.</li><li>Venture mark: may be displayed at your premises and in promotion until the certificate expires.</li><li>Keep the requirements: confirmation obtained by false means must be cancelled, and losing the requirements or 6 months without business activity can lead to cancellation after a hearing.</li></ol>
<p>The broader picture of venture confirmation and Innobiz is covered in <a href="/en/blog/venture-innobiz-certification-guide">our venture and Innobiz guide</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can we apply without investment or a research institute?</p><p class="faq-a">A. Yes. The innovative growth type does not require either. If you have a research institute, it counts in the research team indicator.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the deadline falls on a holiday?</p><p class="faq-a">A. If the last day is a Saturday or public holiday, the deadline moves to the next day.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if we disagree with the result?</p><p class="faq-a">A. You may file a written objection within 30 days of the notice. The agency answers within 30 days, extendable once by up to 15 days.</p></div>
<div class="faq-item"><p class="faq-q">Q. Do we need a new evaluation after changing our company name?</p><p class="faq-a">A. No. You apply for reissue, and the reissued certificate keeps the same validity.</p></div>
</div>

<div class="cta-block"><h3>Check whether the innovative growth type fits your company</h3><p>YouSun Administrative Agency helps with type assessment, a business plan built around the indicators, document preparation and re-confirmation scheduling. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国创新成长型风险企业确认书实例 — 确认书解读与准备材料',
    category: '企业认证',
    metaTitle: '韩国创新成长型风险企业确认书实例：评估指标与准备材料',
    metaDescription: '通过一份实际签发的韩国创新成长型风险企业确认书，解读确认类型与3年有效期，并说明按创业年限不同的评估指标、准备材料及到期前140日的再确认申请。',
    excerpt: '以2026年11月24日签发的创新成长型风险企业确认书为例，说明各栏目含义、随创业年限变化的评估指标、准备材料以及签发后的再确认与补发时点。',
    content: `<div class="toc"><p>目录</p><ol><li>如何解读确认书</li><li>评估指标与准备材料</li><li>签发后需要做的事</li><li>常见问题</li></ol></div>
<p><strong>创新成长型是风险企业确认的一种类型：无需引进投资或设立企业附属研究所，由指定的风险企业确认机构评估技术创新性与事业成长性后予以确认，确认书有效期为自确认之日起3年。</strong>下图是YouSun Administrative Agency协助申请、于2026年11月24日签发的实际确认书，企业信息已遮盖。</p>
${fig('创新成长型风险企业确认书（2026年11月签发，企业信息已遮盖）', '创新成长型风险企业确认书实际签发件（企业信息已遮盖，韩文原件）')}
<p>三种类型的条件差异请参阅<a href="/zh/blog/venture-confirmation-types-comparison">风险企业确认类型比较</a>，确认后的税收支持请参阅<a href="/zh/blog/venture-tax-benefits">风险企业税收优惠</a>。</p>

<h2>如何解读确认书</h2>
<table><thead><tr><th>栏目</th><th>本确认书</th><th>含义</th></tr></thead><tbody>
<tr><td>确认类型</td><td>创新成长型</td><td>不是依据投资或研发费标准，而是通过技术创新性与事业成长性评估获得确认</td></tr>
<tr><td>签发日</td><td>2026年11月24日</td><td>经风险企业确认委员会审议后签发确认书的日期</td></tr>
<tr><td>有效期</td><td>2026年11月24日～2029年11月23日</td><td>不属于到期前的提前再确认，因此自签发日起算3年</td></tr>
<tr><td>依法文字</td><td>《风险企业培育特别法》的确认规定</td><td>表示已依法获得风险企业确认，是享受该法支持的起点</td></tr>
<tr><td>签发机构</td><td>风险企业确认机构</td><td>由中小风险企业部长官指定的确认机构通过风险确认综合管理系统签发</td></tr>
</tbody></table>
<p>有效期起始日与签发日相同，说明这不是到期前的提前再确认。若在到期前6个月内提前获得再确认，新有效期从原到期日次日开始。</p>

<h2>评估指标与准备材料</h2>
<p>申请通过风险确认综合管理系统提交，评估以现场考察方式进行。结果自材料齐全并取得受理凭证之日起45日内通知，如有不得已的情况可在20日内延长一次。评估指标因创业年限而不同。</p>
<table><thead><tr><th>领域</th><th>创业未满3年</th><th>创业3年以上</th></tr></thead><tbody>
<tr><td>技术创新性</td><td>研究组织与人员专业性、技术开发计划、研发实绩、技术差异性、知识产权</td><td>在左列基础上增加研发费投入情况</td></tr>
<tr><td>事业成长性</td><td>目标市场设定、基于企业家精神的事业计划、合作实绩、ESG经营、资金运用计划</td><td>在左列基础上增加雇用增长率（以雇用保险参保人为准）</td></tr>
</tbody></table>
<p>3年后申请再确认时，还会增加最近3年的经营成果指标。准备材料可按以下顺序整理：</p>
<ol><li>营业执照（事业者登记证）与法人登记事项全部证明书（个人事业者可免交登记材料）</li><li>事业计划书：写清问题定义、解决方案、成长战略与团队构成</li><li>技术材料：研究组织与技术人员情况、申请技术（产品或服务）的研发实绩、相关知识产权</li><li>事业材料：目标市场依据、国内外合作实绩、资金筹措与运用计划</li><li>确认机构细则规定的其他材料</li></ol>
<p>材料不全时视为未完成受理，并会被要求补正。我们的协助范围请参阅<a href="/zh/services/venture-cert">风险企业确认服务</a>。</p>

<h2>签发后需要做的事</h2>
<ol><li>安排再确认：确认机构会在到期前6个月通知；如需不间断延续，须在到期前140日之前提出申请，本确认书即为2029年7月6日之前。</li><li>信息变更时补发：企业名称、所在地或代表人（个人事业者除外）变更、合并或组织形式变更时须申请补发，有效期不变。</li><li>海外客户用确认书：可申请英文或中文确认书。</li><li>确认标志：可在经营场所展示或用于宣传，使用期限至确认书有效期届满。</li><li>维持条件：以虚假方式获得确认的必须撤销；丧失条件或因停业等6个月无经营活动的，经听证后可能被撤销。</li></ol>
<p>风险企业与Innobiz的整体介绍请参阅<a href="/zh/blog/venture-innobiz-certification-guide">风险企业与Innobiz指南</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 没有投资或研究所也能申请创新成长型吗？</p><p class="faq-a">A. 可以。创新成长型不以引进投资或设立研究所为前提。若设有研究所，会反映在研究组织指标中。</p></div>
<div class="faq-item"><p class="faq-q">Q. 通知期限的最后一天是节假日怎么办？</p><p class="faq-a">A. 最后一天为星期六或公休日时，顺延至次日。</p></div>
<div class="faq-item"><p class="faq-q">Q. 对结果有异议怎么办？</p><p class="faq-a">A. 可自收到通知之日起30日内以书面形式提出异议，确认机构在30日内通知审议结果，可在15日范围内延长一次。</p></div>
<div class="faq-item"><p class="faq-q">Q. 取得确认书后变更公司名称需要重新评估吗？</p><p class="faq-a">A. 不需要。申请补发即可，补发确认书的有效期与原确认书相同。</p></div>
</div>

<div class="cta-block"><h3>先确认贵公司是否适合创新成长型</h3><p>YouSun Administrative Agency（代表行政士 Jung Yu-sun）协助判断类型、按评估指标撰写事业计划书、整理准备材料并管理再确认日程。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国の革新成長型ベンチャー企業確認書の実例 — 確認書の読み方と準備書類',
    category: '企業認証',
    metaTitle: '韓国の革新成長型ベンチャー企業確認書の実例：評価指標と準備書類',
    metaDescription: '実際に発給された韓国の革新成長型ベンチャー企業確認書をもとに、確認類型と有効期間3年の意味、創業年数で変わる評価指標、準備書類、満了140日前の再確認申請までを説明します。',
    excerpt: '2026年11月24日に発給された革新成長型ベンチャー企業確認書を例に、各項目の意味、創業年数で変わる評価指標、準備書類、発給後の再確認・再発給の時期を説明します。',
    content: `<div class="toc"><p>目次</p><ol><li>確認書の項目の読み方</li><li>評価指標と準備書類</li><li>発給後にすること</li><li>よくある質問</li></ol></div>
<p><strong>革新成長型は、投資の誘致や企業附設研究所がなくても、指定されたベンチャー企業確認機関が技術の革新性と事業の成長性を評価してベンチャー企業であることを確認する類型で、確認書の有効期間は確認された日から3年です。</strong>下の画像は、YouSun Administrative Agencyが申請を支援し2026年11月24日に発給された実際の確認書で、企業情報は伏せています。</p>
${fig('革新成長型ベンチャー企業確認書（2026年11月発給、企業情報は非表示）', '革新成長型ベンチャー企業確認書の実際の発給例（企業情報は非表示、韓国語原本）')}
<p>3つの類型の要件の違いは<a href="/ja/blog/venture-confirmation-types-comparison">ベンチャー企業確認の類型比較</a>、確認後の税制支援は<a href="/ja/blog/venture-tax-benefits">ベンチャー企業の税制優遇</a>で扱っています。</p>

<h2>確認書の項目の読み方</h2>
<table><thead><tr><th>項目</th><th>この確認書</th><th>意味</th></tr></thead><tbody>
<tr><td>確認類型</td><td>革新成長型</td><td>投資や研究開発費の基準ではなく、技術の革新性と事業の成長性の評価で確認を受けたという意味</td></tr>
<tr><td>発給日</td><td>2026年11月24日</td><td>ベンチャー企業確認委員会の審議を経て確認書が発給された日</td></tr>
<tr><td>有効期間</td><td>2026年11月24日～2029年11月23日</td><td>満了前の再確認ではないため、発給日から3年</td></tr>
<tr><td>法令の文言</td><td>「ベンチャー企業育成に関する特別法」の確認規定</td><td>法律に基づくベンチャー企業該当の確認を受けたという意味で、同法による支援を受ける出発点</td></tr>
<tr><td>発給機関</td><td>ベンチャー企業確認機関</td><td>中小ベンチャー企業部長官が指定した確認機関が、ベンチャー確認総合管理システムを通じて発給</td></tr>
</tbody></table>
<p>有効期間の開始日が発給日と同じなのは、従前の確認書の満了前の再確認ではないことを示します。満了前6か月以内に前もって再確認を受けると、新しい有効期間は従前の満了日の翌日から続きます。</p>

<h2>評価指標と準備書類</h2>
<p>申請はベンチャー確認総合管理システムで行い、評価は現地調査で実施されます。結果は書類をすべて揃えて受付証を受け取った日から45日以内に通知され、やむを得ない場合は20日以内で一度延長されます。評価指標は創業年数によって異なります。</p>
<table><thead><tr><th>区分</th><th>創業3年未満</th><th>創業3年以上</th></tr></thead><tbody>
<tr><td>技術革新性</td><td>研究組織・人材の専門性、技術開発計画、研究開発実績、技術の差別性、知的財産権</td><td>左の指標に研究開発費の投資状況を追加</td></tr>
<tr><td>事業成長性</td><td>目標市場の設定、起業家精神に基づく事業計画、協業実績、ESG経営、資金運用計画</td><td>左の指標に雇用上昇率（雇用保険の被保険者基準）を追加</td></tr>
</tbody></table>
<p>3年後に再確認を申請するときは、直近3年間の事業成果の指標が加わります。準備書類は次の順で揃えます。</p>
<ol><li>事業者登録証と法人登記事項全部証明書（個人事業者は登記書類の提出を免除される場合あり）</li><li>事業計画書：課題の定義、解決策、成長戦略、チーム構成が分かるように</li><li>技術資料：研究組織・技術人材の状況、申請技術（製品・サービス）の研究開発実績、関連する知的財産権</li><li>事業資料：目標市場の根拠となる資料、国内外の提携実績、資金調達・運用計画</li><li>確認機関の細部指針が定める追加書類</li></ol>
<p>書類が欠けていると受付が完了していないものとみなされ、補完を求められます。当事務所の支援範囲は<a href="/ja/services/venture-cert">ベンチャー企業確認サービス</a>をご覧ください。</p>

<h2>発給後にすること</h2>
<ol><li>再確認の日程を立てる：確認機関は満了6か月前までに通知し、満了日までに確認を引き継ぐには満了140日前までに申請する必要があります。この確認書なら2029年7月6日までです。</li><li>会社情報が変わったら再発給：企業名・所在地・代表者（個人事業者を除く）の変更、合併、組織変更の際は再発給を申請し、有効期間は従前と同じです。</li><li>海外取引先向けの確認書：申請すれば英文または中文の確認書を受け取れます。</li><li>確認マーク：事業所での掲示や広報に使え、使用期間は確認書の有効期間までです。</li><li>要件の維持：虚偽で確認を受けた場合は必ず取り消され、要件を失ったり休業などで6か月間企業活動がなかったりすると、聴聞を経て取り消されることがあります。</li></ol>
<p>ベンチャー企業確認とInnobizの全体像は<a href="/ja/blog/venture-innobiz-certification-guide">ベンチャー・Innobizガイド</a>で扱っています。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 投資や研究所がなくても革新成長型を申請できますか？</p><p class="faq-a">A. できます。革新成長型は投資の誘致や研究所の保有を前提としません。研究所がある場合は評価表の研究組織の指標に反映されます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 通知期限の最終日が祝日の場合はどうなりますか？</p><p class="faq-a">A. 最終日が土曜日または祝日の場合は、その翌日が期限の最終日になります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 結果に納得できない場合はどうすればよいですか？</p><p class="faq-a">A. 通知を受けた日から30日以内に確認機関へ書面で異議を申し立てることができ、確認機関は30日以内に審議結果を通知し、15日の範囲で一度延長できます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 確認書を受けた後に社名を変えると再評価が必要ですか？</p><p class="faq-a">A. 不要です。再発給を申請すればよく、再発給された確認書の有効期間は従前と同じです。</p></div>
</div>

<div class="cta-block"><h3>革新成長型が自社に合うか、まず確認しましょう</h3><p>YouSun Administrative Agency（代表行政士 Jung Yu-sun）が、類型の判断、評価指標に沿った事業計画書の構成、準備書類の整理、再確認の日程管理をお手伝いします。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

entry.wrongTerms = [
  '벤처기업 허가', '벤처기업 등록증', '벤처기업 신고', '벤처기업 지정서', '벤처 등록',
  'venture permit', 'venture business license', 'venture registration certificate',
  '风险企业许可', '风险企业登记证', '风险企业注册',
  'ベンチャー企業許可', 'ベンチャー企業登録証', 'ベンチャー企業の指定',
]

export default entry
