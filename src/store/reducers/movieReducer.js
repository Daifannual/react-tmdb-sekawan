import {
  SET_LOADING,
  SET_SEARCH,
  SET_RATING,
  SET_GENRES,
  SET_MOVIE_DETAIL,
  MOVIE_VIDEOS,
  RECOMMENDATIONS,
  NOW_PLAYING,
  POPULAR,
  TOP_RATED,
  UPCOMING,
  SET_BY_GENRE,
} from "../actions/movieAction";

const initialState = {
  loading: false,
  movieDetail: null,
  search: {},
  rating: [],
  genres: [],
  movieByGenre: [],
  movieVideos: [],
  recommendations: [],
  nowPlaying: [],
  popular: [],
  topRated: [],
  upcoming: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case SET_RATING:
      return {
        ...state,
        rating: action.payload,
      };

    case SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case SET_BY_GENRE:
      return {
        ...state,
        movieByGenre: action.payload,
      };

    case SET_MOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.payload,
      };
    case MOVIE_VIDEOS:
      return {
        ...state,
        movieVideos: action.payload,
      };
    case RECOMMENDATIONS:
      return {
        ...state,
        recommendations: action.payload,
      };

    case NOW_PLAYING:
      return {
        ...state,
        nowPlaying: action.payload,
      };
    case POPULAR:
      return {
        ...state,
        popular: action.payload,
      };
    case TOP_RATED:
      return {
        ...state,
        topRated: action.payload,
      };
    case UPCOMING:
      return {
        ...state,
        upcoming: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
