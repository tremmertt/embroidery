import { productService } from "../../service/ProductService";
import { GET_ALL_PRODUCT, GET_PRODUCT, ADD_PRODUCT, UPDATE_PRODUCT, REMOVE_PRODUCT } from "./type/ProductType";

export const getAllProduct = () => {
  return async (dispatch) => {
    try {
      // get api here
      const result = await productService.listItems();
      console.log("result.status", result.status);
      if (result.status === 200) {
        dispatch({
          type: GET_ALL_PRODUCT,
          listProduct: result.data,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};
