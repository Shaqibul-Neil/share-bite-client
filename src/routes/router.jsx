import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AvailableFoods from "../pages/AvailableFoods";
import AddFoods from "../pages/AddFoods";
import ManageMyFoods from "../pages/ManageMyFoods";
import MyFoodRequest from "../pages/MyFoodRequest";
import Home from "../pages/Home";
import PrivateRoutes from "./PrivateRoutes";
import FoodDetails from "../pages/FoodDetails";
import UpdateMyFood from "../pages/UpdateMyFood";
import AboutUs from "../pages/AboutUs";
import ErrorPage from "../pages/ErrorPage";
import TermsConditions from "../pages/TermsConditions";
import Contact from "../pages/Contact";
import { motion } from "framer-motion";
import InitialLoader from "../components/others/InitialLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    hydrateFallbackElement: (
      <motion.div
        className="flex justify-center items-center min-h-screen bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <InitialLoader />
      </motion.div>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://share-bite-server-brown.vercel.app/food-quantity"),
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/available-foods",
        loader: () => fetch("https://share-bite-server-brown.vercel.app/foods"),
        element: <AvailableFoods />,
      },
      {
        path: "/add-foods",
        element: (
          <PrivateRoutes>
            <AddFoods />
          </PrivateRoutes>
        ),
      },
      {
        path: "/food/:id",
        element: (
          <PrivateRoutes>
            <FoodDetails />
          </PrivateRoutes>
        ),
      },
      {
        path: "/manage-my-foods",
        element: (
          <PrivateRoutes>
            <ManageMyFoods />
          </PrivateRoutes>
        ),
      },
      {
        path: "/update-food/:id",
        element: (
          <PrivateRoutes>
            <UpdateMyFood />
          </PrivateRoutes>
        ),
      },
      {
        path: "/my-food-request",
        element: (
          <PrivateRoutes>
            <MyFoodRequest />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default router;
