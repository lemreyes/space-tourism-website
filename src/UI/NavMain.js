import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavMain.module.css";

const NavMain = (props) => {
  let navStyle = "";
  if (props.display === true) {
    navStyle = `${classes.navContainer} ${classes["navContainer--display"]}`;
  } else {
    navStyle = `${classes.navContainer}`;
  }

  return (
    <nav className={navStyle} aria-label="Main navigation">
      <NavLink to="/home" activeClassName={classes["navContainer__active"]}>
        <span className={classes.numPrefix}>00</span> Home
      </NavLink>
      <NavLink
        to="/destination"
        activeClassName={classes["navContainer__active"]}
      >
        <span className={classes.numPrefix}>01</span> Destination
      </NavLink>
      <NavLink to="/crew" activeClassName={classes["navContainer__active"]}>
        <span className={classes.numPrefix}>02</span> Crew
      </NavLink>
      <NavLink
        to="/tech"
        activeClassName={classes["navContainer__active"]}
      >
        <span className={classes.numPrefix}>03</span> Technology
      </NavLink>
    </nav>
  );
};

export default NavMain;
