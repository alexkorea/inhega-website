import Link from 'next/link'

const services = [
  { title: '국제물류주선업', desc: '화물운송주선업자 등록 및 국제물류 관련 인허가를 지원합니다.' },
  { title: '환전업 등록', desc: '환전영업 등록 절차를 안내하고 인허가 전반을 지원합니다.' },
  { title: '외국인도시민박업', desc: '외국인 대상 도시민박업 등록 요건 및 절차를 지원합니다.' },
  { title: '호스텔업', desc: '호스텔업 등록을 위한 시설 기준 및 인허가 절차를 안내합니다.' },
  { title: '한옥체험업', desc: '한옥체험업 등록에 필요한 요건과 절차를 전문적으로 지원합니다.' },
  { title: '건축물 용도변경', desc: '건축물 용도변경 허가 및 신고 절차를 체계적으로 지원합니다.' },
  { title: '식품제조가공업', desc: '식품제조가공업 영업등록 및 관련 인허가를 지원합니다.' },
  { title: '여성기업인증', desc: '여성기업 확인 및 인증 절차를 안내하고 지원합니다.' },
  { title: '비영리사단법인', desc: '비영리사단법인 설립 허가 및 등기 절차를 지원합니다.' },
  { title: '담배수입판매업 등록', desc: '담배수입판매업 등록에 필요한 요건과 절차를 안내합니다.' },
  { title: '기업 인증(벤처/이노비즈)', desc: '벤처기업 확인, 이노비즈 인증 등 기업 인증을 지원합니다.' },
  { title: '식품 인허가 & HACCP', desc: '식품 관련 인허가 및 HACCP 인증 취득을 지원합니다.' },
  { title: '의약외품/화장품 허가', desc: '의약외품 및 화장품 제조·수입 허가를 전문적으로 지원합니다.' },
  { title: '조달청 나라장터 등록', desc: '조달업체 등록 및 나라장터 이용을 위한 절차를 안내합니다.' },
  { title: '기업부설연구소 설립', desc: '기업부설연구소 및 연구개발전담부서 설립 인정을 지원합니다.' },
  { title: '전자담배 수입허가', desc: '전자담배 수입 관련 허가 및 등록 절차를 지원합니다.' },
]

export function Services() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            주요 인허가 업무
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            다양한 업종의 허가, 등록, 인증 절차를 전문적으로 지원합니다
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            업무 상담 문의하기
          </Link>
        </div>
      </div>
    </section>
  )
}
