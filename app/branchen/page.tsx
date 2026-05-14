import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Branchen | DatenpflegeNord",
  description:
    "DatenpflegeNord arbeitet mit lokalen Unternehmen in Schleswig-Holstein: Hotels, Restaurants, Handwerker, Pflegedienste und viele mehr.",
}

const branchen = [
  { name: "Hotels & Ferienwohnungen", text: "Sichtbarkeit bei Google, Bewertungsmanagement und technischer Website-Check." },
  { name: "Restaurants & Cafés", text: "Google-Profil optimieren, Speisekarte einbinden, lokale SEO stärken." },
  { name: "Handwerker", text: "Anfragewege prüfen, Website-Technik verbessern, Angebotsprozesse vereinfachen." },
  { name: "Kosmetik & Friseure", text: "Online-Buchungen, Google-Bewertungen und lokale Auffindbarkeit verbessern." },
  { name: "Pflegedienste", text: "Datenschutz-Basis prüfen, Kontaktprozesse und BFSG-Relevanz klären." },
  { name: "Fahrschulen", text: "Website-Technik, Google-Sichtbarkeit und Anmeldeformulare prüfen." },
  { name: "Autohäuser", text: "Sichtbarkeit für Modelle und Standort, technische Website-Prüfung." },
  { name: "Lokale Shops", text: "Google Shopping, lokale SEO und Ladezeiten verbessern." },
  { name: "Fitnessstudios", text: "Google-Profil, Bewertungen und Online-Buchungsprozesse optimieren." },
  { name: "Hausverwaltungen", text: "Datenschutz-Basis, BFSG-Relevanz und digitale Prozesse prüfen." },
]

export default function BranchenPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8">
              <div className="max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight mb-4">
                  Für lokale Unternehmen in Schleswig-Holstein
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wir kennen die Anforderungen lokaler Betriebe — und helfen dabei, online
                  besser gefunden zu werden und Prozesse effizienter aufzustellen.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {branchen.map((b) => (
                  <div key={b.name} className="bg-card border border-border rounded-xl p-5 flex flex-col gap-2">
                    <p className="text-sm font-semibold text-foreground">{b.name}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/kontakt" className="flex items-center gap-2">
                    Schnellcheck starten <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
