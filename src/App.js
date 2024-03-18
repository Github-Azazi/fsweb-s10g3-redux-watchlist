import { Switch, Route, NavLink } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { useDispatch, useSelector } from "react-redux";
import {
  nextQueue,
  previusQueue,
  returnFirstMovie,
} from "./store/actions/queueAction.js";
import { movies } from "./movies";
import { addMovieList } from "./store/actions/moviesAction.js";

function App() {
  const favMovies = useSelector((state) => state.movieReducer.movie);
  const queue = useSelector((store) => store.queueReducer.queue);
  const dispatch = useDispatch();

  const nextMovie = () => {
    dispatch(nextQueue());
  };

  const previousMovie = () => {
    dispatch(previusQueue());
  };
  const returnMovie = () => {
    dispatch(returnFirstMovie());
  };
  const addListHandler = () => {
    dispatch(addMovieList(movies[queue]));
  };

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path="/">
          <Movie sira={queue} />

          <div className="flex gap-3 justify-end py-3">
            <button
              onClick={returnMovie}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Başa Dön
            </button>
            {queue !== 0 && (
              <button
                onClick={previousMovie}
                className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
              >
                Önceki
              </button>
            )}
            <button
              onClick={nextMovie}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button
              onClick={addListHandler}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
