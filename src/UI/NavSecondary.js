import React, { Fragment } from "react";
import { NavLink, useRouteMatch, Route } from "react-router-dom";

import Destination from "../Pages/Destination";

import classes from "./NavSecondary.module.css";

const NavSecondary = () => {
  const { path } = useRouteMatch();

  return (
    <Fragment>
      <nav className={classes.navSecondaryContainer}>
        <NavLink
          to={`/destination/moon/`}
          className={classes.dotsContainer__active}
          activeClassName={classes.navSecondary__active}
        >
          Moon
        </NavLink>
        <NavLink
          to={`/destination/mars/`}
          activeClassName={classes.navSecondary__active}
        >
          Mars
        </NavLink>
        <NavLink
          to={`/destination/europa/`}
          activeClassName={classes.navSecondary__active}
        >
          Europa
        </NavLink>
        <NavLink
          to={`/destination/titan/`}
          activeClassName={classes.navSecondary__active}
        >
          Titan
        </NavLink>
      </nav>
      <Route
        key={`${path}/:destinationName`}
        path={`${path}/:destinationName`}
        exact
      >
        <Destination />
      </Route>
    </Fragment>
  );
};

export default NavSecondary;
