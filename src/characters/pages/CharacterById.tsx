import { FaHeart, FaCircle } from "react-icons/fa";
import { SingleCharacterSkeletonCard, useSingleCharacter } from "..";
import { Link, useLocation } from "react-router";

import { toast } from "sonner";
import { useEffect } from "react";
import { useParams } from "react-router";
import { UseFavorites } from "..";

export const CharacterById = () => {
  const { id } = useParams();
  const { favorites, toggleFavorite } = UseFavorites();

  const idBuscar = Number(id) || 1;

  const { singleCharacterQuery } = useSingleCharacter(idBuscar);
  const { data, isLoading, isError } = singleCharacterQuery;

  const location = useLocation();

  const { from, backPage, backSpecies } = location.state || {};

  const goBackURL = () => {
    if (from?.pathname === "/favorites") return "/favorites";
    if (backSpecies && backPage)
      return `/characters/${backSpecies}?page=${backPage}`;
    return "/characters/All";
  };

  const backURL = goBackURL();

  useEffect(() => {
    if (isError) toast.error("Server Error. Try Later...");
  }, [isError]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const isFavorite = favorites.some((x) => x.id === idBuscar);

  return (
    <div className="flex flex-col items-center">
      <div className="sm:h-100 flex justify-center">
        {isError && (
          <div className="flex flex-col items-center justify-center ">
            <h1 className="mt-10 text-white text-4xl w-screen h-auto text-center font-black font-fredoka">
              No available card...
            </h1>
            <Link
              to={backURL}
              className="mt-4 bg-gray-400 px-4 py-2 cursor-pointer text-white rounded-md hover:shadow-lg hover:shadow-amber-700 hover:ring-2 hover:ring-amber-700"
            >
              Back
            </Link>
          </div>
        )}

        {isLoading && <SingleCharacterSkeletonCard />}
        {data && (
          <div
            key={data.id}
            className="relative bg-(--gris-tarjeta) sm:max-w-250 rounded-md flex flex-row flex-nowrap h-full"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(data);
              }}
              className="absolute top-8 right-8"
            >
              <FaHeart
                size={50}
                className={isFavorite ? "text-red-500" : "text-gray-400"}
              />
            </button>

            <div className="flex w-1/3 rounded-bl-md rounded-tl-md bg-white overflow-hidden aspect-square">
              <img className="w-full h-full object-cover" src={data.image} />
            </div>
            <div className="flex-col w-2/3 py-2 px-4">
              <h3 className="w-full text-left font-fredoka text-bold text-2xl text-white font-bold">
                {data.name}
              </h3>

              <p className="text-white text-xs font-medium">
                {" "}
                {data.species} - {data.gender}
              </p>
              <p className="text-orange-400 text-xs font-medium">
                {" "}
                {data.type}
              </p>
              <div className="mt-3 flex flex-row justify-start items-center">
                <FaCircle
                  className={`w-2 ${data.status !== "Dead" ? "text-green-500" : "text-red-700"}`}
                />
                <p className="pl-2 text-white text-s font-medium">
                  {" "}
                  {data.status}
                </p>
              </div>
              <p className="mt-3 w-full text-(--gris-tarjeta-letras) text-xs font-medium">
                Last Known location:
              </p>
              <p className="mt-1 w-full text-white text-lg font-normal">
                {data.location.name}
              </p>
              <p className="flex mt-3 w-full text-(--gris-tarjeta-letras)  text-xs font-medium items-start">
                First seen in:
              </p>
              <p className="mt-1 w-full text-white text-lg font-normal">
                {data.origin.name}
              </p>
            </div>
          </div>
        )}
      </div>
      {data && (
        <Link
          to={backURL}
          className="mt-4 bg-gray-400 px-4 py-2 cursor-pointer text-white rounded-md hover:shadow-lg hover:shadow-amber-700 hover:ring-2 hover:ring-amber-700"
        >
          Back
        </Link>
      )}
    </div>
  );
};
