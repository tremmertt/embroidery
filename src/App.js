import "./App.css";
import { ClientTemplate } from "./templates/ClientTemplate";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import ScrollToTop from "./ScrollToTop.js";

import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import HistoryPage from "./pages/HistoryPage";
import ContactPage from "./pages/ContactPage";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <ScrollToTop>
        <Switch>
          <ClientTemplate path="/" exact Component={HomePage} />
          <ClientTemplate path="/product" exact Component={ProductPage} />
          <ClientTemplate path="/cart" exact Component={CartPage} />
          <ClientTemplate path="/history" exact Component={HistoryPage} />
          <ClientTemplate path="/contact" exact Component={ContactPage} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
