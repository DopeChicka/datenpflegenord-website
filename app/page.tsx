"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProductsSection } from "@/components/products-section"
import { ProblemsSection } from "@/components/problems-section"
import { SolutionSection } from "@/components/solution-section"
import { WebpflichtFunnel } from "@/components/webpflicht-funnel"
import { PruefbereicheSection } from "@/components/pruefbereiche-section"
import { BetriebskiProcess } from "@/components/betriebski-process"
import { PortalSection } from "@/components/portal-section"
import { PackagesSection } from "@/components/packages-section"
import { TrustSection } from "@/components/trust-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { WebPflichtForm } from "@/components/webpflicht-form"
import { BetriebsKIForm } from "@/components/betriebski-form"

export default function HomePage() {
  const [webpflichtOpen, setWebpflichtOpen] = useState(false)
  const [betriebskiOpen, setBetriebskiOpen] = useState(false)

  return (
    <main>
      <Header />
      <HeroSection />
      <ProductsSection />
      <ProblemsSection />
      <SolutionSection />
      <WebpflichtFunnel />
      <PruefbereicheSection />
      <BetriebskiProcess />
      <PortalSection />
      <PackagesSection onRequestClick={() => setWebpflichtOpen(true)} />
      <TrustSection />
      <FaqSection />
      <CtaSection onWebpflichtClick={() => setWebpflichtOpen(true)} onBetriebskiClick={() => setBetriebskiOpen(true)} />
      <Footer />

      {/* Modals */}
      <WebPflichtForm open={webpflichtOpen} onOpenChange={setWebpflichtOpen} />
      <BetriebsKIForm open={betriebskiOpen} onOpenChange={setBetriebskiOpen} />
    </main>
  )
}
