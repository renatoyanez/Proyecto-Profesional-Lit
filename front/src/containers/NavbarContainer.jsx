// import React, { Component } from "react";
// import Navbar from "../components/Navbar";
// import { connect } from "react-redux";
// import { withRouter } from "react-router-dom"
// import { logOutCreator } from "../redux/actions/getUser"


// class NavbarContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.onLogout = this.onLogout.bind(this)
//   }

//   onLogout() {
//     this.props.logOut()
//   }

//   render() {
//     return (
//       <Navbar user={this.props.user} onLogout={this.onLogout} />
//     );
//   }


// const mapStateToProps = (state, ownProps) => {
//   return {
//    user: state.user.logged.username
//   };
// };

// const matchDispatchToProps = function (dispatch, ownprops) {
//   return {
//     logOut: () => dispatch(logOutCreator()),
//   }
// }

// export default withRouter(connect(mapStateToProps, matchDispatchToProps)(NavbarContainer))