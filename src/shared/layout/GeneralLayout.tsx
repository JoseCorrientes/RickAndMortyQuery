import { Outlet, useLocation } from "react-router";
import { NavBar, SearchBar } from "../../characters";
import { MainTitle } from "..";
// import { useState } from "react";

export const GeneralLayout = () => {
  const location = useLocation();

  const name =
    location.pathname === "/character"
      ? "All Characters"
      : location.pathname === "/character/alien"
        ? "Alien Characters"
        : "Human Characters";

  return (
    <div className="p-2 bg-black w-screen min-h-screen">
      <NavBar />
      <MainTitle name={name} />

      <SearchBar />
      <Outlet />
    </div>
  );
};
