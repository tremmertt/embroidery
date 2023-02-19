import "./index.css";
import { createBrowserHistory } from "history";
import { Router, Routes, Route } from "react-router-dom";

import "react-medium-image-zoom/dist/styles.css";
import "react-toastify/dist/ReactToastify.css";
import "./translations/i18n";
import HomePage from "./pages/client/HomePage";
import ShowRoomPage from "./pages/client/ShowRoomPage";
// import Login from "./pages/client/Login";
// import LoginSuccess from "./pages/client/LoginSuccess";
// import ConfirmEmail from "./pages/client/ConfirmEmail";
import OrderForm from "./pages/client/order/OrderForm";
import ErrorPage from "./pages/client/ErrorPage";
import Signup from "./pages/client/Signup";

import ClientTemplate from "./templates/ClientTemplate";
// import AdminTemplate from "./templates/AdminTemplate";
import { useContext, useLayoutEffect, useState } from "react";
import { ThemeCustomContext } from "./settings/theme-context"; // https://mui.com/material-ui/material-icons/?theme=Sharp&query=user
import { ToastContainer } from "react-toastify"; //https://www.npmjs.com/package/react-toastify
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import Inquiry from "components/client/home/Inquiry";

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
  const { isLoading } = useSelector((state: any) => state.LoadingReducer);

  return (
    <div style={{ height: "100vh !important", color: theme.color, backgroundColor: theme.backgroundColorMint }}>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      {/* <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      /> */}
      <CustomRouter history={history}>
        <Routes>
          {/* client */}
          <Route path="/" element={<ClientTemplate Component={HomePage} />} />
          <Route path="/design" element={<ClientTemplate Component={ShowRoomPage} />} />
          <Route path="/order" element={<ClientTemplate Component={OrderForm} />} />
          <Route path="/inquiry" element={<ClientTemplate Component={Inquiry} />} />

          {/* <Route path="/login" element={<ClientTemplate Component={Login} />} />
          <Route path="/login-success" element={<ClientTemplate Component={LoginSuccess} />} />
          <Route path="/confirm-account" element={<ClientTemplate Component={ConfirmEmail} />} /> */}
          <Route path="/signup" element={<ClientTemplate Component={Signup} />} />
          <Route path="*" element={<ClientTemplate Component={ErrorPage} />} />

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
