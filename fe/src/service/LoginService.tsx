import { BaseService } from "./AuthService";

export default class LoginService {
  static getUrlLogin = async (media: string, config?: any) => {
    return await BaseService.get(`embroidery/api/login/${media}`).then((res) => res.data);
  };
}
