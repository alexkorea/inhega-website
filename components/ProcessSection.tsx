const STEPS = [
  {
    num: "01",
    title: "초기 상담",
    desc: "전화·카카오·이메일로 업종과 요건을 파악하고 맞춤 인허가 전략을 수립합니다.",
  },
  {
    num: "02",
    title: "서류 준비",
    desc: "업종별 필요 서류 리스트를 제공하고, 누락 없이 함께 준비합니다.",
  },
  {
    num: "03",
    title: "접수 대행",
    desc: "관할 관청에 인허가 신청을 대행합니다. 보정 요청에도 즉시 대응합니다.",
  },
  {
    num: "04",
    title: "심사 대응",
    desc: "심사 중 추가 서류 요청·현장 실사에 신속히 대응하여 승인 확률을 높입니다.",
  },
  {
    num: "05",
    title: "허가 완료",
    desc: "허가·등록·인증 발급 후 사후 관리와 변경사항까지 안내해 드립니다.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-wv-orange font-bold">
            Process
          </div>
          <h2 className="mt-4 text-display-lg font-black text-wv-ink leading-tight">
            진행 절차
          </h2>
          <p className="mt-4 text-wv-gray">
            상담부터 허가 완료까지, 5단계로 안내합니다.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute left-[39px] top-10 bottom-10 w-[2px] bg-wv-line" />

          <div className="space-y-8 md:space-y-10">
            {STEPS.map((s) => (
              <div key={s.num} className="flex gap-6 items-start relative">
                {/* Circle */}
                <div className="shrink-0 w-[80px] h-[80px] rounded-full bg-wv-orangeSoft flex items-center justify-center relative z-10">
                  <span className="text-2xl font-black text-wv-orange">
                    {s.num}
                  </span>
                </div>
                {/* Content */}
                <div className="pt-4">
                  <h3 className="text-lg font-black text-wv-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-wv-gray leading-relaxed max-w-md">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
