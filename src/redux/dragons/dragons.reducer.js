import { FETCH_DRAGONS_REQUEST, FETCH_DRAGONS_SUCCESS, FETCH_DRAGONS_FAILURE, } from './dragons.types'

const initialState = {
    dragons: [],
    isLoading: false,
    error: '',
    lastId: null,
}

const dragonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DRAGONS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case FETCH_DRAGONS_SUCCESS:
            return {
                dragons: action.payload,
                isLoading: false,
                error: '',
                lastId: action.payload[action.payload.length - 1].id
            }
        case FETCH_DRAGONS_FAILURE:
            return {
                dragons: [],
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}

export default dragonsReducer