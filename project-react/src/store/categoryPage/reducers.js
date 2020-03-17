import { CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS } from "./actions";
import { CATEGORY_PAGE_SET_SELECTED_DATE } from "./actions";

const initialState = {
  selectedDate: Date.now(),
  dailyOperations: []
};

export function categoryPageReducer(state = initialState, action) {
  switch (action.type) {
    case CATEGORY_PAGE_LOAD_DAILY_OPERATIONS_SUCCESS:
      return {
        ...state,
        dailyOperations: action.payload.operations
      };
    case CATEGORY_PAGE_SET_SELECTED_DATE:
      return {
        ...state,
        selectedDate: action.payload.date
      };
    default:
      return state;
  }
}
