import React, { Component } from "react";
import { connect } from "react-redux";
import "./Amounts.scss";

class Amounts extends Component {
  render() {
    return <div className={'info-card'}>Amounts</div>;
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

export default connect()(Amounts);
