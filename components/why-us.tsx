import { Target, Shield, CheckCircle, Clock, MessageSquare } from 'lucide-react'

const reasons = [
  {
    icon: Target,
    title: '명확한 목표 설정',
    desc: '고객의 사업 목표에 맞는 최적의 인허가 전략을 수립합니다.',
  },
  {
    icon: Shield,
    title: '안정적인 업무 처리',
    desc: '법적 리스크를 최소화하고 안정적인 인허가 절차를 보장합니다.',
  },
  {
    icon: CheckCircle,
    title: '높은 성공률',
    desc: '풍부한 경험과 전문성을 바탕으로 높은 인허가 성공률을 달성합니다.',
  },
  {
    icon: Clock,
    title: '신속한 처리',
    desc: '효율적인 프로세스를 통해 신속한 인허가 처리를 지원합니다.',
  },
  {
    icon: MessageSquare,
    title: '맞춤형 상담',
    desc: '고객 맞춤형 상담을 통해 최적의 솔루션을 제공합니다.',
  },
]

export function WhyUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            왜 저희를 선택해야 할까요?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="p-8 bg-slate-50 rounded-lg"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600 mb-5">
                <r.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{r.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
