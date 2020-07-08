import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuNavBar() {
  return (
    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <NavLink exact class="navbar-brand" to="/">
          LOGO
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <NavLink exact activeClassName="current" to="/">
                Inicio
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact activeClassName="current" to="/page1">
                Page 1
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink exact activeClassName="current" to="/page2">
                Pagina 2
              </NavLink>
            </li>
          </ul>
          <form class="form-inline mt-2 mt-md-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
