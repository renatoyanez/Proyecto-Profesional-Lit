import React from 'react'
import Main from '../components/Main'
import { fetchLoggedUser } from '../redux/actions/getUser'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'


class MainContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchLoggedUser()
    }

    render() {
        return (
            <Main />
        )
    }
}


const matchDispatchToProps = function (dispatch, ownprops) {
    return {
        fetchLoggedUser: () => { dispatch(fetchLoggedUser()) }
    }
}

export default withRouter(connect(null, matchDispatchToProps)(MainContainer));