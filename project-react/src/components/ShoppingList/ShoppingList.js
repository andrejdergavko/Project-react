import React, { Component } from "react";
import { connect } from "react-redux";
import "./ShoppingList.scss";

class ShoppingList extends Component {
  render() {
    return <div className={'info-card'}></div>;
  }
}

// function mapStateToProps(store) {
//   return {
    
//   };
// }

// function mapDispatchToProps(store) {
//   return {
    
//   };
// }

export default connect()(ShoppingList);
