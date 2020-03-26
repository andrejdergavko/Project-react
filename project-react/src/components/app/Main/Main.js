import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./Main.scss";

import CategoryPage from "../../../containers/CategoryPage/CategoryPage";
import StatisticsPage from "../../../containers/StatisticsPage/StatisticsPage";

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route path="/statistics" component={StatisticsPage} />
        <Route path="/" component={CategoryPage} />
      </Switch>
    </div>
  );
}

export default withRouter(Main);
