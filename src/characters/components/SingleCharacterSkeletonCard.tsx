export const SingleCharacterSkeletonCard = () => {
  return (
    <div className="w-full max-w-4xl bg-(--gris-tarjeta) rounded-2xl flex flex-col md:flex-row overflow-hidden border border-gray-800 animate-pulse min-h-[450px]">
      <div className="w-full md:w-1/2 bg-gray-600 aspect-square md:h-auto shrink-0"></div>

      <div className="w-full md:w-1/2 p-4 sm:p-12 flex flex-col justify-center space-y-6 flex-1 min-w-0">
        <div className="h-12 bg-gray-600 rounded-md w-3/4"></div>

        <div className="flex items-center gap-2">
          <div className=" h-4 bg-gray-600 rounded-full w-4 shrink-0"></div>
          <div className="h-6 bg-gray-600 rounded w-1/3"></div>
        </div>
        <div>
          <div className="h-3 bg-gray-600/50 rounded w-1/4 mb-3"></div>
          <div className="ml-4 mb-2 h-7 bg-gray-600 rounded w-1/2"></div>
        </div>

        <hr className="border-gray-800" />

        <div className="space-y-6 pt-2">
          <div>
            <div className="h-3 bg-gray-600/50 rounded w-1/4 mb-3"></div>
            <div className="ml-4 h-7 bg-gray-600 rounded w-5/6"></div>
          </div>

          <div>
            <div className="h-3 bg-gray-600/50 rounded w-1/4 mb-3"></div>
            <div className="ml-4 h-7 bg-gray-600 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
