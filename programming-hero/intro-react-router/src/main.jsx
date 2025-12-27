import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root.jsx";
import About from "./components/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <div>Hello world from inside React Router</div>,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "mobiles",
        element: <div>All android mobiles here</div>,
      },
      {
        path: "laptops",
        element: <div>All laptops here</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
