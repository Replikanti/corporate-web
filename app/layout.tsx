import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import ClientLayout from "./client-layout"

export const metadata: Metadata = {
  title: "Replikanti - Automatizace procesů přes WhatsApp",
  description:
    "Profesionální automatizace obchodních procesů pomocí WhatsApp. Zvyšte efektivitu vašeho podnikání s našimi pokročilými řešeními.",
  generator: "Replikanti",
  keywords: "automatizace, WhatsApp, procesy, podnikání, efektivita, Česká republika",
  authors: [{ name: "Replikanti" }],
  openGraph: {
    title: "Replikanti - Automatizace procesů přes WhatsApp",
    description: "Profesionální automatizace obchodních procesů pomocí WhatsApp",
    type: "website",
    locale: "cs_CZ",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
