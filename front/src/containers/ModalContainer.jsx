// import React, { Component } from "react";
// import Modal from "../components/Modal";
// import { connect } from "react-redux";
// // import { addproperty } from '../redux/actions/getProperties';
// import { singlePropertyCreator } from '../redux/actions/getProperties'

// class ModalContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         nombre: '',
//         descripcion: '',
//         precio: '',
//         ubicacion: '',
//         imagen: [],
//         disponible: false
//     }
//     this.handleChange = handleChange.bind(this);
//     this.handleSubmit = handleSubmit.bind(this)
//   }

//   componentDidMount() {
//     this.props.singlePropertyCreator(this.props.match.params.id)
// }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   }

//   handleSubmit(event) {
//     event.preventDefault();
//     return axios.post("/api/propiedades/edit", {
//     //   id: this.props.id, //por si lo necesitas
//       nombre: this.state.nombre,
//       descripcion: this.state.descripcion,
//       precio: parseInt(this.state.precio),
//       ubicacion: this.state.ubicacion,
//       imagen: this.state.imagen,
//       disponible: true
//     }).then((propiedad) => {
//         // this.props.addproperty(propiedad.data) // aqui va el action que te agrega propiedades
//         // sweetalert('Product Updated!') // busca un sweet alert 
//     })
//   }

//   render() {
//     return <Modal propiedad={this.props.propiedad} handleChange = {this.handleChange}  handleSubmit = {this.handleSubmit} />;
//   }
// }

// const mapStateToProps = (state) => {
    
//     return {
//         propiedad: state.propiedades.propiedad
//     }
// }

// const matchDispatchToProps = dispatch => {
//   return {
//     // dispatcha el editor de la propiedad ej: *******addProducts: prod => dispatch(addProducts(prod))******
//     singlePropertyCreator: (id) => {dispatch(singlePropertyCreator(id))}
//   };
// };


// export default connect(
//     mapStateToProps,
//   matchDispatchToProps
// )(ModalContainer);
