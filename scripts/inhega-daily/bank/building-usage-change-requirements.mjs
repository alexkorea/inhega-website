// 원고 은행 — inhega-daily
// 주제(풀 18개 중): building-usage(건축물용도변경) / 세부주제: requirements(요건·자격)
//
// 법령 대조(law.go.kr DRF API, OC=visionlaw, 2026-09-25 확인):
//   건축법            법률 제21035호, 2026. 2. 27. 시행 (MST 273437)
//   건축법 시행령      대통령령 제36587호, 2026. 9. 18. 시행 (MST 288849)
//   건축법 시행령 별표 1(용도별 건축물의 종류) <개정 2025. 10. 1.> — 별표내용 원문에서 목 단위로 대조
// 본문의 시설군 구성·별표 1 목 열거·면적 기준·제재 수준은 위 세 원문에서 직접 확인했고
// 문단마다 근거주석을 달았다. 우리 서비스 가격·수수료 금액은 한 건도 쓰지 않았다(지침서 X41).

export default {
  topic: 'building-usage',
  angle: 'requirements',
  slug: 'building-usage-change-requirements',
  kind: 'cluster',
  coverImage: '/images/service-renovation.webp',
  relatedServices: [
    { title: '건축물 용도변경', href: '/services/building-usage' },
    { title: '호스텔업 등록', href: '/services/hostel' },
    { title: '외국인도시민박업 등록', href: '/services/urban-guesthouse' },
  ],

  ko: {
    title: '건축물 용도변경 요건 — 시설군 상하위 판정과 변경 후 용도의 건축기준',
    category: '건축/부동산',
    metaTitle: '건축물 용도변경 요건 — 시설군 판정과 건축기준 확인 순서',
    metaDescription: '건축물 용도변경이 허가·신고·건축물대장 기재변경 중 무엇에 해당하는지 건축법 제19조의 시설군 9개로 판정하는 방법과, 변경하려는 용도가 요구하는 건축기준·사용승인 요건을 법령 원문 기준으로 정리했습니다.',
    excerpt: '용도변경 요건의 출발점은 지금 건물이 무슨 용도인지가 아니라 바꾸려는 용도가 무엇을 요구하는지입니다. 건축법 제19조의 시설군 9개로 허가·신고·기재변경을 가르는 방법, 별표 1이 면제에서 다시 빼내는 용도, 준용되는 개별 기준과 위반 시 제재를 원문 기준으로 정리했습니다.',
    content: `<div class="toc"><p>목차</p><ol><li>용도변경 요건은 "바꾸려는 용도"에서 나온다</li><li>허가·신고·기재변경을 가르는 시설군 판정</li><li>시설군 9개와 그 안에 속하는 세부 용도</li><li>기재변경만으로 끝나지 않는 용도들</li><li>변경 후 용도가 요구하는 개별 법령 요건</li><li>사용승인·설계 요건과 위반 시 제재</li><li>자주 묻는 질문</li></ol></div>
<p><strong>건축물 용도변경</strong>은 이미 사용승인을 받은 건물의 용도를 다른 용도로 바꾸는 절차입니다. 실무에서 가장 많이 어긋나는 지점은 "우리 건물이 무슨 용도인가"를 먼저 따지는 것입니다. 「건축법」이 정한 요건의 출발점은 반대쪽, 즉 <strong>바꾸려는 용도가 무엇을 요구하는가</strong>에 있습니다.</p>
<p>용도변경의 대상은 이미 「건축법」 제22조에 따라 사용승인을 받은 건축물입니다.<!-- 근거: 건축법 제19조 제2항 --> 아직 사용승인을 받지 않은 신축 단계라면 용도변경이 아니라 건축허가나 건축신고 단계에서 용도를 정하는 문제가 되므로, 먼저 우리 건물이 어느 단계에 있는지부터 구분해야 합니다.</p>
<p>이 글은 현행 「건축법」과 같은 법 시행령, 그리고 시행령 별표 1 원문을 대조해 용도변경의 요건을 정리한 것입니다. 인허가를 준비하면서 "우리 경우는 허가인가 신고인가"를 판단해야 하는 분들이 순서대로 짚어 볼 수 있도록 구성했습니다.<!-- 근거: 건축법(법률 제21035호, 2026. 2. 27. 시행), 건축법 시행령(대통령령 제36587호, 2026. 9. 18. 시행) --></p>

<h2>용도변경 요건은 "바꾸려는 용도"에서 나온다</h2>
<p>「건축법」 제19조 제1항은 용도변경의 요건을 한 문장으로 정해 두었습니다. 이 문장이 이후 모든 판단의 기준선입니다.</p>
<div class="highlight-box">「건축법」 제19조 제1항: 건축물의 용도변경은 변경하려는 용도의 건축기준에 맞게 하여야 한다.<!-- 근거: 건축법 제19조 제1항 --></div>
<p>여기서 말하는 "변경하려는 용도의 건축기준"은 「건축법」 안에만 있는 것이 아닙니다. 제19조 제7항은 용도변경에 관하여 대지의 안전, 구조 내력, 피난시설과 방화구획, 내화구조와 방화벽, 건축물의 마감재료, 승강기, 그리고 「녹색건축물 조성 지원법」 제15조와 「국토의 계획 및 이용에 관한 법률」 제54조까지 폭넓게 준용하도록 정합니다.<!-- 근거: 건축법 제19조 제7항 --> 즉 용도변경은 서류만 갈아 끼우는 절차가 아니라, 새 용도의 건축기준을 실제로 갖추었는지 심사받는 절차입니다.</p>
<p>또한 국토교통부장관은 제19조 제1항에 따른 용도변경을 할 때 적용되는 건축기준을 따로 고시할 수 있습니다. 이 경우 다른 행정기관의 권한에 속하는 건축기준은 미리 관계 행정기관의 장과 협의하도록 정해져 있습니다.<!-- 근거: 건축법 시행령 제14조 제3항 --> 기존 건축물이나 대지가 법령의 제정·개정으로 현행 법령에 부적합해진 경우에는 건축조례로 정하는 바에 따라 용도변경을 할 수 있는 길도 열려 있습니다.<!-- 근거: 건축법 시행령 제14조 제6항 --></p>

<h2>허가·신고·기재변경을 가르는 시설군 판정</h2>
<p>사용승인을 받은 건축물의 용도를 바꾸려는 사람은 특별자치시장·특별자치도지사 또는 시장·군수·구청장의 <strong>허가</strong>를 받거나 <strong>신고</strong>를 해야 합니다. 둘 중 무엇에 해당하는지는 오직 시설군의 번호 순서로 갈립니다.<!-- 근거: 건축법 제19조 제2항 --></p>
<table><thead><tr><th>변경 방향</th><th>절차</th><th>근거</th></tr></thead><tbody>
<tr><td>번호가 더 작은 시설군(상위군)의 용도로 변경</td><td>허가<!-- 근거: 건축법 제19조 제2항 제1호 --></td><td>법 제19조 제2항 제1호</td></tr>
<tr><td>번호가 더 큰 시설군(하위군)의 용도로 변경</td><td>신고<!-- 근거: 건축법 제19조 제2항 제2호 --></td><td>법 제19조 제2항 제2호</td></tr>
<tr><td>같은 시설군 안에서 용도 변경</td><td>건축물대장 기재내용의 변경 신청<!-- 근거: 건축법 제19조 제3항 --></td><td>법 제19조 제3항</td></tr>
</tbody></table>
<p>조문이 쓰는 "상위군"과 "하위군"이라는 말은 시설의 격이 높거나 낮다는 뜻이 아닙니다. 제19조 제4항 각 호의 <strong>번호가 작은 시설군</strong>을 상위군이라고 정의한 것입니다.<!-- 근거: 건축법 제19조 제2항 제1호 --> 그래서 판정은 감각이 아니라 번호 대조로 끝납니다. 예컨대 근린생활시설군(제7호)에 속한 사무실을 영업시설군(제5호)에 속한 숙박시설로 바꾸려면 번호가 작아지므로 허가 대상이고, 거꾸로 숙박시설을 사무소로 바꾸면 번호가 커지므로 신고 대상입니다.<!-- 근거: 건축법 제19조 제4항 제5호·제7호, 같은 법 시행령 제14조 제5항 --></p>
<p>한 건물에 두 가지 용도를 함께 두려는 경우도 조문에 길이 있습니다. 건축주는 용도를 복수로 하여 용도변경 허가·신고 또는 건축물대장 기재내용의 변경 신청을 할 수 있고, 허가권자는 신청한 복수의 용도가 이 법과 관계 법령에서 정한 건축기준과 입지기준 등에 <strong>모두</strong> 적합한 경우에 한정하여 복수 용도를 허용할 수 있습니다.<!-- 근거: 건축법 제19조의2 제1항·제2항 --> 두 용도 중 하나라도 기준에 걸리면 전체가 막힌다는 뜻이므로, 복수 용도는 기획 단계에서 미리 검토해야 합니다.</p>

<h2>시설군 9개와 그 안에 속하는 세부 용도</h2>
<p>시설군은 「건축법」 제19조 제4항이 아홉 개로 정하고, 각 시설군에 속하는 건축물의 세부 용도는 같은 법 시행령 제14조 제5항이 정합니다. 아래 표가 용도변경 판정의 기준표입니다.<!-- 근거: 건축법 제19조 제4항, 같은 법 시행령 제14조 제5항 --></p>
<table><thead><tr><th>번호</th><th>시설군</th><th>속하는 건축물의 용도</th></tr></thead><tbody>
<tr><td>1</td><td>자동차 관련 시설군</td><td>자동차 관련 시설<!-- 근거: 건축법 시행령 제14조 제5항 제1호 --></td></tr>
<tr><td>2</td><td>산업 등 시설군</td><td>운수시설, 창고시설, 공장, 위험물저장 및 처리시설, 자원순환 관련 시설, 묘지 관련 시설, 장례시설<!-- 근거: 건축법 시행령 제14조 제5항 제2호 --></td></tr>
<tr><td>3</td><td>전기통신시설군</td><td>방송통신시설, 발전시설<!-- 근거: 건축법 시행령 제14조 제5항 제3호 --></td></tr>
<tr><td>4</td><td>문화집회시설군</td><td>문화 및 집회시설, 종교시설, 위락시설, 관광휴게시설<!-- 근거: 건축법 시행령 제14조 제5항 제4호 --></td></tr>
<tr><td>5</td><td>영업시설군</td><td>판매시설, 운동시설, 숙박시설, 제2종 근린생활시설 중 다중생활시설<!-- 근거: 건축법 시행령 제14조 제5항 제5호 --></td></tr>
<tr><td>6</td><td>교육 및 복지시설군</td><td>의료시설, 교육연구시설, 노유자시설, 수련시설, 야영장 시설<!-- 근거: 건축법 시행령 제14조 제5항 제6호 --></td></tr>
<tr><td>7</td><td>근린생활시설군</td><td>제1종 근린생활시설, 제2종 근린생활시설(다중생활시설은 제외)<!-- 근거: 건축법 시행령 제14조 제5항 제7호 --></td></tr>
<tr><td>8</td><td>주거업무시설군</td><td>단독주택, 공동주택, 업무시설, 교정시설, 국방·군사시설<!-- 근거: 건축법 시행령 제14조 제5항 제8호 --></td></tr>
<tr><td>9</td><td>그 밖의 시설군</td><td>동물 및 식물 관련 시설<!-- 근거: 건축법 시행령 제14조 제5항 제9호 --></td></tr>
</tbody></table>
<p>표에서 눈에 띄는 것은 <strong>다중생활시설</strong>(고시원)입니다. 같은 제2종 근린생활시설이면서도 다중생활시설만 근린생활시설군이 아니라 영업시설군으로 올라가 있습니다.<!-- 근거: 건축법 시행령 제14조 제5항 제5호 라목·제7호 나목 --> 그래서 2층 사무실을 고시원으로 바꾸는 일은 같은 근린생활시설 안의 이동이 아니라 상위군으로 올라가는 허가 대상이 됩니다. 숙박업 계열로 바꿀 때 무엇을 함께 준비해야 하는지는 <a href="/services/hostel">호스텔업 등록</a>과 <a href="/services/urban-guesthouse">외국인도시민박업 등록</a> 안내를 함께 보시면 흐름이 잡힙니다.</p>

<h2>기재변경만으로 끝나지 않는 용도들</h2>
<p>같은 시설군 안에서 용도를 바꿀 때는 건축물대장 기재내용의 변경을 신청하는 것으로 갈음합니다. 그런데 「건축법」 제19조 제3항 단서는 "대통령령으로 정하는 변경"은 그 신청조차 필요하지 않다고 정하고, 시행령 제14조 제4항이 그 두 가지를 열거합니다. 첫째는 별표 1의 <strong>같은 호</strong>에 속하는 건축물 상호 간의 용도변경이고, 둘째는 관계 법령의 용도제한에 적합한 범위에서 제1종 근린생활시설과 제2종 근린생활시설 상호 간의 용도변경입니다.<!-- 근거: 건축법 제19조 제3항 단서, 같은 법 시행령 제14조 제4항 제1호·제2호 --></p>
<p>다만 같은 항의 단서가 이 면제에서 다시 빼내는 용도들이 있습니다. 위생·안전·주거환경 규제가 강한 용도로 들어가는 경우에는 같은 호 안의 이동이라도 기재내용 변경 신청을 해야 합니다. 별표 1 원문으로 옮기면 다음과 같습니다.<!-- 근거: 건축법 시행령 제14조 제4항 단서 --></p>
<table><thead><tr><th>별표 1 조항</th><th>해당 용도</th></tr></thead><tbody>
<tr><td>제3호 다목(목욕장만)·라목<!-- 근거: 건축법 시행령 제14조 제4항 단서 --></td><td>목욕장 / 의원·치과의원·한의원·침술원·접골원·조산원·안마원·산후조리원 등<!-- 근거: 건축법 시행령 별표 1 제3호 다목·라목 --></td></tr>
<tr><td>제4호 가목·사목·카목<!-- 근거: 건축법 시행령 제14조 제4항 단서 --></td><td>공연장 / 청소년게임제공업소·복합유통게임제공업소·인터넷컴퓨터게임시설제공업소·가상현실체험 제공업소 / 학원·교습소·직업훈련소<!-- 근거: 건축법 시행령 별표 1 제4호 가목·사목·카목 --></td></tr>
<tr><td>제4호 파목(골프연습장·놀이형시설만)·더목·러목·머목<!-- 근거: 건축법 시행령 제14조 제4항 단서 --></td><td>골프연습장·놀이형시설 / 단란주점 / 안마시술소·노래연습장 / 주문배송시설<!-- 근거: 건축법 시행령 별표 1 제4호 파목·더목·러목·머목 --></td></tr>
<tr><td>제7호 다목 2)<!-- 근거: 건축법 시행령 제14조 제4항 단서 --></td><td>게임제공업·인터넷컴퓨터게임시설제공업·복합유통게임제공업 시설로서 제2종 근린생활시설에 해당하지 않는 상점<!-- 근거: 건축법 시행령 별표 1 제7호 다목 2) --></td></tr>
<tr><td>제15호 가목(생활숙박시설만)<!-- 근거: 건축법 시행령 제14조 제4항 단서 --></td><td>생활숙박시설<!-- 근거: 건축법 시행령 별표 1 제15호 가목 --></td></tr>
<tr><td>제16호 가목·나목<!-- 근거: 건축법 시행령 제14조 제4항 단서 --></td><td>단란주점(제2종 근린생활시설에 해당하지 않는 것) / 유흥주점 등<!-- 근거: 건축법 시행령 별표 1 제16호 가목·나목 --></td></tr>
</tbody></table>
<p>실무에서 이 표는 "면적 기준을 넘기면 용도가 바뀐다"는 사실과 함께 봐야 합니다. 예를 들어 휴게음식점과 제과점은 같은 건축물에서 그 용도로 쓰는 바닥면적의 합계가 300제곱미터 미만이면 제1종 근린생활시설, 그 이상이면 제2종 근린생활시설입니다.<!-- 근거: 건축법 시행령 별표 1 제3호 나목, 제4호 아목 --> 단란주점은 150제곱미터 미만이면 제2종 근린생활시설이지만 그 이상이면 위락시설이 되어 문화집회시설군으로 올라갑니다.<!-- 근거: 건축법 시행령 별표 1 제4호 더목, 제16호 가목 --> 매장을 넓히는 공사가 곧 용도변경 허가 사유가 되는 경우가 여기서 나옵니다. 사례별 판정은 <a href="/blog/building-usage-change-guide">건축물 용도변경 허가·신고 가이드</a>에서 함께 보실 수 있습니다.</p>

<p>판정을 마치면 신청 서식과 첨부서류는 국토교통부령이 정하는 바에 따릅니다. 허가·신고·기재변경 어느 쪽이든 관할 행정청은 특별자치시장·특별자치도지사 또는 시장·군수·구청장으로 같으므로, 같은 창구에서 어떤 절차로 접수되는지가 달라질 뿐입니다.<!-- 근거: 건축법 제19조 제2항·제3항 --></p>
<h2>변경 후 용도가 요구하는 개별 법령 요건</h2>
<p>용도변경 요건을 실제로 막는 것은 「건축법」 조문 자체보다 준용되는 개별 기준입니다. 제19조 제7항이 준용하도록 정한 조문과 다른 법률의 기준을 항목으로 풀면 아래와 같습니다.<!-- 근거: 건축법 제19조 제7항 --></p>
<table><thead><tr><th>확인 항목</th><th>무엇을 보는가</th></tr></thead><tbody>
<tr><td>용도지역 제한</td><td>「국토의 계획 및 이용에 관한 법률」 제54조가 준용되므로, 용도지역·지구에서 그 용도가 허용되는지 먼저 확인해야 합니다. 조례로 금지된 용도라면 건물 상태와 무관하게 불가합니다.<!-- 근거: 건축법 제19조 제7항 --></td></tr>
<tr><td>피난·방화</td><td>피난시설과 용도제한, 방화구획, 내화구조와 방화벽, 마감재료 기준이 준용됩니다. 지하층이나 무창층을 영업용으로 바꿀 때 가장 자주 걸립니다.<!-- 근거: 건축법 제19조 제7항 --></td></tr>
<tr><td>구조 안전</td><td>구조 내력과 구조 안전 확인 규정이 준용됩니다. 창고를 판매시설로 바꾸는 것처럼 적재하중 조건이 달라지면 구조 검토가 필요합니다.<!-- 근거: 건축법 제19조 제7항 --></td></tr>
<tr><td>주차·부설주차장</td><td>용도가 바뀌면 부설주차장 설치기준도 함께 바뀝니다. 부족한 대수를 확보하지 못하면 허가가 나지 않습니다.<!-- 근거: 건축법 제19조 제7항 --></td></tr>
<tr><td>승강기·에너지</td><td>승강기 설치 규정과 「녹색건축물 조성 지원법」 제15조가 준용됩니다.<!-- 근거: 건축법 제19조 제7항 --></td></tr>
</tbody></table>
<p>준용 조문을 하나하나 대조하는 것은 도면과 현장을 함께 봐야 하는 일입니다. 건축물대장과 등기, 도면은 <a href="https://www.eais.go.kr" target="_blank" rel="noopener">세움터</a>에서 확인할 수 있고, 법령 원문은 국가법령정보센터의 <a href="https://www.law.go.kr/법령/건축법" target="_blank" rel="noopener">건축법</a>과 <a href="https://www.law.go.kr/법령/건축법시행령" target="_blank" rel="noopener">건축법 시행령</a>에서 직접 볼 수 있습니다. 업종 요건과 건축 요건을 함께 맞춰야 하는 사건은 <a href="/services/building-usage">건축물 용도변경</a> 안내에서 진행 흐름을 확인하시기 바랍니다.</p>

<h2>사용승인·설계 요건과 위반 시 제재</h2>
<p>허가나 신고 대상인 용도변경에서 변경하려는 부분의 바닥면적 합계가 100제곱미터 이상이면 사용승인 규정이 준용됩니다. 다만 그 합계가 500제곱미터 미만이면서 대수선에 해당하는 공사를 수반하지 않으면 그렇지 않습니다.<!-- 근거: 건축법 제19조 제5항 --> 또 허가 대상으로서 변경하려는 부분의 바닥면적 합계가 500제곱미터 이상인 용도변경은 설계에 관하여 제23조가 준용되므로 건축사가 설계해야 합니다. 1층인 축사를 공장으로 용도변경하는 경우로서 증축·개축 또는 대수선이 수반되지 않고 구조 안전이나 피난 등에 지장이 없는 경우는 제외됩니다.<!-- 근거: 건축법 제19조 제6항, 같은 법 시행령 제14조 제7항 --></p>
<table><thead><tr><th>바닥면적 합계</th><th>추가되는 요건</th></tr></thead><tbody>
<tr><td>100제곱미터 이상</td><td>사용승인 준용(단, 500제곱미터 미만이고 대수선 공사를 수반하지 않으면 제외)<!-- 근거: 건축법 제19조 제5항 --></td></tr>
<tr><td>500제곱미터 이상(허가 대상)</td><td>건축사 설계 준용<!-- 근거: 건축법 제19조 제6항 --></td></tr>
</tbody></table>
<p>절차를 건너뛰면 제재는 두 갈래로 옵니다. 먼저 허가권자는 위반되는 건축물에 대하여 허가나 승인을 취소하거나 건축주등에게 공사 중지, 해체, 용도변경, 사용금지, 사용제한 등 필요한 조치를 명할 수 있고, 시정명령을 받고 이행하지 않은 건축물에 대해서는 다른 법령에 따른 영업 허가·등록 등을 하지 않도록 요청할 수 있습니다.<!-- 근거: 건축법 제79조 제1항·제2항 --> 시정명령을 받고도 이행하지 않으면 이행강제금이 부과되며, 영리 목적의 위반이나 상습적 위반 등 대통령령으로 정하는 경우에는 그 금액이 조례에 따라 가중됩니다.<!-- 근거: 건축법 제80조 제1항·제2항 --></p>
<p>형사처벌도 별도로 있습니다. 도시지역에서 제19조 제1항 및 제2항을 위반하여 용도변경을 한 건축주와 공사시공자는 3년 이하의 징역이나 5억원 이하의 벌금에 처해지며, 징역과 벌금은 병과할 수 있습니다.<!-- 근거: 건축법 제108조 제1항 제1호·제2항 --> "간판만 바꿨다"거나 "임차인이 알아서 했다"는 사정으로 비켜갈 수 있는 영역이 아닙니다. 비용은 사례별로 상이하므로 무료 상담 시 정확히 안내드립니다.</p>

<p>마지막으로 기존 건축물의 사정도 함께 봐야 합니다. 법령이 제정·개정되어 기존 건축물이나 대지가 현행 기준에 부적합해진 경우에는 건축조례로 정하는 바에 따라 용도변경을 할 수 있으므로, 준공 시점이 오래된 건물이라면 조례의 완화 규정이 있는지 확인하는 것이 실익이 큽니다.<!-- 근거: 건축법 시행령 제14조 제6항 --> 반대로 조례에 완화 규정이 없으면 현행 기준을 그대로 맞춰야 하므로, 공사 범위와 예산 계획이 처음 구상과 크게 달라질 수 있습니다.</p>

<div class="faq-section"><h2>자주 묻는 질문 (FAQ)</h2>
<div class="faq-item"><p class="faq-q">Q. 우리 경우가 허가인지 신고인지 어떻게 알 수 있나요?</p><p class="faq-a">A. 현재 용도와 바꾸려는 용도가 각각 몇 번 시설군에 속하는지 대조하면 됩니다. 「건축법」 제19조 제4항이 시설군을 아홉 개로 정하고 같은 법 시행령 제14조 제5항이 각 시설군에 속하는 세부 용도를 정합니다. 번호가 작아지면 허가, 커지면 신고, 같으면 건축물대장 기재내용 변경 신청입니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 같은 근린생활시설 안에서 바꾸는 것이면 아무 절차도 필요 없나요?</p><p class="faq-a">A. 원칙은 그렇습니다. 「건축법」 제19조 제3항 단서와 같은 법 시행령 제14조 제4항은 별표 1의 같은 호에 속하는 건축물 상호 간의 용도변경, 그리고 용도제한에 적합한 범위에서 제1종과 제2종 근린생활시설 상호 간의 용도변경을 기재내용 변경 신청에서 제외합니다. 다만 같은 항 단서가 목욕장, 의원 계열, 학원, 단란주점, 안마시술소·노래연습장, 생활숙박시설, 유흥주점 등을 다시 빼내므로 그 용도로 들어가는 경우에는 신청이 필요합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 사무실을 고시원으로 바꾸는 것도 용도변경 허가가 필요한가요?</p><p class="faq-a">A. 필요합니다. 다중생활시설은 제2종 근린생활시설에 속하지만 「건축법 시행령」 제14조 제5항은 다중생활시설을 근린생활시설군이 아니라 영업시설군에 넣어 두었습니다. 근린생활시설군은 제7호, 영업시설군은 제5호이므로 번호가 작아지는 상위군 변경이 되어 허가 대상입니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 공사를 하지 않고 용도만 바꾸면 사용승인도 받지 않아도 되나요?</p><p class="faq-a">A. 면적으로 갈립니다. 「건축법」 제19조 제5항은 허가·신고 대상 용도변경에서 변경하려는 부분의 바닥면적 합계가 100제곱미터 이상이면 사용승인 규정을 준용하되, 그 합계가 500제곱미터 미만이고 대수선에 해당하는 공사를 수반하지 않으면 준용하지 않는다고 정합니다.</p></div>
<div class="faq-item"><p class="faq-q">Q. 용도변경을 하지 않고 다른 업종으로 영업하면 어떻게 되나요?</p><p class="faq-a">A. 시정명령과 이행강제금, 형사처벌이 함께 걸립니다. 「건축법」 제79조 제1항은 허가권자가 공사 중지나 용도변경, 사용금지 등을 명할 수 있도록 하고 같은 조 제2항은 다른 법령에 따른 영업 허가 등을 하지 않도록 요청할 수 있게 합니다. 제80조 제1항은 시정명령 불이행에 대한 이행강제금을, 제108조 제1항 제1호는 도시지역에서의 위반에 대해 3년 이하의 징역이나 5억원 이하의 벌금을 정합니다.</p></div>
</div>

<div class="cta-block">
 <h3>허가인지 신고인지부터 확인해 드립니다</h3>
 <p>건축물대장과 도면을 보고 시설군 판정, 준용 기준 검토, 필요 절차를 유선행정사사무소가 먼저 정리해 드립니다. 전화 02-363-2251, 평일 09:30~17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=building-usage-change-requirements">무료 상담 신청하기</a>
</div>

<p class="author-block">유선행정사사무소 (대표 행정사 정유선) · 「건축법」(법률 제21035호, 2026. 2. 27. 시행), 같은 법 시행령(대통령령 제36587호, 2026. 9. 18. 시행) 및 같은 시행령 별표 1 원문 기준으로 작성 · 최종 검토일 9월 25일<!-- 근거: 건축법 법률 제21035호, 건축법 시행령 대통령령 제36587호 --></p>`,
  },

  en: {
    title: 'Requirements for a Change of Building Use in Korea — Facility Groups and Target-Use Standards',
    category: 'Licensing & Permits',
    metaTitle: 'Change of Building Use in Korea — Requirements and Facility Groups',
    metaDescription: 'Whether a Korean change of building use needs a permit, a report or only a register amendment is set by the nine facility groups in Building Act Art. 19.',
    excerpt: 'The requirement does not start from what your building is classified as. It starts from what the use you are moving into demands.',
    content: `<div class="toc"><p>Table of Contents</p><ol><li>The Target Use Sets the Requirement</li><li>Facility Groups Decide Permit or Report</li><li>The Nine Facility Groups</li><li>Uses Excluded From the Exemption</li><li>What the New Use Demands</li><li>Approval for Use and Penalties</li><li>FAQ</li></ol></div>
<p>A <strong>change of building use</strong> in Korea is the procedure for converting a building that has already received approval for use into a different use. The most common mistake in practice is to start from the question "what is our building classified as?" Under the Building Act the requirement runs the other way: it starts from <strong>what the use you are moving into demands</strong>.</p>
<p>The procedure applies to a building that has already obtained approval for use under Article 22 of the Building Act; at the construction stage the question is instead which use to declare in the building permit. This guide follows the current Building Act (Act No. 21035, in force 27 February 2026), its Enforcement Decree (Presidential Decree No. 36587, in force 18 September 2026) and Table 1 of that Decree.</p>

<h2>The Target Use Sets the Requirement</h2>
<p>Article 19(1) of the Building Act states the requirement in a single sentence, and that sentence is the baseline for everything that follows.</p>
<div class="highlight-box">Building Act, Article 19(1): a change in the use of a building shall conform to the building standards for the use into which it is to be changed.</div>
<p>Those standards are not confined to the Building Act. Article 19(7) applies, by analogy, the provisions on site safety, structural stability, evacuation facilities and fire compartments, fireproof structures and fire walls, finishing materials and lifts, together with Article 15 of the Green Buildings Construction Support Act and Article 54 of the National Land Planning and Utilisation Act. A change of use is therefore not a paperwork swap but a review of whether the building meets the standards of its new use. Where an existing building has become non-conforming because legislation was amended, a change of use may still be made under the municipal building ordinance.</p>

<h2>Facility Groups Decide Permit or Report</h2>
<p>Anyone seeking to change the use of a building that has received approval for use must obtain a <strong>permit</strong> from, or file a <strong>report</strong> with, the Special Self-Governing City Mayor, the Special Self-Governing Province Governor, or the head of the si, gun or gu. Which of the two applies turns solely on the numbering of the facility groups.</p>
<table><thead><tr><th>Direction of change</th><th>Procedure</th><th>Basis</th></tr></thead><tbody>
<tr><td>Into a use in a lower-numbered facility group (an upper group)</td><td>Permit</td><td>Art. 19(2)1</td></tr>
<tr><td>Into a use in a higher-numbered facility group (a lower group)</td><td>Report</td><td>Art. 19(2)2</td></tr>
<tr><td>Within the same facility group</td><td>Application to amend the entry in the building register</td><td>Art. 19(3)</td></tr>
</tbody></table>
<p>"Upper group" does not mean a higher class of facility: the Act defines it as a facility group bearing a <strong>smaller number</strong> among the subparagraphs of Article 19(4). The test is arithmetic, not intuitive. An office in the neighbourhood living facility group (subparagraph 7) becoming lodging in the business facility group (subparagraph 5) moves to a smaller number and needs a permit; the reverse needs only a report.</p>
<p>Mixed uses are provided for too: an owner may apply with two or more uses, but the authority may allow them only where every one conforms to the building and siting standards of the Act and related statutes. If one use fails, the whole application fails. Once the classification is settled, the form and attachments follow the Ordinance of the Ministry of Land, Infrastructure and Transport; the competent authority is the same in all three cases.</p>

<h2>The Nine Facility Groups</h2>
<p>Article 19(4) sets out nine facility groups and Article 14(5) of the Decree assigns the detailed uses. This is the reference table for every classification decision.</p>
<table><thead><tr><th>No.</th><th>Facility group</th><th>Uses included</th></tr></thead><tbody>
<tr><td>1</td><td>Automobile-related facilities</td><td>Automobile-related facilities</td></tr>
<tr><td>2</td><td>Industrial and similar facilities</td><td>Transport, warehouse, factory, hazardous-substance, resource-circulation, cemetery and funeral facilities</td></tr>
<tr><td>3</td><td>Electricity and telecommunications</td><td>Broadcasting and telecommunications facilities, power generation facilities</td></tr>
<tr><td>4</td><td>Culture and assembly</td><td>Culture and assembly, religious, amusement and tourist rest facilities</td></tr>
<tr><td>5</td><td>Business facilities</td><td>Retail, sports, lodging, and multi-unit living facilities within class II</td></tr>
<tr><td>6</td><td>Education and welfare</td><td>Medical, educational, elderly and childcare, training, campsite</td></tr>
<tr><td>7</td><td>Neighbourhood living facilities</td><td>Class I and class II neighbourhood living facilities (excluding multi-unit living)</td></tr>
<tr><td>8</td><td>Residential and business</td><td>Detached houses, multi-family housing, business, correctional, defence and military</td></tr>
<tr><td>9</td><td>Other facilities</td><td>Animal and plant related facilities</td></tr>
</tbody></table>
<p>The entry worth noting is the <strong>multi-unit living facility</strong> (gosiwon): although it sits within class II neighbourhood living facilities, the Decree places it in the business facility group. Converting an office into a gosiwon is therefore an upper-group move requiring a permit.</p>

<h2>Uses Excluded From the Exemption</h2>
<p>A change within the same facility group is handled by amending the entry in the building register. The proviso to Article 19(3) goes further: changes prescribed by Presidential Decree need not even be applied for, and Article 14(4) of the Decree lists two — changes within the <strong>same subparagraph</strong> of Table 1, and changes between class I and class II neighbourhood living facilities within applicable use restrictions. The proviso to that paragraph then pulls the uses below back out of the exemption, so those need an application even within the same subparagraph.</p>
<table><thead><tr><th>Provision of Table 1</th><th>Use</th></tr></thead><tbody>
<tr><td>Subpara. 3 (c) (bathhouses only), (d)</td><td>Public bathhouses; clinics and other treatment facilities</td></tr>
<tr><td>Subpara. 4 (a), (g), (k)</td><td>Performance halls; game arcades and VR venues; institutes and training centres</td></tr>
<tr><td>Subpara. 4 (m) (golf ranges, play-type only), (t), (u), (v)</td><td>Golf ranges; danran bars; massage parlours and karaoke rooms; order-fulfilment facilities</td></tr>
<tr><td>Subpara. 7 (c) 2)</td><td>Game-facility shops outside class II neighbourhood living facilities</td></tr>
<tr><td>Subpara. 15 (a) (residential lodging only)</td><td>Residential lodging facilities</td></tr>
<tr><td>Subpara. 16 (a), (b)</td><td>Danran bars outside class II; entertainment bars</td></tr>
</tbody></table>
<p>Read this table together with the floor-area thresholds that change a use by themselves. A refreshment or bakery outlet is class I while the aggregate floor area used for it in the same building stays under 300 square metres, and class II at or above. A danran bar is class II under 150 square metres but an amusement facility above it, moving up into the culture and assembly group — which is how expanding a shop floor becomes grounds for a permit.</p>

<h2>What the New Use Demands</h2>
<p>What usually blocks a change of use is not Article 19 itself but the standards it applies by analogy. Zoning comes first: under Article 54 of the National Land Planning and Utilisation Act the use must be permitted in the relevant zone, and a use prohibited by ordinance is impossible whatever the building's condition. Evacuation and fire provisions come next, and these are what basements and windowless floors most often fail. Structural stability matters where loading changes, as when a warehouse becomes retail. Parking requirements move with the use, and a shortfall stops the permit.</p>
<p>Checking these means reading drawings against the site. Registers and drawings come from <a href="https://www.eais.go.kr" target="_blank" rel="noopener">Seumteo</a>, and the statutes themselves from the <a href="https://www.law.go.kr/법령/건축법" target="_blank" rel="noopener">Building Act</a> and the <a href="https://www.law.go.kr/법령/건축법시행령" target="_blank" rel="noopener">Building Act Enforcement Decree</a> on the National Law Information Center.</p>

<h2>Approval for Use and Penalties</h2>
<p>Where a permit or report is required and the aggregate floor area being converted is 100 square metres or more, the approval-for-use provisions apply — unless that aggregate is under 500 square metres with no major repair work. At 500 square metres or more under a permit, Article 23 applies to the design, so a licensed architect must prepare it; a single-storey livestock shed becoming a factory is excluded where no extension, reconstruction or major repair is involved.</p>
<p>Skipping the procedure attracts sanctions on two tracks. The permitting authority may revoke a permit, or order the owner or contractor to stop work or to carry out demolition, a change of use or a ban on use, and may request that business permits under other statutes be withheld. Continued non-compliance attracts an enforcement fine, increased by ordinance where the violation was for profit or habitual.</p>
<p>Criminal liability applies separately. Under Article 108(1)1 of the Building Act, an owner or contractor who changes the use of a building in an urban area in violation of Article 19(1) or (2) faces imprisonment for up to 3 years or a fine of up to KRW 500 million, and imprisonment and the fine may be imposed concurrently. "We only changed the signage" and "the tenant handled it" are not defences. Costs vary case by case and are explained precisely during the free consultation.</p>

<div class="faq-section"><h2>FAQ</h2>
<div class="faq-item"><p class="faq-q">Q. How do I tell whether my case needs a permit or a report?</p><p class="faq-a">A. Compare the facility group numbers of the current and target use. Article 19(4) sets out nine groups and Article 14(5) of the Decree assigns the detailed uses. Smaller number: permit. Larger: report. Same: amend the building register entry.</p></div>
<div class="faq-item"><p class="faq-q">Q. Is nothing required for a change within neighbourhood living facilities?</p><p class="faq-a">A. As a rule, nothing: Article 19(3) and Article 14(4) of the Decree exempt changes within the same subparagraph of Table 1 and between class I and class II neighbourhood living facilities. But the proviso pulls bathhouses, clinic-type uses, institutes, danran bars, massage parlours, karaoke rooms, residential lodging and entertainment bars back out, so those need an application.</p></div>
<div class="faq-item"><p class="faq-q">Q. Does converting an office into a gosiwon need a permit?</p><p class="faq-a">A. Yes. A multi-unit living facility sits in class II neighbourhood living facilities, but Article 14(5) of the Decree places it in the business facility group (subparagraph 5) rather than the neighbourhood living facility group (subparagraph 7). The number gets smaller, so it is an upper-group move requiring a permit.</p></div>
<div class="faq-item"><p class="faq-q">Q. If no construction work is involved, is approval for use still needed?</p><p class="faq-a">A. It depends on the area. Article 19(5) applies the approval-for-use provisions where the aggregate floor area being converted is 100 square metres or more, but not where that aggregate is under 500 square metres and no major repair work is involved.</p></div>
<div class="faq-item"><p class="faq-q">Q. What happens if I simply operate a different business without changing the use?</p><p class="faq-a">A. Corrective orders, enforcement fines and criminal liability all apply. Article 79 lets the authority order a stop to work or a ban on use and request that business permits under other statutes be withheld; Article 80 provides an enforcement fine; Article 108(1)1 provides imprisonment of up to 3 years or a fine of up to KRW 500 million for violations in urban areas.</p></div>
</div>

<div class="cta-block">
 <h3>We confirm whether it is a permit or a report first</h3>
 <p>We review your building register and drawings, settle the facility group classification and map the procedure. Call 02-363-2251, weekdays 09:30–17:30 KST.</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=building-usage-change-requirements">Request a free consultation</a>
</div>

<p class="author-block">Yuseon Administrative Scrivener Office (Chief Scrivener Jeong Yuseon) · Based on the Building Act (Act No. 21035, in force 27 February 2026), its Enforcement Decree (Presidential Decree No. 36587) and Table 1 · Last reviewed 25 September</p>`,
  },

  zh: {
    title: '韩国建筑物用途变更的要件 — 设施群判断与新用途的建筑标准',
    category: '许可与执照',
    metaTitle: '韩国建筑物用途变更要件 — 设施群编号与建筑标准',
    metaDescription: '依据韩国《建筑法》第19条的九个设施群，说明用途变更属于许可、申报还是仅需变更建筑物登记簿记载事项，以及新用途所要求的建筑标准与使用批准要件。',
    excerpt: '用途变更的要件不是从"现在是什么用途"开始，而是从"要改成的用途要求什么"开始。',
    content: `<div class="toc"><p>目录</p><ol><li>要件从目标用途出发</li><li>设施群编号决定许可或申报</li><li>九个设施群</li><li>不能仅以登记变更了事的用途</li><li>新用途要求的各项标准</li><li>使用批准与处罚</li><li>常见问题</li></ol></div>
<p>韩国的<strong>建筑物用途变更</strong>，是把已取得使用批准的建筑物改为其他用途的程序。实务中最常出错的是先去查"我们这栋楼现在算什么用途"。《建筑法》的要件方向相反：起点在于<strong>要改成的用途要求什么</strong>。</p>
<p>用途变更的对象是已依《建筑法》第22条取得使用批准的建筑物；仍处于新建阶段时，那是在建筑许可阶段确定用途的问题。本文以现行《建筑法》（法律第21035号，2026年2月27日施行）、同法施行令（总统令第36587号，2026年9月18日施行）及该施行令别表一原文为准。</p>

<h2>要件从"要改成什么用途"出发</h2>
<p>《建筑法》第19条第1款用一句话规定了用途变更的要件，这句话是此后一切判断的基准线。</p>
<div class="highlight-box">《建筑法》第19条第1款：建筑物的用途变更，应当符合所要变更用途的建筑标准。</div>
<p>"所要变更用途的建筑标准"并不只存在于《建筑法》之内。同条第7款准用基地安全、结构承载力、避难设施与防火分区、耐火构造与防火墙、装修材料、升降机的规定，并准用《绿色建筑物营造支援法》第15条与《国土规划及利用法》第54条。用途变更不是换一套文件，而是审查建筑物是否真正具备新用途的建筑标准。</p>
<p>国土交通部长官还可以就用途变更另行公告适用的建筑标准。既有建筑物或基地因法令制定、修改而不符合现行法令时，可以按照建筑条例的规定进行用途变更。</p>

<h2>设施群编号决定许可、申报还是登记变更</h2>
<p>要变更已取得使用批准建筑物用途的人，必须取得特别自治市市长、特别自治道道知事或市长、郡守、区厅长的<strong>许可</strong>或向其<strong>申报</strong>。属于哪一种完全取决于设施群的编号顺序。</p>
<table><thead><tr><th>变更方向</th><th>程序</th><th>依据</th></tr></thead><tbody>
<tr><td>改为编号更小的设施群（上位群）的用途</td><td>许可</td><td>法第19条第2款第1项</td></tr>
<tr><td>改为编号更大的设施群（下位群）的用途</td><td>申报</td><td>法第19条第2款第2项</td></tr>
<tr><td>在同一设施群内变更用途</td><td>申请变更建筑物登记簿记载事项</td><td>法第19条第3款</td></tr>
</tbody></table>
<p>"上位群"并不表示设施等级高低，而是把第19条第4款各项中<strong>编号较小</strong>的设施群定义为上位群。判断靠对编号而非感觉：把邻里生活设施群（第7项）的办公室改为营业设施群（第5项）的住宿设施，编号变小属许可对象；反过来只需申报。</p>
<p>并置两种用途也有条文依据：建筑主可以以复数用途申请，但许可权人只在复数用途<strong>全部</strong>符合本法及相关法令所定建筑标准与选址标准时才可准许。只要有一种不合标准整件事就会被挡住，因此须在规划阶段先行检讨。判断完成后，申请书式与附件依国土交通部令办理；三种情形的管辖机关相同，只是受理程序不同。</p>

<h2>九个设施群及其所含用途</h2>
<p>设施群由《建筑法》第19条第4款定为九个，各设施群所含建筑物的细分用途则由同法施行令第14条第5款规定。下表即用途变更判断的基准表。</p>
<table><thead><tr><th>编号</th><th>设施群</th><th>所含用途</th></tr></thead><tbody>
<tr><td>1</td><td>汽车相关设施群</td><td>汽车相关设施</td></tr>
<tr><td>2</td><td>产业等设施群</td><td>运输、仓库、工厂、危险物储存处理、资源循环、墓地相关、殡葬设施</td></tr>
<tr><td>3</td><td>电气通信设施群</td><td>广播通信设施、发电设施</td></tr>
<tr><td>4</td><td>文化集会设施群</td><td>文化及集会设施、宗教设施、游乐设施、观光休憩设施</td></tr>
<tr><td>5</td><td>营业设施群</td><td>销售、运动、住宿设施，第二类邻里生活设施中的多人居住设施</td></tr>
<tr><td>6</td><td>教育及福利设施群</td><td>医疗、教育研究、老幼者、修炼、露营场设施</td></tr>
<tr><td>7</td><td>邻里生活设施群</td><td>第一类邻里生活设施、第二类邻里生活设施（多人居住设施除外）</td></tr>
<tr><td>8</td><td>居住业务设施群</td><td>独立住宅、集体住宅、业务、矫正、国防军事设施</td></tr>
<tr><td>9</td><td>其他设施群</td><td>动物及植物相关设施</td></tr>
</tbody></table>
<p>表中值得注意的是<strong>多人居住设施</strong>（考试院）：它虽属第二类邻里生活设施，施行令却把它放进营业设施群。因此把办公室改成考试院是向上位群移动的许可对象。</p>

<h2>不能仅以登记变更了事的用途</h2>
<p>在同一设施群内变更用途，以申请变更建筑物登记簿记载事项代之。但《建筑法》第19条第3款但书规定"总统令所定的变更"连该申请也不需要，施行令第14条第4款列举两种：别表一<strong>同一项</strong>所属建筑物相互间的用途变更，以及在用途限制允许范围内第一类与第二类邻里生活设施相互间的用途变更。</p>
<p>不过同款但书又把一部分用途从该免除中重新排除。改为下列用途时，即使是同一项内的移动，也必须申请变更记载事项。</p>
<table><thead><tr><th>别表一条项</th><th>相应用途</th></tr></thead><tbody>
<tr><td>第3项丙目（仅浴场）、丁目</td><td>浴场；医院、牙科医院、韩医院、助产院、产后护理院等</td></tr>
<tr><td>第4项甲目、庚目、癸目</td><td>演出场；游戏提供业所与虚拟现实体验场；补习班、教习所、职业训练所</td></tr>
<tr><td>第4项相关各目</td><td>高尔夫练习场·游乐型设施；单间酒馆；按摩施术所·练歌房；订单配送设施</td></tr>
<tr><td>第7项丙目第2目</td><td>不属于第二类邻里生活设施的游戏设施类商店</td></tr>
<tr><td>第15项甲目（仅生活住宿设施）</td><td>生活住宿设施</td></tr>
<tr><td>第16项甲目、乙目</td><td>不属于第二类邻里生活设施的单间酒馆；娱乐酒馆等</td></tr>
</tbody></table>
<p>这张表要与"面积超标即用途改变"一起看。休闲餐饮店与糕饼店，同一建筑物内该用途楼板面积合计不满300平方米时属第一类邻里生活设施，以上则属第二类。单间酒馆在150平方米以下属第二类，超过则成为游乐设施而上升到文化集会设施群——扩大店面之所以会变成许可事由，原因就在这里。</p>

<h2>新用途实际要求的各项标准</h2>
<p>真正挡住用途变更的往往不是第19条本身，而是被准用的各项标准。一是用途地域限制：准用《国土规划及利用法》第54条，条例禁止的用途与建筑物状态无关一律不可。二是避难与防火，地下层或无窗层改作营业用途时最常在此受阻。三是结构安全，仓库改为销售设施这类载荷变化需要结构检讨。四是停车，无法确保不足车位就拿不到许可。此外还准用升降机规定与《绿色建筑物营造支援法》第15条。</p>
<p>逐条对照准用规定需要同时看图纸与现场。登记簿与图纸可在<a href="https://www.eais.go.kr" target="_blank" rel="noopener">세움터</a>查询，法令原文可在国家法令信息中心的<a href="https://www.law.go.kr/법령/건축법" target="_blank" rel="noopener">建筑法</a>与<a href="https://www.law.go.kr/법령/건축법시행령" target="_blank" rel="noopener">建筑法施行令</a>直接查看。</p>

<h2>使用批准、设计要件与违反时的处罚</h2>
<p>属于许可或申报对象的用途变更，若变更部分楼板面积合计在100平方米以上，准用使用批准规定；但该合计不满500平方米且不伴随大修工程时不予准用。属于许可对象且合计在500平方米以上的用途变更，其设计准用第23条，须由建筑师设计；一层畜舍改为工厂且不伴随扩建、改建或大修的情形除外。</p>
<p>跳过程序，处罚会从两条线上来。许可权人可以撤销许可，或命令建筑主等停工、拆除、用途变更、禁止使用；对不履行整改命令的建筑物，可以请求不予办理其他法令上的营业许可、登记等。不履行还会被课以履行强制金，属于营利目的或惯常违反时其金额依条例加重。</p>
<p>刑事处罚另行规定。在城市地区违反第19条第1款及第2款进行用途变更的建筑主与施工人，依《建筑法》第108条第1款第1项处三年以下有期徒刑或五亿韩元以下罚金，且可以并科。"只换了招牌""是承租人自己弄的"在这个领域绕不过去。费用因案件而异，免费咨询时会准确说明。</p>

<div class="faq-section"><h2>常见问题</h2>
<div class="faq-item"><p class="faq-q">Q. 怎么知道我们的情形是许可还是申报？</p><p class="faq-a">A. 对照现用途与目标用途各属第几个设施群即可。《建筑法》第19条第4款把设施群定为九个，同法施行令第14条第5款规定各设施群的细分用途。编号变小是许可，变大是申报，相同则是申请变更建筑物登记簿记载事项。</p></div>
<div class="faq-item"><p class="faq-q">Q. 在同一类邻里生活设施内变更，什么手续都不需要吗？</p><p class="faq-a">A. 原则上是。《建筑法》第19条第3款但书与施行令第14条第4款把别表一同一项内的用途变更、以及第一类与第二类邻里生活设施之间的用途变更排除在记载事项变更申请之外。但同款但书又把浴场、医院类、补习班、单间酒馆、练歌房、生活住宿设施、娱乐酒馆等重新排除，改为这些用途时仍需申请。</p></div>
<div class="faq-item"><p class="faq-q">Q. 把办公室改成考试院也需要用途变更许可吗？</p><p class="faq-a">A. 需要。多人居住设施虽属第二类邻里生活设施，但《建筑法施行令》第14条第5款把它放进营业设施群而不是邻里生活设施群。邻里生活设施群是第7项、营业设施群是第5项，编号变小属于上位群变更，因此是许可对象。</p></div>
<div class="faq-item"><p class="faq-q">Q. 不动工只改用途，也可以不办使用批准吗？</p><p class="faq-a">A. 以面积划分。《建筑法》第19条第5款规定，许可·申报对象的用途变更中，所要变更部分楼板面积合计在100平方米以上时准用使用批准规定；但该合计不满500平方米且不伴随属于大修的工程时不予准用。</p></div>
<div class="faq-item"><p class="faq-q">Q. 不办用途变更就经营其他业种会怎样？</p><p class="faq-a">A. 整改命令、履行强制金与刑事处罚会一并到来。《建筑法》第79条允许许可权人命令停工或禁止使用，并请求不予办理其他法令上的营业许可；第80条规定履行强制金；第108条第1款第1项对城市地区的违反规定三年以下有期徒刑或五亿韩元以下罚金。</p></div>
</div>

<div class="cta-block">
 <h3>先替您确认是许可还是申报</h3>
 <p>유선행정사사무소会先看建筑物登记簿与图纸，整理设施群判断、准用标准检讨与所需程序。电话 02-363-2251，平日 09:30~17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=building-usage-change-requirements">申请免费咨询</a>
</div>

<p class="author-block">유선행정사사무소（代表行政士 정유선）· 依《建筑法》（法律第21035号，2026年2月27日施行）、同法施行令（总统令第36587号，2026年9月18日施行）及该施行令别表一原文撰写 · 最终审阅日 9月25日</p>`,
  },

  ja: {
    title: '韓国の建築物用途変更の要件 — 施設群の判定と変更後の用途の建築基準',
    category: '許認可',
    metaTitle: '韓国の建築物用途変更の要件 — 施設群の番号と建築基準',
    metaDescription: '韓国の建築物用途変更が許可・届出・建築物台帳の記載変更のどれに当たるのかを建築法第19条の9つの施設群で判定する方法と、変更後の用途が求める建築基準・使用承認要件を原文基準で整理しました。',
    excerpt: '用途変更の要件は「いまどの用途か」からではなく「変更しようとする用途が何を求めるか」から始まります。',
    content: `<div class="toc"><p>目次</p><ol><li>要件は「変更後の用途」から始まる</li><li>施設群の番号が許可・届出・台帳記載変更を分ける</li><li>9つの施設群とそこに属する用途</li><li>記載変更だけでは済まない用途</li><li>変更後の用途が求める個別基準</li><li>使用承認・設計要件と違反時の制裁</li><li>よくあるご質問</li></ol></div>
<p>韓国の<strong>建築物の用途変更</strong>は、すでに使用承認を受けた建築物を別の用途に変える手続です。実務で最も多い誤りは、「自分の建物は今どの用途なのか」から考え始めることです。「建築法」が定める要件の出発点は逆側、すなわち<strong>変更しようとする用途が何を求めているか</strong>にあります。</p>
<p>用途変更の対象は、すでに「建築法」第22条により使用承認を受けた建築物です。新築段階であれば用途変更ではなく建築許可の段階で用途を定める問題になります。本稿は現行の「建築法」（法律第21035号、2026年2月27日施行）、同法施行令（大統領令第36587号、2026年9月18日施行）および同施行令別表1の原文に基づいています。</p>

<h2>要件は「変更後の用途」から始まる</h2>
<p>「建築法」第19条第1項は、用途変更の要件を一文で定めています。この一文が以後すべての判断の基準線になります。</p>
<div class="highlight-box">「建築法」第19条第1項：建築物の用途変更は、変更しようとする用途の建築基準に適合するように行わなければならない。</div>
<p>ここでいう「変更しようとする用途の建築基準」は「建築法」の中だけにあるものではありません。同条第7項は、敷地の安全、構造耐力、避難施設と防火区画、耐火構造と防火壁、仕上げ材料、昇降機に関する規定を準用し、あわせて「緑色建築物造成支援法」第15条と「国土の計画及び利用に関する法律」第54条までを準用します。つまり用途変更は書類を差し替える手続ではなく、新しい用途の建築基準を実際に備えているかを審査される手続です。</p>
<p>また国土交通部長官は、用途変更に適用される建築基準を別途告示することができます。既存の建築物または敷地が法令の制定・改正により現行法令に不適合となった場合には、建築条例で定めるところにより用途変更を行う道も残されています。</p>

<h2>施設群の番号が許可・届出・台帳記載変更を分ける</h2>
<p>使用承認を受けた建築物の用途を変更しようとする者は、特別自治市長・特別自治道知事または市長・郡守・区庁長の<strong>許可</strong>を受けるか、<strong>届出</strong>をしなければなりません。どちらに当たるかは、施設群の番号の順序だけで決まります。</p>
<table><thead><tr><th>変更の方向</th><th>手続</th><th>根拠</th></tr></thead><tbody>
<tr><td>番号がより小さい施設群（上位群）の用途に変更</td><td>許可</td><td>法第19条第2項第1号</td></tr>
<tr><td>番号がより大きい施設群（下位群）の用途に変更</td><td>届出</td><td>法第19条第2項第2号</td></tr>
<tr><td>同じ施設群の中での用途変更</td><td>建築物台帳の記載事項変更の申請</td><td>法第19条第3項</td></tr>
</tbody></table>
<p>条文がいう「上位群」「下位群」は、施設の格が高い・低いという意味ではありません。第19条第4項各号のうち<strong>番号が小さい施設群</strong>を上位群と定義したものです。したがって判定は感覚ではなく番号の照合で終わります。たとえば近隣生活施設群（第7号）に属する事務室を営業施設群（第5号）に属する宿泊施設に変える場合、番号が小さくなるため許可対象であり、逆に宿泊施設を事務所に変える場合は番号が大きくなるため届出対象です。</p>
<p>二つの用途を併置する場合にも条文上の道があります。建築主は用途を複数として申請でき、許可権者は申請された複数の用途が同法および関係法令に定める建築基準と立地基準等に<strong>すべて</strong>適合する場合に限って許容できます。一つでも基準に触れれば全体が止まるため、複数用途は企画段階で検討が必要です。判定後の申請書式と添付書類は国土交通部令によります。三つのいずれでも管轄行政庁は同じで、どの手続として受理されるかが変わるだけです。</p>

<h2>9つの施設群とそこに属する用途</h2>
<p>施設群は「建築法」第19条第4項が9つと定め、各施設群に属する建築物の細分用途は同法施行令第14条第5項が定めます。下の表が用途変更判定の基準表です。</p>
<table><thead><tr><th>番号</th><th>施設群</th><th>属する用途</th></tr></thead><tbody>
<tr><td>1</td><td>自動車関連施設群</td><td>自動車関連施設</td></tr>
<tr><td>2</td><td>産業等施設群</td><td>運輸、倉庫、工場、危険物貯蔵処理、資源循環、墓地関連、葬礼施設</td></tr>
<tr><td>3</td><td>電気通信施設群</td><td>放送通信施設、発電施設</td></tr>
<tr><td>4</td><td>文化集会施設群</td><td>文化及び集会施設、宗教施設、遊楽施設、観光休憩施設</td></tr>
<tr><td>5</td><td>営業施設群</td><td>販売施設、運動施設、宿泊施設、第2種近隣生活施設のうち多衆生活施設</td></tr>
<tr><td>6</td><td>教育及び福祉施設群</td><td>医療施設、教育研究施設、老幼者施設、修練施設、キャンプ場施設</td></tr>
<tr><td>7</td><td>近隣生活施設群</td><td>第1種近隣生活施設、第2種近隣生活施設（多衆生活施設を除く）</td></tr>
<tr><td>8</td><td>住居業務施設群</td><td>単独住宅、共同住宅、業務施設、矯正施設、国防・軍事施設</td></tr>
<tr><td>9</td><td>その他の施設群</td><td>動物及び植物関連施設</td></tr>
</tbody></table>
<p>表の中で目を引くのは<strong>多衆生活施設</strong>（コシウォン）です。同じ第2種近隣生活施設でありながら、多衆生活施設だけが近隣生活施設群ではなく営業施設群に上がっています。そのため事務室をコシウォンに変えることは、同じ近隣生活施設の中での移動ではなく、上位群に上がる許可対象になります。</p>

<h2>記載変更だけでは済まない用途</h2>
<p>同じ施設群の中で用途を変える場合は、建築物台帳の記載事項の変更を申請することで代えます。ところが「建築法」第19条第3項ただし書は「大統領令で定める変更」はその申請さえ不要と定め、施行令第14条第4項がその二つを列挙します。第一は別表1の<strong>同じ号</strong>に属する建築物相互間の用途変更、第二は関係法令の用途制限に適合する範囲で第1種近隣生活施設と第2種近隣生活施設相互間の用途変更です。</p>
<p>ただし同項のただし書が、この免除から再び除外する用途があります。衛生・安全・住環境の規制が強い用途に入る場合には、同じ号の中の移動であっても記載事項変更の申請が必要です。別表1の原文に沿って整理すると次のとおりです。</p>
<table><thead><tr><th>別表1の条項</th><th>該当する用途</th></tr></thead><tbody>
<tr><td>第3号ハ目（浴場のみ）・ニ目</td><td>浴場／医院、歯科医院、韓医院、鍼術院、接骨院、助産院、あん摩院、産後ケア院等</td></tr>
<tr><td>第4号イ目・ト目・カ目</td><td>公演場／ゲーム提供業所・バーチャルリアリティ体験提供業所／学院、教習所、職業訓練所</td></tr>
<tr><td>第4号の該当各目</td><td>ゴルフ練習場・遊び型施設／タンランチュジョム（小規模酒場）／あん摩施術所・カラオケ店／注文配送施設</td></tr>
<tr><td>第7号ハ目2)</td><td>第2種近隣生活施設に該当しないゲーム施設系の店舗</td></tr>
<tr><td>第15号イ目（生活宿泊施設のみ）</td><td>生活宿泊施設</td></tr>
<tr><td>第16号イ目・ロ目</td><td>第2種近隣生活施設に該当しないタンランチュジョム／遊興酒場等</td></tr>
</tbody></table>
<p>実務ではこの表を「面積基準を超えると用途が変わる」という事実と併せて見る必要があります。たとえば休憩飲食店や製菓店は、同じ建築物でその用途に使う床面積の合計が300平方メートル未満なら第1種近隣生活施設、それ以上なら第2種近隣生活施設です。タンランチュジョムは150平方メートル未満なら第2種近隣生活施設ですが、それを超えると遊楽施設となり文化集会施設群に上がります。売場を広げる工事がそのまま用途変更許可の事由になる場面は、ここから生まれます。</p>

<h2>変更後の用途が求める個別基準</h2>
<p>用途変更を実際に止めるのは条文そのものよりも準用される個別基準です。まず用途地域の制限で、「国土の計画及び利用に関する法律」第54条が準用されるため、条例で禁止された用途は建物の状態と関係なく不可能です。次に避難・防火で、地下層や無窓層を営業用に変えるときに最も頻繁に問題になります。構造安全も重要で、倉庫を販売施設に変えるように積載荷重の条件が変われば構造検討が必要です。駐車も用途と一緒に動き、不足台数を確保できなければ許可は下りません。昇降機の規定と「緑色建築物造成支援法」第15条も準用されます。</p>
<p>準用条文を一つずつ照合するには、図面と現場を併せて見る必要があります。建築物台帳や図面は<a href="https://www.eais.go.kr" target="_blank" rel="noopener">セウムト（世움터）</a>で確認でき、法令の原文は国家法令情報センターの<a href="https://www.law.go.kr/법령/건축법" target="_blank" rel="noopener">建築法</a>と<a href="https://www.law.go.kr/법령/건축법시행령" target="_blank" rel="noopener">建築法施行令</a>で直接見ることができます。</p>

<h2>使用承認・設計要件と違反時の制裁</h2>
<p>許可や届出の対象である用途変更で、変更しようとする部分の床面積の合計が100平方メートル以上であれば使用承認の規定が準用されます。ただしその合計が500平方メートル未満で、大規模修繕に該当する工事を伴わない場合はこの限りではありません。また許可対象であって変更しようとする部分の床面積の合計が500平方メートル以上の用途変更は、設計について第23条が準用されるため建築士が設計しなければなりません。1階である畜舎を工場に用途変更する場合で、増築・改築または大規模修繕を伴わず構造安全や避難等に支障がない場合は除かれます。</p>
<p>手続を飛ばした場合、制裁は二つの筋から来ます。許可権者は許可や承認を取り消し、または建築主等に工事の中止、解体、用途変更、使用禁止等の必要な措置を命ずることができ、是正命令に従わない建築物については他の法令による営業の許可・登録等を行わないよう要請できます。履行しなければ履行強制金が課され、営利目的や常習的な違反ではその金額が条例により加重されます。</p>
<p>刑事罰も別にあります。都市地域において第19条第1項および第2項に違反して用途変更を行った建築主と工事施工者は、「建築法」第108条第1項第1号により3年以下の懲役または5億ウォン以下の罰金に処され、懲役と罰金は併科することができます。「看板だけ変えた」「賃借人が勝手にやった」という事情で避けられる領域ではありません。費用は案件ごとに異なるため、無料相談時に正確にご案内します。</p>

<div class="faq-section"><h2>よくあるご質問</h2>
<div class="faq-item"><p class="faq-q">Q. 自分のケースが許可なのか届出なのか、どう判断しますか。</p><p class="faq-a">A. 現在の用途と変更後の用途がそれぞれ何番の施設群に属するかを照合します。「建築法」第19条第4項が施設群を9つと定め、同法施行令第14条第5項が各施設群の細分用途を定めています。番号が小さくなれば許可、大きくなれば届出、同じであれば建築物台帳の記載事項変更の申請です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 同じ近隣生活施設の中での変更なら手続は不要ですか。</p><p class="faq-a">A. 原則は不要です。「建築法」第19条第3項ただし書と同法施行令第14条第4項は、別表1の同じ号に属する建築物相互間の用途変更、および用途制限に適合する範囲で第1種と第2種近隣生活施設相互間の用途変更を記載事項変更の申請から除いています。ただし同項ただし書が浴場、医院系、学院、タンランチュジョム、あん摩施術所・カラオケ店、生活宿泊施設、遊興酒場等を再び除外するため、その用途に入る場合は申請が必要です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 事務室をコシウォンに変えるのも用途変更許可が必要ですか。</p><p class="faq-a">A. 必要です。多衆生活施設は第2種近隣生活施設に属しますが、「建築法施行令」第14条第5項は多衆生活施設を近隣生活施設群ではなく営業施設群に入れています。近隣生活施設群は第7号、営業施設群は第5号ですから番号が小さくなる上位群への変更となり、許可対象です。</p></div>
<div class="faq-item"><p class="faq-q">Q. 工事をせず用途だけ変える場合、使用承認も不要ですか。</p><p class="faq-a">A. 面積で分かれます。「建築法」第19条第5項は、許可・届出対象の用途変更で変更しようとする部分の床面積の合計が100平方メートル以上であれば使用承認の規定を準用し、その合計が500平方メートル未満で大規模修繕に該当する工事を伴わない場合は準用しないと定めています。</p></div>
<div class="faq-item"><p class="faq-q">Q. 用途変更をせずに別の業種で営業するとどうなりますか。</p><p class="faq-a">A. 是正命令と履行強制金、刑事罰が併せて掛かります。「建築法」第79条第1項は許可権者が工事中止や用途変更、使用禁止等を命ずることができるとし、同条第2項は他の法令による営業許可等を行わないよう要請できるとしています。第80条第1項は是正命令不履行に対する履行強制金を、第108条第1項第1号は都市地域での違反に対して3年以下の懲役または5億ウォン以下の罰金を定めています。</p></div>
</div>

<div class="cta-block">
 <h3>許可か届出かを先に確認します</h3>
 <p>建築物台帳と図面を確認し、施設群の判定、準用基準の検討、必要な手続をユソン行政士事務所が先に整理します。電話 02-363-2251、平日 09:30〜17:30 KST。</p>
 <a href="/contact?utm_source=blog&utm_medium=cta&utm_campaign=building-usage-change-requirements">無料相談を申し込む</a>
</div>

<p class="author-block">ユソン行政士事務所（代表行政士 チョン・ユソン）・「建築法」（法律第21035号、2026年2月27日施行）、同法施行令（大統領令第36587号、2026年9月18日施行）および同施行令別表1の原文に基づき作成・最終確認日 9月25日</p>`,
  },
}
