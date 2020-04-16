import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  fetchFilteredProperties,
  fetchProducts
} from "../redux/actions/getProperties";
import { logOutCreator } from "../redux/actions/getUser"

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearInput: "",
      menor: 0,
      mayor: 0
    };
    this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  /**** Para el search de propiedades por nombre, ubicacion. etc ****/
  onSearch(event) {
    event.preventDefault();
    const filterValue = this.state.menor || this.state.mayor ? true : false;
    this.props
      .fetchFilteredProperties(this.state.clearInput, {
        menor: this.state.menor,
        mayor: this.state.mayor,
        filterByPrice: filterValue
      })
      .then(() => {
        this.props.history.push(`/search/${this.state.clearInput}`);
      });
  }
  onLogout() {
    this.props.logOut();
  }

  render() {
    return (
      <Sidebar
        onSearch={this.onSearch}
        handleChange={this.handleChange}
        user={this.props.user}
        onLogout={this.onLogout}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    propiedadFiltrada: state.propiedadFiltrada,
    user: state.user.logged.username,
    propiedades: state.propiedades.propiedades //borralo de ser necesaio
  };
};

const matchDispatchToProps = function(dispatch, ownprops) {
  return {
    fetchFilteredProperties: (propiedadFiltrada, obj) =>
      dispatch(fetchFilteredProperties(propiedadFiltrada, obj)),
    // fetchPriceProperties: (menor, mayor) => dispatch(fetchPriceProperties(menor, mayor)),
    fetchProducts: () => dispatch(fetchProducts()),
    logOut: () => dispatch(logOutCreator())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    matchDispatchToProps
  )(SidebarContainer)
);
