import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies.jsx";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";


const Browse = () => {

  const showGptSearch = useSelector(store=>store.gpt.showGptSearch)

  // Fetch API from TMDB API and update store
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();

  return (
    <div>
      <Header />
      { showGptSearch ?
      <GptSearch/> :
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>
}
    </div>
  );
};

export default Browse;
