import React from "react";
import { store } from "../redux/configStore";
import { Provider } from "react-redux";

const themes = {
  dark: {
    backgroundColor: "black",
    dropShadow: "drop-shadow-[0_35px_35px_rgba(250,250,250,0.5)]",
    color: "white",
    textColorActiveWithHoverAdmin: "text-blue-500 hover:text-blue-600",
    textColorInactiveWithoutHoverAdmin: "text-gray-700 hover:text-gray-500",
  },
  light: {
    backgroundColor: "white",
    dropShadow: "drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]",
    color: "black",
    textColorActiveWithHoverAdmin: "text-blue-500 hover:text-blue-600",
    textColorInactiveWithoutHoverAdmin: "text-gray-700 hover:text-gray-500",
  },
};

const initialState = {
  dark: true,
  theme: themes.light,
  toggle: () => {},
};
const ThemeContext = React.createContext(initialState);

function ThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false); // Default theme is light

  // On mount, read the preferred theme from the persistence
  React.useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";
    setDark(isDark);
  }, [dark]);

  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark;
    localStorage.setItem("dark", JSON.stringify(isDark));
    setDark(isDark);
  };

  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle }}>
      <Provider store={store}>{children}</Provider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
