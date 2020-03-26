import { FETCH_PROPERTIES, FETCH_SINGLE_PROPERTY } from '../utils/constants'

const initialState = {
    propiedades: [],
    propiedad: {}

}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROPERTIES: {
            return Object.assign({}, state, { propiedades: action.propiedades })
        };

        case FETCH_SINGLE_PROPERTY: {
            return Object.assign({}, state, { propiedad: action.propiedad })
        }

        default:
            return state;
    }
}