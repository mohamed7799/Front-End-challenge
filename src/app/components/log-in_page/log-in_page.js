import React, { Component } from "react";
import "./log-in_page.css";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { Redirect } from "react-router-dom";
//for overriding the material UI style
const style = {
  form__button: {
    display: "block",
    marginLeft: "auto"
  },
  form__input: {
    width: "100%"
  }
};

class Login extends Component {
  state = {
    userValue: "",
    passValue: "",
    path: false
  };

  checkUser = () => {
    if (
      this.state.userValue === "codechallenge@gmail.com" &&
      this.state.passValue === "secret"
    ) {
      this.setState({ path: true });
    } else {
      alert("Wrong username or password");
    }
  };

  onchange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.state.path === true) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <div className="login">
          <form className="login__form">
            <h1>Hello!!!!</h1>
            <br />
            <br />
            <br />
            <label>Email</label>
            <Input
              value={this.state.userValue}
              name="userValue"
              onChange={this.onchange}
              className={this.props.classes.form__input}
            />
            <br />
            <br />
            <label>Password</label>
            <Input
              value={this.state.passValue}
              name="passValue"
              onChange={this.onchange}
              className={this.props.classes.form__input}
              type="password"
            />
            <br />
            <br />
            <br />

            <Button
              onClick={this.checkUser}
              variant="contained"
              color="primary"
              className={this.props.classes.form__button}
            >
              Login
            </Button>
          </form>
        </div>
      );
    }
  }
}

export default withStyles(style)(Login);
