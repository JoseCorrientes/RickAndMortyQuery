export const SingleCharacterSkeletonCard = () => {
  return (
    <div className="animate-pulse w-105 shrink sm:w-145  bg-(--gris-tarjeta) rounded-md shadow-md flex justify-start sm:shrink-0 h-full">
      <div
        className="
       flex w-1/3 h-auto rounded-bl-md rounded-tl-md"
      >
        <div className="rounded-bl-md rounded-tl-md  h-auto w-full m-2 bg-gray-500 " />
      </div>

      <div className="flex-col w-2/3 py-2 px-4 ">
        <div className="flex shrink bg-gray-500 sm:w-40 h-8 rounded-sm  " />

        <div className="flex shrink bg-gray-500 w-25 h-2 rounded-sm mt-2  " />

        <div className="flex shrink bg-gray-500 w-15 h-3 rounded-sm mt-4" />

        <div className="flex shrink bg-gray-500 w-25 h-2 rounded-sm mt-6  " />

        <div className="flex shrink bg-gray-500 sm:w-40 h-4 rounded-sm mt-4" />

        <div className="flex shrink bg-gray-500 w-25 h-2 rounded-sm mt-6  " />

        <div className="flex shrink bg-gray-500 sm:w-40 h-4 rounded-sm mt-4" />
      </div>
      {/* <div className="w-15 h-10 rounded-md bg-gray-500" /> */}
    </div>
  );
};
