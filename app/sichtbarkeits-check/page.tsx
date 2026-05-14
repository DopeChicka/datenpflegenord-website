import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Sichtbarkeits-Check | DatenpflegeNord",
  description:
    "Google-Profil, lokale SEO, Bewertungen, Website-Auffindbarkeit und Anfragewege prüfen. Ab 490 €.",
}

const bullets = [
  "Google-Unternehmensprofil analysieren und optimieren",
  "Lokale SEO-Situation bewerten",
  "Bewertungsstrategie und Bewertungsanzahl prüfen",
  "Anfragewege und Kontaktmöglichkeiten prüfen",
  "Klare Maßnahmenliste mit Prioritäten",
]

export default function SichtbarkeitsCheckPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <Search className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <Badge variant="secondary">ab 490 €</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
                Sichtbarkeits-Check
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wir prüfen, wie gut Ihr Unternehmen lokal gefunden wird: Google-Profil, SEO,
                Bewertungen und alle Anfragewege. Sie erhalten eine klare Auswertung mit
                priorisierten Sofortmaßnahmen.
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
                    Sichtbarkeits-Check anfragen <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Keine Rechtsberatung. Technische und strukturelle Vorprüfung.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
