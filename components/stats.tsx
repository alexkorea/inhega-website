import Link from 'next/link'

const stats = [
  { value: '100+', label: '성공적인 인허가 지원' },
  { value: '50+', label: '다양한 업종 경험' },
  { value: '98%', label: '고객 만족도' },
  { value: '24h', label: '평균 응답 시간' },
]

export function Stats() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-snug whitespace-pre-line mb-6">
              {'전문성과 신뢰를 기반으로\n함께 성장합니다'}
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              비전행정사사무소는 다양한 업종의 인허가 업무를 전문적으로 수행해 왔습니다.
              복잡한 행정 절차를 체계적으로 관리하여 고객의 사업이 원활히 진행될 수 있도록 지원합니다.
            </p>
            <p className="text-slate-300 leading-relaxed mb-8">
              풍부한 실무 경험과 전문 지식을 바탕으로, 각 업종에 맞는 최적의 인허가 솔루션을 제공하며
              고객과 함께 성장하는 파트너가 되겠습니다.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
            >
              About Us 자세히 보기
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
