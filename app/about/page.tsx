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

export const metadata: Metadata = {
  title: "회사소개 - 비전행정사사무소",
  description:
    "인허가 업무에 특화된 비전행정사사무소를 소개합니다. 다양한 인허가 분야의 실무 노하우를 갖춘 전문가 팀.",
  alternates: {
    canonical: "https://inhega.co.kr/about",
  },
  openGraph: {
    title: "회사소개 - 비전행정사사무소",
    description:
      "인허가 업무에 특화된 비전행정사사무소를 소개합니다. 다양한 인허가 분야의 실무 노하우를 갖춘 전문가 팀.",
    url: "https://inhega.co.kr/about",
    siteName: "비전행정사사무소",
    type: "website",
    images: [{ url: "https://inhega.co.kr/og-image.png" }],
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

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
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
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
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
                    <p className="text-3xl font-bold text-blue-600">
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
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-50">
                    <item.icon className="h-7 w-7 text-blue-600" />
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
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50">
                    <item.icon className="h-6 w-6 text-blue-600" />
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

        {/* CTA Section */}
        <section className="bg-blue-600 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-3xl font-bold text-white">
              상담이 필요하신가요?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              인허가 관련 궁금한 점이 있으시면 언제든지 문의해 주세요.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
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
