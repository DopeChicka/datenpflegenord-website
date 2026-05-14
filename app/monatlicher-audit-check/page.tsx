import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  AlertCircle,
  Users,
  Package,
  ChevronDown,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Monatlicher Audit-Check | DatenpflegeNord",
  description:
    "Website, Google-Profil, Technik, Bewertungen und offene Digitalaufgaben regelmäßig prüfen lassen. Für Unternehmen in Schleswig-Holstein. Ab 99 €/Monat.",
}

const targetGroups = [
  "Unternehmen, die ihre Website und Google-Sichtbarkeit dauerhaft im Blick haben wollen",
  "Betriebe ohne eigene IT-Abteilung, die trotzdem regelmäßige Prüfungen brauchen",
  "Unternehmen nach einem Sichtbarkeits- oder Web-Check, die Fortschritte verfolgen wollen",
  "Jeder, der eine klare monatliche Übersicht ohne eigenen Zeitaufwand schätzt",
]

const problems = [
  "Einmalige Prüfungen werden schnell veraltet — niemand kümmert sich um Folgemassnahmen",
  "Technische Probleme auf der Website werden erst spät bemerkt",
  "Google-Profil verändert sich, neue Bewertungen kommen — kein Überblick",
  "Offene Aufgaben aus früheren Prüfungen werden nicht systematisch abgearbeitet",
  "Kein regelmäßiger Ansprechpartner für digitale Themen",
]

const checks = [
  "Website-Technik: Ladezeit, Fehlerseiten, Zertifikatsstatus, Mobile",
  "Google-Unternehmensprofil: Vollständigkeit, neue Bewertungen, Änderungen",
  "Sichtbarkeit: Veränderungen in lokalen Suchergebnissen",
  "Offene Aufgaben aus Vormonaten: Statusverfolgung und Erinnerung",
  "Kleine sichtbare Veränderungen: neue Wettbewerber, Profiländerungen, Plattformänderungen",
]

const deliverables = [
  "Monatlicher Bericht mit Ampelbewertung je Prüfbereich",
  "Offene Aufgabenliste mit aktuellem Status",
  "Audit-Historie im DatenpflegeNord Portal einsehbar",
  "Hinweis auf neue Probleme oder Handlungsbedarf",
  "Auf Wunsch: kurzes monatliches Abstimmungsgespräch",
]

const steps = [
  {
    num: "01",
    title: "Einmalige Einrichtung",
    text: "Nach Ihrer Anfrage erfassen wir Domain, Standort, Google-Profil-Link und Prüfschwerpunkte. Sie erhalten Zugang zum DatenpflegeNord Portal.",
  },
  {
    num: "02",
    title: "Monatliche Prüfung",
    text: "Jeden Monat führen wir die vereinbarte Prüfung durch: Website-Technik, Google-Sichtbarkeit, Bewertungen und offene Aufgaben. Kein Aufwand auf Ihrer Seite.",
  },
  {
    num: "03",
    title: "Bericht und Einsicht im Portal",
    text: "Sie erhalten Ihren Monatsbericht und können jederzeit die Audit-Historie im Portal einsehen. Bei dringendem Handlungsbedarf melden wir uns direkt.",
  },
]

const faq = [
  {
    q: "Wie lange ist die Mindestlaufzeit?",
    a: "Es gibt keine Mindestlaufzeit. Der Audit-Check ist monatlich kündbar.",
  },
  {
    q: "Was ist das DatenpflegeNord Portal?",
    a: "Das Portal ist ein digitaler Kundenbereich, in dem Sie Ihre Audit-Historie, offene Aufgaben und Berichte einsehen können. Der Zugang wird nach Vertragsstart eingerichtet.",
  },
  {
    q: "Kann der Audit-Check einen Sichtbarkeits- oder Web-Check ersetzen?",
    a: "Nein. Der monatliche Audit-Check ist ein laufender Kontrollcheck — kein einmaliger Tief-Check. Für eine gründliche Erstanalyse empfehlen wir, mit dem Sichtbarkeits-Check oder dem Technischen Web-Check zu starten.",
  },
  {
    q: "Werden auch kleine Korrekturen durchgeführt?",
    a: "Kleine Fixes können auf Anfrage optional hinzugebucht werden. Der Audit-Check selbst umfasst die Prüfung und den Bericht.",
  },
]

export default function MonatlicherAuditCheckPage() {
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
                Was wird monatlich geprüft
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
                Jetzt Audit-Check anfragen
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Senden Sie Ihre Domain und Ihren Standort. Wir richten den monatlichen
                Audit-Check ein und liefern den ersten Bericht innerhalb weniger Tage.
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
