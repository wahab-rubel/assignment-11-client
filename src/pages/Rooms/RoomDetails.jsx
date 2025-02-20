import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import MapComponent from "../../components/MapComponent/MapComponent"; 

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/rooms/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch room details");
        }
        const data = await response.json();
        setRoom(data);
      } catch (err) {
        console.error("Error fetching room details:", err);
        setError(
          err.message || "Unable to load room details. Please try again later."
        );
      }
    };
    fetchRoomDetails();
  }, [id]);

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  if (!room) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Helmet for dynamic title and meta tags */}
      <Helmet>
        <title>{room.name} - Hotel Booking</title>
        <meta name="description" content={room.description} />
      </Helmet>

      {/* Animated Heading */}
      <motion.h1
        className="text-4xl font-extrabold text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {room.name}
      </motion.h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Room Image with Animation */}
        <motion.div
          className="relative w-full max-w-3xl"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </motion.div>

        {/* Room Details */}
        <motion.div
          className="max-w-lg space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl text-gray-700">{room.description}</p>
          <p className="text-lg font-bold text-gray-900">${room.price}/night</p>
          <p className="text-lg text-gray-600">{room.location}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 text-xl mr-2">{room.rating}</span>
            <span className="text-gray-500">{room.totalReviews} reviews</span>
          </div>
        </motion.div>
      </div>

      {/* Map Section with Animation */}
      <motion.div
        className="mt-8 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <MapComponent latitude={room.latitude} longitude={room.longitude} />
      </motion.div>

      {/* Book Now Button */}
      <motion.div
        className="flex justify-center mt-6"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <NavLink
          to={`/RoomBookingForm/${room._id}`}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-blue-700 transition duration-200"
        >
          Book Now
        </NavLink>
      </motion.div>
    </div>
  );
};

export default RoomDetails;
