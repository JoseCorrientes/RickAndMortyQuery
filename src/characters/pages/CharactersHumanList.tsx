import { useLocation } from "react-router";
import { useCharacters, CharacterGrid, CharacterSkeletonList } from "..";

export const CharactersHumanList = () => {
  const location = useLocation();
  const backPage = location.state?.backListPage ?? 1;

  const {
    useCharactersResponse,
    prevButtonActive,
    nextButtonActive,
    nextPage,
    previousPage,
    page,
  } = useCharacters({ species: "Human", backPage });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full border-2">
      {useCharactersResponse.data?.results && (
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={previousPage}
            className={`px-4 py-2 rounded-md ${prevButtonActive ? "text-white bg-gray-400 cursor-pointer" : "text-gray-600 bg-gray-800"}`}
          >
            Prev
          </button>

          <span className="text-white font-fredoka text-2xl font-light">
            {page}
          </span>
          <button
            onClick={nextPage}
            className={`px-4 py-2 rounded-md ${nextButtonActive ? "text-white bg-gray-400 cursor-pointer" : "text-gray-600 bg-gray-800"}`}
          >
            Next
          </button>
        </div>
      )}
      {useCharactersResponse.isLoading && <CharacterSkeletonList />}
      {useCharactersResponse.data?.results && (
        <CharacterGrid
          page={page}
          backSpecies="Human"
          characters={useCharactersResponse.data?.results}
        />
      )}
      {useCharactersResponse.data?.results && (
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={previousPage}
            className={`px-4 py-2 rounded-md ${prevButtonActive ? "text-white bg-gray-400 cursor-pointer" : "text-gray-600 bg-gray-800"}`}
          >
            Prev
          </button>

          <span className="text-white font-fredoka text-2xl font-light">
            {page}
          </span>
          <button
            onClick={nextPage}
            className={`px-4 py-2 rounded-md ${nextButtonActive ? "text-white bg-gray-400 cursor-pointer" : "text-gray-600 bg-gray-800"}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};
