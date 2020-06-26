import { combineReducers } from 'redux'
import dragonsReducer from './dragons/dragons.reducer'
import userReducer from './user/user.reducer'

const rootReducer = combineReducers({
    dragons: dragonsReducer,
    user: userReducer
})

export default rootReducer