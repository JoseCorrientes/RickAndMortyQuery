import { useQuery, useQueryClient } from "@tanstack/react-query";
import { favoriteActions, type Character } from "..";
import { toast } from "sonner";

export const UseFavorites = () => {
  const queryClient = useQueryClient();

  const { data: favorites = [] } = useQuery<Character[]>({
    queryKey: ["favorites"],
    queryFn: favoriteActions.getStoredFavorites,
    staleTime: Infinity,
  });

  const toggleFavorite = (character: Character) => {
    const { data, limitReached } = favoriteActions.toggleFavoritesList(
      favorites,
      character,
    );

    if (!limitReached) {
      const isSaved = favoriteActions.saveFavoritesList(data);
      if (isSaved) queryClient.setQueryData(["favorites"], data);
    } else toast("Favorites Limit Reached.  (20 favs)");
  };

  return {
    toggleFavorite,
    favorites,
  };
};
