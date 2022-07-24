import { DELETE_STAFF, SET_LIST_STAFF, SET_STAFF, UPDATE_STAFF } from "../actions/type/StaffType";
import { IStaff } from "../../service/StaffService";

export interface IStateStaff {
  listStaff: IStaff[];
}

const stateDefault: IStateStaff = {
  listStaff: [],
};

export const StaffReducer = (state = stateDefault, action: any) => {
  switch (action.type) {
    case SET_LIST_STAFF: {
      state.listStaff = action.listStaff;
      return { ...state };
    }
    case SET_STAFF: {
      const staff = action.staff as IStaff;
      if (!state.listStaff.find((i) => i.id === staff.id)) {
        state.listStaff.push(staff);
      }
      return { ...state };
    }
    case UPDATE_STAFF: {
      const staff = action.staff as IStaff;
      let stateStaff = state.listStaff.find((i) => i.id === staff.id);
      if (stateStaff) {
        stateStaff = { ...staff };
      }
      return { ...state };
    }
    case DELETE_STAFF: {
      const index = state.listStaff.findIndex((i) => i.id === action.id);
      if (index !== -1) {
        state.listStaff.splice(index, 1);
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
