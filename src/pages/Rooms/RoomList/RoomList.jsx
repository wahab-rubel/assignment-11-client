import React from "react";
import { Link } from 'react-router-dom';

const RoomList = ({ rooms }) => (
  <div>
    {rooms.map(room => (
      <div key={room._id}>
        <h2>{room.name}</h2>
        <p>Price: ${room.price}</p>
        <Link to={`/rooms/${room._id}`}>View Details</Link>
      </div>
    ))}
  </div>
);

export default RoomList;
