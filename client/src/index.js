import React from "react";
import ReactDOM from "react-dom";
import Root from "./routes/root";
import "./index.css";
import "./App.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import ErrorPage from "./pages/errors/error-page";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/profile/:username",
        element: <Profile />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
