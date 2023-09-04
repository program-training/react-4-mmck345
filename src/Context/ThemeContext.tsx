import { createContext, useState } from "react";


type ThemeModes = "dark" | "light";


type ThemeModesContextType = {
    stateTheme: ThemeModes;
    setStateTheme: React.Dispatch<React.SetStateAction<ThemeModes>>;
}

export const ThemeContext = createContext<ThemeModesContextType | null>(null);

type ThemeContextProps = {
    children: React.ReactNode;
}

export default function ThemeContextProvider(props: ThemeContextProps) {
    const [stateTheme, setStateTheme] = useState<ThemeModes>("dark")

  return (
    <ThemeContext.Provider value={{stateTheme, setStateTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}
