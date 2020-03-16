import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./Main.scss";

import CategoryPage from "../../containers/CategoryPage/CategoryPage";

function Main(props) {
  return (
    <div className="main">
      <Switch>
        <Route path="/operations" render={() => <p>Operations</p>} />
        <Route path="/overview" render={() => <p>Overview</p>} />
        <Route path="/" component={CategoryPage} />
      </Switch>
    </div>
  );
}

export default withRouter(Main);
