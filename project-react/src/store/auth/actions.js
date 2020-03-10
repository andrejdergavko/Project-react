export const AUTH_ADD_AUTORIZED_USER_ID = "AUTH_ADD_AUTORIZED_USER_ID";
export const AUTH_ADD_ERROR_MESSAGE = "AUTH_ADD_ERROR_MESSAGE";
// export const FETCH_CURRENCIES_REQUEST = "FETCH_CURRENCIES_REQUEST";
export const FETCH_CURRENCIES_SUCCESS = "FETCH_CURRENCIES_SUCCESS";

export const addAutorizedUserId = id => ({
  type: AUTH_ADD_AUTORIZED_USER_ID,
  payload: {
    id
  }
});

export const addErrorMessage = message => ({
  type: AUTH_ADD_ERROR_MESSAGE,
  payload: {
    message
  }
});

export const fetchCurrenciesSuccess = currencies => ({
  type: FETCH_CURRENCIES_SUCCESS,
  payload: {
    currencies
  }
});

export const loginUser = (email, password, isRemembered) => dispatch => {
  fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
    .then(response => response.json())
    .then(response => {
      if (response[0]) {
        if (isRemembered) {
          localStorage.setItem("mf-autorized-user-id", response[0].id);
        }
        dispatch(addAutorizedUserId(response[0].id));
      } else {
        dispatch(addErrorMessage("Неверный логин или пароль"));
      }
    });
};

export const fetchCurrenciesRequest = () => dispatch => {
  fetch("http://localhost:3001/currencies")
    .then(response => response.json())
    .then(json => dispatch(fetchCurrenciesSuccess(json)));
};
