import { Dispatch } from "redux";
import { HIDE_LOADING, DISPLAY_LOADING, SET_SETTING } from "./type/LoadingType";

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

export const setSetting = ({ device, isMobile, dark }: { device: string; isMobile: boolean; dark: boolean }) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: SET_SETTING, device, isMobile, dark });
  };
};

const LoadingAction = { hideLoading, displayLoading, setSetting };
export default LoadingAction;
