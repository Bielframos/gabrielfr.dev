"use server"

import { cookies } from "next/headers"

export type Theme = "system" | "light" | "dark"

export async function setThemeCookie(theme: Theme) {
  const cookiesStore = await cookies()
  const oneYear = 365 * 24 * 60 * 60 * 1000
  cookiesStore.set("theme", theme, { expires: Date.now() + oneYear })
}

export async function getTheme(): Promise<Theme | undefined> {
  return (await cookies()).get("theme")?.value as Theme | undefined
}