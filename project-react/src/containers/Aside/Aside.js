import React from "react";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import "./Aside.scss";

import UserBox from "../../components/app/UserBox/UserBox";

function Aside(props) {
  return (
    <aside className="aside">
      <div className="aside__box-logo">MonyFy</div>
      <UserBox authorizedUserEmail={props.authorizedUser.email} />
      <nav className="aside__nav">
        <ul className="aside__nav-list">
          <li className="aside__nav-item">
            <NavLink
              isActive={() => {
                const path = props.location.pathname;
                if (path.indexOf("add-operation") + 1 || path === "/") {
                  return true;
                }
              }}
              exact
              className="aside__nav-link"
              activeClassName="aside__nav-link_active"
              to="/"
            >
              Категории
            </NavLink>
          </li>

          <li className="aside__nav-item">
            <NavLink
              className="aside__nav-link"
              activeClassName="aside__nav-link_active"
              to="/statistics"
            >
              Обзор
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

function mapStateToProps(store) {
  return {
    authorizedUser: store.auth.authorizedUser
  };
}

export default connect(mapStateToProps)(withRouter(Aside));
