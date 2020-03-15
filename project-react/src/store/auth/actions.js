export const AUTH_ADD_AUTORIZED_USER = "AUTH_ADD_AUTORIZED_USER";
export const AUTH_ADD_ERROR_MESSAGE = "AUTH_ADD_ERROR_MESSAGE";
export const AUTH_LOAD_CURRENCIES_SUCCESS = "AUTH_LOAD_CURRENCIES_SUCCESS";

export const addAutorizedUser = (id, email) => ({
  type: AUTH_ADD_AUTORIZED_USER,
  payload: {
    id,
    email
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
  localStorage.setItem("mf-autorized-user-id", user.id);
  localStorage.setItem("mf-autorized-user-email", user.email);
};

export const loginUser = (email, password, isRemembered) => dispatch => {
  fetch(`http://localhost:3001/users?email=${email}&password=${password}`)
    .then(response => response.json())
    .then(users => {
      const user = users[0];
console.log(user)
      if (user) {
        if (isRemembered) {
          dispatch(
            saveUserToLocalStorage({ id: user.id, email: user.email })
          );
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
