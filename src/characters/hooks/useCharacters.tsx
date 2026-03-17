import { useQuery } from "@tanstack/react-query";
import { charactersActions } from "..";

interface Options {
  filterKey?: string;
}

export const useCharacters = ({ filterKey }: Options) => {
  const useCharactersResponse = useQuery({
    queryKey: ["characters", { filterKey }],
    queryFn: () => charactersActions.getProducts({ filterKey }),
    staleTime: 1000 * 60 * 60, //1 hora
    retry: 1,
  });

  return useCharactersResponse;
};
