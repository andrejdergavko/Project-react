import { AUTH_ADD_AUTORIZED_USER } from "../auth/actions";
import { AUTH_ADD_ERROR_MESSAGE } from "../auth/actions";
import { AUTH_LOAD_CURRENCIES_SUCCESS } from "../auth/actions";

const initialState = {
  authorizedUser: JSON.parse(localStorage.getItem("mf-autorized-user"))
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ADD_AUTORIZED_USER:
      return {
        ...state,
        authorizedUser: action.payload.user
      };

    case AUTH_LOAD_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: action.payload.currencies
      };

    default:
      return state;
  }
}
