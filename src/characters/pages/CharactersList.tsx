import { useEffect } from "react";
import {
  CharacterSkeletonList,
  CharacterGrid,
  useCharacters,
  NavigationButtons,
} from "..";
import { Link } from "react-router";

export const CharactersList = () => {
  window.moveTo(0, 0);

  const {
    useCharactersResponse,
    prevButtonActive,
    nextButtonActive,
    nextPage,
    previousPage,
    page,
    species,
  } = useCharacters();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex flex-col justify-start items-center w-full min-h-screen ">
      {useCharactersResponse.isError && (
        <div className="flex flex-col justify-center items-center">
          <h1 className="mb-6 mt-10 text-white text-4xl w-screen h-auto text-center font-black font-fredoka ">
            No available cards...
          </h1>
          <Link
            to={"/favorites"}
            className="mt-4 bg-gray-400 px-4 py-2 cursor-pointer text-white rounded-md hover:shadow-lg hover:shadow-amber-700 hover:ring-2 hover:ring-amber-700"
          >
            Back
          </Link>
        </div>
      )}

      {useCharactersResponse.data?.results && (
        <NavigationButtons
          prevButtonActive={prevButtonActive}
          nextButtonActive={nextButtonActive}
          nextPage={nextPage}
          previousPage={previousPage}
          page={page}
        />
      )}

      <div className="w-full max-w-7xl flex justify-center">
        {useCharactersResponse.isLoading && <CharacterSkeletonList />}
        {useCharactersResponse.data?.results && (
          <CharacterGrid
            page={page}
            backSpecies={species}
            characters={useCharactersResponse.data?.results}
          />
        )}
      </div>
      {useCharactersResponse.data?.results && (
        <NavigationButtons
          prevButtonActive={prevButtonActive}
          nextButtonActive={nextButtonActive}
          nextPage={nextPage}
          previousPage={previousPage}
          page={page}
        />
      )}
    </div>
  );
};
