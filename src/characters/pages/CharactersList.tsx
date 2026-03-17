import { CharacterSkeletonList, CharacterGrid, useCharacters } from "..";

export const CharactersList = () => {
  const { data, isLoading } = useCharacters({});

  return (
    <div className="flex flex-col justify-center items-center w-full h-full border-2">
      {isLoading && <CharacterSkeletonList />}
      {data?.results && <CharacterGrid characters={data?.results} />}
    </div>
  );
};
