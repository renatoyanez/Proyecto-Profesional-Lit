import React, { Component } from "react";
import Modal from "../components/Modal";
import { connect } from "react-redux";
import { fetchProperties } from '../redux/actions/getProperties'

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nombre: '',
        descripcion: '',
        precio: '',
        ubicacion: '',
        imagen: '',
        disponible: false,
        categorias: []
    }
    // this.handleChange = handleChange.bind(this);
    // this.handleSubmit = handleSubmit.bind(this)
  }

//   componentDidMount() {
//     this.props.fetchProperties(this.props)
// }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   handleCatChange() {
//     let categoryArray = [];
//     document.querySelectorAll(".dropdown-item").forEach(elem => {
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
      id: this.props.id, //por si lo necesitas
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      precio: parseInt(this.state.precio),
      ubicacion: this.state.ubicacion,
      imagen: [...this.state.imagen],
      disponible: true
    }).then((propiedad) => {
        this.props.fetchProperties(propiedad.data) // aqui va el action que te agrega propiedades
        alert('Product Updated!') // busca un sweet alert 
    })
  }

  render() {
    return <Modal propiedad={this.props.propiedad} /*handleChange = {this.handleChange} */ handleSubmit = {this.handleSubmit} />;
  }
}

const mapStateToProps = (state) => {
    return {
        propiedad: state.propiedades.propiedad
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        fetchProperties: (id) => { dispatch(fetchProperties(id)) }
    }
}


export default connect(
    mapStateToProps,
  matchDispatchToProps
)(ModalContainer);
