import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Authorization from "../../components/Authorization/Authorization";
import Registration from "../../components/Registration/Registration";
import { loginUser } from "../../store/auth/actions";
import { fetchCurrenciesRequest } from "../../store/auth/actions";

import "./AuthContainer.scss";

class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registrationMode: true
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
        {this.props.authorizedUserId && <Redirect to="/" />}
        {this.state.registrationMode ? (
          <Registration
            changeRegistrationMode={this.changeRegistrationMode}
            currencies={this.props.currencies}
            fetchCurrenciesRequest={this.props.fetchCurrenciesRequest}
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
    authorizedUserId: store.auth.authorizedUserId,
    currencies: store.auth.currencies
  };
}

const mapDispatchToProps = {
  loginUser,
  fetchCurrenciesRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
