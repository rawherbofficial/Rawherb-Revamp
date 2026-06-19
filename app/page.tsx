import { Navbar, Footer }                                              from '@/components/layout'
import { Hero, Marquee, Story, Products, Process, Testimonials, Newsletter } from '@/components/sections'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Story />
      <Products />
      <Process />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  )
}
