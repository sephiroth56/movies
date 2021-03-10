import { SET_ITEM, SET_LIST, } from '../types'

const initialState = {
    movieList: [],
    movieItem: null
}
export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LIST:
            return { ...state, movieList: action.payload }
        case SET_ITEM:
            return { ...state, movieItem: action.payload }
        default:
            return state
    }
}