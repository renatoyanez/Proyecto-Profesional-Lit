import React, { Component } from "react";
import CreateProperty from "../components/CreateProperty";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createProperty } from "../redux/actions/getProperties";

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
      categorias: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    
    // let arrayOfCategories = [];
    // let categories = this.state.categorias.split(", ");
    // categories.forEach(cat => {
    //   arrayOfCategories.push(cat);
    // })

    this.props.createProperty(
      this.state.nombre,
      this.state.descripcion,
      price,
      this.state.ubicacion,
      arrayOfImages,
      this.state.disponible,
      // arrayOfCategories
    );
  }

  render() {
    return (
      <CreateProperty
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const matchDispatchToProps = (dispatch, ownprops) => {
  return {
    createProperty: (nombre, descripcion, precio, ubicacion, imagen, disponible) => dispatch(createProperty(nombre, descripcion, precio, ubicacion, imagen, disponible))
  };
};

export default withRouter(
  connect(
    null,
    matchDispatchToProps
  )(CreatePropertyContainer)
);
