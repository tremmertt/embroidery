import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { TemplateReducer } from "./reducers/TemplateReducer";

const rootReducer = combineReducers({
  TemplateReducer,
  LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
