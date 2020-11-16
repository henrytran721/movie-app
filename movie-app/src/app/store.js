import { combineReducers } from '@reduxjs/toolkit';
import {createStore} from '@reduxjs/toolkit';
import ToWatchReducer from '../features/movie/ToWatchSlice';
import SeenMovieReducer from '../features/movie/SeenMovieSlice';

const rootReducer = combineReducers({
  toWatch: ToWatchReducer,
  seenMovie: SeenMovieReducer
})
const store = createStore(
  rootReducer,
)

store.subscribe(() => {
  console.log(store.getState())
})

export default store;