import React, { useState } from "react";
import Checkbox from "material-ui/Checkbox";

import "./Authorization.scss";

function Authorization(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRemembered, setIsRemembered] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    props.checkEmailAndPassword(email, password, isRemembered);
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
        <h3 className="authorization__title">Вход</h3>
        <input
          className="authorization__inpyt"
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          name="email"
          placeholder="Email"
        />
        <input
          className="authorization__inpyt"
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
          name="password"
          placeholder="Пароль"
        />
        <Checkbox
          label="Запомнить меня"
          labelPosition="left"
          checked={isRemembered}
          onChange={event => setIsRemembered(event.target.checked)}
          name="isRemembered"
        />
        {/* <input
          type="checkbox"
          checked={isRemembered}
          onChange={event => setIsRemembered(event.target.checked)}
          name="isRemembered"
        /> */}
        <input type="submit" />
      </form>
    </div>
  );
}

export default Authorization;
