export const CharacterSkeletonCard = () => {
  return (
    <div className="bg-gray-700/50 rounded-md shadow-md flex flex-col sm:flex-row justify-start w-full max-w-112.5 h-auto sm:h-[270px] overflow-hidden shrink-0">
      <div className="flex-none w-full sm:w-42.5 h-48 sm:h-full bg-gray-600/50">
        <div className="w-full h-full" />
      </div>

      <div className="flex flex-col p-4 pl-3 flex-1 min-w-0 space-y-3 sm:justify-evenly">
        <div className="space-y-2">
          <div className="bg-gray-600 w-3/4 h-6 sm:h-7 rounded-sm" />
          <div className="bg-gray-600/40 w-1/3 h-3 rounded-sm ml-3" />
        </div>

        <div className="space-y-1">
          <div className="flex items-center ml-3 gap-2">
            <div className="bg-gray-600 w-2 h-2 rounded-full" />
            <div className="bg-gray-600 w-16 h-3 rounded-sm" />
          </div>
        </div>

        <div className="space-y-2">
          <div className="bg-gray-600/30 w-24 h-2 rounded-sm" />
          <div className="bg-gray-600/60 w-32 h-3 rounded-sm ml-3" />
        </div>
        <div className="space-y-2">
          <div className="bg-gray-600/30 w-24 h-2 rounded-sm" />
          <div className="bg-gray-600/60 w-32 h-3 rounded-sm ml-3" />
        </div>
      </div>
    </div>
  );
};
