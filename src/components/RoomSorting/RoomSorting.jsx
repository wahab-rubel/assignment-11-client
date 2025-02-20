import { useState } from "react";

const RoomSorting = ({ rooms }) => {
  const [sortType, setSortType] = useState("");

  const sortedRooms = [...rooms].sort((a, b) => {
    if (sortType === "price") return a.price - b.price;
    if (sortType === "rating") return b.rating - a.rating;
    return 0;
  });

  return (
    <div>
      <label className="font-semibold mr-2">Sort by:</label>
      <select onChange={(e) => setSortType(e.target.value)} className="border p-2 rounded">
        <option value="">Default</option>
        <option value="price">Price (Low to High)</option>
        <option value="rating">Rating (High to Low)</option>
      </select>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {sortedRooms.map((room) => (
          <div key={room.id} className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">{room.name}</h3>
            <p>Price: ${room.price}/night</p>
            <p>Rating: {room.rating}⭐</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomSorting;
