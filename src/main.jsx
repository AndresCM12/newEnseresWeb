import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Root/App";
import "./index.scss";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import HomePage from "./pages/Home/HomePage";
import EmpresarialPage from "./pages/empresarial/EmpresarialPage";

const router = createBrowserRouter([
  {
    path: "",
    action: () => {
      redirect("/home");
    },
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
        errorElement: <NotFound />,
      },
      {
        path: "/empresarial",
        element: <EmpresarialPage />,
        errorElement: <NotFound />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
