import axios from 'axios'
import { GET_ALL_URL, GET_MOVIE_DETAILS_URL } from './constants'

/** Consulta el listado de las peliculas */
export const getMovieList = async () => {
    try {
        let response = await axios(GET_ALL_URL)
        let results = response?.data?.results
        return Array.isArray(results) ? results : []
    } catch (ex) {
        return []
    }

}
/** Consulta el detalle de la pelicula */
export const getMovieDetails = async (id) => {
    try {
        let url = GET_MOVIE_DETAILS_URL(id)
        let response = await axios(url)
        let result = response?.data
        console.log(response)
        return result
    } catch (ex) {
        return null
    }

}