export const CharacterSkeletonCard = () => {
  return (
    <div className="min-h-56 max-h-70 w-full min-w-80 max-w-142 bg-gray-400  border-2 border-gray-600 rounded-md flex flex-row flex-nowrap justify-start shrink-0 ">
      <div
        className="
       flex w-1/3 h-full rounded-bl-md rounded-tl-md b"
      >
        <div className="rounded-bl-md rounded-tl-md  h-auto w-full m-2 bg-gray-500 " />
      </div>
      {/* resto info */}

      <div className="flex-col w-2/3 py-2 px-4">
        <div className="bg-gray-500 w-40 h-8 rounded-sm  " />

        <div className="bg-gray-500 w-25 h-2 rounded-sm mt-2  " />

        <div className="bg-gray-500 w-15 h-3 rounded-sm mt-4" />

        <div className="bg-gray-500 w-25 h-2 rounded-sm mt-6  " />

        <div className="bg-gray-500 w-40 h-4 rounded-sm mt-4" />

        <div className="bg-gray-500 w-25 h-2 rounded-sm mt-6  " />

        <div className="bg-gray-500 w-40 h-4 rounded-sm mt-4" />
      </div>
    </div>
  );
};
