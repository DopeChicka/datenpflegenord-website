"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemsSection } from "@/components/problems-section"
import { ServiceCardsSection } from "@/components/service-cards-section"
import { ComparisonSection } from "@/components/comparison-section"
import { StepsSection } from "@/components/steps-section"
import { PortalTeaserSection } from "@/components/portal-teaser-section"
import { BranchenRegionCtaSection } from "@/components/branchen-region-cta-section"
import { Footer } from "@/components/footer"
import { NordAuditForm } from "@/components/nordaudit-form"
import { KIProcessForm } from "@/components/ki-process-form"

export default function HomePage() {
  const [nordAuditOpen, setNordAuditOpen] = useState(false)
  const [kiProcessOpen, setKiProcessOpen] = useState(false)

  return (
    <main>
      <Header />
      <HeroSection />
      <ProblemsSection />
      <ServiceCardsSection />
      <ComparisonSection />
      <StepsSection />
      <PortalTeaserSection />
      <BranchenRegionCtaSection />
      <Footer />

      {/* Modals */}
      <NordAuditForm open={nordAuditOpen} onOpenChange={setNordAuditOpen} />
      <KIProcessForm open={kiProcessOpen} onOpenChange={setKiProcessOpen} />
    </main>
  )
}
