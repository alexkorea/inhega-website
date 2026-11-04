// 원고 은행 보충 — BANK-REFILL-1029(2026-10-29, 맥4 하위 작성)
// 주제: venture-cert(벤처기업인증) / 세부주제: comparison(유사 제도 비교 — 벤처기업 확인 세 유형 비교)
//
// 겹침 검사(lib/blog-posts-data.ts 라이브 ko 글 대조):
//   venture-innobiz-certification-guide(벤처 vs 이노비즈 비교·혜택), venture-tax-benefits(세제 혜택),
//   venture-renewal-procedure·venture-certification-renewal(갱신), venture-startup-confirmation(신청 방법·혜택 총론,
//   폐지된 '기술평가 보증 유형' 서술 포함), venture-cert-fix(재신청·취소·이의), venture-cert-select(대행 선택)
//   → 이 글은 현행 세 유형(벤처투자·연구개발·혁신성장)을 한 표에서 요건·평가 내용·결과 통지 기한·이의신청 결과 기한으로
//     나란히 비교하고, '예비벤처'(창업 중인 기업)가 어느 유형에 들어가는지, 회사 상황별 유형 고르는 순서를 다룬다.
//     갱신·세제·취소 세부는 짧게 쓰고 기존 글로 넘긴다. 이노비즈 비교는 쓰지 않는다.
//
// 법령 대조(law.go.kr DRF, OC=visionlaw, 2026-10-29 lawfetch.py 조회):
//   벤처기업육성에 관한 특별법          MST 284081, 2026. 7. 1. 시행
//     제2조의2 제1항 제1호·제2호 가목·나목·다목, 제3조, 제25조 제1항·제2항, 제25조의2 제1항·제2항, 제25조의5 제1항·제2항
//   벤처기업육성에 관한 특별법 시행령   MST 287501, 2026. 7. 1. 시행
//     제2조의3 제1항·제2항·제3항·제5항·제6항·제8항·제11항, 제2조의4, 제18조의4, 제18조의6 제1항
//   벤처기업육성에 관한 특별법 시행규칙 MST 263983, 2024. 7. 10. 시행
//     제8조 제1항~제4항
// 인허가 구분: 벤처기업 '확인'(법 제25조 — 확인 요청·확인서 발급). 허가·등록·신고·지정 아님. 화면은 '확인'·'확인서'로 썼다
//   (키워드 관용어 '벤처 인증'은 제목·본문에서 쓰지 않음).
// 조정·확인 못 한 점:
//   - 투자금액 합계·연간 연구개발비 기준 금액(시행령 제2조의3 제1항·제5항 제1호)은 금액 화면 금지라 '시행령이 정한 금액'으로만 서술.
//   - '예비벤처기업'이라는 명칭·세부 평가 방법은 법령이 아니라 중소벤처기업부 고시 영역 → 법 문언('창업 중인 기업을 포함')만 서술,
//     고시 내용(예비 단계 유효기간 등)은 lawfetch 로 대조할 수 없어 쓰지 않음.
//   - 확인기관 실제 기관명(지정 현황)은 법령에 없어 '중소벤처기업부장관이 지정한 벤처기업확인기관'으로만.
//   - 확인 요청 시 부담 금액(법 제25조 제4항 고시)·제외 업종 목록(시행령 별표 1) 세부는 쓰지 않음(업종은 '일반 유흥 주점업 등'만).
// 대조표: crosscheck/venture-confirmation-types-comparison.md

const SLUG = 'venture-confirmation-types-comparison'

