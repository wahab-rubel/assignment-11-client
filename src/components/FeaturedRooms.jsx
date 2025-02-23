import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import WhyChooseUs from "../pages/WhyChooseUs/WhyChooseUs";

const FeaturedRooms = () => {
  // State for storing room data
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch room data
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("https://assignment-11-server-green-nine.vercel.app/rooms");
        if (!response.ok) {
          throw new Error("Failed to fetch rooms");
        }
        const data = await response.json();
        console.log("Fetched Data:", data);
        
        if (Array.isArray(data)) {
          setRooms(data);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (error) {
        console.error("Error fetching rooms:", error);
        setError("Failed to load rooms. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Rooms</h2>

        {/* Display Error Message */}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Loading State */}
        {loading ? (
          <p className="text-center text-gray-500">Loading rooms...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.length > 0 ? (
              rooms.map((room) => (
                <div
                  key={room?._id}
                  className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col h-full"
                >
                  {/* Image Section */}
                  <div className="w-full h-60">
                    <img
                      src={room?.image || "https://via.placeholder.com/300"}
                      alt={room?.name || "Room Image"}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">
                      {room?.name || "No Name"}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow">
                      {room?.description?.length > 100
                        ? `${room?.description.slice(0, 100)}...`
                        : room?.description || "No description available"}
                    </p>

                    {/* Price Section */}
                    <p className="text-lg font-bold text-blue-500 mt-2">
                      {room?.price || "N/A"}
                    </p>

                    {/* Features List */}
                    <ul className="text-gray-500 text-sm mb-4">
                      {Array.isArray(room?.features) ? (
                        room.features.map((feature, index) => (
                          <li key={index} className="list-disc list-inside">
                            {feature}
                          </li>
                        ))
                      ) : (
                        <li className="list-disc list-inside">
                          No features available
                        </li>
                      )}
                    </ul>

                    {/* Buttons */}
                    <div className="flex gap-3 mt-auto">
                      <NavLink
                        to={`/RoomBookingForm/${room?._id}`}
                        className="py-2 px-4 w-full text-center bg-orange-800 text-white rounded-lg font-medium hover:bg-purple-900 transition"
                      >
                        Book Now
                      </NavLink>
                      <NavLink
                        to={`/RoomDetails/${room?._id}`}
                        className="py-2 px-4 w-full text-center bg-orange-800 text-white rounded-lg font-medium hover:bg-purple-900 transition"
                      >
                        Room Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">
                No featured rooms available.
              </p>
            )}
          </div>
        )}
      </div>

      {/* WhyChooseUs Section */}
      <WhyChooseUs />
    </section>
  );
};

export default FeaturedRooms;
