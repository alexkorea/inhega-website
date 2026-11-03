// 원고 은행 — INHEGA-FOCUS-1103 2차(보스 msg 4787, 2026-11-03, 맥4 하위 작성, kind=seo3958, angle=situation)
// 주제(풀): factory(공장등록) / 상황 질문: "건물을 임대해 공장을 돌리는데 공장등록이 되나?"
// 출처 검색어(~/work/inhega-focus-1103/p2/kw/kw-sources.md):
//   GoogleAC(ko, gl=kr) "임대 공장등록"(씨앗 '공장등록 임대') / GoogleAC "500제곱미터 미만 공장등록" / GoogleAC·NaverAC "공장등록 안하면"
//   NaverAC "공장등록증 발급 조건"·"공장등록조건" / GSC "공장등록 방법"(/services/factory)
//
// 겹침 검사: factory-registration-application-guide(신청 방법·처리기간 일반), factory-fix(취소·변경등록 누락 과태료), factory-select(대행 선택)
//   → "임차인(점유자)이 신청인이 되는 경우"와 면적별 갈래를 다룬 글 없음. 일반 절차는 링크만.
//
// 법령 대조(law.go.kr DRF OC=visionlaw, 로컬 사본 ~/work/inhega-focus-1103/law):
//   산업집적활성화 및 공장설립에 관한 법률 MST 284369(2026. 9. 18. 시행) — 제13조 제1항(공장건축면적 500제곱미터 이상 신설·증설·업종변경 승인)·
//     제2항 제2호(입주계약 체결 시 승인 의제), 제15조 제1항(완료신고), 제16조 제1항(완료신고 후 등록)·제2항(승인 대상 외 공장의 소유자 또는 점유자가
//     등록 '신청할 수 있다')·제4항(변경등록 2개월 이내)
//   같은 법 시행규칙 MST 285509(2026. 4. 9. 시행) — 제6조 제1항 제3호(승인 신청 시 타인 소유 토지·건축물 사용권 증명 서류)·제3항(20일 결정),
//     제10조 제1항(완료신고 후 3일, 의제 시 20일 통지), 제11조 제2항 제2호(등록된 공장 임차 시 임차사실 증명 서류),
//     제12조 제1항(등록신청서+승인 대상 외 공장 사업계획서, 건축물대장 공동이용 확인)·제2항(관계 법령·기준공장면적률 적합 시 7일, 의제 시 20일),
//     제12조의3 제1항~제4항(공장등록증명서·대장 등본, 소유자·점유자, 온라인 관할 외 발급)
//   ※ 완료신고 '2개월 이내'는 시행령 위임 사항 — 1차 필러(focus-pillars factory, 맥7 검수 PASS) 표기 재사용.
// 인허가 구분: 500제곱미터 이상 = 공장설립등의 '승인' → 완료신고 → '등록'. 미만 = 공장'등록' 신청(선택). 산업단지 = '입주계약'(승인 의제). 허가 아님.
// 확신 없어 뺀 것: 지식산업센터 개별 규정, 같은 건물 다른 임차인 공장과의 면적 구분 방법(화면은 '계약서·도면으로 구분해 두라'는 실무 조언만, 법령 기준 서술 없음), 미등록 시 제재(500 미만은 신청 선택이라 제재 조항 없음 — '불이익' 단정 안 함, 실무상 표현만), 금액(S4).

const SLUG = 'factory-registration-leased-building'

