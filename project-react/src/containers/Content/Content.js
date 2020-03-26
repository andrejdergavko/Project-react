import React, { Component } from "react";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import "./Content.scss";

import Main from "../../components/app/Main/Main";
import Aside from "../Aside/Aside";
import Header from "../Header/Header";

import { loadUserCategories } from "../../store/app/actions";

class Content extends Component {
  componentDidMount() {
    this.props.loadUserCategories(this.props.authorizedUser.id);
  }

  render() {
    return (
      <div className="content">
        <div className="content__header">
          <Header />
        </div>
        <div className="content__aside">
          <Aside />
        </div>
        <div className="content__main">
          {this.props.isLoading ? <CircularProgress className="spinner"/> : <Main />}
        </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    authorizedUser: store.auth.authorizedUser,
    isLoading: store.app.isLoading
  };
}

const mapDispatchToProps = {
  loadUserCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
