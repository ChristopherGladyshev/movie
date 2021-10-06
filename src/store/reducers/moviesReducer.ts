import { MoviesAction, MoviesActionTypes, MovieState } from '../../types/Movies'

const initialState: MovieState = {
  data: null,
  error: null,
  loading: false,
};

export const movieReducer = (state = initialState, action: MoviesAction): MovieState => {

  switch (action.type) {
    case MoviesActionTypes.FETCH_MOVIES_START:
      return {
        ...state,
        data: null,
        loading: true,
      };

    case MoviesActionTypes.FETCH_MOVIES_SUCCESS:

      return {
        ...state,
        data: action.payload,
        loading: false
      };

    case MoviesActionTypes.FETCH_MOVIES_ERROR:
      return {
        data: null,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
}