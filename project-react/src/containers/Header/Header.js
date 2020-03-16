import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "./Header.scss";

import PageName from "../../components/PageName/PageName";
import Datepicker from "../../components/Datepicker/Datepicker";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <PageName />
        <Switch>
          <Route
            path={["/", "/add-operation/"]}
            render={() => <Datepicker />}
          />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {};
}

function mapDispatchToProps(store) {
  return {};
}

export default connect()(Header);
