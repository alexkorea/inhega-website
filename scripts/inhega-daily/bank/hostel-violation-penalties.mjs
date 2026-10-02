// 원고 은행 — inhega-daily
// 주제(풀 18개 중): hostel(호스텔업등록) / 세부주제: penalties(위반 시 제재)
//
// 법령 대조(law.go.kr DRF API, OC=visionlaw, 2026-10-02 확인):
//   관광진흥법              법률 제21087호, 2026. 5. 12. 시행 (MST 279659)
//   관광진흥법 시행령        대통령령 제36554호, 2026. 8. 4. 시행 (MST 288461)
//     별표 1 제2호 마목(호스텔업 등록기준) / 별표 2(행정처분의 기준) / 별표 3(과징금, 호스텔업 열)
//   공중위생관리법           법률 제20171호, 2025. 7. 31. 시행 (MST 259521)
//   공중위생관리법 시행령    MST 266301 제2조제1항(숙박업 적용제외 — 호스텔업 없음)
// 별표 3 은 표 열을 셀 단위로 분해해 "호스텔업" 열 값만 옮겼다(단위 만원).
// 기존 라이브 글 hostel-registration-facility·hostel-vs-guesthouse 의 "과태료 300만~3,000만 원"
// 서술은 근거가 없다 — 이 글은 그 서술을 따르지 않는다(정정은 제13장 소급정리 대상, 별건).
// 우리 서비스 가격·수수료 금액은 한 건도 쓰지 않았다(지침서 X41). 금액은 전부 법정 과징금·벌금.

export default {
  topic: 'hostel',
  angle: 'penalties',
  slug: 'hostel-violation-penalties',
  kind: 'cluster',
  coverImage: '/images/service-hostel.webp',
  relatedServices: [
    { title: '호스텔업 등록', href: '/services/hostel' },
    { title: '외국인도시민박업 등록', href: '/services/urban-guesthouse' },
    { title: '건축물 용도변경', href: '/services/building-usage' },
  ],

  ko: {
    title: '호스텔업 위반 시 제재 — 등록취소·사업정지·과징금 기준과 무등록 영업의 처벌',
    category: '숙박업',
    metaTitle: '호스텔업 위반 시 제재 — 행정처분·과징금 기준과 무등록 처벌',
    metaDescription: '호스텔업 등록 후 위반하면 어떤 처분이 오는지 관광진흥법 제35조와 시행령 별표 2·3의 차수별 기준, 호스텔업 과징금 금액, 무등록 숙박영업에 적용되는 공중위생관리법 처벌까지 원문 기준으로 정리했습니다.',
    excerpt: '호스텔업은 등록업종이라 위반하면 시정명령에서 시작해 사업정지, 등록취소로 차수가 올라갑니다. 관광진흥법 시행령 별표 2의 차수별 기준과 별표 3의 호스텔업 과징금, 그리고 등록 없이 영업할 때 실제로 적용되는 법률을 원문 기준으로 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>호스텔업 제재는 "등록"에서 출발한다</li><li>행정처분 — 위반 유형별 차수 기준</li><li>과징금 — 사업정지를 갈음하는 금전 제재</li><li>등록 없이 영업하면 어느 법이 적용되나</li><li>운영 중 놓치기 쉬운 신고·변경 의무</li><li>처분 절차와 감경 사유</li><li>자주 묻는 질문</li></ol></div>
<p><strong>호스텔업</strong>은 배낭여행객 등 개별 관광객이 묵기에 적합한 숙박시설에 샤워장·취사장 같은 편의시설과 내외국인 관광객을 위한 문화·정보 교류시설을 함께 갖추어 이용하게 하는 관광숙박업입니다. 「관광진흥법」은 이 업종을 호텔업의 한 종류로 두고 있어, 일반 숙박업과는 등록 절차도 제재 체계도 다릅니다.<!-- 근거: 관광진흥법 시행령 제2조 제1항 제2호 마목 --></p>
<p>운영자 입장에서 가장 자주 받는 질문은 "무엇을 어기면 어떤 처분이 오느냐"입니다. 그런데 인터넷에 떠도는 설명 가운데에는 과태료 금액을 근거 없이 적어 두거나, 일반 숙박업 규정과 관광숙박업 규정을 섞어 쓴 것이 적지 않습니다.</p>
<p>이 글은 현행 「관광진흥법」, 같은 법 시행령과 시행령 별표 2·별표 3, 그리고 「공중위생관리법」 원문을 직접 대조해 호스텔업에 실제로 적용되는 제재만 골라 정리한 것입니다. 별표 3은 업종별 열이 나뉜 큰 표이므로 호스텔업 열의 값만 옮겼습니다.<!-- 근거: 관광진흥법(법률 제21087호, 2026. 5. 12. 시행), 같은 법 시행령(대통령령 제36554호, 2026. 8. 4. 시행) --></p>

<h2>호스텔업 제재는 "등록"에서 출발한다</h2>
<p>호스텔업을 경영하려는 자는 특별자치시장·특별자치도지사·시장·군수·구청장에게 등록하여야 합니다.<!-- 근거: 관광진흥법 제4조 제1항 --> 등록하려면 시행령 별표 1이 정한 등록기준을 갖추어야 하는데, 호스텔업의 기준은 네 가지입니다. 개별 관광객의 숙박에 적합한 객실, 화장실·샤워장·취사장 등 편의시설(공동 이용 가능), 내외국인 관광객에게 서비스를 제공할 수 있는 문화·정보 교류시설, 그리고 대지와 건물의 소유권 또는 사용권 확보입니다.<!-- 근거: 관광진흥법 시행령 별표 1 제2호 마목 1)~4) --></p>
<p>제재 체계를 이해하려면 이 "등록"이 출발점이라는 점을 먼저 잡아야 합니다. 등록을 마친 사업자에게는 「관광진흥법」 제35조의 행정처분과 제37조의 과징금이 적용되고, 등록을 하지 않은 채 숙박영업을 하면 전혀 다른 법률의 처벌 규정이 문제가 됩니다. 제35조 제1항 본문은 다음과 같습니다.</p>
<div class="highlight-box">「관광진흥법」 제35조 제1항: 관할 등록기관등의 장은 관광사업의 등록등을 받거나 신고를 한 자 또는 사업계획의 승인을 받은 자가 다음 각 호의 어느 하나에 해당하면 그 등록등 또는 사업계획의 승인을 취소하거나 6개월 이내의 기간을 정하여 그 사업의 전부 또는 일부의 정지를 명하거나 시설·운영의 개선을 명할 수 있다.<!-- 근거: 관광진흥법 제35조 제1항 --></div>
<p>즉 등록 사업자에 대한 제재는 등록취소, 6개월 이내의 사업 전부 또는 일부 정지, 시설·운영 개선명령의 세 가지 형태를 띱니다. 어떤 위반에 어떤 처분을 몇 차에 내리는지는 법률이 아니라 시행령 제33조와 별표 2가 정합니다.<!-- 근거: 관광진흥법 제35조 제3항, 같은 법 시행령 제33조 제1항 --> 처분을 한 등록기관은 행정처분기록대장에 그 내용을 기록·유지해야 하므로, 한 번 받은 처분은 이후 위반 차수 계산의 근거로 남습니다.<!-- 근거: 관광진흥법 시행령 제33조 제2항 --></p>
<p>참고로 호텔업 가운데 등급결정 신청이 의무인 업종은 관광호텔업·수상관광호텔업·한국전통호텔업·가족호텔업·소형호텔업·의료관광호텔업이고, 호스텔업은 이 목록에 없습니다. 시행령 제22조의 이 목록 때문에 "등급결정을 신청하지 않은 경우"의 처분 기준은 호스텔업과 관계가 없습니다.<!-- 근거: 관광진흥법 제19조 제1항 단서, 같은 법 시행령 제22조 제1항 --></p>

