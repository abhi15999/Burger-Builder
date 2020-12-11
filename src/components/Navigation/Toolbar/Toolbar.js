import React from "react";
import classes from "./Toolbar.css";
import Logo from "../../Logo/Logo"
import MenuIcon from "../../MenuIcon/menuIcon"
import Navbar from "../NavigationItems/NavigationItems"

const Toolbar = (props) => {
  return (
    <header className={classes.Toolbar}>
      <MenuIcon clicked={props.toggle}/>
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
