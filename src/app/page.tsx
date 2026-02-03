import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Mission from '@/components/Mission'
import WhatWeDo from '@/components/WhatWeDo'
import Impact from '@/components/Impact'
import HowToHelp from '@/components/HowToHelp'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Mission />
      <WhatWeDo />
      <Impact />
      <HowToHelp />
      <Footer />
    </main>
  )
}
