"use client"

import { useTheme } from "./theme-provider"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-card shadow-lg transition-all hover:scale-110 hover:shadow-xl border border-border"
      aria-label="Cambiar tema"
    >
      {theme === "light" ? <Moon className="h-5 w-5 text-foreground" /> : <Sun className="h-5 w-5 text-foreground" />}
    </button>
  )
}
