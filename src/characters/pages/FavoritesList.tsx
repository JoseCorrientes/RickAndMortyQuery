import { CharacterGrid, UseFavorites } from "..";
import { Navigate } from "react-router";

export const FavoritesList = () => {
  const { favorites } = UseFavorites();

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {favorites.length === 0 && <Navigate to={"/characters"} />}
      {favorites && favorites.length > 0 && (
        <h1 className="px-2 cursor-pointer h-full font-fredoka text-3xl font-light text-white mb-6">
          Favorites Listed:
          <span className="ml-4 px-2 cursor-pointer h-full font-fredoka text-4xl font-light text-red-500 mb-6">
            {favorites.length}
          </span>
        </h1>
      )}
      {favorites && favorites.length > 0 && (
        <CharacterGrid page={1} backSpecies="All" characters={favorites} />
      )}
    </div>
  );
};
