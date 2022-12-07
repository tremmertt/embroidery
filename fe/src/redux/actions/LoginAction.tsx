import { LOGIN_BY_EMAIL, LOGIN_BY_SOCIAL, LOGOUT, GET_CUSTOMER } from "./type/LoginType";
import LoginService from "../../service/LoginService";
import { Dispatch } from "redux";
import { toast } from "react-toastify";
import LoadingAction from "./LoadingAction";
import { DISPLAY_LOADING, HIDE_LOADING } from "./type/LoadingType";

const loginBySocialMediaAction = (media: string, config: any) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DISPLAY_LOADING });
    try {
      // get api here
      const res = await LoginService.loginBySocialMedia(media, config);
      if (res.status === 200) {
        const data = res.data as any;
        const customer = data.customer;
        const token = data.token;
        localStorage.setItem(`${customer.id}.token`, token);
        localStorage.setItem(`customer`, JSON.stringify(customer));
        dispatch({
          type: LOGIN_BY_SOCIAL,
          token: token,
          customer: customer,
        });
      }
    } catch (errors) {
      console.error("errors", errors);
    }
    dispatch({ type: HIDE_LOADING });
  };
};

const loginByEmailAction = (config: any) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DISPLAY_LOADING });
    try {
      // get api here
      const res = await LoginService.loginBySocialMedia("email", config)
        .then((res) => res)
        .catch((err) => {
          console.log("error", { ...err });
          if (err.response.status === 404) {
            toast(err.response.data.message, { type: "error" });
          }
          throw err;
        });
      if (res.status === 200) {
        const data = res.data as any;
        const customer = data.customer;
        const token = data.token;
        localStorage.setItem(`${customer.id}.token`, token);
        localStorage.setItem(`customer`, JSON.stringify(customer));
        dispatch({
          type: LOGIN_BY_EMAIL,
          token: token,
          customer: customer,
        });
      }
    } catch (errors) {
      console.error("errors", errors);
    }
    dispatch({ type: HIDE_LOADING });
  };
};

const getCustomer = () => {
  return async (dispatch: Dispatch) => {
    const customer = LoginService.getCustomer();
    if (customer) {
      toast(`Login successfully. \n Hi ${customer.name}`, { type: "success" });
      dispatch({
        type: GET_CUSTOMER,
        customer: customer,
      });
    }
  };
};

const logout = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DISPLAY_LOADING });
    try {
      LoginService.logout();
      dispatch({
        type: LOGOUT,
      });
      toast("Logout", { type: "success" });
    } catch (errors) {
      console.error("errors", errors);
    }
    dispatch({ type: HIDE_LOADING });
  };
};

const LoginAction = { getCustomer, loginBySocialMediaAction, logout, loginByEmailAction };
export default LoginAction;
