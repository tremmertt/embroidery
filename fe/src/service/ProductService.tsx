/* eslint-disable no-useless-constructor */
import { BaseService } from "./AuthService";
import tempListProduct from "./data/product.json";
export interface ITypeProduct {
  type: string;
  path: string;
}
export interface ISize {
  width: number;
  height: number;
  length: number;
}

export interface IProduct {
  id: number;
  name: string;
  category: string;
  content: string;
  size: ISize;
  listTypeProduct: ITypeProduct[];
  price: string;
  listColor: string[];
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

  static handleProduct = (res: any): IProduct[] => {
    // if (res && res.data) {
    // return [];
    // }
    return tempListProduct.map((i: any) => ({
      id: i.id,
      name: i.name,
      category: i.category,
      content: i.content,
      size: {
        height: i.size.height,
        width: i.size.width,
        length: i.size.length,
      },
      listTypeProduct: i.listTypeProduct,
      price: i.price,
      listColor: i.listColor,
    })) as IProduct[];
  };
}
