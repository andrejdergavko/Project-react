import React, { Component } from "react";
import { connect } from "react-redux";
import "./CategoryPage.scss";

import Categories from "../../components/categoryPage/Categories/Categories";
import CategoryChart from "../../components/categoryPage/CategoryChart/CategoryChart";
import ShoppingList from "../../components/categoryPage/ShoppingTable/ShoppingTable";

import {
  loadDailyOperations,
  setOperation,
  deleteOperation
} from "../../store/categoryPage/actions";

class CategoryPage extends Component {
  constructor(props) {
    super(props);

    this.refreshOperations = this.refreshOperations.bind(this);
  }

  componentDidMount() {
    this.refreshOperations();
  }

  componentDidUpdate() {
    if (!this.props.isRelevant) {
      this.refreshOperations();
    }
  }

  refreshOperations() {
    const { user, loadDailyOperations, selectedDate } = this.props;
    loadDailyOperations(user.id, selectedDate);
  }

  render() {
    const {
      categories,
      operations,
      user,
      setOperation,
      selectedDate,
      deleteOperation
    } = this.props;

    const operationsList = categories.map(category => {
      let value = 0;

      operations.forEach(operation => {
        if (category.id === operation.categoryId) {
          value = value + operation.value;
        }
      });
      return {
        categoryId: category.id,
        title: category.title,
        color: category.color,
        icon: category.icon,
        value: value
      };
    });

    return (
      <div className={"category-page"}>
        <Categories
          categories={categories}
          user={user}
          setOperation={setOperation}
          selectedDate={selectedDate}
          operationsList={operationsList}
        />
        <CategoryChart
          currency={user.currency}
          operationsList={operationsList}
        />
        <ShoppingList
          categories={categories}
          operations={operations}
          currency={user.currency}
          deleteOperation={deleteOperation}
        />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    user: store.auth.authorizedUser,
    categories: store.app.categories,
    operations: store.categoryPage.dailyOperations,
    selectedDate: store.categoryPage.selectedDate,
    isRelevant: store.categoryPage.isRelevant
  };
}

const mapDispatchToProps = {
  loadDailyOperations,
  setOperation,
  deleteOperation
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
