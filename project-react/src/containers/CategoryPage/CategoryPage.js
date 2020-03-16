import React, { Component } from "react";
import { connect } from "react-redux";
import "./CategoryPage.scss";

import Categories from "../../components/Categories/Categories";
import CategoryChart from "../../components/CategoryChart/CategoryChart";
import ShoppingList from "../../components/ShoppingList/ShoppingList";

import { loadDailyOperations } from "../../store/categoryPage/actions";

class CategoryPage extends Component {
  componentDidMount() {
    const { user, loadDailyOperations } = this.props;

    loadDailyOperations(user.id, Date.now());
  }

  render() {
    const { categories, operations, user } = this.props;

    return (
      <div className={"category-page"}>
        <Categories categories={categories} operations={operations} user={user}/>
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
  };
}

const mapDispatchToProps = {
  loadDailyOperations
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
