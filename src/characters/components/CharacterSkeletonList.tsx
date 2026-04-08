import { CharacterSkeletonCard } from "..";

export const CharacterSkeletonList = () => {
  const arrayIndex = Array.from({ length: 12 });

  return (
    <div className="animate-pulse flex flex-col items-center w-full h-full">
      <div className="flex justify-center items-center gap-3 mb-4">
        <div className="w-15 h-10 rounded-md bg-gray-700/50" />
        <div className="w-6 h-7 rounded-full bg-gray-700/50" />
        <div className="w-15 h-10 rounded-md bg-gray-700/50" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 w-full  justify-items-center">
        {arrayIndex.map((_, index) => (
          <CharacterSkeletonCard key={index} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-3 mt-4">
        <div className="w-15 h-10 rounded-md bg-gray-700/50" />
        <div className="w-6 h-7 rounded-full bg-gray-700/50" />
        <div className="w-15 h-10 rounded-md bg-gray-700/50" />
      </div>
    </div>
  );
};
