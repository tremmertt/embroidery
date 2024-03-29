import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { LoadingReducer } from "./reducers/LoadingReducer";
import { TemplateReducer } from "./reducers/TemplateReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import { StaffReducer } from "./reducers/StaffReducer";
import { LanguageReducer } from "./reducers/LanguageReducer";
import { LoginReducer } from "./reducers/LoginReducer";

const rootReducer = combineReducers({
  TemplateReducer,
  LoadingReducer,
  ProductReducer,
  StaffReducer,
  LanguageReducer,
  LoginReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export type IRootState = ReturnType<typeof store.getState>;
