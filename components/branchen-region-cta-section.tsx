import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin } from "lucide-react"

const branchen = [
  "Hotels & Ferienwohnungen",
  "Restaurants & Cafés",
  "Handwerker",
  "Kosmetik & Friseure",
  "Pflegedienste",
  "Fahrschulen",
  "Autohäuser",
  "Lokale Shops",
  "Fitnessstudios",
  "Hausverwaltungen",
]

const regionen = [
  "Lübeck",
  "Kiel",
  "Flensburg",
  "Neumünster",
  "Ostholstein",
  "Stormarn",
  "Segeberg",
  "Rendsburg-Eckernförde",
]

export function BranchenRegionCtaSection() {
  return (
    <>
      {/* Branchen */}
      <section className="bg-background py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance leading-tight mb-3">
              Für lokale Unternehmen in Schleswig-Holstein
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {branchen.map((b) => (
              <span
                key={b}
                className="inline-flex items-center text-sm text-foreground bg-secondary border border-border rounded-full px-4 py-1.5"
              >
                {b}
              </span>
            ))}
          </div>
          <Button asChild variant="outline" size="sm">
            <Link href="/branchen" className="flex items-center gap-1.5">
              Alle Branchen ansehen <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Region */}
      <section className="bg-secondary py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground text-balance leading-tight mb-3">
                Fokus auf Schleswig-Holstein
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Wir arbeiten mit Unternehmen aus{" "}
                {regionen.slice(0, -1).join(", ")} und {regionen[regionen.length - 1]} sowie
                dem gesamten Umland.
              </p>
            </div>
            {/* Region card */}
            <div className="bg-card border border-border rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Einsatzgebiet
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {regionen.map((r) => (
                  <span
                    key={r}
                    className="inline-flex items-center text-xs text-foreground bg-secondary border border-border rounded-full px-3 py-1"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy-foreground text-balance leading-tight mb-4">
            Starten Sie mit einem einfachen Schnellcheck.
          </h2>
          <p className="text-base text-navy-foreground/70 leading-relaxed max-w-2xl mx-auto mb-8">
            Senden Sie Website, Ort und Thema. Wir prüfen, welcher Einstieg sinnvoll ist:
            Sichtbarkeit, Technik, KI oder monatlicher Audit-Check.
          </p>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/kontakt" className="flex items-center gap-2">
              Schnellcheck starten <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
          <p className="text-xs text-navy-foreground/40 mt-4">
            Keine Rechtsberatung. Keine Steuerberatung. Keine behördliche Zertifizierung.
          </p>
        </div>
      </section>
    </>
  )
}
