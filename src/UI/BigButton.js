import React from "react";
import { Link } from "react-router-dom";
import classes from "./BigButton.module.css";

const BigButton = (props) => {
  return (
    <div className={classes.buttonStyle}>
      <Link to="/destination">{props.text}</Link>
    </div>
  );
};

export default BigButton;
