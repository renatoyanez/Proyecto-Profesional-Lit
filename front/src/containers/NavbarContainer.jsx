import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom"


class NavbarContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar user={this.props.user}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user.logged.username
  };
};

export default withRouter(connect(mapStateToProps)(NavbarContainer))