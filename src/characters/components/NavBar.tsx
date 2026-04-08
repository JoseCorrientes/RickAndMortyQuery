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
    <div className="shrink-0 flex flex-col sm:flex-row items-center justify-between bg-black rounded-md border-2 border-gray-600 text-white p-2 sm:px-4 h-auto min-w-0 overflow-hidden ">
      <div className="flex shrink-0 w-auto justify-center sm:justify-start mb-2 sm:mb-0">
        <img
          src={RickAndMortyTitle2}
          className="h-7 sm:h-9 w-auto object-contain"
        />
      </div>

      <ul className="flex flex-wrap sm:flex-nowrap w-full sm:w-auto items-center justify-center gap-1 min-[400px]:gap-3 md:gap-4">
        <li
          className={`px-2 py-1 cursor-pointer font-fredoka text-sm sm:text-lg font-light transition-all ${species == "All" ? "text-gray-100 rounded-lg bg-gray-500" : "text-white hover:scale-110"}`}
        >
          {location.pathname !== "/favorites" && species === "All" ? (
            "All"
          ) : (
            <Link to={`/characters/All?${finalSearch}`}>All</Link>
          )}
        </li>

        <li
          className={`px-2 py-1 cursor-pointer font-fredoka text-sm sm:text-lg font-light transition-all ${species === "human" ? "text-gray-100 rounded-lg bg-gray-500" : "text-white hover:scale-110"}`}
        >
          {location.pathname !== "/favorites" && species === "human" ? (
            "Humans"
          ) : (
            <Link to={`/characters/human?${finalSearch}`}>Humans</Link>
          )}
        </li>

        <li
          className={`px-2 py-1 cursor-pointer font-fredoka text-sm sm:text-lg font-light transition-all ${species === "alien" ? "text-gray-100 rounded-lg bg-gray-500" : "text-white hover:scale-110"}`}
        >
          {location.pathname !== "/favorites" && species == "alien" ? (
            "Aliens"
          ) : (
            <Link to={`/characters/alien?${finalSearch}`}>Aliens</Link>
          )}
        </li>

        {favoritesExist && (
          <li
            className={`px-2 py-1 cursor-pointer font-fredoka text-sm sm:text-lg font-light transition-all ${location.pathname === "/favorites" ? "text-gray-100 rounded-lg bg-red-500" : "text-red-500 hover:scale-110"}`}
          >
            {location.pathname === "/favorites" ? (
              "Favorites"
            ) : (
              <Link to="/favorites">Favorites</Link>
            )}
          </li>
        )}
      </ul>
    </div>
  );
};
