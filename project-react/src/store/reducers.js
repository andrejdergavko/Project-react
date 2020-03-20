import { combineReducers } from "redux";
import { appReducer } from "./app/reducers";
import { authReducer } from "./auth/reducers";
import { categoryPageReducer } from "./categoryPage/reducers";
import { statisticsPageReducer } from "./statisticsPage/reducers";

export const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  categoryPage: categoryPageReducer,
  statisticsPage: statisticsPageReducer
});
