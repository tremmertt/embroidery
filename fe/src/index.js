import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/configStore";
import "./settings/icon-fonts.js";

import { ThemeProvider } from "./settings/theme-context";

console.log("REACT_APP_API_URL", process.env.REACT_APP_API_URL);

// import "@fortawesome/fontawesome-free/css/all.min.css";
// https://fontawesome.com/v5/icons/tv?s=solid

ReactDOM.render(
  <ThemeProvider store={store}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
