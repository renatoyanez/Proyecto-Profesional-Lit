import React from "react";
import Favourites from "../components/Favourites";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchFavoritesCreator, fecthRemoveFavorite } from '../redux/actions/getFavourites'

class FavouritesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this)
  }

  
  componentDidMount() {
    this.props.fetchFavoritesCreator(this.props.user.id);
    // console.log("PROPS EN EL CONTAINER DE FAVS: ", { props: this.props, user: this.props.user })
  }
  
  handleDelete(userId, propiedadId) {
    this.props.fecthRemoveFavorite(this.props.user.id, propiedadId)
    alert("Acabas de eliminar esta propiedad de favoritos")
}
  render() {
    return <Favourites handleDelete ={this.handleDelete} user={this.props.user} favorites={this.props.favorites} property={this.props.property}/>;
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.logged,
    // userId: state.user,
    favorites: state.favorites.favorites,
    property: state.favorites.favorites.propiedade
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    fetchFavoritesCreator: user => dispatch(fetchFavoritesCreator(user)),
    fecthRemoveFavorite: (userId, propiedadId) => dispatch(fecthRemoveFavorite(userId, propiedadId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    matchDispatchToProps
  )(FavouritesContainer)
);
