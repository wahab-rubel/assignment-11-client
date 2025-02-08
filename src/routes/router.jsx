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
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/rooms",
        element: <Rooms />,
        loader: async () => {
          try {
            const response = await fetch(`http://localhost:8000/rooms`);
            if (!response.ok) throw new Error("Failed to fetch rooms");
            return response.json();
          } catch (error) {
            console.error("Error fetching rooms:", error);
            throw error;
          }
        }, 
      },
      { path: "/rooms/:id",
        element: <RoomDetails /> 
      },
      { path: "/my-bookings", 
        element: <PrivateRoute><MyBookings /></PrivateRoute> 
      },
      { path: "/RoomBookingForm/:id", 
        element: <RoomBookingForm /> 
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
    path: "/dashboard",
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
