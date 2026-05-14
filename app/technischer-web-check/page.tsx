import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Users,
  Package,
  ChevronDown,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Technischer Web-Check | DatenpflegeNord",
  description:
    "Website-Technik, Mobile, Ladezeit, BFSG-Relevanz, Datenschutz-Basis, Cookie/Tracking und Barrierefreiheit prüfen. Für Unternehmen in Schleswig-Holstein. Ab 790 €.",
}

const targetGroups = [
  "Unternehmen, die nicht wissen, ob ihre Website technisch auf dem aktuellen Stand ist",
  "Betriebe, die auf Barrierefreiheitspflicht (BFSG) vorbereitet sein wollen",
  "Unternehmen, die Bedenken wegen Cookie-Banner oder Datenschutz-Basis haben",
  "Jeder, der eine klare externe Einschätzung seiner Website-Technik sucht",
]

const problems = [
  "Website lädt langsam — besonders auf Mobilgeräten",
  "Kein oder fehlerhafter Cookie-Banner, fehlende Datenschutz-Hinweise",
  "BFSG-Relevanz unklar: Ist die Website betroffen? Was fehlt?",
  "Mobile Darstellung fehlerhaft oder veraltet",
  "Fehlende HTTPS-Verschlüsselung oder veraltete Sicherheitskonfiguration",
  "Unklare technische Struktur: Weiterleitung, kaputte Links, Fehlerseiten",
]

const checks = [
  "Ladezeit und Core Web Vitals: Messen und Bewerten auf Desktop und Mobile",
  "Mobile-Darstellung und Responsive Design",
  "HTTPS und grundlegende Sicherheitseinstellungen",
  "Cookie-Banner und Einwilligungspflicht: vorhanden, korrekt konfiguriert?",
  "Datenschutz-Basis: Hinweis auf Datenschutzerklärung, Impressum erreichbar?",
  "BFSG-Relevanz: Ist die Website betroffen? Erste Einschätzung zu Kontrastproblemen, Tastaturnavigation, Alt-Texten",
  "Technische Struktur: Weiterleitungen, kaputte Links, Fehlerseitenverhalten",
]

const deliverables = [
  "Ampelbericht: Grün / Gelb / Rot je Prüfbereich",
  "Klare Handlungsempfehlungen je Befund mit Priorisierung",
  "BFSG-Relevanz-Einschätzung: betroffen oder nicht, was wäre nötig",
  "Hinweis auf externe Stellen oder nächste sinnvolle Schritte",
]

const steps = [
  {
    num: "01",
    title: "Anfrage mit Domain",
    text: "Sie senden uns Ihre Website-Domain. Keine Zugangsdaten notwendig — die Prüfung erfolgt von außen.",
  },
  {
    num: "02",
    title: "Technische Analyse",
    text: "Wir prüfen Ladezeit, Mobile, HTTPS, Cookie-Banner, Datenschutz-Basis und BFSG-Relevanz — systematisch anhand eines strukturierten Prüfrasters.",
  },
  {
    num: "03",
    title: "Ampelbericht und Übergabe",
    text: "Sie erhalten einen übersichtlichen Ampelbericht mit priorisierten Maßnahmen. Auf Wunsch besprechen wir die Ergebnisse kurz per Telefon.",
  },
]

const faq = [
  {
    q: "Brauchen Sie Zugang zu meiner Website oder meinem CMS?",
    a: "Nein. Die Prüfung erfolgt ausschließlich von außen, ohne Login, ohne Zugang zum Backend.",
  },
  {
    q: "Gilt die BFSG-Pflicht auch für mein Unternehmen?",
    a: "Ab dem 28. Juni 2025 gilt das Barrierefreiheitsstärkungsgesetz (BFSG) für neue Produkte und Dienstleistungen, ab 2030 auch für bestehende. Ob Ihre Website betroffen ist, hängt von Ihrer Unternehmensform und -größe ab. Wir geben eine erste Einschätzung — keine behördliche Zertifizierung.",
  },
  {
    q: "Was ist der Unterschied zum Sichtbarkeits-Check?",
    a: "Der Technische Web-Check prüft die technische Qualität Ihrer Website: Ladezeit, Mobile, BFSG und Datenschutz. Der Sichtbarkeits-Check prüft, wie gut Ihr Unternehmen lokal bei Google gefunden wird.",
  },
  {
    q: "Führen Sie auch Korrekturen durch?",
    a: "Der Web-Check liefert die Auswertung und Empfehlungen. Umsetzungsunterstützung kann separat gebucht werden.",
  },
]

export default function TechnischerWebCheckPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <article>

          {/* Hero */}
          <section className="py-14 md:py-20 border-b border-border">
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
                  Wir prüfen die technische Qualität Ihrer Website: Ladezeit, Mobile,
                  Datenschutz-Basis, BFSG-Relevanz und Barrierefreiheit. Sie erhalten einen
                  Ampelbericht mit konkreten Verbesserungshinweisen.
                </p>
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

          {/* For whom */}
          <section className="py-12 md:py-16 border-b border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-5">
                <Users className="w-4 h-4 text-accent" aria-hidden="true" />
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Fur wen geeignet
                </h2>
              </div>
              <ul className="flex flex-col gap-3">
                {targetGroups.map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Typical problems */}
          <section className="py-12 md:py-16 border-b border-border bg-secondary/40">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Typische Probleme
              </h2>
              <ul className="flex flex-col gap-3">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-foreground">
                    <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* What is checked */}
          <section className="py-12 md:py-16 border-b border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Was wird geprüft
              </h2>
              <ul className="flex flex-col gap-3">
                {checks.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Deliverables */}
          <section className="py-12 md:py-16 border-b border-border bg-secondary/40">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-2 mb-5">
                <Package className="w-4 h-4 text-accent" aria-hidden="true" />
                <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Was Sie erhalten
                </h2>
              </div>
              <ul className="flex flex-col gap-3">
                {deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3 steps */}
          <section className="py-12 md:py-16 border-b border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                Ablauf in 3 Schritten
              </h2>
              <ol className="flex flex-col gap-6">
                {steps.map((s) => (
                  <li key={s.num} className="flex gap-4">
                    <span className="text-2xl font-bold text-border shrink-0 w-8 leading-none pt-0.5">
                      {s.num}
                    </span>
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-foreground text-sm">{s.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-12 md:py-16 border-b border-border bg-secondary/40">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-8">
                Häufige Fragen
              </h2>
              <dl className="flex flex-col gap-6">
                {faq.map((item) => (
                  <div key={item.q} className="flex flex-col gap-2">
                    <dt className="font-semibold text-sm text-foreground flex items-start gap-2">
                      <ChevronDown className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      {item.q}
                    </dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed pl-6">
                      {item.a}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          {/* CTA */}
          <section className="py-14 md:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-5">
              <h2 className="text-2xl font-bold text-foreground text-balance">
                Jetzt Technischen Web-Check anfragen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Senden Sie Ihre Domain. Wir prüfen Ihre Website technisch und liefern einen
                klaren Ampelbericht mit Handlungsempfehlungen.
              </p>
              <div>
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/kontakt" className="flex items-center gap-2">
                    Anfrage senden <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

        </article>
      </main>
      <Footer />
    </>
  )
}
