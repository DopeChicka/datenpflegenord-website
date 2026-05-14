import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, History, ListChecks, CheckSquare, FileText } from "lucide-react"

const portalItems = [
  { icon: History, label: "Audit-Historie" },
  { icon: ListChecks, label: "Offene Aufgaben" },
  { icon: CheckSquare, label: "Erledigte Maßnahmen" },
  { icon: FileText, label: "Monatsbericht" },
]

export function PortalTeaserSection() {
  return (
    <section className="bg-secondary py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Copy */}
          <div className="flex flex-col gap-5">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-accent mb-2">
                DatenpflegeNord Portal
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance leading-tight mb-3">
                Alle Ergebnisse an einem Ort.
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Im DatenpflegeNord Portal sehen Kunden Audit-Historie, Statusberichte, offene
                Aufgaben und Monatsberichte — übersichtlich und jederzeit abrufbar.
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="w-fit">
              <Link href="/portal" className="flex items-center gap-1.5">
                Portal ansehen <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>

          {/* Portal UI preview */}
          <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                Kundenportal — Übersicht
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {portalItems.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 bg-secondary border border-border rounded-xl px-4 py-3"
                >
                  <Icon className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                  <span className="text-sm text-foreground font-medium">{label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 border-t border-border pt-4 flex items-center justify-between">
              <span className="text-xs text-muted-foreground">Letzter Bericht: Mai 2025</span>
              <span className="text-xs font-semibold text-accent">3 offene Aufgaben</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
