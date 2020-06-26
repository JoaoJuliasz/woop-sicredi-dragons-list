import { USER_LOGGED } from './user.types'

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
        default: return state
    }
}

export default userReducer