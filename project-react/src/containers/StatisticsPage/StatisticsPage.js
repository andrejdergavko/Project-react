import React, { Component } from "react";
import { connect } from "react-redux";
import "./StatisticsPage.scss";

class StatisticsPage extends Component {
  render() {
    return <div className={"statistics-page"}>
      <div>1</div>
      <div>1</div>
      <div>1</div>
      <div>1</div>
    </div>;
  }
}

function mapStateToProps(store) {
  return {
    
  };
}

const mapDispatchToProps = {
  
};

export default connect()(StatisticsPage);
