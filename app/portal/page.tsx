import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, History, ListChecks, CheckSquare, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "DatenpflegeNord Portal | Kundenbereich",
  description:
    "Im DatenpflegeNord Portal sehen Kunden Audit-Historie, Statusberichte, offene Aufgaben und Monatsberichte.",
}

const features = [
  { icon: History, label: "Audit-Historie", text: "Alle vergangenen Prüfberichte auf einen Blick." },
  { icon: ListChecks, label: "Offene Aufgaben", text: "Priorisierte Aufgabenliste nach dem letzten Check." },
  { icon: CheckSquare, label: "Erledigte Maßnahmen", text: "Nachvollziehbarer Fortschritt über Zeit." },
  { icon: FileText, label: "Monatsbericht", text: "Kompakter Statusbericht mit allen relevanten Kennzahlen." },
]

export default function PortalPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-14 md:py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-accent">
                  Kundenbereich
                </p>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight">
                  DatenpflegeNord Portal
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Im Portal sehen Kunden ihre Audit-Ergebnisse, offene Aufgaben und
                  Monatsberichte — übersichtlich und jederzeit abrufbar.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {features.map(({ icon: Icon, label, text }) => (
                  <div key={label} className="bg-card border border-border rounded-xl p-5 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/kontakt" className="flex items-center gap-2">
                    Portal-Zugang anfragen <ArrowRight className="w-4 h-4" />
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
