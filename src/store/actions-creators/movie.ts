import axios from 'axios';
import { Dispatch } from 'react';
import {MoviesAction, MoviesActionTypes} from '../../types/Movies';

export const fetchMovies = () => {
  return async (dispatch: Dispatch<MoviesAction>) => {
    try {
      dispatch({type: MoviesActionTypes.FETCH_MOVIES_START})
      const response = await axios.get('https://yts.mx/api/v2/list_movies.json');
      const data:any = response.data;
      setTimeout(() => {
        dispatch({
          type: MoviesActionTypes.FETCH_MOVIES_SUCCESS,
          payload: data.data.movies
        })
      }, 600);
    } catch (error) {
      dispatch({
        type: MoviesActionTypes.FETCH_MOVIES_ERROR,
        payload: 'Ошибка загрузки листа'
      })
    }
  }
}