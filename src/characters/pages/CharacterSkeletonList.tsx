import { CharacterSkeletonCard } from "..";

export const CharacterSkeletonList = () => {
  const arrayIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 p-4">
      {arrayIndex.map((_, index) => (
        <CharacterSkeletonCard key={index} />
      ))}
    </div>
  );
};
