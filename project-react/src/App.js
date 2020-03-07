import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

import "./App.scss";

import Aside from "./containers/Aside/Aside";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import AuthContainer from './containers/AuthContainer/AuthContainer';

class App extends Component {
  render() {
    const content = (
      <div className='content'>
        <div className="app__header">
          <Header />
        </div>
        <div className="app__aside">
          <Aside />
        </div>
        <div className="app__main">
          <Main />
        </div>
      </div>
    );

    return (
      <div className="app">
        <Route path="/authorization" component={AuthContainer}/>
        {this.props.authorizedUserId ? content : <Redirect to="/authorization" />}
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    authorizedUserId: store.auth.authorizedUserId
  };
}

export default connect(mapStateToProps)(App);
