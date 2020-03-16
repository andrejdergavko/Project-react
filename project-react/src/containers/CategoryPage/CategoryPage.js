import React, { Component } from "react";
import { connect } from "react-redux";
import "./CategoryPage.scss";

import Categories from "../../components/Categories/Categories";
import CategoryChart from "../../components/CategoryChart/CategoryChart";
import ShoppingList from "../../components/ShoppingList/ShoppingList";

import {
  loadDailyOperations,
  setOperation
} from "../../store/categoryPage/actions";

class CategoryPage extends Component {
  
  componentDidMount() {
    const { user, loadDailyOperations, selectedDate } = this.props;

    loadDailyOperations(user.id, selectedDate);
  }

  render() {
    const { categories, operations, user, setOperation, selectedDate } = this.props;

    return (
      <div className={"category-page"}>
        <Categories
          categories={categories}
          operations={operations}
          user={user}
          setOperation={setOperation}
          selectedDate={selectedDate}
        />
        <CategoryChart />
        <ShoppingList />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    user: store.auth.authorizedUser,
    categories: store.app.categories,
    operations: store.categoryPage.dailyOperations,
    selectedDate: store.categoryPage.selectedDate
  };
}

const mapDispatchToProps = {
  loadDailyOperations,
  setOperation
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
