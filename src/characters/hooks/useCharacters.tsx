import { useQuery } from "@tanstack/react-query";
import { charactersActions } from "..";
import { useState } from "react";

interface Options {
  species?: string;
}

export const useCharacters = ({ species = "All" }: Options) => {
  const [page, setPage] = useState(1);

  const useCharactersResponse = useQuery({
    queryKey: ["characters", { species, page }],
    queryFn: () => charactersActions.getProducts({ species, page }),
    staleTime: 1000 * 60 * 60, //1 hora
    retry: 1,
  });

  const nextPage = () => {
    if (useCharactersResponse.data?.info.next !== null)
      setPage((prev) => prev + 1);
  };

  const previousPage = () => {
    if (page === 1) return;
    setPage((prev) => prev - 1);
  };

  return {
    page,
    useCharactersResponse,
    prevButtonActive: useCharactersResponse.data?.info.prev !== null,
    nextButtonActive: useCharactersResponse.data?.info.next !== null,
    previousPage,
    nextPage,
  };
};
