interface Props {
  prevButtonActive: boolean;
  nextButtonActive: boolean;
  previousPage: () => void;
  nextPage: () => void;
  page: number;
}

export const NavigationButtons = ({
  nextButtonActive,
  nextPage,
  page,
  prevButtonActive,
  previousPage,
}: Props) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        disabled={!prevButtonActive}
        onClick={previousPage}
        className={`px-4 py-2 rounded-md ${prevButtonActive ? "text-white bg-gray-400 cursor-pointer hover:shadow-lg hover:shadow-amber-700 hover:ring-2 hover:ring-amber-700" : "text-gray-600 bg-gray-800"}`}
      >
        Prev
      </button>

      <span className="text-white font-fredoka text-2xl font-light">
        {page}
      </span>
      <button
        disabled={!nextButtonActive}
        onClick={nextPage}
        className={`px-4 py-2 rounded-md ${nextButtonActive ? "text-white bg-gray-400 cursor-pointer hover:shadow-lg hover:shadow-amber-700 hover:ring-2 hover:ring-amber-700" : "text-gray-600 bg-gray-800"}`}
      >
        Next
      </button>
    </div>
  );
};
