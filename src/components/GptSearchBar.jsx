import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import openai from "../utils/openAi";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "act as a movie recommendation system suggest some movies for the query : " +
      searchText.current.value +
      "only give me names of 5 movies, comma seperated. like the example result given ahead. Example Results : Gadar, Sholay, Don, Hera Pheri, Bahubali";

    // Make an API call to GPT API and get Movie Results
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices);
  };

  return (
    <div className="flex justify-center">
      <form className="py-24" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-2  w-96 border border-black text-black m-4"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-6 bg-red-500 rounded"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
