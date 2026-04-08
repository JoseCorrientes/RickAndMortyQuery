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
      state={{ from: URLlocation }}
      onMouseEnter={() => handlePrefetchCharacter(id)}
      className="w-full flex justify-center no-underline"
    >
      <div
        key={id}
        className="relative bg-(--gris-tarjeta) rounded-md shadow-md flex flex-col sm:flex-row justify-start w-full max-w-112.5 h-auto sm:h-55 overflow-hidden hover:shadow-lg hover:shadow-amber-700 hover:ring-2 hover:ring-amber-700 transition-all duration-350"
      >
        <button
          className="absolute top-2 left-2 text-white"
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

        <div className="flex  flex-none w-full sm:w-42.5 h-48 sm:h-full rounded-bl-md rounded-tl-md bg-white overflow-hidden aspect-square">
          <img className="w-full h-full object-cover" src={image} />
        </div>
        <div className="flex flex-col p-4 sm:pl-3 flex-1 min-w-0  space-y-2 sm:justify-evenly text-left">
          <div className="min-w-0">
            <h3 className=" w-full text-left font-fredoka text-bold text-xl sm:text-2xl text-white font-bold leading-tight line-clamp-2">
              {name}
            </h3>

            <p className="pl-3 text-white text-xs font-medium truncate opacity-80">
              {" "}
              {species} - {gender}
            </p>

            <p className="pl-3 text-orange-400 text-xs font-medium truncate leading-none">
              {" "}
              {type}
            </p>
            <div className="pl-3 mt-1 flex flex-row justify-start items-center">
              <FaCircle
                className={`w-2 ${status === "Alive" ? "text-green-500" : status === "Dead" ? "text-red-700" : "text-gray-500"}`}
              />
              <p className="pl-1 text-white text-xs font-medium">
                {" "}
                {status === "unknown" ? "Unknown" : status}
              </p>
            </div>
          </div>

          <p className="mt-0w-full text-(--gris-tarjeta-letras) text-xs font-medium">
            Last Known location:
          </p>
          <p className="pl-3 mt-0 w-full text-white text-xs font-normal">
            {location.name}
          </p>
          <p className="flex mt-0 w-full text-(--gris-tarjeta-letras)  text-xs font-medium items-start">
            First seen in:
          </p>
          <p className="pl-3 not-[]:mt-0 w-full text-white text-xs font-normal">
            {origin.name}
          </p>
        </div>
      </div>
    </Link>
  );
};
