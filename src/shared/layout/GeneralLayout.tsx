import { Outlet, useParams } from "react-router";
import { NavBar, SearchBar } from "../../characters";
import { MainTitle } from "..";
import { Toaster } from "sonner";

export const GeneralLayout = () => {
  const { species } = useParams();

  const name =
    species === "All"
      ? "All Characters"
      : species === "human"
        ? "Human Characters"
        : species === "alien"
          ? "Alien Characters"
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
