import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./Main.scss";

function Main(props) {
  return (
    <div className="main">
      <TransitionGroup>
        <CSSTransition
          classNames="main__transition"
          key={props.location.key}
          timeout={{ enter: 100, exit: 100 }}
        >
          <Switch>
            <Route path="/" exact render={() => <p>Home</p>} />
            <Route path="/operations" render={() => <p>Operations</p>} />
            <Route path="/overview" render={() => <p>Overview</p>} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default withRouter(Main);
