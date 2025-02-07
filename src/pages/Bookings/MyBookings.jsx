import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const token = localStorage.getItem("jwt_token");

  useEffect(() => {
    if (!token) {
      toast.error("Please log in to view your bookings.");
      return;
    }

    // Try to fetch bookings from the API
    const fetchBookings = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/my-bookings", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log("Bookings Data:", data);
          setBookings(data); // Set fetched bookings
        } else {
          toast.error("Failed to fetch bookings. Please try again.");
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
        toast.error("Something went wrong. Please try again later.");
      }
    };

    // Call the function to fetch bookings
    fetchBookings();

    // Try fetching from localStorage if API fetch fails
    const storedBookings = JSON.parse(localStorage.getItem("myBookings"));
    if (storedBookings) {
      setBookings(storedBookings);
    } else if (bookings.length === 0) {
      toast.info("You have no bookings yet.");
    }
  }, [token, bookings]); // Dependency array

  return (
    <div>
      <h1>My Bookings</h1>
      {bookings.length === 0 ? (
        <p>You have no bookings yet.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              <p>Room Type: {booking.roomType}</p>
              <p>Check-in: {booking.checkInDate}</p>
              <p>Check-out: {booking.checkOutDate}</p>
              {/* Add more details here */}
              <pre>{JSON.stringify(booking, null, 2)}</pre>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyBookings;
