import { createContext, useState, useContext } from "react"
import React from "react"

const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    React.useEffect(() => {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return(
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
        {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = () => useContext(ThemeContext)