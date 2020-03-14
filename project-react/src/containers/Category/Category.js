import React, { Component } from "react";
import { connect } from "react-redux";
import "./Category.scss";

class Category extends Component {
  render() {
    return <div className={'category info-card'}>Category</div>;
  }
}

function mapStateToProps(store) {
  return {
    
  };
}

function mapDispatchToProps(store) {
  return {
    
  };
}

export default connect()(Category);
