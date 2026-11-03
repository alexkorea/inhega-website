// 원고 은행 — INHEGA-FOCUS-1103 2차(보스 msg 4787, 2026-11-03, 맥4 하위 작성, kind=seo3958, angle=situation)
// 주제(풀): health-food(건강기능식품판매업신고) / 상황 질문: "집에서 온라인으로만 건강기능식품을 팔 때 판매업 신고는?"
// 출처 검색어(~/work/inhega-focus-1103/p2/kw/kw-sources.md):
//   NaverAC "건강기능식품 온라인판매 자격"·"건강기능식품 온라인 판매방법"(씨앗 '건강기능식품 온라인 판매') / GoogleAC(ko) "건강기능식품 온라인 판매"
//   NaverAC "건강기능식품 판매업신고 하는법"·"건강기능식품 판매업 위생교육" / NaverAC "건강기능식품 oem 소량"
//
// 겹침 검사: health-functional-food-sales-registration-guide(판매업 신고 전반), health-functional-food-registration(신고 요건 — 온라인 판매와 유통전문판매업),
//   health-food-fix(수입 영업등록 처분) → "집(주택)을 사무소로 쓰는 온라인 판매자" 상황을 기능별로 가르는 글 없음. 일반 요건은 링크만.
//
// 법령 대조(law.go.kr DRF OC=visionlaw):
//   건강기능식품에 관한 법률 MST 285331(2026. 10. 8. 시행) — 제4조 제1항(시설기준), 제5조 제1항(제조업 허가), 제6조 제2항(판매업 영업소별 시·군·구 신고, 약국 제외)·
//     제5항(3일 이내 수리 여부 통지)·제6항(미통지 시 수리 간주), 제13조 제1항(판매업 매년 안전위생교육)·제2항(영업 전 교육), 제44조 제1호(미신고 영업 벌칙)
//   같은 법 시행령 MST 267803 — 제2조 제1호 가목(전문제조업)·제3호 가목(일반판매업)·나목(유통전문판매업=전문제조업자에게 의뢰해 자기 상표로 판매)
//   같은 법 시행규칙 MST 286669(2026. 6. 2. 시행) — 제5조 제1항(영업신고서+교육 이수 증명·보관시설 사용계약서·위탁생산계약서), 제19조 제1항(매년 2시간)·
//     제3항 제3호(유통전문 4시간)·제4호(일반판매 2시간), 별표 1 제1호 나목 1)(제조 작업장 독립·분리), 제3호 가목(일반판매업: 전자상거래·통신판매로
//     구매자가 사무소를 방문하지 않으면 주택 용도 건축물을 사무소로 사용 가능), 제4호 가목·다목(유통전문: 주택 용도 사무소 가능, 보관시설·사용계약)
//   전자상거래 등에서의 소비자보호에 관한 법률 MST 282793 — 제12조 제1항(통신판매업 신고, 별개 제도)
// 인허가 구분: 판매업 = '신고'(시·군·구), 제조업 = '허가'(지방식약청). 등록 아님(수입은 수입식품안전관리 특별법 '영업등록' — 이 글에서 다루지 않음).
// 확신 없어 뺀 것: 주거용 오피스텔 등 건축물 용도 경계 사례, 구매대행(해외직구) 판매의 신고 여부, 소분 판매(맞춤형) 세부, 벌칙 금액(S4).

const SLUG = 'health-functional-food-home-online-sales'

