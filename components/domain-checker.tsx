"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import {
  Loader2,
  AlertCircle,
  ShieldCheck,
  Gauge,
  Globe,
  FileSearch,
  CheckCircle2,
  XCircle,
  Info,
  TriangleAlert,
  ArrowRight,
  Settings2,
} from "lucide-react"

// ─── API response types ──────────────────────────────────────────────────────

type Severity = "critical" | "serious" | "moderate" | "minor" | "info"
type CheckStatus = "pass" | "warning" | "fail" | "info"

interface FindingItem {
  id: string
  severity: Severity
  title: string
  description: string
  category: "accessibility" | "technical" | "privacy" | "seo"
}

interface CheckArea {
  id: "accessibility" | "technical" | "privacy" | "seo"
  label: string
  score: number
  status: CheckStatus
  summary: string
}

interface ScanSummary {
  critical: number
  serious: number
  moderate: number
  minor: number
  info: number
}

interface ScanResult {
  status: "ok" | "error"
  inputUrl: string
  normalizedUrl: string
  scannedAt: string
  summary: ScanSummary
  score: number
  checks: CheckArea[]
  findings: FindingItem[]
  disclaimer: string
}

// ─── UI state ────────────────────────────────────────────────────────────────

type UIState = "idle" | "loading" | "result" | "error" | "missing-config"

// ─── Mock data (replace with real API call) ──────────────────────────────────

