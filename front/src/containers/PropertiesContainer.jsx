import React, { Component } from 'react'
import Properties from '../components/Properties'
import { connect } from "react-redux"

class PropertiesContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchProperties()
    }
    render() {
        return (
            <Properties />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        propiedades: state.propiedades
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProperties: () => dispatch(fetchProperties())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropertiesContainer)