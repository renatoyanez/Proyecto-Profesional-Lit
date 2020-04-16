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
        this.setState({/*cambiar el estado del modal*/})
        this.props.deleteProperty(remove)
        .then(() => {
            this.props.history.push('/')
        })
    }

    render() {
        return (

            <SingleProperty handleDelete = {this.handleDelete} propiedad={this.props.propiedad}/>
        )
    }
}

const mapStateToProps = (state) => {
    
    return {
        propiedad: state.propiedades.propiedad
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        singlePropertyCreator: (id) => { dispatch(singlePropertyCreator(id)) },
        deleteProperty: (id) => ( dispatch(deleteProperty(id)) )
    }
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(SinglePropertyContainer))