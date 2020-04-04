import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFilteredProperties } from "../redux/actions/getProperties";

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearInput: ""
    };
    this.onSearch = this.onSearch.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    this.setState({ clearInput: event.target.value.substr(0, 30) });
  }

  // the route bellow this action will face is /search. which is the page with the results shown when the user searches for something

  onSearch(event) {
    event.preventDefault();
    this.props
      .fetchFilteredProperties(this.state.clearInput)
      .then(() => {
          this.props.history.push("/");
        })
        .then(() => this.setState({ clearInput: "" }))
  }

  render() {
    return (
      <Sidebar
        onSearch={this.onSearch}
        clearInput={this.state.clearInput}
        updateSearch={this.updateSearch}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    propiedadFiltrada: state.propiedadFiltrada
  };
};

const matchDispatchToProps = function(dispatch, ownprops) {
  return {
    fetchFilteredProperties: propiedadFiltrada =>
      dispatch(fetchFilteredProperties(propiedadFiltrada))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    matchDispatchToProps
  )(SidebarContainer)
);
