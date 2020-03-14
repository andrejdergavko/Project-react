import React from "react";
import "./UserBox.scss";

function UserBox(props) {
  const { authorizedUserEmail: userEmail } = props;

  const email =
    userEmail.length <= 15 ? userEmail : userEmail.substring(0, 15) + "...";
    
  return (
    <div className="user-box">
      <div className="user-box__icon">{props.authorizedUserEmail[0]}</div>
      <p className="user-box__email">{email}</p>
    </div>
  );
}

export default UserBox;
