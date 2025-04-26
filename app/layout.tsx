import type React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans_Thai } from "next/font/google"
import "./globals.css"

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans-thai",
})

export const metadata: Metadata = {
  title: "MWIT Student Committee | Links",
  description: "Official links page for MWIT Student Committee",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={ibmPlexSansThai.className}>{children}</body>
    </html>
  )
}
