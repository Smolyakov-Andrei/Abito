/* eslint-disable no-use-before-define */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Home } from "./pages/HOME";
import { Product } from "./pages/Product";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./layouts/Layout";
import { NotFound } from "./pages/NotFound";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/404",
        element: <NotFound />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
