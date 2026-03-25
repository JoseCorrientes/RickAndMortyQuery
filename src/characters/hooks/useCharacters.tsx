import { useQuery } from "@tanstack/react-query";
import { charactersActions } from "..";
import { useSearchParams } from "react-router";

interface Options {
  species?: string;
}

export const useCharacters = ({ species }: Options) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const page = Number(searchParams.get("page")) || 1;

  const useCharactersResponse = useQuery({
    queryKey: ["characters", { species, page, name }],
    queryFn: () => charactersActions.getProducts({ species, page, name }),
    staleTime: 1000 * 60 * 60, //1 hora
    retry: 1,
  });

  const updatePage = (newPage: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", newPage.toString());
    setSearchParams(params);
  };

  const nextPage = () => {
    if (useCharactersResponse.data?.info.next !== null) updatePage(page + 1);
  };
  const previousPage = () => {
    if (page === 1) return;
    updatePage(page - 1);
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
