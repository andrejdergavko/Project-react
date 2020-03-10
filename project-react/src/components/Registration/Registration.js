import React, { useState, useEffect } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

import "./Registration.scss";

import { validate } from "../../utils/validation/registrationValidation";

function Registration(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [currency, setCurrency] = useState("");
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    props.fetchCurrenciesRequest();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const errorMessages = validate([
      {
        name: "email",
        value: email
      },
      {
        name: "password",
        value: password
      },
      {
        name: "currency",
        value: currency
      }
    ]);

    if (errorMessages[0]) {
      setErrors(errorMessages);
      return;
    } else if (password !== passwordAgain) {
      setErrors(["Введенные пароли не совпадают"]);
      return;
    } else {
      console.log("посылаем запрос");
    }
  }

  return (
    <div className="registration">
      <div className="registration__preview">
        <h3 className="registration__header">Добро пожаловать в MonyFy</h3>
        <p className="registration__text">
          Добро пожаловать в MonyFyДобро пожаловать в MonyFyДобро пожаловать в
          MonyFyДобро пожаловать в MonyFy
        </p>
        <button
          className="registration__registration-button"
          onClick={props.changeRegistrationMode}
        >
          Авторизоваться
        </button>
      </div>

      <form className="registration__form" onSubmit={handleSubmit}>
        <div className="registration__error-block">
          {errors.map(error => {
            return (
              <div key={error} className="registration__error">
                {error}
              </div>
            );
          })}
        </div>
        <label className="registration__label" htmlFor="email">
          Email
        </label>
        <input
          className="registration__inpyt"
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          name="email"
          placeholder="Введите email"
        />

        <label className="registration__label" htmlFor="password">
          Пароль
        </label>
        <input
          className="registration__inpyt"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="password"
          placeholder="Введите пароль"
        />

        <input
          className="registration__inpyt"
          type="password"
          value={passwordAgain}
          onChange={event => setPasswordAgain(event.target.value)}
          name="passwordAgain"
          placeholder="Введите пароль еще раз"
        />

        <label className="registration__label" htmlFor="currency">
          Валюта
        </label>
        <Select
          className="registration__select"
          name="currency"
          value={currency}
          onChange={event => setCurrency(event.target.value)}
          displayEmpty
        >
          <MenuItem value="" disabled>
            <span className="registration__menu-item_placeholder">
              Выберите свою валюту
            </span>
          </MenuItem>
          {props.currencies &&
            props.currencies.map(item => {
              return (
                <MenuItem
                  className="registration__menu-item"
                  key={item.id}
                  value={item.code}
                >
                  <span>{`${item.title} (${item.code})`}</span>
                </MenuItem>
              );
            })}
        </Select>

        <input className="registration__submit" type="submit" value="Войти" />
      </form>
    </div>
  );
}

export default Registration;
