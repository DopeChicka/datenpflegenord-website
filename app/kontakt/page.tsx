"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2 } from "lucide-react"

const topics = [
  "Sichtbarkeits-Check",
  "Technischer Web-Check",
  "KI-Lösungen",
  "Monatlicher Audit-Check",
  "Portal",
  "Sonstiges",
]

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    location: "",
    topic: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <section className="py-14 md:py-20">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            {submitted ? (
              <div className="text-center py-16 flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <h1 className="text-2xl font-bold text-foreground">Vielen Dank!</h1>
                <p className="text-muted-foreground leading-relaxed">
                  Wir melden uns in Kürze bei Ihnen und prüfen, welcher Einstieg am besten passt.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground text-balance leading-tight mb-3">
                    Schnellcheck starten
                  </h1>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Senden Sie Website, Ort und Thema. Wir prüfen, welcher Einstieg sinnvoll ist:
                    Sichtbarkeit, Technik, KI oder monatlicher Audit-Check.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1" htmlFor="name">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Ihr Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1" htmlFor="email">
                      E-Mail <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ihre@email.de"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1" htmlFor="company">
                      Unternehmen
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Name des Unternehmens"
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1" htmlFor="website">
                      Website
                    </label>
                    <Input
                      id="website"
                      name="website"
                      placeholder="z. B. beispiel.de"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1" htmlFor="location">
                      Ort
                    </label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="z. B. Lübeck"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1" htmlFor="topic">
                      Thema
                    </label>
                    <select
                      id="topic"
                      name="topic"
                      value={formData.topic}
                      onChange={handleChange}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Thema auswählen</option>
                      {topics.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-1" htmlFor="message">
                      Nachricht (optional)
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Weitere Informationen..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                    />
                  </div>

                  <p className="text-xs text-muted-foreground border-t pt-3">
                    Keine Rechtsberatung. Keine Steuerberatung. Keine behördliche Zertifizierung.
                  </p>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Anfrage senden
                  </Button>
                </form>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
