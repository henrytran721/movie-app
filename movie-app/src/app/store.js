import { combineReducers } from '@reduxjs/toolkit';
import {createStore} from '@reduxjs/toolkit';
import ToWatchReducer from '../features/movie/ToWatchSlice';
import SeenMovieReducer from '../features/movie/SeenMovieSlice';

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch(e) {
    console.log(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serializeState = localStorage.getItem('state');
    if(serializeState !== null) return JSON.parse(serializeState);
    return undefined;
  } catch(e) {
    console.log(e);
  }
}

const persistState = loadFromLocalStorage();

const rootReducer = combineReducers({
  toWatch: ToWatchReducer,
  seenMovie: SeenMovieReducer
})
const store = createStore(
  rootReducer,
  persistState
)

store.subscribe(() => {
  saveToLocalStorage(store.getState());
  console.log(store.getState());
})

export default store;