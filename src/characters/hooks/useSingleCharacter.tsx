import { useQuery, useQueryClient } from "@tanstack/react-query";
import { charactersActions } from "..";

export const useSingleCharacter = (characterId: number) => {
  const singleCharacterQuery = useQuery({
    queryKey: ["character", characterId],
    queryFn: () => charactersActions.getSingleProduct(characterId),
    staleTime: 1000 * 60 * 60, //1 hora
  });
  return {
    singleCharacterQuery,
  };
};

export const SingleCharacterPrefetch = (characterId: number) => {
  const characterQuery = useQueryClient();

  characterQuery.prefetchQuery({
    queryKey: ["character", characterId],
    queryFn: () => charactersActions.getSingleProduct(characterId),
    staleTime: 1000 * 60 * 60, // 1 hora
  });
};
