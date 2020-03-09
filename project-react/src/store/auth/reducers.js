import { AUTH_ADD_AUTORIZED_USER_ID } from "../auth/actions";
import { AUTH_ADD_ERROR_MESSAGE } from "../auth/actions";

const initialState = {
  authorizedUserId: localStorage.getItem("mf-autorized-user-id")
};

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_ADD_AUTORIZED_USER_ID:
      return {
        ...state,
        authorizedUserId: action.payload.id
      };

    case AUTH_ADD_ERROR_MESSAGE:
      return {
        ...state,
        authorizedUserId: action.payload.id
      };

    default:
      return state;
  }
}
