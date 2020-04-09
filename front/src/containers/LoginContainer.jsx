import React, { Component } from "react";
import Login from "../components/Login";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { userLoginCreator } from "../redux/actions/getUser";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handlerChange = this.handlerChange.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
  }

  handlerChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  handlerSubmit(event) {
    event.preventDefault();
    this.props.userLogin(this.state)
  }

  render() {
    return <Login handlerChange={this.handlerChange} handlerSubmit={this.handlerSubmit} />;
  }
}

const matchDispatchToProps = (dispatch) => {
  return {
    userLogin: user => dispatch(userLoginCreator(user))
  };
};

export default withRouter(
  connect(
    null,
    matchDispatchToProps
  )(LoginContainer)
);
