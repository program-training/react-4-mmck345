import './Header.css'
import { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeContext";
import { UserContext } from "../../Context/UserContext";
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  const themeContext = useContext(ThemeContext);
  const userContext = useContext(UserContext);

  if (!themeContext) return;
  if (!userContext) return;

  return (
    <header>
      <h3>{userContext.user?.name}</h3>
      <ThemeSwitcher/>
    </header>
  );
};

export default Header;
