import { createBrowserRouter, Navigate } from "react-router";
import { GeneralLayout } from "../shared";
import {
  CharactersAlienList,
  CharactersHumanList,
  CharactersList,
  CharacterById,
} from "../characters/";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <GeneralLayout />,
    children: [
      {
        path: "",
        element: <Navigate to={"character"} />,
      },
      {
        path: "character",
        element: <CharactersList />,
      },
      {
        path: "/character/:id",
        element: <CharacterById />,
      },

      {
        path: "/character/alien",
        element: <CharactersAlienList />,
      },
      {
        path: "character/human",
        element: <CharactersHumanList />,
      },
      {
        path: "*",
        element: <Navigate to={"/"} />,
      },
    ],
  },
]);
