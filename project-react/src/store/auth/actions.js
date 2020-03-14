export const AUTH_ADD_AUTORIZED_USER_ID = "AUTH_ADD_AUTORIZED_USER_ID";
export const AUTH_ADD_ERROR_MESSAGE = "AUTH_ADD_ERROR_MESSAGE";
export const AUTH_LOAD_CURRENCIES_SUCCESS = "AUTH_LOAD_CURRENCIES_SUCCESS";

export const addAutorizedUser = (id, email) => ({
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

export const loadCurrenciesSuccess = currencies => ({
  type: AUTH_LOAD_CURRENCIES_SUCCESS,
  payload: {
    currencies
  }
});

export const saveUserIdToLocalStorage = id => () => {
  localStorage.setItem("mf-autorized-user-id", id);
};

export const loginUser = (email, password, isRemembered) => dispatch => {
  fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
    .then(response => response.json())
    .then(users => {
      const user = users[0];

      if (user) {
        if (isRemembered) {
          dispatch(saveUserIdToLocalStorage(user.id));
        }
        dispatch(addAutorizedUser(user.id, user.email));
      } else {
        dispatch(addErrorMessage("Неверный логин или пароль"));
      }
    });
};

export const loadCurrencies = () => dispatch => {
  fetch("http://localhost:3001/currencies")
    .then(response => response.json())
    .then(json => dispatch(loadCurrenciesSuccess(json)));
};

export const createUser = (user, isRemembered) => async dispatch => {
  await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify(user)
  });

  dispatch(loginUser(user.email, user.password, isRemembered));
};
