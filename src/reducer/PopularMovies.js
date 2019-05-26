// import {SEARCH_TERM_ENTERED} from '../Actions';
import createReducer from './CreateReducer';
import initialState from './initialState';

const actionHandlers = {
  STORE_POPULAR_MOVIES: (state, action) => action.moviesData,
};

export default (PopularMovies = createReducer([], actionHandlers));
