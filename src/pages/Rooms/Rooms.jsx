import React from "react";
import { useEffect, useState } from "react";
import CardView from "../../components/CardView/CardView";
import TableView from "../../components/TableView/TableView";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [viewMode, setViewMode] = useState("card"); 

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("https://assignment-11-server-green-nine.vercel.app/rooms");
        if (!response.ok) {
          throw new Error("Failed to fetch rooms");
        }
        const data = await response.json();
        setRooms(data);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-3xl font-bold text-center mb-6">Available Rooms</h1>

      {/* Toggle Button for View Mode */}
      <button
        onClick={() => setViewMode(viewMode === "card" ? "table" : "card")}
        className="bg-blue-500 text-white p-2 rounded mb-6"
      >
        Toggle View
      </button>

      {/* Conditional Rendering Based on View Mode */}
      {viewMode === "card" ? (
        <CardView data={rooms} />
      ) : (
        <TableView data={rooms} />
      )}
    </div>
  );
};

export default Rooms;