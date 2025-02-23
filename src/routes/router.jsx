import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../routes/PrivateRoute";

// Import Pages
import Home from "../pages/Home/Home";
import Rooms from "../pages/Rooms/Rooms";
import RoomDetails from "../pages/Rooms/RoomDetails";
import MyBookings from "../pages/Bookings/MyBookings";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import NotFound from "../pages/NotFound/NotFound";
import RoomBookingForm from "../pages/Bookings/RoomBookingForm";
import Profile from "../components/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/rooms",
        element: <Rooms />,
        loader: async () => fetch("https://assignment-11-server-green-nine.vercel.app/rooms"),
      },
      { path: "/RoomDetails/:id", element: <RoomDetails /> },
      { path: "/RoomBookingForm/:id", element: <RoomBookingForm /> },
      {
        path: "/my-bookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/Profile",
    element: (
      <PrivateRoute>
        <Profile></Profile>
      </PrivateRoute>
    ),
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
