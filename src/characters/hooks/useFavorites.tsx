import { useQuery } from "@tanstack/react-query";

const UseFavorites = () => {
  const favoritesQuery = useQuery({
    queryKey: ["favorites"],
    queryFn: () => {},
  });

  return {
    favoritesQuery,
  };
};
