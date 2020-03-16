import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import nanoid from 'nanoid';

import "./Categories.scss";

import Category from "../Category/Category";
import AddOperationForm from "../AddOperationForm/AddOperationForm";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.addOperation = this.addOperation.bind(this);
  }

  addOperation = (sum, categoryId) => {
    const {setOperation, user, history: { push }, selectedDate} = this.props

    setOperation({
      id: nanoid(),
      userId: user.id,
      categoryId: categoryId,
      value: sum,
      date: selectedDate
    })

    push('/')
  };

  render() {
    const {
      categories,
      operations,
      user,
      history: { push }
    } = this.props;

    const categoriesList = categories.map(category => {
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
          onClick={() => push({ pathname: `/add-operation/${category.id}` })}
        />
      );
    });

    return (
      <div className={"categories info-card"}>
        {categoriesList}
        <Route
          path="/add-operation/:categoryId"
          render={() => (
            <AddOperationForm
              categories={categories}
              currency={user.currency}
              addOperation={this.addOperation}
            />
          )}
        />
      </div>
    );
  }
}

export default withRouter(Categories);
