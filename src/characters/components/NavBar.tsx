import RickAndMortyTitle from "../assets/RickAndMortyTitle.png";
import { Link, useLocation } from "react-router";

export const NavBar = () => {
  const location = useLocation();

  return (
    <div className="px-4 h-10 flex items-center justify-start bg-black rounded-md border-2 border-gray-600 text-white">
      <div className="">
        <img src={RickAndMortyTitle} className="h-9" />
      </div>
      <ul className="flex items-center justify-center w-full gap-4">
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
