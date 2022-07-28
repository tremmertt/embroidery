import React from "react";
import { store } from "../redux/configStore";
import { Provider } from "react-redux";

// const colors = ["#7551ff"];

const themes = {
  dark: {
    backgroundColor: "#111c44",
    backgroundColorMint: "#0b1437",
    color: "white",
    colorMint: "#6d6f75",
    dropShadow: "drop-shadow-[0_0px_0px_rgba(250,250,250,0.5)]",
    textColorActiveWithHoverAdmin: "font-extrabold text-[#fff]",
    textColorInactiveWithoutHoverAdmin: "font-normal hover:font-semibold text-gray-500 hover:text-gray-300 ",
    backgroundColorWithHover: "bg-[#111c44] hover:bg-[#152254]",
  },
  light: {
    backgroundColor: "white",
    backgroundColorMint: "#f4f7fe",
    color: "#1b254b",
    colorMint: "#6d6f75",
    dropShadow: "drop-shadow-[0_0px_0px_rgba(0,0,0,0.25)]",
    textColorActiveWithHoverAdmin: "font-extrabold text-[#1b254b]",
    textColorInactiveWithoutHoverAdmin: "font-normal hover:font-semibold text-[#6d6f75] hover:text-[#1b254b] ",
    backgroundColorWithHover: "bg-[#f4f7fe] hover:bg-[#e3e6ef]",
  },
};

const initialState = {
  dark: true,
  theme: themes.light,
  direction: "rtl",
  toggle: () => {},
};
const ThemeCustomContext = React.createContext(initialState);

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
    <ThemeCustomContext.Provider value={{ theme, dark, toggle }}>
      <Provider store={store}>{children}</Provider>
    </ThemeCustomContext.Provider>
  );
}

export { ThemeProvider, ThemeCustomContext };
