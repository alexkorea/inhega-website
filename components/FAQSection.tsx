"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const ITEMS = [
  {
    q: "인허가 절차는 보통 얼마나 걸리나요?",
    a: "업종과 관할 기관에 따라 다르지만, 일반적으로 2주~2개월 정도 소요됩니다. 서류 준비 상태와 심사 과정에 따라 달라질 수 있으며, 상담 시 예상 소요 기간을 안내해 드립니다.",
  },
  {
    q: "어떤 업종의 인허가를 지원하나요?",
    a: "국제물류주선업, 환전업, 식품제조가공업, 건축물 용도변경, 의약외품/화장품 허가, 기업 인증(벤처/이노비즈), 기업부설연구소 설립 등 16개 이상의 업종을 전문적으로 지원합니다.",
  },
  {
    q: "서류 준비가 어려운데 도움받을 수 있나요?",
    a: "네, 물론입니다. 업종별 필요 서류 리스트를 제공하고, 작성부터 제출까지 전 과정을 함께 진행합니다. 누락이나 오류 없이 완벽하게 준비할 수 있도록 안내합니다.",
  },
  {
    q: "인허가 신청이 거절되면 어떻게 되나요?",
    a: "거절 사유를 정확히 파악하고 보완하여 재신청할 수 있습니다. 사전에 철저한 서류 검토와 요건 확인을 통해 거절 가능성을 최소화합니다.",
  },
  {
    q: "상담 비용은 얼마인가요?",
    a: "초기 상담은 무료입니다. 케이스 검토 후 예상 비용과 절차를 안내 드립니다. 비용은 업종과 복잡도에 따라 다르며, 상담 시 투명하게 안내합니다.",
  },
  {
    q: "전국 어디서든 의뢰할 수 있나요?",
    a: "네, 전국 어디서든 의뢰 가능합니다. 비대면 상담과 서류 접수도 지원하며, 필요 시 현장 방문도 진행합니다.",
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-x max-w-3xl">
        <div className="text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-wv-orange font-bold">
            FAQ
          </div>
          <h2 className="mt-4 text-display-lg font-black text-wv-ink leading-tight">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-3">
          {ITEMS.map((item, i) => (
            <div
              key={i}
              className="border border-wv-line rounded-2xl overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <span className="font-bold text-wv-ink text-sm md:text-base pr-4">
                  {item.q}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-wv-gray shrink-0 transition-transform duration-300 ${
                    openIdx === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIdx === i ? "max-h-96 pb-5 md:pb-6" : "max-h-0"
                }`}
              >
                <p className="px-5 md:px-6 text-sm text-wv-gray leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
