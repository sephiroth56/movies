const apiKey="634b49e294bd1ff87914e7b9d014daed"

export const GET_ALL_URL=`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=`
export const IMAGE_PATH='https://image.tmdb.org/t/p/w500'
export const GET_MOVIE_DETAILS_URL =(id)=>(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)