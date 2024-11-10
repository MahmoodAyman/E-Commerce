import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./../layouts/MainLayout";
// import ProfileLayout from "./layouts/ProfileLayout";
// pages:
import Home from "./../pages/Home";
import Categories from "./../pages/Categories";
import AboutUs from "./../pages/AboutUS";
import Products from "./../pages/Products";
import Product from "./../pages/Product";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "products/:prefix",
        element: <Product />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Invalid parameter", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <Register />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
