import { CharacterGrid, UseFavorites } from "..";
import { Navigate } from "react-router";

const FavoritesList = () => {
  const { favorites } = UseFavorites();

  return (
    <div className="flex flex-col items-center w-full h-full min-h-screen py-10">
      {favorites.length === 0 && <Navigate to={"/characters"} />}
      {favorites && favorites.length > 0 && (
        <h1 className="px-2 cursor-pointer h-full font-fredoka text-xl sm:text-3xl font-light text-white mb-4 sm:mb-10">
          Favorites Listed:
          <span className="mb-6 ml-4 px-2 cursor-pointer h-full font-fredoka text-2xl sm:text-4xl font-light text-red-500 ">
            {favorites.length}
          </span>
        </h1>
      )}
      {favorites && favorites.length > 0 && (
        <div className="w-full max-w-7xl flex justify-center">
          <CharacterGrid page={1} backSpecies="All" characters={favorites} />
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
