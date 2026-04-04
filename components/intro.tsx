import { Building2, FileCheck, Users, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Building2,
    title: '인허가 업무 중심',
    desc: '다양한 업종의 허가, 등록, 인증 업무를 중심으로 전문적인 서비스를 제공합니다.',
  },
  {
    icon: FileCheck,
    title: '체계적 절차 관리',
    desc: '복잡한 행정 절차를 체계적으로 관리하여 효율적인 업무 처리를 보장합니다.',
  },
  {
    icon: Users,
    title: '전문가 그룹',
    desc: '인허가 분야의 풍부한 경험을 가진 전문가 그룹이 함께합니다.',
  },
  {
    icon: TrendingUp,
    title: '실무 대응력',
    desc: '실무 경험을 바탕으로 신속하고 정확한 업무 대응을 제공합니다.',
  },
]

export function Intro() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug whitespace-pre-line">
            {'인허가 전문\n행정사사무소입니다'}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-5">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
