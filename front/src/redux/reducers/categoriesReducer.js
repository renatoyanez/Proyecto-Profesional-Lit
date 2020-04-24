import { FETCH_CATEGORIES } from '../utils/constants'

const initialState = {
    categories: []
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_CATEGORIES: {
            return Object.assign({}, state, { categories: action.categories })
        };

        default:
            return state;
    }
}