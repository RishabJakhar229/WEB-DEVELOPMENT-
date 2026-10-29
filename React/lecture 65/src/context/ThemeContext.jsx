
import { createContext, useState } from "react";

export let ThemeContext = createContext(null)

export function ThemeProvider({ children }) {

    const [theme, setTheme] = useState("light")

    function updateTheme(){}

    return <ThemeContext value={{theme , setTheme}}>
        {children}
    </ThemeContext>
}