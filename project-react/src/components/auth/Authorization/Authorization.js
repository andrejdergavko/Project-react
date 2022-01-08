import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

import "./Authorization.scss";

import Api from "../../../utils/api";

function Authorization(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);
  const [errors, setErrors] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const isCorrect = await isPasswordCorrect(email, password);

    if (isCorrect) {
      props.loginUser(email, password, isRemembered);
    } else {
      setErrors(["Неверный логин или пароль"]);
    }
  }

  function isPasswordCorrect(email, password) {
    return Api.loginUser(email, password)
      .then(response => response.json())
      .then(users => (users[0] ? true : false));
  }

  return (
    <div className="authorization">
      <div className="authorization__preview">
        <h3 className="authorization__header">MonyFy</h3>
        <p className="authorization__text">
          Приложение по учету рассходов. Мы поможем вам эффективно экономить
        </p>
        <button
          className="authorization__registration-button"
          onClick={props.changeRegistrationMode}
        >
          Зарегистрироваться
        </button>
      </div>

      <form className="authorization__form" onSubmit={handleSubmit}>
        <div className="authorization__error-block">
          {errors.map(error => {
            return (
              <div key={error} className="authorization__error">
                {error}
              </div>
            );
          })}
        </div>
        <label className="authorization__label" htmlFor="email">
          Email
        </label>
        <input
          className="authorization__inpyt"
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          name="email"
          placeholder="Введите email"
        />

        <label className="authorization__label " htmlFor="password">
          Пароль
        </label>
        <input
          className="authorization__inpyt "
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="password"
          placeholder="Введите пароль"
        />

        <div className="authorization__checkbox-wrapper">
          <Checkbox
            checked={isRemembered}
            onChange={event => setIsRemembered(event.target.checked)}
            value="primary"
            color="primary"
            inputProps={{ "aria-label": "primary checkbox" }}
            name="isRemembered"
          />
          <label className="authorization__label authorization__label_checkbox">
            Запомнить меня
          </label>
        </div>

        <input
          className="authorization__submit button"
          type="submit"
          value="Войти"
        />
      </form>
    </div>
  );
}

export default Authorization;
