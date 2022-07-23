import { DELETE_USER, SET_LIST_USER, SET_USER, UPDATE_USER } from "../actions/type/UserType";

import UserService, { IUser } from "../../service/UserService";
import { Dispatch } from "redux";

const listUser = () => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      // const res = await UserService.listItems();
      // if (res.status === 200) {
      // const listUser = await UserService.handleUser(res);
      const listUser = UserService.handleUser(null);
      dispatch({
        type: SET_LIST_USER,
        listUser: listUser,
      });
      // }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const getUser = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      const res = await UserService.getItemById(id);
      if (res.status === 200) {
        // const listUser = await UserService.handleUser(res);
        const user = await UserService.handleUser(null);
        dispatch({
          type: SET_USER,
          user: user,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const updateUser = (user: IUser) => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      const res = await UserService.updateItem(user);
      if (res.status === 200) {
        // const listUser = await UserService.handleUser(res);
        const user = await UserService.handleUser(null);
        dispatch({
          type: UPDATE_USER,
          user: user,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const deleteUser = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      // get api here
      const res = await UserService.deleteItem(id);
      if (res.status === 200) {
        // const listUser = await UserService.handleUser(res);
        dispatch({
          type: DELETE_USER,
          id: id,
        });
      }
    } catch (errors) {
      console.log("errors", errors);
    }
  };
};

const UserAction = { listUser, getUser, updateUser, deleteUser };
export default UserAction;
