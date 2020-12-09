import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo"
import Navbar from "../NavigationItems/NavigationItems"

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <div>Menu</div>
      <div className={classes.Logo}>
      <Logo/>
      </div>
      <nav className={classes.DesktopOnly}>
        <Navbar/>
      </nav>
    </header>
  );
};
export default Toolbar;
