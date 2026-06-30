import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import App from "./App";
import "./index.css";
import Layout from "./layout";
import SocialDetails from "./pages/social/details";
import Home from "./pages/home";
import SocialDetailsV2 from "./pages/social-details";

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: App,
        },
      ],
    },
    {
      path: "/v2",
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: ":id",
          Component: SocialDetailsV2,
        },
      ],
    },
    {
      path: "/social/:id",
      Component: SocialDetails,
    },
  ],
  {
    basename: "/dancev2",
  },
);

const root = document.getElementById("root")!;

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
