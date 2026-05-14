import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DatenpflegeNord | Website, Sichtbarkeit und KI für Schleswig-Holstein',
  description:
    'DatenpflegeNord hilft Unternehmen in Schleswig-Holstein mit Sichtbarkeits-Check, technischem Web-Check, KI-Lösungen und monatlichem Audit-Check.',
  generator: 'v0.app',
  keywords: 'Sichtbarkeits-Check, technischer Web-Check, KI-Lösungen, monatlicher Audit-Check, Website Schleswig-Holstein, Google Sichtbarkeit, BFSG, Barrierefreiheit, KI Büroprozesse, Lübeck, Kiel, Flensburg',
}

export const viewport = {
  themeColor: '#1a2e52',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
