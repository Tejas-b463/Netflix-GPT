import lang from "../utils/languageConstant"

const GptSearchBar = () => {
  return (
    <div className="flex justify-center">
      <form className="py-24">
        <input
          type="text"
          className="p-2  w-96 border border-black m-4"
          placeholder={lang.hindi.gptSearchPlaceholder}
        />
        <button className="py-2 px-6 bg-red-500 text-white rounded">
          {lang.hindi.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
