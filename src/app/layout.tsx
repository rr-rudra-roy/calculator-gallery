import type { Metadata } from "next"
import { SEO } from "@/data/seo"
import ThemeProvider from "@/context/ThemeContext"
import "@/styles/globals.css"
import "@/styles/tailwind.css"

export const metadata: Metadata = {
  title: SEO.title,
  description: SEO.description,

  icons: [
    { rel: "icon", url: "/favicon.ico" },
    {
      rel: "icon",
      sizes: "16x16",
      url: "/favicons/logo-16.png",
    },
    {
      rel: "icon",
      sizes: "32x32",
      url: "/favicons/logo-32.png",
    },
    {
      rel: "icon",
      sizes: "96x96",
      url: "/favicons/logo-96.png",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicons/logo-180.png",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
