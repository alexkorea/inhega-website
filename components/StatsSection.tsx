const STATS = [
  { value: "100+", label: "성공적인 인허가 지원" },
  { value: "50+", label: "다양한 업종 경험" },
  { value: "98%", label: "고객 만족도" },
  { value: "24h", label: "평균 응답 시간" },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-wv-ink text-white">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-wv-orange">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-white/70 font-semibold">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
