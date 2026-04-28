import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/structured-data"
import HeroSection from "@/components/HeroSection"
import WhyUsSection from "@/components/WhyUsSection"
import ServicesSection from "@/components/ServicesSection"
import ProcessSection from "@/components/ProcessSection"
import StatsSection from "@/components/StatsSection"
import TeamSection from "@/components/TeamSection"
import MessengerSection from "@/components/MessengerSection"
import FAQSection from "@/components/FAQSection"
import CTASection from "@/components/CTASection"

export const metadata: Metadata = {
  title: "비전행정사사무소 - 인허가 전문 행정사사무소",
  description:
    "인허가 업무 전문 행정사사무소. 국제물류주선업, 환전업, 식품제조가공업, 건축물 용도변경 등 다양한 업종의 허가·등록·인증을 전문적으로 지원합니다.",
  alternates: {
    canonical: "https://inhega.co.kr",
  },
  openGraph: {
    title: "비전행정사사무소 - 인허가 전문 행정사사무소",
    description:
      "인허가 업무 전문 행정사사무소. 국제물류주선업, 환전업, 식품제조가공업, 건축물 용도변경 등 다양한 업종의 허가·등록·인증을 전문적으로 지원합니다.",
    url: "https://inhega.co.kr",
    siteName: "비전행정사사무소",
    type: "website",
    images: [{ url: "https://inhega.co.kr/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "비전행정사사무소 - 인허가 전문 행정사사무소",
    description:
      "인허가 업무 전문 행정사사무소. 다양한 업종의 허가·등록·인증을 전문적으로 지원합니다.",
  },
}

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <Header />
      <HeroSection />
      <WhyUsSection />
      <ServicesSection />
      <ProcessSection />
      <StatsSection />
      <TeamSection />
      <MessengerSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  )
}
