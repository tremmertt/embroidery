import { ADD_ORDER_ITEM, UPDATE_ORDER_ITEM, DELETE_ORDER_ITEM, REFRESH_ORDER_ITEM } from "../actions/type/OrderType";

export interface ISize {
  width: string;
  height: string;
  unit: string;
}

export interface IOrder {
  id: string;
  name: string;
  size: ISize;
  quantity: string;
  type: "JPEG" | "JPG" | "PNG" | "PDF" | "DST" | "EMB" | "PES" | "CNS" | "EXP" | "VP3" | "JEF" | "HUS" | "ART";
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
    case REFRESH_ORDER_ITEM:
      state.listOrder = [];
      return { ...state };
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
