import "./App.css";
import { ClientTemplate } from "./templates/ClientTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import ScrollToTop from "./ScrollToTop.js";

import HomePage from "./pages/client/HomePage";
import ProductPage from "./pages/client/ProductPage";
import CartPage from "./pages/client/CartPage";
import HistoryPage from "./pages/client/HistoryPage";
import ContactPage from "./pages/client/ContactPage";

import DashBoardPage from "./pages/admin/DashBoardPage";
import SettingsPage from "./pages/admin/SettingsPage";
import ProfilePage from "./pages/admin/ProfilePage";
import SigninPage from "./pages/admin/SigninPage";
// import Example from './Example'

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

          <AdminTemplate path="/admin" exact Component={DashBoardPage} />
          <AdminTemplate path="/admin/settings" exact Component={SettingsPage} />
          <AdminTemplate path="/admin/profile" exact Component={ProfilePage} />
          <AdminTemplate path="/signin" exact Component={SigninPage} />
        </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
