import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AvailableFoods from "../pages/AvailableFoods";
import AddFoods from "../pages/AddFoods";
import ManageMyFoods from "../pages/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods />,
      },
      {
        path: "/add-foods",
        element: <AddFoods />,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods />,
      },
      {
        path: "/manage-my-foods",
        element: <ManageMyFoods />,
      },
      {
        path: "/my-food-request",
        element: <MyFoodRequest />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);
