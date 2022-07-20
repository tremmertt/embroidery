/* eslint-disable no-useless-constructor */
import { BaseService } from "./AuthService";

export class ProductService extends BaseService {
  constructor() {
    super();
  }

  getItemById = async (id) => {
    return await this.get(`product/${id}`);
  };

  listItems = async () => {
    return await this.get(`product`);
  };

  addItem = async (item) => {
    return await this.post(`product`, item);
  };

  updateItem = async (item) => {
    return await this.put(`product`, item);
  };

  deleteItem = async (id) => {
    return await this.delete(`product/${id}`);
  };
}

export const productService = new ProductService();
