import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Avatar from "@material-ui/core/Avatar";
import "./navbar.css";
const styles = {
  flex: {
    flex: 1
  },
  fixPosition: {
    position: "static"
  }
};

function Navbar(props) {
  return (
    <AppBar className={props.classes.fixPosition}>
      <Toolbar>
        <h1 variant="title" color="inherit" className={props.classes.flex}>
          Front end task
        </h1>
        <div className="user">
          <div className="user-devices-number">
            <i className="fas fa-users" /> 22564
          </div>
          <div className="user-apps-number">
            <i className="fas fa-th" /> 45
          </div>
          <p className="user__name">mohamed amged</p>
          <Avatar
            className="user__pic"
            alt="Adelle Charles"
            src="http://via.placeholder.com/100x100"
          />
          <p className="user__logout">
            <a href="/">logout</a>
          </p>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Navbar);
