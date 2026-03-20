import { CharacterSkeletonCard } from "..";

export const CharacterSkeletonList = () => {
  const arrayIndex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div className="animate-pulse flex flex-col justify-center items-center w-full h-full border-2">
      <div className="flex justify-center items-center gap-3">
        <button
          disabled
          className="text-white w-15 h-10 rounded-md bg-gray-400"
        />

        <div className="w-6 h-7 rounded-[100%] bg-gray-400" />
        <button
          disabled
          className="text-white w-15 h-10 rounded-md bg-gray-400"
        />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 p-4">
        {arrayIndex.map((_, index) => (
          <CharacterSkeletonCard key={index} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3">
        <button
          disabled
          className="text-white w-15 h-10 rounded-md bg-gray-400"
        />

        <div className="w-6 h-7 rounded-[100%] bg-gray-400" />
        <button
          disabled
          className="text-white w-15 h-10 rounded-md bg-gray-400"
        />
      </div>
    </div>
  );
};
