import { Outlet, useLocation } from "react-router";
import { NavBar, SearchBar } from "../../characters";
import { MainTitle } from "..";
import { Toaster } from "sonner";

export const GeneralLayout = () => {
  const location = useLocation();

  const name =
    location.pathname === "/character"
      ? "All Characters"
      : location.pathname === "/character/alien"
        ? "Alien Characters"
        : location.pathname === "/character/human"
          ? "Human Characters"
          : "Character Card";

  return (
    <div className="flex-col justify-center p-2 bg-black w-screen min-h-screen">
      <NavBar />
      <MainTitle name={name} />

      {name !== "Character Card" && <SearchBar />}
      <Outlet />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            fontSize: "25px",
            fontWeight: "bold",
            border: "2px solid red",
            color: "rgb(131, 9, 9)",
            alignItems: "center",
          },
        }}
      />
    </div>
  );
};
