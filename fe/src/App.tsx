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
import EditStaffPage from "./pages/admin/staff/EditStaffPage";

import ProductListPage from "./pages/admin/product/ProductListPage";
import CreateProductPage from "./pages/admin/product/CreateProductPage";
import EditProductPage from "./pages/admin/product/EditProductPage";

import AgencyListPage from "./pages/admin/agency/AgencyListPage";
import CustomerListPage from "./pages/admin/customer/CustomerListPage";

import ClientTemplate from "./templates/ClientTemplate";
import AdminTemplate from "./templates/AdminTemplate";
import { useContext, useLayoutEffect, useState } from "react";
import { ThemeCustomContext } from "./settings/theme-context";
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
  const { theme } = useContext(ThemeCustomContext);

  return (
    <div
      className="h-screen"
      style={{ height: "100vh", color: theme.color, backgroundColor: theme.backgroundColorMint }}
    >
      <CustomRouter history={history}>
        {/* <ScrollToTop> */}

        <Routes>
          {/* client */}
          <Route path="/" element={<ClientTemplate Component={HomePage} />} />
          {/* <Route path="/product" element={<ClientTemplate Component={ProductPage} />} />
          <Route path="/cart" element={<ClientTemplate Component={CartPage} />} />
          <Route path="/history" element={<ClientTemplate Component={HistoryPage} />} />
          <Route path="/contact" element={<ClientTemplate Component={ContactPage} />} /> */}

          {/* admin */}
          {/* <Route path="/admin" element={<AdminTemplate Component={DashBoardPage} />} />
          <Route path="/admin/orders" element={<AdminTemplate Component={OrderListPage} />} />
          <Route path="/admin/customers" element={<AdminTemplate Component={CustomerListPage} />} />
          <Route path="/admin/staffs" element={<AdminTemplate Component={StaffListPage} />} />
          <Route path="/admin/staffs/create" element={<AdminTemplate Component={CreateStaffPage} />} />
          <Route path="/admin/staffs/edit/:id" element={<AdminTemplate Component={EditStaffPage} />} />
          <Route path="/admin/products" element={<AdminTemplate Component={ProductListPage} />} />
          <Route path="/admin/products/create" element={<AdminTemplate Component={CreateProductPage} />} />
          <Route path="/admin/products/edit/:id" element={<AdminTemplate Component={EditProductPage} />} />
          <Route path="/admin/agencies" element={<AdminTemplate Component={AgencyListPage} />} />
          <Route path="/admin/setting" element={<AdminTemplate Component={SettingPage} />} />
          <Route path="/admin/profile" element={<AdminTemplate Component={ProfilePage} />} />
          <Route path="/signin" element={<AdminTemplate Component={SigninPage} />} /> */}
        </Routes>
        {/* </ScrollToTop> */}
      </CustomRouter>
    </div>
  );
}

export default App;
