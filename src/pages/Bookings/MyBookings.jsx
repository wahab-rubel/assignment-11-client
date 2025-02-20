import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const RoomBooking = ({ checkIn, checkOut }) => {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("jwt_token");

  useEffect(() => {
    if (!token) {
      toast.error("Please log in to view your bookings.");
      return;
    }

    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/my-bookings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setBookings(data);
        } else {
          toast.error("Failed to fetch bookings. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
        toast.error("Something went wrong. Please try again later.");
      }
    };

    fetchBookings();
  }, [token]);

  const handleBooking = async () => {
    if (!checkIn || !checkOut) {
      toast.error("Please select check-in and check-out dates.");
      return;
    }

    const bookingDetails = {
      checkInDate: checkIn.toISOString().split("T")[0],
      checkOutDate: checkOut.toISOString().split("T")[0],
      roomType: "Deluxe Room",
    };

    try {
      const response = await fetch("http://localhost:8000/api/book-room", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookingDetails),
      });

      if (response.ok) {
        const newBooking = await response.json();
        setBookings([...bookings, newBooking]);
        toast.success(
          `Room booked from ${checkIn.toDateString()} to ${checkOut.toDateString()}`
        );
      } else {
        toast.error("Failed to book room. Please try again.");
      }
    } catch (error) {
      console.error("Error booking room:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="mt-4 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Confirm Your Booking</h2>

      <button
        onClick={handleBooking}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default RoomBooking;
