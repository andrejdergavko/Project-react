import { CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS } from "./actions";

const initialState = {
  dailyOperations: [],
};

export function categoryPageReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS:
      return {
        ...state,
        dailyOperations: action.payload.operations
      };
    default:
      return state;
  }
}
