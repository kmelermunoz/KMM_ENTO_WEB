import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App.js";
import Curriculum from "./curriculum";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MenuNavegacio from "./menuNavegacio";
import Hobbies from "./hobbies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "curriculum",
    element: <Curriculum />,
  },
  {
    path: "hobbies",
    element: <Hobbies />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MenuNavegacio />
    <RouterProvider router={router} />
  </React.StrictMode>
);
