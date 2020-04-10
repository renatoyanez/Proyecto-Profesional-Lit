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

  onSearch(event) {
    event.preventDefault();
    this.props
      .fetchFilteredProperties(this.state.clearInput)
      .then(() => {
          this.props.history.push(`/search/${this.state.clearInput}`);
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
