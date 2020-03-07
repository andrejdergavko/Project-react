import { combineReducers } from "redux";
import { appReducer } from "./app/reducers";
import { authReducer } from "./auth/reducers";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer
});
