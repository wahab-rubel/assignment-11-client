import React from "react";
import { NavLink } from "react-router-dom";

const TableView = ({ data }) => {
 return (
   <table className="table-auto w-full mt-4">
     <thead>
       <tr>
         <th className="px-4 py-2 border">Room Name</th>
         <th className="px-4 py-2 border">Price</th>
         <th className="px-4 py-2 border">Rating</th>
         <th className="px-4 py-2 border">Book Now</th>
       </tr>
     </thead>
     <tbody>
       {data.map((room) => (
         <tr key={room._id}>
           <td className="px-4 py-2 border">{room.name}</td>
           <td className="px-4 py-2 border">${room.price}</td>
           <td className="px-4 py-2 border">{room.rating}</td>
           <td className="px-4 py-2 border">
             <NavLink to={`/RoomBookingForm/${room._id}`} className="text-blue-500">Book Now</NavLink>
           </td>
         </tr>
       ))}
     </tbody>
   </table>
 );
};

export default TableView;
