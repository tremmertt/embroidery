import axios from "axios";

export class BaseService {
  static getInstance() {
    if (!this.instance) {
      this.instance = axios.create();
    }
    return this.instance;
  }

  put = (url, model) => {
    return BaseService.getInstance().put(`${process.env.REACT_APP_API_URL}/${url}`, model, {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      }, //JWT
    });
  };

  post = (url, model) => {
    return BaseService.getInstance().post(`${process.env.REACT_APP_API_URL}/${url}`, model, {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      }, //JWT
    });
  };

  get = async (url) => {
    console.log({
      url: `${process.env.REACT_APP_API_URL}/${url}`,
      method: "GET",
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
    });
    return await BaseService.getInstance().get(`${process.env.REACT_APP_API_URL}/${url}`, {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
    });
  };

  delete = (url) => {
    return BaseService.getInstance().delete(`${process.env.REACT_APP_API_URL}/${url}`, {
      headers: {
        Authorization: "Bearer " + process.env.TOKEN,
      },
    });
  };
}
