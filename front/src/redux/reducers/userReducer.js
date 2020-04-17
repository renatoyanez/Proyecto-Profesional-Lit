import { USER_LOGIN, USER_LOGOUT } from '../utils/constants'

const initialState = {
    logged: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, { logged: action.user});
        case USER_LOGOUT:
            return Object.assign({}, state, { logged: {} }); 
        default:
        return state
    }
}