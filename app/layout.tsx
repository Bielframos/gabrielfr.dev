import { GoogleAnalytics } from "@/lib/components/modules"
import { OG_IMAGES } from "@/lib/utils/variables"
import { Geist, Space_Mono } from "next/font/google"
import type { Metadata } from "next"
import "./globals.css"
import { getTheme } from "@/lib/actions/theme.actions"
import cn from "@/lib/utils/cn"

export const metadata: Metadata = {
  title: "Gabriel França",
  description: "Um lugar para compartilhar experiências.",
  keywords: ["blog pessoal", "Gabriel França"],
  openGraph: {
    images: OG_IMAGES.home,
    url: "https://www.gabrielfr.dev",
  },
}

const geist = Geist({
  subsets: ["latin"],
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = await getTheme()
  return (
    <html lang="pt-BR" className={cn(theme, "h-svh md:h-[unset]")}>
      <body
        className={cn(
          geist.className,
          spaceMono.className,
          "bg-white-12 dark:bg-black-12 text-black-12 dark:text-white-12 w-full h-svh md:h-[unset]"
        )}
      >
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}

