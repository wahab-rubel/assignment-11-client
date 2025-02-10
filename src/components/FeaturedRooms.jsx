import React from "react";
import { NavLink } from "react-router-dom";
import WhyChooseUs from "../pages/WhyChooseUs/WhyChooseUs";

const FeaturedRooms = () => {
  // Example room data
  const rooms = [
    {
      id: 1,
      name: "Deluxe Room",
      description:
        "A luxurious room with stunning views and premium amenities.",
      image: "https://i.ibb.co.com/9pQqhKV/2.jpg",
      price: "$120/night",
      features: ["Free WiFi", "Air Conditioning", "King Bed"],
    },
    {
      id: 2,
      name: "Family Suite",
      description: "Spacious suite perfect for families with modern comforts.",
      image: "https://i.ibb.co.com/vhrZGv9/1.jpg",
      price: "$180/night",
      features: ["2 Queen Beds", "Mini Kitchen", "Balcony"],
    },
    {
      id: 3,
      name: "Ocean View Room",
      description: "Enjoy breathtaking ocean views from your private balcony.",
      image: "https://i.ibb.co.com/MCVphQN/2.jpg",
      price: "$150/night",
      features: ["Sea View", "Free Breakfast", "Bathtub"],
    },
    {
      id: 4,
      name: "Standard Room",
      description:
        "A cozy room with all the essentials for a comfortable stay.",
      image: "https://i.ibb.co.com/z8mp9b4/3.jpg",
      price: "$90/night",
      features: ["Queen Bed", "Free Parking", "Smart TV"],
    },
    {
      id: 5,
      name: "Presidential Suite",
      description: "Experience ultimate luxury with exclusive amenities.",
      image: "https://i.ibb.co.com/7thZZv6/4.jpg",
      price: "$300/night",
      features: ["Private Pool", "Jacuzzi", "24/7 Butler"],
    },
    {
      id: 6,
      name: "Honeymoon Suite",
      description: "Romantic and elegant suite, ideal for couples.",
      image: "https://i.ibb.co.com/DL5RvFV/8.jpg",
      price: "$200/night",
      features: ["King Bed", "Rose Decor", "Champagne"],
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Rooms</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              {/* Room Image */}
              <img
                src={room.image}
                alt={room.name}
                className="h-92 w-full object-cover"
              />
              {/* Room Details */}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                <p className="text-lg font-bold text-blue-500 mb-2">
                  {room.price}
                </p>
                {/* Features */}
                <ul className="text-gray-500 text-sm mb-4">
                  {room.features.map((feature, index) => (
                    <li key={index} className="list-disc list-inside">
                      {feature}
                    </li>
                  ))}
                </ul>
                {/* Book Now Button */}
                <div className="flex gap-3">
                <NavLink
                  to={`/RoomBookingForm/${room.id}`}
                  className="py-2 px-4 w-full text-center bg-orange-800 text-white rounded-lg font-medium hover:bg-purple-900 transition"
                >
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
      </div>
      <WhyChooseUs></WhyChooseUs>
    </section>
  );
};

export default FeaturedRooms;
