import { APP_LOAD_USER_CATEGORIES_SUCCESS } from "../app/actions";

const initialState = {
  categories: []
};

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case APP_LOAD_USER_CATEGORIES_SUCCESS:
        return {
            ...state,
            categories: action.payload.userCategories
        }

    default:
      return state;
  }
}
