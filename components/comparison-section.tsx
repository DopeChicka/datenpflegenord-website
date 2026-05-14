import Link from "next/link"
import { ArrowRight } from "lucide-react"

const rows = [
  {
    goal: "Besser bei Google gefunden werden",
    service: "Sichtbarkeits-Check",
    href: "/sichtbarkeits-check",
    result: "Google- und Website-Auswertung mit Sofortmaßnahmen",
  },
  {
    goal: "Website technisch prüfen lassen",
    service: "Technischer Web-Check",
    href: "/technischer-web-check",
    result: "Ampelbericht zu Technik, Datenschutz-Basis und BFSG-Relevanz",
  },
  {
    goal: "Büroarbeit reduzieren",
    service: "KI-Lösungen für Ihr Unternehmen",
    href: "/ki-loesungen",
    result: "Prozessübersicht und konkrete KI-Anwendungsfälle",
  },
  {
    goal: "Regelmäßig kontrollieren lassen",
    service: "Monatlicher Audit-Check",
    href: "/monatlicher-audit-check",
    result: "Monatsbericht und Aufgabenstatus im DatenpflegeNord Portal",
  },
]

export function ComparisonSection() {
  return (
    <section className="bg-secondary py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance leading-tight">
            Welcher Check passt zu Ihnen?
          </h2>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary">
                <th className="text-left px-5 py-3 font-semibold text-muted-foreground w-1/3">Ihr Ziel</th>
                <th className="text-left px-5 py-3 font-semibold text-muted-foreground w-1/3">Passender Einstieg</th>
                <th className="text-left px-5 py-3 font-semibold text-muted-foreground w-1/3">Ergebnis</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.goal}
                  className={`border-b border-border last:border-0 ${i % 2 === 1 ? "bg-secondary/40" : ""}`}
                >
                  <td className="px-5 py-4 text-foreground">{row.goal}</td>
                  <td className="px-5 py-4">
                    <Link
                      href={row.href}
                      className="font-medium text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {row.service}
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </td>
                  <td className="px-5 py-4 text-muted-foreground">{row.result}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden flex flex-col gap-4">
          {rows.map((row) => (
            <div key={row.goal} className="bg-card border border-border rounded-xl p-4 flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Ihr Ziel</p>
              <p className="text-sm font-medium text-foreground">{row.goal}</p>
              <div className="border-t border-border pt-2 flex flex-col gap-1">
                <Link
                  href={row.href}
                  className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1"
                >
                  {row.service} <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <p className="text-sm text-muted-foreground">{row.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
