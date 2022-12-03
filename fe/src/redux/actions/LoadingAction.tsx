import { Dispatch } from "redux";
import { HIDE_LOADING, DISPLAY_LOADING } from "./type/LoadingType";

export const hideLoading = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: HIDE_LOADING });
  };
};

export const displayLoading = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: DISPLAY_LOADING });
  };
};

const LoadingAction = { hideLoading, displayLoading };
export default LoadingAction;
