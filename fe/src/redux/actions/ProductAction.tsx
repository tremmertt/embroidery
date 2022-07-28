import { DELETE_PRODUCT, SET_LIST_PRODUCT, SET_PRODUCT, UPDATE_PRODUCT } from "./type/ProductType";
import ProductService, { IProduct } from "../../service/ProductService";
import { Dispatch } from "redux";

const listProduct = () => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      // const res = await ProductService.listItems();
      // if (res.status === 200) {
      // const listProduct = await ProductService.handleProduct(res);
      const listProduct = ProductService.handleProduct(null);
      dispatch({
        type: SET_LIST_PRODUCT,
        listProduct: listProduct,
      });
      // }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const getProduct = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      const res = await ProductService.getItemById(id);
      if (res.status === 200) {
        // const listProduct = await ProductService.handleProduct(res);
        const user = await ProductService.handleProduct(null);
        dispatch({
          type: SET_PRODUCT,
          user: user,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const updateProduct = (user: IProduct) => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      const res = await ProductService.updateItem(user);
      if (res.status === 200) {
        // const listProduct = await ProductService.handleProduct(res);
        const user = await ProductService.handleProduct(null);
        dispatch({
          type: UPDATE_PRODUCT,
          user: user,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const deleteProduct = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      const res = await ProductService.deleteItem(id);
      if (res.status === 200) {
        // const listProduct = await ProductService.handleProduct(res);
        dispatch({
          type: DELETE_PRODUCT,
          id: id,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const ProductAction = { listProduct, getProduct, updateProduct, deleteProduct };
export default ProductAction;
