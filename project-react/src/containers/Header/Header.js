import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "./Header.scss";

import PageName from "../../components/PageName/PageName";
import Datepicker from "../../components/Datepicker/Datepicker";
import {loadDailyOperations} from '../../store/categoryPage/actions';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <PageName />
        <Switch>
          <Route
          exact
            path={["/", "/add-operation/:categoryId"]}
            render={() => <Datepicker loadDailyOperations={this.props.loadDailyOperations}/>}
          />
        </Switch>
        <button className='header__exit-button'>Выход</button>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {};
}

const mapDispatchToProps = {
  loadDailyOperations
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
