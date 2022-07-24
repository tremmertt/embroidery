import "./index.css";
import { createBrowserHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";

// import ScrollToTop from "./ScrollToTop";

import HomePage from "./pages/client/HomePage";
import ProductPage from "./pages/client/ProductPage";
import CartPage from "./pages/client/CartPage";
import HistoryPage from "./pages/client/HistoryPage";
import ContactPage from "./pages/client/ContactPage";

import DashBoardPage from "./pages/admin/dashboard/DashBoardPage";
import SettingPage from "./pages/admin/setting/SettingPage";
import ProfilePage from "./pages/admin/profile/ProfilePage";
import SigninPage from "./pages/admin/auth/SigninPage";
import OrderListPage from "./pages/admin/order/OrderListPage";
import StaffListPage from "./pages/admin/staff/StaffListPage";
import CreateStaffPage from "./pages/admin/staff/CreateStaffPage";
import ProductListPage from "./pages/admin/product/ProductListPage";
import CustomerListPage from "./pages/admin/customer/CustomerListPage";

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
        {/* client */}
        <Route path="/" element={<ClientTemplate Component={HomePage} />} />
        <Route path="/product" element={<ClientTemplate Component={ProductPage} />} />
        <Route path="/cart" element={<ClientTemplate Component={CartPage} />} />
        <Route path="/history" element={<ClientTemplate Component={HistoryPage} />} />
        <Route path="/contact" element={<ClientTemplate Component={ContactPage} />} />

        {/* admin */}
        <Route path="/admin" element={<AdminTemplate Component={DashBoardPage} />} />
        <Route path="/admin/orders" element={<AdminTemplate Component={OrderListPage} />} />
        <Route path="/admin/customers" element={<AdminTemplate Component={CustomerListPage} />} />
        <Route path="/admin/staffs" element={<AdminTemplate Component={StaffListPage} />} />
        <Route path="/admin/staffs/create" element={<AdminTemplate Component={CreateStaffPage} />} />
        <Route path="/admin/products" element={<AdminTemplate Component={ProductListPage} />} />
        <Route path="/admin/setting" element={<AdminTemplate Component={SettingPage} />} />
        <Route path="/admin/profile" element={<AdminTemplate Component={ProfilePage} />} />
        <Route path="/signin" element={<AdminTemplate Component={SigninPage} />} />
      </Routes>
      {/* </ScrollToTop> */}
    </CustomRouter>
  );
}

export default App;
