import { useQuery } from "@tanstack/react-query";
import { charactersActions } from "..";

export const useSingleCharacter = (characterId: number) => {
  const singleCharacterQuery = useQuery({
    queryKey: ["character", characterId],
    queryFn: () => charactersActions.getSingleProduct(characterId),
    staleTime: 1000 * 60 * 60, //1 hora,
    retry: 0,
  });
  return {
    singleCharacterQuery,
  };
};
