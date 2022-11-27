import "./index.css";
import { createBrowserHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";
import "./translations/i18n";
import HomePage from "./pages/client/HomePage";
import ShowRoomPage from "./pages/client/ShowRoomPage";
import Login from "./pages/client/Login";
import LoginSuccess from "./pages/client/LoginSuccess";
import ErrorPage from "./pages/client/ErrorPage";
import Signup from "./pages/client/Signup";

// import CartPage from "./pages/client/CartPage";
// import HistoryPage from "./pages/client/HistoryPage";
// import ContactPage from "./pages/client/ContactPage";

// import DashBoardPage from "./pages/admin/dashboard/DashBoardPage";
// import SettingPage from "./pages/admin/setting/SettingPage";
// import ProfilePage from "./pages/admin/profile/ProfilePage";
// import SigninPage from "./pages/admin/auth/SigninPage";
// import OrderListPage from "./pages/admin/order/OrderListPage";

// import StaffListPage from "./pages/admin/staff/StaffListPage";
// import CreateStaffPage from "./pages/admin/staff/CreateStaffPage";
// import EditStaffPage from "./pages/admin/staff/EditStaffPage";

// import ProductListPage from "./pages/admin/product/ProductListPage";
// import CreateProductPage from "./pages/admin/product/CreateProductPage";
// import EditProductPage from "./pages/admin/product/EditProductPage";

// import AgencyListPage from "./pages/admin/agency/AgencyListPage";
// import CustomerListPage from "./pages/admin/customer/CustomerListPage";

import ClientTemplate from "./templates/ClientTemplate";
// import AdminTemplate from "./templates/AdminTemplate";
import { useContext, useLayoutEffect, useState } from "react";
import { ThemeCustomContext } from "./settings/theme-context"; // https://mui.com/material-ui/material-icons/?theme=Sharp&query=user
import { ToastContainer } from "react-toastify"; //https://www.npmjs.com/package/react-toastify

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
    <div style={{ height: "100vh !important", color: theme.color, backgroundColor: theme.backgroundColorMint }}>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <CustomRouter history={history}>
        <Routes>
          {/* client */}
          <Route path="/" element={<ClientTemplate Component={HomePage} />} />
          <Route path="/design" element={<ClientTemplate Component={ShowRoomPage} />} />
          <Route path="/login" element={<ClientTemplate Component={Login} />} />
          <Route path="/login-success" element={<ClientTemplate Component={LoginSuccess} />} />
          <Route path="/signup" element={<ClientTemplate Component={Signup} />} />
          <Route path="/123" element={<ClientTemplate Component={ErrorPage} />} />
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
      </CustomRouter>
    </div>
  );
}

export default App;
