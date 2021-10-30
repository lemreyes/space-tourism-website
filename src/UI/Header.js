import React, { useState } from "react";
import NavMain from "./NavMain";

import classes from "./Header.module.css";

import imgLogo from "./../assets/shared/logo.svg";
import imgBurgerIcon from "./../assets/shared/icon-hamburger.svg";
import imgCloseIcon from "./../assets/shared/icon-close.svg";

const Header = () => {
  const [displayNav, setDisplayNav] = useState(false);

  const handleBIclick = () => {
    displayNav === true ? setDisplayNav(false) : setDisplayNav(true);
  };

  let navIcon = displayNav === true ? imgCloseIcon : imgBurgerIcon;

  return (
    <header className={classes.headerContainer}>
      <div className={classes.logoContainer}>
        <img src={imgLogo} alt="Logo" />
      </div>
      <button
        aria-label="nav-button"
        className={classes.hbIcon}
        onClick={handleBIclick}
      >
        <img src={navIcon} alt="Hamburger Button" />
      </button>
      <NavMain display={displayNav}/>
    </header>
  );
};

export default Header;
