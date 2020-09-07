import { FETCH_FAVOURITE } from "../utils/constants";
import axios from "axios";

export const fetchFavorites = favorites => ({
    type: FETCH_FAVOURITE,
    favorites
});

export const addFavoriteCreator = object => dispatch => {
    return axios.post('/api/favoritos/add', object)
        .then(res => res.data)
        .then(favorite => dispatch(fetchFavorites(favorite)))
}

export const fetchFavoritesCreator = userId => dispatch => {
    return axios.get(`/api/favoritos/all/${userId}`).then(favorites => {
        dispatch(fetchFavorites(favorites.data))
    })
}

export const fecthRemoveFavorite = (userId, propiedadId) => dispatch => {
    return axios.delete(`/api/favoritos/remove/${userId}/${propiedadId}`)
    .then(() => {
        return dispatch(fetchFavoritesCreator(userId))
    })
}