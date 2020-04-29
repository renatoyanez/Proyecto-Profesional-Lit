import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFilteredProperties, fetchProducts } from "../redux/actions/getProperties";
import { logOutCreator } from "../redux/actions/getUser"
import { fetchCategoriesCreator, fetchSearchedCategories } from '../redux/actions/getCategories'

class SidebarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearInput: "",
      menor: 0,
      mayor: 0,
      categories: {}
    };
    this.onSearch = this.onSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this)
  }

  componentDidMount() {

    if (!this.props.categories.length) this.props.fetchCategoriesCreator()
      .then(() => {
        const objectOfCategories = {};
        this.props.categories.map(category => {

          objectOfCategories[category.name] = false

        })
        // console.log(objectOfCategories)
        this.setState({ categories: objectOfCategories })
      }).then(() => console.log("ESTADO DE CATEGORIAS: ", this.state.categories))
  }


  handleCatChange(event) {
    this.setState({ categories: {...this.state.categories, [event.target.name]: event.target.checked } })
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**** Para el search de propiedades por nombre, ubicacion. etc ****/
  onSearch(event) {
    event.preventDefault();

    const objectOfCategories = this.state.categories

    let arrayOfCategories = [];
    for (let key in objectOfCategories) {
      if (objectOfCategories[key]) arrayOfCategories.push(key)
    }

    const filterValue = this.state.menor || this.state.mayor ? true : false;

    this.props.fetchFilteredProperties(this.state.clearInput, {
      menor: this.state.menor,
      mayor: this.state.mayor,
      filterByPrice: filterValue,
      categoriesBoolean: !!arrayOfCategories.length,
      categories: arrayOfCategories
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
        onCatSearch={this.onCatSearch}
        handleChange={this.handleChange}
        user={this.props.user}
        onLogout={this.onLogout}
        categories={this.props.categories}
        handleCatChange={this.handleCatChange}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    propiedadFiltrada: state.propiedadFiltrada,
    user: state.user.logged,
    propiedades: state.propiedades.propiedades,
    categories: state.categories.categories
  };
};

const matchDispatchToProps = function (dispatch, ownprops) {
  return {
    fetchFilteredProperties: (propiedadFiltrada, obj) => dispatch(fetchFilteredProperties(propiedadFiltrada, obj)),
    fetchProducts: () => dispatch(fetchProducts()),
    logOut: () => dispatch(logOutCreator()),
    fetchCategoriesCreator: () => dispatch(fetchCategoriesCreator()),
    fetchSearchedCategories: (categorium) => dispatch(fetchSearchedCategories(categorium))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    matchDispatchToProps
  )(SidebarContainer)
);
