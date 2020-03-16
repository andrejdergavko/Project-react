import React from "react";
import { Route, Switch } from "react-router-dom";

import "./PageName.scss";

function PageName(props) {
  return (
    <div className='pageName'>
      <Switch>
        <Route path="/operations" render={() => <h3 className='pageName'>Операции</h3>} />
        <Route path="/overview" render={() => <h3 className='pageName'>Обзор</h3>} />
        <Route path="/" render={() => <h3 className='pageName'>Категории</h3>} />
      </Switch>
    </div>
  );
}

export default PageName;
