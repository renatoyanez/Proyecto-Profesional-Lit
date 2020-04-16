import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFilteredProperties, fetchProducts } from "../redux/actions/getProperties";

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
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

/**** Para el search de propiedades por nombre, ubicacion. etc ****/
  onSearch(event) {
    event.preventDefault();
    const filterValue = this.state.menor || this.state.mayor ? true : false
    this.props.fetchFilteredProperties(this.state.clearInput, { menor: this.state.menor,
      mayor: this.state.mayor, filterByPrice: filterValue})
      .then(() => {
          this.props.history.push(`/search/${this.state.clearInput}`);
        })
  }


  /***** Para el rango de precio *****/
  // onPriceSearch(event) {
  //   event.preventDefault();
  //   this.props.fetchPriceProperties(this.state.menor, this.state.mayor)
  //   .then(() => {
  //     this.props.history.push(`/price/${this.state.menor}/${this.state.mayor}`);
  //   })
  //   .then(() => this.setState({ menor: 0, mayor: 0 }))
  // }
  

  render() {
    console.log(this.state);

    return (
      <Sidebar
        onSearch={this.onSearch}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    propiedadFiltrada: state.propiedadFiltrada,
    propiedades: state.propiedades.propiedades //borralo de ser necesaio
  };
};

const matchDispatchToProps = function(dispatch, ownprops) {
  return {
    fetchFilteredProperties: (propiedadFiltrada, obj) => dispatch(fetchFilteredProperties(propiedadFiltrada, obj)),
    // fetchPriceProperties: (menor, mayor) => dispatch(fetchPriceProperties(menor, mayor)),
    fetchProducts: () => dispatch(fetchProducts()) //borralo de ser necesaio
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    matchDispatchToProps
  )(SidebarContainer)
);
