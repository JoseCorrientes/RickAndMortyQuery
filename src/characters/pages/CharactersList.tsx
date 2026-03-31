import { useEffect } from "react";
import {
  CharacterSkeletonList,
  CharacterGrid,
  useCharacters,
  NavigationButtons,
} from "..";
import { toast } from "sonner";

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

  useEffect(() => {
    if (useCharactersResponse.isError)
      toast.error("Server Error. Try Later...");
  }, [useCharactersResponse]);

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {useCharactersResponse.isError && (
        <h1 className="mt-10 text-white text-4xl w-screen h-auto text-center font-black font-fredoka">
          No available cards...
        </h1>
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
      {useCharactersResponse.isLoading && <CharacterSkeletonList />}
      {useCharactersResponse.data?.results && (
        <CharacterGrid
          page={page}
          backSpecies={species}
          characters={useCharactersResponse.data?.results}
        />
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
    </div>
  );
};
