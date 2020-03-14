import { AUTH_ADD_AUTORIZED_USER } from "../auth/actions";
import { AUTH_ADD_ERROR_MESSAGE } from "../auth/actions";
import { AUTH_LOAD_CURRENCIES_SUCCESS } from "../auth/actions";

const initialState = {
  authorizedUserId: localStorage.getItem("mf-autorized-user-id"),
  authorizedUserEmail: localStorage.getItem("mf-autorized-user-email"),
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ADD_AUTORIZED_USER:
      return {
        ...state,
        authorizedUserId: action.payload.id,
        authorizedUserEmail: action.payload.email
      };

    case AUTH_ADD_ERROR_MESSAGE:
      return {
        ...state,
        authorizedUserId: action.payload.id
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
