const steps = [
  { number: "01", title: "Website oder Betrieb einreichen", text: "Domain, Ort und Thema kurz mitteilen — per Formular oder E-Mail." },
  { number: "02", title: "Thema auswählen", text: "Sichtbarkeit, Technik, KI oder monatlicher Audit-Check — je nach Bedarf." },
  { number: "03", title: "Check erhalten", text: "Klare Auswertung mit Ampelstatus, Findings und priorisierten Empfehlungen." },
  { number: "04", title: "Maßnahmen priorisieren", text: "Gemeinsam entscheiden, was zuerst angegangen wird — ohne Fachchinesisch." },
  { number: "05", title: "Umsetzung oder Monatscheck starten", text: "Einmalige Umsetzung oder laufende Begleitung im monatlichen Audit-Check." },
]

export function StepsSection() {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-balance leading-tight">
            So läuft es ab
          </h2>
        </div>

        {/* Horizontal on desktop, vertical on mobile */}
        <div className="grid sm:grid-cols-5 gap-6">
          {steps.map((step, i) => (
            <div key={step.number} className="flex sm:flex-col gap-4 sm:gap-3 relative">
              {/* Connector line between steps — desktop only */}
              {i < steps.length - 1 && (
                <div
                  className="hidden sm:block absolute top-5 left-[calc(50%+20px)] right-0 h-px bg-border"
                  aria-hidden="true"
                />
              )}
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0 text-primary-foreground text-xs font-bold z-10">
                {step.number}
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-sm font-semibold text-foreground text-balance">{step.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
