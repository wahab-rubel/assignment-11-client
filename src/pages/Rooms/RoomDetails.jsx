import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

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
        setRoom(data); // Set the room data
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
    return <div className="text-red-500 text-center mt-4">{error}</div>; // Display error message
  }

  if (!room) {
    return <div className="text-center mt-4">Loading...</div>; // Show loading message
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-6">{room.name}</h1>
      <div className="flex justify-center items-center gap-8">
        <div className="relative w-full max-w-3xl">
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105"
          />
        </div>
        <div className="max-w-lg space-y-4">
          <p className="text-xl text-gray-700">{room.description}</p>
          <p className="text-lg font-bold text-gray-900">${room.price}/night</p>
          <p className="text-lg text-gray-600">{room.location}</p>
          <div className="flex items-center">
            <span className="text-yellow-500 text-xl mr-2">{room.rating}</span>
            <span className="text-gray-500">{room.totalReviews} reviews</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <NavLink
          to={`/RoomBookingForm/${room._id}`}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-blue-700 transition duration-200"
        >
          Book Now
        </NavLink>
      </div>
    </div>
  );
};

export default RoomDetails;
