// 원고 은행 — inhega-daily
// 주제(풀 18개 중): license-scrivener(인허가행정사) / 세부주제: requirements(요건·자격)
//
// 법령 대조(law.go.kr DRF API, OC=test, 2026-10-03 확인):
//   행정사법              법률 제19034호, 2022. 11. 15. 시행 (MST 245299)
//     제3조·제4조·제5조·제6조·제8조·제9조·제9조의2·제10조~제17조·제18조·제20조·제21조·제21조의2
//     제23조·제24조·제25조·제25조의2~제25조의7·제26조의2·제30조·제32조·제36조·제38조
//     부칙(법률 제10441호, 2011. 3. 8. 공포) 제3조 — 시험 전부·일부 면제 경과조치
//   행정사법 시행령        대통령령 제35813호, 2026. 1. 1. 시행 (MST 279197)
//     제3조·제8조·제9조·제12조·제13조·제14조·제16조·제17조·제18조·제20조·제21조의2·제22조·제23조
//     별표 1(행정사 자격시험 과목)
//   행정사법 시행규칙      행정안전부령 제633호, 2026. 8. 30. 시행 (MST 288495)
//     제6조(자격증 발급)·제9조(신고확인증 서식·대장)·제13조(증명서 발급)·제15조(교육 수료증)
// 대조표: scripts/inhega-daily/crosscheck/license-scrivener-qualification-check.md
// 같은 주제의 라이브 글 administrative-scrivener-scope-and-limits(업무범위·위임 한계)와 겹치지 않도록
// 이 글은 "누가 행정사인가(자격 취득·업무신고)와 의뢰인이 그것을 어떻게 확인하는가"에 집중한다.
// 법조 직역 명칭과의 비교는 쓰지 않았다(B5). 우리 서비스 가격·수수료 금액은 한 건도 쓰지 않았다(지침서 X41).
// 금액은 전부 행정사법 제36조·제38조의 법정 벌금·과태료 상한이다.

