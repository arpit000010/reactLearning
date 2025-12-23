import { createContext, useContext } from "react";

// context created
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

// context provided
export const ThemeProvider = ThemeContext.Provider

// context made available to everyone
export default function useTheme(){
    return useContext(ThemeContext)
}