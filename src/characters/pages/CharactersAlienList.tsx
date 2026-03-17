import { CharacterGrid, CharacterSkeletonList, useCharacters } from "..";

export const CharactersAlienList = () => {
  const { data, isLoading } = useCharacters({
    filterKey: "Alien",
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full border-2">
      {isLoading && <CharacterSkeletonList />}
      {data?.results && <CharacterGrid characters={data?.results} />}
    </div>
  );
};
