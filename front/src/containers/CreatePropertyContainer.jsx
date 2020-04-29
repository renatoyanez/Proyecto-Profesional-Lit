import React, { Component } from "react";
import CreateProperty from "../components/CreateProperty";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProperty } from "../redux/actions/getProperties";
import { fetchCategoriesCreator } from '../redux/actions/getCategories'

class CreatePropertyContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      descripcion: "",
      precio: 0,
      ubicacion: "",
      imagen: "",
      disponible: true,
      categories: {},
      dropDownOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this)
    this.onDropdownClick = this.onDropdownClick.bind(this)
  }

  componentDidMount() {
    if (!this.props.categories.length) this.props.fetchCategoriesCreator()
    .then(() => {
      const objectOfCategories = {};
      this.props.categories.map(category => {
        
        objectOfCategories[category.name] = false
        
      })
      this.setState({ categories: objectOfCategories })
    })
  }


  onDropdownClick() {
    this.setState({ dropDownOpen: true });
  }

  onClose() {
    this.setState({ dropDownOpen: false });
  }


  handleClick(event) {
    this.setState({ categories: {...this.state.categories, [event.target.id]: !this.state.categories[event.target.id] } })
  }



  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let price = parseInt(this.state.precio);

    let arrayOfImages = [];
    let images = this.state.imagen.split(", ");
    images.forEach(img => {
      arrayOfImages.push(img);
    });

    console.log("CATEGORIAS EN EL ESTADO: ", this.state.categories)
    const objectOfCategories = this.state.categories


    for (let key in objectOfCategories) {
      if (objectOfCategories[key]) var categorium = key
    }
    
    
    
    this.props.createProperty(
      this.state.nombre,
      this.state.descripcion,
      price,
      this.state.ubicacion,
      arrayOfImages,
      this.state.disponible,
      categorium
      );
    }
    
  render() {
    return (
      <CreateProperty
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleClick={this.handleClick}
        categories={this.props.categories}
        onDropdownClick={this.onDropdownClick}
      />
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.categories.categories
  };
};


const matchDispatchToProps = (dispatch) => {
  return {
    createProperty: (nombre, descripcion, precio, ubicacion, imagen, disponible, categorias) => dispatch(createProperty(nombre, descripcion, precio, ubicacion, imagen, disponible, categorias)),
    fetchCategoriesCreator: () => dispatch(fetchCategoriesCreator())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    matchDispatchToProps
  )(CreatePropertyContainer)
);
