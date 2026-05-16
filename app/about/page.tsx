import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Building2,
  FileCheck,
  Users,
  TrendingUp,
  Target,
  Shield,
  CheckCircle,
  Clock,
  MessageSquare,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBreadcrumb } from "@/components/page-breadcrumb"

export const metadata: Metadata = {
  title: "회사소개 - 비전행정사사무소",
  description:
    "인허가 업무에 특화된 비전행정사사무소를 소개합니다. 다양한 인허가 분야의 실무 노하우를 갖춘 전문가 팀.",
  alternates: {
    canonical: "https://www.inhega.co.kr/about",
  },
  openGraph: {
    title: "회사소개 - 비전행정사사무소",
    description:
      "인허가 업무에 특화된 비전행정사사무소를 소개합니다. 다양한 인허가 분야의 실무 노하우를 갖춘 전문가 팀.",
    url: "https://www.inhega.co.kr/about",
    siteName: "비전행정사사무소",
    type: "website",
    images: [{ url: "https://www.inhega.co.kr/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "회사소개 - 비전행정사사무소",
    description:
      "인허가 업무에 특화된 비전행정사사무소를 소개합니다. 다양한 인허가 분야의 실무 노하우를 갖춘 전문가 팀.",
  },
}

const stats = [
  { value: "100+", label: "성공적 지원" },
  { value: "50+", label: "업종 경험" },
  { value: "98%", label: "고객만족" },
  { value: "24h", label: "응답" },
]

const coreValues = [
  {
    icon: Building2,
    title: "인허가 업무 중심",
    description:
      "업종별 허가, 등록, 인증 절차에 대한 깊이 있는 실무 경험",
  },
  {
    icon: FileCheck,
    title: "체계적 절차 관리",
    description:
      "복잡한 행정절차를 명확하게 정리하고 정확하게 대행",
  },
  {
    icon: Users,
    title: "전문가 그룹",
    description:
      "다양한 인허가 분야의 실무 노하우를 갖춘 전문가 팀",
  },
  {
    icon: TrendingUp,
    title: "실무 대응력",
    description: "정확성, 신속성, 고객 맞춤형 실무 지원",
  },
]

const whyChooseUs = [
  {
    icon: Target,
    title: "인허가 업무 중심의 전문성",
    description:
      "다양한 업종의 허가·등록·인증 절차에 특화된 전문 역량을 갖추고 있습니다.",
  },
  {
    icon: Shield,
    title: "체계적 업무 처리",
    description:
      "복잡한 행정절차를 체계적으로 정리하고 정확하게 대행합니다.",
  },
  {
    icon: CheckCircle,
    title: "업종별 요구사항 검토",
    description:
      "업종별 세부 요건을 꼼꼼히 검토하여 누락 없이 준비합니다.",
  },
  {
    icon: Clock,
    title: "서류 준비부터 신청까지",
    description:
      "필요 서류 안내부터 관할 기관 신청까지 전 과정을 일괄 대행합니다.",
  },
  {
    icon: MessageSquare,
    title: "신속한 커뮤니케이션",
    description:
      "고객 문의에 빠르게 응답하며, 진행 상황을 투명하게 공유합니다.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.inhega.co.kr/#org",
      name: "비전행정사사무소",
      alternateName: ["Vision Administrative Office", "飞展行政士事务所"],
      url: "https://www.inhega.co.kr",
      telephone: "+82-2-363-2251",
      email: "5000meter@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "퇴계로 324, 3층 성우빌딩",
        addressLocality: "Jung-gu",
        addressRegion: "Seoul",
        postalCode: "04614",
        addressCountry: "KR",
      },
      foundingDate: "2018",
      knowsLanguage: ["ko", "en", "zh", "ja"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://www.inhega.co.kr/#service",
      name: "비전행정사사무소 인허가 서비스",
      url: "https://www.inhega.co.kr",
      telephone: "+82-2-363-2251",
      address: {
        "@type": "PostalAddress",
        streetAddress: "퇴계로 324, 3층 성우빌딩",
        addressLocality: "Jung-gu",
        addressRegion: "Seoul",
        postalCode: "04614",
        addressCountry: "KR",
      },
      openingHours: "Mo-Fr 09:30-18:30",
      priceRange: "문의 후 안내",
      areaServed: { "@type": "Country", name: "South Korea" },
      availableLanguage: ["Korean", "English", "Chinese", "Japanese"],
      serviceType: ["식품제조가공업 등록", "화장품 제조업 등록", "벤처기업 확인", "기업부설연구소 설립", "공장 등록", "건축물 용도변경", "환전업 등록"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://www.inhega.co.kr" },
        { "@type": "ListItem", position: 2, name: "회사소개", item: "https://www.inhega.co.kr/about" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "비전행정사사무소는 어떤 인허가 업무를 처리하나요?", acceptedAnswer: { "@type": "Answer", text: "식품제조가공업 등록, 식품판매업 신고, 화장품 제조업·책임판매업 등록, 기업부설연구소 설립 인정, 벤처기업 확인, 공장 등록, 국제물류주선업 등록, 환전업 등록, 건축물 용도변경 허가 등 다양한 인허가 업무를 대행합니다." } },
        { "@type": "Question", name: "비전행정사사무소는 법무법인인가요?", acceptedAnswer: { "@type": "Answer", text: "아닙니다. 비전행정사사무소는 행정사사무소입니다. 행정사는 행정사법에 따라 각종 인허가 서류 준비 및 관계 행정기관 제출을 대행합니다. 소송, 재판, 형사 변호 등 변호사 업무는 취급하지 않습니다." } },
        { "@type": "Question", name: "상담은 무료인가요?", acceptedAnswer: { "@type": "Answer", text: "네, 초기 상담은 무료입니다. 한국어, 영어, 중국어, 일본어로 상담이 가능합니다. 상담 후 업무 가능 여부와 비용을 안내해 드립니다." } },
        { "@type": "Question", name: "인허가 처리 기간은 얼마나 걸리나요?", acceptedAnswer: { "@type": "Answer", text: "업종과 관할 기관에 따라 다릅니다. 식품제조가공업 등록은 통상 2~4주, 화장품 제조업 등록은 3~6주, 기업부설연구소 설립 인정은 4~8주 내외입니다. 구체적인 일정은 상담 시 안내해 드립니다." } },
        { "@type": "Question", name: "외국인도 한국에서 인허가 신청이 가능한가요?", acceptedAnswer: { "@type": "Answer", text: "네. 외국인이 대표자인 경우에도 한국 법인 또는 사업자등록을 보유한 경우 인허가 신청이 가능합니다. 외국어 서류의 번역 및 공증도 지원합니다." } },
        { "@type": "Question", name: "사무소 위치는 어디인가요?", acceptedAnswer: { "@type": "Answer", text: "서울특별시 중구 퇴계로 324, 3층 성우빌딩에 위치하고 있습니다. 회현역 4호선 인근입니다." } },
        { "@type": "Question", name: "어떤 언어로 상담이 가능한가요?", acceptedAnswer: { "@type": "Answer", text: "한국어, 영어, 중국어(보통화), 일본어로 상담이 가능합니다. KakaoTalk, WeChat, LINE, WhatsApp을 통한 메신저 상담도 제공합니다." } },
      ],
    },
  ],
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <PageBreadcrumb items={[{ label: "회사소개", path: "/about" }]} />
        {/* Hero Banner */}
        <section className="relative pt-20 min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/slides/meeting.jpg" alt="회사소개" fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-20 text-center text-white w-full">
            <h1 className="text-4xl font-bold md:text-5xl">회사소개</h1>
            <p className="mt-4 text-lg text-white/80">
              인허가 업무에 특화된 전문 행정사사무소
            </p>
          </div>
        </section>

        {/* Section 1: 사무소 소개 */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#f36c24]">
              사무소 소개
            </p>
            <div className="mt-8 grid gap-12 md:grid-cols-2">
              {/* Left: Text */}
              <div>
                <h2 className="text-3xl font-bold leading-snug text-slate-900 md:text-4xl">
                  인허가 전문
                  <br />
                  행정사사무소입니다
                </h2>
                <p className="mt-6 leading-relaxed text-slate-600">
                  저희는 인허가 업무에 특화된 행정사사무소로, 사업자가 겪는
                  행정절차의 복잡함을 이해하고 이를 명확하고 체계적으로
                  해결합니다.
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  고객 맞춤형 대응과 실무 중심의 전문성으로 신뢰할 수 있는
                  파트너가 되겠습니다.
                </p>
                <p className="mt-4 leading-relaxed text-slate-600">
                  업종별 요구사항을 명확하게 파악하고, 필요한 서류 준비부터
                  관할 기관 신청까지 일괄 대행하여 사업자의 시간과 노력을
                  절감합니다.
                </p>
              </div>

              {/* Right: Stat Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                  >
                    <p className="text-3xl font-bold text-[#f36c24]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: 핵심 가치 */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-bold text-slate-900">
              핵심 가치
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {coreValues.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 bg-white p-8 text-center transition-shadow hover:shadow-md"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ffe6d5]/50">
                    <item.icon className="h-7 w-7 text-[#f36c24]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Why Choose Us */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <h2 className="text-center text-3xl font-bold text-slate-900">
              Why Choose Us
            </h2>
            <p className="mt-4 text-center text-slate-600">
              비전행정사사무소를 선택해야 하는 이유
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whyChooseUs.map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-xl border border-slate-200 bg-white p-8 transition-shadow hover:shadow-md ${
                    index >= 3 ? "sm:col-span-1 lg:col-span-1" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffe6d5]/50">
                    <item.icon className="h-6 w-6 text-[#f36c24]" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-50">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-2">자주 묻는 질문</h2>
            <p className="text-center text-slate-500 mb-12">인허가 업무에 대해 자주 묻는 질문들을 모았습니다</p>
            <div className="space-y-4">
              {[
                { q: "비전행정사사무소는 어떤 인허가 업무를 처리하나요?", a: "식품제조가공업 등록, 화장품 제조업·책임판매업 등록, 기업부설연구소 설립 인정, 벤처기업 확인, 공장 등록, 국제물류주선업 등록, 환전업 등록, 건축물 용도변경 허가 등 다양한 인허가 업무를 대행합니다." },
                { q: "비전행정사사무소는 법무법인인가요?", a: "아닙니다. 비전행정사사무소는 행정사사무소입니다. 행정사는 행정사법에 따라 각종 인허가 서류 준비 및 관계 행정기관 제출을 대행합니다. 소송, 재판, 형사 변호 등 변호사 업무는 취급하지 않습니다." },
                { q: "상담은 무료인가요?", a: "네, 초기 상담은 무료입니다. 한국어, 영어, 중국어, 일본어로 상담이 가능합니다. 상담 후 업무 가능 여부와 비용을 안내해 드립니다." },
                { q: "인허가 처리 기간은 얼마나 걸리나요?", a: "업종과 관할 기관에 따라 다릅니다. 식품제조가공업 등록은 통상 2~4주, 화장품 제조업 등록은 3~6주, 기업부설연구소 설립 인정은 4~8주 내외입니다. 구체적인 일정은 상담 시 안내해 드립니다." },
                { q: "외국인도 한국에서 인허가 신청이 가능한가요?", a: "네. 외국인이 대표자인 경우에도 한국 법인 또는 사업자등록을 보유한 경우 인허가 신청이 가능합니다. 외국어 서류의 번역 및 공증도 지원합니다." },
                { q: "사무소 위치는 어디인가요?", a: "서울특별시 중구 퇴계로 324, 3층 성우빌딩에 위치하고 있습니다. 회현역 4호선 인근입니다. 영업시간은 평일 09:30~18:30(한국시간)입니다." },
                { q: "어떤 언어로 상담이 가능한가요?", a: "한국어, 영어, 중국어(보통화), 일본어로 상담이 가능합니다. KakaoTalk, WeChat, LINE, WhatsApp을 통한 메신저 상담도 제공합니다." },
              ].map(({ q, a }, i) => (
                <details key={i} className="rounded-xl border border-slate-200 bg-white p-6 group">
                  <summary className="font-semibold text-slate-900 cursor-pointer list-none flex justify-between items-center">
                    {q}
                    <span className="text-[#f36c24] ml-4 flex-shrink-0">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 leading-relaxed text-sm">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#f36c24] py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-bold text-white">
              상담이 필요하신가요?
            </h2>
            <p className="mt-4 text-lg text-orange-100">
              인허가 관련 궁금한 점이 있으시면 언제든지 문의해 주세요.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-[#f36c24] transition-colors hover:bg-[#ffe6d5]/50"
            >
              상담 문의하기
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
