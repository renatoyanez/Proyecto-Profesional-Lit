import React, { Component } from "react";
import Login from "../components/Login";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class RegisterContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Login />
    );
  }
}


export default withRouter(connect(
  null,
  null
)(RegisterContainer));
