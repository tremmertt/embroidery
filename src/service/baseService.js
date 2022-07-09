import Axios from "axios";
import { DOMAIN, TOKEN, CYBERSOFT_TOKEN } from "../util/settings/config";

export class baseService {
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "PUT",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
        TokenCybersoft: CYBERSOFT_TOKEN,
      }, //JWT
    });
  };

  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "POST",
      data: model,
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
        TokenCybersoft: CYBERSOFT_TOKEN,
      }, //JWT
    });
  };

  get = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
        TokenCybersoft: CYBERSOFT_TOKEN,
      },
    });
  };

  delete = (url) => {
    return Axios({
      url: `${DOMAIN}/${url}`,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
        TokenCybersoft: CYBERSOFT_TOKEN,
      },
    });
  };
}
