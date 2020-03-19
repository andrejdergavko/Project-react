import Api from "../../utils/api";

export const AUTH_ADD_AUTORIZED_USER = "AUTH_ADD_AUTORIZED_USER";
export const AUTH_ADD_ERROR_MESSAGE = "AUTH_ADD_ERROR_MESSAGE";
export const AUTH_LOAD_CURRENCIES_SUCCESS = "AUTH_LOAD_CURRENCIES_SUCCESS";

export const addAutorizedUser = user => ({
  type: AUTH_ADD_AUTORIZED_USER,
  payload: {
    user
  }
});

export const addErrorMessage = message => ({
  type: AUTH_ADD_ERROR_MESSAGE,
  payload: {
    message
  }
});

export const loadCurrenciesSuccess = currencies => ({
  type: AUTH_LOAD_CURRENCIES_SUCCESS,
  payload: {
    currencies
  }
});

export const saveUserToLocalStorage = user => () => {
  localStorage.setItem("mf-autorized-user", JSON.stringify(user));
};

export const deleteUserFromLocalStorage = () => () => {
  localStorage.removeItem("mf-autorized-user");
};

export const loginUser = (email, password, isRemembered) => dispatch => {
  Api.loginUser(email, password)
    .then(response => response.json())
    .then(users => {
      const user = users[0];
      console.log(user);
      if (user) {
        if (isRemembered) {
          dispatch(saveUserToLocalStorage(user));
        }
        dispatch(addAutorizedUser(user));
      } else {
        dispatch(addErrorMessage("Неверный логин или пароль"));
      }
    });
};

export const createUser = (user, isRemembered) => async dispatch => {
  await Api.createUser(user);

  dispatch(loginUser(user.email, user.password, isRemembered));
};

export const loadCurrencies = () => dispatch => {
  Api.loadCurrencies()
    .then(response => response.json())
    .then(json => dispatch(loadCurrenciesSuccess(json)));
};
