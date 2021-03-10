import { SET_LIST, SET_ITEM } from '../types'


export const setMovieList = payload => {
    return dispatch => {
        dispatch({
            type: SET_LIST,
            payload: payload
        })
    }
}
export const setItem = payload => {
    return dispatch => {
        dispatch({
            type: SET_ITEM,
            payload: payload
        })
    }
}