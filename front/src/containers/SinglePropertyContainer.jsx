import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import SingleProperty from '../components/SingleProperty';
import {connect} from 'react-redux'
import { singlePropertyCreator, deleteProperty } from '../redux/actions/getProperties'

class SinglePropertyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    componentDidMount() {
        this.props.singlePropertyCreator(this.props.match.params.id)
    }

    handleDelete(remove) {
        alert("Acabas de eliminar esta propiedad")
        this.props.deleteProperty(remove)
    }

    render() {
        return (

            <SingleProperty user={this.props.user} handleDelete = {this.handleDelete} propiedad={this.props.propiedad}/>
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
        deleteProperty: (id) => ( dispatch(deleteProperty(id)) )
    }
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(SinglePropertyContainer))