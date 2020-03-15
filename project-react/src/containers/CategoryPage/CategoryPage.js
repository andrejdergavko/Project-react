import React, { Component } from "react";
import { connect } from "react-redux";
import "./CategoryPage.scss";

import Categories from "../../components/Categories/Categories";
import CategoryChart from "../../components/CategoryChart/CategoryChart";
import ShoppingList from "../../components/ShoppingList/ShoppingList";

import { loadDailyOperations } from "../../store/categoryPage/actions";

class CategoryPage extends Component {
  componentDidMount() {
    const { authorizedUserId, loadDailyOperations } = this.props;

    loadDailyOperations(authorizedUserId, Date.now());
  }

  render() {
    const { categories, operations } = this.props;

    return (
      <div className={"category-page"}>
        <Categories categories={categories} operations={operations} />
        <CategoryChart />
        <ShoppingList />
      </div>
    );
  }
}

function mapStateToProps(store) {
  return {
    authorizedUserId: store.auth.authorizedUserId,
    categories: store.app.categories,
    operations: store.categoryPage.dailyOperations
  };
}

const mapDispatchToProps = {
  loadDailyOperations
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
