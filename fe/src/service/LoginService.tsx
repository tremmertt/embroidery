import { BaseService } from "./AuthService";

export interface ICustomer {
  address: string;
  company: string;
  email: string;
  id: string;
  name: string;
  phone_number: string;
  loginType: string;
  token: string;
}
export default class LoginService {
  static getCustomer = () => {
    const customerStr = localStorage.getItem("customer");
    if (customerStr) {
      const customer = JSON.parse(customerStr);
      const token = localStorage.getItem(`${customer.id}.token`);
      customer.token = token;
      return customer;
    }
    return null;
  };

  static getToken = (): string => {
    const customerStr = localStorage.getItem("customer");
    if (customerStr) {
      const customer = JSON.parse(customerStr);
      const token = localStorage.getItem(`${customer.id}.token`);
      if (token) return token;
    }
    return "";
  };

  static getUrlLogin = async (media: string) => {
    return await BaseService.get(`embroidery/api/login/${media}`).then((res) => res.data);
  };

  static loginBySocialMedia = async (media: string, config?: any) => {
    return await BaseService.post(`embroidery/api/login/${media}`, config);
  };
}
