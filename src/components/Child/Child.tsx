import './Child.css'
import { useContext } from "react";
import { TextContext } from "../../Context/TextContext";
import { ThemeContext } from "../../Context/ThemeContext";

const Child = () => {
  const textContext = useContext(TextContext);
  const themeContext = useContext(ThemeContext);
  if (!textContext) return;
  if (!themeContext) return;
  const { state } = textContext;
  const { stateTheme } = themeContext;
  return (
    <div className={stateTheme}>
      <div className='view-state'>{state}</div>
    </div>
  );
};

export default Child;