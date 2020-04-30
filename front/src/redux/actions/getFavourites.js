import { FETCH_FAVOURITE } from "../utils/constants";
import axios from "axios";

export const fetchFavorites = favorites => ({
    type: FETCH_FAVOURITE,
    favorites
  });

export const fetchFavoritesCreator = userId => dispatch => {
    return axios.get(`/api/favoritos/all/${userId}`).then(favorites => {
        dispatch(fetchFavorites(favorites.data))
    });
}