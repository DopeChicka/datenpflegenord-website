"use client"

import { useState } from "react"
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UIState, ScanResult } from "@/lib/quick-check-types"
import { QuickCheckError, quickCheck } from "@/lib/nordaudit-api"
import { QuickCheckResultCard } from "@/components/quick-check/quick-check-result-card"
import { QuickCheckErrorState } from "@/components/quick-check/quick-check-error-state"
import { QuickCheckLoadingState } from "@/components/quick-check/quick-check-loading-state"
import { QuickCheckMissingConfigState } from "@/components/quick-check/quick-check-missing-config-state"

function validateDomain(value: string): boolean {
  const clean = value.replace(/^https?:\/\//, "").replace(/\/$/, "")
  return /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i.test(clean)
}

export function DomainChecker() {
  const [domain, setDomain] = useState("")
  const [state, setState] = useState<UIState>("idle")
  const [result, setResult] = useState<ScanResult | null>(null)
  const [errorMessage, setErrorMessage] = useState("")

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
      const data = await quickCheck(trimmed)
      setResult(data)
      setState("result")
    } catch (error) {
      if (error instanceof QuickCheckError && error.code === "missing-config") {
        setState("missing-config")
        return
      }

      const fallbackMessage =
        "Die Prüfung konnte nicht abgeschlossen werden. Bitte versuchen Sie es erneut."
      setErrorMessage(error instanceof Error ? error.message || fallbackMessage : fallbackMessage)
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

  return (
    <div className="w-full">
      {/* Label row */}
      <div className="flex items-center gap-2 mb-1">
        <span
          className="inline-block w-2 h-2 rounded-full bg-accent shrink-0"
          aria-hidden="true"
        />
        <span className="text-[10px] font-semibold uppercase tracking-widest text-accent">
          NordAudit Portal
        </span>
      </div>
      <p className="text-base font-semibold text-foreground mb-1">
        BFSG Schnellcheck - Website automatisiert prüfen
      </p>
      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
        Technische Vorprüfung für Barrierefreiheit, Technik, Datenschutz-Hinweise und SEO.
      </p>

      {/* Input row */}
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
              Prüfe...
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
        Automatisierte Vorprüfung - keine Rechtsberatung, keine behördliche Zertifizierung.
      </p>

      {/* State panels */}
      {state === "loading" && <QuickCheckLoadingState domain={domain} />}
      {state === "missing-config" && <QuickCheckMissingConfigState />}
      {state === "error" && <QuickCheckErrorState message={errorMessage} />}
      {state === "result" && result && <QuickCheckResultCard result={result} />}
    </div>
  )
}
