import { AUTH_ADD_AUTORIZED_USER_ID } from "../auth/actions";

const initialStore = {
  authorizedUserId: localStorage.getItem("mf-autorized-user-id")
};

export function authReducer(state = initialStore, action) {
  console.log("Редуктор словил action", action);
  switch (action.type) {
    case AUTH_ADD_AUTORIZED_USER_ID:
      return {
        ...state,
        authorizedUserId: action.payload.id
      };

    default:
      return state;
  }
}
