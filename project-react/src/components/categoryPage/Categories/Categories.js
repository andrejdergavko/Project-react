import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import nanoid from "nanoid";

import "./Categories.scss";

import Category from "../Category/Category";
import AddOperationForm from "../AddOperationForm/AddOperationForm";

class Categories extends Component {
  constructor(props) {
    super(props);
    this.addOperation = this.addOperation.bind(this);
  }

  addOperation = (sum, categoryId) => {
    this.props.setOperation({
      id: nanoid(),
      userId: this.props.user.id,
      categoryId: categoryId,
      value: sum,
      date: this.props.selectedDate
    });

    this.props.history.push("/");
  };

  render() {
    const {
      categories,
      user,
      operationsList,
      history: { push }
    } = this.props;

    const categoriesList = operationsList.map(operation => {
      return (
        <Category
          key={operation.categoryId}
          icon={operation.icon}
          title={operation.title}
          value={operation.value}
          color={operation.color}
          currency={user.currency}
          onClick={() =>
            push({ pathname: `/add-operation/${operation.categoryId}` })
          }
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
