import React, { Fragment } from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import Technology from "../Pages/Technology";

import classes from "./NavButton.module.css";

const NavButton = () => {
  const { path } = useRouteMatch();

  return (
    <Fragment>
      <nav className={classes.navButtonContainer}>
        <NavLink
          to={`/tech/vehicle/`}
          activeClassName={classes.navButtonContainer__active}
        >
          <button aria-label="Launch Vehicle" className={classes.navButton}>
            1
          </button>
        </NavLink>
        <NavLink
          to={`/tech/spaceport/`}
          activeClassName={classes.navButtonContainer__active}
        >
          <button aria-label="Space Port" className={classes.navButton}>
            2
          </button>
        </NavLink>
        <NavLink
          to={`/tech/capsule/`}
          activeClassName={classes.navButtonContainer__active}
        >
          <button aria-label="Space Capsule" className={classes.navButton}>
            3
          </button>
        </NavLink>
      </nav>
      <Switch>
        <Route path={`${path}/:tech`} exact>
          <Technology />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default NavButton;
