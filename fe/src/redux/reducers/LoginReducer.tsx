import { LOGIN_BY_SOCIAL, LOGOUT } from "../actions/type/LoginType";
import LoginService, { ICustomer } from "../../service/LoginService";

export interface IStateCustomer {
  customer: ICustomer | null;
}
const customer = LoginService.getCustomer();
const stateDefault: IStateCustomer = {
  customer: customer,
};

export const LoginReducer = (state = stateDefault, action: any) => {
  switch (action.type) {
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
