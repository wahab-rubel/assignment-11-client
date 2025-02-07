import { NavLink } from "react-router-dom";
import Rooms from "../Rooms/Rooms";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      title: "Winter Getaway - 20% Off",
      description: "Book your stay during the winter season and save big!",
      image: "https://i.ibb.co.com/7thZZv6/4.jpg",
      validUntil: "Valid until: 31st December 2024",
    },
    {
      id: 2,
      title: "Family Vacation Special",
      description: "Get free breakfast for the whole family during your stay.",
      image: "https://i.ibb.co.com/DL5RvFV/8.jpg",
      validUntil: "Valid until: 15th January 2025",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Special Offers</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="h-92 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                <p className="text-gray-600 mb-4">{offer.description}</p>
                <p className="text-sm text-gray-500">{offer.validUntil}</p>
              </div>
              <NavLink
                to={`/RoomBookingForm/${Rooms.id}`}
                className="w-3/4 mt-4 py-2 inline-block text-center bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition"
              >
                Book Now
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
