import React from "react";
import classes from "./Header.module.css";
import logo from "../assets/fakerlogo.png";

const Header = () => {
  return (
    <header className={classes.mainHeader}>
      <div className={classes.headerBrand}>
        <a href="#">
          <img src={logo} alt="brand logo" />
        </a>
      </div>
      <nav className={classes.mainNav}>
        <a href="#" className={classes.mainNavItems}>
          About
        </a>
        <a href="#" className={classes.mainNavItems}>
          Work
        </a>
        <a href="#" className={classes.mainNavItems}>
          Services
        </a>
        <a href="#" className={classes.mainNavItems}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
