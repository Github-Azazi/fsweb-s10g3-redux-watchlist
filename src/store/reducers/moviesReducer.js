import { ADD_MOVIE_LIST, REMOVE_MOVIE_LIST } from "../Action/movieAction";

const initialState = {
  movie: [],
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE_LIST:
      if (state.movie.find((movie) => movie.id === action.payload.id))
        return state;
      return {
        ...state,
        movie: [state.movie, action.payload],
      };
      break;
    case REMOVE_MOVIE_LIST:
      return {
        ...state,
        movie: state.movie.filter((movie) => movie.id !== action.payload),
      };
      break;
    default:
      return state;
      break;
  }
};

export default movieReducer;