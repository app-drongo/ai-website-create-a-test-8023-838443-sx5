import Hero from '@/components/sections/home/Hero'
export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      <section id="cta">
        <Cta />
      </section>
      <section id="features">
        <Features />
      </section>
      </section>
      
    </>
  )
}
import Cta from '@/components/sections/home/Cta'
import Features from '@/components/sections/home/Features'