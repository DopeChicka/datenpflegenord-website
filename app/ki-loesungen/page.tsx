import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  AlertCircle,
  Users,
  Package,
  ChevronDown,
} from "lucide-react"

export const metadata: Metadata = {
  title: "KI-Lösungen für Ihr Unternehmen | DatenpflegeNord",
  description:
    "E-Rechnung, Dokumente, E-Mails, Kundenanfragen und Büroprozesse mit KI vereinfachen. Für Unternehmen in Schleswig-Holstein. Ab 990 €.",
}

const targetGroups = [
  "Betriebe, die auf die E-Rechnungspflicht vorbereitet sein wollen",
  "Unternehmen, die manuell viel Zeit für Dokumentenverarbeitung aufwenden",
  "Büros, die E-Mails und Kundenanfragen kaum noch händeln können",
  "Unternehmer, die KI sinnvoll einsetzen wollen, ohne technische Vorkenntnisse zu haben",
]

const problems = [
  "E-Rechnungspflicht rückt näher — kein klarer Plan, wie der Prozess aussehen soll",
  "Dokumente werden manuell abgelegt, gesucht und weitergeleitet",
  "E-Mail-Eingang kostet unverhältnismäßig viel Zeit",
  "Kundenanfragen kommen über mehrere Kanäle — keine strukturierte Bearbeitung",
  "Es ist unklar, welche KI-Werkzeuge sinnvoll und datenschutzkonform einsetzbar sind",
]

const checks = [
  "Analyse der Büroprozesse: Wo entsteht der meiste manuelle Aufwand?",
  "E-Rechnungsprozess: Aktueller Stand, fehlende Schritte, sinnvolle Vorbereitung",
  "Dokumentenmanagement: Ablage, Suche, Weiterleitung — Automatisierungspotenzial",
  "E-Mail-Bearbeitung: Kategorisierung, Vorbearbeitung und Antwortvorlagen mit KI",
  "Kundenanfragen: Strukturierung, Vorqualifizierung und Routing",
  "KI-Werkzeuge: Welche Lösungen passen, welche sind datenschutzkonform einsetzbar?",
]

const deliverables = [
  "Prozessübersicht: Welche Büroprozesse haben das größte KI-Potenzial",
  "Konkrete Anwendungsfälle mit Handlungsempfehlung je Prozess",
  "Einschätzung zu E-Rechnungspflicht und empfohlenen nächsten Schritten",
  "Liste geeigneter KI-Werkzeuge mit kurzer Bewertung",
]

const steps = [
  {
    num: "01",
    title: "Kurzgespräch zur Prozessaufnahme",
    text: "Wir sprechen kurz über Ihre häufigsten Büroabläufe: Was kostet die meiste Zeit? Welche Prozesse wiederholen sich? Das Gespräch dauert ca. 30 Minuten.",
  },
  {
    num: "02",
    title: "Analyse und Potenzialeinschätzung",
    text: "Wir werten die Informationen aus und prüfen, wo KI realistische Zeitersparnisse bringen kann. Dabei berücksichtigen wir Datenschutz und Praktikabilität.",
  },
  {
    num: "03",
    title: "Prozessübersicht und Übergabe",
    text: "Sie erhalten eine übersichtliche Zusammenfassung der sinnvollsten KI-Anwendungsfälle mit konkreten Empfehlungen — ohne technischen Fachjargon.",
  },
]

const faq = [
  {
    q: "Müssen wir technische Vorkenntnisse mitbringen?",
    a: "Nein. Die Analyse ist für Unternehmen gedacht, die KI praktisch und ohne tiefes IT-Wissen nutzen wollen. Wir erklären alle Empfehlungen verständlich.",
  },
  {
    q: "Was ist mit der E-Rechnungspflicht gemeint?",
    a: "Ab 2025 gilt für B2B-Transaktionen in Deutschland schrittweise die Pflicht zur E-Rechnung im strukturierten Format (ZUGFeRD, XRechnung). Wir helfen dabei, den Prozess zu verstehen und vorzubereiten — keine Steuerberatung.",
  },
  {
    q: "Sind die empfohlenen KI-Werkzeuge datenschutzkonform?",
    a: "Wir empfehlen nur Werkzeuge, die grundsätzlich DSGVO-konform eingesetzt werden können. Die finale Prüfung und Entscheidung liegt beim Unternehmen — keine Rechtsberatung.",
  },
  {
    q: "Setzt ihr die KI-Lösungen auch um?",
    a: "Die KI-Analyse liefert die Übersicht und Empfehlungen. Umsetzungsunterstützung kann auf Anfrage separat vereinbart werden.",
  },
]

export default function KiLoesungenPage() {
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
                <div className="pt-2">
                  <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <Link href="/kontakt" className="flex items-center gap-2">
                      KI-Analyse anfragen <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Unverbindlich. Keine Garantie auf Einsparungen. Keine Steuerberatung.
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
                  Für wen geeignet
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

          {/* What is done */}
          <section className="py-12 md:py-16 border-b border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
                Was analysiert und umgesetzt wird
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
                Jetzt KI-Analyse anfragen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Beschreiben Sie kurz, welche Büroprozesse Sie belasten. Wir melden uns und
                klären, welche KI-Ansätze für Ihr Unternehmen sinnvoll sind.
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
