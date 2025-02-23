import React from "react";
import { motion } from "framer-motion";
import { useAuthContext } from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; 

const Profile = () => {
  const { user, logout } = useAuthContext();

  if (!user) {
    return (
      <div className="text-center text-xl text-gray-600 mt-20">
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto mt-10 p-5 shadow-lg rounded-lg bg-white"
      >
        <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">
          Welcome, {user.displayName || "User"}!
        </h1>

        {/* User Profile Picture */}
        {user.photoURL && (
          <motion.img
            src={user.photoURL}
            alt="Profile"
            className="w-28 h-28 rounded-full mx-auto mb-4"
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}

        <p className="text-xl text-gray-800 mb-4">Name: {user.displayName}</p>
        <p className="text-gray-600 mb-4">Email: {user.email}</p>

        {/* User Info */}
        <div className="bg-gray-50 p-4 rounded-lg mb-4 shadow-sm">
          <h2 className="font-semibold text-gray-800 mb-2">Your Information:</h2>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Name:</strong> {user.displayName || "N/A"}</li>
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Photo URL:</strong> {user.photoURL || "N/A"}</li>
            {/* Add more user-related information if available */}
          </ul>
        </div>

        {/* Log Out Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={logout}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition"
        >
          Log Out
        </motion.button>
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Profile;
