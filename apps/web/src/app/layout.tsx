import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "CC-01 | Empowering Global Workforce Mobility",
  description: "Revolutionary AI-driven workforce mobility platform with Tomoo AI concierge",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
