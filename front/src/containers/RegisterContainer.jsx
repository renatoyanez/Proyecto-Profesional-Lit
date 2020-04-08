import React, { Component } from "react";
import Register from "../components/Register";
import { withRouter } from "react-router-dom";
import { createUser } from "../redux/actions/getUser";
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

  handlerChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handlerSubmit(e) {
    e.preventDefault();
    this.props.createUser(
      this.state.username,
      this.state.email,
      this.state.password
    )
  }

  render() {
    return (
      <Register
        handlerChange={this.handlerChange}
        handlerSubmit={this.handlerSubmit}
      />
    );
  }
}

const matchDispatchToProps = dispatch => {
  return {
    createUser: (username, email, password) =>
      dispatch(createUser(username, email, password))
  };
};

export default withRouter(connect(
  null,
  matchDispatchToProps
)(RegisterContainer));
