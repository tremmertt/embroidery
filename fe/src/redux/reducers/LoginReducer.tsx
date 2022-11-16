import { LOGIN_BY_SOCIAL } from "../actions/type/LoginType";
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
      state.customer = action.customer;
      if (state.customer) state.customer.token = action.token as any;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
