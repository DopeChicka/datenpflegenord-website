import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ShieldCheck, BrainCircuit, CalendarCheck, ArrowRight, CheckCircle2 } from "lucide-react"

type ServiceCard = {
  icon: React.ElementType
  title: string
  text: string
  bullets: string[]
  price: string
  href: string
}

const services: ServiceCard[] = [
  {
    icon: Search,
    title: "Sichtbarkeits-Check",
    text: "Google-Profil, lokale SEO, Bewertungen, Website-Auffindbarkeit und Anfragewege prüfen.",
    bullets: ["Google-Unternehmensprofil", "Lokale SEO", "Bewertungen", "Anfragewege"],
    price: "ab 490 €",
    href: "/sichtbarkeits-check",
  },
  {
    icon: ShieldCheck,
    title: "Technischer Web-Check",
    text: "Website-Technik, Mobile, Ladezeit, BFSG-Relevanz, Datenschutz-Basis, Cookie/Tracking und Barrierefreiheit prüfen.",
    bullets: ["Technik & Mobile", "Cookie/Datenschutz-Basis", "BFSG-Relevanz", "Barrierefreiheit"],
    price: "ab 790 €",
    href: "/technischer-web-check",
  },
  {
    icon: BrainCircuit,
    title: "KI-Lösungen für Ihr Unternehmen",
    text: "E-Rechnung, Dokumente, E-Mails, Kundenanfragen und Büroprozesse mit KI vereinfachen.",
    bullets: ["E-Rechnung", "Dokumente", "E-Mails", "Büroprozesse"],
    price: "ab 990 €",
    href: "/ki-loesungen",
  },
  {
    icon: CalendarCheck,
    title: "Monatlicher Audit-Check",
    text: "Website, Google-Profil, Technik, Bewertungen und offene Digitalaufgaben regelmäßig prüfen lassen.",
    bullets: ["Monatsbericht", "Audit-Historie", "Aufgabenliste", "Kleine Fixes optional"],
    price: "ab 99 €/Monat",
    href: "/monatlicher-audit-check",
  },
]

export function ServiceCardsSection() {
  return (
    <section id="leistungen" className="bg-background py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance leading-tight mb-3">
            Wobei sollen wir zuerst helfen?
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Wählen Sie den passenden Einstieg. Jeder Check liefert eine klare Auswertung und
            konkrete nächste Schritte.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {services.map(({ icon: Icon, title, text, bullets, price, href }) => (
            <div
              key={title}
              className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <Badge variant="secondary" className="text-xs shrink-0">{price}</Badge>
              </div>

              <div>
                <h3 className="font-bold text-foreground mb-1.5 text-balance">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
              </div>

              <ul className="flex flex-col gap-1.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                    {b}
                  </li>
                ))}
              </ul>

              <Button asChild variant="outline" size="sm" className="mt-auto w-fit">
                <Link href={href} className="flex items-center gap-1.5">
                  Ansehen <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
