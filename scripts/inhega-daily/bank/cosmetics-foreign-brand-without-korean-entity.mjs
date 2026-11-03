// 원고 은행 — INHEGA-FOCUS-1103 2차(보스 msg 4787, 2026-11-03, 맥4 하위 작성, kind=seo3958, angle=situation)
// 주제(풀): cosmetics-distributor(화장품책임판매업등록) / 상황 질문: "중국 등 해외 화장품 브랜드인데 한국 법인 없이 한국에서 팔려면?"
// 출처 검색어(~/work/inhega-focus-1103/p2/kw/kw-sources.md + 11-03 네이버 자동완성 재확인):
//   GoogleAC(ko, gl=kr) "중국 화장품 수입" / NaverAC "화장품 수입 판매"(씨앗 '화장품 수입 판매')·"중국 화장품 수출"(씨앗 '중국 화장품')
//   GSC(10-04~10-31) "hire korea cosmetic responsible seller"·"south korea cosmetic registration"(/en/blog/cosmetics-responsible-distributor)
//   GoogleAC(zh-CN) "韩国 化妆品 进口" / GoogleAC(ja) "韓国 化粧品 輸入 販売"
//
// 겹침 검사: cosmetics-import-sales-registration-guide(국내 수입사가 등록하는 절차·관리자·전성분), cosmetics-responsible-distributor(최초 등록),
//   cosmetics-distributor-compliance-obligations(bank, 등록 후 의무) → "한국 법인이 없는 해외 브랜드가 누구 명의로 팔 수 있나"를 다룬 글 없음.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 로컬 사본 ~/work/inhega-focus-1103/law):
//   화장품법 MST 291337(2026. 10. 20. 시행) — 제2조의2(영업 종류), 제3조 제1항·제3항(책임판매업 등록·기준·책임판매관리자), 제4조 제1항(기능성 심사·보고),
//     제5조 제5항(생산·수입실적·원료 목록 보고), 제10조 제1항 제2호(영업자 상호·주소 표시), 제36조 제1항 제1호(무등록 벌칙)
//   화장품법 시행령 MST 283963 — 제2조 제2호 다목(수입 화장품 유통·판매 = 책임판매업)·라목(전자상거래 수입대행형)
//   화장품법 시행규칙 MST 285249 — 제4조 제2항(등록신청서+품질·안전관리 기준 규정+관리자 자격 서류, 책임판매업소 소재지 관할 지방식약청에 제출),
//     제8조 제1항·제3항(관리자 자격, 상시근로자 10명 이하 대표 겸직), 제12조 제4호(수입관리기록서 항목)·제5호(제조번호별 품질검사)·제9호(표준통관예정보고),
//     제13조 제1항·제2항(실적 2월 말, 원료 목록 유통·판매 전)
// 인허가 구분: 화장품책임판매업 = '등록'(허가·신고 아님), 기능성화장품 = '심사' 또는 '보고서 제출', 실적·원료 목록 = '보고'.
// 추론 표기: "국내 책임판매업소가 있어야 등록 가능"은 규칙 제4조 제2항(소재지 관할 지방청 제출)에서 나온 결론 — 외국법인 직접 등록 불가라는 명문 조항은 확인 못 함 → 화면은 "한국 안에 책임판매업소가 있어야" 로만.
// 확신 없어 뺀 것: 해외직구(개인 통관) 판매의 통관 기준, 상호인증 국가 품질검사 면제(규칙 제12조 제7호) 세부, 등록 처리 일수(법정 일수 미확인), 벌칙 금액(S4).

const SLUG = 'cosmetics-foreign-brand-without-korean-entity'

