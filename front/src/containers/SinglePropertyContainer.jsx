import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import SingleProperty from '../components/SingleProperty';
import { connect } from 'react-redux'
import { singlePropertyCreator, deleteProperty } from '../redux/actions/getProperties'
import { addFavoriteCreator } from '../redux/actions/getFavourites'


class SinglePropertyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleDelete = this.handleDelete.bind(this)
        this.handleAddFavorite = this.handleAddFavorite.bind(this)
    }
    componentDidMount() {
        this.props.singlePropertyCreator(this.props.match.params.id)
    }

    handleDelete(remove) {
        alert("Acabas de eliminar esta propiedad")
        this.props.deleteProperty(remove)
    }

    handleAddFavorite(event) {
        event.preventDefault();
 
            let obj = { propiedad: this.props.match.params.id, user: this.props.user }
            this.props.addFavoriteCreator(obj)
            alert("Agregada a favoritos")
    }

    render() {
        return (

            <SingleProperty user={this.props.user} handleDelete={this.handleDelete} propiedad={this.props.propiedad} handleAddFavorite={this.handleAddFavorite} />
        )
    }
}

const mapStateToProps = (state) => {

    return {
        propiedad: state.propiedades.propiedad,
        user: state.user.logged
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        singlePropertyCreator: (id) => { dispatch(singlePropertyCreator(id)) },
        deleteProperty: (id) => (dispatch(deleteProperty(id))),
        addFavoriteCreator: (obj) => dispatch(addFavoriteCreator(obj))
    }
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(SinglePropertyContainer));