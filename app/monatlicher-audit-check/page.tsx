import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CalendarCheck, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Monatlicher Audit-Check | DatenpflegeNord",
  description:
    "Website, Google-Profil, Technik, Bewertungen und offene Digitalaufgaben regelmäßig prüfen lassen. Ab 99 €/Monat.",
}

const bullets = [
  "Monatsbericht zu Website, Technik und Sichtbarkeit",
  "Audit-Historie im DatenpflegeNord Portal",
  "Offene Aufgabenliste mit Statusverfolgung",
  "Kleine Fixes auf Anfrage optional buchbar",
  "Klare Übersicht ohne technischen Aufwand für Sie",
]

export default function MonatlicherAuditCheckPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <CalendarCheck className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <Badge variant="secondary">ab 99 €/Monat</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
                Monatlicher Audit-Check
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wir prüfen Ihre Website, Ihr Google-Profil und Ihre Technik jeden Monat und
                liefern einen klaren Bericht mit offenen Aufgaben — einsehbar im
                DatenpflegeNord Portal.
              </p>
              <ul className="flex flex-col gap-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/kontakt" className="flex items-center gap-2">
                    Audit-Check anfragen <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Monatlich kündbar. Keine Mindestlaufzeit.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
