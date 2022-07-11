import { GET_ALL_PRODUCT } from "../actions/type/ProductType";

const stateDefault = {
  listProduct: [],
};

export const ProductReducer = (state = stateDefault, action) => {

  switch (action.type) {
    case GET_ALL_PRODUCT: {
      state.listProduct = action.listProduct;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
