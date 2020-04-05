import React, { Component } from "react";
import Register from "../components/Register";
import { withRouter } from "react-router-dom";
import { userLogin } from "../redux/actions/getUser";
import axios from "axios";
import { connect } from "react-redux";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerChange(event) {
    this.setState({ username: event.target.value.substr(0, 20) });
  };

  handlerSubmit(event) {
    event.preventDefault();
    return axios
      .post("/api/users/register", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password
      })
      .then(user =>
        this.props.userLogin({
          email: user.data.email,
          password: this.state.password
        })
      );
  };

  render() {
    return (
      <Register
        handlerChange={this.handlerChange}
        handlerSubmit={this.handlerSubmit}
      />
    );
  }
}

const matchDispatchToProps = () => {
  return {
    userLogin: userLogin
  };
};

export default withRouter(
  connect(
    null,
    matchDispatchToProps
  )(RegisterContainer)
);
