import { FETCH_FAVOURITE } from '../utils/constants'

const initialState = {
    favorites: []
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_FAVOURITE: {
            return Object.assign({}, state, { favorites: action.favorites })
        };

        default:
            return state;
    }
}