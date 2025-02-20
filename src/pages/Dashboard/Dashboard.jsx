import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import Layout from "../../layouts/AuthLayout";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Dashboard = () => {
  const { user, loading, logout } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <Layout>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Dashboard | My App</title>
        <meta name="description" content="User Dashboard page with profile info and a map." />
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <motion.div 
          className="bg-white p-6 rounded-lg shadow-lg text-center w-96"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-500"
            />
          )}
          <h2 className="text-xl font-semibold mb-2">{user?.displayName || "Guest"}</h2>
          <p className="text-gray-600">{user?.email || "No email available"}</p>

          <button
            onClick={logout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Logout
          </button>
        </motion.div>

        {/* Map Section */}
        <div className="w-full max-w-2xl mt-6">
          <MapContainer center={[23.8103, 90.4125]} zoom={10} className="h-80 w-full rounded-lg">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[23.8103, 90.4125]}>
              <Popup>Dhaka, Bangladesh</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
