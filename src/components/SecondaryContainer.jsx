
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector(store=>store.movies)
  return movies.nowPlayingMovies && (
    <div className="bg-black">
      <div className="-mt-48 pl-8 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Treading"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Horror Movie"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  );
};

export default SecondaryContainer;
