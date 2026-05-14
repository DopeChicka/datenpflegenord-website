import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Technischer Web-Check | DatenpflegeNord",
  description:
    "Website-Technik, Mobile, Ladezeit, BFSG-Relevanz, Datenschutz-Basis, Cookie/Tracking und Barrierefreiheit prüfen. Ab 790 €.",
}

const bullets = [
  "Ladezeit, Performance und Core Web Vitals prüfen",
  "Mobile-Darstellung und Responsive Design bewerten",
  "Cookie-Banner und Datenschutz-Basis prüfen",
  "BFSG-Relevanz und Barrierefreiheits-Hinweise",
  "Ampelbericht mit klaren Handlungsempfehlungen",
]

export default function TechnischerWebCheckPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <Badge variant="secondary">ab 790 €</Badge>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
                Technischer Web-Check
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Wir prüfen die technische Qualität Ihrer Website: Ladezeit, Mobile, Datenschutz-Basis,
                BFSG-Relevanz und Barrierefreiheit. Sie erhalten einen Ampelbericht mit
                konkreten Verbesserungshinweisen.
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
                    Web-Check anfragen <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Keine Rechtsberatung. Keine behördliche Zertifizierung. Technische Vorprüfung.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
