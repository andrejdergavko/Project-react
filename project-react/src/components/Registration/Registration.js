import React, { useState } from "react";

import "./Registration.scss";

function Registration(props) {
  const [email, setEmail] = useState("");
  const [password] = useState("");
  const [isRemembered] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    props.loginUser(email, password, isRemembered);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        name="email"
      />
      <button onClick={props.changeRegistrationMode}>Авторизация</button>
      <input type="submit" />
    </form>
  );
}

export default Registration;
