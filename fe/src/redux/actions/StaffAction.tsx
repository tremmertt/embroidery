import { DELETE_STAFF, SET_LIST_STAFF, SET_STAFF, UPDATE_STAFF } from "./type/StaffType";
import StaffService, { IStaff } from "../../service/StaffService";
import { Dispatch } from "redux";

const listStaff = () => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      // const res = await StaffService.listItems();
      // if (res.status === 200) {
      // const listStaff = await StaffService.handleStaff(res);
      const listStaff = StaffService.handleStaff(null);
      dispatch({
        type: SET_LIST_STAFF,
        listStaff: listStaff,
      });
      // }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const getStaff = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      const res = await StaffService.getItemById(id);
      if (res.status === 200) {
        // const listStaff = await StaffService.handleStaff(res);
        const user = await StaffService.handleStaff(null);
        dispatch({
          type: SET_STAFF,
          user: user,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const updateStaff = (user: IStaff) => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      const res = await StaffService.updateItem(user);
      if (res.status === 200) {
        // const listStaff = await StaffService.handleStaff(res);
        const user = await StaffService.handleStaff(null);
        dispatch({
          type: UPDATE_STAFF,
          user: user,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const deleteStaff = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      const res = await StaffService.deleteItem(id);
      if (res.status === 200) {
        // const listStaff = await StaffService.handleStaff(res);
        dispatch({
          type: DELETE_STAFF,
          id: id,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const StaffAction = { listStaff, getStaff, updateStaff, deleteStaff };
export default StaffAction;
