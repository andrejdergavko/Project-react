import React, { Component } from "react";
import { connect } from "react-redux";
import "./CategoryChart.scss";

class CategoryChart extends Component {
  render() {
    return <div className={'info-card'}>CategoryChart</div>;
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

export default connect()(CategoryChart);
