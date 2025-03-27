import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import Router from "./routes/Router.jsx";
import { Toaster } from "react-hot-toast"; // import Toaster
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <RouterProvider router={Router} />
  </StrictMode>
);
