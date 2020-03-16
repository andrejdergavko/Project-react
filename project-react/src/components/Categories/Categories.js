import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import "./Categories.scss";

import Category from "../Category/Category";
import AddOperationForm from "../AddOperationForm/AddOperationForm";

class Categories extends Component {
  render() {
    const { categories, operations, user, history: {push}} = this.props;

    const itemsList = categories.map(category => {
      let value = 0;

      operations.forEach(operation => {
        if (category.id === operation.categoryId) {
          value = value + operation.value;
        }
      });
      return (
        <Category
          key={category.id}
          title={category.title}
          value={value}
          color={category.color}
          currency={user.currency}
          onClick={() => push({pathname: `/${category.id}`})}
        />
      );
    });

    return (
      <div className={"categories info-card"}>
        {itemsList}
        <Route path="/:categoryId" render={() => <AddOperationForm categories={categories} />} />
      </div>
    );
  }
}

export default withRouter(Categories);
