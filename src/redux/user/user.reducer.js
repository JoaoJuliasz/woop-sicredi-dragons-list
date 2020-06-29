import { USER_LOGGED, USER_LOGGED_OFF } from './user.types'

const initalState = {
    adminLogin: { username: 'admin', password: 'admin' },
    userLogged: false,
}

const userReducer = (state = initalState, action) => {
    switch (action.type) {
        case USER_LOGGED:
            return {
                ...state,
                userLogged: true
            }
        case USER_LOGGED_OFF:
            return {
                ...state,
                userLogged: false
            }
        default: return state
    }
}

export default userReducer