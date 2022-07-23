import "./index.css";
import { createBrowserHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";

// import ScrollToTop from "./ScrollToTop";

import HomePage from "./pages/client/HomePage";
import ProductPage from "./pages/client/ProductPage";
import CartPage from "./pages/client/CartPage";
import HistoryPage from "./pages/client/HistoryPage";
import ContactPage from "./pages/client/ContactPage";

import DashBoardPage from "./pages/admin/DashBoardPage";
import SettingPage from "./pages/admin/SettingPage";
import ProfilePage from "./pages/admin/ProfilePage";
import SigninPage from "./pages/admin/SigninPage";
import OrderList from "./pages/admin/OrderList";
import CustomerList from "./pages/admin/CustomerList";
import UserList from "./pages/admin/UserList";
import ClientTemplate from "./templates/ClientTemplate";
import AdminTemplate from "./templates/AdminTemplate";
import { useLayoutEffect, useState } from "react";
// https://mui.com/material-ui/material-icons/?theme=Sharp&query=user

export const history = createBrowserHistory();

const CustomRouter: any = ({ history, ...props }: { history: any }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return <Router {...props} location={state.location} navigationType={state.action} navigator={history} />;
};

function App() {
  return (
    <CustomRouter history={history}>
      {/* <ScrollToTop> */}

      <Routes>
        <Route path="/" element={<ClientTemplate Component={HomePage} />} />
        <Route path="/product" element={<ClientTemplate Component={ProductPage} />} />
        <Route path="/cart" element={<ClientTemplate Component={CartPage} />} />
        <Route path="/history" element={<ClientTemplate Component={HistoryPage} />} />
        <Route path="/contact" element={<ClientTemplate Component={ContactPage} />} />

        <Route path="/admin" element={<AdminTemplate Component={DashBoardPage} />} />
        <Route path="/admin/orders" element={<AdminTemplate Component={OrderList} />} />
        <Route path="/admin/customers" element={<AdminTemplate Component={CustomerList} />} />
        <Route path="/admin/users" element={<AdminTemplate Component={UserList} />} />
        <Route path="/admin/setting" element={<AdminTemplate Component={SettingPage} />} />
        <Route path="/admin/profile" element={<AdminTemplate Component={ProfilePage} />} />
        <Route path="/signin" element={<AdminTemplate Component={SigninPage} />} />
      </Routes>
      {/* </ScrollToTop> */}
    </CustomRouter>
  );
}

export default App;