const entry = {
  topic: 'health-food',
  angle: 'situation',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '건강기능식품 온라인 판매 자격',
  source: { type: 'NaverAC', query: '건강기능식품 온라인판매 자격' },
  pexelsId: 13787595,
  coverImage: '',
  relatedServices: [
    { title: '건강기능식품 판매업 신고·제조업 허가', href: '/services/health-food' },
  ],

  ko: {
    title: '건강기능식품 온라인 판매 자격 — 집에서 온라인으로만 팔 때 판매업 신고',
    category: '식품/의약',
    metaTitle: '건강기능식품 온라인 판매 자격 — 집에서 팔 때 신고·교육·서류',
    metaDescription: '집에서 온라인으로만 건강기능식품을 팔아도 판매업 신고가 필요합니다. 구매자가 방문하지 않으면 주택을 사무소로 쓸 수 있고, 영업 전 교육과 3일 이내 수리 통지까지 정리했습니다.',
    excerpt: '온라인으로만 팔아도 건강기능식품 판매업 신고 대상입니다. 구매자가 사무소를 찾아오지 않는 전자상거래·통신판매라면 집(주택)을 사무소로 신고할 수 있고, 영업 전에 안전위생교육을 받은 뒤 시·군·구에 신고합니다. 내 상표로 맡겨 만들면 유통전문판매업입니다.',
    content: `<div class="toc"><p>목차</p><ol><li>내 판매 방식에 맞는 신고 고르기</li><li>준비 서류와 기간</li><li>이사·폐업·팝업 판매 때 할 일</li><li>유선행정사사무소가 돕는 범위</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>집에서 온라인으로만 팔아도 건강기능식품을 판매하는 영업이면 건강기능식품 판매업 신고가 필요합니다. 다만 전자상거래·통신판매처럼 구매자가 사무소를 직접 찾아오지 않는 영업이라면 주택 용도 건축물을 사무소로 쓸 수 있어, 집 주소로 영업소를 신고할 수 있습니다.</strong><!-- 근거: 건강기능식품에 관한 법률 제6조 제2항, 시행규칙 별표 1 제3호 가목 --> 신고는 영업소 소재지 시·군·구에 하고, 영업을 시작하기 전에 안전위생교육을 받아야 합니다.<!-- 근거: 같은 법 제6조 제2항, 제13조 제2항 --></p>
<p>판매업 신고 전반은 <a href="/blog/health-functional-food-sales-registration-guide">건강기능식품 판매업 신고 가이드</a>, 온라인 판매와 유통전문판매업 요건은 <a href="/blog/health-functional-food-registration">건강기능식품 판매업 신고 요건</a>에서 더 자세히 다룹니다.</p>

<h2>내 판매 방식에 맞는 신고 고르기</h2>
<table><thead><tr><th>판매 방식</th><th>필요한 신고와 판단</th></tr></thead><tbody>
<tr><td>다른 회사가 만든 제품을 사들여 스마트스토어·자사몰에서만 판매</td><td>건강기능식품일반판매업 신고. 구매자 방문이 없으면 집을 사무소로 쓸 수 있습니다.</td></tr>
<tr><td>내 상표로 전문제조업체에 맡겨 만든 제품(OEM)을 판매</td><td>건강기능식품유통전문판매업 신고. 전자상거래·통신판매 형태면 주택을 사무소로 쓸 수 있고, 전문제조업소와의 위탁생산계약서와 보관시설이 필요합니다.<!-- 근거: 시행령 제2조 제3호 나목, 시행규칙 별표 1 제4호 가목·다목 --></td></tr>
<tr><td>직접 만들어 판매</td><td>판매업 신고가 아니라 지방식품의약품안전청의 제조업 허가 대상이고, 작업장이 독립 건물이거나 다른 용도와 분리돼야 해 집에서는 어렵습니다.<!-- 근거: 법 제5조 제1항, 시행규칙 별표 1 제1호 나목 --></td></tr>
<tr><td>구매자가 집으로 찾아와 사 가는 방식</td><td>주택 사무소 특례의 조건(구매자 미방문)에 맞지 않아 별도 영업소를 검토합니다.</td></tr>
</tbody></table>
<p>상품을 온라인으로 파는 데 필요한 통신판매업 신고는 전자상거래법에 따른 별개 절차입니다. 판매업 신고를 했다고 통신판매업 신고가 되는 것은 아니므로 <a href="/services/mail-order-sales-report">통신판매업 신고</a>도 함께 챙깁니다.<!-- 근거: 전자상거래 등에서의 소비자보호에 관한 법률 제12조 제1항 --> 위탁생산을 맡길 때는 전문제조업소가 허가를 받은 곳인지, 보관을 집에서 할지 다른 창고와 사용계약을 맺을지도 먼저 정해 두어야 신고서 내용이 흔들리지 않습니다.</p>
<ol><li>일반판매업인지 유통전문판매업인지 판매 방식을 정합니다.</li><li>영업 전 안전위생교육을 이수합니다(일반판매업 2시간, 유통전문판매업 4시간).<!-- 근거: 시행규칙 제19조 제3항 제3호·제4호 --></li><li>집 주소를 영업소로 하는 영업신고서를 작성합니다.</li><li>관할 시·군·구에 신고하고 영업신고증을 받습니다.</li><li>통신판매업 신고를 하고 판매를 시작합니다.</li></ol>

<h2>준비 서류와 기간</h2>
<table><thead><tr><th>구분</th><th>서류</th><th>기간</th></tr></thead><tbody>
<tr><td>일반판매업</td><td>영업신고서, 안전위생교육 이수 증명(담당 공무원이 확인할 수 있으면 생략 가능)</td><td>신고일부터 3일 이내 수리 여부 통지, 기간 안에 통지가 없으면 수리 간주<!-- 근거: 법 제6조 제5항·제6항, 시행규칙 제5조 제1항 제2호 --></td></tr>
<tr><td>유통전문판매업</td><td>영업신고서, 교육 이수 증명, 전문제조업소와의 위탁생산계약서, 보관시설 사용계약서(계약한 경우)</td><td>같은 3일 통지 기준<!-- 근거: 시행규칙 제5조 제1항 제3호·제4호 --></td></tr>
<tr><td>신고 후</td><td>매년 안전위생교육</td><td>영업소별로 매년 2시간<!-- 근거: 법 제13조 제1항, 시행규칙 제19조 제1항 --></td></tr>
</tbody></table>

<h2>이사·폐업·팝업 판매 때 할 일</h2>
<p>집을 영업소로 신고했다면 이사할 때 영업소 소재지 변경신고를 해야 합니다. 상호나 대표자 성명, 계약한 보관시설의 소재지, 유통전문판매업의 위탁 제조업소가 바뀔 때도 변경신고 대상입니다.<!-- 근거: 법 제6조 제4항, 시행규칙 제6조 제1항 제1호~제5호 --> 판매를 그만두면 폐업하는 날부터 1개월 이내에 영업신고증을 붙여 폐업신고를 하고, 세무서 폐업신고와 함께 낼 수도 있습니다.<!-- 근거: 시행규칙 제7조 제1항·제2항 --> 일반판매업자가 행사장 같은 다른 장소에서 1개월 범위로 잠깐 판매하려면 영업신고증 사본을 붙여 따로 신고합니다.<!-- 근거: 시행규칙 제5조 제1항 단서 --></p>

<h2>유선행정사사무소가 돕는 범위</h2>
<p>유선행정사사무소는 판매 방식을 듣고 일반판매업과 유통전문판매업 중 맞는 업종을 정리한 뒤, 영업신고서와 위탁생산계약서·보관시설 서류 점검, 신고 접수와 보완 대응까지 처리합니다. 제조나 수입까지 넓힐 계획이면 <a href="/services/health-food">건강기능식품 인허가 안내</a>의 단계도 함께 봅니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 부업으로 조금만 팔아도 신고해야 하나요?</p><p class="faq-a">A. 법은 판매 규모로 신고를 면제하는 규정을 두지 않습니다. 건강기능식품을 판매하는 영업이면 규모와 관계없이 영업소별로 신고하고 매년 교육도 받습니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 신고하지 않고 팔면 어떻게 되나요?</p><p class="faq-a">A. 영업신고 없이 영업하면 형사처벌(징역 또는 벌금) 대상입니다.<!-- 근거: 법 제44조 제1호 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 교육을 먼저 받지 못했는데 신고할 수 있나요?</p><p class="faq-a">A. 원칙은 영업 전 이수입니다. 질병·사고 같은 정해진 사유로 미리 받을 수 없으면 영업을 시작한 뒤 받을 수 있습니다.<!-- 근거: 법 제13조 제2항, 시행규칙 제17조 제1항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 해외 건강기능식품을 직접 들여와 팔려면요?</p><p class="faq-a">A. 판매업 신고만으로는 부족합니다. 지방식품의약품안전청에 수입식품등 수입·판매업 영업등록을 하고, 품목마다 수입신고와 검사를 거쳐야 국내에서 팔 수 있습니다.<!-- 근거: 1차 필러(focus-pillars health-food) 표기 — 수입식품안전관리 특별법 --></p></div>
</div>

<div class="cta-block"><h3>판매 방식만 알려 주셔도 업종이 정해집니다</h3><p>어떤 제품을 어디서 들여와 어떻게 팔지 알려 주시면 유선행정사사무소가 맞는 신고 업종과 준비 서류를 정리해 드립니다. 진행 범위는 <a href="/services/health-food">건강기능식품 판매업 신고 안내</a>에서 확인하실 수 있습니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 건강기능식품에 관한 법률 제4조~제6조·제13조·제44조, 시행령 제2조, 시행규칙 제5조·제17조·제19조·별표 1, 전자상거래법 제12조 --></p>`,
  },

  en: {
    title: 'Selling Health Functional Foods Online From Home in Korea — Do You Need a Sales Report?',
    category: 'Food',
    metaTitle: 'Selling Health Functional Foods Online From Home in Korea',
    metaDescription: 'Selling health functional foods online from home in Korea still needs a sales business report. When a home office is allowed, training and the 3-day rule.',
    excerpt: 'Even online-only sellers of health functional foods in Korea must file a sales business report. If buyers never visit your office, a home can be registered as the business premises. Complete hygiene training first, then report to the local district office. Selling your own brand made by a contract manufacturer is a distribution-specialist sales business.',
    content: `<div class="toc"><p>Contents</p><ol><li>Pick the report that fits how you sell</li><li>Documents and timelines</li><li>Moving, closing or a pop-up</li><li>How we help</li><li>FAQ</li></ol></div>
<p><strong>Selling health functional foods only online from home in Korea still requires a health functional food sales business report. For e-commerce or mail-order sales where buyers never visit the office, a residential building may be used as the office, so you can report your home address as the business premises.</strong> The report goes to the city, county or district office where the premises are, after you complete the safety and hygiene training.</p>
<p>For the general rules see <a href="/en/blog/health-functional-food-sales-registration-guide">our health functional food sales guide</a>.</p>

<h2>Pick the report that fits how you sell</h2>
<table><thead><tr><th>How you sell</th><th>What you need</th></tr></thead><tbody>
<tr><td>Buy finished products and sell them only on an online store</td><td>General sales business report. A home office is allowed if buyers do not visit.</td></tr>
<tr><td>Sell your own brand made by a licensed manufacturer (OEM)</td><td>Distribution-specialist sales report. A home office is allowed for e-commerce, but you need the contract manufacturing agreement and storage.</td></tr>
<tr><td>Make the products yourself</td><td>A manufacturing licence from the regional MFDS office, not a sales report. The workshop must be a separate building or separated from other uses, so a home rarely works.</td></tr>
<tr><td>Buyers come to your home to pick up</td><td>The home office rule requires no buyer visits, so consider separate premises.</td></tr>
</tbody></table>
<p>The mail-order (online sales) report under the E-Commerce Act is a separate filing; see <a href="/en/services/mail-order-sales-report">our online sales report page</a>. Decide early whether storage will be at home or in a contracted warehouse, so the report stays consistent.</p>
<ol><li>Decide whether you are a general seller or a distribution specialist.</li><li>Complete the training before opening: 2 hours for general sales, 4 hours for distribution specialists.</li><li>Prepare the report with your home address as the premises.</li><li>File with the local district office and receive the report certificate.</li><li>File the online sales report and start selling.</li></ol>

<h2>Documents and timelines</h2>
<table><thead><tr><th>Type</th><th>Documents</th><th>Timeline</th></tr></thead><tbody>
<tr><td>General sales</td><td>Report form, training certificate (not needed if the official can check it)</td><td>Decision notice within 3 days; if none, the report is treated as accepted</td></tr>
<tr><td>Distribution specialist</td><td>Report form, training certificate, contract manufacturing agreement, storage contract if any</td><td>Same 3-day rule</td></tr>
<tr><td>After reporting</td><td>Annual training</td><td>2 hours every year per premises</td></tr>
</tbody></table>

<h2>Moving, closing or a pop-up</h2>
<p>If your home is the registered premises, file a change report when you move. Changes to the trade name, the representative, a contracted storage address or, for distribution specialists, the contract manufacturer also need a change report. When you stop selling, file a closure report with your certificate within 1 month of closing; it can be filed together with the tax office closure. A general seller who wants to sell briefly elsewhere, such as at an event, files a separate report with a copy of the certificate for up to 1 month.</p>

<h2>How we help</h2>
<p>YouSun Administrative Agency confirms which sales type fits, checks the report, manufacturing agreement and storage documents, files the report and handles corrections. If you plan to manufacture or import later, see the stages on <a href="/en/services/health-food">our health functional food service page</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Do I need to report if I only sell a little on the side?</p><p class="faq-a">A. Yes. The law has no small-volume exemption; any sales business reports per premises.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if I sell without reporting?</p><p class="faq-a">A. Operating without the report can lead to criminal penalties, including imprisonment or a fine.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can I report before the training?</p><p class="faq-a">A. Training comes first in principle. If set reasons such as illness or an accident prevent it, you may take it after opening.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if I import products myself?</p><p class="faq-a">A. A sales report is not enough. You need an imported food import and sales business registration with the regional MFDS office, then an import declaration and inspection for each product.</p></div>
</div>

<div class="cta-block"><h3>Tell us how you sell, and the type follows</h3><p>Share what you sell, where it comes from and how you sell it, and YouSun Administrative Agency will confirm the report type and documents. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '在韩国居家网上卖保健食品（健康功能食品），需要办销售业申报吗？',
    category: '食品',
    metaTitle: '韩国居家网上销售健康功能食品 — 申报、培训与材料',
    metaDescription: '在韩国居家只在网上销售健康功能食品，也须办理销售业申报。买家不上门时可用住宅作为事务所，开业前须接受安全卫生教育，申报后3日内通知是否受理。本文按销售方式说明申报类型与材料。',
    excerpt: '在韩国即使只在网上销售健康功能食品（保健食品），也属于须申报的销售业。电商·通信销售且买家不上门的，可把住宅申报为营业所；开业前接受安全卫生教育后向市·郡·区申报。以自有品牌委托生产销售的，属于流通专门销售业。',
    content: `<div class="toc"><p>目录</p><ol><li>按销售方式选择申报类型</li><li>材料与期限</li><li>搬家·停业·快闪销售时</li><li>我们可以协助的范围</li><li>常见问题</li></ol></div>
<p><strong>在韩国，即使在家只通过网络销售，只要是销售健康功能食品（건강기능식품，相当于保健食品）的营业，就须办理健康功能食品销售业申报。电商·通信销售等买家不直接上门的营业，可以把住宅用途的建筑物用作事务所，因此可以用家庭住址申报营业所。</strong>申报向营业所所在地的市·郡·区提出，开业前须接受安全卫生教育。</p>
<p>销售业申报的总体说明见<a href="/zh/blog/health-functional-food-sales-registration-guide">健康功能食品销售业申报指南</a>。</p>

<h2>按销售方式选择申报类型</h2>
<table><thead><tr><th>销售方式</th><th>须办理的申报与判断</th></tr></thead><tbody>
<tr><td>采购其他公司的成品，只在网店销售</td><td>一般销售业申报。买家不上门的，可用住宅作事务所。</td></tr>
<tr><td>以自有品牌委托专门制造企业生产（OEM）后销售</td><td>流通专门销售业申报。电商形式可用住宅作事务所，但须有与专门制造企业的委托生产合同和保管设施。</td></tr>
<tr><td>自己生产后销售</td><td>不是销售业申报，而是向地方食品医药品安全厅申请制造业许可；作业场须为独立建筑或与其他用途分隔，在家中难以满足。</td></tr>
<tr><td>买家到家中取货</td><td>不符合“买家不上门”的住宅事务所条件，须另设营业所。</td></tr>
</tbody></table>
<p>网上销售商品所需的通信销售业申报，是依据电子商务法的另一项手续，详见<a href="/zh/services/mail-order-sales-report">通信销售业申报</a>。委托生产的，还要先确定保管放在家中还是与其他仓库签订使用合同，申报内容才不会反复。</p>
<ol><li>确定属于一般销售业还是流通专门销售业。</li><li>开业前完成安全卫生教育（一般销售业2小时，流通专门销售业4小时）。</li><li>以家庭住址为营业所填写营业申报书。</li><li>向管辖市·郡·区申报，领取营业申报证。</li><li>办理通信销售业申报后开始销售。</li></ol>

<h2>材料与期限</h2>
<table><thead><tr><th>类型</th><th>材料</th><th>期限</th></tr></thead><tbody>
<tr><td>一般销售业</td><td>营业申报书、安全卫生教育完成证明（公务员可直接确认的可免）</td><td>自申报日起3日内通知是否受理，逾期未通知视为受理</td></tr>
<tr><td>流通专门销售业</td><td>营业申报书、教育完成证明、与专门制造企业的委托生产合同、保管设施使用合同（如有）</td><td>同样适用3日通知标准</td></tr>
<tr><td>申报后</td><td>每年安全卫生教育</td><td>每个营业所每年2小时</td></tr>
</tbody></table>

<h2>搬家·停业·快闪销售时</h2>
<p>以住宅申报为营业所的，搬家时须办理营业所所在地变更申报；商号、代表人姓名、签约保管设施的所在地，以及流通专门销售业的委托制造企业发生变化时，也须办理变更申报。停止销售的，须自停业之日起1个月内附营业申报证办理停业申报，也可与税务署停业申报一并提交。一般销售业者想在活动现场等其他地点短期销售的，可附营业申报证复印件另行申报，期限在1个月范围内。</p>

<h2>我们可以协助的范围</h2>
<p>YouSun Administrative Agency根据你的销售方式确定适合的业态，检查营业申报书、委托生产合同和保管设施材料，负责申报提交和补正应对。今后打算扩展到生产或进口的，可一并参阅<a href="/zh/services/health-food">健康功能食品许可服务</a>的各阶段说明。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 只是副业少量销售，也要申报吗？</p><p class="faq-a">A. 法律没有按销售规模免除申报。只要是销售健康功能食品的营业，就须按营业所申报。</p></div>
<div class="faq-item"><p class="faq-q">Q. 未申报就销售会怎样？</p><p class="faq-a">A. 未办理营业申报而营业，属于刑事处罚（有期徒刑或罚金）对象。</p></div>
<div class="faq-item"><p class="faq-q">Q. 还没上培训课，能先申报吗？</p><p class="faq-a">A. 原则上须在开业前完成。因疾病、事故等规定事由无法事先参加的，可在开业后补上。</p></div>
<div class="faq-item"><p class="faq-q">Q. 自己从国外进口来卖呢？</p><p class="faq-a">A. 只办销售业申报不够。须向地方食品医药品安全厅办理进口食品等进口·销售业营业登记，并按品目办理进口申报和检验后才能在韩国销售。</p></div>
</div>

<div class="cta-block"><h3>告诉我们销售方式，就能确定业态</h3><p>说明销售什么产品、从哪里进货、怎样销售，YouSun Administrative Agency为你整理适合的申报业态和所需材料。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国で自宅からネットだけで健康機能食品を売るとき、販売業の申告は必要？',
    category: '食品',
    metaTitle: '韓国で自宅から健康機能食品をネット販売 — 申告・教育・書類',
    metaDescription: '韓国で自宅からネットだけで健康機能食品を売る場合も販売業の申告が必要です。購入者が来訪しなければ住宅を事務所にでき、営業前の教育と3日以内の受理通知まで解説します。',
    excerpt: '韓国では、ネットだけで売る場合でも健康機能食品の販売業申告が必要です。購入者が事務所を訪れない電子商取引・通信販売なら自宅（住宅）を営業所として申告でき、営業前に安全衛生教育を受けてから市・郡・区に申告します。自社ブランドで製造を委託するなら流通専門販売業です。',
    content: `<div class="toc"><p>目次</p><ol><li>販売方法に合う申告を選ぶ</li><li>書類と期間</li><li>引っ越し・廃業・ポップアップ販売のとき</li><li>サポートの範囲</li><li>よくある質問</li></ol></div>
<p><strong>韓国では、自宅からネットだけで販売する場合でも、健康機能食品（건강기능식품）を販売する営業であれば健康機能食品販売業の申告が必要です。ただし電子商取引・通信販売のように購入者が事務所を直接訪れない営業なら、住宅用途の建築物を事務所として使えるため、自宅の住所で営業所を申告できます。</strong>申告は営業所所在地の市・郡・区に行い、営業開始前に安全衛生教育を受ける必要があります。</p>
<p>販売業申告の全体像は<a href="/ja/blog/health-functional-food-sales-registration-guide">健康機能食品販売業の申告ガイド</a>をご覧ください。</p>

<h2>販売方法に合う申告を選ぶ</h2>
<table><thead><tr><th>販売方法</th><th>必要な申告と判断</th></tr></thead><tbody>
<tr><td>他社が作った製品を仕入れ、ネットショップだけで販売</td><td>健康機能食品一般販売業の申告。購入者の来訪がなければ自宅を事務所にできます。</td></tr>
<tr><td>自社ブランドで専門製造業者に委託した製品（OEM）を販売</td><td>健康機能食品流通専門販売業の申告。電子商取引なら住宅を事務所にできますが、専門製造業者との委託生産契約書と保管施設が必要です。</td></tr>
<tr><td>自分で製造して販売</td><td>販売業の申告ではなく、地方食品医薬品安全庁の製造業許可の対象です。作業場は独立した建物か他の用途と分離されている必要があり、自宅では困難です。</td></tr>
<tr><td>購入者が自宅に受け取りに来る</td><td>住宅を事務所にできる条件（購入者の来訪なし）に合わないため、別の営業所を検討します。</td></tr>
</tbody></table>
<p>商品をネットで売るための通信販売業の申告は、電子商取引法に基づく別の手続です。<a href="/ja/services/mail-order-sales-report">通信販売業申告</a>もあわせて確認してください。製造を委託する場合は、保管を自宅で行うか別の倉庫と使用契約を結ぶかも先に決めておくと、申告内容がぶれません。</p>
<ol><li>一般販売業か流通専門販売業か、販売方法を決めます。</li><li>営業前に安全衛生教育を修了します（一般販売業2時間、流通専門販売業4時間）。</li><li>自宅住所を営業所とする営業申告書を作成します。</li><li>管轄の市・郡・区に申告し、営業申告証を受け取ります。</li><li>通信販売業の申告をして販売を始めます。</li></ol>

<h2>書類と期間</h2>
<table><thead><tr><th>区分</th><th>書類</th><th>期間</th></tr></thead><tbody>
<tr><td>一般販売業</td><td>営業申告書、安全衛生教育の修了証明（担当公務員が確認できれば省略可）</td><td>申告日から3日以内に受理の可否を通知、期間内に通知がなければ受理したものとみなす</td></tr>
<tr><td>流通専門販売業</td><td>営業申告書、教育修了証明、専門製造業者との委託生産契約書、保管施設の使用契約書（契約した場合）</td><td>同じく3日以内の通知</td></tr>
<tr><td>申告後</td><td>毎年の安全衛生教育</td><td>営業所ごとに毎年2時間</td></tr>
</tbody></table>

<h2>引っ越し・廃業・ポップアップ販売のとき</h2>
<p>自宅を営業所として申告した場合、引っ越すときは営業所所在地の変更申告が必要です。商号や代表者の氏名、契約した保管施設の所在地、流通専門販売業の委託先製造業者が変わるときも変更申告の対象です。販売をやめるときは、廃業する日から1か月以内に営業申告証を添えて廃業申告をし、税務署への廃業申告と一緒に出すこともできます。一般販売業者がイベント会場など別の場所で一時的に販売するときは、1か月の範囲で営業申告証の写しを添えて別に申告します。</p>

<h2>サポートの範囲</h2>
<p>YouSun Administrative Agencyは、販売方法をうかがって一般販売業と流通専門販売業のどちらが合うかを整理し、営業申告書と委託生産契約書・保管施設の書類の確認、申告、補正対応まで行います。製造や輸入まで広げる予定があれば、<a href="/ja/services/health-food">健康機能食品の許認可サービス</a>の各段階もあわせてご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 副業で少しだけ売る場合も申告が必要ですか。</p><p class="faq-a">A. 法律は販売規模による申告の免除を定めていません。健康機能食品を販売する営業なら営業所ごとに申告します。</p></div>
<div class="faq-item"><p class="faq-q">Q. 申告せずに売るとどうなりますか。</p><p class="faq-a">A. 営業申告をせずに営業すると、懲役または罰金の刑事罰の対象です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 教育を先に受けられなかった場合でも申告できますか。</p><p class="faq-a">A. 原則は営業前の修了です。病気や事故など定められた事由で事前に受けられない場合は、営業開始後に受けることができます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 海外の製品を自分で輸入して売る場合は？</p><p class="faq-a">A. 販売業の申告だけでは足りません。地方食品医薬品安全庁で輸入食品等輸入・販売業の営業登録をし、品目ごとに輸入申告と検査を経てから販売します。</p></div>
</div>

<div class="cta-block"><h3>販売方法を教えていただければ業種が決まります</h3><p>どの製品をどこから仕入れ、どう売るかをお知らせいただければ、YouSun Administrative Agencyが申告の業種と準備書類を整理します。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 판매업은 '신고'(시·군·구), 제조업은 '허가'
entry.wrongTerms = [
  '건강기능식품 판매업 허가', '건강기능식품판매업 허가', '판매업 등록증', '건강기능식품 판매업 등록', '건강기능식품 제조업 신고',
  'health functional food sales license', 'sales business permit', 'sales business registration certificate',
  '健康功能食品销售业许可', '销售业许可证',
  '健康機能食品販売業の許可', '販売業許可',
]

export default entry
