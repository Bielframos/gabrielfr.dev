import { getTheme } from "@/lib/actions/theme.actions"
import { Heart } from "lucide-react"
import Navbar from "./navbar"

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const theme = await getTheme()
  return (
    <div className="flex h-full">
      <Navbar userTheme={theme} />
      <div className="flex flex-col flex-1 overflow-x-hidden">
        <main className="flex flex-col flex-1 px-6 py-10 md:py-16 justify-start items-start">
          {children}
        </main>
        <footer className="flex justify-end gap-4 border-t py-4 px-6 text-sm">
          <span className="inline-flex items-center">
            Desenvolvido por mim, com muito <Heart size={18} className="ml-1" />
          </span>
        </footer>
      </div>
    </div>
  )
}
