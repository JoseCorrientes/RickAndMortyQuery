import { type Character } from "../interfaces/characterInterfaces";

interface DataReturn {
  data: Character[];
  limitReached: boolean;
}

export const getStoredFavorites = () => {
  try {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.log("Error leyendo el local storage: ", error);
    return [];
  }
};

export const toggleFavoritesList = (
  favorites: Character[],
  character: Character,
): DataReturn => {
  const favoritesFiltered = favorites.filter(
    (item) => item.id !== character.id,
  );

  if (favoritesFiltered.length === favorites.length && favorites.length < 20) {
    const newData = [...favorites, character];
    return {
      data: newData,
      limitReached: false,
    };
  } else if (
    favoritesFiltered.length === favorites.length &&
    favorites.length >= 20
  ) {
    return {
      data: favorites,
      limitReached: true,
    };
  } else
    return {
      data: favoritesFiltered,
      limitReached: false,
    };
};

export const saveFavoritesList = (favorites: Character[]): boolean => {
  try {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    return true;
  } catch (error) {
    console.log("Error grabando en el local storage: ", error);
    return false;
  }
};
