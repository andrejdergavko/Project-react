import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";

import "./Authorization.scss";

function Authorization(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    props.loginUser(email, password, isRemembered);
  }

  return (
    <div className="authorization">
      <div className="authorization__preview">
        <h3 className="authorization__header">Добро пожаловать в MonyFy</h3>
        <p className="authorization__text">
          Добро пожаловать в MonyFyДобро пожаловать в MonyFyДобро пожаловать в
          MonyFyДобро пожаловать в MonyFy
        </p>
        <button
          className="authorization__registration-button"
          onClick={props.changeRegistrationMode}
        >
          Зарегистрироваться
        </button>
      </div>

      <form className="authorization__form" onSubmit={handleSubmit}>
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

        <input className="authorization__submit" type="submit" value="Войти" />
      </form>
    </div>
  );
}

export default Authorization;
