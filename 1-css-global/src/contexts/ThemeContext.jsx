import { createContext, useState, useContext } from "react"
import React from "react"

const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light")

    const toggleTheme = () => 
        setTheme((prev) => (prev === "light" ? "dark" : "light"))

    // Atualiza o atributo data-theme do body quando o tema muda
    React.useEffect(() => {
        document.body.setAttribute('data-theme', theme)
    }, [theme])

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)