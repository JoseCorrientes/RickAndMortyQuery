import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router/dom";
import { mainRouter } from "./router";
import { TanStackProvider } from "./plugins";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TanStackProvider>
      <RouterProvider router={mainRouter} />
    </TanStackProvider>
    ,
  </StrictMode>,
);
