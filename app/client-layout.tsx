"use client"

import type React from "react"

import { Suspense } from "react"
import { Analytics } from "@vercel/analytics/next"

function SearchParamsHandler() {
  // Pokud byla nějaká logika se search params, přesunu ji sem
  // Momentálně se search params nepoužívají, takže můžu hook odstranit
  return null
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {children}
        <SearchParamsHandler />
      </Suspense>
      <Analytics />
    </>
  )
}
