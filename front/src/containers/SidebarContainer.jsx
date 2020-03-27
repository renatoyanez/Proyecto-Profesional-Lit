import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFilteredProperties } from '../redux/actions/getProperties';

class SidebarContainer extends Component {
    constructor(props) {
        super(props)
        this.onSearch = this.onSearch.bind(this)
    }
    // componentDidMount() {
    //     this.props.fetchFilteredProperties()
    // }

    onSearch(event){
        event.preventDefault();
        this.props.fetchFilteredProperties()
        .then(() => {
            this.props.history.push('/search')
          })
    }

    render() {
        return (
            <Sidebar onSearch={this.onSearch} /*propiedadFiltrada={this.props.propiedadFiltrada}*//>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        propiedadFiltrada: state.propiedadFiltrada
    }
}

const mapDispatchToProps = function (dispatch, ownprops) {
    return {
        fetchFilteredProperties: (propiedadFiltrada) => dispatch(fetchFilteredProperties(propiedadFiltrada))
        }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SidebarContainer))