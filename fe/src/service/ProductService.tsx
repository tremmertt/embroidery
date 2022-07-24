/* eslint-disable no-useless-constructor */
import { BaseService } from "./AuthService";

export interface IProduct {
  id: string;
  name: string;
}

export default class ProductService {
  static getItemById = async (id: string) => {
    return await BaseService.get(`products/${id}`);
  };

  static listItems = async () => {
    return await BaseService.get(`products`);
  };

  static addItem = async (item: IProduct) => {
    return await BaseService.post(`products`, item);
  };

  static updateItem = async (item: IProduct) => {
    return await BaseService.put(`products`, item);
  };

  static deleteItem = async (id: string) => {
    return await BaseService.delete(`products/${id}`);
  };

  static createTempData = (id: string, name: string) => {
    return { id, name };
  };

  static handleProduct = (res: any): IProduct[] => {
    // if (res && res.data) {
    // return [];
    // }
    return [
      ProductService.createTempData("tramyeudi", "San pham 1"),
      ProductService.createTempData("diyeutram", "San pham 2"),
    ];
  };
}
