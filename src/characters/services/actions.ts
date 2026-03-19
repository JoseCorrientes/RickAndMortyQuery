import { QueryClient } from "@tanstack/react-query";
import { type Character, charactersApi, type CharactersPage } from "..";
import { slow } from "../../shared";

interface GetProductsOptions {
  species?: string;
  page?: number;
}

export const getProducts = async ({
  species,
  page = 1,
}: GetProductsOptions): Promise<CharactersPage> => {
  await slow(2);

  let filter = page ? `/?page=${page}` : "";
  filter = filter + (species && species != "All" ? `&species=${species}` : "");

  const { data } = await charactersApi.get<CharactersPage>(
    `/character${filter}`,
  );
  return data;
};

export const getSingleProduct = async (id: number): Promise<Character> => {
  await slow(2);
  const { data } = await charactersApi.get<Character>(`/character/${id}`);
  return data;
};

export const prefetchSingleCharacter = async (
  queryClient: QueryClient,
  id: number,
) => {
  queryClient.prefetchQuery({
    queryKey: ["character", id],
    queryFn: () => getSingleProduct(id),
    staleTime: 1000 * 60 * 60, // 1 hora
  });
};
