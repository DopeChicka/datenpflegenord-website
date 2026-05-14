"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DomainChecker } from "@/components/domain-checker"
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  BrainCircuit,
  AlertCircle,
  CheckCircle2,
  Circle,
} from "lucide-react"

const trustBadges = [
  { label: "Schleswig-Holstein Fokus" },
  { label: "Website + Google + Technik" },
  { label: "KI für Büroprozesse" },
  { label: "Keine Rechtsberatung" },
  { label: "Klare Maßnahmenliste" },
]

export function HeroSection() {
  return (
    <section className="relative bg-background py-14 md:py-20 lg:py-24 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left: Copy */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <Badge variant="secondary" className="w-fit text-xs font-medium tracking-wide uppercase">
                DatenpflegeNord
              </Badge>
              <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                Ihr digitaler Partner in Schleswig-Holstein
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-balance leading-tight text-foreground">
              Digitale Sichtbarkeit, technische Website-Prüfung und KI-Lösungen für Unternehmen in Schleswig-Holstein.
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed">
              DatenpflegeNord hilft Unternehmen, online besser gefunden zu werden, Websites technisch
              sauberer aufzustellen und Büroprozesse mit KI einfacher zu organisieren.
            </p>

            {/* Claim */}
            <p className="text-base font-semibold text-foreground border-l-2 border-accent pl-3">
              Mehr Sichtbarkeit. Weniger Website-Risiko. Weniger Büroarbeit.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/kontakt">
                  Schnellcheck starten <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#leistungen">Leistungen ansehen</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {trustBadges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 text-xs text-muted-foreground bg-secondary rounded-full px-3 py-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-accent shrink-0" aria-hidden="true" />
                  {b.label}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
              <span>Technische Vorprüfung — keine anwaltliche Rechtsberatung.</span>
            </div>
          </div>

          {/* Right: Dashboard preview card + DomainChecker */}
          <div className="flex flex-col gap-4">
            {/* Compact audit dashboard preview */}
            <div className="bg-card border border-border rounded-2xl p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-block w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
                <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                  Audit-Übersicht
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-amber-700 mb-1">Sichtbarkeit</p>
                  <p className="text-xl font-bold text-amber-600">62 / 100</p>
                  <p className="text-[10px] text-amber-600/70 mt-0.5">Verbesserungsbedarf</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-red-700 mb-1">Technik</p>
                  <p className="text-xl font-bold text-red-600">44 / 100</p>
                  <p className="text-[10px] text-red-600/70 mt-0.5">Kritisch</p>
                </div>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-emerald-700 mb-1">KI-Potenzial</p>
                  <p className="text-xl font-bold text-emerald-600">Hoch</p>
                  <p className="text-[10px] text-emerald-600/70 mt-0.5">3 Prozesse</p>
                </div>
                <div className="bg-secondary border border-border rounded-xl p-3">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground mb-1">Offene Aufgaben</p>
                  <p className="text-xl font-bold text-foreground">7</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Nächster Check: Monatlich</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { label: "Google-Profil unvollständig", type: "warn" },
                  { label: "Ladezeit zu hoch (4,2 s)", type: "error" },
                  { label: "E-Rechnungsprozess automatisierbar", type: "ok" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    {item.type === "error" ? (
                      <AlertCircle className="w-3.5 h-3.5 text-red-500 shrink-0" aria-hidden="true" />
                    ) : item.type === "warn" ? (
                      <Circle className="w-3.5 h-3.5 text-amber-500 shrink-0" aria-hidden="true" />
                    ) : (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" aria-hidden="true" />
                    )}
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Domain Checker */}
            <div id="domain-check" className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <DomainChecker />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
