import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";


const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="flex justify-center">
      <form className="py-24">
        <input
          type="text"
          className="p-2  w-96 border border-black m-4"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-6 bg-red-500 text-white rounded">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
