import React, { useEffect, useState } from "react";
import { Box, Stack } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import Layout from "../../layouts/AuthLayout";
import Navbar from "../../components/Navbar"; 
import Footer from "../../components/Footer"; 
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  FaHome,
  FaEnvelope,
  FaConciergeBell,
  FaBed,
  FaCalendarCheck,
  FaUser,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const { user, loading, logout } = useAuth();
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
   const fetchData = async () => {
     try {
       const res = await fetch("https://assignment-11-server-green-nine.vercel.app/rooms");
       const data = await res.json();
       console.log("Fetched Data:", data); 
       setRooms(data);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
     console.log("Rooms state after fetching:", rooms);
   };
 
   fetchData();
 }, []);
 

  if (loading) return <p>Loading...</p>;

  const data = [
    { name: "Jan", bookings: 10 },
    { name: "Feb", bookings: 20 },
    { name: "Mar", bookings: 15 },
    { name: "Apr", bookings: 30 },
    { name: "May", bookings: 25 },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Dashboard | My App</title>
        <meta
          name="description"
          content="User Dashboard with profile info, navigation, and statistics."
        />
      </Helmet>
      {/* Navbar */}
      <Navbar /> {/* Include Navbar here */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          {/* User Profile Section */}
          <Box
            flex={1}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <motion.div
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
              <h2 className="text-xl font-semibold mb-2">
                {user?.displayName || "Guest"}
              </h2>
              <p className="text-gray-600">
                {user?.email || "No email available"}
              </p>

              <button
                onClick={logout}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
            </motion.div>
          </Box>

          {/* Navigation Links Section */}
          <Box flex={1} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <FaHome className="text-blue-500" />
                <a href="/home" className="text-blue-500 hover:underline">
                  Home
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-blue-500" />
                <a href="/contact" className="text-blue-500 hover:underline">
                  Contact
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaConciergeBell className="text-blue-500" />
                <a href="/services" className="text-blue-500 hover:underline">
                  Services
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaBed className="text-blue-500" />
                <a href="/rooms" className="text-blue-500 hover:underline">
                  Rooms
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaCalendarCheck className="text-blue-500" />
                <a href="/booking" className="text-blue-500 hover:underline">
                  Booking
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaUser className="text-blue-500" />
                <a href="/profile" className="text-blue-500 hover:underline">
                  Full Profile
                </a>
              </li>
            </ul>
          </Box>

          {/* Statistics Graph Section */}
          <Box flex={1} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Booking Statistics</h3>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="bookings"
                  stroke="#3b82f6"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </Stack>

        {/* Map Section */}
        <Box className="w-full mt-6">
          <MapContainer
            center={[23.8103, 90.4125]}
            zoom={10}
            style={{ height: "400px", width: "100%", borderRadius: "8px" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[23.8103, 90.4125]}>
              <Popup>Dhaka, Bangladesh</Popup>
            </Marker>
          </MapContainer>
        </Box>
      </Box>
      {/* Footer */}
      <Footer /> {/* Include Footer here */}
    </Layout>
  );
};

export default Dashboard;