const entry = {
  topic: 'cosmetics-distributor',
  angle: 'situation',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '중국 화장품 한국 판매',
  source: { type: 'GoogleAC', query: '중국 화장품 수입' },
  pexelsId: 8100691,
  coverImage: '',
  relatedServices: [
    { title: '화장품 제조업·책임판매업 등록', href: '/services/cosmetics' },
  ],

  ko: {
    title: '중국 화장품 한국 판매 — 한국 법인 없는 해외 브랜드가 팔려면',
    category: '화장품',
    metaTitle: '중국 화장품 한국 판매 — 한국 법인 없는 해외 브랜드의 두 가지 길',
    metaDescription: '한국 법인이 없는 중국 등 해외 화장품 브랜드가 한국에서 팔려면 국내 화장품책임판매업자를 통하거나 한국에 영업소를 두고 직접 등록해야 합니다. 갈래별 판단과 서류·기간을 정리했습니다.',
    excerpt: '해외 브랜드가 한국 법인 없이 화장품을 팔 수 있는 길은 국내 화장품책임판매업자(수입사)를 통하는 것입니다. 직접 팔려면 한국에 책임판매업소를 두고 책임판매관리자를 선임해 등록합니다. 미백·주름개선을 내세우면 기능성 심사·보고도 따로 필요합니다.',
    content: `<div class="toc"><p>목차</p><ol><li>법인 없이 팔 때와 직접 등록할 때</li><li>준비 서류와 기간</li><li>유선행정사사무소가 돕는 범위</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>수입한 화장품을 한국에서 유통·판매하려면 그 영업을 화장품책임판매업으로 등록한 자가 있어야 합니다. 등록은 책임판매업소 소재지를 관할하는 지방식품의약품안전청에 하므로, 한국 법인이나 영업소가 없는 해외 브랜드는 국내 책임판매업자(수입사)를 통해 팔거나, 한국에 영업소를 두고 직접 등록하는 두 갈래 중에서 고릅니다.</strong><!-- 근거: 화장품법 제3조 제1항, 시행령 제2조 제2호 다목, 시행규칙 제4조 제2항 --> 등록 없이 판매하면 형사처벌 대상입니다.<!-- 근거: 화장품법 제36조 제1항 제1호 --></p>
<p>국내 수입사가 등록하는 절차 자체는 <a href="/blog/cosmetics-import-sales-registration-guide">화장품 수입 판매 등록 가이드</a>에서, 최초 등록 요건은 <a href="/blog/cosmetics-responsible-distributor">화장품 책임판매업 등록 절차</a>에서 다룹니다.</p>

<h2>법인 없이 팔 때와 직접 등록할 때</h2>
<table><thead><tr><th>상황</th><th>판단</th></tr></thead><tbody>
<tr><td>한국 법인 없이 빨리 팔고 싶다</td><td>이미 등록한 국내 책임판매업자와 계약합니다. 수입사가 자기 명의로 수입관리기록서를 쓰고 제조번호별 품질검사를 거쳐 유통하며, 포장에는 그 수입사 상호와 주소가 표시됩니다.</td></tr>
<tr><td>브랜드를 직접 관리하고 싶다</td><td>한국에 법인이나 영업소를 두고 책임판매업을 등록합니다. 품질관리·책임판매 후 안전관리 기준을 갖추고 책임판매관리자를 둡니다.</td></tr>
<tr><td>미백·주름개선·자외선차단을 내세운다</td><td>어느 갈래든 기능성화장품으로 판매하려면 품목별 심사를 받거나 보고서를 냅니다.<!-- 근거: 화장품법 제4조 제1항 --></td></tr>
</tbody></table>
<p>수입사를 쓰는 경우에도 브랜드사가 넘겨야 할 자료가 많습니다. 수입관리기록서에는 제품명, 원료성분의 규격과 함량, 제조국·제조회사명과 소재지, 제조 및 판매증명서, 한글로 작성한 제품설명서 견본, 제조번호별 수입량과 품질검사 결과가 들어가므로 이 자료를 미리 갖춰 두면 계약 협상도 빨라집니다.<!-- 근거: 화장품법 시행규칙 제12조 제4호 --></p>
<ol><li>판매 방식(수입사 위탁 또는 직접 등록)을 정합니다.</li><li>성분이 한국 사용 금지·사용 기준 원료에 걸리지 않는지 확인합니다.</li><li>제조 및 판매증명서와 성분 규격 자료를 준비합니다.</li><li>직접 등록이면 영업소와 책임판매관리자를 확보해 등록을 신청합니다.</li><li>통관 뒤 제조번호별 품질검사를 마치고 유통합니다.<!-- 근거: 시행규칙 제12조 제5호·제9호 --></li></ol>

<h2>준비 서류와 기간</h2>
<table><thead><tr><th>구분</th><th>서류</th><th>기간</th></tr></thead><tbody>
<tr><td>책임판매업 등록(직접)</td><td>등록신청서, 품질관리·책임판매 후 안전관리 기준에 관한 규정, 책임판매관리자 자격 확인 서류</td><td>책임판매업소 관할 지방식품의약품안전청 심사 후 등록필증 발급</td></tr>
<tr><td>수입 품목별</td><td>수입관리기록서, 제조 및 판매증명서, 한글 제품설명서 견본, 품질검사 결과</td><td>제조번호별 품질검사 후 유통</td></tr>
<tr><td>등록 후 보고</td><td>원료 목록, 지난해 수입실적</td><td>원료 목록은 유통·판매 전, 수입실적은 매년 2월 말까지<!-- 근거: 화장품법 제5조 제5항, 시행규칙 제13조 제1항·제2항 --></td></tr>
</tbody></table>
<p>책임판매관리자는 의사·약사, 이공계나 화장품 관련 학과 학사 이상, 화장품 제조·품질관리 경력자 등 정해진 자격을 갖춰야 하고, 상시근로자가 10명 이하이면 자격을 갖춘 대표가 직무를 함께 할 수 있습니다.<!-- 근거: 화장품법 시행규칙 제8조 제1항·제3항 --></p>
<p>어느 길을 고르든 한국 시장에서 제품 안전을 책임지는 쪽은 책임판매업자입니다. 부작용 같은 안전성 정보를 알게 되면 고시에 따라 보고하고, 위해 우려가 있는 화장품이 유통 중이면 회수계획을 미리 보고한 뒤 회수합니다. 수입사와 계약할 때는 이런 대응을 누가 어떤 자료로 할지 미리 정해 두는 것이 좋습니다.<!-- 근거: 시행규칙 제12조 제10호, 화장품법 제5조의2 제1항·제2항 --></p>

<h2>유선행정사사무소가 돕는 범위</h2>
<p>유선행정사사무소는 판매 방식에 맞춰 수입사 계약 전 확인할 자료 목록을 정리하고, 직접 등록하는 경우 품질관리·안전관리 기준 규정과 등록신청서 작성, 접수, 보완 대응까지 처리합니다. 기능성 표방 제품은 <a href="/services/functional-cosmetics">기능성화장품 심사·보고</a>를 함께 준비하고, 성분표의 한국 사용 기준 검토도 돕습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 해외 본사 명의로 바로 등록할 수 있나요?</p><p class="faq-a">A. 등록은 책임판매업소 소재지 관할 지방식품의약품안전청에 신청하므로, 한국 안에 책임판매업소가 있어야 합니다. 법인이 없다면 국내 수입사를 통하는 것이 현실적인 길입니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 수입사를 바꾸면 어떻게 되나요?</p><p class="faq-a">A. 새 수입사가 자기 명의로 수입관리기록서와 품질검사, 표시를 다시 갖춥니다. 포장의 영업자 상호·주소도 바뀌므로 재고 표시를 미리 확인하십시오.<!-- 근거: 화장품법 제10조 제1항 제2호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 중국 공장에서 만든 제품도 품질검사를 다시 하나요?</p><p class="faq-a">A. 수입 화장품은 원칙적으로 제조번호별 품질검사 후 유통합니다. 지정 검사기관에 위탁해 결과가 있으면 직접 검사를 하지 않을 수 있습니다.<!-- 근거: 시행규칙 제12조 제5호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 기능성화장품 심사는 누구 이름으로 받나요?</p><p class="faq-a">A. 심사나 보고는 화장품제조업자, 화장품책임판매업자, 정해진 대학·연구소 등이 품목별로 합니다. 한국 법인이 없으면 국내 책임판매업자 명의로 진행하는 것이 일반적입니다.<!-- 근거: 화장품법 제4조 제1항 --></p></div>
</div>

<div class="cta-block"><h3>판매 방식부터 정하고 시작하세요</h3><p>제품 목록과 성분표, 현지 제조사 정보를 보내 주시면 유선행정사사무소가 수입사 위탁과 직접 등록 중 맞는 길과 준비 서류를 정리해 드립니다. 진행 범위는 <a href="/services/cosmetics">화장품 제조업·책임판매업 등록 안내</a>에서 확인하실 수 있습니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 화장품법 제3조·제4조·제5조·제10조·제36조, 시행령 제2조, 시행규칙 제4조·제8조·제12조·제13조 --></p>`,
  },

  en: {
    title: 'Selling a Foreign Cosmetics Brand in Korea Without a Korean Company',
    category: 'Cosmetics',
    metaTitle: 'Sell Foreign Cosmetics in Korea Without a Korean Entity — Two Routes',
    metaDescription: 'Foreign cosmetics brands with no Korean entity sell via a registered Korean responsible distributor or open an office and register. Routes and documents.',
    excerpt: 'A foreign cosmetics brand with no Korean company sells in Korea through a registered responsible distributor that imports under its own name. To sell directly, it needs an office in Korea, a responsible manager and its own registration. Whitening or anti-wrinkle claims need a separate functional cosmetics review.',
    content: `<div class="toc"><p>Contents</p><ol><li>Selling without an entity vs. registering yourself</li><li>Documents and timelines</li><li>How we help</li><li>FAQ</li></ol></div>
<p><strong>Imported cosmetics can be distributed and sold in Korea only by a business registered as a cosmetics responsible distributor (화장품책임판매업) with the Ministry of Food and Drug Safety (MFDS). Registration is filed with the regional MFDS office for the distributor's business location, so a brand with no Korean company or office has two routes: sell through a registered Korean importer, or open an office in Korea and register itself.</strong> Selling without registration is a criminal offence.</p>
<p>The importer's own registration is covered in <a href="/en/blog/cosmetics-import-sales-registration-guide">our cosmetics import registration guide</a>, and first-time requirements in <a href="/en/blog/cosmetics-responsible-distributor">our responsible distributor guide</a>.</p>

<h2>Selling without an entity vs. registering yourself</h2>
<table><thead><tr><th>Situation</th><th>Route</th></tr></thead><tbody>
<tr><td>You want to start fast with no Korean company</td><td>Contract a registered Korean distributor. It keeps the import record, tests each batch and releases the products, and its name and address appear on the packaging.</td></tr>
<tr><td>You want to control the brand directly</td><td>Set up a company or office in Korea and register, with quality and post-sale safety standards and a responsible manager.</td></tr>
<tr><td>You claim whitening, anti-wrinkle or sun protection</td><td>On either route, functional cosmetics need a product review or a report.</td></tr>
</tbody></table>
<p>Even with an importer, the brand supplies much of the data. The import record covers the product name, ingredient specifications and amounts, country, maker and address, a certificate of manufacture and sale, a Korean-language product description and batch test results, so having these ready speeds up negotiations.</p>
<ol><li>Choose the route: importer or own registration.</li><li>Check ingredients against Korea's banned and restricted lists.</li><li>Prepare the certificate of manufacture and sale and ingredient data.</li><li>For your own registration, secure an office and a responsible manager, then apply.</li><li>After customs, test each batch and release.</li></ol>

<h2>Documents and timelines</h2>
<table><thead><tr><th>Item</th><th>Documents</th><th>Timeline</th></tr></thead><tbody>
<tr><td>Own registration</td><td>Application, rules on quality and post-sale safety standards, manager qualification documents</td><td>Certificate issued after review by the regional MFDS office</td></tr>
<tr><td>Each imported product</td><td>Import record, certificate of manufacture and sale, Korean description, test results</td><td>Released after batch testing</td></tr>
<tr><td>After registration</td><td>Ingredient list, last year's import results</td><td>Ingredient list before sale; import results by the end of February each year</td></tr>
</tbody></table>
<p>The responsible manager must hold a set qualification, such as a doctor or pharmacist, a science or cosmetics-related degree, or relevant experience. With 10 or fewer regular employees, a qualified owner may act as the manager.</p>
<p>On either route, the responsible distributor answers for product safety in Korea. It reports safety information such as side effects and, if a harmful product is on the market, reports a recall plan in advance and recalls it. Agree with your importer who handles this and with what data.</p>

<h2>How we help</h2>
<p>YouSun Administrative Agency lists what to check before signing with an importer, and for your own registration prepares the standards rules and application, files them and handles corrections. For functional claims we also prepare the <a href="/en/services/functional-cosmetics">functional cosmetics review or report</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can our overseas head office register directly?</p><p class="faq-a">A. The application goes to the regional office for the business location, so you need a business location in Korea. Without one, an importer is the practical route.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if we change importers?</p><p class="faq-a">A. The new importer prepares its own import record, testing and labeling. The name and address on the packaging change too, so check your stock labels.</p></div>
<div class="faq-item"><p class="faq-q">Q. In whose name is the functional cosmetics review done?</p><p class="faq-a">A. A manufacturer, a responsible distributor or a designated university or institute files it product by product. Without a Korean entity, it is usually done in the Korean distributor's name.</p></div>
<div class="faq-item"><p class="faq-q">Q. Must products made in our own factory be tested again?</p><p class="faq-a">A. Imported cosmetics are in principle tested by batch before release, but testing can be skipped if a designated testing body already has batch results.</p></div>
</div>

<div class="cta-block"><h3>Decide the route first</h3><p>Send us your product list, ingredient sheets and factory details, and YouSun Administrative Agency will set out the right route and documents. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '中国化妆品品牌没有韩国法人，怎样在韩国销售？',
    category: '化妆品',
    metaTitle: '中国化妆品进入韩国销售 — 没有韩国法人的两条路径',
    metaDescription: '没有韩国法人的中国化妆品品牌，要在韩国销售，须通过已登记的韩国化妆品责任销售业者进口，或在韩国设立营业所自行登记。说明两条路径的判断、材料与期限。',
    excerpt: '没有韩国法人的海外化妆品品牌，可以通过已登记的韩国责任销售业者（进口商）以其名义进口销售；想自己销售，就要在韩国设立责任销售业营业所、选任责任销售管理人并办理登记。宣称美白、抗皱的，还须另做功能性化妆品审查或报告。',
    content: `<div class="toc"><p>目录</p><ol><li>无法人销售与自行登记</li><li>材料与期限</li><li>我们可以协助的范围</li><li>常见问题</li></ol></div>
<p><strong>进口化妆品要在韩国流通销售，必须由已登记化妆品责任销售业（화장품책임판매업）的经营者负责。登记须向责任销售业营业所所在地管辖的地方食品医药品安全厅提出，因此没有韩国法人或营业所的中国品牌，只能在两条路中选择：通过韩国的责任销售业者（进口商）销售，或在韩国设立营业所自行登记。</strong>未登记销售属于刑事处罚对象。</p>
<p>进口商自身的登记流程见<a href="/zh/blog/cosmetics-import-sales-registration-guide">化妆品进口销售登记指南</a>，首次登记条件见<a href="/zh/blog/cosmetics-responsible-distributor">化妆品责任销售业登记流程</a>。</p>

<h2>无法人销售与自行登记</h2>
<table><thead><tr><th>情形</th><th>判断</th></tr></thead><tbody>
<tr><td>没有韩国法人，想尽快上市</td><td>与已登记的韩国责任销售业者签约。由进口商以自己名义制作进口管理记录、按批号质量检验后流通，包装上标示进口商的商号和地址。</td></tr>
<tr><td>想自己掌控品牌</td><td>在韩国设立法人或营业所，登记责任销售业，具备质量管理·销售后安全管理标准并选任责任销售管理人。</td></tr>
<tr><td>宣称美白、抗皱、防晒</td><td>无论哪条路径，以功能性化妆品销售都须按品目接受审查或提交报告。</td></tr>
</tbody></table>
<p>即使通过进口商，品牌方也要提供大量资料。进口管理记录包括产品名、原料成分规格与含量、制造国·制造公司名称与地址、制造及销售证明书、韩文产品说明书样本、各批号进口量与检验结果，提前备齐可加快合作谈判。</p>
<ol><li>确定销售方式：委托进口商或自行登记。</li><li>确认成分是否涉及韩国禁用或限用原料。</li><li>准备制造及销售证明书和成分规格资料。</li><li>自行登记的，落实营业所和责任销售管理人后申请登记。</li><li>通关后完成按批号质量检验再流通。</li></ol>

<h2>材料与期限</h2>
<table><thead><tr><th>项目</th><th>材料</th><th>期限</th></tr></thead><tbody>
<tr><td>责任销售业登记（自行）</td><td>登记申请书、质量管理·销售后安全管理标准规定、责任销售管理人资格证明</td><td>管辖地方食品医药品安全厅审查后发放登记证</td></tr>
<tr><td>各进口品目</td><td>进口管理记录、制造及销售证明书、韩文说明书样本、检验结果</td><td>按批号检验后流通</td></tr>
<tr><td>登记后报告</td><td>原料目录、上一年进口实绩</td><td>原料目录在流通销售前，进口实绩每年2月底前</td></tr>
</tbody></table>
<p>责任销售管理人须具备医师·药师、理工科或化妆品相关专业学士以上、化妆品制造·质量管理经历等法定资格；常勤员工10人以下的，具备资格的代表可兼任。</p>
<p>无论选择哪条路径，在韩国市场对产品安全负责的都是责任销售业者。获知副作用等安全信息须按告示报告；有危害之虞的化妆品在流通中，须事先报告召回计划并召回。与进口商签约时，最好事先约定由谁、用什么资料来应对。</p>

<h2>我们可以协助的范围</h2>
<p>YouSun Administrative Agency按销售方式整理与进口商签约前须确认的资料清单；自行登记的，负责质量与安全管理标准规定和登记申请书的制作、提交及补正应对。宣称功能的产品，同时准备<a href="/zh/services/functional-cosmetics">功能性化妆品审查与报告</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 可以用中国总公司名义直接登记吗？</p><p class="faq-a">A. 登记向营业所所在地管辖的地方厅申请，必须在韩国境内有责任销售业营业所。没有法人时，通过进口商是现实的选择。</p></div>
<div class="faq-item"><p class="faq-q">Q. 更换进口商会怎样？</p><p class="faq-a">A. 新进口商要以自己名义重新准备进口管理记录、质量检验和标示，包装上的经营者商号和地址也会改变，请提前确认库存标签。</p></div>
<div class="faq-item"><p class="faq-q">Q. 功能性化妆品审查以谁的名义申请？</p><p class="faq-a">A. 由化妆品制造业者、责任销售业者或规定的大学·研究所等按品目申请。没有韩国法人的，一般以韩国责任销售业者名义进行。</p></div>
<div class="faq-item"><p class="faq-q">Q. 在中国工厂生产的产品还要再检验吗？</p><p class="faq-a">A. 进口化妆品原则上按批号检验后流通；委托指定检验机构已有检验结果的，可以不再自行检验。</p></div>
</div>

<div class="cta-block"><h3>先确定销售路径</h3><p>发来产品清单、成分表和工厂信息，YouSun Administrative Agency为你判断适合的路径并整理所需材料。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国法人がない海外コスメブランドが韓国で化粧品を販売するには？',
    category: '化粧品',
    metaTitle: '韓国法人なしで化粧品を韓国販売 — 海外ブランドの二つの方法',
    metaDescription: '韓国法人がない海外コスメブランドが韓国で販売するには、登録済みの韓国の化粧品責任販売業者を通すか、韓国に営業所を置いて自ら登録します。方法別の判断と書類・期間を解説します。',
    excerpt: '韓国法人のない海外ブランドは、登録済みの韓国の責任販売業者（輸入業者）がその名義で輸入・販売する形で販売できます。自社で販売するには、韓国に責任販売業所を置き、責任販売管理者を選任して登録します。美白・シワ改善をうたうなら機能性化粧品の審査・報告も別に必要です。',
    content: `<div class="toc"><p>目次</p><ol><li>法人なしで売る場合と自社登録する場合</li><li>書類と期間</li><li>サポートの範囲</li><li>よくある質問</li></ol></div>
<p><strong>輸入した化粧品を韓国で流通・販売するには、その営業を化粧品責任販売業（화장품책임판매업）として登録した事業者が必要です。登録は責任販売業所の所在地を管轄する地方食品医薬品安全庁に申請するため、韓国法人や営業所のない海外ブランドは、韓国の責任販売業者（輸入業者）を通して売るか、韓国に営業所を置いて自ら登録するかのどちらかを選びます。</strong>登録せずに販売すると刑事罰の対象です。</p>
<p>輸入業者側の登録手続は<a href="/ja/blog/cosmetics-import-sales-registration-guide">化粧品の輸入販売登録ガイド</a>を、最初の登録要件は<a href="/ja/blog/cosmetics-responsible-distributor">化粧品責任販売業の登録手続</a>をご覧ください。</p>

<h2>法人なしで売る場合と自社登録する場合</h2>
<table><thead><tr><th>状況</th><th>判断</th></tr></thead><tbody>
<tr><td>韓国法人なしで早く売りたい</td><td>登録済みの韓国の責任販売業者と契約します。輸入業者が自社名義で輸入管理記録書を作り、製造番号ごとの品質検査を経て流通させ、包装にはその輸入業者の商号と住所が表示されます。</td></tr>
<tr><td>ブランドを自社で管理したい</td><td>韓国に法人や営業所を置き、責任販売業を登録します。品質管理・販売後安全管理の基準を整え、責任販売管理者を置きます。</td></tr>
<tr><td>美白・シワ改善・紫外線カットをうたう</td><td>どちらの方法でも、機能性化粧品として売るには品目ごとに審査を受けるか報告書を出します。</td></tr>
</tbody></table>
<p>輸入業者を使う場合でも、ブランド側が渡す資料は多くあります。輸入管理記録書には製品名、原料成分の規格と含量、製造国・製造会社名と所在地、製造および販売証明書、韓国語の製品説明書見本、製造番号ごとの輸入量と品質検査結果が入るため、あらかじめそろえておくと契約交渉も早く進みます。</p>
<ol><li>販売方法（輸入業者への委託か自社登録か）を決めます。</li><li>成分が韓国の使用禁止・使用基準のある原料に当たらないか確認します。</li><li>製造および販売証明書と成分規格の資料を準備します。</li><li>自社登録なら営業所と責任販売管理者を確保して登録を申請します。</li><li>通関後、製造番号ごとの品質検査を終えて流通させます。</li></ol>

<h2>書類と期間</h2>
<table><thead><tr><th>区分</th><th>書類</th><th>期間</th></tr></thead><tbody>
<tr><td>責任販売業の登録（自社）</td><td>登録申請書、品質管理・販売後安全管理の基準に関する規定、責任販売管理者の資格確認書類</td><td>管轄の地方食品医薬品安全庁の審査後に登録証を発給</td></tr>
<tr><td>輸入品目ごと</td><td>輸入管理記録書、製造および販売証明書、韓国語説明書見本、品質検査結果</td><td>製造番号ごとの品質検査後に流通</td></tr>
<tr><td>登録後の報告</td><td>原料目録、前年の輸入実績</td><td>原料目録は流通・販売前、輸入実績は毎年2月末まで</td></tr>
</tbody></table>
<p>責任販売管理者は、医師・薬剤師、理工系や化粧品関連学科の学士以上、化粧品の製造・品質管理の経験者など定められた資格が必要で、常時勤労者が10人以下なら資格のある代表者が職務を兼ねられます。</p>
<p>どちらの方法でも、韓国市場で製品の安全に責任を負うのは責任販売業者です。副作用などの安全性情報を知ったら告示に従って報告し、危害のおそれがある化粧品が流通していれば回収計画を事前に報告して回収します。輸入業者と契約する際は、誰がどの資料で対応するかを決めておくと安心です。</p>

<h2>サポートの範囲</h2>
<p>YouSun Administrative Agencyは、販売方法に合わせて輸入業者との契約前に確認すべき資料の一覧を整理し、自社登録の場合は品質管理・安全管理の基準規定と登録申請書の作成、提出、補正対応まで行います。機能性をうたう製品は<a href="/ja/services/functional-cosmetics">機能性化粧品の審査・報告</a>もあわせて準備します。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 海外本社の名義でそのまま登録できますか。</p><p class="faq-a">A. 登録は責任販売業所の所在地を管轄する地方庁に申請するため、韓国国内に責任販売業所が必要です。法人がなければ輸入業者を通すのが現実的です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 輸入業者を変えるとどうなりますか。</p><p class="faq-a">A. 新しい輸入業者が自社名義で輸入管理記録書、品質検査、表示をそろえ直します。包装の営業者の商号・住所も変わるため、在庫の表示を事前に確認してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 機能性化粧品の審査は誰の名義で受けますか。</p><p class="faq-a">A. 化粧品製造業者、責任販売業者、定められた大学・研究所などが品目ごとに行います。韓国法人がなければ、韓国の責任販売業者の名義で進めるのが一般的です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 自社工場で作った製品も品質検査をやり直しますか。</p><p class="faq-a">A. 輸入化粧品は原則として製造番号ごとに品質検査をしてから流通させます。指定検査機関に委託して結果がある場合は、自ら検査しなくてもよいとされています。</p></div>
</div>

<div class="cta-block"><h3>まず販売方法を決めましょう</h3><p>製品一覧、成分表、現地の製造会社の情報をお送りいただければ、YouSun Administrative Agencyが合う方法と準備書類を整理します。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 책임판매업은 '등록', 기능성은 '심사·보고', 실적·원료 목록은 '보고'
entry.wrongTerms = [
  '화장품책임판매업 허가', '책임판매업 허가', '화장품책임판매업 신고', '책임판매업 신고', '화장품 수입 허가',
  'cosmetics distribution permit', 'distributor permit', 'cosmetics import license', 'import permit for cosmetics',
  '化妆品责任销售业许可', '责任销售业许可', '化妆品进口许可证',
  '化粧品責任販売業許可', '責任販売業の許可', '化粧品の輸入許可',
]

export default entry
