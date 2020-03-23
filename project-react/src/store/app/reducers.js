import {
  APP_LOAD_USER_CATEGORIES_LOADING,
  APP_LOAD_USER_CATEGORIES_SUCCESS
} from "../app/actions";

const initialState = {
  categories: [],
  isLoading: false
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD_USER_CATEGORIES_LOADING:
      return {
        ...state,
        isLoading: true
      };
    case APP_LOAD_USER_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: action.payload.userCategories,
        isLoading: false
      };

    default:
      return state;
  }
}
