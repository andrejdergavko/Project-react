import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Authorization from "../../components/Authorization/Authorization";
import Registration from "../../components/Registration/Registration";
import { addAutorizedUserId } from "../../store/auth/actions";

import "./AuthContainer.scss";

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationMode: false
    };

    this.checkEmailAndPassword = this.checkEmailAndPassword.bind(this);
    this.changeRegistrationMode = this.changeRegistrationMode.bind(this);
  }

  checkEmailAndPassword(email, password, isRemembered) {
    console.log(this.props);
    const url = `http://localhost:3001/users?email=${email}&password=${password}`;
    fetch(url)
      .then(response => response.json())
      .then(response => {
        if (response[0]) {
          if (isRemembered) this.saveAuthUserIdToLocalStorage(response[0].id);
          this.props.addAutorizedUserId(response[0].id);
          this.props.history.push("/");
        } else {
          console.log("Юзер не найден");
        }
      });
  }

  saveAuthUserIdToLocalStorage(id) {
    localStorage.setItem("mf-autorized-user-id", id);
  }

  changeRegistrationMode() {
    this.setState(state => {
      return {
        ...state,
        registrationMode: !state.registrationMode
      };
    });
  }

  render() {
    return (
      <div className='auth-container'>
        {this.props.authorizedUserId && <Redirect to="/" />}
        {this.state.registrationMode ? (
          <Registration changeRegistrationMode={this.changeRegistrationMode} />
        ) : (
          <Authorization
            changeRegistrationMode={this.changeRegistrationMode}
            checkEmailAndPassword={this.checkEmailAndPassword}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    authorizedUserId: store.auth.authorizedUserId
  };
}

const mapDispatchToProps = {
  addAutorizedUserId
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
