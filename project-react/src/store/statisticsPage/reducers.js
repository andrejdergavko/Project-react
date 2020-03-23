import { WEEK_IN_MILLISECONDS } from "../../utils/constants";
import {
  STATISTICS_PAGE_LOAD_OPERATIONS_SUCCESS,
  STATISTICS_PAGE_CHANGE_DATA_RELEVANT,
  STATISTICS_PAGE_SET_SELECTED_DATE
} from "./actions";

const initialState = {
  operations: [],
  selectedDate: {
    startDate: Date.now() - WEEK_IN_MILLISECONDS,
    finishDate: Date.now()
  },
  isRelevant: false,
};

export function statisticsPageReducer(state = initialState, action) {
  switch (action.type) {
    case STATISTICS_PAGE_LOAD_OPERATIONS_SUCCESS:
      return {
        ...state,
        operations: action.payload.operations,
        isRelevant: true,
      };
    case STATISTICS_PAGE_CHANGE_DATA_RELEVANT:
      return {
        ...state,
        isRelevant: action.payload.isRelevant,
      };
    case STATISTICS_PAGE_SET_SELECTED_DATE:
      console.log('сработал сет дейта')
      return {
        ...state,
        selectedDate: {
          startDate: action.payload.startDate,
          finishDate: action.payload.finishDate
        },
        isRelevant: false,
      };

    default:
      return state;
  }
}
