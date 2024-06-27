"use client"
import React, { createContext, useContext, useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/useMediaQuery"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState<Theme>("light") // Default theme
  const preferredTheme = useMediaQuery("(prefers-color-scheme: dark)")
    ? "dark"
    : "light"

  useEffect(() => {
    // Check local storage for saved theme preference
    const storedTheme = localStorage.getItem("theme")

    if (storedTheme) {
      setTheme(storedTheme as Theme)
    } else {
      // If theme is not saved in local storage.
      // Check user's preferred color scheme
      setTheme(preferredTheme as Theme)
      localStorage.setItem("theme", preferredTheme)
    }
  }, [preferredTheme])

  useEffect(()=>{
    // change local storage theme value if theme changed
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"))
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    </>
  )
}
