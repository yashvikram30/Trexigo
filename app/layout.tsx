import type React from "react"
import type { Metadata } from "next"
import { Poppins, DM_Sans, Space_Grotesk } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "RideGo - Book Your Ride",
  description: "Quick, safe, and reliable rides at your fingertips. Book now with RideGo.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSans.variable} ${spaceGrotesk.variable} font-dm-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
