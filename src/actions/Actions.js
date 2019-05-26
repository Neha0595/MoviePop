// Constants
export const GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES';
export const STORE_POPULAR_MOVIES = 'STORE_POPULAR_MOVIES';

export function getPopularMovies(callback) {
  return {
    type: GET_POPULAR_MOVIES,
    callback,
  };
}

export function storePopularMoviesData(moviesData) {
  return {
    type: STORE_POPULAR_MOVIES,
    moviesData,
  };
}
