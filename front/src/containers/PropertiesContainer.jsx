import React, { Component } from 'react'
import Properties from '../components/Properties'
import { connect } from "react-redux"
import { fetchProducts } from '../redux/actions/getProperties'

class PropertiesContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if(!this.props.propiedades.length) this.props.fetchProducts()
    }


    render() {
        return (
            <Properties propiedades={this.props.propiedades}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        propiedades: state.propiedades.propiedades
    }
}

const matchDispatchToProps = (dispatch) => {
    return {
        fetchProducts: () => {dispatch(fetchProducts())}
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(PropertiesContainer)