const entry = {
  topic: 'venture-cert',
  angle: 'comparison',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '벤처기업 확인 유형',
  pexelsId: 7413910,
  coverImage: '',
  relatedServices: [
    { title: '벤처기업 확인·이노비즈 인증', href: '/services/venture-cert' },
  ],

  ko: {
    title: '벤처기업 확인 유형 비교 — 벤처투자·연구개발·혁신성장 유형의 요건과 결과 통지 기한',
    category: '기업인증',
    metaTitle: '벤처기업 확인 유형 비교 — 벤처투자·연구개발·혁신성장 요건과 기한',
    metaDescription: '벤처기업 확인은 벤처투자·연구개발·혁신성장 세 유형으로 나뉘고 확인서 유효기간은 모두 3년입니다. 유형에 따라 요건과 평가 내용이 다르고, 결과 통지 기한도 30일 또는 45일로 갈립니다.',
    excerpt: '벤처기업 확인 유형은 벤처투자·연구개발·혁신성장 세 가지입니다. 투자 유치 여부, 기업부설연구소 보유 여부, 창업 단계에 따라 맞는 유형이 다르고 결과 통지 기한도 30일과 45일로 갈립니다. 창업 중인 기업은 혁신성장 유형에 포함됩니다.',
    content: `<div class="toc"><p>목차</p><ol><li>세 가지 확인 유형 한눈에 비교</li><li>유형별 요건과 평가 내용</li><li>확인 절차와 통지·이의신청 기한</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>벤처기업 확인 유형은 「벤처기업육성에 관한 특별법」이 정한 벤처투자 유형, 연구개발 유형, 혁신성장 유형의 세 가지이고, 어느 유형이든 중소기업이어야 하며 벤처기업확인서의 유효기간은 확인일부터 3년입니다.</strong><!-- 근거: 벤처기업육성에 관한 특별법 제2조의2 제1항 제1호·제2호 가목~다목, 같은 법 시행령 제18조의4 --> 법률에 '예비벤처'라는 별도 유형은 없고, 창업 중인 기업은 혁신성장 유형의 평가 대상에 포함됩니다. 유형마다 평가받는 내용과 결과 통지 기한이 달라 회사 상황에 맞는 유형을 고르는 것이 첫 단계입니다.</p>
<p>확인서 만료 뒤 절차는 <a href="/blog/venture-renewal-procedure">벤처기업 확인 갱신 절차와 주의사항</a>에서, 확인 후 받을 수 있는 세제 지원은 <a href="/blog/venture-tax-benefits">벤처기업 세제 혜택</a>에서, 연구개발 유형에 필요한 연구소 인정은 <a href="/blog/corporate-research-lab-establishment-guide">기업부설연구소 설립 가이드</a>에서 다룹니다.</p>

<h2>세 가지 확인 유형 한눈에 비교</h2>
<p>세 유형 모두 「중소기업기본법」상 중소기업이어야 하고, 일반 유흥 주점업 등 대통령령으로 정한 업종을 영위하는 기업은 벤처기업에 포함되지 않습니다.<!-- 근거: 벤처기업육성에 관한 특별법 제2조의2 제1항 제1호, 제3조, 같은 법 시행령 제2조의4 --> 그 위에 아래 세 유형 중 하나의 요건을 갖추면 됩니다.</p>
<table><thead><tr><th>구분</th><th>벤처투자 유형</th><th>연구개발 유형</th><th>혁신성장 유형</th></tr></thead><tbody>
<tr><td>핵심 요건</td><td>적격 투자자의 투자금액 합계와 자본금 중 투자 비율이 기준 이상</td><td>기업부설연구소 등 보유, 연구개발비와 매출액 대비 비율이 기준 이상</td><td>기술의 혁신성과 사업의 성장성이 우수</td></tr>
<tr><td>평가 내용</td><td>투자 요건을 갖추었는지</td><td>성장성(제품·서비스 경쟁력, 시장 크기·전망)</td><td>기술 우수성, 제품·서비스 경쟁력, 시장 크기·전망<!-- 근거: 벤처기업육성에 관한 특별법 시행령 제2조의3 제8항·제11항 --></td></tr>
<tr><td>결과 통지 기한</td><td>요청일부터 30일<!-- 근거: 벤처기업육성에 관한 특별법 시행규칙 제8조 제2항 제1호·제2호 --></td><td>요청일부터 45일<!-- 근거: 벤처기업육성에 관한 특별법 시행규칙 제8조 제2항 제1호·제2호 --></td><td>요청일부터 45일<!-- 근거: 벤처기업육성에 관한 특별법 시행규칙 제8조 제2항 제1호·제2호 --></td></tr>
<tr><td>이의신청 결과 통지</td><td>신청일부터 20일<!-- 근거: 벤처기업육성에 관한 특별법 제25조의5 제2항 --></td><td>신청일부터 30일<!-- 근거: 벤처기업육성에 관한 특별법 제25조의5 제2항 --></td><td>신청일부터 30일<!-- 근거: 벤처기업육성에 관한 특별법 제25조의5 제2항 --></td></tr>
<tr><td>창업 중인 기업</td><td>해당 없음</td><td>해당 없음</td><td>포함<!-- 근거: 벤처기업육성에 관한 특별법 제2조의2 제1항 제2호 다목 --></td></tr>
</tbody></table>

<h2>유형별 요건과 평가 내용</h2>
<p><strong>벤처투자 유형</strong>은 벤처투자회사, 벤처투자조합, 신기술사업금융업자, 신기술사업투자조합, 한국벤처투자, 개인투자조합, 창업기획자(액셀러레이터), 기술보증기금, 전문개인투자자 등 법령이 정한 투자자의 투자가 기준입니다. 투자금액 합계가 시행령이 정한 금액 이상이고, 자본금 중 투자금액 합계 비율이 10% 이상(문화산업 제작자인 법인은 7% 이상)이어야 합니다.<!-- 근거: 벤처기업육성에 관한 특별법 제2조의2 제1항 제2호 가목, 같은 법 시행령 제2조의3 제1항·제2항·제3항 --></p>
<p><strong>연구개발 유형</strong>은 기업부설연구소 또는 연구개발전담부서, 기업부설창작연구소 또는 기업창작전담부서를 인정받은 기업이 대상입니다. 연간 연구개발비가 시행령이 정한 금액 이상이고, 연간 총매출액 대비 연구개발비 비율이 5% 이상이면서 업종별 고시 비율 이상이어야 하며, 확인 요청일이 속한 분기의 직전 4개 분기를 기준으로 계산합니다. 매출액 대비 비율 기준은 창업 후 3년이 지나지 않은 기업에는 적용하지 않습니다.<!-- 근거: 벤처기업육성에 관한 특별법 제2조의2 제1항 제2호 나목, 같은 법 시행령 제2조의3 제5항·제6항 제1호 --></p>
<p><strong>혁신성장 유형</strong>은 투자 유치나 연구소 보유를 전제로 하지 않고, 벤처기업확인기관이 기술의 혁신성과 사업의 성장성을 평가합니다. 구체적인 평가기준과 방법은 중소벤처기업부장관 고시로 정합니다.<!-- 근거: 벤처기업육성에 관한 특별법 제2조의2 제1항 제2호 다목·제2항, 같은 법 시행령 제2조의3 제11항 --></p>

<h2>확인 절차와 통지·이의신청 기한</h2>
<ol><li>회사가 갖춘 요건을 기준으로 유형을 정합니다. 적격 투자를 받았다면 벤처투자 유형, 연구소를 인정받고 연구개발비를 쓰고 있다면 연구개발 유형, 둘 다 아니거나 창업 중이라면 혁신성장 유형을 먼저 검토합니다.</li><li>고시된 신청서에 해당 유형의 요건을 증명하는 서류를 붙여 벤처기업확인기관의 장에게 냅니다.</li><li>확인기관은 서류를 검토하고, 필요하면 분야별 전문기관에 서류 검토와 현장 실제 조사를 맡깁니다.</li><li>벤처기업확인위원회 심의를 거쳐 벤처투자 유형은 30일, 연구개발·혁신성장 유형은 45일 이내에 결과를 알립니다. 부득이하면 20일 이내에서 한 번 연장됩니다.<!-- 근거: 벤처기업육성에 관한 특별법 제25조 제2항, 같은 법 시행규칙 제8조 제2항 --></li><li>벤처기업에 해당하면 유효기간 3년의 벤처기업확인서가 발급됩니다.<!-- 근거: 벤처기업육성에 관한 특별법 제25조 제1항·제2항, 같은 법 시행령 제18조의4, 같은 법 시행규칙 제8조 제1항~제3항 --></li></ol>
<p>결과에 불복하면 통지받은 날부터 30일 이내에 확인기관의 장에게 문서로 이의신청을 할 수 있고, 확인기관은 30일(벤처투자 유형은 20일) 이내에 심의 결과를 알려야 하며 15일 범위에서 한 차례 연장할 수 있습니다.<!-- 근거: 벤처기업육성에 관한 특별법 제25조의5 제1항·제2항 --> 확인 뒤에도 거짓이나 부정한 방법으로 확인받았다면 반드시 취소되고, 요건을 갖추지 못하게 되거나 휴업·폐업 등으로 6개월 동안 기업활동이 없으면 청문을 거쳐 취소될 수 있습니다.<!-- 근거: 벤처기업육성에 관한 특별법 제25조의2 제1항 제1호~제3호·제2항, 같은 법 시행령 제18조의6 제1항 --></p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 아직 법인을 세우지 않은 예비창업자도 확인을 받을 수 있나요?</p><p class="faq-a">A. 법은 혁신성장 유형에 창업 중인 기업을 포함한다고 정합니다. 세부 평가 방법은 중소벤처기업부 고시로 정하므로 신청 전에 확인기관 안내를 함께 확인하십시오.</p></div>
<div class="faq-item"><p class="faq-q">Q. 유형에 따라 확인서 유효기간이 다른가요?</p><p class="faq-a">A. 아닙니다. 시행령은 벤처기업확인서의 유효기간을 유형 구분 없이 확인일부터 3년으로 정합니다.<!-- 근거: 벤처기업육성에 관한 특별법 시행령 제18조의4 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 창업 2년 차라 매출이 거의 없는데 연구개발 유형이 가능할까요?<!-- 근거: 벤처기업육성에 관한 특별법 제2조의2 제1항 제2호 나목 --></p><p class="faq-a">A. 창업 후 3년이 지나지 않았다면 매출액 대비 연구개발비 비율 기준은 적용되지 않습니다. 다만 연구소 등 인정과 연간 연구개발비 기준은 갖추어야 합니다.<!-- 근거: 벤처기업육성에 관한 특별법 제2조의2 제1항 제2호 나목 단서 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 연구소가 없으면 어떤 유형이 맞나요?</p><p class="faq-a">A. 적격 투자를 받지 않았다면 혁신성장 유형을 검토합니다. 연구개발 유형을 원한다면 <a href="/services/research-lab">기업부설연구소 설립 안내</a>에서 인정 절차부터 확인하십시오.</p></div>
</div>

<div class="cta-block"><h3>우리 회사에 맞는 벤처기업 확인 유형, 신청 전에 점검하세요</h3><p>유선행정사사무소가 유형 선택, 요건 증명 서류 정리, 신청서 작성과 이의신청 서류 준비를 돕습니다. 진행 범위는 <a href="/services/venture-cert">벤처기업 확인 안내</a>에서 확인하실 수 있습니다. 전화 02-325-8222, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 벤처기업육성에 관한 특별법 제2조의2·제3조·제25조·제25조의2·제25조의5, 같은 법 시행령 제2조의3·제2조의4·제18조의4·제18조의6, 같은 법 시행규칙 제8조 --></p>`,
  },

  en: {
    title: 'Venture Company Confirmation Types in Korea Compared — Investment, R&D and Innovative Growth',
    category: 'Business Certification',
    metaTitle: 'Venture Company Confirmation Types in Korea Compared',
    metaDescription: 'Korea confirms venture companies under three types: investment, R&D and innovative growth. All certificates last 3 years; review deadlines are 30 or 45 days.',
    excerpt: 'Korean venture company confirmation has three types: venture investment, R&D and innovative growth. Which one fits depends on investment, an in-house research institute and your stage, and the result deadline is 30 or 45 days. Companies still being founded fall under innovative growth.',
    content: `<div class="toc"><p>Contents</p><ol><li>The three types at a glance</li><li>Requirements and evaluation by type</li><li>Procedure, notice and objection deadlines</li><li>FAQ</li></ol></div>
<p><strong>Under the Act on Special Measures for the Promotion of Venture Businesses, a venture company is confirmed under one of three types — venture investment, R&D, or innovative growth. Every type requires the company to be a small or medium enterprise, and the venture company confirmation certificate is valid for 3 years from the confirmation date.</strong> The Act has no separate "pre-venture" type; a company still being founded is evaluated under the innovative growth type. Evaluation content and result deadlines differ, so choosing the right type comes first.</p>
<p>For what happens after expiry, see <a href="/en/blog/venture-innobiz-certification-guide">our venture and Inno-Biz guide</a>; for tax support after confirmation, see <a href="/en/blog/venture-tax-benefits">venture company tax benefits</a>; for the research institute needed for the R&D type, see <a href="/en/blog/corporate-research-lab-establishment-guide">our corporate research institute guide</a>.</p>

<h2>The three types at a glance</h2>
<p>All three types require SME status under the Framework Act on Small and Medium Enterprises, and businesses in excluded industries set by Presidential Decree, such as general entertainment bars, cannot be venture companies. On top of that, the company must meet one of the following types.</p>
<table><thead><tr><th>Item</th><th>Venture investment</th><th>R&D</th><th>Innovative growth</th></tr></thead><tbody>
<tr><td>Core requirement</td><td>Investment from eligible investors and its share of capital meet the thresholds</td><td>Recognized research institute or unit; R&D spending and R&D-to-sales ratio meet the thresholds</td><td>Excellent technological innovation and business growth potential</td></tr>
<tr><td>What is evaluated</td><td>Whether the investment requirement is met</td><td>Growth potential (competitiveness, market size and outlook)</td><td>Technology, competitiveness, market size and outlook</td></tr>
<tr><td>Result deadline</td><td>30 days from the request</td><td>45 days</td><td>45 days</td></tr>
<tr><td>Objection decision</td><td>20 days from the objection</td><td>30 days</td><td>30 days</td></tr>
<tr><td>Company being founded</td><td>No</td><td>No</td><td>Included</td></tr>
</tbody></table>

<h2>Requirements and evaluation by type</h2>
<p><strong>Venture investment type:</strong> investment must come from investors listed in the law, such as venture capital companies and funds, new technology business finance companies and funds, Korea Venture Investment Corp., individual investment associations, accelerators, the Korea Technology Finance Corporation and professional individual investors. Total investment must reach the amount set by the Enforcement Decree, and its share of capital must be at least 10% (7% for a corporation that is a cultural content producer).</p>
<p><strong>R&D type:</strong> the company must have a recognized corporate research institute or dedicated R&D department (or a corporate creative research institute or unit). Annual R&D spending must reach the amount set by the Decree, and R&D spending must be at least 5% of annual sales and at least the ratio announced for the industry, calculated over the 4 quarters before the quarter of the request. The sales ratio does not apply to companies within 3 years of founding.</p>
<p><strong>Innovative growth type:</strong> no investment or research institute is assumed. The confirmation institution evaluates technological innovation and business growth potential under criteria announced by the Minister of SMEs and Startups.</p>

<h2>Procedure, notice and objection deadlines</h2>
<ol><li>Pick the type based on what you already meet: eligible investment points to the investment type, a recognized institute with R&D spending to the R&D type, and otherwise, or if still founding, the innovative growth type.</li><li>Submit the prescribed application with documents proving the requirements to the head of the venture company confirmation institution.</li><li>The institution reviews the documents and may have specialist bodies review them and inspect the site.</li><li>After review by the confirmation committee, the result is notified within 30 days for the investment type and 45 days for the other two, extendable once by up to 20 days.</li><li>If confirmed, a certificate valid for 3 years is issued.</li></ol>
<p>If you disagree, file a written objection within 30 days of the notice. The institution must answer within 30 days (20 days for the investment type), extendable once by up to 15 days. Confirmation obtained by false means must be cancelled, and it may be cancelled after a hearing if requirements are no longer met or there is no business activity for 6 months due to suspension or closure.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a founder who has not yet incorporated be confirmed?</p><p class="faq-a">A. The Act includes companies being founded in the innovative growth type. Detailed methods are set by ministry notice, so check the institution's guidance first.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does the validity period differ by type?</p><p class="faq-a">A. No. The Decree sets 3 years from the confirmation date for all types.</p></div>
<div class="faq-item"><p class="faq-q">Q. We are in our 2nd year with little revenue. Is the R&D type possible?</p><p class="faq-a">A. Within 3 years of founding, the R&D-to-sales ratio does not apply, but the institute recognition and annual R&D spending requirements still do.</p></div>
<div class="faq-item"><p class="faq-q">Q. Which type fits if we have no research institute?</p><p class="faq-a">A. Without eligible investment, consider the innovative growth type. For the R&D type, start with <a href="/en/services/research-lab">research institute recognition</a>.</p></div>
</div>

<div class="cta-block"><h3>Check which venture confirmation type fits before you apply</h3><p>YouSun Administrative Agency helps with choosing the type, organizing proof documents, preparing the application and objection documents. See <a href="/en/services/venture-cert">our venture confirmation service</a>. Call 02-325-8222, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '韩国风险企业确认类型比较 — 风险投资型、研发型与创新成长型',
    category: '企业认证',
    metaTitle: '韩国风险企业确认类型比较 — 投资型·研发型·创新成长型',
    metaDescription: '韩国风险企业确认分为风险投资型、研发型和创新成长型三种，确认书有效期均为3年。各类型的条件与评估内容不同，结果通知期限分为30日和45日，异议结果期限也不同。',
    excerpt: '韩国风险企业确认有风险投资型、研发型和创新成长型三种。是否获得投资、是否设有企业附属研究所以及创业阶段不同，适合的类型也不同，结果通知期限分为30日和45日。创业中的企业归入创新成长型。',
    content: `<div class="toc"><p>目录</p><ol><li>三种确认类型一览</li><li>各类型的条件与评估内容</li><li>确认程序与通知·异议期限</li><li>常见问题</li></ol></div>
<p><strong>依据韩国《风险企业培育特别法》，风险企业确认分为风险投资型、研发型和创新成长型三种。无论哪种类型都必须是中小企业，风险企业确认书的有效期为自确认之日起3年。</strong>法律中没有单独的“预备风险企业”类型，创业中的企业纳入创新成长型的评估对象。各类型的评估内容和结果通知期限不同，因此第一步是选择适合公司情况的类型。</p>
<p>有效期届满后的事项请参阅<a href="/zh/blog/venture-innobiz-certification-guide">风险企业与Inno-Biz认证指南</a>，确认后的税收支持请参阅<a href="/zh/blog/venture-tax-benefits">风险企业税收优惠</a>，研发型所需的研究所认定请参阅<a href="/zh/blog/corporate-research-lab-establishment-guide">企业附属研究所设立指南</a>。</p>

<h2>三种确认类型一览</h2>
<p>三种类型都要求属于《中小企业基本法》规定的中小企业，经营一般娱乐酒吧业等总统令规定行业的企业不属于风险企业。在此基础上，满足以下任一类型的条件即可。</p>
<table><thead><tr><th>项目</th><th>风险投资型</th><th>研发型</th><th>创新成长型</th></tr></thead><tbody>
<tr><td>核心条件</td><td>合格投资者的投资总额及其占资本金比例达到标准</td><td>设有经认定的企业附属研究所等，研发支出及其占销售额比例达到标准</td><td>技术创新性与事业成长性优秀</td></tr>
<tr><td>评估内容</td><td>是否满足投资条件</td><td>成长性（产品·服务竞争力、市场规模与前景）</td><td>技术优秀性、产品·服务竞争力、市场规模与前景</td></tr>
<tr><td>结果通知期限</td><td>自申请之日起30日</td><td>45日</td><td>45日</td></tr>
<tr><td>异议结果通知</td><td>自异议申请之日起20日</td><td>30日</td><td>30日</td></tr>
<tr><td>创业中的企业</td><td>不适用</td><td>不适用</td><td>包括</td></tr>
</tbody></table>

<h2>各类型的条件与评估内容</h2>
<p><strong>风险投资型</strong>以法令规定的投资者的投资为标准，包括风险投资公司、风险投资组合、新技术事业金融业者及投资组合、韩国风险投资公司、个人投资组合、创业策划者（加速器）、技术保证基金和专业个人投资者等。投资总额须达到施行令规定的金额，且投资总额占资本金的比例须在10%以上（文化产业制作者法人为7%以上）。</p>
<p><strong>研发型</strong>的对象是经认定设有企业附属研究所或研发专职部门（或企业附属创作研究所、企业创作专职部门）的企业。年度研发支出须达到施行令规定的金额，研发支出占年度总销售额的比例须在5%以上且不低于按行业公告的比例，以申请日所属季度之前的4个季度为准计算。创业未满3年的企业不适用销售额比例标准。</p>
<p><strong>创新成长型</strong>不以获得投资或设有研究所为前提，由风险企业确认机构评估技术创新性与事业成长性，具体标准和方法由中小风险企业部长官公告。</p>

<h2>确认程序与通知·异议期限</h2>
<ol><li>按公司已具备的条件选择类型：获得合格投资选风险投资型，设有经认定的研究所并有研发支出选研发型，两者都不是或仍在创业中则先考虑创新成长型。</li><li>在公告的申请书上附上证明该类型条件的材料，提交给风险企业确认机构负责人。</li><li>确认机构审查材料，必要时委托各领域专业机构进行材料审查和现场实地调查。</li><li>经风险企业确认委员会审议，风险投资型在30日内、其余两型在45日内通知结果，确有必要时可在20日内延长一次。</li><li>符合条件的，签发有效期3年的风险企业确认书。</li></ol>
<p>不服结果的，可在收到通知之日起30日内以书面形式提出异议，确认机构须在30日内（风险投资型为20日）通知审议结果，并可在15日范围内延长一次。以虚假或不正当方法获得确认的必须撤销；不再符合条件，或因停业·歇业等6个月没有经营活动的，经听证后可被撤销。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 尚未设立法人的预备创业者也能获得确认吗？</p><p class="faq-a">A. 法律规定创新成长型包括创业中的企业。具体评估方法由中小风险企业部公告规定，申请前请一并确认确认机构的说明。</p></div>
<div class="faq-item"><p class="faq-q">Q. 有效期会因类型不同而不同吗？</p><p class="faq-a">A. 不会。施行令规定所有类型均为自确认之日起3年。</p></div>
<div class="faq-item"><p class="faq-q">Q. 创业第2年、销售额很少，可以申请研发型吗？</p><p class="faq-a">A. 创业未满3年的，不适用研发支出占销售额比例标准，但仍须具备研究所认定和年度研发支出标准。</p></div>
<div class="faq-item"><p class="faq-q">Q. 没有研究所适合哪种类型？</p><p class="faq-a">A. 未获得合格投资的，可考虑创新成长型。想申请研发型的，请先了解<a href="/zh/services/research-lab">企业附属研究所认定</a>。</p></div>
</div>

<div class="cta-block"><h3>申请前先确认适合本公司的风险企业确认类型</h3><p>YouSun Administrative Agency（代表行政士 Jung Yu-sun）协助选择类型、整理证明材料、撰写申请书及准备异议申请材料。详情请参阅<a href="/zh/services/venture-cert">风险企业确认服务</a>。电话 02-325-8222，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国ベンチャー企業確認の類型比較 — ベンチャー投資型・研究開発型・革新成長型',
    category: '企業認証',
    metaTitle: '韓国ベンチャー企業確認の類型比較 — 投資型・研究開発型・革新成長型',
    metaDescription: '韓国のベンチャー企業確認はベンチャー投資型・研究開発型・革新成長型の3類型で、確認書の有効期間はいずれも3年です。類型ごとに要件と評価内容が異なり、結果通知期限も30日と45日に分かれます。',
    excerpt: '韓国のベンチャー企業確認にはベンチャー投資型・研究開発型・革新成長型の3類型があります。投資の有無、企業附設研究所の有無、創業段階によって合う類型が異なり、結果通知期限も30日と45日に分かれます。創業中の企業は革新成長型に含まれます。',
    content: `<div class="toc"><p>目次</p><ol><li>3つの確認類型の一覧</li><li>類型別の要件と評価内容</li><li>確認手続と通知・異議申立ての期限</li><li>よくある質問</li></ol></div>
<p><strong>韓国の「ベンチャー企業育成に関する特別法」上、ベンチャー企業確認の類型はベンチャー投資型・研究開発型・革新成長型の3つで、いずれの類型でも中小企業であることが必要です。ベンチャー企業確認書の有効期間は確認された日から3年です。</strong>法律に「予備ベンチャー」という別の類型はなく、創業中の企業は革新成長型の評価対象に含まれます。類型ごとに評価内容と結果通知期限が異なるため、まず自社に合う類型を選ぶことが出発点です。</p>
<p>有効期間満了後については<a href="/ja/blog/venture-innobiz-certification-guide">ベンチャー・イノビズ認証ガイド</a>、確認後の税制支援は<a href="/ja/blog/venture-tax-benefits">ベンチャー企業の税制優遇</a>、研究開発型に必要な研究所認定は<a href="/ja/blog/corporate-research-lab-establishment-guide">企業附設研究所設立ガイド</a>をご覧ください。</p>

<h2>3つの確認類型の一覧</h2>
<p>3類型とも「中小企業基本法」上の中小企業であることが前提で、一般遊興酒店業など大統領令で定める業種を営む企業はベンチャー企業に含まれません。そのうえで、次のいずれかの類型の要件を満たします。</p>
<table><thead><tr><th>区分</th><th>ベンチャー投資型</th><th>研究開発型</th><th>革新成長型</th></tr></thead><tbody>
<tr><td>主な要件</td><td>適格投資家の投資金額の合計と資本金に占める投資比率が基準以上</td><td>認定を受けた企業附設研究所等を保有し、研究開発費と売上高比率が基準以上</td><td>技術の革新性と事業の成長性が優秀</td></tr>
<tr><td>評価内容</td><td>投資要件を満たしているか</td><td>成長性（製品・サービスの競争力、市場規模・見通し）</td><td>技術の優秀性、製品・サービスの競争力、市場規模・見通し</td></tr>
<tr><td>結果通知期限</td><td>申請日から30日</td><td>45日</td><td>45日</td></tr>
<tr><td>異議申立ての結果通知</td><td>申立日から20日</td><td>30日</td><td>30日</td></tr>
<tr><td>創業中の企業</td><td>対象外</td><td>対象外</td><td>含む</td></tr>
</tbody></table>

<h2>類型別の要件と評価内容</h2>
<p><strong>ベンチャー投資型</strong>は、ベンチャー投資会社、ベンチャー投資組合、新技術事業金融業者・投資組合、韓国ベンチャー投資、個人投資組合、創業企画者（アクセラレーター）、技術保証基金、専門個人投資家など法令で定める投資家からの投資が基準です。投資金額の合計が施行令で定める金額以上で、資本金に占める投資金額の合計の比率が10%以上（文化産業の制作者である法人は7%以上）でなければなりません。</p>
<p><strong>研究開発型</strong>は、企業附設研究所または研究開発専担部署（企業附設創作研究所・企業創作専担部署を含む）の認定を受けた企業が対象です。年間研究開発費が施行令で定める金額以上で、年間総売上高に対する研究開発費の比率が5%以上かつ業種別告示比率以上である必要があり、確認申請日が属する四半期の直前4四半期を基準に計算します。売上高比率の基準は、創業後3年を経過していない企業には適用されません。</p>
<p><strong>革新成長型</strong>は投資の誘致や研究所の保有を前提とせず、ベンチャー企業確認機関が技術の革新性と事業の成長性を評価します。具体的な評価基準と方法は中小ベンチャー企業部長官の告示で定められます。</p>

<h2>確認手続と通知・異議申立ての期限</h2>
<ol><li>自社がすでに満たす要件から類型を決めます。適格投資を受けていれば投資型、認定研究所があり研究開発費を支出していれば研究開発型、どちらでもないか創業中であれば革新成長型をまず検討します。</li><li>告示された申請書に類型の要件を証明する書類を添えて、ベンチャー企業確認機関の長に提出します。</li><li>確認機関が書類を検討し、必要に応じて分野別の専門機関に書類検討と現場の実地調査を任せます。</li><li>ベンチャー企業確認委員会の審議を経て、投資型は30日、研究開発型・革新成長型は45日以内に結果が通知されます。やむを得ない場合は20日以内で一度延長されます。</li><li>該当すれば有効期間3年のベンチャー企業確認書が発行されます。</li></ol>
<p>結果に不服がある場合は、通知を受けた日から30日以内に書面で異議を申し立てることができ、確認機関は30日（投資型は20日）以内に審議結果を通知し、15日の範囲で一度延長できます。虚偽や不正な方法で確認を受けた場合は必ず取り消され、要件を満たさなくなった場合や休業・廃業などで6か月間企業活動がない場合は、聴聞を経て取り消されることがあります。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. まだ法人を設立していない予備創業者も確認を受けられますか？</p><p class="faq-a">A. 法律は革新成長型に創業中の企業を含むと定めています。詳しい評価方法は中小ベンチャー企業部の告示で定めるため、申請前に確認機関の案内もあわせてご確認ください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 類型によって有効期間は違いますか？</p><p class="faq-a">A. 違いません。施行令はすべての類型について確認された日から3年と定めています。</p></div>
<div class="faq-item"><p class="faq-q">Q. 創業2年目で売上がほとんどありませんが、研究開発型は可能ですか？</p><p class="faq-a">A. 創業後3年を経過していなければ売上高比率の基準は適用されません。ただし研究所等の認定と年間研究開発費の基準は満たす必要があります。</p></div>
<div class="faq-item"><p class="faq-q">Q. 研究所がない場合はどの類型が合いますか？</p><p class="faq-a">A. 適格投資を受けていなければ革新成長型を検討します。研究開発型を希望する場合は<a href="/ja/services/research-lab">企業附設研究所の認定</a>から確認してください。</p></div>
</div>

<div class="cta-block"><h3>自社に合うベンチャー企業確認の類型を申請前に確認しましょう</h3><p>YouSun Administrative Agency（代表行政士 Jung Yu-sun）が、類型の選択、要件証明書類の整理、申請書の作成と異議申立て書類の準備をお手伝いします。詳しくは<a href="/ja/services/venture-cert">ベンチャー企業確認サービス</a>をご覧ください。電話 02-325-8222、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
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
