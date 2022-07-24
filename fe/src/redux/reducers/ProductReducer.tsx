import { DELETE_PRODUCT, SET_LIST_PRODUCT, SET_PRODUCT, UPDATE_PRODUCT } from "../actions/type/ProductType";
import { IProduct } from "../../service/ProductService";

export interface IStateProduct {
  listProduct: IProduct[];
}

const stateDefault: IStateProduct = {
  listProduct: [],
};

export const ProductReducer = (state = stateDefault, action: any) => {
  switch (action.type) {
    case SET_LIST_PRODUCT: {
      state.listProduct = action.listProduct;
      return { ...state };
    }
    case SET_PRODUCT: {
      const product = action.product as IProduct;
      if (!state.listProduct.find((i) => i.id === product.id)) {
        state.listProduct.push(product);
      }
      return { ...state };
    }
    case UPDATE_PRODUCT: {
      const product = action.product as IProduct;
      let stateProduct = state.listProduct.find((i) => i.id === product.id);
      if (stateProduct) {
        stateProduct = { ...product };
      }
      return { ...state };
    }
    case DELETE_PRODUCT: {
      const index = state.listProduct.findIndex((i) => i.id === action.id);
      if (index !== -1) {
        state.listProduct.splice(index, 1);
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
