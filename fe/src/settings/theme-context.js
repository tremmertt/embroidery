import React from "react";
import { store } from "../redux/configStore";
import { Provider } from "react-redux";

// const colors = ["#7551ff"];

const themes = {
  // dark: {
  //   backgroundColor: "#111c44",
  //   backgroundColorMint: "#111c44",
  //   backgroundMainColor: "#111c44",
  //   color: "white",
  //   colorMain: "white",
  //   colorMint: "#6d6f75",
  //   dropShadow: "drop-shadow-[0_0px_0px_rgba(250,250,250,0.5)]",
  //   textColorActiveWithHoverAdmin: "font-extrabold text-[#fff]",
  //   textColorInactiveWithoutHoverAdmin: "font-normal hover:font-semibold text-gray-500 hover:text-gray-300 ",
  //   backgroundColorWithHover: "bg-[#111c44] hover:bg-[#152254]",
  //   buttonWidthPrimary: 144,
  //   buttonHeightPrimary: 48,
  //   textFieldWidthPrimary: 144,
  //   textFieldHeightPrimary: 48,
  // },
  // light: {
  //   backgroundColor: "white",
  //   backgroundColorMint: "#f4f7fe",
  //   backgroundMainColor: "#7f1d1d",
  //   colorMain: "white",
  //   color: "#1b254b",
  //   colorMint: "#f19c79",
  //   dropShadow: "drop-shadow-[0_0px_0px_rgba(0,0,0,0.25)]",
  //   textColorActiveWithHoverAdmin: "font-extrabold text-[#1b254b]",
  //   textColorInactiveWithoutHoverAdmin: "font-normal hover:font-semibold text-[#6d6f75] hover:text-[#1b254b] ",
  //   backgroundColorWithHover: "bg-[#f4f7fe] hover:bg-[#e3e6ef]",
  //   buttonWidthPrimary: 144,
  //   buttonHeightPrimary: 48,
  //   textFieldWidthPrimary: 144,
  //   textFieldHeightPrimary: 48,
  // },

  lightV2: {
    primaryTextColor: "#E94D30",
    primaryBackgroundColor: "#fff",
    subColor1: "#fff",
    subColor2: "#262626",
    fontSize12: "12px",
    fontSize14: "14px",
    fontSize16: "16px",
    fontSize20: "20px",
    fontSize24: "24px",
    fontSize28: "28px",
    fontSize42: "42px",

    backgroundColor: "white",
    backgroundColorMint: "#f4f7fe",
    backgroundMainColor: "#7f1d1d",
    colorMain: "white",
    color: "#1b254b",
    colorMint: "#f19c79",
    dropShadow: "drop-shadow-[0_0px_0px_rgba(0,0,0,0.25)]",
    textColorActiveWithHoverAdmin: "font-extrabold text-[#1b254b]",
    textColorInactiveWithoutHoverAdmin: "font-normal hover:font-semibold text-[#6d6f75] hover:text-[#1b254b] ",
    backgroundColorWithHover: "bg-[#f4f7fe] hover:bg-[#e3e6ef]",
    buttonWidthPrimary: 144,
    buttonHeightPrimary: 48,
    textFieldWidthPrimary: 144,
    textFieldHeightPrimary: 48,
  },
  // red: {
  //   backgroundColor: "white",
  //   backgroundColorMint: "#9A0007",
  //   backgroundMainColor: "#7f1d1d",
  //   color: "#fff",
  //   colorMain: "#fff",
  //   colorMint: "#6d6f75",
  //   dropShadow: "drop-shadow-[0_0px_0px_rgba(0,0,0,0.25)]",
  //   textColorActiveWithHoverAdmin: "font-extrabold text-[#1b254b]",
  //   textColorInactiveWithoutHoverAdmin: "font-normal hover:font-semibold text-[#6d6f75] hover:text-[#1b254b] ",
  //   backgroundColorWithHover: "bg-[#f4f7fe] hover:bg-[#e3e6ef]",
  //   borderColor: "#000",
  //   buttonWidthPrimary: 144,
  //   buttonHeightPrimary: 48,
  //   textFieldWidthPrimary: 144,
  //   textFieldHeightPrimary: 48,
  // },
};

const initialState = {
  dark: true,
  theme: themes.lightV2,
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

  const theme = dark ? themes.lightV2 : themes.lightV2;

  return (
    <ThemeCustomContext.Provider value={{ theme, dark, toggle }}>
      <Provider store={store}>{children}</Provider>
    </ThemeCustomContext.Provider>
  );
}

export { ThemeProvider, ThemeCustomContext };
