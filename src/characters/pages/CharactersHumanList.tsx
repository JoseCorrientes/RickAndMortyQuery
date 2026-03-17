import { CharacterGrid, CharacterSkeletonList } from "..";
import { useCharacters } from "..";

export const CharactersHumanList = () => {
  const { data, isLoading } = useCharacters({
    filterKey: "Human",
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-full border-2">
      {isLoading && <CharacterSkeletonList />}
      {data?.results && <CharacterGrid characters={data?.results} />}
    </div>
  );
};
