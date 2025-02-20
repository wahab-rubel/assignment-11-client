import React from "react";
import { NavLink } from "react-router-dom";

const CardView = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((room) => (
        <div key={room._id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src={room.image} alt={room.name} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{room.name}</h2>
            <p className="text-gray-600 mt-2">{room.description}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="font-medium text-orange-500 text-lg">${room.price} / night</span>
              <div className="flex items-center space-x-1">
                <span className="text-gray-700 font-medium">{room.rating}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" stroke="currentColor">
                  <path fillRule="evenodd" d="M10 15l-3.16 1.663.604-3.528L5 9.512l3.56-.52L10 6l1.44 2.992L15 9.512l-2.44 3.623.604 3.528L10 15z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-gray-500 mt-1 text-sm">{room.totalReviews} reviews</div>

            {/* Flex container to align buttons side by side */}
            <div className="flex justify-between gap-4 mt-4">
              <NavLink to={`/RoomBookingForm/${room._id}`} className="py-2 px-4 w-full text-center bg-orange-400 text-white rounded-lg font-medium hover:bg-purple-600 transition">
                Book Now
              </NavLink>
              <NavLink to={`/RoomDetails/${room._id}`} className="py-2 px-4 w-full text-center bg-orange-800 text-white rounded-lg font-medium hover:bg-purple-900 transition">
                Rooms Details
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardView;
