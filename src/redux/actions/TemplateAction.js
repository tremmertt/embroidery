import { SET_INCREMENT, SET_DECREMENT, SET_RESET } from "./type/TemplateType";

export const incrementCountAction = () => {
  return async (dispatch) => {
    try {
      // get api here
      const count = 1;
      console.log({
        type: SET_INCREMENT,
        count: count,
      })
      dispatch({
        type: SET_INCREMENT,
        count: count,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
}

export const decrementCountAction = () => {
  return async (dispatch) => {
    try {
      // get api here
      const count = 1;

      console.log({
        type: SET_DECREMENT,
        count: count,
      })
      dispatch({
        type: SET_DECREMENT,
        count: count,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
}

export const resetCountAction = () => {
  return async (dispatch) => {
    try {
      // get api here 
      console.log({
        type: SET_RESET,
      })
      dispatch({
        type: SET_RESET,
      });
    } catch (errors) {
      console.log("errors", errors);
    }
  };
}
