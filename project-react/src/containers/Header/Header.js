import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "./Header.scss";

import PageName from "../../components/app/PageName/PageName";
import Datepicker from "../../components/categoryPage/Datepicker/Datepicker";
import { loadDailyOperations } from "../../store/categoryPage/actions";
import { deleteUserFromLocalStorage } from "../../store/auth/actions";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <PageName />
        <Switch>
          <Route
            exact
            path={["/", "/add-operation/:categoryId"]}
            render={() => (
              <Datepicker
                loadDailyOperations={this.props.loadDailyOperations}
                userId={this.props.userId}
              />
            )}
          />
        </Switch>
        <button
          className="header__exit-button"
          onClick={() => {
            this.props.deleteUserFromLocalStorage();
            window.location.reload();
          }}
        >
          Выход
        </button>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    userId: store.auth.authorizedUser.id
  };
}

const mapDispatchToProps = {
  loadDailyOperations,
  deleteUserFromLocalStorage
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
