import { FETCH_PROPERTIES, FETCH_SINGLE_PROPERTY, SEARCH_FILTERED_PROPERTIES } from '../utils/constants'

const initialState = {
    propiedades: [],
    propiedad: {},
    propiedadFiltrada: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROPERTIES: {
            return Object.assign({}, state, { propiedades: action.propiedades })
        };

        case FETCH_SINGLE_PROPERTY: {
            return Object.assign({}, state, { propiedad: action.propiedad })
        };

        case SEARCH_FILTERED_PROPERTIES: {
            return Object.assign({}, state, { propiedadFiltrada: action.propiedadFiltrada })
        }

        default:
            return state;
    }
}