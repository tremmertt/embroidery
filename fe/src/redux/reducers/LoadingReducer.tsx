import { DISPLAY_LOADING, HIDE_LOADING, SET_SETTING } from "../actions/type/LoadingType";

const stateDefault = {
  isLoading: false,
  isMobile: window.innerWidth < 768,
  device: window.innerWidth < 768 ? "mobile" : window.innerWidth < 1084 ? "tablet" : "pc",
  dark: localStorage.getItem("dark") === "true",
};

export const LoadingReducer = (state = stateDefault, action: any) => {
  switch (action.type) {
    case DISPLAY_LOADING: {
      state.isLoading = true;
      return { ...state };
    }
    case HIDE_LOADING: {
      state.isLoading = false;
      return { ...state };
    }
    case SET_SETTING:
      return { ...state };
    default:
      return { ...state };
  }
};
