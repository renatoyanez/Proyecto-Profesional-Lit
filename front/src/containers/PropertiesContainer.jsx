import React, { Component } from 'react'
import Properties from '../components/Properties'
import { connect } from "react-redux"
import { fetchProducts } from '../redux/actions/getProperties'
import { addFavoriteCreator } from '../redux/actions/getFavourites'

class PropertiesContainer extends Component {
    constructor(props) {
        super(props)
        this.handleAddFavorite = this.handleAddFavorite.bind(this)
    }

    componentDidMount() {
        if (!this.props.propiedades.length) this.props.fetchProducts()
    }

    handleAddFavorite(propertyId) {
        if (this.props.user.id) {
            alert("Agregada a favoritos")
            console.log("HANDLE ADD FAVS EN PROPERTIES: ", { props: this.props, user: this.props.user })
            let obj = { propiedad: propertyId, user: this.props.user }
            this.props.addFavoriteCreator(obj)
        }
    }

    render() {
        return (
            <Properties user={this.props.user} propiedades={this.props.propiedades} handleAddFavorite={this.handleAddFavorite} propiedad={this.props.propiedad} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        propiedad: state.propiedades.propiedad,
        propiedades: state.propiedades.propiedades,
        user: state.user.logged
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => { dispatch(fetchProducts()) },
        addFavoriteCreator: (obj) => dispatch(addFavoriteCreator(obj))
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(PropertiesContainer)