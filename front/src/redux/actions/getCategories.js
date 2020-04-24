import { FETCH_CATEGORIES } from '../utils/constants'
import axios from 'axios'

export const fetchCategories = categories => ({
    type: FETCH_CATEGORIES,
    categories
})

export const fetchCategoriesCreator = () => dispatch => {
    axios.get('/api/categorias/all').then(categories => {
        dispatch(fetchCategories(categories.data));
      });
}