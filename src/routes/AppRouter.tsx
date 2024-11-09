import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./../layouts/MainLayout";
// import ProfileLayout from "./layouts/ProfileLayout";
// pages:
import Home from "./../pages/Home";
import Categories from "./../pages/Categories";
import AboutUs from "./../pages/AboutUS";
import Products from "./../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "categories", element: <Categories /> },
      { path: "products/:prefix", element: <Products /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "login", element: <Login /> },
      { path: "sign-up", element: <Register /> },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
