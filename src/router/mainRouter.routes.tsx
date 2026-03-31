import { createBrowserRouter, Navigate } from "react-router";
import { GeneralLayout } from "../shared";
import { CharactersList, CharacterById, FavoritesList } from "../characters/";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"characters/All"} replace />,
      },
      {
        path: "/character/:id",
        element: <CharacterById />,
      },
      {
        path: "/characters/:species",
        element: <CharactersList />,
      },
      {
        path: "/favorites",
        element: <FavoritesList />,
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
