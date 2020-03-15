import React, { Component } from "react";

import "./Categories.scss";

import Category from "../Category/Category";

class Categories extends Component {
  render() {
    const { categories, operations } = this.props;

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
        />
      );
    });

    return <div className={"categories info-card"}>{itemsList}</div>;
  }
}

export default Categories;
