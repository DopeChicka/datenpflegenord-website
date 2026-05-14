import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, BrainCircuit, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "KI-Lösungen für Ihr Unternehmen | DatenpflegeNord",
  description:
    "E-Rechnung, Dokumente, E-Mails, Kundenanfragen und Büroprozesse mit KI vereinfachen. Ab 990 €.",
}

const bullets = [
  "E-Rechnung automatisiert erstellen und verarbeiten",
  "Dokumente strukturieren und ablegen",
  "E-Mails und Kundenanfragen mit KI vorbearbeiten",
  "Büroprozesse analysieren und vereinfachen",
  "Konkrete Anwendungsfälle und Prozessübersicht",
]

export default function KiLoesungenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <BrainCircuit className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <Badge variant="secondary">ab 990 €</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
                KI-Lösungen für Ihr Unternehmen
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wir analysieren Ihre Büroprozesse und zeigen, wo KI Zeit spart: E-Rechnung,
                Dokumente, E-Mails, Kundenanfragen. Sie erhalten eine Prozessübersicht mit
                konkreten KI-Anwendungsfällen.
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
                    KI-Analyse anfragen <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Unverbindlich. Keine Garantie auf Einsparungen.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
