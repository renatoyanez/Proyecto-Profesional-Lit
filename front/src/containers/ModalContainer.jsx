import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Modal from "../components/Modal";
import axios from 'axios';
import { fetchSingleProperty } from '../redux/actions/getProperties';

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
    return axios.post("/api/propiedades/edit", {
      id: this.props.propiedad.id,
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      precio: parseInt(this.state.precio),
      ubicacion: this.state.ubicacion,
      // imagen: [...this.state.imagen],
      // disponible: true
    }).then((propiedad) => {
        this.props.fetchSingleProperty(propiedad) 
        alert('Propiedad editada!') // busca un sweet alert 
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


export default withRouter(connect(
    mapStateToProps,
  matchDispatchToProps
)(ModalContainer));