<h2>행정처분 — 위반 유형별 차수 기준</h2>
<p>시행령 별표 2의 개별기준에는 여행업·카지노업·테마파크업 등 모든 관광사업의 위반행위가 함께 들어 있습니다. 그중 호스텔업 사업자에게 실제로 걸릴 수 있는 항목만 추리면 아래 표와 같습니다. 칸의 "정지"는 사업정지를 뜻합니다.<!-- 근거: 관광진흥법 시행령 별표 2 제2호 --></p>
<table><thead><tr><th>위반사항</th><th>근거</th><th>1차</th><th>2차</th><th>3차</th><th>4차</th></tr></thead><tbody>
<tr><td>등록기준에 적합하지 않게 된 경우</td><td>법 제35조 제1항 제1호<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>시정명령</td><td>정지 15일<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 1개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>취소</td></tr>
<tr><td>변경등록기간 내에 변경등록을 하지 않은 경우</td><td>법 제35조 제1항 제1호<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>시정명령</td><td>정지 15일<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 1개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>취소</td></tr>
<tr><td>등록한 영업범위를 벗어난 경우</td><td>법 제35조 제1항 제1호<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 1개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 2개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 3개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>취소</td></tr>
<tr><td>지위승계 신고를 기한 내에 하지 않은 경우</td><td>법 제35조 제1항 제3호<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>시정명령</td><td>정지 1개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 2개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>취소</td></tr>
<tr><td>휴업·폐업을 하고 알리지 않은 경우</td><td>법 제35조 제1항 제3호의2<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>시정명령</td><td>취소</td><td>-</td><td>-</td></tr>
<tr><td>관광표지를 사실과 다르게 붙이거나 표시·광고한 경우</td><td>법 제35조 제1항 제4호의2<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>시정명령</td><td>정지 1개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 2개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>취소</td></tr>
<tr><td>등록에 필요한 객실을 타인에게 경영하게 하거나 처분한 경우</td><td>법 제35조 제1항 제5호<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 1개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 3개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 5개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>취소</td></tr>
<tr><td>보고·서류제출명령 불이행 또는 검사 방해</td><td>법 제35조 제1항 제18호<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 10일<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 1개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 2개월<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>취소</td></tr>
<tr><td>경영 과정에서 뇌물을 주고받은 경우</td><td>법 제35조 제1항 제19호<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>시정명령</td><td>정지 10일<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>정지 20일<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>취소</td></tr>
</tbody></table>
<p>표에서 눈여겨볼 부분은 세 가지입니다. 첫째, 등록기준 미달과 변경등록 누락은 1차가 시정명령이어서 바로 영업이 멈추지는 않지만, 같은 위반이 반복되면 사업정지 15일과 1개월을 거쳐 4차에서 등록취소에 이릅니다.<!-- 근거: 관광진흥법 시행령 별표 2 제2호 가목 1)나)·2) --> 둘째, 영업범위를 벗어난 경우와 객실을 타인에게 경영하게 한 경우는 1차부터 사업정지입니다.<!-- 근거: 관광진흥법 시행령 별표 2 제2호 가목 3)나)·차목 2) --> 셋째, 휴업이나 폐업을 하고 알리지 않으면 2차에서 곧바로 등록취소가 됩니다.<!-- 근거: 관광진흥법 시행령 별표 2 제2호 사목 --></p>
<p>위반이 아니라 사람의 자격 문제로 등록이 취소되는 경우도 있습니다. 대표자 등이 「관광진흥법」 제7조의 결격사유에 해당하게 되면 별표 2는 차수 없이 1차에서 취소를 정합니다.<!-- 근거: 관광진흥법 시행령 별표 2 제2호 마목, 같은 법 제7조 제2항 --> 법인의 임원 변동이 있을 때 결격사유를 함께 확인해야 하는 이유입니다.</p>
<p>등록취소나 사업정지를 받고도 계속 영업하면 관할 등록기관은 제36조에 따라 관계 공무원에게 간판 등 영업표지물의 제거·삭제, 적법한 영업소가 아님을 알리는 게시물 부착, 영업에 꼭 필요한 시설물·기구의 봉인 조치를 하게 할 수 있습니다.<!-- 근거: 관광진흥법 제36조 제1항 --> 이 조치는 원칙적으로 미리 서면으로 알려야 하고, 영업을 할 수 없게 하는 데 필요한 최소한의 범위에 그쳐야 합니다.<!-- 근거: 관광진흥법 제36조 제4항·제5항 --></p>

<h2>과징금 — 사업정지를 갈음하는 금전 제재</h2>
<p>사업정지가 이용자에게 심한 불편을 주거나 공익을 해칠 우려가 있으면 관할 등록기관은 사업정지를 갈음하여 과징금을 부과할 수 있습니다. 상한은 2천만원입니다.<!-- 근거: 관광진흥법 제37조 제1항 --> 이미 예약 손님이 있는 숙박시설은 문을 닫으면 그 손님이 피해를 입기 때문에, 실무에서는 과징금 전환 여부가 중요한 쟁점이 됩니다.</p>
<p>위반행위별 금액은 시행령 별표 3에 업종별 열로 나뉘어 있습니다. 호스텔업 열에 금액이 정해진 항목은 다음과 같습니다(단위는 별표 3의 표기대로 만원).<!-- 근거: 관광진흥법 시행령 제34조 제1항, 별표 3 --></p>
<table><thead><tr><th>위반행위</th><th>근거</th><th>호스텔업 과징금</th></tr></thead><tbody>
<tr><td>등록기준에 적합하지 않게 된 경우</td><td>별표 3 제1호 가목<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>80만원<!-- 근거: 관광진흥법 시행령 제34조 제1항 별표 3 --></td></tr>
<tr><td>변경등록기간을 위반한 경우</td><td>별표 3 제1호 나목<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>80만원<!-- 근거: 관광진흥법 시행령 제34조 제1항 별표 3 --></td></tr>
<tr><td>지위승계 후 승계신고를 하지 않은 경우</td><td>별표 3 제3호<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>200만원<!-- 근거: 관광진흥법 시행령 제34조 제1항 별표 3 --></td></tr>
<tr><td>관광표지를 사실과 다르게 붙이거나 표시·광고한 경우</td><td>별표 3 제4호<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>300만원<!-- 근거: 관광진흥법 시행령 제34조 제1항 별표 3 --></td></tr>
<tr><td>보고 또는 서류제출 명령을 이행하지 않은 경우</td><td>별표 3 제18호 가목<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>400만원<!-- 근거: 관광진흥법 시행령 제34조 제1항 별표 3 --></td></tr>
<tr><td>관계 공무원의 장부·서류 등 검사를 방해한 경우</td><td>별표 3 제18호 나목<!-- 근거: 관광진흥법 시행령 제33조 제1항 별표 2 --></td><td>400만원<!-- 근거: 관광진흥법 시행령 제34조 제1항 별표 3 --></td></tr>
</tbody></table>
<p>위 금액은 고정값이 아닙니다. 등록기관은 사업규모, 사업지역의 특수성, 위반행위의 정도와 횟수를 고려해 2분의 1 범위에서 가중하거나 감경할 수 있습니다. 다만 가중하더라도 과징금 총액은 2천만원을 넘을 수 없습니다.<!-- 근거: 관광진흥법 시행령 제34조 제2항 --></p>
<p>과징금은 위반행위의 종류와 금액을 적은 서면 통지로 부과되고, 통지를 받은 날부터 20일 이내에 지정된 수납기관에 내야 합니다.<!-- 근거: 관광진흥법 시행령 제35조 제1항·제2항 --> 납부기한까지 내지 않으면 국세 체납처분의 예 또는 「지방행정제재·부과금의 징수 등에 관한 법률」에 따라 징수합니다.<!-- 근거: 관광진흥법 제37조 제3항 --> 과징금은 "정지를 갈음"하는 것이므로, 과징금을 낸 처분도 행정처분 이력으로 남는다는 점을 기억해 두는 것이 좋습니다.</p>

