import { DELETE_USER, SET_LIST_USER, SET_USER, UPDATE_USER } from "../actions/type/UserType";
import { IUser } from "../../service/UserService";

export interface IStateUser {
  listUser: IUser[];
}

const stateDefault: IStateUser = {
  listUser: [],
};

export const UserReducer = (state = stateDefault, action: any) => {
  switch (action.type) {
    case SET_LIST_USER: {
      state.listUser = action.listUser;
      return { ...state };
    }
    case SET_USER: {
      const user = action.user as IUser;
      if (!state.listUser.find((i) => i.id === user.id)) {
        state.listUser.push(user);
      }
      return { ...state };
    }
    case UPDATE_USER: {
      const user = action.user as IUser;
      let stateUser = state.listUser.find((i) => i.id === user.id);
      if (stateUser) {
        stateUser = { ...user };
      }
      return { ...state };
    }
    case DELETE_USER: {
      const index = state.listUser.findIndex((i) => i.id === action.id);
      if (index !== -1) {
        state.listUser.splice(index, 1);
      }
      return { ...state };
    }
    default:
      return { ...state };
  }
};
