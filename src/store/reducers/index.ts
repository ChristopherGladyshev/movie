import { combineReducers } from "redux";
import { movieReducer } from './moviesReducer';
export const rootReducer = combineReducers({
  movies: movieReducer
});

export type RootState = ReturnType<typeof rootReducer>