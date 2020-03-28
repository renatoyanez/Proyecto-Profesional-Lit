import React, { Component } from 'react'
import SingleProperty from '../components/SingleProperty';
import {connect} from 'react-redux'
import {singlePropertyCreator} from '../redux/actions/getProperties'

class SinglePropertyContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.singlePropertyCreator(this.props.match.params.id)
    }
    render() {
        return (
            <SingleProperty propiedad={this.props.propiedad}/>
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
        singlePropertyCreator: (id) => {dispatch(singlePropertyCreator(id))}
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(SinglePropertyContainer)