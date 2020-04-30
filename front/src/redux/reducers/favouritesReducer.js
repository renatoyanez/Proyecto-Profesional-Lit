import { FETCH_FAVOURITE } from '../utils/constants'

const initialState = {
    favoritos: []
}

export default (state = initialState, action) => {
    
    switch (action.type) {
        case FETCH_FAVOURITE: {
            return Object.assign({}, state, { favoritos: action.favoritos })
        };

        default:
            return state;
    }
}