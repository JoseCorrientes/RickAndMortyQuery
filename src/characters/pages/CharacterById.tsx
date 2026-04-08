import { FaHeart, FaCircle } from "react-icons/fa";
import { SingleCharacterSkeletonCard, useSingleCharacter } from "..";
import { Link, useLocation } from "react-router";

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

  const { from } = location.state || {};

  const goBackURL = () => {
    if (from?.pathname === "/favorites") return "/favorites";
    if (from?.pathname && from?.search) return `${from.pathname}${from.search}`;
    return "/characters/All";
  };

  const backURL = goBackURL();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const isFavorite = favorites.some((x) => x.id === idBuscar);

  return (
    <div className="flex flex-col items-center min-h-screen py-10 px-4">
      <div className="w-full flex justify-center">
        {isError && (
          <div className="flex flex-col items-center justify-center">
            <h1 className="mt-10 mb-6 text-white text-4xl text-center font-black font-fredoka">
              No available card...
            </h1>
            <Link
              to={backURL}
              className="mt-4 bg-gray-400 px-4 py-2 text-white rounded-md hover:ring-2 hover:ring-amber-700"
            >
              Back
            </Link>
          </div>
        )}

        {isLoading && <SingleCharacterSkeletonCard />}

        {data && (
          <div
            key={data.id}
            className="relative bg-(--gris-tarjeta) w-full max-w-4xl rounded-2xl flex flex-col md:flex-row overflow-hidden border border-gray-800 shadow-2xl"
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleFavorite(data);
              }}
              className="absolute top-4 left-4 z-10 bg-black/40 p-3 rounded-full backdrop-blur-sm hover:bg-black/60 transition-all cursor-pointer group"
            >
              <FaHeart
                size={22}
                className={`transition-transform group-hover:scale-110 ${isFavorite ? "text-red-500" : "text-white/70"}`}
              />
            </button>

            <div className="w-full md:w-1/2 aspect-square">
              <img
                className="w-full h-full object-cover"
                src={data.image}
                alt={data.name}
              />
            </div>

            <div className="w-full md:w-1/2 p-4 sm:p-12 flex flex-col justify-center">
              <h2 className="font-fredoka text-4xl sm:text-5xl text-white font-black mb-2 leading-tight  tracking-tight">
                {data.name}
              </h2>

              <div className="flex items-center gap-2 mb-4">
                <FaCircle
                  className={`w-3 ${data.status === "Alive" ? "text-green-500" : data.status === "Dead" ? "text-red-600" : "text-gray-400"}`}
                />
                <p className="text-white text-lg font-medium">
                  {data.status} - {data.species}
                </p>
              </div>

              {data.type && (
                <p className="text-orange-400 text-sm font-bold uppercase mb-4 tracking-widest">
                  {data.type}
                </p>
              )}
              <div>
                <p className="text-(--gris-tarjeta-letras) text-xs font-bold uppercase tracking-widest">
                  Gender:
                </p>
                <p className="pl-4 mb-4 text-white text-xl font-light hover:text-orange-300 transition-colors">
                  {data.gender}
                </p>
              </div>

              <hr className="border-gray-800" />
              <div className="space-y-6 border-t border-gray-700/50 pt-6">
                <div>
                  <p className="text-(--gris-tarjeta-letras) text-xs font-bold uppercase tracking-widest">
                    Last Known location:
                  </p>
                  <p className="pl-4 text-white text-xl font-light hover:text-orange-300 transition-colors">
                    {data.location.name}
                  </p>
                </div>

                <div>
                  <p className="text-(--gris-tarjeta-letras) text-xs font-bold uppercase tracking-widest">
                    First seen in:
                  </p>
                  <p className="pl-4 text-white text-xl font-light hover:text-orange-300 transition-colors">
                    {data.origin.name === "unknown"
                      ? "Unknown"
                      : data.origin.name}
                  </p>
                </div>
              </div>
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
