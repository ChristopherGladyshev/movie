export interface MovieState {
  data: null | Movie[];
  error: string | null;
  loading: boolean;
}

interface FetchMoviesActions {
  type: MoviesActionTypes.FETCH_MOVIES_START;
}

interface FetchMoviesSuccessActions {
  type: MoviesActionTypes.FETCH_MOVIES_SUCCESS;
  payload: Movie[];
}

interface FetchMoviesErrorActions {
  type: MoviesActionTypes.FETCH_MOVIES_ERROR;
  payload: string
}

export enum MoviesActionTypes {
  FETCH_MOVIES_START = 'FETCH_MUVIES_START',
  FETCH_MOVIES_SUCCESS = 'FETCH_MUVIES_SUCCESS',
  FETCH_MOVIES_ERROR = 'FETCH_MUVIES_ERROR'
}


export interface MovieResponse {
  data: {
    movie_count: number,
    limit: number,
    page_number: number,
    movies: Movie[]
  }
}

export interface Movie {
        id: 36386,
        url: string,
        imdb_code: string,
        title: string,
        title_english: string,
        title_long: string,
        slug: string,
        year: number,
        rating: number,
        runtime: number,
        medium_cover_image: string,
        torrents: Torrents[]
}

interface Torrents {
  url: string,
  quality: string,
  size: string,
}

export type MoviesAction = FetchMoviesActions | FetchMoviesSuccessActions | FetchMoviesErrorActions;