import React from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../contexts/AuthContext";



const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-orange-500 text-white px-6 py-4 shadow-md sticky top-0 z-10">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-lg sm:text-xl font-bold">
          <NavLink to="/" className="hover:text-gray-200">
            HotelBooking 🏨
          </NavLink>
        </h1>

        {/* Links and User Actions */}
        <div className="flex items-center space-x-4">
          {/* Rooms Link */}
          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-semibold" : "hover:text-gray-200"
            }
          >
            Rooms
          </NavLink>

          {/* Authenticated User Actions */}
          {user ? (
            <div className="flex items-center space-x-2">
              <NavLink
                to="/my-bookings"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-gray-200"
                }
              >
                My Bookings
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-400 font-semibold"
                    : "hover:text-gray-200"
                }
              >
                DashBoard
              </NavLink>
              {/* User Profile */}
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt={user.displayName || "User"}
                  className="w-8 h-8 rounded-full border border-white"
                />
              )}
              <span className="font-medium hidden sm:inline">
                {user.displayName || "Guest"}
              </span>
              {/* Logout Button */}
              <button
                onClick={logout}
                className="bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            /* Login and Register Links */
            <div className="flex items-center space-x-2">
              <NavLink
                to="/auth/login"
                className="bg-green-500 px-3 py-1 rounded hover:bg-green-600"
              >
                Login
              </NavLink>
              <NavLink
                to="/auth/register"
                className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
};

export default Navbar;
