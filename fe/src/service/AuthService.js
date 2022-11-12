import axios from "axios";

export class BaseService {
  static getInstance() {
    if (!this.instance) {
      this.instance = axios.create();
    }
    return this.instance;
  }

  static put = (url, model) => {
    return BaseService.getInstance().put(`${process.env.REACT_APP_API_URL}/${url}`, model, {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      }, //JWT
    });
  };

  static post = (url, model) => {
    return BaseService.getInstance().post(`${process.env.REACT_APP_API_URL}/${url}`, model, {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      }, //JWT
    });
  };

  static get = async (url) => {
    return await BaseService.getInstance().get(`${process.env.REACT_APP_API_URL}/${url}`, {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
    });
  };

  static delete = (url) => {
    return BaseService.getInstance().delete(`${process.env.REACT_APP_API_URL}/${url}`, {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
    });
  };
}
