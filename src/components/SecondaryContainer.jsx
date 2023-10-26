import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies  && movies.popularMovies  && movies.topRatedMovies &&  (
      <div className="bg-black">
        <div className="-mt-48 pl-8 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.topRatedMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
