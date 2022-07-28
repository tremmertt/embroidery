import { SET_INCREMENT, SET_DECREMENT, SET_RESET } from "../actions/type/TemplateType";

const stateDefault = {
  count: 0,
};

export const TemplateReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_INCREMENT: {
      state.count += action.count;
      return { ...state };
    }
    case SET_DECREMENT: {
      state.count -= action.count;
      return { ...state };
    }
    case SET_RESET: {
      state.count = 0;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
