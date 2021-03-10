import { SET_LIST, SET_ITEM, SET_MORE_ITEMS } from '../types'


export const setMovieList = payload => {
    return dispatch => {
        dispatch({
            type: SET_LIST,
            payload: payload
        })
    }
}

export const setMoreMovieList = payload => {
    return dispatch => {
        dispatch({
            type: SET_MORE_ITEMS,
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