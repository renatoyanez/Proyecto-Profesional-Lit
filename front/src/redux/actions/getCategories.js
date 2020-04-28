import { FETCH_CATEGORIES, FETCH_PROPERTIES } from '../utils/constants'
import axios from 'axios'

export const fetchCategories = categories => ({
    type: FETCH_CATEGORIES,
    categories
})

export const fetchSearchedCategory = category => ({
    type: FETCH_PROPERTIES,
    category
})

export const fetchCategoriesCreator = () => dispatch => {
    return axios.get('/api/categorias/all').then(categories => {
        dispatch(fetchCategories(categories.data));
      });
}

export const fetchSearchedCategories = (searched) => dispatch => {
    axios.get(`/api/categorias/${searched}`).then(categories => {
        console.log("SEARCHED CATEGORIUM FROM BACKEND: ", categories.data[0].propiedades)
        dispatch(fetchSearchedCategory(categories.data[0]))
    });
}