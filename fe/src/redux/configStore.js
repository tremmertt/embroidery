import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { TemplateReducer } from "./reducers/TemplateReducer";
import { ProductReducer } from "./reducers/ProductReducer";

const rootReducer = combineReducers({
  TemplateReducer,
  LoadingReducer,
  ProductReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
