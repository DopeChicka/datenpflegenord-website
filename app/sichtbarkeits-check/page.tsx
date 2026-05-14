import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Search,
  CheckCircle2,
  AlertCircle,
  Users,
  Package,
  ChevronDown,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Sichtbarkeits-Check | DatenpflegeNord",
  description:
    "Google-Profil, lokale SEO, Bewertungen, Website-Auffindbarkeit und Anfragewege prüfen. Für Unternehmen in Schleswig-Holstein. Ab 490 €.",
}

const targetGroups = [
  "Lokale Dienstleister, die in ihrer Region besser gefunden werden möchten",
  "Unternehmen, deren Google-Profil unvollständig oder veraltet ist",
  "Betriebe mit wenigen oder gar keinen Online-Bewertungen",
  "Firmen, die nicht wissen, ob ihre Website überhaupt lokal sichtbar ist",
]

const problems = [
  "Google-Unternehmensprofil unvollständig, ungeprüft oder falsch konfiguriert",
  "Keine oder zu wenige Bewertungen auf Google und anderen Plattformen",
  "Website wird bei lokalen Suchanfragen nicht auf der ersten Seite angezeigt",
  "Anfragewege wie Telefon, E-Mail oder Kontaktformular funktionieren nicht korrekt",
  "Öffnungszeiten, Adresse oder Leistungen sind online falsch oder veraltet",
]

const checks = [
  "Google-Unternehmensprofil: Vollständigkeit, Kategorien, Fotos, Öffnungszeiten",
  "Lokale SEO-Situation: Sichtbarkeit bei relevanten regionalen Suchanfragen",
  "Bewertungsanzahl und Reaktion auf Bewertungen",
  "NAP-Konsistenz: Name, Adresse und Telefon auf allen Plattformen einheitlich",
  "Anfragewege: Telefon, E-Mail, Kontaktformular, Buchungslinks",
  "Website-Auffindbarkeit: Ladezeit-Eindruck, Mobildarstellung, grundlegende SEO-Signale",
]

const deliverables = [
  "Schriftliche Auswertung zum Stand der lokalen Sichtbarkeit",
  "Bewertete Checkliste: was funktioniert, was fehlt, was dringend ist",
  "Priorisierte Sofortmaßnahmen mit konkreter Handlungsanleitung",
  "Empfehlung: welcher nächste Schritt sinnvoll ist",
]

const steps = [
  {
    num: "01",
    title: "Anfrage und Kurzgespräch",
    text: "Sie senden Ihre Website-Domain und Ihren Standort. Bei Bedarf sprechen wir kurz per Telefon oder E-Mail, um Fokus und Branche zu verstehen.",
  },
  {
    num: "02",
    title: "Analyse und Prüfung",
    text: "Wir prüfen Google-Profil, lokale Suchergebnisse, Bewertungsstand, NAP-Konsistenz und Anfragewege — systematisch und ohne Zugang zu Ihren Accounts notwendig.",
  },
  {
    num: "03",
    title: "Auswertung und Übergabe",
    text: "Sie erhalten eine klare, schriftliche Auswertung mit priorisierten Maßnahmen. Kein Fachjargon, keine unverständliche Tabelle — nur klare Handlungsempfehlungen.",
  },
]

const faq = [
  {
    q: "Brauchen Sie Zugang zu meinen Accounts?",
    a: "Nein. Die Prüfung erfolgt von außen auf Basis öffentlich zugänglicher Informationen. Sie müssen uns keinen Zugang zu Google, Ihrer Website oder anderen Plattformen geben.",
  },
  {
    q: "Wie lange dauert die Auswertung?",
    a: "In der Regel erhalten Sie Ihre Auswertung innerhalb von 3–5 Werktagen nach Ihrer Anfrage.",
  },
  {
    q: "Was ist der Unterschied zum Technischen Web-Check?",
    a: "Der Sichtbarkeits-Check fokussiert auf Google-Profil, lokale Auffindbarkeit und Bewertungen. Der Technische Web-Check prüft die technische Qualität Ihrer Website: Ladezeit, Mobile, BFSG-Relevanz und Datenschutz-Basis.",
  },
  {
    q: "Gilt das auch für Handwerksbetriebe und kleine Dienstleister?",
    a: "Ja. Der Sichtbarkeits-Check ist besonders für lokale Betriebe ausgelegt, die ohne eigene Marketingabteilung online besser gefunden werden wollen.",
  },
]

export default function SichtbarkeitsCheckPage() {
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
                    <Search className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <Badge variant="secondary">ab 490 €</Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
                  Sichtbarkeits-Check
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Wir prüfen, wie gut Ihr Unternehmen lokal gefunden wird: Google-Profil, lokale
                  Suchergebnisse, Bewertungen und alle Anfragewege. Sie erhalten eine klare
                  Auswertung mit priorisierten Sofortmaßnahmen.
                </p>
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
                Jetzt Sichtbarkeits-Check anfragen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Senden Sie Ihre Domain und Ihren Standort. Wir prüfen und melden uns in Kürze
                mit einem Angebot und ersten Einschätzungen.
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
