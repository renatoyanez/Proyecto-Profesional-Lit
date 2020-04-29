import React from "react";
import Favourites from "../components/Favourites";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

class FavouritesContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchLoggedUser();
  }

  render() {
    return <Favourites /*propiedad={this.props.propiedades}*/ />;
  }
}

const mapStateToProps = (state) => {
  return {
    // propiedades: state.propiedades.propiedades
  };
};

const matchDispatchToProps = function(dispatch, ownprops) {
  return {
    fetchLoggedUser: () => { dispatch(fetchLoggedUser()) }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    matchDispatchToProps
  )(FavouritesContainer)
);
