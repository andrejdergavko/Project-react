import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import "./AuthContainer.scss";

import Authorization from "../../components/auth/Authorization/Authorization";
import Registration from "../../components/auth/Registration/Registration";
import {
  loginUser,
  createUser,
  loadCurrencies
} from "../../store/auth/actions";

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationMode: false
    };

    this.changeRegistrationMode = this.changeRegistrationMode.bind(this);
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
      <div className="auth-container">
        <div className="auth-container__presentation-account">
          <div>presentation account</div>
          <div>login: andrei@gmail.com</div>
          <div>password: 111111</div>
        </div>
        {this.props.authorizedUser && <Redirect to="/" />}
        {this.state.registrationMode ? (
          <Registration
            changeRegistrationMode={this.changeRegistrationMode}
            currencies={this.props.currencies}
            loadCurrencies={this.props.loadCurrencies}
            createUser={this.props.createUser}
          />
        ) : (
          <Authorization
            changeRegistrationMode={this.changeRegistrationMode}
            loginUser={this.props.loginUser}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    authorizedUser: store.auth.authorizedUser,
    currencies: store.auth.currencies
  };
}

const mapDispatchToProps = {
  loginUser,
  loadCurrencies,
  createUser
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
