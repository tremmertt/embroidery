import { ADD_ORDER_ITEM, UPDATE_ORDER_ITEM, DELETE_ORDER_ITEM } from "../actions/type/OrderType";

export interface IOrder {
  id: string;
  name: string;
  size: string;
  quantity: string;
  type: string;
  image: string;
}

export interface IStateOrder {
  listOrder: IOrder[];
}

const stateDefault: IStateOrder = {
  listOrder: [],
};

export const OrderReducer = (state = stateDefault, action: any) => {
  let index = -1;
  switch (action.type) {
    case ADD_ORDER_ITEM:
      state.listOrder = state.listOrder.concat(action.order);
      return { ...state };
    case UPDATE_ORDER_ITEM:
      index = state.listOrder.findIndex((i) => i.id === action.order.id);
      if (index !== -1) state.listOrder[index] = action.order;
      return { ...state };
    case DELETE_ORDER_ITEM:
      index = state.listOrder.findIndex((i) => i.id === action.id);
      if (index !== -1) state.listOrder.splice(index, 1);
      return { ...state };
    default:
      return { ...state };
  }
};
