import React, { Component } from "react";
import Modal from "../components/Modal";
import { connect } from "react-redux";
import { fetchSingleProperty } from '../redux/actions/getProperties';
import axios from 'axios';

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: '',
        descripcion: '',
        precio: '',
        ubicacion: '',
        // imagen: '',
        // disponible: false,
        // categorias: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

//   componentDidMount() {
//     this.props.fetchSingleProperty(this.props)
// }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


/*** Completar cuando resuelvas categorias ***/
//   handleCatChange() {
//     let categoryArray = [];
//     categoria.forEach(elem => { //resuelve como acceder a categorias
//         if (elem.getAttribute("aria-selected") === "true") {
//             [...categoryArray, elem.textContent]
//         }
//     }
//     );
//     this.setState({
//         categories: arr
//     });
// }


  handleSubmit(event) {
    event.preventDefault();
    console.log("EL ID DE LAS PROPSSSS:    ", this.props)
    console.log("EL STATE:    ", this.state)
    return axios.post("/api/propiedades/edit", {
      id: this.props.propiedad.id, //por si lo necesitas
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      precio: parseInt(this.state.precio),
      ubicacion: this.state.ubicacion,
      // imagen: [...this.state.imagen],
      // disponible: true
    }).then((propiedad) => {
      console.log("PROPIEDAD EN EL .THEN RES:    ", propiedad)
        this.props.fetchSingleProperty(propiedad) // aqui va el action que te agrega propiedades
        alert('Product Updated!') // busca un sweet alert 
    })
  }

  render() {
    
    return <Modal id = {this.props.id} propiedad={this.props.propiedad} handleChange = {this.handleChange} handleSubmit = {this.handleSubmit} />;
  }
}

const mapStateToProps = (state) => {
    return {
        propiedad: state.propiedades.propiedad
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        fetchSingleProperty: (id) => { dispatch(fetchSingleProperty(id)) }
    }
}


export default connect(
    mapStateToProps,
  matchDispatchToProps
)(ModalContainer);
