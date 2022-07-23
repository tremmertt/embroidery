import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { TemplateReducer } from "./reducers/TemplateReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import { UserReducer } from "./reducers/UserReducer";

const rootReducer = combineReducers({
  TemplateReducer,
  LoadingReducer,
  ProductReducer,
  UserReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type IRootState = ReturnType<typeof store.getState>;
