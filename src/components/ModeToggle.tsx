import * as React from "react"
import { useState,useEffect } from "react"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  
  const [theme, setThemeState] = useState<"theme-light" | "dark">("dark")

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark")
    setThemeState(isDarkMode ? "dark" : "theme-light")
  }, [])

  useEffect(() => {
    const isDark =
      theme === "dark" 
    document.documentElement.classList[isDark ? "add" : "remove"]("dark")
  }, [theme])

  return (
        <Button  className="absolute right-4 top-4" variant="outline" size="icon" onClick={() => setThemeState(theme === "dark" ? "theme-light" : "dark")} >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
    
  )
}

// import * as React from "react"
// import { Moon, Sun } from "lucide-react"
// import { Button } from "@/components/ui/button"

// export function ModeToggle() {
//   const getSystemTheme = () =>
//     window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

//   const [theme, setThemeState] = React.useState<"light" | "dark">(getSystemTheme())

//   React.useEffect(() => {
//     setThemeState(document.documentElement.classList.contains("dark") ? "dark" : "light")
//   }, [])

//   React.useEffect(() => {
//     document.documentElement.classList.toggle("dark", theme === "dark")
//   }, [theme])

//   return (
//     <Button
//       variant="outline"
//       size="icon"
//       onClick={() => setThemeState(theme === "dark" ? "light" : "dark")}
//     >
//       <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
//       <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   )
// }
