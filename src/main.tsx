import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import "./index.css";


const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  },
],{
  basename: "/dancev2"
});

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
