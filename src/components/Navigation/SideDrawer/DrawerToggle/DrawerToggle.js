import React from "react";
import classes from "../DrawerToggle/DrawerToggle.css";

const drawerToggle = props => (
  <div onClick={props.clicked} className={classes.DrawerToggle}>
    <div />
    <div />
    <div />
  </div>
);

export default drawerToggle;
