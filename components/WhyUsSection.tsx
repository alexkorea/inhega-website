import { Target, Shield, CheckCircle, Clock, MessageSquare } from "lucide-react";

const VALUES = [
  {
    icon: Target,
    title: "명확한 목표 설정",
    desc: "고객의 사업 목표에 맞는 최적의 인허가 전략을 수립합니다.",
    stat: "맞춤 전략",
  },
  {
    icon: Shield,
    title: "안정적인 업무 처리",
    desc: "법적 리스크를 최소화하고 안정적인 인허가 절차를 보장합니다.",
    stat: "리스크 최소화",
  },
  {
    icon: CheckCircle,
    title: "높은 성공률",
    desc: "풍부한 경험과 전문성을 바탕으로 높은 인허가 성공률을 달성합니다.",
    stat: "98% 성공률",
  },
  {
    icon: Clock,
    title: "신속한 처리",
    desc: "효율적인 프로세스를 통해 신속한 인허가 처리를 지원합니다.",
    stat: "24h 응답",
  },
  {
    icon: MessageSquare,
    title: "맞춤형 상담",
    desc: "고객 맞춤형 상담을 통해 최적의 솔루션을 제공합니다.",
    stat: "1:1 상담",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-wv-orange font-bold">
            Why Us?
          </div>
          <h2 className="mt-4 text-display-lg font-black text-wv-ink leading-tight">
            왜 저희를 선택해야 할까요?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.slice(0, 3).map((v) => (
            <div
              key={v.title}
              className="group rounded-3xl border border-wv-line p-8 md:p-10 hover:border-wv-orange hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-wv-orangeSoft flex items-center justify-center">
                <v.icon className="text-wv-orange" size={28} />
              </div>
              <h3 className="mt-6 text-xl font-black text-wv-ink">{v.title}</h3>
              <p className="mt-3 text-wv-gray text-sm leading-relaxed">
                {v.desc}
              </p>
              <div className="mt-5 text-xs font-bold text-wv-orange uppercase tracking-wider">
                {v.stat}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-2xl mx-auto">
          {VALUES.slice(3).map((v) => (
            <div
              key={v.title}
              className="group rounded-3xl border border-wv-line p-8 md:p-10 hover:border-wv-orange hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-wv-orangeSoft flex items-center justify-center">
                <v.icon className="text-wv-orange" size={28} />
              </div>
              <h3 className="mt-6 text-xl font-black text-wv-ink">{v.title}</h3>
              <p className="mt-3 text-wv-gray text-sm leading-relaxed">
                {v.desc}
              </p>
              <div className="mt-5 text-xs font-bold text-wv-orange uppercase tracking-wider">
                {v.stat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
