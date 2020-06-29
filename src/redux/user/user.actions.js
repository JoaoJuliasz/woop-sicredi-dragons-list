import { USER_LOGGED, USER_LOGGED_OFF } from './user.types'

export const userLogged = () => {
    return {
        type: USER_LOGGED
    }
}
export const userLoggedOff = () => {
    return {
        type: USER_LOGGED_OFF
    }
}