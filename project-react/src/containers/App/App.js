import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import "./App.scss";
import "../../style/common.scss";

import Content from "../Content/Content";
import AuthContainer from "../AuthContainer/AuthContainer";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/authorization" component={AuthContainer} />
        {!this.props.authorizedUser && <Redirect to="/authorization" />}
        <Route path="/" component={Content} />
      </Switch>
    );
  }
}

function mapStateToProps(store) {
  return {
    authorizedUser: store.auth.authorizedUser
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
