import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../Pages/home";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);