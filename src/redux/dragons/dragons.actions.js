import { FETCH_DRAGONS_REQUEST, FETCH_DRAGONS_SUCCESS, FETCH_DRAGONS_FAILURE, } from './dragons.types'
import axios from 'axios'

export const fetchDragonsRequest = () => {
    return {
        type: FETCH_DRAGONS_REQUEST,
    }
}

export const fetchDragonsSuccess = dragons => {
    return {
        type: FETCH_DRAGONS_SUCCESS,
        payload: dragons
    }
}

export const fetchDragonsFailure = err => {
    return {
        type: FETCH_DRAGONS_FAILURE,
        payload: err,
    }
}
export const fetchDragons = () => {
    return (dispatch) => {
        dispatch(fetchDragonsRequest())
        axios.get('http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon')
            .then(res => {
                const dragons = res.data
                dispatch(fetchDragonsSuccess(dragons))
            })
            .catch(error => dispatch(fetchDragonsFailure(error.message)))
    }
}