<h2>등록 없이 영업하면 어느 법이 적용되나</h2>
<p>많은 안내 글이 "호스텔을 등록 없이 운영하면 「관광진흥법」으로 형사처벌된다"고 적습니다. 원문을 보면 그렇게 단정할 수 없습니다. 「관광진흥법」 제82조 제1호는 등록 없이 경영한 자를 3년 이하의 징역 또는 3천만원 이하의 벌금에 처하지만, 관광숙박업에 대해서는 괄호 안에 "제15조제1항에 따라 사업계획의 승인을 받은 관광숙박업만 해당한다"고 범위를 좁혀 두었습니다.<!-- 근거: 관광진흥법 제82조 제1호 --></p>
<p>사업계획 승인을 받지 않고 처음부터 등록 없이 숙박영업을 하는 경우에 실제로 문제가 되는 법률은 「공중위생관리법」입니다. 이 법은 손님이 잠을 자고 머물 수 있도록 시설과 설비 등의 서비스를 제공하는 영업을 숙박업으로 정의하고, 숙박업을 하려는 자는 시설과 설비를 갖추어 시장·군수·구청장에게 신고하도록 합니다.<!-- 근거: 공중위생관리법 제2조 제1항 제2호, 제3조 제1항 --> 숙박업에서 제외되는 시설은 농어촌민박, 자연휴양림 안의 시설, 청소년수련시설, 「관광진흥법」에 따라 등록한 외국인관광 도시민박업·한옥체험업 시설뿐이고 호스텔은 여기에 없습니다.<!-- 근거: 공중위생관리법 시행령 제2조 제1항 --></p>
<div class="highlight-box">「공중위생관리법」 제20조 제1항: 제3조제1항 전단에 따른 신고를 하지 아니하고 숙박업 영업을 한 자는 2년 이하의 징역 또는 2천만원 이하의 벌금에 처한다.<!-- 근거: 공중위생관리법 제20조 제1항 --></div>
<p>반대로 호스텔업을 정상 등록하면 별도의 숙박업 신고를 따로 해야 하는지가 궁금할 수 있습니다. 등록기관이 등록심의위원회의 심의를 거쳐 등록하면, 심의를 거친 사항에 대해서는 「공중위생관리법」 제3조의 숙박업 신고를 한 것으로 봅니다.<!-- 근거: 관광진흥법 제18조 제1항 제1호 --> 또 관광숙박업자의 위반행위가 「공중위생관리법」 제11조 제1항의 위반행위에 해당하면 「공중위생관리법」이 아니라 「관광진흥법」을 적용합니다.<!-- 근거: 관광진흥법 제35조 제7항 --> 등록이 제재 체계를 한 법률로 모아 주는 셈입니다.</p>
<p>상호에 관해서도 오해가 많습니다. 관광사업자가 아닌 자가 쓸 수 없는 명칭은 시행령이 업종별로 정하는데, 관광숙박업과 유사한 영업에 대해서는 "관광호텔"과 "휴양 콘도미니엄"이 지정되어 있습니다.<!-- 근거: 관광진흥법 제10조 제3항·제4항, 같은 법 시행령 제8조 제1호 --> 이름에 무엇을 쓰느냐보다 신고나 등록 없이 숙박영업을 했느냐가 처벌의 기준이라는 점이 핵심입니다.</p>

<h2>운영 중 놓치기 쉬운 신고·변경 의무</h2>
<p>위 표의 처분 대부분은 큰 위법이 아니라 신고 기한을 넘긴 데서 시작됩니다. 호스텔업 사업자가 기억해야 할 기한과 의무는 다음과 같습니다.</p>
<ul>
<li><strong>변경등록 30일</strong> — 상호 또는 대표자의 변경, 객실 수 및 형태의 변경, 부대시설의 위치·면적 및 종류의 변경은 변경사유가 발생한 날부터 30일 이내에 변경등록신청서를 내야 합니다.<!-- 근거: 관광진흥법 제4조 제4항, 같은 법 시행령 제6조 제1항 제2호~제4호·제2항 --></li>
<li><strong>지위승계 신고 1개월</strong> — 사업을 양수하거나 경매·공매 등으로 주요 시설 전부를 인수한 자는 승계한 날부터 1개월 이내에 신고해야 합니다. 종전 사업자가 받은 처분의 효과도 원칙적으로 함께 승계됩니다.<!-- 근거: 관광진흥법 제8조 제1항~제4항 --></li>
<li><strong>휴업·폐업 알림</strong> — 사업의 전부 또는 일부를 1개월 이상 휴업하거나 폐업한 때에는 관할 등록기관에 알려야 합니다.<!-- 근거: 관광진흥법 제8조 제8항 --></li>
<li><strong>객실의 타인 경영 금지</strong> — 등록에 필요한 객실은 타인에게 경영하게 하거나 처분할 수 없습니다. 다만 사업자 명의로 경영하고 대외적 책임을 사업자가 지는 조건으로 위탁경영은 할 수 있습니다.<!-- 근거: 관광진흥법 제11조 제1항 제1호·제2항 --></li>
<li><strong>보고와 검사 협조</strong> — 등록기관의 보고·서류제출 명령과 관계 공무원의 검사는 거부하거나 방해하면 그 자체로 처분 사유가 됩니다.<!-- 근거: 관광진흥법 제35조 제1항 제18호 --></li>
</ul>
<p>지위승계에는 실무상 중요한 단서가 하나 있습니다. 양수한 사업자가 양수 당시 종전 처분이나 위반 사실을 알지 못하였음을 증명하면 처분 효과가 승계되지 않습니다.<!-- 근거: 관광진흥법 제8조 제3항 단서 --> 운영 중인 호스텔을 인수할 때 행정처분 이력을 미리 확인해 두면 이 증명 부담을 줄일 수 있습니다.</p>
<p>한편 2025년에 신설된 안전·위생 교육 의무와 불법카메라 설치 금지 조항은 그 적용 대상을 외국인관광 도시민박업과 한옥체험업 등록자로 한정하고 있어 호스텔업에는 직접 적용되지 않습니다.<!-- 근거: 관광진흥법 제20조의3, 제20조의4 --> 물론 불법촬영 자체는 업종을 가리지 않고 형사처벌 대상이므로 시설 점검은 별개로 해야 합니다.</p>

