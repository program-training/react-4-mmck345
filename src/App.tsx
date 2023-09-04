import "./App.css";
import UserContextProvider from "./Context/UserContext";
import ThemeContextProvider from "./Context/ThemeContext";
import TextContextProvider from "./Context/TextContext";

import Grandpa from "./components/Grandpa/Grandpa";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
    <TextContextProvider>
      <UserContextProvider>
        <ThemeContextProvider>
            <Header/>
            <Grandpa/>
            <Main/>
          </ThemeContextProvider>
        </UserContextProvider>
      </TextContextProvider>
    </>
  );
}

export default App;
