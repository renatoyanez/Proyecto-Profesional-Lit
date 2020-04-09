import { USER_LOGIN, LOAD_COOKIE, USER_LOGOUT } from '../utils/constants'

const initialState = {
    logged: {},
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case LOAD_COOKIE:
            return Object.assign({}, state, { loading: true });
        case USER_LOGIN:
            return Object.assign({}, state, { logged: action.user, loading: false });
        case USER_LOGOUT:
            return Object.assign({}, state, { logged: {} }); 
        default:
        return state
    }
}