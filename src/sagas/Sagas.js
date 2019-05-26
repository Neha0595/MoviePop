import { takeEvery, call, put, all } from 'redux-saga/effects';
import { GET_POPULAR_MOVIES, STORE_POPULAR_MOVIES } from '../actions/Actions';
import URL from '../constants/Constants';

const fetchPopularMovies = callback => {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=1869147c1b7b86bfa7e1ecca2c097ff9&language=en-US&page=1`;
  let data;
  const response = fetch(URL).then(res => {
    const responseJSon = res.json();
    responseJSon.then(value => {
      console.log('Value', value.results);
      callback(value.results);
    });
    console.log('Response of Call', res.json());
  });
};

export function* fetchAsync(action) {
  try {
    yield call(fetchPopularMovies, action.callback);
    console.log(response);
  } catch (error) {
    console.log('Error Occurred while calling saga');
  }
}

// Our watcher Saga:
export function* watchGetMoviesData() {
  yield takeEvery(GET_POPULAR_MOVIES, fetchAsync);
}

export default function* rootSaga() {
  yield all([watchGetMoviesData()]);
}
