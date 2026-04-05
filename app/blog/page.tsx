import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Tag } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageBreadcrumb } from "@/components/page-breadcrumb"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "인허가 정보 블로그 - 비전행정사사무소",
  description:
    "인허가 업무에 필요한 유용한 정보와 실무 가이드를 제공합니다. 식품인허가, 용도변경, 법인설립 등 실무 노하우.",
  alternates: {
    canonical: "https://inhega.co.kr/blog",
  },
  openGraph: {
    title: "인허가 정보 블로그 - 비전행정사사무소",
    description:
      "인허가 업무에 필요한 유용한 정보와 실무 가이드를 제공합니다.",
    url: "https://inhega.co.kr/blog",
    siteName: "비전행정사사무소",
    type: "website",
    images: [{ url: "https://inhega.co.kr/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "인허가 정보 블로그 - 비전행정사사무소",
    description:
      "인허가 업무에 필요한 유용한 정보와 실무 가이드를 제공합니다.",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <Header />
      <main>
        <PageBreadcrumb items={[{ label: "블로그", path: "/blog" }]} />
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
              인허가 업무에 필요한 유용한 정보와 실무 가이드를 제공합니다
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 md:py-24 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        <Tag className="h-3 w-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-3">
                      <Calendar className="h-4 w-4" />
                      <time>{post.date}</time>
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-slate-500 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
