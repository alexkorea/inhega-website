import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Stats } from "@/components/stats"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Intro />
      <Services />
      <WhyUs />
      <Stats />
      <Footer />
    </main>
  )
}