function getMockResult(domain: string): ScanResult {
  const normalized = domain.replace(/^https?:\/\//, "").replace(/\/$/, "")
  return {
    status: "ok",
    inputUrl: domain,
    normalizedUrl: normalized,
    scannedAt: new Date().toISOString(),
    score: 54,
    summary: { critical: 2, serious: 3, moderate: 4, minor: 2, info: 1 },
    checks: [
      {
        id: "accessibility",
        label: "Barrierefreiheit",
        score: 42,
        status: "fail",
        summary: "Mögliche Auffälligkeiten bei Alt-Texten und Kontrastverhältnissen erkannt.",
      },
      {
        id: "technical",
        label: "Technik",
        score: 71,
        status: "warning",
        summary: "HTTPS aktiv. Verbesserungspotenzial bei Ladezeiten und HTTP-Headern.",
      },
      {
        id: "privacy",
        label: "Datenschutz-Hinweise",
        score: 48,
        status: "warning",
        summary: "Hinweise zu Drittanbieter-Einbindungen und Cookie-Einwilligung.",
      },
      {
        id: "seo",
        label: "SEO-Grundlagen",
        score: 65,
        status: "warning",
        summary: "Meta-Titel und Beschreibungen vorhanden, strukturierte Daten fehlen.",
      },
    ],
    findings: [
      {
        id: "a11y-alt",
        severity: "critical",
        category: "accessibility",
        title: "Fehlende Alt-Texte bei Bildern",
        description: "Mehrere Bilder ohne beschreibenden Alt-Text erkannt. Screenreader können diese Inhalte nicht erfassen.",
      },
      {
        id: "a11y-contrast",
        severity: "serious",
        category: "accessibility",
        title: "Mögliche Kontrastprobleme",
        description: "Einige Text-Hintergrund-Kombinationen unterschreiten ggf. die WCAG-Mindestanforderungen.",
      },
      {
        id: "privacy-consent",
        severity: "serious",
        category: "privacy",
        title: "Cookie-Einwilligung prüfen",
        description: "Tracking-Elemente erkannt. Einwilligungsmechanismus sollte auf Vollständigkeit geprüft werden.",
      },
      {
        id: "tech-headers",
        severity: "moderate",
        category: "technical",
        title: "Sicherheits-Header unvollständig",
        description: "HTTP-Sicherheits-Header wie CSP oder X-Frame-Options nicht vollständig gesetzt.",
      },
      {
        id: "seo-structured",
        severity: "minor",
        category: "seo",
        title: "Strukturierte Daten fehlen",
        description: "Schema.org-Markup nicht erkannt. Kann die Auffindbarkeit in Suchmaschinen einschränken.",
      },
    ],
    disclaimer:
      "Diese automatisierte Vorprüfung liefert technische Hinweise auf mögliche Auffälligkeiten. Sie ersetzt keine manuelle Barrierefreiheitsprüfung, keine Rechtsberatung und stellt keine behördliche Zertifizierung dar.",
  }
}

// ─── Helper components ───────────────────────────────────────────────────────

const checkAreaIcons: Record<string, React.ElementType> = {
  accessibility: ShieldCheck,
  technical: Gauge,
  privacy: Globe,
  seo: FileSearch,
}

const severityConfig: Record<Severity, { label: string; color: string; icon: React.ElementType }> = {
  critical: { label: "Kritisch", color: "text-destructive", icon: XCircle },
  serious: { label: "Erheblich", color: "text-orange-600", icon: TriangleAlert },
  moderate: { label: "Moderat", color: "text-amber-600", icon: AlertCircle },
  minor: { label: "Gering", color: "text-muted-foreground", icon: Info },
  info: { label: "Info", color: "text-accent", icon: Info },
}

const statusConfig: Record<CheckStatus, { label: string; badgeVariant: "destructive" | "secondary" | "outline"; scoreColor: string }> = {
  fail: { label: "Auffälligkeiten", badgeVariant: "destructive", scoreColor: "bg-destructive" },
  warning: { label: "Hinweise", badgeVariant: "secondary", scoreColor: "bg-amber-500" },
  pass: { label: "Unauffällig", badgeVariant: "outline", scoreColor: "bg-accent" },
  info: { label: "Info", badgeVariant: "outline", scoreColor: "bg-muted" },
}

function ScoreRing({ score }: { score: number }) {
  const color = score >= 70 ? "text-accent" : score >= 45 ? "text-amber-500" : "text-destructive"
  return (
    <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full border-4 border-border bg-background shrink-0">
      <span className={`text-2xl font-bold tabular-nums ${color}`}>{score}</span>
      <span className="text-[10px] text-muted-foreground uppercase tracking-wide">/100</span>
    </div>
  )
}

function SummaryPill({ count, label, color }: { count: number; label: string; color: string }) {
  if (count === 0) return null
  return (
    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full border ${color}`}>
      <span className="tabular-nums">{count}</span> {label}
    </span>
  )
}

// ─── Main component ──────────────────────────────────────────────────────────

export function DomainChecker() {
  const [domain, setDomain] = useState("")
  const [state, setState] = useState<UIState>("idle")
  const [result, setResult] = useState<ScanResult | null>(null)
  const [errorMessage, setErrorMessage] = useState("")

  const validateDomain = (value: string): boolean => {
    const clean = value.replace(/^https?:\/\//, "").replace(/\/$/, "")
    return /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(clean)
  }

  const handleCheck = async () => {
    const trimmed = domain.trim()
    setErrorMessage("")

    if (!trimmed) {
      setErrorMessage("Bitte geben Sie eine Domain ein.")
      return
    }
    if (!validateDomain(trimmed)) {
      setErrorMessage("Ungültige Domain. Beispiel: beispiel.de")
      return
    }

    setState("loading")
    setResult(null)

    try {
      // Placeholder: replace with real API call when ready
      // const res = await fetch(`/api/domain-check?url=${encodeURIComponent(trimmed)}`)
      // if (res.status === 503) { setState("missing-config"); return }
      // if (!res.ok) throw new Error(await res.text())
      // const data: ScanResult = await res.json()

      await new Promise((r) => setTimeout(r, 2200))
      const data = getMockResult(trimmed)
      setResult(data)
      setState("result")
    } catch {
      setErrorMessage("Die Prüfung konnte nicht abgeschlossen werden. Bitte versuchen Sie es erneut.")
      setState("error")
    }
  }

  const handleReset = () => {
    setState("idle")
    setResult(null)
    setDomain("")
    setErrorMessage("")
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && state !== "loading") handleCheck()
  }

  // ── Render ──

  return (
    <div className="w-full">
      {/* Label row */}
      <div className="flex items-center gap-2 mb-1">
        <span className="inline-block w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
          NordAudit Portal
        </span>
      </div>
      <p className="text-base font-semibold text-foreground mb-1">
        BFSG Schnellcheck — Website automatisiert prüfen
      </p>
      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
        Technische Vorprüfung für Barrierefreiheit, Technik, Datenschutz-Hinweise und SEO.
      </p>

      {/* Input */}
      <div className="flex flex-col sm:flex-row gap-2 mb-2">
        <Input
          type="text"
          placeholder="z. B. beispiel.de"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={state === "loading"}
          className="flex-1 text-sm"
          aria-label="Domain eingeben"
        />
        <Button
          onClick={state === "result" ? handleReset : handleCheck}
          disabled={state === "loading"}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-5 shrink-0"
        >
          {state === "loading" ? (
            <>
              <Loader2 className="mr-2 w-4 h-4 animate-spin" aria-hidden="true" />
              Prüfe…
            </>
          ) : state === "result" ? (
            "Neu prüfen"
          ) : (
            "Sofort prüfen"
          )}
        </Button>
      </div>

      {errorMessage && (
        <p className="text-destructive text-sm mb-2" role="alert">
          {errorMessage}
        </p>
      )}

      <p className="text-[11px] text-muted-foreground leading-relaxed mb-5">
        Automatisierte Vorprüfung — keine Rechtsberatung, keine behördliche Zertifizierung.
      </p>

      {/* ── Loading ── */}
      {state === "loading" && (
        <Card>
          <CardContent className="py-10 flex flex-col items-center gap-3 text-center">
            <Loader2 className="w-8 h-8 text-accent animate-spin" aria-hidden="true" />
            <p className="text-sm font-medium text-foreground">Prüfung läuft…</p>
            <p className="text-xs text-muted-foreground">
              Wir analysieren technische Auffälligkeiten auf <span className="font-medium">{domain}</span>.
            </p>
          </CardContent>
        </Card>
      )}

      {/* ── Missing API config ── */}
      {state === "missing-config" && (
        <Alert>
          <Settings2 className="w-4 h-4" aria-hidden="true" />
          <AlertDescription className="text-sm">
            Der Prüfdienst ist aktuell nicht konfiguriert. Bitte kontaktieren Sie uns direkt.
          </AlertDescription>
        </Alert>
      )}

      {/* ── Error ── */}
      {state === "error" && (
        <Alert variant="destructive">
          <AlertCircle className="w-4 h-4" aria-hidden="true" />
          <AlertDescription className="text-sm">{errorMessage}</AlertDescription>
        </Alert>
      )}

      {/* ── Result ── */}
      {state === "result" && result && (
        <div className="flex flex-col gap-4">
          {/* Header card */}
          <Card>
            <CardContent className="pt-5 pb-5">
              <div className="flex items-start gap-4">
                <ScoreRing score={result.score} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">Geprüfte Domain</p>
                  <p className="text-sm font-semibold text-foreground truncate mb-1">
                    {result.normalizedUrl}
                  </p>
                  <p className="text-[11px] text-muted-foreground mb-3">
                    Scan:{" "}
                    {new Date(result.scannedAt).toLocaleString("de-DE", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}{" "}
                    Uhr
                  </p>
                  {/* Summary pills */}
                  <div className="flex flex-wrap gap-1.5">
                    <SummaryPill
                      count={result.summary.critical}
                      label="Kritisch"
                      color="border-destructive/30 text-destructive bg-destructive/5"
                    />
                    <SummaryPill
                      count={result.summary.serious}
                      label="Erheblich"
                      color="border-orange-300 text-orange-700 bg-orange-50"
                    />
                    <SummaryPill
                      count={result.summary.moderate}
                      label="Moderat"
                      color="border-amber-300 text-amber-700 bg-amber-50"
                    />
                    <SummaryPill
                      count={result.summary.minor}
                      label="Gering"
                      color="border-border text-muted-foreground bg-secondary"
                    />
                    {result.summary.info > 0 && (
                      <SummaryPill
                        count={result.summary.info}
                        label="Info"
                        color="border-accent/30 text-accent bg-accent/5"
                      />
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Four check areas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {result.checks.map((check) => {
              const Icon = checkAreaIcons[check.id] ?? ShieldCheck
              const sc = statusConfig[check.status]
              return (
                <Card key={check.id} className="overflow-hidden">
                  <CardContent className="pt-4 pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-1.5">
                        <Icon className="w-3.5 h-3.5 text-accent shrink-0" aria-hidden="true" />
                        <span className="text-xs font-semibold text-foreground">{check.label}</span>
                      </div>
                      <Badge variant={sc.badgeVariant} className="text-[10px] px-1.5 py-0">
                        {sc.label}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <Progress
                        value={check.score}
                        className="h-1.5 flex-1"
                      />
                      <span className="text-xs tabular-nums text-muted-foreground w-7 text-right">
                        {check.score}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-relaxed">
                      {check.summary}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Findings (max 5) */}
          <div>
            <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
              Mögliche Auffälligkeiten
            </p>
            <div className="flex flex-col gap-2">
              {result.findings.slice(0, 5).map((f) => {
                const sev = severityConfig[f.severity]
                const SevIcon = sev.icon
                return (
                  <div
                    key={f.id}
                    className="flex gap-3 p-3 rounded-lg border border-border bg-background text-sm"
                  >
                    <SevIcon className={`w-4 h-4 shrink-0 mt-0.5 ${sev.color}`} aria-hidden="true" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="font-medium text-foreground text-xs">{f.title}</span>
                        <span className={`text-[10px] font-semibold uppercase tracking-wide ${sev.color}`}>
                          {sev.label}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="flex gap-2 p-3 rounded-lg bg-secondary border border-border">
            <Info className="w-3.5 h-3.5 text-muted-foreground shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-[11px] text-muted-foreground leading-relaxed">{result.disclaimer}</p>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-2 pt-1">
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
              onClick={() =>
                document.getElementById("pakete")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Barrierefreiheits-Audit anfragen
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
            <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
              Manuelle Prüfung empfohlen. Automatisierte Hinweise ersetzen keine fachkundige Begutachtung.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
