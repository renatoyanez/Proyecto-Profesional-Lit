import { USER_LOGIN } from '../utils/constants'

const initialState = {
    logged: {},
}

export default function(state = initialState, action) {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, { logged: action.user })
        default:
        return state
    }
}