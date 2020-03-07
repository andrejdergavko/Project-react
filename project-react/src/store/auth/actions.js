export const AUTH_ADD_AUTORIZED_USER_ID = "AUTH_ADD_AUTORIZED_USER_ID";

export const addAutorizedUserId = id => ({
  type: AUTH_ADD_AUTORIZED_USER_ID,
  payload: {
    id
  }
});
