import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Datenschutz | DatenpflegeNord",
  description: "Datenschutzerklärung von DatenpflegeNord.",
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">
            Rechtliches
          </p>
          <h1 className="text-3xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>

          <div className="flex flex-col gap-8 text-sm text-foreground leading-relaxed">

            {/* TODO-Banner */}
            <div className="flex flex-col gap-3 rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                TODO — Datenschutzerklärung noch nicht vollständig
              </p>
              <p className="text-amber-800 text-sm leading-relaxed">
                Diese Seite enthält Struktur-Platzhalter. Vor dem Livegang muss eine vollständige
                Datenschutzerklärung durch einen Datenschutzbeauftragten oder geprüften Generator
                erstellt werden. Die folgenden Abschnitte sind inhaltliche Hinweise — kein
                juristisch geprüfter Text.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-base text-foreground">
                1. Verantwortlicher
              </h2>
              <p className="text-muted-foreground">
                TODO: Unternehmensname, Adresse, E-Mail und Telefon des Verantwortlichen
                (identisch mit Impressum).
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-base text-foreground">
                2. Erhobene Daten beim Besuch der Website
              </h2>
              <p className="text-muted-foreground">
                TODO: Beschreibung der beim Seitenaufruf technisch erfassten Daten
                (z. B. IP-Adresse, Browsertyp, Zeitstempel). Angabe des Hosting-Anbieters
                und Rechtsgrundlage (Art. 6 Abs. 1 lit. f DSGVO).
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-base text-foreground">
                3. Kontaktformular
              </h2>
              <p className="text-muted-foreground">
                TODO: Erläuterung welche Daten im Kontaktformular verarbeitet werden,
                wie sie gespeichert werden und wie lange. Rechtsgrundlage angeben
                (Art. 6 Abs. 1 lit. b oder lit. f DSGVO).
              </p>
              <p className="text-muted-foreground">
                Hinweis: Das Kontaktformular ist aktuell noch nicht aktiv angebunden.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-base text-foreground">
                4. Cookies und Tracking
              </h2>
              <p className="text-muted-foreground">
                TODO: Angabe ob und welche Cookies gesetzt werden (technisch notwendige vs.
                optionale). Hinweis auf vorhandene oder geplante Consent-Lösung.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-base text-foreground">
                5. Externe Dienste
              </h2>
              <p className="text-muted-foreground">
                TODO: Auflistung aller eingebundenen externen Dienste (z. B. Google Fonts,
                Analysedienste, CDN) mit Angabe zu Datenweitergabe und Rechtsgrundlage.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-base text-foreground">
                6. Ihre Rechte
              </h2>
              <p className="text-muted-foreground">
                TODO: Hinweis auf Betroffenenrechte gemäß DSGVO: Auskunft, Berichtigung,
                Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch sowie
                Beschwerderecht bei der zuständigen Aufsichtsbehörde.
              </p>
              <p className="text-muted-foreground">
                Zuständige Aufsichtsbehörde für Schleswig-Holstein: Unabhängiges
                Landeszentrum für Datenschutz Schleswig-Holstein (ULD).
              </p>
            </div>

            <div className="border-t border-border pt-6">
              <p className="text-xs text-muted-foreground">
                DatenpflegeNord bietet technische und organisatorische Prüfung,
                Umsetzungshilfe und digitale Prozessunterstützung. Keine Rechtsberatung,
                keine Steuerberatung und keine behördliche Zertifizierung.
              </p>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
