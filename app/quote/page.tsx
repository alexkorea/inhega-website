import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { QuoteWizard } from "./quote-wizard"

export const metadata: Metadata = {
  title: "견적문의 - 비전행정사사무소",
  description:
    "업종과 상황에 맞는 맞춤 견적을 받아보세요. 카테고리 선택 후 간단한 질문만으로 정확한 견적을 받으실 수 있습니다.",
  alternates: {
    canonical: "https://inhega.co.kr/quote",
  },
  openGraph: {
    title: "견적문의 - 비전행정사사무소",
    description:
      "업종과 상황에 맞는 맞춤 견적을 받아보세요. 카테고리 선택 후 간단한 질문만으로 정확한 견적을 받으실 수 있습니다.",
    url: "https://inhega.co.kr/quote",
    siteName: "비전행정사사무소",
    type: "website",
    images: [{ url: "https://inhega.co.kr/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "견적문의 - 비전행정사사무소",
    description:
      "업종과 상황에 맞는 맞춤 견적을 받아보세요. 카테고리 선택 후 간단한 질문만으로 정확한 견적을 받으실 수 있습니다.",
  },
}

export default function QuotePage() {
  return (
    <>
      <Header />
      <main>
        <PageBreadcrumb items={[{ label: "견적문의", path: "/quote" }]} />
        <section className="bg-slate-50 pt-20">
          <div className="mx-auto max-w-5xl px-4 py-14 text-center">
            <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              맞춤 견적 문의
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              카테고리를 고르고 간단한 질문에 답해주시면, 상황에 맞는 견적과 진행 절차를 안내해 드립니다.
              답변 내용은 사전 검토용으로만 사용되며, 외부에 공개되지 않습니다.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 pb-24">
          <div className="mx-auto max-w-5xl px-4">
            <QuoteWizard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