const entry = {
  topic: 'factory',
  angle: 'situation',
  slug: SLUG,
  kind: 'seo3958',
  keyword: '임대 공장등록',
  source: { type: 'GoogleAC', query: '임대 공장등록' },
  pexelsId: 18569750,
  coverImage: '',
  relatedServices: [
    { title: '공장설립 승인·공장등록', href: '/services/factory' },
  ],

  ko: {
    title: '임대 공장등록 — 건물을 빌려 공장을 돌리는데 공장등록이 될까',
    category: '건축/부동산',
    metaTitle: '임대 공장등록 — 빌린 건물에서 공장등록하는 조건과 서류',
    metaDescription: '건물을 임대해 공장을 운영해도 공장등록을 신청할 수 있습니다. 공장건축면적 500제곱미터 기준 갈래, 임대차계약서 등 사용권 증명, 7일·20일 처리기간을 정리했습니다.',
    excerpt: '임차한 건물이어도 공장등록이 됩니다. 500제곱미터 미만 공장은 소유자뿐 아니라 점유자도 등록을 신청할 수 있고, 500제곱미터 이상을 새로 설치하면 임대차계약서 같은 사용권 증명 서류를 붙여 공장설립등의 승인을 받습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>면적과 위치에 따른 갈래</li><li>준비 서류와 기간</li><li>유선행정사사무소가 돕는 범위</li><li>자주 묻는 질문 (FAQ)</li></ol></div>
<p><strong>건물을 빌려 쓰는 공장도 공장등록을 할 수 있습니다. 공장설립등의 승인 대상이 아닌 공장은 소유자뿐 아니라 점유자, 즉 임차인도 시장·군수·구청장에게 공장등록을 신청할 수 있고, 승인 대상인 공장도 남의 토지·건축물을 쓰는 경우 사용권을 증명하는 서류를 붙여 승인을 신청합니다.</strong><!-- 근거: 산업집적활성화 및 공장설립에 관한 법률 제16조 제2항, 시행규칙 제6조 제1항 제3호 --> 관건은 소유 여부가 아니라 그 건물의 용도와 입지가 관계 법령 기준에 맞는지입니다.</p>
<p>일반 신청 절차와 처리기간은 <a href="/blog/factory-registration-application-guide">공장등록 신청 방법과 처리기간</a>, 등록 후 변경등록을 놓쳤을 때의 처분은 <a href="/blog/factory-fix">공장등록 취소 사유·변경등록 누락 정리</a>에서 다룹니다.</p>

<h2>면적과 위치에 따른 갈래</h2>
<table><thead><tr><th>상황</th><th>절차</th></tr></thead><tbody>
<tr><td>임차한 건물의 공장건축면적이 500제곱미터 미만</td><td>공장설립등의 승인 없이 점유자 자격으로 공장등록을 신청할 수 있습니다. 등록은 신청 사항이라 의무는 아니지만, 공장등록증명서가 필요하면 먼저 등록해야 합니다.<!-- 근거: 법 제13조 제1항, 제16조 제2항 --></td></tr>
<tr><td>임차한 땅·건물에 500제곱미터 이상 공장을 새로 설치하거나 업종을 바꿈</td><td>사용권 증명 서류를 붙여 공장설립등의 승인을 받고, 건설·설비 설치를 마치면 완료신고를 한 뒤 등록됩니다.<!-- 근거: 법 제13조 제1항, 제15조 제1항, 제16조 제1항, 시행규칙 제6조 제1항 제3호 --></td></tr>
<tr><td>이미 등록된 공장을 그대로 임차</td><td>등록사항이 바뀌면 임차사실을 증명하는 서류를 붙여 2개월 이내에 변경등록을 신청합니다.<!-- 근거: 법 제16조 제4항, 시행규칙 제11조 제2항 제2호 --></td></tr>
<tr><td>산업단지 안의 공장을 임차</td><td>관리기관과 입주계약을 맺으면 공장설립등의 승인을 받은 것으로 봅니다.<!-- 근거: 법 제13조 제2항 제2호 --></td></tr>
</tbody></table>
<p>시장·군수·구청장은 공장등록 신청을 받으면 건축법, 국토의 계획 및 이용에 관한 법률, 대기환경보전법, 물환경보전법, 소음·진동관리법 같은 관계 법령의 기준과 기준공장면적률에 맞는지를 봅니다.<!-- 근거: 시행규칙 제12조 제2항 --> 그래서 임대차계약 전에 건축물대장의 용도와 용도지역부터 확인하는 것이 안전합니다. 용도가 맞지 않으면 <a href="/services/building-usage">건축물 용도변경</a>을 먼저 검토합니다. 같은 건물에 다른 임차인이 함께 있으면 내가 쓰는 공장부지·건축면적을 임대차계약서와 도면으로 구분해 두어야 사업계획서의 면적이 정리됩니다.</p>
<ol><li>건축물대장으로 건물 용도와 면적을 확인합니다.</li><li>토지이용계획으로 용도지역과 업종 입지 가능 여부를 봅니다.</li><li>임대차계약서에 공장 용도 사용과 기계·장치 설치를 적어 둡니다.</li><li>면적에 따라 공장등록 신청 또는 공장설립등의 승인을 신청합니다.</li><li>등록 뒤 공장등록증명서를 발급받습니다.</li></ol>

<h2>준비 서류와 기간</h2>
<table><thead><tr><th>구분</th><th>서류</th><th>기간</th></tr></thead><tbody>
<tr><td>승인 대상 외 공장등록</td><td>공장등록신청서, 승인 대상 외 공장 사업계획서, 임대차계약서 등 점유 근거(건축물대장은 행정정보로 확인)</td><td>신청일부터 7일 이내 등록 통지, 인허가 의제가 있으면 20일 이내<!-- 근거: 시행규칙 제12조 제1항·제2항 --></td></tr>
<tr><td>공장설립등의 승인</td><td>승인신청서, 사업계획서, 타인 소유 토지·건축물의 사용권 증명 서류</td><td>신청일부터 20일 이내 결정(전부 시·군·구 권한이면 14일, 의제가 없으면 7일)<!-- 근거: 시행규칙 제6조 제1항·제3항, 1차 필러 표기 --></td></tr>
<tr><td>완료신고 후 등록</td><td>완료신고서, 건축물 사용승인서, 제조시설 설치 완료 증명</td><td>설치 완료일부터 2개월 이내 완료신고, 신고 후 3일(의제 시 20일) 이내 등록 통지<!-- 근거: 법 제15조 제1항, 시행규칙 제10조 제1항, 완료신고 기간은 1차 필러 표기 --></td></tr>
</tbody></table>

<h2>유선행정사사무소가 돕는 범위</h2>
<p>유선행정사사무소는 임대차계약 전 건축물대장·토지이용계획 검토부터 공장등록신청서와 사업계획서 작성, 승인 대상이면 공장설립등의 승인 신청과 완료신고, 보완 대응까지 처리합니다. 등록 후 회사명·업종·면적이 바뀔 때의 변경등록 일정도 함께 관리합니다. 진행 범위는 <a href="/services/factory">공장설립 승인·공장등록 안내</a>에서 확인하실 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 건물주 동의가 따로 필요한가요?</p><p class="faq-a">A. 법령은 점유자도 신청할 수 있게 하고, 승인 신청에는 사용권 증명 서류를 요구합니다. 임대차계약서에 공장 용도 사용이 드러나도록 해 두면 확인 과정이 수월합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 500제곱미터 미만인데 꼭 등록해야 하나요?</p><p class="faq-a">A. 승인 대상이 아닌 공장의 등록은 신청 사항입니다. 다만 공장등록증명서를 요구하는 지원사업이나 인증이 있어 실무상 등록해 두는 경우가 많습니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 공장등록증명서는 누가 발급받을 수 있나요?</p><p class="faq-a">A. 등록된 공장에서 제조업을 하는 자가 신청하고, 소유자·점유자 같은 이해관계인은 공장등록대장 등본을 받을 수 있습니다. 공장설립온라인지원시스템으로 관할 밖 공장의 증명서도 발급됩니다.<!-- 근거: 시행규칙 제12조의3 제1항~제4항 --></p></div>
<div class="faq-item"><p class="faq-q">Q. 임차 기간이 끝나 다른 건물로 옮기거나 면적을 넓히면요?</p><p class="faq-a">A. 승인 대상 외로 등록한 공장은 소재지나 업종이 바뀌면 변경등록 절차를 따르고, 증설해도 공장건축면적이 500제곱미터 미만이면 변경등록으로 처리합니다. 증설로 500제곱미터 이상이 되면 공장설립등의 승인 대상이 됩니다.<!-- 근거: 시행규칙 제12조 제4항 제2호~제4호, 법 제13조 제1항, 제16조 제4항 --></p></div>
</div>

<div class="cta-block"><h3>계약서에 서명하기 전에 확인하세요</h3><p>임차 예정 건물의 주소와 면적, 업종을 알려 주시면 유선행정사사무소가 공장등록 가능 여부와 필요한 절차를 정리해 드립니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p><a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">상담 신청하기</a></div>
<p class="author-block">유선행정사사무소 (대표 행정사 정유선)<!-- 근거: 산업집적활성화 및 공장설립에 관한 법률 제13조·제15조·제16조, 시행규칙 제6조·제10조·제11조·제12조·제12조의3 --></p>`,
  },

  en: {
    title: 'Factory Registration in a Leased Building in Korea — Can a Tenant Register?',
    category: 'Manufacturing',
    metaTitle: 'Factory Registration in a Leased Building in Korea',
    metaDescription: 'Tenants in Korea can register a factory in a leased building. The 500 square metre rule, proof of right to use the property and the 7-day and 20-day timelines.',
    excerpt: 'A leased building can still be registered as a factory in Korea. Factories under 500 square metres may be registered by an occupant as well as the owner, and a new factory of 500 square metres or more on leased property needs establishment approval with proof of the right to use the land and building.',
    content: `<div class="toc"><p>Contents</p><ol><li>Paths by floor area and location</li><li>Documents and timelines</li><li>How we help</li><li>FAQ</li></ol></div>
<p><strong>A factory in a leased building can be registered in Korea. For factories that do not need establishment approval, the occupant, meaning the tenant, may apply to the city, county or district office just as the owner can. Where approval is needed and the land or building belongs to someone else, the application includes documents proving the right to use it.</strong> What matters is not ownership but whether the building's use and location meet the relevant rules.</p>
<p>See <a href="/en/blog/factory-registration-application-guide">our factory registration guide</a> for the general procedure.</p>

<h2>Paths by floor area and location</h2>
<table><thead><tr><th>Situation</th><th>Procedure</th></tr></thead><tbody>
<tr><td>Leased factory floor area under 500 square metres</td><td>Apply for registration as the occupant, without approval. Registration is optional, but you need it to obtain a registration certificate.</td></tr>
<tr><td>New factory of 500 square metres or more, or a change of industry, on leased property</td><td>Obtain establishment approval with proof of the right to use the property, file a completion report after building and installing equipment, then register.</td></tr>
<tr><td>Leasing a factory that is already registered</td><td>If registered details change, apply for a change registration within 2 months with proof of the lease.</td></tr>
<tr><td>Leasing inside an industrial complex</td><td>A tenancy agreement with the complex management body counts as approval.</td></tr>
</tbody></table>
<p>The office checks the Building Act, land use planning rules, air, water, noise and vibration laws, and the standard factory area ratio. Check the building's registered use and zoning before you sign a lease, and if the use does not fit, look at a <a href="/en/services/building-usage">change of building use</a> first.</p>
<ol><li>Check the building register for use and floor area.</li><li>Check the land use plan for zoning and whether your industry is allowed.</li><li>State factory use and machinery installation in the lease.</li><li>Apply for registration or approval depending on floor area.</li><li>Obtain the factory registration certificate after registration.</li></ol>

<h2>Documents and timelines</h2>
<table><thead><tr><th>Case</th><th>Documents</th><th>Timeline</th></tr></thead><tbody>
<tr><td>Registration without approval</td><td>Application, business plan for factories outside approval, lease as proof of occupancy (building register checked electronically)</td><td>Notice within 7 days, or 20 days if other permits are deemed granted</td></tr>
<tr><td>Establishment approval</td><td>Application, business plan, proof of the right to use another's land or building</td><td>Decision within 20 days (14 days if all within local authority, 7 days without deemed permits)</td></tr>
<tr><td>Completion and registration</td><td>Completion report, building use approval, proof of equipment installation</td><td>Report within 2 months of completion; registration notice within 3 days (20 days with deemed permits)</td></tr>
</tbody></table>

<h2>How we help</h2>
<p>YouSun Administrative Agency reviews the building register and land use plan before you sign, prepares the registration application and business plan, handles approval and completion reports where needed, and responds to corrections. See <a href="/en/services/factory">our factory approval and registration service</a>.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Do I need separate consent from the landlord?</p><p class="faq-a">A. The law lets occupants apply, and approval requires proof of the right to use. A lease that clearly allows factory use makes the review smoother.</p></div>
<div class="faq-item"><p class="faq-q">Q. Under 500 square metres, must I register?</p><p class="faq-a">A. It is optional for factories outside approval, but in practice many register because some support programmes and certifications ask for the certificate.</p></div>
<div class="faq-item"><p class="faq-q">Q. Who can obtain the registration certificate?</p><p class="faq-a">A. The manufacturer at the registered factory; owners, occupants and other interested parties can get a copy of the register. The online factory system issues certificates for factories in other areas.</p></div>
<div class="faq-item"><p class="faq-q">Q. What if the lease ends and we move, or we expand?</p><p class="faq-a">A. For a factory registered outside approval, a new address or industry follows the change registration procedure, and an expansion that stays under 500 square metres is a change registration. If it reaches 500 square metres or more, approval is required.</p></div>
</div>

<div class="cta-block"><h3>Check before you sign the lease</h3><p>Send the address, floor area and industry, and YouSun Administrative Agency will confirm whether registration works and which steps apply. Call 02-363-2251, weekdays 09:30~17:30 KST.</p><a href="/en/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">Request a consultation</a></div>
<p class="author-block">YouSun Administrative Agency (Chief Administrative Agent Jung Yu-sun)</p>`,
  },

  zh: {
    title: '在韩国租用厂房开工厂，可以办理工厂登记吗？',
    category: '制造业',
    metaTitle: '韩国租赁厂房的工厂登记 — 承租人能否申请',
    metaDescription: '在韩国租用的建筑也能办理工厂登记。本文按工厂建筑面积500平方米划分申请路径，说明承租人须附的租赁合同等使用权证明，以及7日·20日的处理期限。',
    excerpt: '在韩国，租来的建筑同样可以办理工厂登记。建筑面积不足500平方米的工厂，所有人和占有人（承租人）都可申请登记；在租赁土地·建筑上新设500平方米以上的工厂，须附使用权证明取得工厂设立批准。',
    content: `<div class="toc"><p>目录</p><ol><li>按面积和位置划分的路径</li><li>材料与期限</li><li>我们可以协助的范围</li><li>常见问题</li></ol></div>
<p><strong>在韩国，租用建筑经营的工厂也可以办理工厂登记。不属于工厂设立批准对象的工厂，不仅所有人，占有人即承租人也可以向市长·郡守·区厅长申请登记；属于批准对象且使用他人土地·建筑的，申请批准时附上使用权证明材料。</strong>关键不在于是否拥有产权，而在于建筑用途和选址是否符合相关法令标准。</p>
<p>一般申请流程见<a href="/zh/blog/factory-registration-application-guide">工厂登记申请方法与处理期限</a>。</p>

<h2>按面积和位置划分的路径</h2>
<table><thead><tr><th>情形</th><th>程序</th></tr></thead><tbody>
<tr><td>租用建筑的工厂建筑面积不足500平方米</td><td>无须设立批准，以占有人身份申请工厂登记。登记属于申请事项而非义务，但要取得工厂登记证明书须先登记。</td></tr>
<tr><td>在租赁土地·建筑上新设500平方米以上工厂或变更业种</td><td>附使用权证明取得工厂设立批准，建设和设备安装完成后提交完成申报，再予登记。</td></tr>
<tr><td>直接租用已登记的工厂</td><td>登记事项变化的，附租赁事实证明，在2个月内申请变更登记。</td></tr>
<tr><td>租用产业园区内的工厂</td><td>与管理机构签订入驻合同，即视为已取得设立批准。</td></tr>
</tbody></table>
<p>主管机关受理登记申请时，会审查建筑法、国土规划利用法、大气·水环境·噪音振动等法令标准以及标准工厂面积率。因此签租赁合同前，应先确认建筑物台账上的用途和用途地域；用途不符的，先研究<a href="/zh/services/building-usage">建筑物用途变更</a>。</p>
<ol><li>通过建筑物台账确认用途和面积。</li><li>通过土地利用计划确认用途地域和业种能否入驻。</li><li>在租赁合同中写明作为工厂使用及安装机械设备。</li><li>按面积申请工厂登记或工厂设立批准。</li><li>登记后领取工厂登记证明书。</li></ol>

<h2>材料与期限</h2>
<table><thead><tr><th>类型</th><th>材料</th><th>期限</th></tr></thead><tbody>
<tr><td>非批准对象的工厂登记</td><td>工厂登记申请书、非批准对象工厂事业计划书、租赁合同等占有依据（建筑物台账由行政信息共享确认）</td><td>自申请日起7日内通知登记，有许可拟制的20日内</td></tr>
<tr><td>工厂设立批准</td><td>批准申请书、事业计划书、他人土地·建筑的使用权证明</td><td>自申请日起20日内决定（全部属市郡区权限的14日，无拟制的7日）</td></tr>
<tr><td>完成申报后登记</td><td>完成申报书、建筑使用批准书、制造设施安装完成证明</td><td>安装完成后2个月内申报，申报后3日（有拟制的20日）内通知登记</td></tr>
</tbody></table>

<h2>我们可以协助的范围</h2>
<p>YouSun Administrative Agency从签约前审查建筑物台账和土地利用计划开始，负责工厂登记申请书和事业计划书的制作；属于批准对象的，办理工厂设立批准申请和完成申报，并应对补正要求。详见<a href="/zh/services/factory">工厂设立批准·工厂登记服务</a>。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 需要房东另行同意吗？</p><p class="faq-a">A. 法令允许占有人申请，批准申请须附使用权证明。租赁合同中写明作工厂使用，审查会更顺利。</p></div>
<div class="faq-item"><p class="faq-q">Q. 不足500平方米也必须登记吗？</p><p class="faq-a">A. 非批准对象工厂的登记属于申请事项；但部分扶持项目和认证要求提供工厂登记证明书，实务中多数会先办理登记。</p></div>
<div class="faq-item"><p class="faq-q">Q. 谁可以领取工厂登记证明书？</p><p class="faq-a">A. 在已登记工厂从事制造业者可申请；所有人、占有人等利害关系人可领取工厂登记台账誊本。通过工厂设立在线支援系统，也可领取管辖区域外工厂的证明书。</p></div>
<div class="faq-item"><p class="faq-q">Q. 租期届满搬到别处或扩大面积怎么办？</p><p class="faq-a">A. 作为非批准对象登记的工厂，所在地或业种变更的按变更登记程序办理；扩建后工厂建筑面积仍不足500平方米的，以变更登记处理；扩建后达到500平方米以上的，属于工厂设立批准对象。</p></div>
</div>

<div class="cta-block"><h3>签租赁合同前先确认</h3><p>告诉我们拟租建筑的地址、面积和业种，YouSun Administrative Agency为你确认能否登记以及所需程序。电话 02-363-2251，工作日 09:30~17:30 KST。</p><a href="/zh/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">申请咨询</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },

  ja: {
    title: '韓国で賃借した建物の工場でも工場登録はできる？',
    category: '製造業',
    metaTitle: '韓国の賃借工場の工場登録 — 借主でも申請できる条件と書類',
    metaDescription: '韓国では建物を借りて運営する工場でも工場登録を申請できます。工場建築面積500平方メートルの基準、賃貸借契約書などの使用権の証明、7日・20日の処理期間を解説します。',
    excerpt: '韓国では賃借した建物でも工場登録ができます。500平方メートル未満の工場は所有者だけでなく占有者（借主）も登録を申請でき、借りた土地・建物に500平方メートル以上の工場を新設する場合は、使用権を証明する書類を添えて工場設立等の承認を受けます。',
    content: `<div class="toc"><p>目次</p><ol><li>面積と立地による分かれ道</li><li>書類と期間</li><li>サポートの範囲</li><li>よくある質問</li></ol></div>
<p><strong>韓国では、建物を借りて運営する工場でも工場登録ができます。工場設立等の承認の対象でない工場は、所有者だけでなく占有者、つまり借主も市長・郡守・区庁長に工場登録を申請でき、承認の対象となる工場でも他人の土地・建物を使う場合は使用権を証明する書類を添えて承認を申請します。</strong>ポイントは所有しているかどうかではなく、その建物の用途と立地が関係法令の基準に合うかどうかです。</p>
<p>一般的な申請手続は<a href="/ja/blog/factory-registration-application-guide">工場登録の申請方法と処理期間</a>をご覧ください。</p>

<h2>面積と立地による分かれ道</h2>
<table><thead><tr><th>状況</th><th>手続</th></tr></thead><tbody>
<tr><td>賃借した建物の工場建築面積が500平方メートル未満</td><td>承認なしで、占有者として工場登録を申請できます。登録は申請事項で義務ではありませんが、工場登録証明書が必要なら先に登録します。</td></tr>
<tr><td>借りた土地・建物に500平方メートル以上の工場を新設、または業種を変更</td><td>使用権の証明書類を添えて工場設立等の承認を受け、建設と設備の設置を終えたら完了申告をして登録されます。</td></tr>
<tr><td>すでに登録された工場をそのまま賃借</td><td>登録事項が変わる場合は、賃借の事実を証明する書類を添えて2か月以内に変更登録を申請します。</td></tr>
<tr><td>産業団地内の工場を賃借</td><td>管理機関と入居契約を結べば、工場設立等の承認を受けたものとみなされます。</td></tr>
</tbody></table>
<p>行政庁は工場登録の申請を受けると、建築法、国土計画法、大気・水環境・騒音振動の法令の基準と基準工場面積率に合うかを確認します。賃貸借契約の前に建築物台帳の用途と用途地域を確かめておくのが安全で、用途が合わなければ<a href="/ja/services/building-usage">建築物の用途変更</a>を先に検討します。</p>
<ol><li>建築物台帳で建物の用途と面積を確認します。</li><li>土地利用計画で用途地域と業種の立地の可否を確認します。</li><li>賃貸借契約書に工場としての使用と機械・装置の設置を明記します。</li><li>面積に応じて工場登録または工場設立等の承認を申請します。</li><li>登録後に工場登録証明書の発給を受けます。</li></ol>

<h2>書類と期間</h2>
<table><thead><tr><th>区分</th><th>書類</th><th>期間</th></tr></thead><tbody>
<tr><td>承認対象外の工場登録</td><td>工場登録申請書、承認対象外工場の事業計画書、賃貸借契約書などの占有の根拠（建築物台帳は行政情報で確認）</td><td>申請日から7日以内に登録を通知、許認可のみなし処理があれば20日以内</td></tr>
<tr><td>工場設立等の承認</td><td>承認申請書、事業計画書、他人所有の土地・建物の使用権の証明書類</td><td>申請日から20日以内に決定（すべて市・郡・区の権限なら14日、みなし処理がなければ7日）</td></tr>
<tr><td>完了申告後の登録</td><td>完了申告書、建築物の使用承認書、製造施設の設置完了の証明</td><td>設置完了日から2か月以内に完了申告、申告後3日（みなし処理は20日）以内に登録を通知</td></tr>
</tbody></table>

<h2>サポートの範囲</h2>
<p>YouSun Administrative Agencyは、賃貸借契約前の建築物台帳・土地利用計画の確認から、工場登録申請書と事業計画書の作成、承認対象であれば工場設立等の承認申請と完了申告、補正対応まで行います。詳しくは<a href="/ja/services/factory">工場設立承認・工場登録サービス</a>をご覧ください。</p>

<div class="faq-section"><h2>よくある質問</h2>
<div class="faq-item"><p class="faq-q">Q. 建物所有者の同意は別に必要ですか。</p><p class="faq-a">A. 法令は占有者にも申請を認め、承認の申請には使用権の証明書類を求めています。賃貸借契約書に工場としての使用が分かるようにしておくと確認がスムーズです。</p></div>
<div class="faq-item"><p class="faq-q">Q. 500平方メートル未満でも必ず登録が必要ですか。</p><p class="faq-a">A. 承認対象外の工場の登録は申請事項です。ただし工場登録証明書を求める支援事業や認証があるため、実務上は登録しておくことが多いです。</p></div>
<div class="faq-item"><p class="faq-q">Q. 工場登録証明書は誰が発給を受けられますか。</p><p class="faq-a">A. 登録された工場で製造業を行う者が申請でき、所有者・占有者などの利害関係人は工場登録台帳の謄本を受けられます。工場設立オンライン支援システムを使えば管轄外の工場の証明書も発給されます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 賃貸借期間が終わって移転したり、面積を広げたりする場合は？</p><p class="faq-a">A. 承認対象外として登録した工場は、所在地や業種が変われば変更登録の手続に従い、増設後も工場建築面積が500平方メートル未満なら変更登録で処理します。増設で500平方メートル以上になれば工場設立等の承認の対象です。</p></div>
</div>

<div class="cta-block"><h3>契約書に署名する前に確認を</h3><p>賃借予定の建物の住所、面積、業種をお知らせいただければ、YouSun Administrative Agencyが工場登録の可否と必要な手続を整理します。電話 02-363-2251、平日 09:30~17:30 KST。</p><a href="/ja/contact?utm_source=blog&utm_medium=cta&utm_campaign=${SLUG}">相談を申し込む</a></div>
<p class="author-block">YouSun Administrative Agency（代表行政士 Jung Yu-sun）</p>`,
  },
}

// 틀리기 쉬운 인허가 구분 오기(4언어) — 공장은 '승인'(500제곱미터 이상)·'등록', 산업단지는 '입주계약', 허가 아님
entry.wrongTerms = [
  '공장설립 허가', '공장등록 허가', '공장 허가증', '공장설립허가',
  'factory permit', 'factory license', 'factory construction permit',
  '工厂设立许可', '工厂登记许可', '工厂许可证',
  '工場設立許可', '工場登録許可', '工場の許可証',
]

export default entry
