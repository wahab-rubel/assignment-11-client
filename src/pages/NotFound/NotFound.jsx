import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navbar remains intact */}
      <nav className="bg-orange-500 text-white px-6 py-4 shadow-md sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg sm:text-xl font-bold">
            <Link to="/" className="hover:text-gray-200">
              HotelBooking 🏨
            </Link>
          </h1>
        </div>
      </nav>

      {/* Main Content for Not Found Page */}
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center p-6 bg-white shadow-md rounded-lg max-w-md mx-auto">
          <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
          <p className="text-xl font-semibold text-gray-700 mb-6">
            Oops! The page you're looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* Footer remains intact */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 HotelBooking. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default NotFound;
