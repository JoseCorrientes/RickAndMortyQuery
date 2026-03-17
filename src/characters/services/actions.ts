import { charactersApi, type CharactersPage } from "..";
import { slow } from "../../shared";

interface GetProductsOptions {
  filterKey?: string;
}

export const getProducts = async ({
  filterKey,
}: GetProductsOptions): Promise<CharactersPage> => {
  await slow(2);

  const filter = filterKey ? `?type=${filterKey}` : "";
  const { data } = await charactersApi.get<CharactersPage>(
    `/character${filter}`,
  );
  return data;
};
