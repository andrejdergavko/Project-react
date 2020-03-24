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
              <img
                className="aside__icon"
                alt='Категории'
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABKUlEQVQ4jZXRvWpUURTF8XXCgCSTYK2tT2AlWKWyFlKlSKMvkIfzCysJmkILtQxBIyi2wTgjCMP8LNxXLieZkezmcPde63/2XSdZU9hYN0+SSwLs4QQXSWa4wCn215JwA8dYYoav/ta3+l7iLTZXAd6U6CV28KAAD7GNFwPkKvPeYB71/gFGvaelO+gBJ7Xmzn8A08rk09Cb1HkryXmSexhmd/tNW2tznCW5g9ZaE0zwy+p6PX5OPMPvYdtJa22BRZLvSQ67Sw+T3E/yCruttWWS20kWSWbjDE4rg+0umw0cVXBH2MIPfOlD3C/R8/6/O8h5nY97XfCuhk8w7WZbZYb3aFcBNkeQn/hY7/6h1l6WeXrJ3IEO8BnzSnuOMzxaa1wBu3lt03XrDxMXotciZqTQAAAAAElFTkSuQmCC"
              ></img>
              Категории
            </NavLink>
          </li>

          <li className="aside__nav-item">
            <NavLink
              className="aside__nav-link"
              activeClassName="aside__nav-link_active"
              to="/statistics"
            >
              <img
                className="aside__icon"
                alt='Обзор'
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAAAVklEQVRIie2SSwoAIAgFs/vfKjrXaxdFLSwU+rxZijDgGAIhGwDIGEntjjiJMZuLSPVFD7GGM8SaNlZ0jTVtNLCxidjqD5YbW+3cc2qKKaaY4n/F5H0K39hefjnKdj0AAAAASUVORK5CYII="
              ></img>
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
