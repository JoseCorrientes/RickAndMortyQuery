import { FaHeart, FaCircle } from "react-icons/fa";

import {
  type Gender,
  type Species,
  type Status,
  type Location,
  charactersActions,
} from "..";
import { Link, useLocation } from "react-router";
import { useQueryClient } from "@tanstack/react-query";
import { UseFavorites } from "..";
// import { toast } from "sonner";

interface Props {
  id: number;
  image: string;
  name: string;
  status: Status;
  species: Species;
  type: string;
  gender: Gender;
  origin: Location;
  location: Location;
  page: number;
  backSpecies: string;
}

export const CharacterCard = ({
  id,
  image,
  name,
  species,
  status,
  location,
  origin,
  gender,
  type,
  page,
  backSpecies,
}: Props) => {
  const queryClient = useQueryClient();

  const { favorites, toggleFavorite } = UseFavorites();

  const isFavorite = favorites.some((item) => item.id === id);

  const URLlocation = useLocation();

  const handlePrefetchCharacter = async (id: number) => {
    queryClient.prefetchQuery({
      queryKey: ["character", id],
      queryFn: () => charactersActions.getSingleProduct(id),
      staleTime: 1000 * 60 * 60, // 1 hora
    });
  };

  return (
    <Link
      to={`/character/${id}`}
      state={{ backPage: page, backSpecies, from: URLlocation }}
      onMouseEnter={() => handlePrefetchCharacter(id)}
    >
      <div
        key={id}
        className="relative bg-(--gris-tarjeta) rounded-md shadow-md flex flex-row flex-nowrap justify-start shrink-0 h-full hover:shadow-lg hover:shadow-amber-700 hover:ring-2 hover:ring-amber-700"
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite({
              id,
              name,
              status,
              species,
              type,
              gender,
              origin,
              location,
              image,
            });
          }}
        >
          <FaHeart
            size={30}
            className={isFavorite ? "text-red-500" : "text-gray-600"}
          />
        </button>

        <div className="flex w-1/3 h-full rounded-bl-md rounded-tl-md bg-white overflow-hidden aspect-square">
          <img className="w-full h-full object-cover" src={image} />
        </div>
        <div className="flex-col w-2/3 py-2 px-4">
          <h3 className="w-full text-left font-fredoka text-bold text-2xl text-white font-bold">
            {name}
          </h3>

          <p className="text-white text-xs font-medium">
            {" "}
            {species} - {gender}
          </p>
          <p className="text-orange-400 text-xs font-medium"> {type}</p>
          <div className="mt-3 flex flex-row justify-start items-center">
            <FaCircle
              className={`w-2 ${status !== "Dead" ? "text-green-500" : "text-red-700"}`}
            />
            <p className="pl-2 text-white text-s font-medium"> {status}</p>
          </div>
          <p className="mt-3 w-full text-(--gris-tarjeta-letras) text-xs font-medium">
            Last Known location:
          </p>
          <p className="mt-1 w-full text-white text-lg font-normal">
            {location.name}
          </p>
          <p className="flex mt-3 w-full text-(--gris-tarjeta-letras)  text-xs font-medium items-start">
            First seen in:
          </p>
          <p className="mt-1 w-full text-white text-lg font-normal">
            {origin.name}
          </p>
        </div>
      </div>
    </Link>
  );
};
