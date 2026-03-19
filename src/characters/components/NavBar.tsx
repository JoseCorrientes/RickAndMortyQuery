import RickAndMortyTitle2 from "../assets/RickAndMortyTitle2.png";
import { Link, useLocation } from "react-router";

export const NavBar = () => {
  const location = useLocation();

  return (
    <div className="shrink-0 flex-col sm:flex-row sm:px-4 h-auto sm:h-auto py-2 gap-y-2 sm:gap-y-0 flex items-center  justify-start bg-black rounded-md border-2 border-gray-600 text-white">
      <div className="flex shrink-0 w-auto justify-center sm:justify-start">
        <img src={RickAndMortyTitle2} className="h-9 w-auto" />
      </div>
      <ul className="flex w-full items-center justify-center gap-4 pb-2 sm:pb-0">
        <li
          className={`px-2 cursor-pointer h-full font-fredoka text-lg font-light ${location.pathname === "/character" ? "text-gray-100 rounded-lg bg-gray-500" : "text-white hover:scale-125"}`}
        >
          {location.pathname === "/character" ? (
            <h1 className="cursor-default">All</h1>
          ) : (
            <Link to={"/character"}>All</Link>
          )}
        </li>
        <li
          className={`px-2 cursor-pointer h-full font-fredoka text-lg font-light ${location.pathname === "/character/human" ? "text-gray-100 rounded-lg bg-gray-500 " : "text-white  hover:scale-125"}`}
        >
          {location.pathname === "/character/human" ? (
            <h1 className="cursor-default">Humans</h1>
          ) : (
            <Link to={"/character/human"}>Humans</Link>
          )}
        </li>
        <li
          className={`px-2 cursor-pointer h-full font-fredoka text-lg font-light ${location.pathname === "/character/alien" ? "text-gray-100 rounded-lg bg-gray-500" : "text-white hover:scale-125"}`}
        >
          {location.pathname === "/character/alien" ? (
            <h1 className="cursor-default">Aliens</h1>
          ) : (
            <Link to={"/character/alien"}>Aliens</Link>
          )}
        </li>
      </ul>
    </div>
  );
};
