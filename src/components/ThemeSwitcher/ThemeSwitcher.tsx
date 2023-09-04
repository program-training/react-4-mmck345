import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";

type ThemeModes = "dark" | "light";

const ThemeSwitcher = () => {
const themeContext = useContext(ThemeContext);
if (!themeContext) return;
const {stateTheme, setStateTheme} = themeContext;



  return (
    <button type="button" onClick={() => {
      let newTheme: ThemeModes = (stateTheme === "dark") ? "light" : "dark";
      setStateTheme(newTheme)
    }}>Theme Switcher</button>
  )
};

export default ThemeSwitcher;
