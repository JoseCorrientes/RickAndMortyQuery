import RickAndMortyTitle2 from "../assets/RickAndMortyTitle2.png";
import { Link, useLocation, useParams, useSearchParams } from "react-router";
import { UseFavorites } from "..";

export const NavBar = () => {
  const { species } = useParams();
  const location = useLocation();

  const { favorites } = UseFavorites();

  const [searchParams] = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const favoritesExist = favorites.length > 0;

  if (!params.get("name")) params.delete("name");
  params.set("page", "1");
  const finalSearch = params.toString();

  return (
    <div className="shrink-0 flex-col sm:flex-row sm:px-4 h-auto sm:h-auto py-2 gap-y-2 sm:gap-y-0 flex items-center  justify-start bg-black rounded-md border-2 border-gray-600 text-white">
      <div className="flex shrink-0 w-auto justify-center sm:justify-start">
        <img src={RickAndMortyTitle2} className="h-9 w-auto" />
      </div>
      <ul className="flex w-full items-center justify-center gap-4 pb-2 sm:pb-0">
        <li
          className={`px-2 cursor-pointer h-full font-fredoka text-lg font-light ${species == "All" ? "text-gray-100 rounded-lg bg-gray-500" : "text-white hover:scale-125"}`}
        >
          {location.pathname !== "/favorites" && species === "All" ? (
            <h1 className="cursor-default ">All</h1>
          ) : (
            <Link
              to={{
                pathname: `/characters/All`,
                search: finalSearch,
              }}
            >
              All
            </Link>
          )}
        </li>
        <li
          className={`px-2 cursor-pointer h-full font-fredoka text-lg font-light ${species === "human" ? "text-gray-100 rounded-lg bg-gray-500 " : "text-white  hover:scale-125"}`}
        >
          {location.pathname !== "/favorites" && species === "human" ? (
            <h1 className="cursor-default ">Humans</h1>
          ) : (
            <Link
              to={{
                pathname: "/characters/human",
                search: finalSearch,
              }}
            >
              Humans
            </Link>
          )}
        </li>
        <li
          className={`px-2 cursor-pointer h-full font-fredoka text-lg font-light ${species === "alien" ? "text-gray-100 rounded-lg bg-gray-500" : "text-white hover:scale-125"}`}
        >
          {location.pathname !== "/favorites" && species == "alien" ? (
            <h1 className="cursor-default">Aliens</h1>
          ) : (
            <Link
              to={{
                pathname: "/characters/alien",
                search: finalSearch,
              }}
            >
              Aliens
            </Link>
          )}
        </li>
        {favoritesExist && (
          <li
            className={`px-2 cursor-pointer h-full font-fredoka text-lg font-light ${location.pathname === "/favorites" ? "text-gray-100 rounded-lg bg-red-500 " : "text-red-500  hover:scale-125"}`}
          >
            {location.pathname === "/favorites" ? (
              <h1 className="cursor-default ">Favorites</h1>
            ) : (
              <Link
                to={{
                  pathname: "/favorites",
                }}
              >
                Favorites
              </Link>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};
