import { combineReducers } from "redux";
import movieReducer from "./Reducer/movieReducer";
import queueReducer from "./Reducer/queueReducer";

export const reducers = combineReducers({
  movieReducer: movieReducer,
  queueReducer: queueReducer,
});
