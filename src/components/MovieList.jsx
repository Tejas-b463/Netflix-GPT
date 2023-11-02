import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div className="px-6 ">
      <h1 className="font-bold text-2xl py-4 px-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll ">
        <div className="flex gap-6">
          {movies.map((movie) => (
            <MovieCart key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
