import { LOGIN_BY_EMAIL, LOGIN_BY_SOCIAL, LOGOUT, SIGNUP_BY_EMAIL } from "./type/LoginType";
import LoginService from "../../service/LoginService";
import { Dispatch } from "redux";
import { toast } from "react-toastify";

const loginBySocialMediaAction = (media: string, config: any) => {
  return async (dispatch: Dispatch) => {
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
  };
};

const loginByEmailAction = (config: any) => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      const res = await LoginService.loginBySocialMedia("email", config);
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
  };
};

const signUpByEmailAction = (config: any) => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      const res = await LoginService.signUpByEmail("email", config);
      if (res.status === 200) {
        const data = res.data as any;
        const customer = data.customer;
        const token = data.token;
        localStorage.setItem(`${customer.id}.token`, token);
        localStorage.setItem(`customer`, JSON.stringify(customer));
        dispatch({
          type: SIGNUP_BY_EMAIL,
          token: token,
          customer: customer,
        });
      }
    } catch (errors) {
      console.error("errors", errors);
    }
  };
};

const logout = () => {
  return async (dispatch: Dispatch) => {
    try {
      LoginService.logout();
      dispatch({
        type: LOGOUT,
      });
      toast("Logout", { type: "success" });
    } catch (errors) {
      console.error("errors", errors);
    }
  };
};

const LoginAction = { loginBySocialMediaAction, signUpByEmailAction, logout, loginByEmailAction };
export default LoginAction;
