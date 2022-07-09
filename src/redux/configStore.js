import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { TemplateReducer } from "./reducers/TemplateReducer";

console.log("LoadingReducer", LoadingReducer);
const rootReducer = combineReducers({
  TemplateReducer,
  LoadingReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
