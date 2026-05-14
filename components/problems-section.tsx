import { AlertCircle } from "lucide-react"

const problems = [
  {
    title: "Google-Profil unvollständig",
    text: "Unvollständige Profile verlieren täglich lokale Suchanfragen. Potenzielle Kunden finden Konkurrenten schneller.",
  },
  {
    title: "Website lädt langsam",
    text: "Über 3 Sekunden Ladezeit kosten Besucher und schaden dem Google-Ranking spürbar.",
  },
  {
    title: "Kontaktformular funktioniert schlecht",
    text: "Fehlerhafte oder schwer auffindbare Kontaktwege blockieren eingehende Anfragen direkt.",
  },
  {
    title: "Cookie / Datenschutz / BFSG unklar",
    text: "Fehlende oder falsch konfigurierte Hinweise erzeugen rechtliche und organisatorische Unsicherheit.",
  },
  {
    title: "Bewertungen werden nicht genutzt",
    text: "Ohne aktive Bewertungsstrategie verlieren Betriebe Vertrauen und sichtbare Kaufsignale.",
  },
  {
    title: "Büroarbeit kostet zu viel Zeit",
    text: "Wiederkehrende Aufgaben wie Rechnungen, E-Mails und Dokumente lassen sich mit KI deutlich schneller erledigen.",
  },
]

export function ProblemsSection() {
  return (
    <section className="bg-secondary py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance leading-tight">
            Viele Betriebe verlieren online Anfragen, ohne es zu merken.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {problems.map((p) => (
            <div
              key={p.title}
              className="bg-card border border-border rounded-xl p-5 flex flex-col gap-2"
            >
              <div className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-destructive shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-sm font-semibold text-foreground">{p.title}</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