<h2>처분 절차와 감경 사유</h2>
<p>등록취소처분을 하려면 등록기관은 제77조에 따라 반드시 청문을 거쳐야 합니다.<!-- 근거: 관광진흥법 제77조 제2호 --> 청문은 사업자가 사실관계와 사정을 소명할 수 있는 마지막 공식 절차이므로, 통지를 받으면 위반 경위와 시정 내용을 자료로 정리해 두는 것이 좋습니다.</p>
<p>위반 차수는 최근 1년간 같은 위반행위로 행정처분을 받은 경우에 적용됩니다. 기간은 처분을 받은 날과 그 뒤 다시 같은 위반행위로 적발된 날을 기준으로 계산합니다.<!-- 근거: 관광진흥법 시행령 별표 2 제1호 나목 --> 위반행위가 두 가지 이상이면 그중 무거운 처분기준을 따르고, 모두 사업정지라면 무거운 기준의 2분의 1까지 가중할 수 있되 각 기준을 합산한 기간을 넘을 수 없습니다.<!-- 근거: 관광진흥법 시행령 별표 2 제1호 가목 --></p>
<p>처분권자는 다음 사유를 고려해 처분을 감경할 수 있고, 사업정지라면 처분기준의 2분의 1 범위에서 감경할 수 있습니다.<!-- 근거: 관광진흥법 시행령 별표 2 제1호 라목 --></p>
<ol>
<li>고의나 중대한 과실이 아닌 사소한 부주의나 오류로 인한 위반으로 인정되는 경우</li>
<li>위반의 내용·정도가 경미하여 소비자 피해가 적다고 인정되는 경우</li>
<li>처음 해당 위반행위를 한 경우로서 5년 이상 관광사업을 모범적으로 해 온 사실이 인정되는 경우<!-- 근거: 관광진흥법 시행령 별표 2 제1호 라목 3) --></li>
<li>해당 위반행위로 검사로부터 기소유예 처분을 받거나 법원으로부터 선고유예 판결을 받은 경우</li>
</ol>
<p>결국 제재 대응의 핵심은 처분이 내려진 뒤가 아니라 그 전 단계에 있습니다. 변경등록과 승계신고 기한을 지키고, 등록기준을 계속 유지하고 있는지 정기적으로 점검하는 것만으로 표의 상당 부분을 피할 수 있습니다. 호스텔 신규 등록 절차는 <a href="/blog/hostel-registration-guide">호스텔업 등록 가이드</a>에서, 객실·소방 기준은 <a href="/blog/hostel-room-fire-standards">호스텔업 객실 면적과 소방 안전 기준</a>에서 함께 확인하실 수 있습니다. 등록 준비는 <a href="/services/hostel">호스텔업 등록</a> 안내를, 도시민박업과의 차이는 <a href="/services/urban-guesthouse">외국인도시민박업 등록</a> 안내를 참고하세요. 법령 원문은 <a href="https://www.law.go.kr/법령/관광진흥법" target="_blank" rel="noopener">관광진흥법</a>, <a href="https://www.law.go.kr/법령/관광진흥법시행령" target="_blank" rel="noopener">관광진흥법 시행령</a>, <a href="https://www.law.go.kr/법령/공중위생관리법" target="_blank" rel="noopener">공중위생관리법</a>에서 볼 수 있습니다. 대행 비용은 사례별로 상이하므로 무료 상담 시 정확히 안내드립니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 호스텔을 등록 없이 운영하면 관광진흥법으로 처벌받나요?</p><p class="faq-a">A. 원문상 단정할 수 없습니다. 「관광진흥법」 제82조 제1호의 무등록 처벌은 관광숙박업 중 제15조 제1항에 따라 사업계획의 승인을 받은 경우로 한정되어 있습니다. 승인 없이 숙박영업을 하면 「공중위생관리법」 제3조 제1항의 숙박업 신고 의무 위반이 되고, 같은 법 제20조 제1항에 따라 2년 이하의 징역 또는 2천만원 이하의 벌금 대상이 됩니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 등록기준이 하나 빠지면 바로 등록이 취소되나요?</p><p class="faq-a">A. 아닙니다. 「관광진흥법 시행령」 별표 2는 등록기준에 적합하지 않게 된 경우 1차 시정명령, 2차 사업정지 15일, 3차 사업정지 1개월, 4차 등록취소로 단계를 정합니다. 차수는 최근 1년간 같은 위반으로 처분을 받았는지로 계산합니다.<!-- 근거: 관광진흥법 시행령 별표 2 제1호 나목·제2호 가목 1)나) --></p></div>
<div class="faq-item"><p class="faq-q">Q. 사업정지 대신 과징금으로 바꿀 수 있나요?</p><p class="faq-a">A. 가능합니다. 「관광진흥법」 제37조 제1항은 사업정지가 이용자에게 심한 불편을 주거나 공익을 해칠 우려가 있으면 2천만원 이하의 과징금으로 갈음할 수 있게 합니다. 호스텔업의 위반행위별 금액은 시행령 별표 3에 있고, 제34조 제2항에 따라 2분의 1 범위에서 가감됩니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 운영 중인 호스텔을 인수하면 전 사업자의 처분도 넘어오나요?</p><p class="faq-a">A. 원칙적으로 넘어옵니다. 「관광진흥법」 제8조 제3항은 종전 사업자가 받은 취소·정지처분이나 개선명령의 효과가 승계자에게 승계된다고 정합니다. 다만 양수 당시 그 처분이나 위반 사실을 알지 못했음을 증명하면 예외이고, 승계 후 1개월 이내에 지위승계 신고를 해야 합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 객실 운영을 다른 회사에 맡기는 것도 위반인가요?</p><p class="faq-a">A. 형태에 따라 다릅니다. 「관광진흥법」 제11조 제1항은 등록에 필요한 객실을 타인에게 경영하게 하는 것을 금지하지만, 같은 조 제2항은 사업자 명의로 경영하고 대외적 책임을 사업자가 지는 위탁경영은 허용합니다. 명의와 책임이 넘어가면 시행령 별표 2에 따라 1차부터 사업정지 1개월입니다.</p></div>
</div>

<div class="cta-block">
 <h3>처분 통지를 받았거나 기한이 걱정된다면</h3>
 <p>등록사항과 처분 통지서를 보고 위반 차수, 과징금 전환 가능성, 청문 소명 자료를 유선행정사사무소가 먼저 정리해 드립니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=hostel-violation-penalties">무료 상담 신청하기</a>
</div>

