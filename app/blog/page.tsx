import type { Metadata } from "next"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "인허가 정보 블로그 - 비전행정사사무소",
  description:
    "인허가 업무에 필요한 유용한 정보와 실무 가이드를 제공합니다.",
}

const blogPosts = [
  {
    title: "식품제조가공업 허가 절차 완벽 가이드",
    excerpt:
      "식품제조가공업 허가를 위해 필요한 서류와 절차, 주의사항을 상세하게 안내합니다.",
    date: "2024.03.15",
    category: "식품 인허가",
  },
  {
    title: "외국인도시민박업 등록 요건과 절차",
    excerpt:
      "외국인 관광객을 위한 도시민박업 등록 시 필요한 요건과 신청 절차를 정리했습니다.",
    date: "2024.03.10",
    category: "관광업 인허가",
  },
  {
    title: "비영리사단법인 설립, 이렇게 준비하세요",
    excerpt:
      "비영리사단법인 설립 허가부터 등기까지 전 과정을 단계별로 설명합니다.",
    date: "2024.03.05",
    category: "법인 설립",
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-20 min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <Image src="/slides/documents.jpg" alt="인허가 정보 블로그" fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative mx-auto max-w-7xl px-6 py-20 text-center text-white w-full">
            <h1 className="text-4xl font-bold md:text-5xl">
              인허가 정보 블로그
            </h1>
            <p className="mt-4 text-lg text-white/80">
              인허가 업무에 필요한 유용한 정보와 실무 가이드를 제공합니다.
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.title}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white transition-shadow hover:shadow-md"
                >
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200" />

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                      {post.category}
                    </span>
                    <h2 className="mt-4 text-xl font-bold text-slate-900">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                      <Calendar className="h-4 w-4" />
                      <time>{post.date}</time>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
