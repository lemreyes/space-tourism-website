import React, { Fragment } from "react";
import { NavLink, useRouteMatch, Switch, Route } from "react-router-dom";
import Crew from "../Pages/Crew";
import classes from "./NavDots.module.css";

const NavDots = () => {
  const { path } = useRouteMatch();

  return (
    <Fragment>
      <nav className={classes.dotsContainer}>
        <NavLink
          to={`/crew/commander/`}
          className={classes.navButton}
          activeClassName={classes.navButton__active}
        >
          <button aria-label="Commander" className={classes.dot} />
        </NavLink>
        <NavLink
          to={`/crew/specialist/`}
          className={classes.navButton}
          activeClassName={classes.navButton__active}
        >
          <button aria-label="Specialist" className={classes.dot} />
        </NavLink>
        <NavLink
          to={`/crew/pilot/`}
          className={classes.navButton}
          activeClassName={classes.navButton__active}
        >
          <button aria-label="Pilot" className={classes.dot} />
        </NavLink>
        <NavLink
          to={`/crew/engr/`}
          className={classes.navButton}
          activeClassName={classes.navButton__active}
        >
          <button aria-label="Flight Engineer" className={classes.dot} />
        </NavLink>
      </nav>
      <Switch>
        <Route path={`${path}/:crewRole`} exact>
          <Crew />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default NavDots;
