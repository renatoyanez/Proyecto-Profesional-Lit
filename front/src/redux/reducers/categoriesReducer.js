import { FETCH_CATEGORIES, FETCH_PROPERTY_BY_CATEGORY } from '../utils/constants'

const initialState = {
    categories: [],
    properties_categories: []
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_CATEGORIES: {
            return Object.assign({}, state, { categories: action.categories })
        };

        case FETCH_PROPERTY_BY_CATEGORY: {
            return Object.assign({}, state, {properties_categories: action.properties_categories})
        }

        default:
            return state;
    }
}