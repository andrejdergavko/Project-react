import React from "react";
import "./CategoryPage.scss";

import Category from "../../containers/Category/Category";
import CategoryChart from "../../containers/CategoryChart/CategoryChart";
import Amounts from "../../containers/Amounts/Amounts";

function CategoryPage(props) {
  return (
    <div className={'category-page'}>
      <Category />
      <CategoryChart />
      <Amounts />
    </div>
  );
}

export default CategoryPage;
