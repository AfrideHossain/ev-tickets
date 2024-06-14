import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import PrivateRoute from "./secure/PrivateRoute";
import UserProfile from "../pages/Profile/UserProfile";
import EditUserProfile from "../pages/Profile/EditUserProfile";
import AddEvent from "../pages/Events/AddEvent";
import AdminRoute from "./secure/AdminRoute";
import EventDetails from "../pages/Events/EventDetails";
import Bookings from "../pages/Bookings/Bookings";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomeLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "user",
        element: <UserProfile />,
        loader: () =>
          fetch(`${import.meta.env.VITE_BASE_URL}/profile`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }),
      },
      {
        path: "editprofile",
        element: <EditUserProfile />,
      },
      {
        path: "addevent",
        element: (
          <AdminRoute>
            <AddEvent />
          </AdminRoute>
        ),
      },
      {
        path: "event/:id",
        element: <EventDetails />,
        loader: async ({ params }) =>
          await fetch(`${import.meta.env.VITE_BASE_URL}/getEvent/${params.id}`),
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
