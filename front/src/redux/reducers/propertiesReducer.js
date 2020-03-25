import { FETCH_PROPERTIES } from '../utils/constants'

const initialState = {
    propiedades: [],

}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROPERTIES: {
            return Object.assign({}, state, { propiedades: action.propiedades })
        }

        default:
            return state;
    }
}