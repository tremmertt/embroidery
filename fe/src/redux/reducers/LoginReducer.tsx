import { LOGIN_BY_SOCIAL, LOGOUT, LOGIN_BY_EMAIL, SIGNUP_BY_EMAIL, GET_CUSTOMER } from "../actions/type/LoginType";
import LoginService, { ICustomer } from "../../service/LoginService";
import { toast } from "react-toastify";

export interface IStateCustomer {
  customer: ICustomer | null;
}
const customer = LoginService.getCustomer();
const stateDefault: IStateCustomer = {
  customer: customer,
};

export const LoginReducer = (state = stateDefault, action: any) => {
  switch (action.type) {
    case GET_CUSTOMER:
      state.customer = action.customer;
      return { ...state };
    case LOGIN_BY_EMAIL:
    case LOGIN_BY_SOCIAL: {
      state.customer = action.customer as ICustomer;
      if (state.customer) state.customer.token = action.token as any;
      return { ...state };
    }
    case LOGOUT: {
      state.customer = null;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