export default {
  topic: 'license-scrivener',
  angle: 'requirements',
  slug: 'license-scrivener-qualification-check',
  kind: 'cluster',
  coverImage: '/images/service-license.webp',
  relatedServices: [
    { title: '비영리사단법인 설립', href: '/services/nonprofit' },
    { title: '국제물류주선업 등록', href: '/services/logistics' },
    { title: '식품제조가공업 허가', href: '/services/food-manufacturing' },
  ],

  ko: {
    title: '인허가 행정사 자격 요건과 확인 방법 — 자격시험·결격사유·업무신고확인증 점검',
    category: '인허가',
    metaTitle: '인허가 행정사 자격 요건과 확인 방법 — 행정사법 기준',
    metaDescription: '인허가 행정사는 자격시험 합격만으로 일할 수 없습니다. 행정사법의 시험·결격사유, 실무교육과 업무신고, 신고확인증·사무소 명칭으로 자격을 확인하는 방법을 원문 기준으로 정리했습니다.',
    excerpt: '행정사로 일하려면 자격시험 합격, 결격사유 없음, 실무교육 이수, 대한행정사회 가입, 업무신고가 모두 필요합니다. 의뢰 전에 자격증·신고확인증·사무소 명칭으로 무엇을 확인하면 되는지 행정사법 원문 기준으로 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>행정사 자격은 자격시험에서 시작한다</li><li>시험 일부 면제와 결격사유</li><li>자격만으로는 일할 수 없다 — 업무신고와 신고확인증</li><li>사무소 명칭과 행정사법인</li><li>의뢰 전 행정사 자격 확인 순서</li><li>무자격 대행의 처벌과 행정사가 지는 의무</li><li>자주 묻는 질문</li></ol></div>
<p><strong>인허가 행정사</strong>란 「행정사법」에 따른 행정사 자격을 갖추고 주된 사무소 소재지의 시장·군수·구청장에게 행정사업무신고를 마친 뒤, 다른 사람의 위임을 받아 인가·허가·면허 등의 신청과 신고를 대리하는 사람을 말합니다.<!-- 근거: 행정사법 제2조 제1항 제5호, 제5조, 제10조 제1항 --> 자격증이 있다는 것만으로는 부족하고, 결격사유가 없어야 하며 실무교육을 마치고 대한행정사회에 가입한 다음 업무신고까지 해야 적법하게 일을 맡을 수 있습니다.<!-- 근거: 행정사법 시행령 제20조 제1항 --> 이 글은 2026년 기준 현행 「행정사법」과 같은 법 시행령·시행규칙 원문을 대조해, 누가 행정사가 될 수 있는지와 의뢰인이 그 자격을 어떻게 확인할 수 있는지를 정리한 것입니다.<!-- 근거: 행정사법(법률 제19034호, 2022. 11. 15. 시행), 행정사법 시행령(대통령령 제35813호, 2026. 1. 1. 시행), 행정사법 시행규칙(행정안전부령 제633호, 2026. 8. 30. 시행) --></p>
<p>행정사에게 무엇을 맡길 수 있고 무엇은 맡길 수 없는지는 <a href="/blog/administrative-scrivener-scope-and-limits">인허가 행정사 업무범위와 위임 한계</a>에서 따로 다뤘습니다. 여기서는 그보다 앞 단계, 곧 "상담하고 있는 이 사람이 법적으로 행정사인가"를 가리는 데 필요한 요건과 서류에 집중합니다. 인허가는 신청 내용이 사업의 시작 시점을 좌우하므로, 대리인의 자격을 먼저 확인해 두면 절차 중간에 대리권이 문제 되는 일을 줄일 수 있습니다.</p>

<h2>행정사 자격은 자격시험에서 시작한다</h2>
<p>「행정사법」은 자격의 출발점을 한 문장으로 정합니다. 시험에 합격한 사람에게 자격이 있다는 것입니다. 경력이나 학력만으로 자동으로 자격이 생기는 구조가 아니라는 점이 출발점입니다.</p>
<div class="highlight-box">「행정사법」 제5조(행정사의 자격): 행정사 자격시험에 합격한 사람은 행정사 자격이 있다.<!-- 근거: 행정사법 제5조 --></div>
<p>행정사는 소관 업무에 따라 일반행정사, 해사행정사, 외국어번역행정사로 구분됩니다.<!-- 근거: 행정사법 제4조 --> 인허가 신청·신고의 대리는 일반행정사의 업무에 포함되고, 해사행정사는 해운 또는 해양안전심판에 관한 업무로, 외국어번역행정사는 번역과 번역한 서류의 제출 대행으로 범위가 정해져 있습니다.<!-- 근거: 행정사법 시행령 제3조 제1호~제3호 --> 따라서 일반적인 영업 인허가를 맡길 때 확인할 자격은 일반행정사 자격입니다.</p>
<p>자격시험은 행정안전부장관이 실시하고 제1차시험과 제2차시험으로 나누어 치릅니다. 시험 관리 업무는 한국산업인력공단에 위탁되어 있으며, 시험은 매년 한 번 실시합니다.<!-- 근거: 행정사법 제8조 제1항~제3항, 같은 법 시행령 제8조 제1항, 제12조 --> 제1차시험은 선택형 필기시험이고, 제2차시험은 논술형 필기시험이되 선택형·기입형 또는 단답형을 포함할 수 있습니다.<!-- 근거: 행정사법 시행령 제9조 제2항 --> 시험 과목은 시행령 별표 1이 정하며, 일반행정사 기준으로 정리하면 다음과 같습니다.</p>
<table><thead><tr><th>구분</th><th>과목(일반행정사)</th><th>근거</th></tr></thead><tbody>
<tr><td>제1차시험(3과목)</td><td>민법(총칙 관련 내용으로 한정), 행정법, 행정학개론(지방자치행정 포함)<!-- 근거: 행정사법 시행령 별표 1 제1호 --></td><td>시행령 별표 1 제1호<!-- 근거: 행정사법 시행령 제9조 제1항 별표 1 --></td></tr>
<tr><td>제2차시험(4과목)</td><td>민법(계약 관련 내용으로 한정), 행정절차론(「행정절차법」 포함), 사무관리론(「민원 처리에 관한 법률」 및 「행정업무의 운영 및 혁신에 관한 규정」 포함), 행정사실무법(행정심판사례 및 「비송사건절차법」)<!-- 근거: 행정사법 시행령 별표 1 제2호 --></td><td>시행령 별표 1 제2호<!-- 근거: 행정사법 시행령 제9조 제1항 별표 1 --></td></tr>
<tr><td>합격 기준</td><td>과목당 100점 만점에 모든 과목 40점 이상, 전 과목 평균 60점 이상<!-- 근거: 행정사법 시행령 제17조 제1항·제2항 --></td><td>시행령 제17조</td></tr>
</tbody></table>
<p>행정안전부장관은 행정사의 수급 상황 등을 고려해 종류별로 최소선발인원을 정할 수 있고, 제2차시험 합격자가 그보다 적으면 모든 과목 40점 이상인 사람 가운데 평균점수가 높은 순으로 합격자를 추가로 결정합니다.<!-- 근거: 행정사법 시행령 제8조 제3항, 제17조 제3항 --> 최종 합격자는 관보와 인터넷 홈페이지에 공고됩니다.<!-- 근거: 행정사법 시행령 제17조 제4항 --></p>
<p>합격자가 받는 서류가 <strong>행정사 자격증</strong>입니다. 행정안전부장관은 신청인이 시험 합격자로서 결격사유에 해당하지 않는 것이 확인되면 자격증을 발급하고, 그 사실을 자격증 발급 대장에 기록합니다.<!-- 근거: 행정사법 시행령 제18조 제1항, 같은 법 시행규칙 제6조 제2항·제4항 --> 즉 자격증은 "시험 합격"과 "결격사유 없음"을 함께 확인받은 결과물입니다. 시험에서 부정행위를 한 사람은 그 시험이 정지되거나 무효로 처리되고, 처분일부터 5년간 응시할 수 없습니다.<!-- 근거: 행정사법 제9조의2 제1항·제2항 --></p>

<h2>시험 일부 면제와 결격사유</h2>
<p>공무원 경력이나 외국어 번역 경력이 있으면 시험의 일부가 면제됩니다. 다만 현행 제9조가 정하는 것은 어디까지나 "일부 면제"이고, 면제받은 사람도 남은 시험에는 합격해야 합니다. 일반행정사와 관련된 면제 요건은 다음과 같습니다.<!-- 근거: 행정사법 제9조, 같은 법 시행령 제15조 --></p>
<ul>
<li><strong>제1차시험 면제</strong> — 경력직공무원으로 10년 이상 근무한 사람 중 7급(이에 상당하는 계급 포함) 이상의 직에 5년 이상 근무한 사람, 별정직공무원으로 10년 이상 근무한 사람 중 7급 이상에 상당하는 직에 5년 이상 근무한 사람<!-- 근거: 행정사법 제9조 제1항 제1호, 같은 법 시행령 제13조 제2항 --></li>
<li><strong>제1차시험 전 과목과 제2차시험 일부 면제</strong> — 경력직공무원으로 15년 이상 근무한 사람 중 6급 이상의 직에 8년 이상 근무한 사람, 또는 10년 이상 근무한 사람 중 5급 이상의 직에 5년 이상 근무한 사람(별정직공무원도 같은 기준). 일반행정사의 경우 면제되는 제2차시험 과목은 행정절차론과 사무관리론입니다.<!-- 근거: 행정사법 제9조 제2항 제1호·제2호, 같은 법 시행령 제13조 제3항, 별표 1 제3호 --></li>
<li><strong>다른 종류의 행정사 자격 보유자</strong> — 행정사 자격이 있는 사람이 다른 종류의 행정사 자격시험에 응시하면 제1차시험이 면제됩니다.<!-- 근거: 행정사법 제9조 제1항 제4호 --></li>
</ul>
<p>면제에는 배제 사유도 있습니다. 공무원으로 근무하던 중 탄핵된 사람, 징계로 파면·해임된 사람, 금품·향응 등 재산상 이익을 취득하거나 제공해 강등 또는 정직 처분을 받은 사람, 예산·기금·국고금·보조금 등을 횡령·배임·절도·사기·유용해 강등 또는 정직 처분을 받은 사람은 위 면제를 받을 수 없습니다.<!-- 근거: 행정사법 제9조 제3항 제1호~제3호 --> 경력은 응시원서 접수 마감일을 기준으로 산정하고, 제1차시험에 합격한 사람은 다음 회 시험에서만 제1차시험을 면제받습니다.<!-- 근거: 행정사법 시행령 제14조 제4항, 행정사법 제9조 제5항 --></p>
<p>참고로 2011년에 전부개정된 「행정사법」(법률 제10441호) 부칙 제3조는 그 법 공포 전부터 공무원으로 재직한 사람과 외국어 번역 업무에 종사한 사람에게 종전 규정에 따른 시험 전부 또는 일부 면제를 유지했습니다.<!-- 근거: 행정사법 부칙(법률 제10441호) 제3조, 같은 법 시행령 제16조 제2항 단서 --> 그래서 자격을 취득한 경로는 사람마다 다를 수 있지만, 어느 경로든 행정안전부장관이 발급한 자격증이 공통 증빙이라는 점은 같습니다.</p>
<p>시험에 합격했더라도 다음 결격사유 중 하나에 해당하면 행정사가 될 수 없습니다.<!-- 근거: 행정사법 제6조 --></p>
<ol>
<li>피성년후견인 또는 피한정후견인</li>
<li>파산선고를 받고 복권되지 아니한 사람</li>
<li>금고 이상의 실형을 선고받고 그 집행이 끝나거나(끝난 것으로 보는 경우 포함) 집행이 면제된 날부터 3년이 지나지 아니한 사람<!-- 근거: 행정사법 제6조 제3호 --></li>
<li>금고 이상의 형의 집행유예를 선고받고 그 유예기간이 끝난 날부터 2년이 지나지 아니한 사람<!-- 근거: 행정사법 제6조 제4호 --></li>
<li>금고 이상의 형의 선고유예를 받고 그 유예기간에 있는 사람</li>
<li>공무원으로서 징계처분에 따라 파면되거나 해임된 후 3년이 지나지 아니한 사람<!-- 근거: 행정사법 제6조 제6호 --></li>
<li>제30조에 따라 행정사 자격이 취소된 후 3년이 지나지 아니한 사람<!-- 근거: 행정사법 제6조 제7호 --></li>
</ol>
<p>결격사유는 자격증을 받을 때 한 번 보고 끝나는 요건이 아닙니다. 업무신고 기준의 첫 번째 항목이 "법 제6조 각 호의 결격사유에 해당하지 않을 것"이므로, 업무를 시작하는 시점에도 다시 확인됩니다.<!-- 근거: 행정사법 시행령 제20조 제1항 제1호 --> 또한 행정안전부장관은 거짓이나 부정한 방법으로 자격을 취득한 경우, 신고확인증을 양도하거나 대여한 경우, 업무정지 기간에 행정사 업무를 한 경우, 「행정사법」을 위반해 징역형이 확정된 경우에는 자격을 취소하여야 하고, 취소 전에는 청문을 거쳐야 합니다.<!-- 근거: 행정사법 제30조 제1항 제1호~제4호·제2항 --> 자격이 취소되면 위 제7호에 따라 3년 동안 다시 행정사가 될 수 없습니다.</p>

<h2>자격만으로는 일할 수 없다 — 업무신고와 신고확인증</h2>
<p>의뢰인 입장에서 가장 중요한 단계가 여기입니다. 자격시험에 합격해 자격증을 받은 사람이라도 업무신고를 하지 않았다면 행정사 업무를 할 수 없습니다.</p>
<div class="highlight-box">「행정사법」 제10조 제1항: 행정사 자격이 있는 사람이 행정사로서 업무를 하려면 대통령령으로 정하는 바에 따라 주된 사무소의 소재지를 관할하는 특별자치시장·특별자치도지사·시장·군수 또는 자치구의 구청장에게 대통령령으로 정하는 행정사 업무신고 기준을 갖추어 신고하여야 한다. 신고한 사항을 변경할 때도 또한 같다.<!-- 근거: 행정사법 제10조 제1항 --></div>
<p>시행령이 정한 업무신고 기준은 네 가지입니다. 결격사유에 해당하지 않을 것, 실무교육을 이수했을 것, 행정사 자격증이 있을 것, 행정사회에 가입했을 것입니다.<!-- 근거: 행정사법 시행령 제20조 제1항 제1호~제4호 --> 행정사(법인구성원과 소속행정사 포함)로서 개업하려면 대한행정사회에 가입해야 한다는 의무는 법률 제26조의2에도 따로 규정되어 있습니다.<!-- 근거: 행정사법 제26조의2 --> 신고서에는 행정사회 회원증 1부와 사진 1장을 첨부하고, 시장등은 행정사정보시스템을 통해 자격증과 실무교육 수료증을 확인합니다. 본인이 확인에 동의하지 않으면 사본을 첨부하게 됩니다.<!-- 근거: 행정사법 시행령 제20조 제2항·제3항 --></p>
<p><strong>실무교육</strong>은 행정안전부장관이 시행하며, 기본소양교육과 실무수습교육으로 나뉩니다. 기본소양교육은 20시간, 실무수습교육은 40시간 동안 행정사 사무소 또는 행정안전부장관이 지정하는 장소에서 실시하고, 집합교육이나 온라인 교육으로 진행합니다.<!-- 근거: 행정사법 제25조 제1항, 같은 법 시행령 제23조 제1항·제2항·제4항 --> 실무교육 업무는 행정사회에 위탁되어 있으며, 행정사회는 교육과정을 마친 행정사에게 수료증을 발급하고 수료자 명단을 행정안전부장관에게 제출합니다.<!-- 근거: 행정사법 시행령 제25조 제1호, 같은 법 시행규칙 제15조 제1항 --></p>
<p>신고를 받은 시장등은 내용을 확인한 후 <strong>행정사업무신고확인증</strong>(이하 신고확인증)을 발급해야 하고, 발급 사실을 행정사 업무 신고대장과 행정사 관리 대장에 기록합니다.<!-- 근거: 행정사법 제12조 제1항, 같은 법 시행규칙 제9조 제1항·제2항 --> 기준을 갖추지 못하면 시장등은 수리를 거부할 수 있고 그 사실과 사유를 지체 없이 알려야 합니다. 시장등이 신고를 받은 날부터 3개월이 지날 때까지 신고확인증을 발급하지도, 거부 통지를 하지도 않으면 3개월이 되는 날의 다음 날에 수리된 것으로 봅니다.<!-- 근거: 행정사법 제11조 제1항·제2항 --> 수리를 거부당한 사람은 통지를 받은 날부터 3개월 이내에 이의신청을 할 수 있고, 이유가 있으면 시장등은 신고확인증을 발급해야 합니다.<!-- 근거: 행정사법 제11조 제3항·제4항 --></p>
<p>업무를 시작한 뒤에도 교육 의무는 이어집니다. 행정사는 신고확인증을 발급받은 날부터 2년(휴업 기간과 업무정지 기간 제외)마다 16시간의 연수교육을 받아야 하고, 연수교육을 받지 않고 업무를 수행하면 제38조 제2항 제4호에 따라 100만원 이하의 과태료 대상입니다.<!-- 근거: 행정사법 제25조 제3항, 같은 법 시행령 제23조 제6항 제1호, 행정사법 제38조 제2항 제4호 --> 또 3개월이 넘도록 휴업하는 경우(업무신고를 하고 업무를 시작하지 않는 경우 포함)에는 신고해야 하고, 휴업한 행정사가 2년이 지나도 업무를 다시 시작하지 않으면 폐업한 것으로 봅니다.<!-- 근거: 행정사법 제17조 제1항·제4항 --></p>

<h2>사무소 명칭과 행정사법인</h2>
<p>신고를 마친 행정사는 업무를 위한 사무소를 하나만 설치할 수 있습니다. 2명 이상의 행정사가 합동사무소를 구성하면 구성원 수를 넘지 않는 범위에서 분사무소를 둘 수 있되, 주사무소와 분사무소마다 구성원이 1명 이상 상근해야 합니다.<!-- 근거: 행정사법 제14조 제1항·제2항 --></p>
<p>밖에서 가장 쉽게 확인할 수 있는 표지는 <strong>사무소 명칭</strong>입니다. 행정사는 사무소 명칭에 "행정사사무소" 또는 "행정사합동사무소"라는 글자를 써야 하고, 분사무소에는 분사무소임을 표시해야 합니다. 반대로 행정사가 아닌 사람은 행정사사무소나 이와 비슷한 명칭을 쓸 수 없고, 행정사 또는 이와 비슷한 명칭도 사용하지 못합니다.<!-- 근거: 행정사법 제15조 제1항·제2항, 제3조 제2항 --> "행정 컨설팅", "인허가 센터"처럼 행정사라는 표시가 없는 상호로 행정사 업무를 내세운다면 그 사무소의 업무신고 여부부터 확인해 볼 필요가 있습니다.</p>
<p>법인 형태도 있습니다. 행정사는 3명 이상의 행정사를 구성원으로 하는 <strong>행정사법인</strong>을 설립할 수 있고, 설립하려면 정관을 작성해 행정안전부장관의 설립인가를 받고 주사무소 소재지에서 설립등기를 해야 합니다.<!-- 근거: 행정사법 제25조의2, 제25조의3 제1항·제4항 --> 업무를 하려면 개인 행정사와 마찬가지로 시장등에게 법인업무신고를 하고 법인업무신고확인증을 받아야 하며, 명칭에는 "행정사법인"이라는 글자를 써야 합니다.<!-- 근거: 행정사법 제25조의4 제1항·제3항, 제25조의5 제2항 --> 법인업무신고를 한 행정사법인은 실무교육을 받지 않은 사람을 소속행정사로 고용하거나 법인구성원으로 할 수 없습니다.<!-- 근거: 행정사법 제25조의6 제5항 --></p>
<p>행정사법인에 맡길 때 특히 볼 부분은 <strong>담당행정사</strong>입니다. 행정사법인은 법인 명의로 업무를 수행하고 수임한 업무마다 담당행정사를 지정해야 하며, 지정하지 않으면 법인구성원 모두를 담당행정사로 지정한 것으로 봅니다. 법인이 업무에 관해 작성하는 서면에는 법인 명의를 표시하고 담당행정사가 기명날인해야 합니다.<!-- 근거: 행정사법 제25조의7 제1항·제2항·제4항 --> 계약서나 위임장에 누구의 이름이 들어가는지 보면 실제 책임자를 확인할 수 있습니다.</p>

<h2>의뢰 전 행정사 자격 확인 순서</h2>
<p>앞의 요건을 의뢰인이 확인할 수 있는 서류와 표시로 바꾸면 다음 표와 같습니다. 모두 법령에 근거가 있는 서류이므로 요청하는 것 자체가 무리한 요구가 아닙니다.</p>
<table><thead><tr><th>확인 항목</th><th>무엇을 보는가</th><th>근거</th></tr></thead><tbody>
<tr><td>행정사 자격증</td><td>행정안전부장관이 발급한 자격증인지, 행정사 종류가 일반행정사인지<!-- 근거: 행정사법 시행령 제18조 제1항, 제3조 제1호 --></td><td>영 제18조, 영 제3조</td></tr>
<tr><td>신고확인증</td><td>사무소 소재지 시장등이 발급했는지, 증서상 이름과 실제 담당 행정사가 같은지<!-- 근거: 행정사법 제12조 제1항, 제13조 --></td><td>법 제12조·제13조</td></tr>
<tr><td>사무소 소재지</td><td>신고확인증의 사무소와 실제 사무소가 일치하는지(이전 시 10일 이내 신고)<!-- 근거: 행정사법 제14조 제3항 --></td><td>법 제14조</td></tr>
<tr><td>사무소 명칭</td><td>"행정사사무소", "행정사합동사무소", "행정사법인" 글자가 있는지<!-- 근거: 행정사법 제15조 제1항, 제25조의5 제2항 --></td><td>법 제15조·제25조의5</td></tr>
<tr><td>법인의 담당행정사</td><td>수임 업무의 담당행정사가 누구인지, 서면에 기명날인하는지<!-- 근거: 행정사법 제25조의7 --></td><td>법 제25조의7</td></tr>
</tbody></table>
<p>신고확인증은 대여가 금지된 증서입니다. 행정사는 다른 사람에게 신고확인증을 대여할 수 없고, 누구든지 다른 사람의 신고확인증을 대여받아 사용하거나 대여를 알선해서도 안 됩니다.<!-- 근거: 행정사법 제13조 제1항~제3항 --> 그래서 증서에 적힌 이름과 실제로 사건을 맡을 사람의 이름이 같은지가 핵심입니다. 상담은 사무직원이 할 수도 있는데, 사무직원의 직무상 행위는 그를 고용한 행정사의 행위로 보므로 책임 주체는 결국 신고확인증의 행정사입니다.<!-- 근거: 행정사법 제18조 제1항·제2항 --></p>
<p>증서의 진위나 현재 상태가 의심스럽다면 발급기관을 확인하는 방법이 있습니다. 신고확인증을 발급한 시장등은 그 내용을 행정사 업무 신고대장과 관리 대장에 기록하게 되어 있으므로, 증서에 적힌 발급기관(시·군·구)에 문의해 볼 수 있습니다.<!-- 근거: 행정사법 시행규칙 제9조 제2항 --> 특히 업무정지는 시장등이 6개월의 범위에서 명할 수 있는 처분이므로, 장기 사건이라면 현재 제32조에 따른 업무정지 중이 아닌지도 함께 물어보는 것이 좋습니다.<!-- 근거: 행정사법 제32조 제1항 --></p>
<p>계약 단계에서는 위임 범위와 담당자를 서면으로 남겨 두는 것이 좋습니다. 예를 들어 <a href="/services/nonprofit">비영리사단법인 설립</a>처럼 주무관청 협의와 설립등기 이후 절차가 이어지는 사건이나, <a href="/services/logistics">국제물류주선업 등록</a>처럼 등록 후 변경신고가 따라오는 사건은 담당 행정사가 끝까지 같은지 확인해 두면 연락 공백을 줄일 수 있습니다.</p>

<h2>무자격 대행의 처벌과 행정사가 지는 의무</h2>
<p>행정사가 아닌 사람은 다른 법률에 따라 허용되는 경우를 제외하고 행정사 업무를 업(業)으로 하지 못합니다.<!-- 근거: 행정사법 제3조 제1항 --> 법이 금지하는 것은 "업으로" 하는 것, 곧 계속·반복해서 영업으로 하는 것입니다. 자격 확인과 직결되는 제재를 모으면 다음과 같습니다.</p>
<ul>
<li><strong>행정사가 아닌 사람의 업무 수행</strong> — 제3조 제1항을 위반해 행정사 업무를 업으로 한 자는 3년 이하의 징역 또는 3천만원 이하의 벌금<!-- 근거: 행정사법 제36조 제1항 제1호 --></li>
<li><strong>신고확인증 대여</strong> — 대여한 행정사, 대여받은 자, 알선한 자 모두 3년 이하의 징역 또는 3천만원 이하의 벌금이고, 대여한 행정사는 자격 취소 사유에도 해당<!-- 근거: 행정사법 제36조 제1항 제2호, 제30조 제1항 제2호 --></li>
<li><strong>업무신고 없이 업무 수행</strong> — 자격이 있어도 행정사업무신고 또는 법인업무신고를 하지 않고 업무를 한 자는 1년 이하의 징역 또는 1천만원 이하의 벌금<!-- 근거: 행정사법 제36조 제2항 제1호 --></li>
<li><strong>업무정지 기간 중 업무 수행</strong> — 1년 이하의 징역 또는 1천만원 이하의 벌금이고 자격 취소 사유<!-- 근거: 행정사법 제36조 제2항 제6호, 제30조 제1항 제3호 --></li>
<li><strong>명칭 사용</strong> — 행정사 또는 이와 비슷한 명칭, 행정사사무소 등과 비슷한 명칭을 사용한 자는 500만원 이하의 과태료<!-- 근거: 행정사법 제38조 제1항 제1호·제2호 --></li>
</ul>
<p>자격을 확인한 행정사에게 맡기면 의뢰인은 법이 정한 보호도 함께 받습니다. 행정사는 품위를 유지하고 신의와 성실로써 공정하게 직무를 수행해야 하고, 위임받은 업무를 수행하면서 고의 또는 과실로 위임인에게 재산상 손해를 입히면 배상할 책임이 있습니다(제21조).<!-- 근거: 행정사법 제21조 제1항·제2항 --> 행정사 또는 행정사이었던 사람과 그 사무직원은 정당한 사유 없이 직무상 알게 된 사실을 누설할 수 없습니다(제23조).<!-- 근거: 행정사법 제23조 --></p>
<p>공무원직에서 퇴직한 행정사는 퇴직 전 1년부터 퇴직할 때까지 근무한 행정기관에 대한 인허가 신청 대리 업무를 퇴직한 날부터 1년 동안 수임할 수 없습니다.<!-- 근거: 행정사법 제21조의2 제1항 --> 이 수임제한 대상 기관은 「민원 처리에 관한 법률」의 행정기관이며, 파견·휴직 등으로 실제로 근무하지 않았거나 직무대리·겸임으로 근무한 기간이 1개월 이하인 기관은 제외됩니다.<!-- 근거: 행정사법 시행령 제21조의2 제1항~제4항 --> 최근 퇴직한 공무원 출신 행정사에게 맡길 때는 신청할 기관이 이 제한에 걸리지 않는지 미리 확인하는 것이 좋습니다.</p>
<p>행정사는 업무를 위임받으면 일련번호, 위임받은 연월일, 업무의 개요, 보수, 위임인의 주소와 성명 등을 적은 업무처리부를 작성해 1년간 보관해야 하며, 업무처리부는 전자문서로 작성할 수도 있습니다(제24조, 시행령 제22조).<!-- 근거: 행정사법 제24조 제1항·제2항, 같은 법 시행령 제22조 제1항·제2항 --> 또한 행정사는 자신이 행한 업무에 관련된 사실의 확인증명서를 발급할 수 있고, 발급 신청을 받으면 특별한 사유가 없는 한 객관적 사실에 입각해 즉시 발급해야 합니다.<!-- 근거: 행정사법 제20조 제1항, 같은 법 시행령 제21조, 같은 법 시행규칙 제13조 제1항 --> 인허가 신청을 대리했다는 사실을 다른 기관에 증명해야 할 때 이 증명서를 요청할 수 있습니다.</p>
<p>정리하면 확인 순서는 자격증 → 신고확인증 → 사무소 명칭과 소재지 → 담당 행정사입니다. 업종별로 행정사 선택 시 함께 볼 점은 <a href="/blog/administrative-license-permit-specialist-guide">인허가 행정사 선택 가이드</a>에 정리해 두었습니다. 법령 원문은 국가법령정보센터의 <a href="https://www.law.go.kr/법령/행정사법" target="_blank" rel="noopener">행정사법</a>, <a href="https://www.law.go.kr/법령/행정사법시행령" target="_blank" rel="noopener">행정사법 시행령</a>, <a href="https://www.law.go.kr/법령/행정사법시행규칙" target="_blank" rel="noopener">행정사법 시행규칙</a>에서 확인할 수 있습니다. 비용은 사례별로 상이하므로 무료 상담 시 정확히 안내드립니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 행정사 자격증만 있으면 바로 인허가 대행을 할 수 있나요?</p><p class="faq-a">A. 아닙니다. 「행정사법」 제10조 제1항은 자격이 있는 사람이 업무를 하려면 주된 사무소 소재지의 시장등에게 행정사업무신고를 하도록 정하고, 같은 법 시행령 제20조 제1항은 결격사유 없음, 실무교육 이수, 자격증 보유, 행정사회 가입을 신고 기준으로 둡니다. 신고 없이 업무를 하면 같은 법 제36조 제2항 제1호에 따라 1년 이하의 징역 또는 1천만원 이하의 벌금 대상입니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 행정사 자격시험은 얼마나 자주 치르나요?</p><p class="faq-a">A. 「행정사법 시행령」 제8조 제1항에 따라 매년 한 번 실시합니다. 시험은 행정안전부장관이 실시하고 제1차시험과 제2차시험으로 나뉘며, 관리 업무는 같은 시행령 제12조에 따라 한국산업인력공단에 위탁되어 있습니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 공무원 경력이 있으면 시험 없이 행정사가 되나요?</p><p class="faq-a">A. 현행 「행정사법」 제9조는 시험의 일부 면제만 정합니다. 예를 들어 경력직공무원으로 10년 이상 근무한 사람 중 7급 이상의 직에 5년 이상 근무한 사람은 제1차시험이 면제되고, 15년 이상 근무 중 6급 이상 8년 이상 등의 요건을 갖추면 제2차시험 일부도 면제되지만 나머지 과목은 합격해야 합니다. 탄핵·파면·해임 등 제9조 제3항의 사유가 있으면 면제를 받을 수 없습니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 신고확인증의 이름과 상담한 사람이 다르면 문제가 되나요?</p><p class="faq-a">A. 상담한 사람이 그 사무소의 사무직원이라면 「행정사법」 제18조 제2항에 따라 그 행위는 고용한 행정사의 행위로 봅니다. 그러나 신고확인증을 빌려 다른 사람이 업무를 하는 것이라면 같은 법 제13조 위반이며, 제36조 제1항에 따라 3년 이하의 징역 또는 3천만원 이하의 벌금 대상입니다. 실제로 사건을 맡을 행정사가 누구인지 확인하시기 바랍니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 행정사 자격이 취소되는 경우는 어떤 때인가요?</p><p class="faq-a">A. 「행정사법」 제30조 제1항은 거짓이나 부정한 방법으로 자격을 취득한 경우, 신고확인증을 양도·대여한 경우, 업무정지 기간에 업무를 한 경우, 이 법 위반으로 징역형이 확정된 경우를 정하고 있으며, 이때 행정안전부장관은 청문을 거쳐 반드시 취소합니다. 취소된 사람은 같은 법 제6조 제7호에 따라 3년 동안 행정사가 될 수 없습니다.</p></div>
</div>

<div class="cta-block">
 <h3>인허가를 맡기기 전에 확인할 것부터 정리해 드립니다</h3>
 <p>담당 행정사의 신고확인증과 위임 범위를 먼저 안내하고, 업종별로 필요한 서류를 유선행정사사무소가 정리해 드립니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=license-scrivener-qualification-check">무료 상담 신청하기</a>
</div>

<p class="author-block">유선행정사사무소 (대표 행정사 정유선) · 「행정사법」(법률 제19034호, 2022. 11. 15. 시행), 같은 법 시행령(대통령령 제35813호, 2026. 1. 1. 시행), 같은 법 시행규칙(행정안전부령 제633호, 2026. 8. 30. 시행) 원문 기준으로 작성 · 최종 검토일 10월 3일<!-- 근거: 행정사법 법률 제19034호, 행정사법 시행령 대통령령 제35813호, 행정사법 시행규칙 행정안전부령 제633호 --></p>`,
  },

  en: {
    title: 'Who Can Act as a Licensing Administrative Agent in Korea — Qualification and How to Verify It',
    category: 'Licensing & Permits',
    metaTitle: 'Licensing Administrative Agent Korea — Qualification Check',
    metaDescription: 'How a Korean administrative scrivener (haengjeongsa) qualifies under the Certified Administrative Scrivener Act, and the documents a client can check first.',
    excerpt: 'Passing the state exam is not enough to act as a licensing administrative agent in Korea. Here is the statutory path — exam, disqualifications, training, association membership and business report — and what a client can verify.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Qualification Starts With the State Exam</li><li>Partial Exemptions and Disqualifications</li><li>A Licence Alone Is Not Enough — The Business Report</li><li>Office Names and Scrivener Corporations</li><li>How to Verify a Scrivener Before You Engage</li><li>Unlicensed Practice and Duties Owed to Clients</li><li>FAQ</li></ol></div>
<p>A <strong>licensing administrative agent</strong> in Korea is a <em>haengjeongsa</em> (administrative scrivener) who holds the qualification under the Certified Administrative Scrivener Act and has filed a business report with the head of the city, county or district of the main office, so that they may act for others in permit and licence applications (Articles 2(1)5, 5 and 10(1)). The certificate alone is not enough: the person must also be free of disqualifications, complete practical training and join the Korean Association of Administrative Scriveners before reporting (Enforcement Decree Article 20(1)). This article checks the current Act, Decree and Enforcement Rule as of 2026.</p>
<p>What you may delegate is covered in our note on <a href="/blog/administrative-scrivener-scope-and-limits">the scope and limits of a licensing scrivener</a>. Here we answer the earlier question: is the person in front of you legally a scrivener?</p>

<h2>Qualification Starts With the State Exam</h2>
<div class="highlight-box">Certified Administrative Scrivener Act, Article 5: A person who passes the administrative scrivener qualification examination is qualified as an administrative scrivener.</div>
<p>Scriveners are general, maritime or translation scriveners (Article 4). Acting in permit applications belongs to the general scrivener; maritime scriveners are limited to shipping and marine safety tribunal matters, and translation scriveners to translation and filing translations (Decree Article 3). For a business licence, look for a general scrivener.</p>
<p>The Minister of the Interior and Safety holds the exam once a year in two stages, with administration entrusted to HRD Korea (Article 8; Decree Articles 8(1) and 12). The first stage is multiple choice; the second is an essay exam that may include short-answer items (Decree Article 9(2)).</p>
<table><thead><tr><th>Stage</th><th>Subjects (general scrivener)</th><th>Basis</th></tr></thead><tbody>
<tr><td>First stage (3 subjects)</td><td>Civil Act (general provisions), Administrative Law, Public Administration</td><td>Decree Table 1</td></tr>
<tr><td>Second stage (4 subjects)</td><td>Civil Act (contracts), Administrative Procedure, Office Management, Scrivener Practice Law</td><td>Decree Table 1</td></tr>
<tr><td>Pass mark</td><td>40 or more out of 100 in every subject, average 60 or more</td><td>Decree Article 17</td></tr>
</tbody></table>
<p>Where a minimum intake is set and too few pass, candidates with 40 or more in every subject are added by average score (Decree Article 17(3)). The Minister issues the <strong>qualification certificate</strong> after confirming the pass and the absence of disqualifications, and records it in a register (Decree Article 18; Enforcement Rule Article 6). A candidate caught cheating may not sit the exam for 5 years (Article 9-2).</p>

<h2>Partial Exemptions and Disqualifications</h2>
<p>Article 9 gives only partial exemptions; the rest of the exam must still be passed:</p>
<ul>
<li><strong>First stage exempt</strong> — career or special-category officials with 10 years of service, 5 of them at grade 7 or above (Article 9(1)1; Decree Article 13(2)).</li>
<li><strong>First stage and part of the second exempt</strong> — 15 years with 8 at grade 6 or above, or 10 years with 5 at grade 5 or above; the exempt subjects are Administrative Procedure and Office Management (Article 9(2); Decree Table 1).</li>
<li><strong>Holders of another category</strong> — first stage exempt (Article 9(1)4).</li>
</ul>
<p>Officials who were impeached, dismissed by discipline, or demoted or suspended for bribery or embezzlement cannot use these exemptions (Article 9(3)). Experience is counted at the application deadline, and a first-stage pass carries over to the next exam only (Article 9(5)). Addendum Article 3 of Act No. 10441 (2011) kept older full or partial exemptions for officials and translators already serving, so routes differ, but the Minister-issued certificate is always the proof.</p>
<p>Under Article 6 a person cannot become a scrivener if they are under adult guardianship; bankrupt and not reinstated; within 3 years of serving a sentence of imprisonment without labour or heavier; within 2 years of the end of a suspended sentence of that kind; in a deferral period; within 3 years of dismissal from public office by discipline; or within 3 years of revocation under Article 30. These grounds are checked again at the business report (Decree Article 20(1)1). The Minister must revoke the qualification, after a hearing, for fraud, lending the certificate, practising during suspension or a final prison sentence under the Act (Article 30).</p>

<h2>A Licence Alone Is Not Enough — The Business Report</h2>
<div class="highlight-box">Certified Administrative Scrivener Act, Article 10(1): A qualified person who intends to practise shall meet the business report criteria prescribed by Presidential Decree and report to the head of the city, county or district having jurisdiction over the main office. The same applies when reported matters change.</div>
<p>The four criteria are: no disqualification, completed practical training, the certificate, and association membership (Decree Article 20(1)); membership is also required by Article 26-2. <strong>Practical training</strong> comprises 20 hours of basic and 40 hours of on-site training, in person or online, and the association issues the completion certificate (Article 25(1); Decree Article 23; Enforcement Rule Article 15).</p>
<p>The local office issues the <strong>business report certificate</strong> and records it in its registers (Article 12; Enforcement Rule Article 9). If it neither issues it nor refuses within 3 months, the report is deemed accepted the next day; a refused applicant may object within 3 months (Article 11).</p>
<p>Scriveners must then complete 16 hours of continuing training every 2 years; practising without it carries a fine of up to KRW 1,000,000 (Decree Article 23(6); Article 38(2)4). A temporary closure of more than 3 months must be reported, and one not ended within 2 years is deemed a closure of business (Article 17).</p>

<h2>Office Names and Scrivener Corporations</h2>
<p>A scrivener may have one office only; a joint office of 2 or more may open branches with at least 1 member working full time at each (Article 14). The office name must contain "administrative scrivener office" in Korean, and non-scriveners may not use this or the title "administrative scrivener" (Articles 15 and 3(2)).</p>
<p>Three or more scriveners may form a <strong>scrivener corporation</strong> with the Minister's approval (Articles 25-2 and 25-3). It files its own business report, uses "administrative scrivener corporation" in its name, may not take on members untrained under Article 25 (Articles 25-4 to 25-6), and must designate a responsible scrivener for each matter who signs its documents (Article 25-7).</p>

<h2>How to Verify a Scrivener Before You Engage</h2>
<table><thead><tr><th>Item</th><th>What to check</th><th>Basis</th></tr></thead><tbody>
<tr><td>Qualification certificate</td><td>Issued by the Minister; general scrivener</td><td>Decree Articles 18 and 3</td></tr>
<tr><td>Business report certificate</td><td>Issued by the local office; name matches the person handling your case</td><td>Articles 12 and 13</td></tr>
<tr><td>Office address</td><td>Matches the certificate (relocation reported within 10 days)</td><td>Article 14</td></tr>
<tr><td>Office name</td><td>Carries the scrivener office or corporation label</td><td>Articles 15 and 25-5</td></tr>
<tr><td>Corporation</td><td>Who is the designated responsible scrivener</td><td>Article 25-7</td></tr>
</tbody></table>
<p>Lending the certificate is banned for lender, borrower and broker alike (Article 13). Staff may consult with you, but their acts are deemed the employing scrivener's (Article 18(2)). If in doubt, contact the issuing office named on the certificate, which keeps the registers (Enforcement Rule Article 9(2)), and for long matters ask whether a suspension of up to 6 months is in force (Article 32(1)). For matters with long follow-up, such as <a href="/services/nonprofit">non-profit association establishment</a> or <a href="/services/logistics">freight forwarder registration</a>, confirm the responsible scrivener stays the same.</p>

<h2>Unlicensed Practice and Duties Owed to Clients</h2>
<p>A non-scrivener may not carry on scrivener work as a business unless another law allows it (Article 3(1)):</p>
<ul>
<li><strong>Practising without the qualification</strong> or <strong>lending the certificate</strong> — imprisonment of up to 3 years or a fine of up to KRW 30,000,000 (Article 36(1)); lending is also a ground for revocation (Article 30(1)2).</li>
<li><strong>Practising without a business report</strong> or <strong>during a suspension</strong> — up to 1 year or KRW 10,000,000 (Article 36(2)1 and 6).</li>
<li><strong>Using the title or a similar office name</strong> — an administrative fine of up to KRW 5,000,000 (Article 38(1)).</li>
</ul>
<p>A verified scrivener must act fairly, compensate loss caused intentionally or negligently (Article 21), and keep duty-related facts confidential, as must staff (Article 23). A former official may not, for 1 year after retiring, act in permit applications before an agency where they worked in their final year, except agencies where they worked 1 month or less (Article 21-2; Decree Article 21-2). Scriveners keep a case register — serial number, date, outline, remuneration, client details — for 1 year (Article 24; Decree Article 22), and must promptly issue a certificate of facts about work they performed on request (Article 20; Enforcement Rule Article 13).</p>
<p>See also our <a href="/blog/administrative-license-permit-specialist-guide">guide to choosing a licensing scrivener</a>. Texts: <a href="https://www.law.go.kr/법령/행정사법" target="_blank" rel="noopener">Certified Administrative Scrivener Act</a> and <a href="https://www.law.go.kr/법령/행정사법시행령" target="_blank" rel="noopener">its Enforcement Decree</a>. Costs vary case by case and are explained precisely during the free consultation.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Can a certificate holder start handling permits straight away?</p><p class="faq-a">A. No. Article 10(1) requires a business report, and Decree Article 20(1) requires no disqualification, completed training, the certificate and association membership. Practising without the report is punishable by up to 1 year of imprisonment or a fine of up to KRW 10,000,000 (Article 36(2)1).</p></div>
<div class="faq-item"><p class="faq-q">Q. How often is the scrivener exam held?</p><p class="faq-a">A. Once a year (Decree Article 8(1)), in two stages, administered by HRD Korea (Decree Article 12).</p></div>
<div class="faq-item"><p class="faq-q">Q. Can a former civil servant become a scrivener without any exam?</p><p class="faq-a">A. Current Article 9 gives only partial exemptions. For example, 10 years of service with 5 at grade 7 or above exempts the first stage, and 15 years with 8 at grade 6 or above also exempts part of the second; the remaining subjects must be passed. Grounds in Article 9(3) bar exemption.</p></div>
<div class="faq-item"><p class="faq-q">Q. The name on the certificate differs from the person I spoke to. Is that a problem?</p><p class="faq-a">A. Staff acts are deemed the scrivener's (Article 18(2)). Using another's certificate breaches Article 13 and is punishable by up to 3 years of imprisonment or a fine of up to KRW 30,000,000 (Article 36(1)). Confirm who will handle your case.</p></div>
<div class="faq-item"><p class="faq-q">Q. When is a scrivener's qualification revoked?</p><p class="faq-a">A. Under Article 30(1): fraud, transferring or lending the certificate, practising during suspension, or a final prison sentence under the Act. Revocation follows a hearing and bars the person for 3 years (Article 6, item 7).</p></div>
</div>

<div class="cta-block">
 <h3>Not sure what to check before you engage?</h3>
 <p>We start by showing you the responsible scrivener's business report certificate and the scope of delegation, then map the documents your industry needs. Call 02-363-2251, weekdays 09:30–17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=license-scrivener-qualification-check">Request a free consultation</a>
</div>

<p class="author-block">Yuseon Administrative Scrivener Office (Chief Scrivener Jeong Yuseon) · Based on the Certified Administrative Scrivener Act (Act No. 19034, in force 15 November 2022), its Enforcement Decree (Presidential Decree No. 35813, in force 1 January 2026) and Enforcement Rule (Ministry of the Interior and Safety Ordinance No. 633, in force 30 August 2026) · Last reviewed 3 October</p>`,
  },

  zh: {
    title: '韩国许可行政士的资格要件与核实方法 — 资格考试、欠格事由与业务申报确认证',
    category: '许可与执照',
    metaTitle: '韩国许可行政士资格要件与核实方法',
    metaDescription: '韩国许可行政士仅通过资格考试还不能执业。本文依据《行政士法》原文，说明考试、欠格事由、实务教育与业务申报，以及委托前如何通过确认证和事务所名称核实资格。',
    excerpt: '在韩国以行政士身份办理许可业务，须通过资格考试、无欠格事由、完成实务教育、加入大韩行政士会并办理业务申报。本文整理委托前可核实的文件与标识。',
    content: `<div class="toc"><p>目录</p><ol><li>行政士资格始于资格考试</li><li>考试部分免除与欠格事由</li><li>仅有资格不能执业 — 业务申报与申报确认证</li><li>事务所名称与行政士法人</li><li>委托前核实行政士资格的顺序</li><li>无资格代办的处罚与行政士的义务</li><li>常见问题</li></ol></div>
<p><strong>许可行政士</strong>（인허가 행정사）是指依韩国《行政士法》取得行政士资格，并向主事务所所在地的市长、郡守或区厅长办理业务申报后，受托代理许可、执照等申请与申报的人（第2条第1款第5项、第5条、第10条第1款）。仅有资格证不够，还须无欠格事由、完成实务教育并加入大韩行政士会后办理申报（施行令第20条第1款）。本文以2026年现行《行政士法》及其施行令、施行规则原文为依据。</p>
<p>可委托的业务范围另见<a href="/blog/administrative-scrivener-scope-and-limits">许可行政士的业务范围与委托界限</a>。本文回答更前一步的问题：为您提供咨询的人在法律上是否是行政士。</p>

<h2>行政士资格始于资格考试</h2>
<div class="highlight-box">《行政士法》第5条（行政士的资格）：通过行政士资格考试的人，具有行政士资格。</div>
<p>行政士分为一般行政士、海事行政士和外语翻译行政士（第4条）。代理许可申请属于一般行政士；海事行政士限于海运或海洋安全审判业务，外语翻译行政士限于翻译及提交译文（施行令第3条）。委托营业许可时应核实一般行政士资格。</p>
<p>考试由行政安全部长官每年举行一次，分两次考试，考务委托韩国产业人力公团（第8条，施行令第8条第1款、第12条）。第一次为选择题，第二次为论述题，可含简答题（施行令第9条第2款）。</p>
<table><thead><tr><th>区分</th><th>科目（一般行政士）</th><th>依据</th></tr></thead><tbody>
<tr><td>第一次（3科）</td><td>民法（总则）、行政法、行政学概论</td><td>施行令附表1</td></tr>
<tr><td>第二次（4科）</td><td>民法（合同）、行政程序论、事务管理论、行政士实务法</td><td>施行令附表1</td></tr>
<tr><td>合格标准</td><td>每科满分100分，各科40分以上且平均60分以上</td><td>施行令第17条</td></tr>
</tbody></table>
<p>规定最低录取人数而合格者不足时，从各科40分以上者中按平均分追加录取（施行令第17条第3款）。长官确认考试合格且无欠格事由后发放<strong>行政士资格证</strong>并记入台账（施行令第18条，施行规则第6条）。作弊者5年内不得应考（第9条之2）。</p>

<h2>考试部分免除与欠格事由</h2>
<p>第9条只规定部分免除，其余部分仍须合格：</p>
<ul>
<li><strong>免除第一次考试</strong> — 经历职或别定职公务员任职10年以上、其中7级以上5年以上者（第9条第1款第1项，施行令第13条第2款）。</li>
<li><strong>免除第一次及部分第二次科目</strong> — 任职15年以上且6级以上8年以上，或10年以上且5级以上5年以上者；免考科目为行政程序论和事务管理论（第9条第2款，施行令附表1）。</li>
<li><strong>已有其他类别资格者</strong> — 免除第一次考试（第9条第1款第4项）。</li>
</ul>
<p>曾被弹劾、因惩戒被罢免或解职，或因受贿、侵占等受降级或停职处分者不得免除（第9条第3款）。经历按报名截止日计算，第一次考试合格仅在下一次考试中免除（第9条第5款）。法律第10441号（2011年）附则第3条为已在职的公务员和翻译从业者保留了旧规定的全部或部分免除，取得途径因人而异，但长官签发的资格证始终是凭证。</p>
<p>依第6条，被成年监护或限定监护者、破产未复权者、禁锢以上实刑执行完毕或免除后未满3年者、缓刑期满后未满2年者、暂缓宣告期间中者、因惩戒被罢免或解职后未满3年者、依第30条被取消资格后未满3年者，不能成为行政士。业务申报时还会再次核查（施行令第20条第1款第1项）。以不正当方法取得资格、出借确认证、停业期间执业或因违反本法被判有期徒刑确定的，长官经听证后必须取消资格（第30条）。</p>

<h2>仅有资格不能执业 — 业务申报与申报确认证</h2>
<div class="highlight-box">《行政士法》第10条第1款：具有行政士资格的人欲执业，须具备总统令规定的业务申报标准，向管辖主事务所所在地的市长、郡守或区厅长等申报。变更申报事项时亦同。</div>
<p>四项标准为：无欠格事由、完成实务教育、持有资格证、加入行政士会（施行令第20条第1款）；加入义务也见于第26条之2。<strong>实务教育</strong>包括20小时基本素养教育和40小时实务见习，可集中或在线进行，由行政士会发放结业证（第25条第1款，施行令第23条，施行规则第15条）。</p>
<p>市长等发放<strong>业务申报确认证</strong>并记入台账（第12条，施行规则第9条）。3个月内既未发证也未拒绝的，视为次日已受理；被拒绝者可在3个月内提出异议（第11条）。</p>
<p>开业后每2年须接受16小时进修教育，未接受而执业的处100万韩元以下罚款（施行令第23条第6款，第38条第2款第4项）。歇业超过3个月须申报，满2年未复业的视为废业（第17条）。</p>

<h2>事务所名称与行政士法人</h2>
<p>行政士只能设一个事务所；2名以上组成的联合事务所可设分所，各须有1名以上成员常驻（第14条）。名称须含"行政士事务所"字样，非行政士不得使用该名称或"行政士"称谓（第15条、第3条第2款）。以无行政士字样的商号承揽业务的，应先核实是否已申报。</p>
<p>3名以上行政士经长官认可可设立<strong>行政士法人</strong>（第25条之2、第25条之3）。法人须另行申报，名称含"行政士法人"，不得吸收未依第25条完成实务教育者（第25条之4至第25条之6），并须为每项业务指定负责行政士签名盖章（第25条之7）。</p>

<h2>委托前核实行政士资格的顺序</h2>
<table><thead><tr><th>核实项目</th><th>看什么</th><th>依据</th></tr></thead><tbody>
<tr><td>资格证</td><td>是否由长官签发，是否为一般行政士</td><td>施行令第18条、第3条</td></tr>
<tr><td>业务申报确认证</td><td>是否由所在地市长等签发，姓名与承办人是否一致</td><td>第12条、第13条</td></tr>
<tr><td>事务所地址</td><td>与确认证是否一致（迁址10日内申报）</td><td>第14条</td></tr>
<tr><td>事务所名称</td><td>是否含行政士事务所或法人字样</td><td>第15条、第25条之5</td></tr>
<tr><td>法人</td><td>负责行政士是谁</td><td>第25条之7</td></tr>
</tbody></table>
<p>出借、借用和介绍出借确认证均被禁止（第13条）。职员可提供咨询，但其职务行为视为行政士的行为（第18条第2款）。如有疑问可向确认证上的签发机关咨询，该机关保存台账（施行规则第9条第2款）；长期案件可询问是否处于最长6个月的停业处分中（第32条第1款）。<a href="/services/nonprofit">非营利社团法人设立</a>、<a href="/services/logistics">国际物流周旋业登记</a>等后续程序较长的案件，应确认负责人始终不变。</p>

<h2>无资格代办的处罚与行政士的义务</h2>
<p>除其他法律允许外，非行政士不得以行政士业务为业（第3条第1款）：</p>
<ul>
<li><strong>无资格执业或出借确认证</strong> — 3年以下有期徒刑或3000万韩元以下罚金（第36条第1款），出借还构成资格取消事由（第30条第1款第2项）。</li>
<li><strong>未申报或停业期间执业</strong> — 1年以下有期徒刑或1000万韩元以下罚金（第36条第2款第1项·第6项）。</li>
<li><strong>使用行政士或类似名称</strong> — 500万韩元以下罚款（第38条第1款）。</li>
</ul>
<p>行政士须公正履职，因故意或过失造成损失须赔偿（第21条）；行政士及职员须保守职务秘密（第23条）。退休公务员1年内不得承接其退休前1年任职机关的许可代理业务，任职1个月以下的机关除外（第21条之2，施行令第21条之2）。行政士须将记载序号、日期、概要、报酬和委托人信息的业务处理簿保存1年（第24条，施行令第22条），并应委托人申请及时出具事实确认证明书（第20条，施行规则第13条）。</p>
<p>另见<a href="/blog/administrative-license-permit-specialist-guide">许可行政士选择指南</a>。法令原文见<a href="https://www.law.go.kr/법령/행정사법" target="_blank" rel="noopener">行政士法</a>、<a href="https://www.law.go.kr/법령/행정사법시행령" target="_blank" rel="noopener">行政士法施行令</a>。费用因个案而异，将在免费咨询时准确说明。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 有资格证就能马上代办许可吗？</p><p class="faq-a">A. 不能。第10条第1款要求办理业务申报，施行令第20条第1款要求无欠格事由、完成实务教育、持有资格证并加入行政士会。未申报执业的，依第36条第2款第1项处1年以下有期徒刑或1000万韩元以下罚金。</p></div>
<div class="faq-item"><p class="faq-q">Q. 资格考试一年考几次？</p><p class="faq-a">A. 依施行令第8条第1款每年一次，分两次考试，考务依施行令第12条委托韩国产业人力公团。</p></div>
<div class="faq-item"><p class="faq-q">Q. 有公务员经历就能免试吗？</p><p class="faq-a">A. 第9条只规定部分免除。例如任职10年以上、7级以上5年以上者免除第一次考试；15年以上、6级以上8年以上者还免除部分第二次科目，其余科目仍须合格。有第9条第3款事由者不得免除。</p></div>
<div class="faq-item"><p class="faq-q">Q. 确认证上的姓名与咨询人不同怎么办？</p><p class="faq-a">A. 职员的行为依第18条第2款视为行政士的行为；借用他人确认证则违反第13条，依第36条第1款处3年以下有期徒刑或3000万韩元以下罚金。请确认实际承办人。</p></div>
<div class="faq-item"><p class="faq-q">Q. 什么情况下资格会被取消？</p><p class="faq-a">A. 依第30条第1款：不正当取得、转让或出借确认证、停业期间执业、因违反本法被判有期徒刑确定。须经听证，被取消者依第6条第7项3年内不得成为行政士。</p></div>
</div>

<div class="cta-block">
 <h3>委托前不确定该核实什么？</h3>
 <p>유선행정사사무소会先出示负责行政士的业务申报确认证并说明委托范围，再按行业整理所需文件。电话 02-363-2251，平日 09:30~17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=license-scrivener-qualification-check">申请免费咨询</a>
</div>

<p class="author-block">유선행정사사무소（代表行政士 정유선）· 依据《行政士法》（法律第19034号，2022年11月15日施行）、同法施行令（总统令第35813号，2026年1月1日施行）及施行规则（行政安全部令第633号，2026年8月30日施行）原文撰写 · 最终审阅日 10月3日</p>`,
  },

  ja: {
    title: '韓国の許認可行政士の資格要件と確認方法 — 資格試験・欠格事由・業務申告確認証',
    category: '許認可',
    metaTitle: '韓国 許認可 行政士の資格要件と確認方法',
    metaDescription: '韓国の許認可行政士（日本の行政書士に相当）は試験合格だけでは業務ができません。行政士法の試験・欠格事由・実務教育・業務申告と、依頼前に確認証や事務所名称で資格を確かめる方法を整理しました。',
    excerpt: '韓国で行政士として許認可業務を行うには、試験合格、欠格事由なし、実務教育の修了、大韓行政士会への加入、業務申告がすべて必要です。依頼前に確認できる書類と表示を法令原文に基づき整理しました。',
    content: `<div class="toc"><p>目次</p><ol><li>行政士の資格は資格試験から始まる</li><li>試験の一部免除と欠格事由</li><li>資格だけでは業務ができない — 業務申告と申告確認証</li><li>事務所の名称と行政士法人</li><li>依頼前の行政士資格の確認手順</li><li>無資格代行の処罰と行政士の義務</li><li>よくあるご質問</li></ol></div>
<p><strong>許認可行政士</strong>（인허가 행정사）とは、韓国の「行政士法」に基づく資格を持ち、主たる事務所の所在地を管轄する市長・郡守・区庁長に業務申告をしたうえで、他人の委任を受けて認可・許可・免許等の申請や届出を代理する者をいいます（第2条第1項第5号、第5条、第10条第1項）。日本の行政書士事務所に相当する韓国の行政士事務所の担い手ですが、資格証だけでは足りず、欠格事由がないこと、実務教育の修了、大韓行政士会への加入を経て業務申告をして初めて適法に依頼を受けられます（施行令第20条第1項）。本稿は2026年時点の現行「行政士法」と同法施行令・施行規則の原文に基づいています。</p>
<p>委任できる業務の範囲は<a href="/blog/administrative-scrivener-scope-and-limits">許認可行政士の業務範囲と委任の限界</a>で扱っています。本稿ではその前段階、「相談相手は法律上の行政士か」を見分ける要件と書類に絞ります。</p>

<h2>行政士の資格は資格試験から始まる</h2>
<div class="highlight-box">「行政士法」第5条（行政士の資格）：行政士資格試験に合格した者は、行政士の資格を有する。</div>
<p>行政士は一般行政士、海事行政士、外国語翻訳行政士に区分されます（第4条）。許認可申請の代理は一般行政士の業務で、海事行政士は海運・海洋安全審判の業務、外国語翻訳行政士は翻訳と翻訳書類の提出代行に限られます（施行令第3条）。営業許認可を依頼するなら、一般行政士の資格を確認します。</p>
<p>試験は行政安全部長官が毎年1回、第1次・第2次の2段階で実施し、管理業務は韓国産業人力公団に委託されています（第8条、施行令第8条第1項・第12条）。第1次は択一式、第2次は論述式で、短答式を含めることができます（施行令第9条第2項）。</p>
<table><thead><tr><th>区分</th><th>科目（一般行政士）</th><th>根拠</th></tr></thead><tbody>
<tr><td>第1次試験（3科目）</td><td>民法（総則）、行政法、行政学概論</td><td>施行令別表1</td></tr>
<tr><td>第2次試験（4科目）</td><td>民法（契約）、行政手続論、事務管理論、行政士実務法</td><td>施行令別表1</td></tr>
<tr><td>合格基準</td><td>各科目100点満点で全科目40点以上、平均60点以上</td><td>施行令第17条</td></tr>
</tbody></table>
<p>最小選抜人員を定めた場合に合格者が不足すると、全科目40点以上の者から平均点順に追加合格とします（施行令第17条第3項）。長官は試験合格と欠格事由がないことを確認して<strong>行政士資格証</strong>を発給し、台帳に記録します（施行令第18条、施行規則第6条）。不正行為をした者は5年間受験できません（第9条の2）。</p>

<h2>試験の一部免除と欠格事由</h2>
<p>第9条が定めるのは一部免除だけで、残りの試験には合格が必要です。</p>
<ul>
<li><strong>第1次試験の免除</strong> — 経歴職または別定職の公務員として10年以上勤務し、7級以上の職に5年以上勤務した者（第9条第1項第1号、施行令第13条第2項）。</li>
<li><strong>第1次試験と第2次試験の一部の免除</strong> — 15年以上勤務し6級以上に8年以上、または10年以上勤務し5級以上に5年以上勤務した者。免除科目は行政手続論と事務管理論です（第9条第2項、施行令別表1）。</li>
<li><strong>他の種類の資格保有者</strong> — 第1次試験が免除されます（第9条第1項第4号）。</li>
</ul>
<p>弾劾や懲戒による罷免・解任、金品授受や横領等による降格・停職の処分を受けた者は免除を受けられません（第9条第3項）。経歴は願書受付締切日を基準とし、第1次試験の合格は次回の試験に限り有効です（第9条第5項）。法律第10441号（2011年）附則第3条は在職中の公務員や翻訳従事者について旧規定の全部または一部免除を維持しており、取得経路は人により異なりますが、長官発給の資格証が共通の証明です。</p>
<p>第6条により、被成年後見人・被限定後見人、復権していない破産者、禁錮以上の実刑の執行終了・免除から3年を経過していない者、執行猶予期間の終了から2年を経過していない者、宣告猶予期間中の者、懲戒による罷免・解任から3年を経過していない者、第30条による資格取消しから3年を経過していない者は、行政士になれません。業務申告の際にも改めて確認されます（施行令第20条第1項第1号）。不正な資格取得、確認証の貸与、業務停止中の業務、この法律違反による懲役刑の確定の場合、長官は聴聞を経て資格を取り消さなければなりません（第30条）。</p>

<h2>資格だけでは業務ができない — 業務申告と申告確認証</h2>
<div class="highlight-box">「行政士法」第10条第1項：行政士の資格がある者が行政士として業務を行うには、大統領令で定める行政士業務申告基準を備えて、主たる事務所の所在地を管轄する市長・郡守または区庁長等に申告しなければならない。申告した事項を変更するときも同様とする。</div>
<p>基準は、欠格事由がないこと、実務教育の修了、資格証の保有、行政士会への加入の4つです（施行令第20条第1項）。加入義務は第26条の2にも定められています。<strong>実務教育</strong>は20時間の基本素養教育と40時間の実務修習教育からなり、集合またはオンラインで行われ、行政士会が修了証を発給します（第25条第1項、施行令第23条、施行規則第15条）。</p>
<p>市長等は<strong>行政士業務申告確認証</strong>を発給し、台帳に記録します（第12条、施行規則第9条）。3か月以内に発給も拒否の通知もなければ翌日に受理されたものとみなされ、拒否された者は3か月以内に異議申立てができます（第11条）。</p>
<p>開業後は2年ごとに16時間の研修教育が必要で、受けずに業務を行うと100万ウォン以下の過料の対象です（施行令第23条第6項、第38条第2項第4号）。3か月を超える休業は申告が必要で、2年を過ぎても再開しなければ廃業とみなされます（第17条）。</p>

<h2>事務所の名称と行政士法人</h2>
<p>事務所は一つだけで、2名以上の合同事務所は分事務所を置けますが、それぞれ1名以上が常勤しなければなりません（第14条）。名称には「行政士事務所」の文字が必要で、行政士でない者はこの名称や「行政士」の名称を使えません（第15条、第3条第2項）。行政士の表示がない商号で業務をうたう場合は、業務申告の有無を確認しましょう。</p>
<p>3名以上の行政士は長官の認可を受けて<strong>行政士法人</strong>を設立できます（第25条の2、第25条の3）。法人も業務申告をし、名称に「行政士法人」を用い、第25条の実務教育を受けていない者を構成員にできず（第25条の4〜第25条の6）、案件ごとに担当行政士を指定して書面に記名押印させます（第25条の7）。</p>

<h2>依頼前の行政士資格の確認手順</h2>
<table><thead><tr><th>確認項目</th><th>確認する内容</th><th>根拠</th></tr></thead><tbody>
<tr><td>資格証</td><td>長官の発給か、一般行政士か</td><td>施行令第18条・第3条</td></tr>
<tr><td>業務申告確認証</td><td>市長等の発給か、氏名と実際の担当者が一致するか</td><td>第12条・第13条</td></tr>
<tr><td>事務所所在地</td><td>確認証と一致するか（移転は10日以内に申告）</td><td>第14条</td></tr>
<tr><td>事務所名称</td><td>行政士事務所・行政士法人の文字があるか</td><td>第15条・第25条の5</td></tr>
<tr><td>法人</td><td>担当行政士は誰か</td><td>第25条の7</td></tr>
</tbody></table>
<p>確認証の貸与・借受け・あっせんはいずれも禁止です（第13条）。事務職員が相談に応じることはありますが、その職務上の行為は行政士の行為とみなされます（第18条第2項）。疑問があれば確認証に記載された発給機関に問い合わせることができ（施行規則第9条第2項）、長期案件では6か月の範囲で命じられる業務停止の処分中でないかも確認するとよいでしょう（第32条第1項）。<a href="/services/nonprofit">非営利社団法人の設立</a>や<a href="/services/logistics">国際物流周旋業の登録</a>のように後続手続が長い案件では、担当者が最後まで同じかを確認しておくと安心です。</p>

<h2>無資格代行の処罰と行政士の義務</h2>
<p>行政士でない者は、他の法律で認められる場合を除き、行政士業務を業として行えません（第3条第1項）。</p>
<ul>
<li><strong>無資格での業務・確認証の貸与</strong> — 3年以下の懲役または3,000万ウォン以下の罰金（第36条第1項）。貸与は資格取消事由でもあります（第30条第1項第2号）。</li>
<li><strong>業務申告なし・業務停止中の業務</strong> — 1年以下の懲役または1,000万ウォン以下の罰金（第36条第2項第1号・第6号）。</li>
<li><strong>名称の使用</strong> — 行政士や類似の名称の使用は500万ウォン以下の過料（第38条第1項）。</li>
</ul>
<p>行政士は公正に職務を行い、故意・過失による損害を賠償する責任を負い（第21条）、事務職員とともに職務上の秘密を守らなければなりません（第23条）。退職公務員は退職前1年間に勤務した機関の許認可代理を退職後1年間受任できません。ただし勤務が1か月以下の機関は除かれます（第21条の2、施行令第21条の2）。行政士は一連番号・日付・業務の概要・報酬・依頼者情報を記載した業務処理簿を1年間保管し（第24条、施行令第22条）、申請があれば業務に関する事実確認証明書を直ちに発給しなければなりません（第20条、施行規則第13条）。</p>
<p>あわせて<a href="/blog/administrative-license-permit-specialist-guide">許認可行政士の選び方</a>もご覧ください。法令原文は<a href="https://www.law.go.kr/법령/행정사법" target="_blank" rel="noopener">行政士法</a>、<a href="https://www.law.go.kr/법령/행정사법시행령" target="_blank" rel="noopener">行政士法施行令</a>で確認できます。費用は事案ごとに異なるため、無料相談時に正確にご案内します。</p>

<div class="faq-section"><h2>よくあるご質問</h2>
<div class="faq-item"><p class="faq-q">Q. 資格証があればすぐに許認可代行ができますか。</p><p class="faq-a">A. できません。第10条第1項は業務申告を求め、施行令第20条第1項は欠格事由がないこと、実務教育の修了、資格証、行政士会への加入を基準としています。申告なしの業務は第36条第2項第1号により1年以下の懲役または1,000万ウォン以下の罰金の対象です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 資格試験は年に何回ありますか。</p><p class="faq-a">A. 施行令第8条第1項により毎年1回で、2段階で実施され、管理業務は施行令第12条により韓国産業人力公団に委託されています。</p></div>
<div class="faq-item"><p class="faq-q">Q. 公務員の経歴があれば試験なしで行政士になれますか。</p><p class="faq-a">A. 第9条は一部免除のみです。例えば10年以上勤務し7級以上に5年以上なら第1次試験が免除され、15年以上勤務し6級以上に8年以上なら第2次の一部も免除されますが、残りの科目は合格が必要です。第9条第3項の事由があれば免除されません。</p></div>
<div class="faq-item"><p class="faq-q">Q. 確認証の氏名と相談相手が違う場合は問題ですか。</p><p class="faq-a">A. 事務職員の行為は第18条第2項により行政士の行為とみなされます。他人の確認証を借りているなら第13条違反で、第36条第1項により3年以下の懲役または3,000万ウォン以下の罰金の対象です。実際の担当者を確認してください。</p></div>
<div class="faq-item"><p class="faq-q">Q. 資格が取り消されるのはどんな場合ですか。</p><p class="faq-a">A. 第30条第1項により、不正な資格取得、確認証の譲渡・貸与、業務停止中の業務、この法律違反による懲役刑の確定の場合です。聴聞を経て取り消され、第6条第7号により3年間行政士になれません。</p></div>
</div>

<div class="cta-block">
 <h3>依頼前に何を確認すべきかお悩みの方へ</h3>
 <p>担当行政士の業務申告確認証と委任範囲を先にご案内し、業種ごとの必要書類をユソン行政士事務所が整理します。電話 02-363-2251、平日 09:30〜17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=license-scrivener-qualification-check">無料相談を申し込む</a>
</div>

<p class="author-block">ユソン行政士事務所（代表行政士 チョン・ユソン）・「行政士法」（法律第19034号、2022年11月15日施行）、同法施行令（大統領令第35813号、2026年1月1日施行）および施行規則（行政安全部令第633号、2026年8月30日施行）の原文に基づき作成・最終確認日 10月3日</p>`,
  },
}
