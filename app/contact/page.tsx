import type { Metadata } from "next"
import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "./contact-form"

export const metadata: Metadata = {
  title: "상담문의 - 비전행정사사무소",
  description:
    "인허가 업무 관련 무료 상담을 신청하세요. 업종과 상황에 맞는 맞춤형 행정 지원을 제공합니다.",
  alternates: {
    canonical: "https://inhega.co.kr/contact",
  },
  openGraph: {
    title: "상담문의 - 비전행정사사무소",
    description:
      "인허가 업무 관련 무료 상담을 신청하세요. 업종과 상황에 맞는 맞춤형 행정 지원을 제공합니다.",
    url: "https://inhega.co.kr/contact",
    siteName: "비전행정사사무소",
    type: "website",
    images: [{ url: "https://inhega.co.kr/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "상담문의 - 비전행정사사무소",
    description:
      "인허가 업무 관련 무료 상담을 신청하세요. 업종과 상황에 맞는 맞춤형 행정 지원을 제공합니다.",
  },
}

const contactInfo = [
  {
    icon: Phone,
    title: "전화 문의",
    primary: "02-363-2251",
    secondary: "평일 09:00 - 18:00",
  },
  {
    icon: Mail,
    title: "이메일 문의",
    primary: "5000meter@gmail.com",
    secondary: "상세한 문의 환영",
  },
  {
    icon: MapPin,
    title: "오시는 길",
    primary: "서울특별시 중구 퇴계로 324, 3층",
    secondary: "(성우빌딩)",
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-20 min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/slides/consultation.jpg" alt="상담문의" fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-20 text-center text-white w-full">
            <h1 className="text-4xl font-bold md:text-5xl">상담문의</h1>
            <p className="mt-4 text-lg text-white/80">
              업종과 상황에 맞는 맞춤형 행정 지원을 제공합니다
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Left: Contact Form */}
              <ContactForm />

              {/* Right: Contact Info */}
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-50">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-slate-800">{item.primary}</p>
                        <p className="text-sm text-slate-500">
                          {item.secondary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* KakaoTalk */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-50">
                      <MessageCircle className="h-6 w-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        카카오톡 상담
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        카카오톡으로 간편하게 문의하세요.
                      </p>
                      <button className="mt-3 rounded-lg bg-yellow-400 px-6 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-yellow-500">
                        카카오톡 문의
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <h2 className="text-2xl font-bold text-slate-900">
              방문 상담도 환영합니다
            </h2>
            <p className="mt-4 text-slate-600">
              서울특별시 중구 퇴계로 324, 3층 (성우빌딩)
            </p>
            <p className="mt-2 text-sm text-slate-500">
              방문 전 전화 예약을 부탁드립니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
