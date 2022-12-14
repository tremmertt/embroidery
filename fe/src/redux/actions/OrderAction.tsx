import { Dispatch } from "redux";
import { IOrder } from "../reducers/OrderReducer";
import { ADD_ORDER_ITEM, UPDATE_ORDER_ITEM, DELETE_ORDER_ITEM, REFRESH_ORDER_ITEM } from "./type/OrderType";

const addOrderItem = (order: IOrder) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: ADD_ORDER_ITEM,
      order: order,
    });
  };
};

const updateOrderItem = (order: IOrder) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: UPDATE_ORDER_ITEM,
      order: order,
    });
  };
};

const refreshOrderItem = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: REFRESH_ORDER_ITEM,
    });
  };
};

const deleteOrderItem = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: DELETE_ORDER_ITEM,
      id: id,
    });
  };
};

const OrderAction = { addOrderItem, updateOrderItem, deleteOrderItem, refreshOrderItem };
export default OrderAction;
