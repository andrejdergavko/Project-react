import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { rootReducer } from "./store/reducers";
import { BrowserRouter } from "react-router-dom";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import App from "./containers/App/App";

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));

const app = (
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