<p class="author-block">유선행정사사무소 (대표 행정사 정유선) · 「관광진흥법」(법률 제21087호, 2026. 5. 12. 시행), 같은 법 시행령(대통령령 제36554호, 2026. 8. 4. 시행) 별표 2·3, 「공중위생관리법」(법률 제20171호, 2025. 7. 31. 시행) 원문 기준으로 작성 · 최종 검토일 10월 2일<!-- 근거: 관광진흥법 법률 제21087호, 관광진흥법 시행령 대통령령 제36554호, 공중위생관리법 법률 제20171호 --></p>`,
  },

  en: {
    title: 'Penalties for Hostel Businesses in Korea — Revocation, Suspension and Penalty Surcharges',
    category: 'Licensing & Permits',
    metaTitle: 'Korean Hostel Business Penalties — Sanctions and Surcharges',
    metaDescription: 'What a registered Korean hostel faces for violations under Tourism Promotion Act Art. 35 and 37, and which law applies to unregistered lodging.',
    excerpt: 'A hostel is a registered tourism business, so sanctions escalate from a corrective order to suspension and revocation. Here is what the statute and its tables actually say.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>Sanctions Start From Registration</li><li>Administrative Sanctions by Violation</li><li>Penalty Surcharges Instead of Suspension</li><li>Which Law Applies to Unregistered Operation</li><li>Reporting Duties Operators Miss</li><li>Procedure and Mitigation</li><li>FAQ</li></ol></div>
<p>A <strong>hostel business</strong> in Korea provides rooms suited to individual travellers such as backpackers, together with shared facilities such as showers and kitchens and a cultural and information exchange space for Korean and foreign guests. The Tourism Promotion Act treats it as a type of hotel business, so its registration and sanctions differ from those of an ordinary lodging business.</p>
<p>Much of what circulates online quotes fine amounts with no legal source. This article checks the current Tourism Promotion Act, its Enforcement Decree with Tables 2 and 3, and the Public Health Control Act against the Korean text and keeps only what applies to a hostel. From the wide Table 3, only the hostel column is reproduced.</p>

<h2>Sanctions Start From Registration</h2>
<p>A hostel operator must register with the head of the competent city, county or district (Article 4(1)). Table 1 of the Decree sets four standards: rooms suitable for individual travellers; toilets, showers and kitchens, which may be shared; a cultural and information exchange space; and ownership of, or a right to use, the land and building.</p>
<p>A registered operator is subject to administrative sanctions under Article 35 and surcharges under Article 37. A person running lodging without registration faces a different statute altogether.</p>
<div class="highlight-box">Tourism Promotion Act, Article 35(1): Where a person who has registered a tourism business falls under any of the listed grounds, the competent registration authority may revoke the registration, order the suspension of all or part of the business for a period of up to 6 months, or order improvements to facilities or operations.</div>
<p>Which sanction applies to which violation, and at which repetition, is set by Article 33 and Table 2 of the Decree. Each sanction is recorded in a register, so it remains the basis for counting later repetitions. Mandatory star grading does not cover hostels, so the sanction for failing to apply for grading does not concern them.</p>

<h2>Administrative Sanctions by Violation</h2>
<p>Table 2 covers every tourism business. The items that can realistically apply to a hostel are these:</p>
<table><thead><tr><th>Violation</th><th>Basis</th><th>1st</th><th>2nd</th><th>3rd</th><th>4th</th></tr></thead><tbody>
<tr><td>No longer meeting registration standards</td><td>Art. 35(1)1</td><td>Corrective order</td><td>Suspension 15 days</td><td>Suspension 1 month</td><td>Revocation</td></tr>
<tr><td>Failing to register a change in time</td><td>Art. 35(1)1</td><td>Corrective order</td><td>Suspension 15 days</td><td>Suspension 1 month</td><td>Revocation</td></tr>
<tr><td>Operating beyond the registered scope</td><td>Art. 35(1)1</td><td>Suspension 1 month</td><td>Suspension 2 months</td><td>Suspension 3 months</td><td>Revocation</td></tr>
<tr><td>Late report of succession</td><td>Art. 35(1)3</td><td>Corrective order</td><td>Suspension 1 month</td><td>Suspension 2 months</td><td>Revocation</td></tr>
<tr><td>Closing or pausing without notice</td><td>Art. 35(1)3-2</td><td>Corrective order</td><td>Revocation</td><td>-</td><td>-</td></tr>
<tr><td>False tourism sign or advertising</td><td>Art. 35(1)4-2</td><td>Corrective order</td><td>Suspension 1 month</td><td>Suspension 2 months</td><td>Revocation</td></tr>
<tr><td>Letting another person run the registered rooms</td><td>Art. 35(1)5</td><td>Suspension 1 month</td><td>Suspension 3 months</td><td>Suspension 5 months</td><td>Revocation</td></tr>
<tr><td>Ignoring a reporting order or obstructing inspection</td><td>Art. 35(1)18</td><td>Suspension 10 days</td><td>Suspension 1 month</td><td>Suspension 2 months</td><td>Revocation</td></tr>
<tr><td>Giving or receiving bribes</td><td>Art. 35(1)19</td><td>Corrective order</td><td>Suspension 10 days</td><td>Suspension 20 days</td><td>Revocation</td></tr>
</tbody></table>
<p>A shortfall in standards or a missed change registration starts with a corrective order but reaches revocation at the 4th time. Operating beyond scope and letting others run the rooms mean suspension from the 1st time, and closing without notice means revocation at the 2nd.</p>
<p>If the representative falls under a disqualification ground in Article 7, Table 2 provides revocation at once. If a business keeps operating after revocation or suspension, the authority may under Article 36 have officials remove signs, post a notice and seal essential facilities, normally after written notice and only to the minimum extent needed.</p>

<h2>Penalty Surcharges Instead of Suspension</h2>
<p>Where suspension would seriously inconvenience users or harm the public interest, the authority may impose a surcharge instead, capped at KRW 20 million (Article 37(1)). For a hostel with bookings, this conversion is often the key issue.</p>
<p>The hostel column of Table 3 fixes these amounts (Decree Article 34(1)):</p>
<table><thead><tr><th>Violation</th><th>Basis</th><th>Hostel surcharge</th></tr></thead><tbody>
<tr><td>No longer meeting registration standards</td><td>Article 34, Table 3 item 1</td><td>KRW 800,000</td></tr>
<tr><td>Missing the change registration period</td><td>Article 34, Table 3 item 1</td><td>KRW 800,000</td></tr>
<tr><td>Failing to report succession</td><td>Article 34, Table 3 item 3</td><td>KRW 2,000,000</td></tr>
<tr><td>False tourism sign or advertising</td><td>Article 34, Table 3 item 4</td><td>KRW 3,000,000</td></tr>
<tr><td>Ignoring a reporting or document order</td><td>Article 34, Table 3 item 18</td><td>KRW 4,000,000</td></tr>
<tr><td>Obstructing an inspection of books or documents</td><td>Article 34, Table 3 item 18</td><td>KRW 4,000,000</td></tr>
</tbody></table>
<p>Under Article 34(2) of the Decree these amounts may be raised or lowered by up to one half according to scale, location and the degree and frequency of the violation, but the total may not exceed KRW 20 million. Payment is due within 20 days of the written notice (Decree Article 35), and unpaid amounts are collected like tax arrears (Article 37(3)). A surcharge still counts as a sanction on the record.</p>

<h2>Which Law Applies to Unregistered Operation</h2>
<p>Many guides say an unregistered hostel is a crime under the Tourism Promotion Act. Article 82(1) does punish unregistered operation with imprisonment of up to 3 years or a fine of up to KRW 30 million, but for tourist accommodation it is limited in brackets to businesses whose business plan was approved under Article 15(1).</p>
<p>Where lodging is run without registration or plan approval, the statute that bites is the Public Health Control Act. It requires anyone running a lodging business to report to the local head (Articles 2(1)2 and 3(1)), and hostels are not among the exclusions listed in its Enforcement Decree (Article 2(1)).</p>
<div class="highlight-box">Public Health Control Act, Article 20(1): A person who operates a lodging business without making the report under the first sentence of Article 3(1) shall be punished by imprisonment of up to 2 years or a fine of up to KRW 20 million.</div>
<p>Conversely, where registration follows review by the registration review committee, the reviewed matters are deemed to include that lodging report (Article 18(1)1), and an accommodation operator's violation of Article 11(1) of the Public Health Control Act is handled under the Tourism Promotion Act instead (Article 35(7)). Registration channels the sanctions into one statute.</p>

<h2>Reporting Duties Operators Miss</h2>
<p>Most sanctions begin with a missed deadline rather than a serious wrong:</p>
<ul>
<li><strong>Change registration within 30 days</strong> — a change of trade name, representative, number or type of rooms, or ancillary facilities (Article 4(4), Decree Article 6).</li>
<li><strong>Succession report within 1 month</strong> — after acquiring the business or its main facilities through auction or similar procedures; earlier sanctions generally pass over too (Article 8(1) to (4)).</li>
<li><strong>Notice of closure or pause</strong> — when closing, or pausing for 1 month or more (Article 8(8)).</li>
<li><strong>No letting others run the rooms</strong> — consignment is allowed only in the operator's name with the operator bearing external liability (Article 11).</li>
<li><strong>Reporting and inspections</strong> — refusing or obstructing them is itself a ground for sanction (Article 35(1)18).</li>
</ul>
<p>If an acquirer proves they did not know of an earlier sanction or violation, its effect does not pass over (Article 8(3)), so check the sanction history before buying a running hostel. The 2025 training duty and hidden camera ban apply only to urban homestays and hanok stays (Articles 20-3 and 20-4).</p>

<h2>Procedure and Mitigation</h2>
<p>Revocation requires a hearing under Article 77, the last formal chance to explain the facts and the corrections made.</p>
<p>Repetition counts only where the same violation drew a sanction within the most recent 1 year. With several violations the heavier standard applies; if all are suspensions, it may be increased by up to one half but not beyond their sum. A sanction may be mitigated, and a suspension reduced by up to one half, where:</p>
<ol>
<li>the violation came from minor carelessness rather than intent or gross negligence;</li>
<li>the violation was minor and caused little harm to consumers;</li>
<li>it is a first violation after 5 years or more of exemplary operation; or</li>
<li>indictment or sentence was suspended for the violation.</li>
</ol>
<p>Meeting the deadlines and checking regularly that the standards are still met avoids much of the table above. The texts are on the National Law Information Center: <a href="https://www.law.go.kr/법령/관광진흥법" target="_blank" rel="noopener">Tourism Promotion Act</a> and <a href="https://www.law.go.kr/법령/공중위생관리법" target="_blank" rel="noopener">Public Health Control Act</a>. Costs vary case by case and are explained precisely during the free consultation.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. Is running a hostel without registration punished under the Tourism Promotion Act?</p><p class="faq-a">A. Not as a blanket rule. Article 82(1) covers tourist accommodation only where a business plan was approved under Article 15(1). Otherwise the lodging report duty of the Public Health Control Act applies, with imprisonment of up to 2 years or a fine of up to KRW 20 million under its Article 20(1).</p></div>
<div class="faq-item"><p class="faq-q">Q. Is registration revoked as soon as one standard is missing?</p><p class="faq-a">A. No. Table 2 sets a corrective order the 1st time, 15 days of suspension the 2nd, 1 month the 3rd and revocation the 4th, counted within the most recent 1 year.</p></div>
<div class="faq-item"><p class="faq-q">Q. Can a suspension be replaced by a surcharge?</p><p class="faq-a">A. Yes. Article 37(1) allows a surcharge of up to KRW 20 million where suspension would seriously inconvenience users. Hostel amounts are in Table 3 and may be adjusted by up to one half.</p></div>
<div class="faq-item"><p class="faq-q">Q. If I buy a running hostel, do the previous owner's sanctions come with it?</p><p class="faq-a">A. As a rule, yes (Article 8(3)), unless you prove you did not know of them. Report the succession within 1 month.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is it a violation to hand room operations to another company?</p><p class="faq-a">A. Consignment in your own name with your own external liability is allowed under Article 11(2). If name and liability pass over, Table 2 sets 1 month of suspension from the 1st time.</p></div>
</div>

<div class="cta-block">
 <h3>Received a sanction notice or worried about a deadline?</h3>
 <p>We review your registration and the notice, then map the repetition count, the chance of conversion to a surcharge and the materials for the hearing. Call 02-363-2251, weekdays 09:30–17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=hostel-violation-penalties">Request a free consultation</a>
</div>

<p class="author-block">Yuseon Administrative Scrivener Office (Chief Scrivener Jeong Yuseon) · Based on the Tourism Promotion Act (Act No. 21087, in force 12 May 2026), its Enforcement Decree (Presidential Decree No. 36554, in force 4 August 2026) with Tables 2 and 3, and the Public Health Control Act (Act No. 20171) · Last reviewed 2 October</p>`,
  },

  zh: {
    title: '韩国青年旅舍业违规处罚 — 撤销登记、停业与课征金标准',
    category: '许可与执照',
    metaTitle: '韩国青年旅舍业违规处罚 — 行政处分与课征金',
    metaDescription: '依据韩国《观光振兴法》第35条、第37条及施行令附表2·3，说明已登记青年旅舍业违规时的分次处分标准、课征金金额，以及未登记经营住宿时实际适用的法律。',
    excerpt: '青年旅舍业是登记业种，违规后会从整改命令升级到停业、撤销登记。本文依据法令原文整理各次处分标准、课征金与未登记经营的处罚。',
    content: `<div class="toc"><p>目录</p><ol><li>处罚体系从"登记"出发</li><li>行政处分 — 按违规类型的分次标准</li><li>课征金 — 代替停业的金钱制裁</li><li>未登记经营适用哪部法律</li><li>经营中容易遗漏的申报义务</li><li>处分程序与减轻事由</li><li>常见问题</li></ol></div>
<p><strong>青年旅舍业</strong>（호스텔업）是为背包客等个人游客提供客房，并配备淋浴间、厨房等可共用的便利设施和文化·信息交流设施的观光住宿业。韩国《观光振兴法》把它列为酒店业的一种，登记与处罚体系都不同于一般住宿业。</p>
<p>网上不少说明写着没有法律依据的罚款金额。本文对照现行《观光振兴法》、同法施行令附表2·3及《公共卫生管理法》原文，只整理实际适用于青年旅舍业的处罚；附表3只摘录青年旅舍业一栏。</p>

<h2>处罚体系从"登记"出发</h2>
<p>经营青年旅舍业须向市长、郡守或区厅长等登记（第4条第1款）。施行令附表1规定四项标准：适合个人游客的客房；可共用的卫生间、淋浴间、厨房；文化·信息交流设施；土地和建筑物的所有权或使用权。</p>
<p>已登记者适用第35条的行政处分和第37条的课征金；未登记就经营住宿的，涉及另一部法律的罚则。</p>
<div class="highlight-box">《观光振兴法》第35条第1款：管辖登记机关的长对已办理观光事业登记等的人，如有下列各项情形之一，可撤销其登记，或规定6个月以内的期间命令停止该事业的全部或一部分，或命令改善设施·运营。</div>
<p>哪种违规第几次给予何种处分，由施行令第33条和附表2规定。处分会记入记录簿，成为日后计算次数的依据。青年旅舍业不属于必须申请等级评定的业种，"未申请等级评定"的处分与其无关。</p>

<h2>行政处分 — 按违规类型的分次标准</h2>
<p>附表2中可能实际适用于青年旅舍的项目如下：</p>
<table><thead><tr><th>违规事项</th><th>依据</th><th>第1次</th><th>第2次</th><th>第3次</th><th>第4次</th></tr></thead><tbody>
<tr><td>不再符合登记标准</td><td>第35条第1款第1项</td><td>整改命令</td><td>停业15日</td><td>停业1个月</td><td>撤销</td></tr>
<tr><td>未在期限内办理变更登记</td><td>第35条第1款第1项</td><td>整改命令</td><td>停业15日</td><td>停业1个月</td><td>撤销</td></tr>
<tr><td>超出登记的营业范围</td><td>第35条第1款第1项</td><td>停业1个月</td><td>停业2个月</td><td>停业3个月</td><td>撤销</td></tr>
<tr><td>未在期限内申报地位承继</td><td>第35条第1款第3项</td><td>整改命令</td><td>停业1个月</td><td>停业2个月</td><td>撤销</td></tr>
<tr><td>停业·歇业未通知</td><td>第35条第1款第3项之2</td><td>整改命令</td><td>撤销</td><td>-</td><td>-</td></tr>
<tr><td>与事实不符的观光标志或广告</td><td>第35条第1款第4项之2</td><td>整改命令</td><td>停业1个月</td><td>停业2个月</td><td>撤销</td></tr>
<tr><td>让他人经营登记所需客房</td><td>第35条第1款第5项</td><td>停业1个月</td><td>停业3个月</td><td>停业5个月</td><td>撤销</td></tr>
<tr><td>不履行报告命令或妨碍检查</td><td>第35条第1款第18项</td><td>停业10日</td><td>停业1个月</td><td>停业2个月</td><td>撤销</td></tr>
<tr><td>收受或给予贿赂</td><td>第35条第1款第19项</td><td>整改命令</td><td>停业10日</td><td>停业20日</td><td>撤销</td></tr>
</tbody></table>
<p>登记标准不足和遗漏变更登记第1次是整改命令，但第4次即撤销；超出营业范围和让他人经营客房第1次起就停业；停业或歇业不通知的，第2次直接撤销。</p>
<p>代表人属于第7条欠格事由时，第1次即撤销。被撤销或停业后仍营业的，登记机关可依第36条拆除招牌、张贴告示、封存必需设施，原则上须事先书面通知，并限于最小范围。</p>

<h2>课征金 — 代替停业的金钱制裁</h2>
<p>停业会给使用者带来严重不便或损害公益时，可以课征金代替，上限2000万韩元（第37条第1款）。有预订客人的旅舍，能否转换往往是关键。</p>
<p>附表3青年旅舍业一栏的金额如下（施行令第34条第1款）：</p>
<table><thead><tr><th>违规行为</th><th>依据</th><th>课征金</th></tr></thead><tbody>
<tr><td>不再符合登记标准</td><td>第34条·附表3第1项</td><td>80万韩元</td></tr>
<tr><td>违反变更登记期限</td><td>第34条·附表3第1项</td><td>80万韩元</td></tr>
<tr><td>承继后未申报</td><td>第34条·附表3第3项</td><td>200万韩元</td></tr>
<tr><td>与事实不符的观光标志或广告</td><td>第34条·附表3第4项</td><td>300万韩元</td></tr>
<tr><td>不履行报告或提交文件命令</td><td>第34条·附表3第18项</td><td>400万韩元</td></tr>
<tr><td>妨碍检查账簿·文件</td><td>第34条·附表3第18项</td><td>400万韩元</td></tr>
</tbody></table>
<p>依施行令第34条第2款，可在二分之一范围内加减，但总额不得超过2000万韩元。须在收到书面通知后20日内缴纳（施行令第35条），逾期按国税滞纳处分例征收（第37条第3款）。课征金仍作为处分记录保留。</p>

<h2>未登记经营适用哪部法律</h2>
<p>常见说法是"未登记经营青年旅舍会依《观光振兴法》受刑事处罚"。第82条第1项确实对未登记经营处3年以下有期徒刑或3000万韩元以下罚金，但对观光住宿业限定为"依第15条第1款获得事业计划批准的"。</p>
<p>未经批准也未登记就经营住宿的，适用的是《公共卫生管理法》：经营住宿业须向市长、郡守或区厅长申报（第2条第1款第2项、第3条第1款），而施行令第2条第1款列举的排除对象中没有青年旅舍。</p>
<div class="highlight-box">《公共卫生管理法》第20条第1款：未依第3条第1款前段申报而经营住宿业者，处2年以下有期徒刑或2000万韩元以下罚金。</div>
<p>反之，经登记审议委员会审议后登记的，审议事项视为已办理住宿业申报（《观光振兴法》第18条第1款第1项）；观光住宿业者违反《公共卫生管理法》第11条第1款的，适用《观光振兴法》（第35条第7款）。登记让处罚集中到一部法律。</p>

<h2>经营中容易遗漏的申报义务</h2>
<p>多数处分始于错过期限：</p>
<ul>
<li><strong>变更登记30日</strong> — 商号、代表人、客房数量及形态、附属设施变更（第4条第4款、施行令第6条）。</li>
<li><strong>地位承继申报1个月</strong> — 受让事业或经拍卖等接收主要设施后；原处分原则上一并承继（第8条第1款至第4款）。</li>
<li><strong>停业·歇业通知</strong> — 歇业或停业1个月以上时（第8条第8款）。</li>
<li><strong>禁止让他人经营客房</strong> — 仅允许以经营者名义、由经营者承担对外责任的委托经营（第11条）。</li>
<li><strong>报告与检查</strong> — 拒绝或妨碍本身即为处分事由（第35条第1款第18项）。</li>
</ul>
<p>受让人证明不知原处分或违规的，处分效力不承继（第8条第3款），接手前应确认处分记录。2025年新设的安全·卫生教育和禁止非法摄像头条款仅适用于城市民宿业和韩屋体验业（第20条之3、第20条之4）。</p>

<h2>处分程序与减轻事由</h2>
<p>撤销登记须依第77条举行听证，这是说明事实与整改情况的最后正式程序。</p>
<p>次数仅在最近1年内因同一违规受过处分时适用。有多项违规时依较重标准；均为停业的，可加重至二分之一，但不得超过合计期间。下列情形可减轻处分，停业可减至二分之一：</p>
<ol>
<li>非故意或重大过失，而是轻微疏忽所致；</li>
<li>违规轻微，对消费者损害小；</li>
<li>初次违规且5年以上模范经营；</li>
<li>被缓起诉或宣告缓刑。</li>
</ol>
<p>遵守期限并定期检查登记标准，就能避开上表的大部分情形。法令原文见<a href="https://www.law.go.kr/법령/관광진흥법" target="_blank" rel="noopener">观光振兴法</a>、<a href="https://www.law.go.kr/법령/공중위생관리법" target="_blank" rel="noopener">公共卫生管理法</a>。费用因个案而异，将在免费咨询时准确说明。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 未登记经营青年旅舍会依《观光振兴法》受处罚吗？</p><p class="faq-a">A. 不能一概而论。第82条第1项对观光住宿业仅限依第15条第1款获批事业计划的情形。其他情形适用《公共卫生管理法》的申报义务，依其第20条第1款可处2年以下有期徒刑或2000万韩元以下罚金。</p></div>
<div class="faq-item"><p class="faq-q">Q. 缺少一项登记标准会立即被撤销吗？</p><p class="faq-a">A. 不会。附表2规定第1次整改命令、第2次停业15日、第3次停业1个月、第4次撤销，次数按最近1年计算。</p></div>
<div class="faq-item"><p class="faq-q">Q. 可以用课征金代替停业吗？</p><p class="faq-a">A. 可以。第37条第1款允许以2000万韩元以下课征金代替。青年旅舍业金额见附表3，可在二分之一范围内增减。</p></div>
<div class="faq-item"><p class="faq-q">Q. 接手旅舍后，原经营者的处分也会转过来吗？</p><p class="faq-a">A. 原则上会（第8条第3款），但证明不知情的除外。承继后须在1个月内申报。</p></div>
<div class="faq-item"><p class="faq-q">Q. 把客房运营交给其他公司算违规吗？</p><p class="faq-a">A. 以自己名义、自负对外责任的委托经营依第11条第2款允许；名义和责任转移的，附表2规定第1次即停业1个月。</p></div>
</div>

<div class="cta-block">
 <h3>收到处分通知或担心期限？</h3>
 <p>유선행정사사무소会先查看登记事项和处分通知书，整理违规次数、转换为课征金的可能性以及听证说明资料。电话 02-363-2251，平日 09:30~17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=hostel-violation-penalties">申请免费咨询</a>
</div>

<p class="author-block">유선행정사사무소（代表行政士 정유선）· 依据《观光振兴法》（法律第21087号，2026年5月12日施行）、同法施行令（总统令第36554号，2026年8月4日施行）附表2·3及《公共卫生管理法》（法律第20171号）原文撰写 · 最终审阅日 10月2日</p>`,
  },

  ja: {
    title: '韓国のホステル業の違反時の制裁 — 登録取消・事業停止・課徴金の基準',
    category: '許認可',
    metaTitle: '韓国ホステル業の違反時の制裁 — 行政処分と課徴金',
    metaDescription: '韓国の観光振興法第35条・第37条と施行令別表2・3に基づき、登録済みホステル業が違反した場合の次数別処分基準、課徴金額、無登録の宿泊営業に実際に適用される法律を原文基準で整理しました。',
    excerpt: 'ホステル業は登録業種のため、違反すると是正命令から事業停止、登録取消へと次数が上がります。法令原文に基づき処分基準・課徴金・無登録営業の処罰を整理しました。',
    content: `<div class="toc"><p>目次</p><ol><li>制裁は「登録」から始まる</li><li>行政処分 — 違反類型別の次数基準</li><li>課徴金 — 事業停止に代わる金銭制裁</li><li>無登録で営業するとどの法律が適用されるか</li><li>運営中に見落としやすい届出義務</li><li>処分手続と減軽事由</li><li>よくあるご質問</li></ol></div>
<p><strong>ホステル業</strong>（호스텔업）とは、バックパッカーなど個人の観光客向けの客室に、シャワー室・炊事場などの共用可能な便益施設と文化・情報交流施設を備えた観光宿泊業です。韓国の「観光振興法」はこれをホテル業の一種としているため、登録手続も制裁の体系も一般の宿泊業とは異なります。</p>
<p>インターネット上には根拠のない過料の金額を記載した説明が少なくありません。本稿では現行の「観光振興法」、同法施行令の別表2・3、「公衆衛生管理法」の原文を照合し、ホステル業に実際に適用される制裁だけを整理しました。別表3はホステル業の列のみを転記しています。</p>

<h2>制裁は「登録」から始まる</h2>
<p>ホステル業を経営する者は市長・郡守・区庁長等に登録しなければなりません（第4条第1項）。施行令別表1の基準は4つです。個人の観光客に適した客室、共用可能なトイレ・シャワー室・炊事場、文化・情報交流施設、敷地と建物の所有権または使用権の確保です。</p>
<p>登録した事業者には第35条の行政処分と第37条の課徴金が適用され、登録せずに宿泊営業をすると別の法律の罰則が問題になります。</p>
<div class="highlight-box">「観光振興法」第35条第1項：管轄登録機関等の長は、観光事業の登録等を受けた者が次の各号のいずれかに該当するときは、その登録等を取り消し、または6か月以内の期間を定めてその事業の全部もしくは一部の停止を命じ、または施設・運営の改善を命ずることができる。</div>
<p>どの違反に何次でどの処分を科すかは、施行令第33条と別表2が定めます。処分は記録台帳に残り、その後の次数計算の根拠になります。なお、ホステル業は等級決定の申請義務の対象ではないため、「等級決定を申請しなかった場合」の処分とは関係ありません。</p>

<h2>行政処分 — 違反類型別の次数基準</h2>
<p>別表2のうち、ホステル業に実際に問題となりうる項目は次のとおりです。</p>
<table><thead><tr><th>違反事項</th><th>根拠</th><th>1次</th><th>2次</th><th>3次</th><th>4次</th></tr></thead><tbody>
<tr><td>登録基準に適合しなくなった場合</td><td>第35条第1項第1号</td><td>是正命令</td><td>停止15日</td><td>停止1か月</td><td>取消</td></tr>
<tr><td>変更登録期間内に変更登録をしなかった場合</td><td>第35条第1項第1号</td><td>是正命令</td><td>停止15日</td><td>停止1か月</td><td>取消</td></tr>
<tr><td>登録した営業範囲を超えた場合</td><td>第35条第1項第1号</td><td>停止1か月</td><td>停止2か月</td><td>停止3か月</td><td>取消</td></tr>
<tr><td>地位承継の届出を期限内にしなかった場合</td><td>第35条第1項第3号</td><td>是正命令</td><td>停止1か月</td><td>停止2か月</td><td>取消</td></tr>
<tr><td>休業・廃業をして知らせなかった場合</td><td>第35条第1項第3号の2</td><td>是正命令</td><td>取消</td><td>-</td><td>-</td></tr>
<tr><td>観光表示を事実と異なって掲示・広告した場合</td><td>第35条第1項第4号の2</td><td>是正命令</td><td>停止1か月</td><td>停止2か月</td><td>取消</td></tr>
<tr><td>登録に必要な客室を他人に経営させた場合</td><td>第35条第1項第5号</td><td>停止1か月</td><td>停止3か月</td><td>停止5か月</td><td>取消</td></tr>
<tr><td>報告命令の不履行または検査の妨害</td><td>第35条第1項第18号</td><td>停止10日</td><td>停止1か月</td><td>停止2か月</td><td>取消</td></tr>
<tr><td>経営の過程で賄賂を授受した場合</td><td>第35条第1項第19号</td><td>是正命令</td><td>停止10日</td><td>停止20日</td><td>取消</td></tr>
</tbody></table>
<p>登録基準の不足と変更登録の漏れは1次が是正命令ですが、繰り返すと4次で登録取消に至ります。営業範囲の超過と客室の他人経営は1次から事業停止、休業・廃業の未通知は2次でただちに取消です。</p>
<p>代表者等が第7条の欠格事由に該当すると、別表2は1次で取消と定めています。取消や停止の後も営業を続けると、登録機関は第36条により看板の除去、掲示物の貼付、必要な施設の封印をさせることができます。原則として事前に書面で知らせ、必要最小限の範囲にとどめなければなりません。</p>

<h2>課徴金 — 事業停止に代わる金銭制裁</h2>
<p>事業停止が利用者に著しい不便を与え、または公益を害するおそれがある場合、事業停止に代えて課徴金を科すことができ、上限は2,000万ウォンです（第37条第1項）。予約客がいるホステルでは、この転換の可否が重要な争点になります。</p>
<p>別表3のホステル業の列で定められた金額は次のとおりです（施行令第34条第1項）。</p>
<table><thead><tr><th>違反行為</th><th>根拠</th><th>課徴金</th></tr></thead><tbody>
<tr><td>登録基準に適合しなくなった場合</td><td>第34条・別表3第1号</td><td>80万ウォン</td></tr>
<tr><td>変更登録期間に違反した場合</td><td>第34条・別表3第1号</td><td>80万ウォン</td></tr>
<tr><td>地位承継の届出をしなかった場合</td><td>第34条・別表3第3号</td><td>200万ウォン</td></tr>
<tr><td>観光表示を事実と異なって掲示・広告した場合</td><td>第34条・別表3第4号</td><td>300万ウォン</td></tr>
<tr><td>報告または書類提出命令を履行しなかった場合</td><td>第34条・別表3第18号</td><td>400万ウォン</td></tr>
<tr><td>帳簿・書類等の検査を妨害した場合</td><td>第34条・別表3第18号</td><td>400万ウォン</td></tr>
</tbody></table>
<p>施行令第34条第2項により、事業規模や違反の程度・回数を考慮して2分の1の範囲で加重・減軽できますが、総額は2,000万ウォンを超えられません。書面通知から20日以内に納付し（施行令第35条）、滞納すると国税滞納処分の例により徴収されます（第37条第3項）。課徴金も処分の履歴として残ります。</p>

<h2>無登録で営業するとどの法律が適用されるか</h2>
<p>「ホステルを無登録で運営すると観光振興法で刑事処罰される」という説明をよく見かけます。第82条第1号は無登録経営を3年以下の懲役または3,000万ウォン以下の罰金に処しますが、観光宿泊業については「第15条第1項により事業計画の承認を受けたものに限る」と括弧書きで範囲を絞っています。</p>
<p>承認も登録もなく宿泊営業をする場合に問題となるのは「公衆衛生管理法」です。宿泊業をする者は市長・郡守・区庁長に届け出なければならず（第2条第1項第2号、第3条第1項）、同法施行令第2条第1項の適用除外にホステルは含まれていません。</p>
<div class="highlight-box">「公衆衛生管理法」第20条第1項：第3条第1項前段による届出をせずに宿泊業の営業をした者は、2年以下の懲役または2,000万ウォン以下の罰金に処する。</div>
<p>逆に、登録審議委員会の審議を経て登録された場合、審議を経た事項は宿泊業の届出をしたものとみなされます（観光振興法第18条第1項第1号）。観光宿泊業者の「公衆衛生管理法」第11条第1項の違反行為には観光振興法が適用されます（第35条第7項）。登録が制裁を一つの法律にまとめるわけです。</p>

<h2>運営中に見落としやすい届出義務</h2>
<p>処分の多くは届出期限を過ぎたことから始まります。</p>
<ul>
<li><strong>変更登録30日</strong> — 商号・代表者、客室数および形態、付帯施設の変更（第4条第4項、施行令第6条）。</li>
<li><strong>地位承継の届出1か月</strong> — 事業の譲受や競売等による主要施設の引受け後。従前の処分も原則として承継されます（第8条第1項〜第4項）。</li>
<li><strong>休業・廃業の通知</strong> — 廃業時、または1か月以上休業するとき（第8条第8項）。</li>
<li><strong>客室の他人経営の禁止</strong> — 事業者名義で対外的責任を負う委託経営のみ可能です（第11条）。</li>
<li><strong>報告と検査</strong> — 拒否・妨害はそれ自体が処分事由です（第35条第1項第18号）。</li>
</ul>
<p>譲受人が従前の処分や違反を知らなかったことを証明すれば、処分の効果は承継されません（第8条第3項）。引き継ぐ前に処分履歴を確認しましょう。2025年新設の安全・衛生教育と違法カメラ禁止の条項は、都市民泊業と韓屋体験業にのみ適用されます（第20条の3、第20条の4）。</p>

<h2>処分手続と減軽事由</h2>
<p>登録取消には第77条による聴聞が必要です。事実と是正内容を説明できる最後の公式手続です。</p>
<p>次数は、直近1年間に同じ違反で処分を受けた場合に適用されます。複数の違反は重い基準により、すべて停止なら2分の1まで加重できますが合算期間は超えられません。次の場合は処分を減軽でき、停止は2分の1の範囲で減軽できます。</p>
<ol>
<li>故意・重過失ではなく軽微な不注意による違反</li>
<li>違反が軽微で消費者の被害が少ない場合</li>
<li>初めての違反で、5年以上模範的に事業を営んできた場合</li>
<li>起訴猶予または宣告猶予を受けた場合</li>
</ol>
<p>期限を守り、登録基準を定期的に点検するだけで、表の多くの処分は避けられます。法令原文は<a href="https://www.law.go.kr/법령/관광진흥법" target="_blank" rel="noopener">観光振興法</a>、<a href="https://www.law.go.kr/법령/공중위생관리법" target="_blank" rel="noopener">公衆衛生管理法</a>で確認できます。費用は事案ごとに異なるため、無料相談時に正確にご案内します。</p>

<div class="faq-section"><h2>よくあるご質問</h2>
<div class="faq-item"><p class="faq-q">Q. ホステルを無登録で運営すると観光振興法で処罰されますか。</p><p class="faq-a">A. 一概には言えません。第82条第1号は観光宿泊業について第15条第1項の事業計画承認を受けた場合に限られます。それ以外は「公衆衛生管理法」の届出義務違反となり、同法第20条第1項により2年以下の懲役または2,000万ウォン以下の罰金の対象です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 登録基準が一つ欠けるとすぐに取り消されますか。</p><p class="faq-a">A. いいえ。別表2は1次是正命令、2次停止15日、3次停止1か月、4次取消と定め、次数は直近1年で数えます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 事業停止の代わりに課徴金にできますか。</p><p class="faq-a">A. できます。第37条第1項により2,000万ウォン以下の課徴金に代えられます。ホステル業の金額は別表3にあり、2分の1の範囲で加減されます。</p></div>
<div class="faq-item"><p class="faq-q">Q. 運営中のホステルを引き継ぐと前の処分も引き継がれますか。</p><p class="faq-a">A. 原則として引き継がれます（第8条第3項）。知らなかったことを証明すれば例外です。承継後1か月以内に届出が必要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 客室の運営を別の会社に任せるのも違反ですか。</p><p class="faq-a">A. 自社名義で対外的責任を負う委託経営は第11条第2項で認められています。名義と責任が移れば、別表2により1次から停止1か月です。</p></div>
</div>

<div class="cta-block">
 <h3>処分通知を受けた、または期限が心配な方へ</h3>
 <p>登録事項と処分通知書を確認し、違反次数、課徴金への転換の可能性、聴聞での説明資料をユソン行政士事務所が先に整理します。電話 02-363-2251、平日 09:30〜17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=hostel-violation-penalties">無料相談を申し込む</a>
</div>

<p class="author-block">ユソン行政士事務所（代表行政士 チョン・ユソン）・「観光振興法」（法律第21087号、2026年5月12日施行）、同法施行令（大統領令第36554号、2026年8月4日施行）別表2・3および「公衆衛生管理法」（法律第20171号）の原文に基づき作成・最終確認日 10月2日</p>`,
  },
}
