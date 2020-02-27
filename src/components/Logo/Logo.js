import React from "react";
import logo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const burgerLogo = props => (
  <div className={classes.Logo}>
    <img src={logo} alt="My Burger" />
  </div>
);

export default burgerLogo;
