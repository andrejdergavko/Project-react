import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./Main.scss";

import CategoryPage from "../../components/CategoryPage/CategoryPage";

function Main(props) {
  return (
    <div className="main">
      <TransitionGroup className={"main__transition-group"}>
        <CSSTransition
          classNames="main__transition"
          key={props.location.key}
          timeout={{ enter: 100, exit: 100 }}
        >
          <Switch>
            <Route path="/" exact component={CategoryPage} />
            <Route path="/operations" render={() => <p>Operations</p>} />
            <Route path="/overview" render={() => <p>Overview</p>} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(Main);
