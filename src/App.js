import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronUp } from "@fortawesome/free-solid-svg-icons";
import ToggleTheme from "./components/theme/ToggleTheme";
import Content from "./components/content/Content";
import { useState, createContext } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  window.onscroll = function () {
    scrollFunction();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      document.getElementById("scroll__up").style.display = "block";
    } else {
      document.getElementById("scroll__up").style.display = "none";
    }
  };

  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="wrapper" id={theme}>
        <ToggleTheme theme={theme} onclick={toggleTheme} />
        <div className="container">
          <Content />
          <FontAwesomeIcon
            icon={faCircleChevronUp}
            id="scroll__up"
            onClick={topFunction}
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
