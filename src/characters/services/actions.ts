import { type Character, charactersApi, type CharactersPage } from "..";
import { slow } from "../../shared";

interface GetProductsOptions {
  species?: string;
  page?: number;
  name?: string;
}

export const getProducts = async ({
  species,
  page = 1,
  name,
}: GetProductsOptions): Promise<CharactersPage> => {
  await slow(2);

  const params = new URLSearchParams();
  if (name) params.append("name", name);
  if (page) params.append("page", page.toString());
  if (species && species !== "All") params.append("species", species);

  const { data } = await charactersApi.get<CharactersPage>(
    `/character/?${params.toString()}`,
  );
  return data;
};

export const getSingleProduct = async (id: number): Promise<Character> => {
  await slow(2);

  const { data } = await charactersApi.get<Character>(`/character/${id}`);
  return data;
};
